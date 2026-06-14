<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

// 导航菜单配置（新增target属性：_self当前页，_blank新标签页）
interface NavItem {
    label: string;
    route?: string;
    icon: string;
    children: NavItem[]; // 必须有children属性
    title?: string; // 可选属性
    target?: "" | "_self" | "_blank"; // 可选属性，默认 ''
}
const navFilter: NavItem[] = [
    {
        label: "首页",
        route: "/",
        icon: "🏠",
        children: [],
        title: "首页",
    },
    {
        label: "文章",
        icon: "📝",
        children: [
            {
                label: "技术文章",
                route: "https://blog.tianmiao.site",
                title: "技术博客",
                target: "_self",
                icon: "📖",
                children: [],
            },
            {
                label: "朝花夕拾",
                route: "https://notes.tianmiao.site",
                title: "随笔杂谈",
                target: "_self",
                icon: "🌹",
                children: [],
            },
        ],
        title: "我的文章",
    },
    {
        label: "动态",
        route: "/muttering",
        icon: "☕",
        children: [],
        title: "碎碎念",
    },
    {
        label: "项目",
        route: "/project",
        icon: "🎯",
        children: [],
        title: "项目展示",
    },
    {
        label: "AI",
        route: "/ai",
        icon: "🤖️",
        children: [],
        title: "AI",
    },
    {
        label: "关于",
        route: "/about",
        icon: "😊",
        children: [],
        title: "关于",
    },
    {
        label: "更多",
        icon: "✨",
        children: [
            {
                label: "友链",
                route: "/friend",
                icon: "🔗",
                title: "友情链接",
                children: [],
            },
            {
                label: "资源收录",
                route: "https://nav.tianmiao.site/",
                icon: "📚",
                title: "资源收录库",
                children: [],
            },
            {
                label: "推荐书单",
                route: "/bookList",
                icon: "📕",
                children: [],
                title: "推荐书单",
            },
            {
                label: "视频推荐",
                route: "/video",
                icon: "⏯️",
                title: "精选视频",
                children: [],
            },
            {
                label: "每日名言",
                route: "/sentence",
                icon: "💬",
                title: "每日一句",
                children: [],
            },
            {
                label: "Web3.0",
                route: "/web3",
                icon: "💎",
                children: [],
                title: "Web3.0探索",
            },
            {
                label: "服务器推荐",
                route: "/server",
                icon: "💻",
                children: [],
                title: "服务器推荐",
            },
            {
                label: "原创音乐",
                route: "/music",
                icon: "🎵",
                children: [],
                title: "个人原创音乐",
            },
            {
                label: "原创小说",
                route: "/novel",
                icon: "📜",
                children: [],
                title: "个人原创小说",
            },
            {
                label: "其他",
                route: "/other",
                icon: "📦",
                children: [],
                title: "其他内容",
            },
        ],
    },
];

// 路由与状态管理
const route = useRoute();
const router = useRouter();
const mobileNavBool = ref(false);
const currentActiveIndex = ref(-1);
const moreMenuOpen = ref(false);
const moreMenuRef = ref(null);
const isHovered = ref(false);
const clickToggle = ref(false); // 标记是否通过点击打开菜单
const submenuOpenMap = ref<Record<number, boolean>>({}); // 记录二级菜单的展开状态
let hideTimer: NodeJS.Timeout | null = null;

// 导航项样式配置
const navItemOptions = {
    width: 100,
    height: 36,
    padding: 8,
};

// 计算属性：激活/默认状态样式
const activeStyles = computed(() => ({
    width: `${navItemOptions.width}px`,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(8px)",
    boxShadow:
        "0 0 0 2px rgba(59, 130, 246, 0.3), 0 4px 12px rgba(0, 0, 0, 0.08)",
    color: "#333333",
}));

const normalStyles = computed(() => ({
    width: `${navItemOptions.width}px`,
}));

// 获取当前激活项索引
function getActiveIndex(path: string) {
    for (let i = 0; i < navFilter.length; i++) {
        if (navFilter[i].route === path) return i;
        for (let j = 0; j < navFilter[i].children.length; j++) {
            if (navFilter[i].children[j].route === path) return i * 100 + j;
        }
    }
    return -1;
}

// 根据路由获取页面标题
function getPageTitle(path: string): string {
    for (const item of navFilter) {
        if (item.route === path) return item.title || item.label;
        for (const child of item.children) {
            if (child.route === path) return child.title || child.label;
        }
    }
    return "天渺studio";
}

