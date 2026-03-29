<script setup lang="ts">
import {
    computed,
    nextTick,
    onActivated,
    onDeactivated,
    onMounted,
    onUnmounted,
    ref,
    watch,
} from "vue";
import { Icon } from "@iconify/vue";

// 视频数据类型定义
interface Video {
    bvid: string;
    title: string;
    reason: string;
    tags: string[];
    author: string;
    url: string;
    loaded?: boolean;
    player?: Window | null;
    origin?: string;
}

// 视频数据
const videos: Video[] = [
    {
        bvid: "BV1oW411h7Ea",
        title: "乔布斯在斯坦福大学毕业典礼上的演讲",
        author: "风上面的天",
        url: "https://www.bilibili.com/video/BV1oW411h7Ea",
        reason: "keep looking, don’t settle; stay hungry, stay foolisha.",
        tags: ["社会人文"],
    },
    {
        bvid: "BV11i4y1L7QQ",
        title: "苏联为何而强大？",
        author: "小约翰可汗",
        url: "https://www.bilibili.com/video/BV11i4y1L7QQ",
        reason: "人们反思苏联的失误，讨论苏联的黑历史，对古拉格和卢比扬卡津津乐道。但在对苏联众多的批判之声中，却很少有人讲过，苏联，究竟因为什么而强大？",
        tags: ["社会人文"],
    },
    {
        bvid: "BV1JE411E7zt",
        title: "假如我年少有为 不自卑",
        author: "囧墙先生",
        url: "https://www.bilibili.com/video/BV1JE411E7zt",
        reason: "假如我年少有为 不自卑...",
        tags: ["社会人文"],
    },
    {
        bvid: "BV184411p7tf",
        title: "后悔：一个撸瑟大学生沉迷游戏4年的经历",
        author: "独立菌儿",
        url: "https://www.bilibili.com/video/BV184411p7tf",
        reason: "游戏毁人不倦，也可诲人不倦。",
        tags: ["游戏"],
    },
    {
        bvid: "BV14V4y1r7aH",
        title: "戒掉游戏成瘾之后 才明白读书的重要性《福格行为模型》【书山有路01】",
        author: "独立菌儿",
        url: "https://www.bilibili.com/video/BV14V4y1r7aH",
        reason: "...",
        tags: ["游戏"],
    },
    {
        bvid: "BV1L1N4zNEYF",
        title: "你可能想不到，是这些书塑造了小岛秀夫",
        author: "几级风雨",
        url: "https://www.bilibili.com/video/BV1L1N4zNEYF",
        reason: "漫谈小岛秀夫的书单，也谈他的灵感来源和人生哲学，有些很意外的细节在里面。",
        tags: ["游戏"],
    },
    {
        bvid: "BV1PZ4y1Q7xY",
        title: "【极乐迪斯科】为什么被称为最有文学性的游戏？",
        author: "天真的和感伤的小说家",
        url: "https://www.bilibili.com/video/BV1PZ4y1Q7xY",
        reason: "第九艺术",
        tags: ["读书"],
    },
    {
        bvid: "BV1ng4y1K7Sz",
        title: "科幻电影天花板，塔可夫斯基的《潜行者》讲了一个怎样的故事？",
        author: "猫鲨Catshark",
        url: "https://www.bilibili.com/video/BV1ng4y1K7Sz",
        reason: "神秘的天外来物，被军方层层封锁的禁区，据说在禁区深处，有一个可以满足人内心最深处愿望的房间。三个怀着不同的目的来到这里，而他们的心愿也终将一一实现。塔可夫斯基的《潜行者》讲了一个怎样的故事？说书人猫鲨和你好好聊一聊。",
        tags: ["电影"],
    },
    {
        bvid: "BV1uu4y1X7FX",
        title: "俄罗斯黑客的激荡三十年",
        author: "衣戈猜想",
        url: "https://www.bilibili.com/video/BV1uu4y1X7FX",
        reason: "Hacker...",
        tags: ["Hacker"],
    },
    {
        bvid: "BV1vZ421W7yi",
        title: "古典音乐杂谈 Vol 2：原神音乐会曲目《枫丹》解析",
        author: "咒咒的音乐视界",
        url: "https://www.bilibili.com/video/BV1vZ421W7yi",
        reason: "枫丹音乐鉴赏...",
        tags: ["音乐"],
    },
    {
        bvid: "BV1Bb4y1t7y3",
        title: "假如我生活在前苏联，我能玩什么电子游戏？",
        author: "33不是山山",
        url: "https://www.bilibili.com/video/BV1Bb4y1t7y3",
        reason: "苏联的仿制机本打算试一下自己编游戏的，结果发现不行，没修好本来还打算去买苏联的主机游戏看下的，然后发现没钱买，穷成狗了，属于是破防...",
        tags: ["社会人文", "游戏"],
    },
    {
        bvid: "BV1qJ41197kE",
        title: "为什么你一定要玩《林中之夜》？",
        author: "独立菌儿",
        url: "https://www.bilibili.com/video/BV1qJ41197kE",
        reason: "《林中之夜》的主题包含“精神疾病、抑郁症、中下阶层的困境和美国小镇的缓慢衰落...",
        tags: ["游戏"],
    },
    {
        bvid: "BV1za411U7MV",
        title: "在村里呆了三十年，我的精神内耗，更严重了",
        author: "郝小学",
        url: "https://www.bilibili.com/video/BV1za411U7MV",
        reason: "真正见证过和经历过的人知道，苦难从不来不是什么勋章，苦难是一个个的棺材板，它将一个人的一生，死死的盖在里面。要知道，在棺材里苦苦挣扎的人，从来不需要，站在棺材外面，用一种刻奇的方式，拼命鼓掌加油的朋友...",
        tags: ["社会人文"],
    },
    {
        bvid: "BV1i8411T75J",
        title: "现实中黑客的生活是什么样的？全球知名黑客郑文彬（MJ0011）",
        author: "FIRST_ONE_",
        url: "https://www.bilibili.com/video/BV1i8411T75J",
        reason: "一个漏洞、一条代码，都能成为是生死攻防的关头阵地，电影创作中关于黑客与网络攻击的情节也绝非天方夜谭。FIRST惊喜影展 · #惊喜TALK 邀请网络安全专家、赛博昆仑创始人郑文彬（MJ0011），揭开“黑客帝国”的神秘面纱。",
        tags: ["Hacker"],
    },
    {
        bvid: "BV1Bh4y1A7Bs",
        title: "2010年天黑将至 你窝在家里聊QQ 打开千禧年华语电台",
        author: "宇宙第二宅",
        url: "https://www.bilibili.com/video/BV1Bh4y1A7Bs",
        reason: "千禧年的音乐",
        tags: ["音乐"],
    },
    {
        bvid: "BV1yJ411T7Qc",
        title: "这款游戏告诉你，为什么游戏能被称为“第九艺术”（艾迪芬奇的记忆）〖游戏不止〗",
        author: "森纳映画",
        url: "https://www.bilibili.com/video/BV1yJ411T7Qc",
        reason: "独立游戏神作《艾迪芬奇的记忆》（What Remains of Edith Finch），讲述一款时长只有两小时的游戏，让它的奇幻故事告诉你，为什么游戏能被称为“第九艺术”。",
        tags: ["游戏"],
    },
    {
        bvid: "BV13u4y1L79a",
        title: "JRPG/Galgame的剧本原来是这么写出来的？一起来读《游戏剧本怎么写》【旧世代读书】",
        author: "LunaticMosfet",
        url: "https://www.bilibili.com/video/BV13u4y1L79a",
        reason: "今天我们来用一种比较偏电台形式的方式来读一本书，这书的名字叫做《游戏剧本怎么写》，豆瓣7.3分...",
        tags: ["游戏", "创作"],
    },
    {
        bvid: "BV1V8bQzdEdq",
        title: "原神编剧读过啥书？璃月篇【书单分享】",
        author: "写书的王紫",
        url: "https://www.bilibili.com/video/BV1V8bQzdEdq",
        reason: "原神编剧读过啥书？",
        tags: ["游戏", "读书"],
    },
    {
        bvid: "BV1b5WKz6EAp",
        title: "曾经死过的互联网，能给我们什么启示【让编程再次伟大#46】",
        author: "原子能",
        url: "https://www.bilibili.com/video/BV1b5WKz6EAp",
        reason: "让编程再次伟大",
        tags: ["编程", "社会人文"],
    },
    {
        bvid: "BV11NmtBzE36",
        title: "MiniMax 创始人闫俊杰×罗永浩！大山并非无法翻越",
        author: "罗永浩的十字路口",
        url: "https://www.bilibili.com/video/BV11NmtBzE36",
        reason: "让编程再次伟大",
        tags: ["编程", "AI"],
    },
];

