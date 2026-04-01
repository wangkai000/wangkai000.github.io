<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

// ============================================
// Feature Switches - 可自行开关这些效果
// ============================================
const CONFIG = {
  enableAurora: true, // 极光效果
  enableClouds: true, // 多层云雾
  enableCity: true, // 城市天际线
  enableFloatingObjects: true, // 悬浮几何体
  enableRandomDayNight: true, // 随机日夜模式（关闭则默认夜间）
  sunHeight: 50, // 太阳高度（y轴），默认40比地平线高
  sunZ: -350, // 太阳深度位置
  // 夜间天空颜色
  nightSkyTop: 0x0A0A1A,
  nightSkyMiddle: 0x1A0A2E,
  nightSkyBottom: 0xFF4500,
  // 白天天空颜色
  daySkyTop: 0x87CEEB,
  daySkyMiddle: 0x4A90D9,
  daySkyBottom: 0x87CEEB,
  // 城市楼房参数
  cityBuildingCount: 10, // 楼房数量
  cityBuildingWidthMin: 5,
  cityBuildingWidthMax: 20,
  cityBuildingHeightMin: 20,
  cityBuildingHeightMax: 100,
  cityBuildingDepthMin: 5,
  cityBuildingDepthMax: 20,
  cityWindowCountMin: 2,
  cityWindowCountMax: 10,
  cityWindowProbability: 0.5, // 窗户出现概率
  // 太阳参数
  sunSize: 50, // 太阳主体大小
  sunGlowSizes: [100, 80, 45], // 太阳光晕从小到大
  sunStripeGap: 0, // 太阳条纹缝隙（0为纯色太阳，不闪烁）
  // 地平线网格参数
  gridDivisions: 80, // 网格线条个数
  gridColor1: 0xFF00FF, // 主线条颜色
  gridColor2: 0x00FFFF, // 副线条颜色
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const showToast = ref(false)
let animationId: number
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let auroraMaterial: THREE.ShaderMaterial | null = null
let sunMaterial: THREE.ShaderMaterial | null = null
const floatingObjects: THREE.Mesh[] = []

// Mouse parallax state
const mouse = { x: 0, y: 0 }
const targetRotation = { x: 0, y: 0 }
const currentRotation = { x: 0, y: 0 }

// Day/Night mode
const isNightMode = ref(true)

function initThree() {
  const canvas = canvasRef.value
  if (!canvas)
    return

  // Random day/night
  isNightMode.value = CONFIG.enableRandomDayNight
    ? Math.random() > 0.3
    : true

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(
    isNightMode.value ? 0x0A0A1A : 0x1A2A4A,
    0.0015,
  )

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )
  camera.position.set(0, 2, 0)
  camera.lookAt(0, 10, -100)

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Sky gradient dome
  const skyGeometry = new THREE.SphereGeometry(500, 32, 32)
  const skyMaterial = new THREE.ShaderMaterial({
    uniforms: {
      topColor: {
        value: new THREE.Color(
          isNightMode.value ? CONFIG.nightSkyTop : CONFIG.daySkyTop,
        ),
      },
      middleColor: {
        value: new THREE.Color(
          isNightMode.value
            ? CONFIG.nightSkyMiddle
            : CONFIG.daySkyMiddle,
        ),
      },
      bottomColor: {
        value: new THREE.Color(
          isNightMode.value
            ? CONFIG.nightSkyBottom
            : CONFIG.daySkyBottom,
        ),
      },
      offset: { value: 0.4 },
      exponent: { value: 0.6 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 middleColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition).y;
        vec3 color;
        if (h > offset) {
          color = mix(middleColor, topColor, pow((h - offset) / (1.0 - offset), exponent));
        } else {
          color = mix(bottomColor, middleColor, pow(h / offset, exponent * 0.5));
        }
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    side: THREE.BackSide,
  })
  const sky = new THREE.Mesh(skyGeometry, skyMaterial)
  scene.add(sky)

  // Stars (only in night mode)
  if (isNightMode.value) {
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 1500
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 0.6
      const r = 400
      positions[i] = r * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = r * Math.cos(phi) + 50
      positions[i + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    starsGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    )
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 1.5,
      transparent: true,
      opacity: 0.9,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)
  }

  // Aurora (only in night mode, behind mountains and city)
  if (CONFIG.enableAurora && isNightMode.value) {
    const auroraGeometry = new THREE.PlaneGeometry(600, 100, 1, 20)
    auroraMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x00FF88) },
        color2: { value: new THREE.Color(0x00FFFF) },
        color3: { value: new THREE.Color(0xFF00FF) },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vY;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.y += sin(pos.x * 0.02 + time) * 10.0;
          pos.y += cos(pos.x * 0.03 + time * 1.5) * 5.0;
          vY = pos.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec2 vUv;
        varying float vY;
        void main() {
          float wave = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
          float alpha = (1.0 - vUv.y) * 0.3 * wave;
          vec3 color = mix(color1, color2, wave);
          color = mix(color, color3, sin(vUv.x * 5.0 + time * 2.0) * 0.5 + 0.5);
          gl_FragColor = vec4(color, alpha * 0.5);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    const aurora = new THREE.Mesh(auroraGeometry, auroraMaterial)
    aurora.position.set(0, 120, -350)
    aurora.rotation.x = -0.3
    scene.add(aurora)
  }

  // Cloud layers
  if (CONFIG.enableClouds) {
    for (let layer = 0; layer < 3; layer++) {
      const cloudGroup = new THREE.Group()
      const cloudCount = 8 + layer * 4
      for (let i = 0; i < cloudCount; i++) {
        const cloudGeometry = new THREE.PlaneGeometry(
          80 + Math.random() * 120,
          20 + Math.random() * 30,
          1,
          1,
        )
        const cloudMaterial = new THREE.ShaderMaterial({
          uniforms: {
            color: {
              value: new THREE.Color(
                isNightMode.value ? 0x2A1A4A : 0xFFFFFF,
              ),
            },
            opacity: { value: 0.1 - layer * 0.02 },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 color;
            uniform float opacity;
            varying vec2 vUv;
            void main() {
              float alpha = opacity * (1.0 - abs(vUv.x - 0.5) * 2.0);
              alpha *= (1.0 - abs(vUv.y - 0.5) * 2.0);
              gl_FragColor = vec4(color, alpha * 0.3);
            }
          `,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
        cloud.position.set(
          (Math.random() - 0.5) * 600,
          60 + layer * 30 + Math.random() * 20,
          -100 - layer * 50 - Math.random() * 50,
        )
        cloud.rotation.z = (Math.random() - 0.5) * 0.2
        cloudGroup.add(cloud)
      }
      scene.add(cloudGroup)
    }
  }

  // Create grid floor
  const gridSize = 800
  const gridHelper = new THREE.GridHelper(
    gridSize,
    CONFIG.gridDivisions,
    CONFIG.gridColor1,
    CONFIG.gridColor2,
  )
  gridHelper.position.y = 0
  scene.add(gridHelper)

  // City skyline - z: -200 (IN FRONT of sun)
  if (CONFIG.enableCity) {
    const cityGroup = new THREE.Group()
    const buildingCount = CONFIG.cityBuildingCount
    for (let i = 0; i < buildingCount; i++) {
      const width
                = CONFIG.cityBuildingWidthMin
                + Math.random()
                * (CONFIG.cityBuildingWidthMax - CONFIG.cityBuildingWidthMin)
      const height
                = CONFIG.cityBuildingHeightMin
                + Math.random()
                * (CONFIG.cityBuildingHeightMax
                - CONFIG.cityBuildingHeightMin)
      const depth
                = CONFIG.cityBuildingDepthMin
                + Math.random()
                * (CONFIG.cityBuildingDepthMax - CONFIG.cityBuildingDepthMin)
      const buildingGeometry = new THREE.BoxGeometry(
        width,
        height,
        depth,
      )
      const buildingMaterial = new THREE.MeshBasicMaterial({
        color: isNightMode.value ? 0x0A0A2A : 0x2A3A5A,
        transparent: true,
        opacity: 0.9,
      })
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
      building.position.set(
        -200 + i * 15 + Math.random() * 10,
        height / 2,
        -180 - Math.random() * 30,
      )
      cityGroup.add(building)

      // Window lights (night only)
      if (
        isNightMode.value
        && Math.random() < CONFIG.cityWindowProbability
      ) {
        const windowCount
                    = CONFIG.cityWindowCountMin
                    + Math.floor(
                      Math.random()
                      * (CONFIG.cityWindowCountMax
                      - CONFIG.cityWindowCountMin),
                    )
        for (let w = 0; w < windowCount; w++) {
          const windowGeometry = new THREE.PlaneGeometry(1, 1)
          const windowMaterial = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.5 ? 0xFF00FF : 0x00FFFF,
            transparent: true,
            opacity: 0.8,
          })
          const windowMesh = new THREE.Mesh(
            windowGeometry,
            windowMaterial,
          )
          windowMesh.position.set(
            (Math.random() - 0.5) * width * 0.8,
            (Math.random() - 0.5) * height * 0.8,
            depth / 2 + 0.1,
          )
          building.add(windowMesh)
        }
      }
    }
    scene.add(cityGroup)
  }

  // Sun group - 确保渲染顺序一致
  const sunGroup = new THREE.Group()
  sunGroup.renderOrder = 999

  // Sun glow layers (outer to inner)
  const glowColors = [0xFF4500, 0xFF6B00, 0xFF00FF]
  glowColors.forEach((color, i) => {
    const glowGeometry = new THREE.CircleGeometry(
      CONFIG.sunGlowSizes[i],
      64,
    )
    const glowMaterial = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.15 - i * 0.04,
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.set(0, CONFIG.sunHeight, CONFIG.sunZ - i * 0.5)
    sunGroup.add(glow)
  })

  // Sun/Orb with stripes
  const sunGeometry = new THREE.CircleGeometry(CONFIG.sunSize, 64)
  sunMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0xFF6B00) },
      color2: { value: new THREE.Color(0xFF00FF) },
      time: { value: 0 },
      stripeGap: { value: CONFIG.sunStripeGap },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      uniform float time;
      uniform float stripeGap;
      varying vec2 vUv;
      void main() {
        vec3 color = mix(color1, color2, 0.5);
        float alpha = 1.0;
        if (stripeGap > 0.0) {
          float stripe = sin(vUv.y * 40.0 + time) * 0.5 + 0.5;
          alpha = smoothstep(0.5 - stripeGap, 0.5 + stripeGap, stripe);
        }
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
  })
  const sun = new THREE.Mesh(sunGeometry, sunMaterial)
  sun.position.set(0, CONFIG.sunHeight, CONFIG.sunZ)
  sunGroup.add(sun)

  scene.add(sunGroup)

  // Mountains
  const mountainMaterial = new THREE.MeshBasicMaterial({
    color: isNightMode.value ? 0x1A0A2E : 0x3A4A6A,
  })
  for (let i = 0; i < 12; i++) {
    const width = 80 + Math.random() * 150
    const height = 40 + Math.random() * 60
    const mountainGeometry = new THREE.ConeGeometry(width, height, 4)
    const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial)
    mountain.position.set(
      -350 + i * 70 + Math.random() * 40,
      height / 2,
      -260 - Math.random() * 60,
    )
    mountain.rotation.y = Math.random() * Math.PI
    scene.add(mountain)
  }

  // Floating geometric objects
  if (CONFIG.enableFloatingObjects) {
    const objectCount = 15
    const geometries = [
      new THREE.TetrahedronGeometry(3),
      new THREE.OctahedronGeometry(3),
      new THREE.IcosahedronGeometry(2.5),
      new THREE.TorusGeometry(2, 0.5, 8, 16),
    ]
    for (let i = 0; i < objectCount; i++) {
      const geometry
                = geometries[Math.floor(Math.random() * geometries.length)]
      const material = new THREE.MeshBasicMaterial({
        color: [0xFF00FF, 0x00FFFF, 0xFF6B00, 0x00FF88][
          Math.floor(Math.random() * 4)
        ],
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        (Math.random() - 0.5) * 300,
        20 + Math.random() * 60,
        -50 - Math.random() * 100,
      )
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      )
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatSpeed: 0.5 + Math.random() * 1,
        floatOffset: Math.random() * Math.PI * 2,
        originalY: mesh.position.y,
      }
      floatingObjects.push(mesh)
      scene.add(mesh)
    }
  }

  // Ambient light
  const ambientLight = new THREE.AmbientLight(0x202030, 0.5)
  scene.add(ambientLight)

  animate()
}

function animate() {
  animationId = requestAnimationFrame(animate)
  const time = performance.now() * 0.001

  // Update aurora
  if (auroraMaterial) {
    auroraMaterial.uniforms.time.value = time
  }

  // Update sun stripes
  if (sunMaterial) {
    sunMaterial.uniforms.time.value = time
  }

  // Animate floating objects
  floatingObjects.forEach((obj) => {
    obj.rotation.x += obj.userData.rotSpeedX
    obj.rotation.y += obj.userData.rotSpeedY
    obj.position.y
            = obj.userData.originalY
            + Math.sin(
              time * obj.userData.floatSpeed + obj.userData.floatOffset,
            )
            * 3
  })

  // Smooth mouse parallax
  const smoothing = 0.05
  currentRotation.x += (targetRotation.x - currentRotation.x) * smoothing
  currentRotation.y += (targetRotation.y - currentRotation.y) * smoothing

  // Apply parallax to camera
  camera.rotation.y = -currentRotation.y * 0.2
  camera.rotation.x = -currentRotation.x * 0.1

  // Slowly decay rotation back to center
  targetRotation.x *= 0.995
  targetRotation.y *= 0.995

  renderer.render(scene, camera)
}

function handleResize() {
  if (!camera || !renderer)
    return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function handleMouseMove(e: MouseEvent) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1
  targetRotation.x = mouse.y
  targetRotation.y = mouse.x
}

function showDeveloping() {
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2000)
}

onMounted(() => {
  initThree()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  if (renderer)
    renderer.dispose()
})
</script>

<template>
  <div class="web3-container fixed inset-0 overflow-hidden bg-[#0a0a1a]">
    <canvas ref="canvasRef" class="webgl-canvas absolute inset-0 w-full h-full" />
    <div class="web3-overlay absolute inset-0 flex items-center justify-center pointer-events-none">
      <Transition name="toast">
        <div v-if="showToast" class="toast fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-pink-500/90 text-white text-lg rounded-lg shadow-[0_0_40px_rgba(255,0,255,0.8)] z-[200]">
          正在开发中...
        </div>
      </Transition>
      <div class="content text-center z-[100] pointer-events-auto">
        <h1 class="title text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide leading-tight mb-4" style="font-family: 'Orbitron', 'Rajdhani', system-ui, sans-serif; text-shadow: 0 0 40px rgba(255, 0, 255, 0.8), 0 0 80px rgba(0, 255, 255, 0.5);">
          Welcome to Kai's web3 world
        </h1>
        <p class="subtitle text-base md:text-lg lg:text-xl font-medium text-white/80 tracking-widest leading-relaxed mb-8" style="font-family: 'Rajdhani', 'Exo 2', system-ui, sans-serif;">
          {{
            isNightMode
              ? "Explore the decentralized future"
              : "Embrace the digital dawn"
          }}
        </p>
        <button class="explore-btn inline-block px-12 py-4 mb-8 text-base font-semibold text-[#0a0a1a] rounded-full cursor-pointer tracking-widest transition-all duration-300 hover:scale-105" style="background: linear-gradient(135deg, #ff00ff, #00ffff); box-shadow: 0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3);" @click="showDeveloping">
          More
        </button>
        <div class="tags flex flex-wrap justify-center gap-4 px-2">
          <!-- <span class="tag px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 border-2 border-cyan-400 tracking-wide whitespace-nowrap" style="font-family: 'Rajdhani', 'Exo 2', system-ui, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);">News</span>
          <span class="tag px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 border-2 border-cyan-400 tracking-wide whitespace-nowrap" style="font-family: 'Rajdhani', 'Exo 2', system-ui, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);">DeFi</span>
          <span class="tag px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 border-2 border-cyan-400 tracking-wide whitespace-nowrap" style="font-family: 'Rajdhani', 'Exo 2', system-ui, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);">NFT</span>
          <span class="tag px-4 py-2 text-sm md:text-base font-semibold text-cyan-400 border-2 border-cyan-400 tracking-wide whitespace-nowrap" style="font-family: 'Rajdhani', 'Exo 2', system-ui, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);">DAO</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Toast transitions */
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
</style>