// 导航跳转处理（支持新标签页）
function navigateTo(item: { route?: string; target?: string }) {
    if (!item?.route) return;

    // 关闭所有展开的菜单
    closeAllMenus();

    // 根据target和链接类型决定跳转方式
    if (item.target === "_blank") {
        // 新标签页打开（适用于所有链接类型）
        window.open(item.route, "_blank");
    } else {
        // 判断是否为HTTP链接（包含http://或https://）
        const isHttpLink = /^https?:\/\//.test(item.route);
        if (isHttpLink) {
            // HTTP链接：直接在当前页跳转，覆盖当前网站
            window.location.href = item.route;
        } else {
            // 非HTTP链接（如路由路径）：使用路由跳转
            router.push(item.route);
        }
    }

    // 关闭移动端菜单
    mobileNavBool.value = false;
}

// 切换二级菜单（非更多菜单）
function toggleSubmenu(index: number) {
    // 如果已展开，则折叠；未展开则打开
    submenuOpenMap.value[index] = !submenuOpenMap.value[index];
    clickToggle.value = submenuOpenMap.value[index]; // 标记为点击打开
}

// 更多菜单切换
function toggleMoreMenu(e: MouseEvent) {
    e.stopPropagation();
    clearTimeout(hideTimer as NodeJS.Timeout);
    moreMenuOpen.value = !moreMenuOpen.value;
    clickToggle.value = moreMenuOpen.value; // 标记为点击打开
    isHovered.value = moreMenuOpen.value;
}

// 更多菜单鼠标事件（兼容点击与悬停）
function handleMouseEnter() {
    clearTimeout(hideTimer as NodeJS.Timeout);
    // 如果不是点击打开的，才通过悬停展开
    if (!clickToggle.value) {
        isHovered.value = true;
        moreMenuOpen.value = true;
    }
}

function handleMouseLeave() {
    // 如果是点击打开的，不通过鼠标离开关闭
    if (clickToggle.value) return;

    hideTimer = setTimeout(() => {
        isHovered.value = false;
        moreMenuOpen.value = false;
    }, 300);
}

// 二级菜单鼠标事件（非更多菜单）
function handleSubmenuMouseEnter(index: number) {
    clearTimeout(hideTimer as NodeJS.Timeout);
    // 非点击打开状态下，悬停展开
    if (!clickToggle.value) {
        submenuOpenMap.value[index] = true;
    }
}

function handleSubmenuMouseLeave(index: number) {
    // 非点击打开状态下，离开折叠
    if (!clickToggle.value) {
        hideTimer = setTimeout(() => {
            submenuOpenMap.value[index] = false;
        }, 300);
    }
}

// 关闭所有菜单
function closeAllMenus() {
    moreMenuOpen.value = false;
    isHovered.value = false;
    clickToggle.value = false;
    submenuOpenMap.value = {}; // 清空所有二级菜单状态
    if (hideTimer) clearTimeout(hideTimer);
}

// 移动端导航菜单收起

// 更新激活状态
function updateActiveState(path: string) {
    currentActiveIndex.value = getActiveIndex(path);
}

// 移动端导航切换
function mobileNavClick() {
    mobileNavBool.value = !mobileNavBool.value;
}

function mobileNavClickHide() {
    mobileNavBool.value = false;
}

// 初始化与生命周期
onMounted(() => {
    updateActiveState(route.path);
    // 初始化页面标题
    const initialTitle = getPageTitle(route.path);
    document.title = initialTitle === '天渺studio' ? initialTitle : `${initialTitle} - 天渺studio`;

    // 点击页面空白处关闭菜单
    document.addEventListener("click", closeAllMenus);
});

onUnmounted(() => {
    if (hideTimer) clearTimeout(hideTimer);
    document.removeEventListener("click", closeAllMenus);
});

// 监听路由变化（更新激活状态和页面标题）
watch(
    () => route.path,
    (newPath) => {
        closeAllMenus();
        updateActiveState(newPath);
        // 更新页面标题
        const currentTitle = getPageTitle(newPath);
        document.title = currentTitle === '天渺studio' ? currentTitle : `${currentTitle} - 天渺studio`;
    },
);
</script>

