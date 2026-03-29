<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { BookOpen, X } from 'lucide-vue-next'
import { type Book, books } from '@/data/books'

const selectedBook = ref<Book | null>(null)
const isVisible = ref(false)
const isModalOpen = ref(false)
const loadedImages = ref<Set<number>>(new Set())
const failedImages = ref<Set<number>>(new Set())

function onImageLoad(bookId: number) {
  loadedImages.value.add(bookId)
}

function onImageError(bookId: number) {
  failedImages.value.add(bookId)
}

const failedModalCover = ref(false)

function onModalImageError() {
  failedModalCover.value = true
}

function openBook(book: Book) {
  failedModalCover.value = false
  selectedBook.value = book
  nextTick(() => {
    isModalOpen.value = true
  })
}

function closeModal() {
  isModalOpen.value = false
  setTimeout(() => {
    selectedBook.value = null
    failedModalCover.value = false
  }, 500)
}

onMounted(() => {
  nextTick(() => {
    isVisible.value = true
  })
})
</script>

<template>
  <div class="bookshelf-page">
    <!-- 背景粒子光效 -->
    <div class="ambient-particles">
      <div
        v-for="i in 20"
        :key="i"
        class="particle"
        :style="{
          '--delay': `${Math.random() * 8}s`,
          '--duration': `${6 + Math.random() * 10}s`,
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--size': `${2 + Math.random() * 4}px`,
        }"
      />
    </div>

    <!-- 顶部标题区 -->
    <div class="page-header">
      <div class="header-glow" />
      <h1 class="page-title">
        <span class="title-icon">📚</span>
        <span class="title-text">我的书单</span>
      </h1>
      <p class="page-subtitle">
        共收录 <span class="highlight">{{ books.length }}</span> 本推荐书籍
      </p>
    </div>

    <!-- 3D 书架区域 -->
    <div class="bookshelf-container">
      <div class="bookshelf-perspective">
        <div
          v-for="(book, index) in books"
          :key="book.id"
          class="book-slot"
          :class="{ 'is-visible': isVisible }"
          :style="{
            '--slot-index': index,
            '--total': books.length,
            'animationDelay': `${index * 0.1}s`,
          }"
          @click="openBook(book)"
        >
          <div class="book-3d">
            <!-- 书脊 -->
            <div class="book-spine">
              <span class="spine-text">{{ book.title.replace(/[《》]/g, "") }}</span>
            </div>
            <!-- 封面 -->
            <div class="book-face">
              <img
                :src="book.cover"
                :alt="book.title"
                loading="lazy"
                :class="{ loaded: loadedImages.has(book.id) }"
                @load="onImageLoad(book.id)"
                @error="onImageError(book.id)"
              >
              <!-- 图片加载失败兜底 -->
              <div v-if="failedImages.has(book.id)" class="book-fallback">
                <BookOpen :size="36" class="fallback-icon" />
              </div>
              <div class="face-overlay">
                <span class="face-title">{{ book.title }}</span>
                <span class="face-author">{{ book.author }}</span>
              </div>
            </div>
            <!-- 书顶 -->
            <div class="book-top" />
          </div>
          <div class="book-shadow" />
        </div>
      </div>
    </div>

    <!-- 书架底部装饰 -->
    <div class="shelf-bottom" />

    <!-- 书籍详情模态框 -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedBook"
          class="modal-overlay"
          :class="{ active: isModalOpen }"
          @click.self="closeModal"
        >
          <div class="modal-book" :class="{ open: isModalOpen }">
            <button class="modal-close" @click="closeModal">
              <X :size="20" />
            </button>
            <div class="modal-front">
              <img
                :src="selectedBook.cover"
                :alt="selectedBook.title"
                class="modal-cover"
                @error="onModalImageError"
              >
              <div v-if="failedModalCover" class="modal-fallback">
                <BookOpen :size="52" class="modal-fallback-icon" />
              </div>
            </div>
            <div class="modal-back">
              <h2 class="modal-title">
                {{ selectedBook.title }}
              </h2>
              <div class="modal-author-badge">
                <span>{{ selectedBook.author }}</span>
              </div>
              <div class="modal-divider" />
              <p class="modal-desc">
                {{ selectedBook.description }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* === 页面基础 === */
.bookshelf-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0f0d0a 0%, #1a1410 40%, #2c2218 100%);
  position: relative;
  overflow-x: hidden;
  padding-bottom: 80px;
  border-radius: 16px;
  margin: 12px 16px;
}

/* === 氛围粒子 === */
.ambient-particles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: radial-gradient(circle, #d4a76a 0%, transparent 70%);
  opacity: 0;
  animation: particleFloat var(--duration) var(--delay) infinite ease-in-out;
}

@keyframes particleFloat {
  0%,
  100% {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }
  30% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
    transform: translateY(-40px) scale(1);
  }
  70% {
    opacity: 0.5;
  }
}

/* === 标题区 === */
.page-header {
  position: relative;
  text-align: center;
  padding: 80px 32px 40px;
  z-index: 1;
}

