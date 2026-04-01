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
  sunHeight: 120, // 太阳高度（y轴），默认40比地平线高
  sunZ: -350, // 太阳深度位置
  // 夜间天空颜色
  nightSkyTop: 0x0A0A1A,
  nightSkyMiddle: 0x1A0A2E,
  nightSkyBottom: 0xFF4500,
  // 白天天空颜色
  daySkyTop: 0x87CEEB,
  daySkyMiddle: 0x4A90D9,
  daySkyBottom: 0x87CEEB,
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const showToast = ref(false)
let animationId: number
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let auroraMaterial: THREE.ShaderMaterial | null = null
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
  isNightMode.value = CONFIG.enableRandomDayNight ? Math.random() > 0.3 : true

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(isNightMode.value ? 0x0A0A1A : 0x1A2A4A, 0.0015)

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 2, 0)
  camera.lookAt(0, 10, -100)

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Sky gradient dome
  const skyGeometry = new THREE.SphereGeometry(500, 32, 32)
  const skyMaterial = new THREE.ShaderMaterial({
    uniforms: {
      topColor: { value: new THREE.Color(isNightMode.value ? CONFIG.nightSkyTop : CONFIG.daySkyTop) },
      middleColor: { value: new THREE.Color(isNightMode.value ? CONFIG.nightSkyMiddle : CONFIG.daySkyMiddle) },
      bottomColor: { value: new THREE.Color(isNightMode.value ? CONFIG.nightSkyBottom : CONFIG.daySkyBottom) },
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
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
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
        const cloudGeometry = new THREE.PlaneGeometry(80 + Math.random() * 120, 20 + Math.random() * 30, 1, 1)
        const cloudMaterial = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(isNightMode.value ? 0x2A1A4A : 0xFFFFFF) },
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
  const divisions = 80
  const gridHelper = new THREE.GridHelper(gridSize, divisions, 0xFF00FF, 0x00FFFF)
  gridHelper.position.y = 0
  scene.add(gridHelper)

  // City skyline - z: -200 (IN FRONT of sun)
  if (CONFIG.enableCity) {
    const cityGroup = new THREE.Group()
    const buildingCount = 30
    for (let i = 0; i < buildingCount; i++) {
      const width = 5 + Math.random() * 15
      const height = 20 + Math.random() * 80
      const depth = 5 + Math.random() * 15
      const buildingGeometry = new THREE.BoxGeometry(width, height, depth)
      const buildingMaterial = new THREE.MeshBasicMaterial({
        color: isNightMode.value ? 0x0A0A2A : 0x2A3A5A,
        transparent: true,
        opacity: 0.9,
      })
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
      building.position.set(-200 + i * 15 + Math.random() * 10, height / 2, -180 - Math.random() * 30)
      cityGroup.add(building)

      // Window lights (night only)
      if (isNightMode.value && Math.random() > 0.5) {
        const windowCount = Math.floor(Math.random() * 8) + 2
        for (let w = 0; w < windowCount; w++) {
          const windowGeometry = new THREE.PlaneGeometry(1, 1)
          const windowMaterial = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.5 ? 0xFF00FF : 0x00FFFF,
            transparent: true,
            opacity: 0.8,
          })
          const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial)
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

  // Sun glow layers (outer to inner) - z: -350 (BEHIND city)
  const glowColors = [0xFF4500, 0xFF6B00, 0xFF00FF]
  const glowSizes = [80, 60, 45]
  glowColors.forEach((color, i) => {
    const glowGeometry = new THREE.CircleGeometry(glowSizes[i], 64)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.15 - i * 0.04,
      side: THREE.DoubleSide,
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.set(0, CONFIG.sunHeight, CONFIG.sunZ - i * 0.5)
    scene.add(glow)
  })

  // Sun/Orb with stripes - z: -350 (BEHIND city)
  const sunGeometry = new THREE.CircleGeometry(30, 64)
  const sunMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0xFF6B00) },
      color2: { value: new THREE.Color(0xFF00FF) },
      time: { value: 0 },
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
      varying vec2 vUv;
      void main() {
        float stripes = step(0.5, fract(vUv.y * 20.0 + time * 0.5));
        vec3 color = mix(color1, color2, stripes * 0.7);
        float alpha = mix(1.0, 0.0, stripes * 0.8);
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
  })
  const sun = new THREE.Mesh(sunGeometry, sunMaterial)
  sun.position.set(0, CONFIG.sunHeight, CONFIG.sunZ)
  scene.add(sun)

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
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = new THREE.MeshBasicMaterial({
        color: [0xFF00FF, 0x00FFFF, 0xFF6B00, 0x00FF88][Math.floor(Math.random() * 4)],
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
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
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

  // Animate floating objects
  floatingObjects.forEach((obj) => {
    obj.rotation.x += obj.userData.rotSpeedX
    obj.rotation.y += obj.userData.rotSpeedY
    obj.position.y = obj.userData.originalY + Math.sin(time * obj.userData.floatSpeed + obj.userData.floatOffset) * 3
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
  <div class="web3-container">
    <canvas ref="canvasRef" class="webgl-canvas" />
    <div class="web3-overlay">
      <Transition name="toast">
        <div v-if="showToast" class="toast">
          正在开发中...
        </div>
      </Transition>
      <div class="content">
        <h1 class="title">
          欢迎来到kai的web3世界
        </h1>
        <p class="subtitle">
          {{ isNightMode ? 'Explore the decentralized future' : 'Embrace the digital dawn' }}
        </p>
        <button class="explore-btn" @click="showDeveloping">
          探索更多
        </button>
        <div class="tags">
          <span class="tag">Blockchain</span>
          <span class="tag">DeFi</span>
          <span class="tag">NFT</span>
          <span class="tag">DAO</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.web3-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #0a0a1a;
}

.webgl-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.web3-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.content {
  text-align: center;
  z-index: 100;
  pointer-events: auto;
}

.title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #fff;
  text-shadow:
    0 0 40px rgba(255, 0, 255, 0.8),
    0 0 80px rgba(0, 255, 255, 0.5);
  margin: 0 0 1rem;
  letter-spacing: 0.1em;
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 2rem;
  letter-spacing: 0.2em;
}

.explore-btn {
  display: inline-block;
  padding: 1rem 3rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #0a0a1a;
  background: linear-gradient(135deg, #ff00ff, #00ffff);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
  box-shadow:
    0 0 30px rgba(255, 0, 255, 0.5),
    0 0 60px rgba(0, 255, 255, 0.3);
}

.explore-btn:hover {
  transform: scale(1.05);
  box-shadow:
    0 0 50px rgba(255, 0, 255, 0.8),
    0 0 100px rgba(0, 255, 255, 0.5);
}

.tags {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  padding: 0.5rem 1.5rem;
  border: 2px solid #00ffff;
  color: #00ffff;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  background: rgba(255, 0, 255, 0.9);
  color: #fff;
  font-size: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.8);
  z-index: 200;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
</style>