<template>
    <!-- 桌面端导航 -->
    <div id="pc-nav" class="nav-container">
        <div
            v-for="(item, index) in navFilter"
            :key="item.label"
            class="relative group"
        >
            <template v-if="item.label !== '更多'">
                <div
                    class="nav-item flex items-center justify-center h-[36px] px-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 cursor-pointer"
                    :class="[
                        currentActiveIndex === index
                            ? 'text-blue-600 dark:text-blue-400 active-item'
                            : '',
                    ]"
                    :style="
                        currentActiveIndex === index
                            ? activeStyles
                            : normalStyles
                    "
                    @click="
                        item.children.length > 0
                            ? toggleSubmenu(index)
                            : navigateTo(item)
                    "
                    @mouseenter="handleSubmenuMouseEnter(index)"
                    @mouseleave="handleSubmenuMouseLeave(index)"
                >
                    <span class="mr-1.5">{{ item.icon }}</span>
                    {{ item.label }}
                    <span
                        v-if="item.children.length > 0"
                        class="ml-2 submenu-icon transition-transform duration-300"
                        :class="{ 'rotate-180': submenuOpenMap[index] }"
                        >▼</span
                    >
                </div>

                <!-- 子菜单 -->
                <div
                    v-if="item.children.length > 0 && submenuOpenMap[index]"
                    class="absolute top-full left-0 mt-2 w-[180px] rounded-lg shadow-md z-50 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-200 opacity-100 visible"
                    @mouseenter="handleSubmenuMouseEnter(index)"
                    @mouseleave="handleSubmenuMouseLeave(index)"
                >
                    <div class="flex flex-col items-start p-2">
                        <div
                            v-for="child in item?.children || []"
                            :key="child.label"
                            class="option-item w-full py-2 px-3 rounded-md cursor-pointer transition-all duration-200 flex items-center text-gray-600 dark:text-gray-300"
                            :class="[
                                getActiveIndex(child.route || '') ===
                                currentActiveIndex
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 active'
                                    : '',
                            ]"
                            @click="navigateTo(child)"
                        >
                            <span class="mr-1.5">{{ child.icon }}</span>
                            {{ child.label }}
                            <!-- 外部链接标识 -->
                            <span
                                v-if="
                                    child.route &&
                                    /^https?:\/\//.test(child.route)
                                "
                                class="ml-auto w-4 h-4 opacity-70 flex items-center justify-center"
                                >⤴</span
                            >
                        </div>
                    </div>
                </div>
            </template>

            <!-- 更多菜单（带三角指示器） -->
            <template v-if="item.label === '更多'">
                <div
                    ref="moreMenuRef"
                    class="relative"
                    @mouseenter="handleMouseEnter"
                    @mouseleave="handleMouseLeave"
                >
                    <div
                        class="nav-item flex items-center justify-center h-[36px] px-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 cursor-pointer"
                        :class="[
                            currentActiveIndex === index
                                ? 'text-blue-600 dark:text-blue-400'
                                : '',
                        ]"
                        :style="
                            currentActiveIndex === index
                                ? activeStyles
                                : normalStyles
                        "
                        @click="toggleMoreMenu"
                    >
                        <span class="mr-1.5">{{ item.icon }}</span>
                        {{ item.label }}
                        <span
                            class="ml-2 submenu-icon transition-transform duration-300"
                            :class="{ 'rotate-180': moreMenuOpen }"
                            >▼</span
                        >
                    </div>

                    <!-- 更多子菜单 -->
                    <div
                        v-if="moreMenuOpen"
                        class="absolute top-full left-0 mt-2 w-[180px] rounded-lg shadow-md z-50 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-200"
                        @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave"
                    >
                        <!-- 三角指示器 -->
                        <div class="triangle-indicator" />

                        <div class="flex flex-col items-start p-2">
                            <div
                                v-for="child in item?.children || []"
                                :key="child.label"
                                class="option-item w-full py-2 px-3 rounded-md cursor-pointer transition-all duration-200 flex items-center text-gray-600 dark:text-gray-300"
                                :class="[
                                    getActiveIndex(child.route || '') ===
                                    currentActiveIndex
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 active'
                                        : '',
                                ]"
                                @click="navigateTo(child)"
                            >
                                <span class="mr-1.5">{{ child.icon }}</span>
                                {{ child.label }}
                                <!-- 外部链接标识 -->
                                <span
                                    v-if="
                                        child.route &&
                                        /^https?:\/\//.test(child.route)
                                    "
                                    class="ml-auto w-4 h-4 opacity-70 flex items-center justify-center"
                                    >⤴</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>

    <!-- 移动端导航触发器 -->
    <div id="mobile-nav" class="nav-container">
        <div class="flex justify-end items-center p-3">
            <div class="cursor-pointer" @click="mobileNavClick">
                <span class="text-xl text-white">{{
                    mobileNavBool ? "✕" : "☰"
                }}</span>
            </div>
        </div>
    </div>

    <!-- 移动端导航菜单 -->
    <div
        v-if="mobileNavBool"
        class="mobile-nav-div fixed inset-0 z-50 flex"
        :class="{
            'translate-x-0': mobileNavBool,
            'translate-x-[100%]': !mobileNavBool,
        }"
        @keydown.escape="mobileNavClickHide"
    >
        <div
            class="nav-menu w-4/5 bg-white dark:bg-gray-800 h-full shadow-2xl transform transition-all duration-300 ease-in-out"
            :class="mobileNavBool ? 'translate-x-0' : 'translate-x-full'"
        >
            <div
                class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center"
            >
                <h3 class="font-semibold text-gray-800 dark:text-white">
                    天渺studio的小站
                </h3>
                <button @click="mobileNavClickHide">
                    <span class="text-xl"
                        ><Icon icon="mdi:close" width="24" height="24"
                    /></span>
                </button>
            </div>
            <div class="py-4">
                <div
                    v-for="(item, index) in navFilter"
                    :key="item.label"
                    class="border-b border-gray-200 dark:border-gray-700"
                >
                    <div
                        v-if="item.children.length > 0"
                        class="nav-menu-link flex items-center py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                        :class="{
                            'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20':
                                currentActiveIndex === index,
                        }"
                        @click.stop="toggleSubmenu(index)"
                    >
                        <span class="mr-3">{{ item.icon }}</span>
                        {{ item.label }}
                        <span class="ml-auto text-gray-400"
                            ><Icon
                                icon="mdi:chevron-right"
                                :class="{ 'rotate-90': submenuOpenMap[index] }"
                        /></span>
                    </div>
                    <div
                        v-else
                        class="nav-menu-link flex items-center py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                        :class="{
                            'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20':
                                currentActiveIndex === index,
                        }"
                        @click="navigateTo(item)"
                    >
                        <span class="mr-3">{{ item.icon }}</span>
                        {{ item.label }}
                    </div>
                    <div
                        v-if="item.children.length > 0 && submenuOpenMap[index]"
                        class="pl-8 py-2"
                    >
                        <div
                            v-for="child in item?.children || []"
                            :key="child.label"
                            class="flex items-center py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                            :class="{
                                'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20':
                                    getActiveIndex(child.route || '') ===
                                    currentActiveIndex,
                            }"
                            @click="navigateTo(child)"
                        >
                            <span class="mr-2">{{ child.icon }}</span>
                            <span class="text-gray-700 dark:text-white">{{
                                child.label
                            }}</span>
                            <!-- 外部链接标识 -->
                            <span
                                v-if="
                                    child.route &&
                                    /^https?:\/\//.test(child.route)
                                "
                                class="ml-auto w-4 h-4 opacity-70 flex items-center justify-center"
                                >⤴</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex-1 bg-black/50 backdrop-blur-sm"
            @click="mobileNavClickHide"
        />
    </div>
