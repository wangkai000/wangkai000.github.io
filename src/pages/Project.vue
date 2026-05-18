<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

// 项目数据类型
interface Project {
  name: string
  desc: string
  cover?: string
  tags: string[]
  github?: string
  gitee?: string
  demoUrl?: string | string[]
  pinned?: boolean
}

// 项目数据
const projects = ref<Project[]>([
  {
    name: '星途导航-资源导航站',
    desc: '基于 Nuxt 4 + TS + Element Plus + Tailwind 开发的静态导航站，高度还原老版 One Nav 模板 UI。',
    cover: 'https://s3.bmp.ovh/2026/04/18/QqaMDixq.png',
    tags: ['Nuxt.js', '导航模板'],
    github: 'https://github.com/wangkai000/nuxt-one-nav',
    gitee: 'https://gitee.com/wangkai000/my-nuxt-nav',
    demoUrl: ['https://nav.tianmiao.site/', 'https://nav1.tianmiao.site/'],
    pinned: true,
  },
  {
    name: 'vite-plugin-pack-orchestrator',
    desc: 'Vite插件构建完成后自动将 dist 打包为 ZIP/TAR/7Z，支持 MD5/SHA1/SHA256 校验和计算、自动重命名（占位符：name/version/timestamp/hash），内置 7z 高压缩，零额外依赖，轻松集成 CI/CD 流水线。',
    tags: ['js插件', 'TypeScript', 'Vite'],
    github: 'https://github.com/wangkai000/vite-plugin-pack-orchestrator',
    gitee: 'https://gitee.com/wangkai000/vite-plugin-pack-orchestrator',
    pinned: true,
  },
  {
    name: 'adblock-easylist-detector',
    desc: '一个广告拦截插件检测js库，基于 EasyList 规则反向探测 + CSS 诱饵元素双重检测的轻量 AdBlock 检测插件。',
    tags: ['js插件', 'TypeScript', '广告'],
    github: 'https://github.com/wangkai000/adblock-easylist-detector',
    gitee: 'https://gitee.com/wangkai000/adblock-easylist-detector',
    pinned: true,
  },
  {
    name: '我的博客',
    desc: '基于 Vue3 + TypeScript + Vite + TailwindCSS 构建的个人博客系统',
    cover: 'https://s3.bmp.ovh/2026/03/22/WlMQJA3r.jpg',
    tags: ['Web', 'Vue'],
    github: 'https://github.com/wangkai000/my-blog',
    demoUrl: ['https://tianmiao.site/', 'http://weblog.tianmiao.site/'],
  },
  {
    name: 'update-notify-js',
    desc: '一个轻量级的纯前端实现的版本更新自动检测和提示刷新插件。它能够自动监测应用的新版本发布，并通过友好的方式通知用户进行更新，确保用户始终使用最新版本的应用。',
    tags: ['js插件', 'TypeScript'],
    github: 'https://github.com/wangkai000/update-notify-js',
    gitee: 'https://gitee.com/wangkai000/update-notify-js',
  },
  {
    name: 'unplugin-pack-orchestrator',
    desc: '基于 unplugin 的通用打包压缩插件，支持 Vite、Webpack、Rollup、ESBuild，可生成 ZIP / TAR / TAR.GZ / 7Z 文件，支持自动重命名归档文件。',
    tags: ['js插件', 'TypeScript', 'Vite', 'Webpack', 'Rollup', 'Esbuild'],
    github: 'https://github.com/wangkai000/unplugin-pack-orchestrator',
    gitee: 'https://gitee.com/wangkai000/unplugin-pack-orchestrator',
  },
  {
    name: 'vue-intercept-plugin',
    desc: '一个可以拦截vue中点击事件的自定义拦截器，适用于权限控制等场景',
    tags: ['Vue'],
    github: 'https://github.com/wangkai000/vue-intercept-plugin',
    gitee: 'https://gitee.com/wangkai000/vue-intercept-plugin',
  },
])