// 状态管理
const currentPage = ref(1);
const pageSize = 1;
const selectedTags = ref<string[]>([]);
const playingVideo = ref<string | null>(null);
const crossDomainWarningShown = ref(false);
const isPlayerActive = ref(true);

// 提取所有标签
const allTags = computed(() => {
    const tagsSet = new Set<string>();
    videos.forEach((video) => video.tags.forEach((tag) => tagsSet.add(tag)));
    return Array.from(tagsSet);
});

// 标签切换逻辑
function toggleTag(tag: string) {
    selectedTags.value = selectedTags.value.includes(tag)
        ? selectedTags.value.filter((t) => t !== tag)
        : [...selectedTags.value, tag];
}

function clearSelectedTags() {
    selectedTags.value = [];
}

// 筛选视频
const filteredVideos = computed(() => {
    return selectedTags.value.length === 0
        ? [...videos]
        : videos.filter((video) =>
              selectedTags.value.some((tag) => video.tags.includes(tag)),
          );
});

// 总页数计算
const totalPages = computed(() => {
    return Math.ceil(filteredVideos.value.length / pageSize);
});

// 分页后的视频列表
const filteredAndPaginatedVideos = computed(() => {
    // 计算属性应保持纯粹：只负责根据 selectedTags/currentPage 返回视频列表
    const startIndex = (currentPage.value - 1) * pageSize;
    return filteredVideos.value.slice(startIndex, startIndex + pageSize);
});