</template>

<style scoped>
.nav-container {
    position: relative;
    display: flex;
    font-size: 14px;
    z-index: 2;
    padding: 0;
}

#mobile-nav {
    display: none;
}

@media (max-width: 768px) {
    #pc-nav {
        display: none;
    }
    #mobile-nav {
        display: flex;
        flex: 1;
        justify-content: end;
    }
}

.mobile-nav-div {
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 50;
}

@media (min-width: 768px) {
    .mobile-nav-div {
        display: none;
    }
}

.nav-item {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 1;
    margin: 0 2px;
    transition: all 0.3s ease;
    border-radius: 18px;
    color: #f9fafb;
    text-shadow: -1px 0px 1px rgba(236, 234, 234, 0.3);
}

.nav-item:hover {
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    color: #333333;
    text-shadow: none;
}

.active-item {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    box-shadow:
        0 0 0 2px rgba(59, 130, 246, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.08);
    color: #333333;
    text-shadow: none;
}

.dark .nav-item {
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.dark .nav-item:hover {
    color: #333333;
    text-shadow: none;
}

.submenu-icon {
    font-size: 10px;
    transition: transform 0.3s ease;
    display: inline-block;
}

.rotate-180 {
    transform: rotate(180deg);
}

.nav-item:hover .submenu-icon,
.active-item .submenu-icon {
    transform: rotate(180deg);
}

.option-item {
    transition: all 0.2s ease;
    border-radius: 4px;
}

.option-item:hover {
    background-color: rgba(59, 130, 246, 0.08);
    transform: translateX(2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.option-item.active {
    background-color: rgba(59, 130, 246, 0.15);
    color: #3b82f6;
    transform: translateX(2px);
}

/* 三角指示器样式 */
.triangle-indicator {
    position: absolute;
    top: -6px;
    left: 24px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid white;
    z-index: 1;
}

.dark .triangle-indicator {
    border-bottom-color: #2d3748;
}

.mobile-nav-div {
    justify-content: flex-end;
}

.mobile-nav-div .nav-menu {
    transform-origin: right center;
}

.mobile-nav-div .nav-menu {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-nav-div .nav-menu,
.mobile-nav-div {
    transition: transform 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
