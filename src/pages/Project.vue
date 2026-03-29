<script setup lang="ts">
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";

// 项目数据类型
interface Project {
    name: string;
    desc: string;
    cover?: string;
    tags: string[];
    github?: string;
    gitee?: string;
    demoUrl?: string;
}

// 项目数据
const projects: Project[] = [
    {
        name: "我的博客",
        desc: "基于 Vue3 + TypeScript + Vite + TailwindCSS 构建的个人博客系统",
        cover: "https://s3.bmp.ovh/2026/03/22/WlMQJA3r.jpg",
        tags: ["Web", "Vue"],
        github: "https://github.com/wangkai000/my-blog",
        demoUrl: "https://tianmiao.site/",
    },
    {
        name: "update-notify-js",
        desc: "一个轻量级的纯前端实现的版本更新自动检测和提示刷新插件。它能够自动监测应用的新版本发布，并通过友好的方式通知用户进行更新，确保用户始终使用最新版本的应用。",
        tags: ["工具", "TypeScript"],
        github: "https://github.com/wangkai000/update-notify-js",
    },
];

// 当前选中的标签
const selectedTags = ref<string[]>([]);

// 获取所有唯一标签
const allTags = computed(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
        project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
});

// 过滤后的项目
const filteredProjects = computed(() => {
    if (selectedTags.value.length === 0) return projects;
    return projects.filter((project) =>
        selectedTags.value.some((tag) => project.tags.includes(tag)),
    );
});

// 切换标签
function toggleTag(tag: string) {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter((t) => t !== tag);
    } else {
        selectedTags.value = [...selectedTags.value, tag];
    }
}

// 清除筛选
function clearSelectedTags() {
    selectedTags.value = [];
}

// 处理图片加载错误
function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = "none";
    const icon = img.nextElementSibling as HTMLElement;
    if (icon) icon.style.display = "flex";
}
</script>

<template>
    <div class="max-w-5xl mx-auto px-4 py-8">
        <!-- 顶部筛选区域 -->
        <div class="flex justify-center mb-8">
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
                        <Icon icon="mdi:filter-remove" width="14" height="14" />
                        清除
                    </button>

                    <span class="ml-2 text-xs text-gray-500 dark:text-gray-400">
                        {{ filteredProjects.length }} 个项目
                    </span>
                </div>
            </div>
        </div>

        <!-- 项目展示区域 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <a
                v-for="project in filteredProjects"
                :key="project.name"
                :href="
                    project.demoUrl || project.github || project.gitee || '#'
                "
                target="_blank"
                class="group relative block rounded-2xl overflow-hidden shadow-lg border border-violet-100 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] bg-gradient-to-br from-white dark:from-gray-900 via-violet-50/80 dark:via-gray-800/80 to-indigo-100/60 dark:to-gray-800"
            >
                <!-- 封面区域 -->
                <div
                    class="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden"
                >
                    <img
                        v-if="project.cover"
                        :src="project.cover"
                        :alt="project.name"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        @error="handleImageError"
                    />
                    <div
                        v-if="!project.cover"
                        class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-gray-700 dark:to-gray-700"
                    >
                        <Icon
                            icon="mdi:folder-star-outline"
                            class="text-6xl text-violet-400 dark:text-violet-500"
                        />
                    </div>
                </div>

                <!-- 内容区域 -->
                <div class="p-4">
                    <h3
                        class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
                    >
                        {{ project.name }}
                    </h3>
                    <p
                        class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed min-h-[2.5rem]"
                    >
                        {{ project.desc }}
                    </p>

                    <!-- 标签 -->
                    <div class="flex flex-wrap gap-1.5 mt-3">
                        <span
                            v-for="tag in project.tags"
                            :key="tag"
                            class="text-xs px-2 py-1 rounded-lg bg-violet-50 dark:bg-gray-700/60 text-violet-600 dark:text-gray-300 border border-violet-200/50 dark:border-gray-600"
                        >
                            {{ tag }}
                        </span>
                    </div>

                    <!-- 操作按钮 -->
                    <div
                        class="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/50"
                    >
                        <a
                            v-if="project.github"
                            :href="project.github"
                            target="_blank"
                            class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                            @click.stop
                        >
                            <Icon icon="mdi:github" width="16" height="16" />
                            GitHub
                        </a>
                        <a
                            v-if="project.gitee"
                            :href="project.gitee"
                            target="_blank"
                            class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                            @click.stop
                        >
                            <Icon
                                icon="simple-icons:gitee"
                                width="16"
                                height="16"
                            />
                            Gitee
                        </a>
                        <a
                            v-if="project.demoUrl"
                            :href="project.demoUrl"
                            target="_blank"
                            class="flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors ml-auto"
                            @click.stop
                        >
                            <Icon
                                icon="mdi:open-in-new"
                                width="16"
                                height="16"
                            />
                            预览
                        </a>
                    </div>
                </div>
            </a>
        </div>

        <!-- 空状态 -->
        <div
            v-if="filteredProjects.length === 0"
            class="flex flex-col items-center justify-center py-20 text-center"
        >
            <div
                class="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4"
            >
                <Icon
                    icon="mdi:folder-off-outline"
                    class="text-4xl text-gray-400"
                />
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-lg">
                暂无匹配的项目
            </p>
            <button
                v-if="selectedTags.length > 0"
                class="mt-4 px-6 py-2 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors"
                @click="clearSelectedTags"
            >
                清除筛选
            </button>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