.header-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 200px;
  background: radial-gradient(
    ellipse,
    rgba(212, 167, 106, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.page-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 2.5rem;
  font-weight: 700;
  color: #f5f0e8;
  margin: 0 0 12px;
  letter-spacing: 2px;
}

.title-icon {
  font-size: 2rem;
  animation: titlePulse 3s ease-in-out infinite;
}

@keyframes titlePulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.title-text {
  background: linear-gradient(135deg, #f5f0e8 0%, #d4a76a 50%, #e8c98a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1rem;
  color: #8b7d6b;
  margin: 0;
  font-weight: 400;
  letter-spacing: 1px;
}

.highlight {
  color: #d4a76a;
  font-weight: 600;
}

/* === 3D 书架区域 === */
.bookshelf-container {
  position: relative;
  z-index: 1;
  padding: 20px 32px;
}

.bookshelf-perspective {
  perspective: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 30px;
  max-width: 1100px;
  margin: 0 auto;
}

/* === 每本书槽位 === */
.book-slot {
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.book-slot.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.book-slot:hover {
  z-index: 5;
}

/* === 3D 书籍 === */
.book-3d {
  position: relative;
  width: 180px;
  height: 260px;
  transform-style: preserve-3d;
  transform: rotateY(-25deg) translateZ(20px);
  transition:
    transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 0.5s ease;
}

.book-slot:hover .book-3d {
  transform: rotateY(-8deg) translateZ(30px) translateY(-8px);
}

/* 书脊 */
.book-spine {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(180deg, #6b5b3e 0%, #8b6914 40%, #6b5b3e 100%);
  transform: rotateY(-90deg) translateZ(0px);
  transform-origin: left center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px 0 0 2px;
  box-shadow: inset -2px 0 8px rgba(0, 0, 0, 0.3);
}

.spine-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #f5f0e8;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10px 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 220px;
}

/* 封面 */
.book-face {
  position: absolute;
  inset: 0;
  background: #2c2218;
  border-radius: 0 4px 4px 0;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.book-face img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.book-face img.loaded {
  opacity: 1;
}

/* 图片加载失败兜底 */
.book-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3a2e20 0%, #2c2218 100%);
  border-radius: 0 4px 4px 0;
}

.fallback-icon {
  color: #8b7d6b;
  opacity: 0.6;
}

.face-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 12px 14px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.book-slot:hover .face-overlay {
  opacity: 1;
}

.face-title {
  color: #f5f0e8;
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.3;
}

.face-author {
  color: #d4a76a;
  font-size: 0.75rem;
}

/* 书顶 */
.book-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(180deg, #a0845c 0%, #8b6914 100%);
  transform: rotateX(90deg) translateZ(0px);
  transform-origin: top center;
  border-radius: 0 0 2px 2px;
  box-shadow: inset 0 -2px 6px rgba(0, 0, 0, 0.2);
}

/* 书影 */
.book-shadow {
  width: 160px;
  height: 20px;
  margin: 10px auto 0;
  background: radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%);
  transition: all 0.5s ease;
}

.book-slot:hover .book-shadow {
  width: 180px;
  background: radial-gradient(ellipse, rgba(0, 0, 0, 0.5) 0%, transparent 70%);
}

/* === 书架底部 === */
.shelf-bottom {
  max-width: 1100px;
  height: 18px;
  margin: 30px auto 0;
  background: linear-gradient(
    180deg,
    #a0845c 0%,
    #8b6914 20%,
    #6b5b3e 50%,
    #5c4a30 100%
  );
  border-radius: 0 0 6px 6px;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.5),
    inset 0 2px 4px rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
}

.shelf-bottom::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(180deg, #d4a76a, #a0845c);
  border-radius: 2px 2px 0 0;
}

/* === 模态框 === */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease;
}

.modal-overlay.active {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
}

.modal-book {
  position: relative;
  width: 560px;
  max-width: 92vw;
  min-height: 420px;
  perspective: 1500px;
}

.modal-book > * {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
}

.modal-front {
  background: #1a1410;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(0deg);
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

.modal-book.open .modal-front {
  transform: rotateY(-180deg);
}

.modal-cover {
  width: 200px;
  height: 290px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
}

.modal-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3a2e20 0%, #2c2218 100%);
  border-radius: 8px;
}

.modal-fallback-icon {
  color: #8b7d6b;
  opacity: 0.5;
}

.modal-back {
  background: linear-gradient(160deg, #1a1410 0%, #2c2218 100%);
  padding: 40px 36px;
  transform: rotateY(180deg);
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(212, 167, 106, 0.2);
}

.modal-book.open .modal-back {
  transform: rotateY(0deg);
}

.modal-close {
  position: absolute;
  top: -48px;
  right: 0;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(212, 167, 106, 0.3);
  background: rgba(26, 20, 16, 0.8);
  color: #d4a76a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.modal-close:hover {
  background: rgba(212, 167, 106, 0.2);
  border-color: #d4a76a;
  transform: rotate(90deg);
}

.modal-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #f5f0e8;
  margin: 0 0 16px;
  line-height: 1.3;
}