// 当前选中的标签
const selectedTags = ref<string[]>([])

// 获取所有唯一标签
const allTags = computed(() => {
  const tags = new Set<string>()
  projects.value.forEach((project) => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

// 过滤后的项目（置顶优先，保持数组内顺序）
const filteredProjects = computed(() => {
  let list = projects.value
  if (selectedTags.value.length > 0) {
    list = list.filter(project =>
      selectedTags.value.some(tag => project.tags.includes(tag)),
    )
  }
  return [...list].sort((a, b) => {
    if (a.pinned && !b.pinned)
      return -1
    if (!a.pinned && b.pinned)
      return 1
    return 0
  })
})

// 切换标签
function toggleTag(tag: string) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  }
  else {
    selectedTags.value = [...selectedTags.value, tag]
  }
}

// 清除筛选
function clearSelectedTags() {
  selectedTags.value = []
}

// 处理图片加载错误
function handleImageError(event: Event, projectName: string) {
  const project = projects.value.find(p => p.name === projectName)
  if (project) {
    project.cover = '' // 清除 URL，触发兜底显示
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div
        v-for="project in filteredProjects"
        :key="project.name"
        class="group relative block rounded-2xl overflow-hidden shadow-lg border border-violet-100 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] bg-gradient-to-br from-white dark:from-gray-900 via-violet-50/80 dark:via-gray-800/80 to-indigo-100/60 dark:to-gray-800"
      >
        <!-- 置顶标识 -->
        <div
          v-if="project.pinned"
          class="absolute top-3 right-3 z-[1] bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1"
        >
          <Icon icon="mdi:pin" width="12" height="12" />
          置顶
        </div>

        <!-- 封面区域 -->
        <a
          :href="Array.isArray(project.demoUrl) ? project.demoUrl[0] : (project.demoUrl || project.github || project.gitee || '#')"
          target="_blank"
          class="block aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden z-0"
        >
          <img
            v-if="project.cover"
            :src="project.cover"
            :alt="project.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            @error="handleImageError($event, project.name)"
          >
          <div
            v-if="!project.cover"
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-gray-700 dark:to-gray-700"
          >
            <Icon
              icon="simple-icons:npm"
              class="text-6xl text-red-500 dark:text-red-400"
            />
          </div>
        </a>

        <!-- 内容区域 -->
        <div class="p-4">
          <h3
            class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
          >
            {{ project.name }}
          </h3>
          <div class="desc-tooltip-wrapper">
            <p class="desc-short text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ project.desc }}
            </p>
            <div class="desc-tooltip">
              {{ project.desc }}
            </div>
          </div>

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
            class="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/50"
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
            <template v-if="project.demoUrl">
              <template v-if="Array.isArray(project.demoUrl)">
                <a
                  v-for="(url, index) in project.demoUrl"
                  :key="url"
                  :href="url"
                  target="_blank"
                  class="flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
                  :class="{ 'ml-auto': index === 0 && !project.github && !project.gitee }"
                  @click.stop
                >
                  <Icon
                    icon="mdi:open-in-new"
                    width="16"
                    height="16"
                  />
                  {{ project.demoUrl.length === 1 ? '预览' : `预览${index + 1}` }}
                </a>
              </template>
              <a
                v-else
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
            </template>
          </div>
        </div>
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
  </div>
</template>

<style scoped>
.desc-tooltip-wrapper {
  position: relative;
}

.desc-short {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5rem;
}

.desc-tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: rgba(31, 41, 55, 0.95);
  backdrop-filter: blur(8px);
  color: #f3f4f6;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.7;
  box-shadow:
    0 20px 40px -10px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  width: max-content;
  max-width: 320px;
  word-break: break-word;
}

.desc-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 7px solid transparent;
  border-top-color: rgba(31, 41, 55, 0.95);
}

.desc-tooltip-wrapper:hover .desc-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
</style>
