<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { SITE } from "~/config/param";
import { getCurrentWallpaper } from "~/utils/backgroundHandler";
import { defaultImageUrl } from "~/config";

const mvImageUrl = ref("");
const centerText = ref("");

onMounted(() => {
    // 只调用一次，确保 url 与 description 配对
    const wp = getCurrentWallpaper();
    // 预加载图片，加载成功后同时设置 url 与 description，保证配对
    const pre = new Image();
    pre.onload = () => {
        mvImageUrl.value = wp.url;
        centerText.value = wp.description;
    };
    pre.onerror = () => {
        mvImageUrl.value = defaultImageUrl;
        centerText.value = "青山依旧在，几度夕阳红...";
    };
    pre.src = wp.url;
});

function handleImgError() {
    // img 的运行时错误再兜底一次（保持文字与图像配对）
    mvImageUrl.value = defaultImageUrl;
    centerText.value = "大风起兮云飞扬...";
}
</script>

<template>
    <div
        class="relative select-none overflow-hidden rounded-[10px] bg-[var(--card--bg)] bg-white flex items-center justify-center"
    >
        <!-- 图片加载前的占位图标 -->
        <Icon v-if="!mvImageUrl" icon="line-md:image-twotone" height="100" />

        <!-- 背景图片 -->
        <img
            class="lozad pointer-events-none absolute left-0 top-0 h-full w-full select-none object-cover"
            :src="mvImageUrl"
            alt="oh img err"
            @error="handleImgError"
        />

        <!-- 中间的两行文字（缩小左右边距） -->
        <div
            class="absolute inset-0 flex items-center justify-center z-10 px-3 md:px-4"
        >
            <!-- 半透明背景（边距收紧） -->
            <div class="bg-black/25 px-4 py-3 rounded-lg w-full max-w-[90%]">
                <p
                    class="text-[#f2f2f2] text-center text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line m-0"
                >
                    {{ centerText }}
                </p>
            </div>
        </div>

        <a class="detail-arrow" :href="SITE.weeklyUrl" target="_blank">
            <Icon class="h-[16px] w-[16px]" icon="carbon-arrow-up-right" />
        </a>
    </div>
</template>

<style scoped>
.detail-arrow {
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    position: absolute;
    left: 12px;
    bottom: 10px;
    color: var(--text-color);
    border-radius: 18px;
    background: var(--card--bg);
    box-shadow: var(--card-border) 0px 0px 0px 2px;
    transition: box-shadow 0.2s ease-out 0s;
    z-index: 20;
}

.detail-arrow:hover {
    cursor: pointer;
    box-shadow: var(--card-border) 0px 0px 0px 5px;
}

/* 文本超长处理 */
p {
    max-width: 100%; /* 取消最大宽度限制，让文字更贴近两侧 */
    line-height: 1.5;
}

/* 超出两行时显示省略号 */
p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
