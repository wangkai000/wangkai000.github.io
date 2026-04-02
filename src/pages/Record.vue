<!-- eslint-disable vue/require-toggle-inside-transition -->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { type Resource, resources } from '@/data/resources'

// 当前选中的标签
const activeTags = ref<string[]>([])

// 跳转确认弹窗
const showJumpConfirm = ref(false)
const pendingJumpUrl = ref('')

function handleResourceClick(url: string) {
  pendingJumpUrl.value = url
  showJumpConfirm.value = true
}

function confirmJump() {
  showJumpConfirm.value = false
  window.open(pendingJumpUrl.value, '_blank', 'noopener,noreferrer')
}

function cancelJump() {
  showJumpConfirm.value = false
  pendingJumpUrl.value = ''
}

// 过滤资源
const filteredResources = computed<Resource[]>(() => {
  if (activeTags.value.length === 0)
    return resources
  return resources.filter(resource =>
    activeTags.value.some(tag => resource.tags.includes(tag)),
  )
})

// 获取所有唯一标签
const uniqueTags = computed<string[]>(() => {
  const tags = new Set<string>()
  resources.forEach((resource) => {
    resource.tags.forEach((tag: string) => tags.add(tag))
  })
  return Array.from(tags).sort()
})

// 切换标签
function toggleTag(tag: string) {
  if (activeTags.value.includes(tag)) {
    activeTags.value = activeTags.value.filter(t => t !== tag)
  }
  else {
    activeTags.value = [...activeTags.value, tag]
  }
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'instant' })
}

// 清除筛选
function clearFilter() {
  activeTags.value = []
  window.scrollTo({ top: 0, behavior: 'instant' })
}

// 处理图片加载错误
function handleImageError(resource: Resource) {
  resource.imageError = true
}

// 分页相关
const currentPage = ref(1)
const pageSize = ref(21)
const totalPages = computed(() =>
  Math.ceil(filteredResources.value.length / pageSize.value),
)

// 分页后的资源
const paginatedResources = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredResources.value.slice(start, end)
})

// 当筛选条件变化时重置页码
watch(
  activeTags,
  () => {
    currentPage.value = 1
  },
  { deep: true },
)

// 上一页
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

// 下一页
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}
</script>