.modal-author-badge {
  display: inline-flex;
  padding: 6px 16px;
  background: rgba(212, 167, 106, 0.15);
  border: 1px solid rgba(212, 167, 106, 0.3);
  border-radius: 20px;
  color: #d4a76a;
  font-size: 0.85rem;
  font-weight: 500;
  width: fit-content;
}

.modal-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #d4a76a, transparent);
  margin: 20px 0;
  border-radius: 1px;
}

.modal-desc {
  font-size: 0.95rem;
  line-height: 1.8;
  color: #c4b8a0;
  margin: 0;
  overflow-y: auto;
  max-height: 240px;
  padding-right: 8px;
}

.modal-desc::-webkit-scrollbar {
  width: 4px;
}

.modal-desc::-webkit-scrollbar-track {
  background: transparent;
}

.modal-desc::-webkit-scrollbar-thumb {
  background: #6b5b3e;
  border-radius: 2px;
}

/* === 模态框过渡 === */
.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* === 响应式 === */
@media (max-width: 768px) {
  .bookshelf-page {
    margin: 8px 10px;
    border-radius: 12px;
  }

  .page-header {
    padding: 60px 20px 30px;
  }

  .page-title {
    font-size: 1.8rem;
  }

  .bookshelf-container {
    padding: 16px 16px;
  }

  .bookshelf-perspective {
    gap: 30px 20px;
  }

  .book-3d {
    width: 140px;
    height: 210px;
  }

  .book-spine {
    width: 30px;
  }

  .spine-text {
    font-size: 0.6rem;
    letter-spacing: 1px;
  }

  .book-top {
    height: 30px;
  }

  .shelf-bottom {
    margin-left: 16px;
    margin-right: 16px;
  }

  .modal-back {
    padding: 28px 24px;
  }
}

@media (max-width: 480px) {
  .bookshelf-page {
    margin: 6px 8px;
    border-radius: 10px;
  }

  .page-header {
    padding: 50px 16px 24px;
  }

  .page-title {
    font-size: 1.5rem;
    gap: 8px;
  }

  .title-icon {
    font-size: 1.5rem;
  }

  .bookshelf-container {
    padding: 12px 8px;
  }

  .bookshelf-perspective {
    gap: 24px 14px;
  }

  .book-3d {
    width: 110px;
    height: 165px;
    transform: rotateY(-18deg) translateZ(12px);
  }

  .book-slot:hover .book-3d {
    transform: rotateY(-5deg) translateZ(18px) translateY(-5px);
  }

  .book-spine {
    width: 22px;
  }

  .spine-text {
    font-size: 0.5rem;
    letter-spacing: 1px;
    max-height: 140px;
  }

  .book-top {
    height: 22px;
  }

  .book-shadow {
    width: 120px;
  }

  .face-title {
    font-size: 0.7rem;
  }

  .face-author {
    font-size: 0.65rem;
  }

  .shelf-bottom {
    margin-left: 10px;
    margin-right: 10px;
  }

  .modal-book {
    min-height: 380px;
  }

  .modal-cover {
    width: 160px;
    height: 230px;
  }

  .modal-back {
    padding: 24px 20px;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-desc {
    font-size: 0.88rem;
    max-height: 200px;
  }
}

/* === 亮色模式适配 === */
html:not(.dark) .bookshelf-page {
  background: linear-gradient(180deg, #f5f0e8 0%, #ede4d4 40%, #d4c5a9 100%);
}

html:not(.dark) .page-title .title-text {
  background: linear-gradient(135deg, #5c4a30 0%, #8b6914 50%, #6b5b3e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

html:not(.dark) .page-subtitle {
  color: #8b7d6b;
}

html:not(.dark) .shelf-bottom {
  background: linear-gradient(180deg, #c4a67a 0%, #a0845c 30%, #8b7355 100%);
}

html:not(.dark) .shelf-bottom::before {
  background: linear-gradient(180deg, #e8d5b0, #c4a67a);
}

html:not(.dark) .modal-back {
  background: linear-gradient(160deg, #f5f0e8 0%, #ede4d4 100%);
  border-color: rgba(139, 105, 20, 0.2);
}

html:not(.dark) .modal-title {
  color: #2c2218;
}

html:not(.dark) .modal-author-badge {
  background: rgba(139, 105, 20, 0.1);
  border-color: rgba(139, 105, 20, 0.3);
  color: #6b5b3e;
}

html:not(.dark) .modal-divider {
  background: linear-gradient(90deg, #8b6914, transparent);
}

html:not(.dark) .modal-desc {
  color: #5c4a30;
}

html:not(.dark) .modal-desc::-webkit-scrollbar-thumb {
  background: #c4b8a0;
}

html:not(.dark) .modal-close {
  background: rgba(245, 240, 232, 0.8);
  border-color: rgba(139, 105, 20, 0.3);
  color: #6b5b3e;
}

html:not(.dark) .book-shadow {
  background: radial-gradient(ellipse, rgba(0, 0, 0, 0.12) 0%, transparent 70%);
}

html:not(.dark) .header-glow {
  background: radial-gradient(
    ellipse,
    rgba(139, 105, 20, 0.1) 0%,
    transparent 70%
  );
}

html:not(.dark) .spine-text {
  color: #f5f0e8;
}
</style>
