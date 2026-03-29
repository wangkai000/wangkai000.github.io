<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { type Book, books } from "@/data/books";

const router = useRouter();

function goToBookList(): void {
    router.push("/bookList");
}

// 当前书籍索引
const currentIndex = ref(0);

// 当前显示的书籍
const currentBook = computed((): Book => {
    return books[currentIndex.value];
});

// 切换到下一本书
function nextBook(): void {
    currentIndex.value = (currentIndex.value + 1) % books.length;
}

// 切换到上一本书
function prevBook(): void {
    currentIndex.value = (currentIndex.value - 1 + books.length) % books.length;
}
</script>

<template>
    <ShadowCard class="!p-[5px]">
        <div class="book-card">
            <div class="book-header">
                <h2 class="section-title">我的书单📚</h2>
                <div class="book-count">
                    <span>{{ currentIndex + 1 }}</span
                    >/<span>{{ books.length }}</span>
                </div>
            </div>

            <div class="book-content">
                <div class="book-cover-container">
                    <img
                        :src="currentBook.cover"
                        :alt="currentBook.title"
                        class="book-cover"
                        @click="goToBookList"
                    />
                </div>

                <div class="book-info" @click="goToBookList">
                    <h3 class="book-title">
                        {{ currentBook.title }}
                    </h3>
                    <p class="book-author">
                        {{ currentBook.author }}
                    </p>
                    <div class="book-description-container">
                        <p class="book-description">
                            {{ currentBook.description }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- 悬浮式左右切换按钮 -->
            <button class="nav-button left-button" @click="prevBook">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>

            <button class="nav-button right-button" @click="nextBook">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </ShadowCard>
</template>

<style scoped>
.book-card {
    position: relative; /* 为悬浮按钮提供定位上下文 */
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #8b5cf6 100%);
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    max-width: 560px;
    margin: 0 auto;
}

.book-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
}

.section-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.book-count {
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 12px;
    border-radius: 20px;
    color: white;
    font-size: 0.85rem;
    font-weight: 500;
}

.book-content {
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.book-cover-container {
    display: flex;
    justify-content: center;
    padding: 8px;
}

.book-cover {
    width: 140px;
    height: 185px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(255, 255, 255, 0.15);
    transition: transform 0.3s ease;
    cursor: pointer;
}

.book-cover:hover {
    transform: scale(1.03);
}

.book-info {
    padding: 16px 12px;
    color: white;
    text-align: center;
    cursor: pointer;
}

.book-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 6px;
    line-height: 1.3;
}

.book-author {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 16px;
    font-weight: 500;
}

.book-description-container {
    max-height: 140px;
    overflow: hidden;
    margin-bottom: 20px;
    padding: 0 8px;
}

.book-description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6; /* 限制最多显示6行 */
    overflow: hidden;
    text-overflow: ellipsis;
}

/* 悬浮式导航按钮 */
.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15); /* 半透明背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    opacity: 0.8; /* 降低不透明度 */
    z-index: 10; /* 确保按钮在内容之上 */
}

.nav-button:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.1);
    opacity: 1; /* 悬停时变为不透明 */
}

.nav-button svg {
    width: 24px;
    height: 24px;
}

.left-button {
    left: 12px;
}

.right-button {
    right: 12px;
}

/* 平板及以上尺寸的响应式设计 */
@media (min-width: 640px) {
    .book-content {
        flex-direction: row;
        padding: 20px;
    }

    .book-cover-container {
        flex: 0 0 40%;
        padding: 0;
        align-items: center;
    }

    .book-cover {
        width: 170px;
        height: 220px;
    }

    .book-info {
        flex: 0 0 60%;
        padding: 0 0 0 24px;
        text-align: left;
    }

    .book-title {
        font-size: 1.35rem;
    }

    /* 桌面端按钮更大 */
    .nav-button {
        width: 56px;
        height: 56px;
    }

    .nav-button svg {
        width: 28px;
        height: 28px;
    }
}

/* 移动端优化 */
@media (max-width: 480px) {
    .book-header {
        padding: 14px 18px 10px;
    }

    .section-title {
        font-size: 1.05rem;
    }

    .book-count {
        font-size: 0.8rem;
    }

    .book-cover {
        width: 130px;
        height: 170px;
    }

    .book-title {
        font-size: 1.15rem;
    }

    .book-author {
        font-size: 0.85rem;
    }

    .book-description {
        font-size: 0.86rem;
        -webkit-line-clamp: 1; /* 移动端显示1行 */
    }

    /* 移动端按钮稍小 */
    .nav-button {
        width: 42px;
        height: 42px;
    }

    .nav-button svg {
        width: 20px;
        height: 20px;
    }
}

/* 非常小的屏幕优化 */
@media (max-width: 360px) {
    .book-header {
        padding: 12px 16px 8px;
    }

    .book-content {
        padding: 12px;
    }

    .book-cover {
        width: 110px;
        height: 145px;
    }

    .book-title {
        font-size: 1.1rem;
    }

    .book-author {
        font-size: 0.8rem;
    }

    .book-description {
        font-size: 0.82rem;
        -webkit-line-clamp: 3; /* 超小屏幕显示3行 */
    }

    /* 超小屏幕按钮更小 */
    .nav-button {
        width: 38px;
        height: 38px;
    }

    .nav-button svg {
        width: 18px;
        height: 18px;
    }
}
</style>