// 处理 currentPage 越界（放到 watch 中，避免在 computed 内副作用）
watch(currentPage, () => {
    if (currentPage.value > totalPages.value) currentPage.value = 1;
});

// 初始化播放器
function initPlayer(video: Video) {
    const iframe = document.querySelector(
        `iframe[title="${video.title}"]`,
    ) as HTMLIFrameElement | null;
    if (iframe && iframe.contentWindow) {
        video.loaded = true;
        video.player = iframe.contentWindow;
        video.origin = new URL(iframe.src).origin;
    }
}

// 暂停其他视频
function pauseOtherVideos(currentBvid: string) {
    videos.forEach((video) => {
        if (video.bvid !== currentBvid && video.player && video.origin) {
            try {
                video.player.postMessage(JSON.stringify({ cmd: "pause" }), "*");
                if (!crossDomainWarningShown.value) {
                    console.warn(
                        "跨域提示：若无法自动暂停其他视频，请手动操作（浏览器安全限制）",
                    );
                    crossDomainWarningShown.value = true;
                }
            } catch (e) {
                console.warn("暂停视频失败：", e);
            }
        }
    });
}

// 消息监听处理
function handleMessage(event: MessageEvent) {
    try {
        const data = JSON.parse(event.data);
        if (data.from === "bilibili-player" && data.bvid) {
            const video = videos.find((v) => v.bvid === data.bvid);
            if (!video) return;
            if (data.cmd === "play") {
                if (playingVideo.value !== video.bvid) {
                    pauseOtherVideos(video.bvid);
                    playingVideo.value = video.bvid;
                }
            }
        }
    } catch {
        /* 忽略无效消息 */
    }
}

// 普通组件进入激活
onMounted(() => {
    window.addEventListener("message", handleMessage);
    nextTick(() => {
        filteredAndPaginatedVideos.value.forEach(initPlayer);
    });
});

// 普通组件离开销毁
onUnmounted(() => {
    window.removeEventListener("message", handleMessage);
    videos.forEach((video) => {
        if (video.player) {
            video.player.postMessage(JSON.stringify({ cmd: "pause" }), "*");
            video.player = null;
            video.loaded = false;
        }
    });
    playingVideo.value = null;
    isPlayerActive.value = false;
});

// keep-alive激活
onActivated(() => {
    isPlayerActive.value = true;
    nextTick(() => {
        filteredAndPaginatedVideos.value.forEach(initPlayer);
    });
});

// keep-alive失活
onDeactivated(() => {
    isPlayerActive.value = false;
    videos.forEach((video) => {
        if (video.player) {
            video.player.postMessage(JSON.stringify({ cmd: "pause" }), "*");
            video.player = null;
            video.loaded = false;
        }
    });
    playingVideo.value = null;
});

// 监听分页变化
watch(currentPage, () => {
    videos.forEach((video) => {
        if (video.player) {
            video.player.postMessage(JSON.stringify({ cmd: "pause" }), "*");
        }
    });
});
</script>

