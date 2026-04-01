<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const showToast = ref(false)
let animationId: number
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

// Mouse parallax state
const mouse = { x: 0, y: 0 }
const targetRotation = { x: 0, y: 0 }
const currentRotation = { x: 0, y: 0 }

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

  // Ambient light (subtle, for overall visibility)
  const ambientLight = new THREE.AmbientLight(0x202030, 0.8)
  scene.add(ambientLight)

  animate()
}

function animate() {
  animationId = requestAnimationFrame(animate)

  // Smooth mouse parallax
  const smoothing = 0.05
  currentRotation.x += (targetRotation.x - currentRotation.x) * smoothing
  currentRotation.y += (targetRotation.y - currentRotation.y) * smoothing

  // Apply parallax to camera
  camera.rotation.y = -currentRotation.y * 0.3
  camera.rotation.x = -currentRotation.x * 0.15

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
  // Normalize mouse position to -1 to 1
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1

  // Update target rotation based on mouse position
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
          Welcome to Kai's web3 world
        </h1>
        <p class="subtitle">
          Explore the decentralized future
        </p>
        <button class="explore-btn" @click="showDeveloping">
          More
        </button>
        <div class="tags">
          <span class="tag">News</span>
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