<template>
  <main>
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- 跳转确认弹窗 -->
      <Transition name="modal">
        <div
          v-if="showJumpConfirm"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          @click.self="cancelJump"
        >
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl border border-violet-200 dark:border-gray-700">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Icon icon="mdi:alert-circle" class="text-3xl text-amber-500" />
              </div>
              <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                即将离开本站
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                您即将跳转到第三方网站，请确认是否继续？
              </p>
              <div class="flex gap-3">
                <button
                  class="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  @click="cancelJump"
                >
                  取消
                </button>
                <button
                  class="flex-1 px-4 py-2.5 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
                  @click="confirmJump"
                >
                  确认跳转
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- 标签筛选区域 -->
      <div
        class="mb-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100/50 dark:border-gray-700/50 transition-all duration-300"
      >
        <div class="flex flex-wrap items-center justify-between mb-5 gap-3">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25"
            >
              <Icon
                icon="mdi:bookmark-multiple"
                class="text-white text-xl"
              />
            </div>
            <div>
              <h2
                class="text-xl font-bold text-gray-800 dark:text-gray-100"
              >
                收录👍资源
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ filteredResources.length }} 个站点
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <button
              v-if="activeTags.length > 0"
              class="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
              @click="clearFilter"
            >
              <Icon icon="mdi:filter-remove" class="text-base" />
              清除筛选
            </button>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="(tag, index) in uniqueTags"
            :key="tag"
            class="transition-all duration-300 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 active:scale-95"
            :class="[
              activeTags.includes(tag)
                ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100/80 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-600/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50',
            ]"
            :style="{ animationDelay: `${index * 30}ms` }"
            @click="toggleTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <!-- 资源展示区域 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="resource in paginatedResources"
          :key="resource.id"
          class="h-full"
        >
          <div
            role="link"
            tabindex="0"
            class="group relative block w-full h-full rounded-2xl overflow-hidden shadow-lg border border-violet-100 dark:border-gray-700/50 transition-all duration-500 bg-gradient-to-br from-white dark:from-gray-900 via-violet-50/80 dark:via-gray-800/80 to-indigo-100/60 dark:to-gray-800 cursor-pointer"
            @click="handleResourceClick(resource.url)"
            @keydown.enter="handleResourceClick(resource.url)"
          >
            <!-- 装饰光斑 -->
            <div
              class="absolute -top-12 -right-12 w-32 h-32 bg-violet-200/50 dark:bg-gray-600/30 rounded-full blur-2xl opacity-0 transition-opacity duration-500"
            />
            <div
              class="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-200/50 dark:bg-gray-600/30 rounded-full blur-xl opacity-0 transition-opacity duration-700"
            />

            <!-- 卡片内容 -->
            <div
              class="relative p-5 h-full flex flex-col backdrop-blur-sm"
            >
              <!-- 头部：图标 + 标题 -->
              <div class="flex items-start gap-4 mb-3">
                <div
                  class="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-gray-700 dark:to-gray-700 backdrop-blur-md border border-violet-200/50 dark:border-gray-600 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  <img
                    v-if="!resource.imageError"
                    :src="resource.imageUrl"
                    class="w-full h-full object-contain p-2"
                    loading="lazy"
                    @error="handleImageError(resource)"
                  >
                  <Icon
                    v-else
                    icon="mdi:link-variant"
                    class="text-2xl text-violet-600 dark:text-violet-400"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-2 leading-tight transition-colors"
                  >
                    {{ resource.title }}
                  </h3>
                </div>
                <Icon
                  icon="mdi:arrow-top-right"
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>

              <!-- 标签 -->
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span
                  v-for="tag in resource.tags"
                  :key="tag"
                  class="text-xs px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-gray-700/60 text-violet-600 dark:text-gray-200 backdrop-blur-sm border border-violet-200/50 dark:border-gray-600 font-medium"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- 描述 -->
              <p
                class="text-sm text-gray-600 dark:text-gray-300 flex-grow leading-relaxed line-clamp-3 transition-colors duration-300"
              >
                {{ resource.description }}
              </p>

              <!-- 底部装饰线 -->
              <div
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-300/50 to-transparent opacity-0 transition-opacity duration-500 dark:via-gray-500/60"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div
        v-if="filteredResources.length === 0"
        class="flex flex-col items-center justify-center py-20 text-center"
      >
        <div
          class="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4"
        >
          <Icon
            icon="mdi:bookmark-off-outline"
            class="text-4xl text-gray-400"
          />
        </div>
        <p class="text-gray-500 dark:text-gray-400 text-lg">
          暂无匹配的资源
        </p>
        <button
          class="mt-4 px-6 py-2 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors"
          @click="clearFilter"
        >
          清除筛选
        </button>
      </div>

      <!-- 分页器 -->
      <div
        v-if="totalPages > 1"
        class="flex items-center justify-center mt-10 gap-3"
      >
        <button
          :disabled="currentPage === 1"
          class="w-11 h-11 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-white hover:dark:bg-gray-800 hover:border-violet-300 hover:dark:border-violet-600 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          @click="prevPage"
        >
          <Icon icon="mdi:chevron-left" class="text-xl" />
        </button>
        <div
          class="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-sm"
        >
          <span
            class="text-lg font-semibold text-violet-600 dark:text-violet-400"
          >{{ currentPage }}</span>
          <span class="text-gray-400">/</span>
          <span class="text-gray-500 dark:text-gray-400">{{
            totalPages
          }}</span>
        </div>
        <button
          :disabled="currentPage === totalPages"
          class="w-11 h-11 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-white hover:dark:bg-gray-800 hover:border-violet-300 hover:dark:border-violet-600 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          @click="nextPage"
        >
          <Icon icon="mdi:chevron-right" class="text-xl" />
        </button>
      </div>
    </div>
    <ScrollTopButton />
  </main>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