<template>
    <div>
        <!-- 头部区域 -->
        <header class="py-6 px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto">
                <div class="mb-6 text-center">
                    <h1
                        class="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                    >
                        视频推荐合集
                    </h1>
                </div>

                <div class="flex justify-center my-6">
                    <div
                        class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-lg border border-gray-100/50 dark:border-gray-700/50 transition-all duration-300"
                    >
                        <div class="flex flex-wrap items-center gap-2">
                            <button
                                v-for="tag in allTags"
                                :key="tag"
                                class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 active:scale-95"
                                :class="
                                    selectedTags.includes(tag)
                                        ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-md'
                                        : 'bg-gray-100/80 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-600/60'
                                "
                                @click="toggleTag(tag)"
                            >
                                {{ tag }}
                            </button>

                            <button
                                v-if="selectedTags.length > 0"
                                class="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-all flex items-center gap-1"
                                @click="clearSelectedTags"
                            >
                                <Icon
                                    icon="mdi:filter-remove"
                                    width="14"
                                    height="14"
                                />
                                清除
                            </button>

                            <span
                                class="ml-2 text-xs text-gray-500 dark:text-gray-400"
                            >
                                {{ filteredVideos.length }} 个视频
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- 主要内容区 -->
        <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div
                class="bg-gray-50 dark:bg-gray-900/90 rounded-2xl p-4 sm:p-6 shadow-md"
            >
                <div class="mb-8">
                    <div
                        v-for="video in filteredAndPaginatedVideos"
                        :key="video.bvid"
                        class="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
                    >
                        <!-- 视频播放器 -->
                        <div
                            v-if="isPlayerActive"
                            class="aspect-video md:aspect-[16/9] bg-gray-100 dark:bg-gray-700 relative"
                        >
                            <iframe
                                :src="`//player.bilibili.com/player.html?isOutside=true&bvid=${video.bvid}&page=1&autoplay=0`"
                                scrolling="no"
                                border="0"
                                frameborder="no"
                                framespacing="0"
                                allowfullscreen
                                class="w-full h-full"
                                :title="video.title"
                                @load="initPlayer(video)"
                            />
                            <div
                                v-if="!video.loaded"
                                class="absolute inset-0 flex items-center justify-center bg-black/30"
                            >
                                <Icon
                                    icon="mdi:loading"
                                    class="h-10 w-10 text-white animate-spin"
                                />
                            </div>
                        </div>

                        <!-- 视频信息 -->
                        <div class="p-6 bg-gray-50 dark:bg-gray-800">
                            <div class="mb-4">
                                <h3
                                    class="text-xl font-semibold mb-2 line-clamp-2 text-gray-800 dark:text-gray-100"
                                >
                                    {{ video.title }}
                                </h3>
                                <div
                                    class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2"
                                >
                                    <span>作者: {{ video.author }}</span>
                                    <a
                                        :href="video.url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="ml-3 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-xs flex items-center"
                                    >
                                        <Icon
                                            icon="mdi:external-link"
                                            width="12"
                                            height="12"
                                            class="mr-1"
                                        />
                                        查看原视频
                                    </a>
                                </div>
                            </div>

                            <p
                                class="text-gray-600 dark:text-gray-300 text-base bg-white dark:bg-gray-700 p-4 rounded-lg"
                            >
                                {{ video.reason }}
                            </p>

                            <div class="mt-4 flex flex-wrap gap-2">
                                <span
                                    v-for="tag in video.tags"
                                    :key="tag"
                                    class="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div
                    v-if="filteredVideos.length === 0"
                    class="text-center py-20 bg-white dark:bg-gray-800 rounded-xl"
                >
                    <Icon
                        icon="mdi:video-off-outline"
                        class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-4"
                    />
                    <p class="text-gray-500 dark:text-gray-400 text-lg">
                        没有找到符合条件的视频
                    </p>
                </div>

                <!-- 分页控件：左右按钮 + 中间当前页码显示（仅展示） -->
                <div
                    v-if="totalPages > 1"
                    class="flex justify-center items-center gap-4 mt-8 bg-white dark:bg-gray-800 p-3 rounded-xl"
                >
                    <!-- 上一页按钮 -->
                    <button
                        :disabled="currentPage === 1"
                        class="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="上一页"
                        @click="currentPage = currentPage - 1"
                    >
                        <Icon icon="mdi:chevron-left" class="h-6 w-6" />
                    </button>

                    <!-- 当前页码显示（仅展示，不可点击） -->
                    <div
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium cursor-default"
                    >
                        {{ currentPage }}
                    </div>

                    <!-- 下一页按钮 -->
                    <button
                        :disabled="currentPage === totalPages"
                        class="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="下一页"
                        @click="currentPage = currentPage + 1"
                    >
                        <Icon icon="mdi:chevron-right" class="h-6 w-6" />
                    </button>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
/* 文字省略样式 */
.line-clamp-2 {
    display: -webkit-box;
    /* 标准属性，提升兼容性 */
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.line-clamp-3 {
    display: -webkit-box;
    /* 标准属性，提升兼容性 */
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* 视频播放器样式 */
iframe {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
iframe::-webkit-scrollbar {
    display: none;
}

/* 响应式调整 */
@media (max-width: 640px) {
    .aspect-video {
        aspect-ratio: 16/9 !important;
    }
}

/* 按钮样式补充 */
button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}
/* 按钮点击反馈 */
button:active:not(:disabled) {
    transform: scale(0.92);
}

/* 当前页码样式（确保不可点击） */
.cursor-default {
    pointer-events: none; /* 禁止点击事件 */
}
</style>
