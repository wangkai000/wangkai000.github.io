<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

function initThree() {
  const canvas = canvasRef.value
  if (!canvas)
    return

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x0A0A1A, 0, 500)

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 2, 0)
  camera.lookAt(0, 10, -100)

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create grid floor
  const gridSize = 800
  const divisions = 80
  const gridHelper = new THREE.GridHelper(gridSize, divisions, 0xFF00FF, 0x00FFFF)
  gridHelper.position.y = 0
  scene.add(gridHelper)

  // Add glowing lines effect
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xFF00FF, transparent: true, opacity: 0.5 })
  for (let i = 0; i < 20; i++) {
    const points: THREE.Vector3[] = []
    const z = -i * 40 - 10
    points.push(new THREE.Vector3(-400, 0, z))
    points.push(new THREE.Vector3(400, 0, z))
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(lineGeometry, lineMaterial)
    scene.add(line)
  }

  // Sun/Orb
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
  sun.position.set(0, 25, -200)
  scene.add(sun)

  // Mountains (silhouette)
  const mountainMaterial = new THREE.MeshBasicMaterial({ color: 0x0A0A1A })
  for (let i = 0; i < 8; i++) {
    const width = 100 + Math.random() * 150
    const height = 30 + Math.random() * 50
    const mountainGeometry = new THREE.ConeGeometry(width, height, 4)
    const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial)
    mountain.position.set(-300 + i * 100 + Math.random() * 50, height / 2, -250 - Math.random() * 50)
    mountain.rotation.y = Math.random() * Math.PI
    scene.add(mountain)
  }

  // Ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
  scene.add(ambientLight)

  // Point lights for glow
  const pinkLight = new THREE.PointLight(0xFF00FF, 2, 200)
  pinkLight.position.set(-50, 20, -50)
  scene.add(pinkLight)

  const cyanLight = new THREE.PointLight(0x00FFFF, 2, 200)
  cyanLight.position.set(50, 20, -50)
  scene.add(cyanLight)

  animate()
}

function animate() {
  animationId = requestAnimationFrame(animate)

  // Rotate grid slightly for movement effect
  if (scene.children[0]) {
    scene.children[0].rotation.z += 0.0005
  }

  renderer.render(scene, camera)
}

function handleResize() {
  if (!camera || !renderer)
    return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  initThree()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
  if (renderer)
    renderer.dispose()
})
</script>

<template>
  <div class="web3-container">
    <canvas ref="canvasRef" class="webgl-canvas" />
    <div class="web3-overlay">
      <div class="content">
        <h1 class="title">
          Web3
        </h1>
        <p class="subtitle">
          Coming Soon...
        </p>
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
  z-index: 10;
}

.title {
  font-size: 6rem;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(135deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 60px rgba(255, 0, 255, 0.5);
  margin: 0;
  letter-spacing: 0.2em;
}

.subtitle {
  font-size: 1.5rem;
  color: #ff00ff;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
  margin: 1rem 0 2rem;
  letter-spacing: 0.3em;
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
</style>
