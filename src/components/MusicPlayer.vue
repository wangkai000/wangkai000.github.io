<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useMusicPlayerStore } from "@/stores/musicPlayer";

const musicStore = useMusicPlayerStore();

// 播放器状态
const isMinimized = ref(true);
const currentTime = ref(0);
const duration = ref(0);
const _updateTimer: number | null = null;

// 切换最小化状态
function toggleMinimize() {
    isMinimized.value = !isMinimized.value;
}

// 格式化时间
function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// 监听当前曲目变化
watch(
    () => musicStore.currentTrack,
    () => {
        // 当曲目变化时可以执行一些操作
    },
);

// 组件挂载时初始化
onMounted(() => {
    // 可以添加一些初始化逻辑
});

// 组件卸载时清理
onUnmounted(() => {
    if (updateTimer) {
        clearInterval(updateTimer);
    }
});

// 定义暴露给父组件的方法
defineExpose({
    toggleMinimize,
});
</script>

<template>
    <div class="music-player" :class="{ minimized: isMinimized }">
        <div class="player-header" @click="toggleMinimize">
            <div class="header-content">
                <span class="music-icon">
                    <div :class="{ 'animate-slow-spin': musicStore.isPlaying }">
                        <Icon icon="carbon:music" width="18" height="18" />
                    </div>
                </span>
                <span
                    v-if="!isMinimized && musicStore.tracks.length > 0"
                    class="track-title-mini"
                >
                    {{ musicStore.tracks[musicStore.currentTrack].title }}
                    <span
                        v-if="musicStore.tracks[musicStore.currentTrack].artist"
                        class="track-artist-mini"
                    >
                        -
                        {{ musicStore.tracks[musicStore.currentTrack].artist }}
                    </span>
                </span>
                <button class="minimize-btn">
                    <Icon
                        v-if="isMinimized"
                        icon="carbon:chevron-up"
                        width="12"
                        height="12"
                    />
                    <Icon
                        v-else
                        icon="carbon:chevron-down"
                        width="12"
                        height="12"
                    />
                </button>
            </div>
        </div>

        <div v-if="!isMinimized" class="player-body">
            <div v-if="musicStore.tracks.length > 0" class="track-info">
                <div class="track-title">
                    {{ musicStore.tracks[musicStore.currentTrack].title }}
                </div>
                <div
                    v-if="musicStore.tracks[musicStore.currentTrack].artist"
                    class="track-artist"
                >
                    {{ musicStore.tracks[musicStore.currentTrack].artist }}
                </div>
            </div>

            <div class="player-controls">
                <button class="control-btn" @click="musicStore.prevTrack">
                    <Icon icon="carbon:caret-left" width="18" height="18" />
                </button>
                <button class="play-btn" @click="musicStore.togglePlay">
                    <div :class="{ 'animate-spin': musicStore.isPlaying }">
                        <Icon
                            v-if="musicStore.isPlaying"
                            icon="carbon:stop-filled"
                            width="20"
                            height="20"
                        />
                        <Icon
                            v-else
                            icon="carbon:play-filled"
                            width="20"
                            height="20"
                        />
                    </div>
                </button>
                <button class="control-btn" @click="musicStore.nextTrack">
                    <Icon icon="carbon:caret-right" width="18" height="18" />
                </button>
            </div>

            <div class="progress-container">
                <span class="time">{{ formatTime(currentTime) }}</span>
                <input
                    type="range"
                    min="0"
                    :max="duration"
                    :value="currentTime"
                    class="progress-slider"
                    @input="
                        (e) => {
                            /* 进度控制逻辑 */
                        }
                    "
                />
                <span class="time">{{ formatTime(duration) }}</span>
            </div>

            <div class="volume-container">
                <Icon icon="carbon:volume-down" width="16" height="16" />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    :value="musicStore.volume"
                    class="volume-slider"
                    @input="
                        (e) =>
                            musicStore.setVolume(
                                parseFloat(
                                    (e.target as HTMLInputElement).value,
                                ),
                            )
                    "
                />
                <Icon icon="carbon:volume-up" width="16" height="16" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.music-player {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 12px;
    color: white;
    font-family: Arial, sans-serif;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.music-player.minimized {
    width: 200px;
}

.player-header {
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-content {
    display: flex;
    align-items: center;
    width: 100%;
}

.music-icon {
    font-size: 18px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.track-title-mini {
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.track-artist-mini {
    font-size: 12px;
    color: #ccc;
    margin-left: 4px;
}

.minimize-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.player-body {
    padding: 0 16px 16px;
}

.player-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 16px 0;
}

.control-btn,
.play-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.play-btn {
    background: #ef77eb;
    font-size: 20px;
    width: 50px;
    height: 50px;
}

.control-btn:hover,
.play-btn:hover {
    opacity: 0.8;
}

.track-info {
    text-align: center;
    margin-bottom: 16px;
}

.track-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.track-artist {
    font-size: 14px;
    color: #ccc;
}

.progress-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
}

.progress-slider,
.volume-slider {
    flex: 1;
    height: 4px;
    -webkit-appearance: none;
    background: #333;
    border-radius: 2px;
    outline: none;
}

.progress-slider::-webkit-slider-thumb,
.volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ef77eb;
    cursor: pointer;
}

.time {
    font-size: 12px;
    color: #ccc;
    min-width: 36px;
    text-align: center;
}

.volume-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* 修改旋转动画 */
@keyframes slow-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-slow-spin {
    animation: slow-spin 2s linear infinite;
}
</style>
