<script setup lang="ts">
import { type Ref, computed, onMounted, ref } from 'vue'
import { visitorApi } from '~/utils/api'

interface BlogStatsOptions {
  creationDate: string | Date
  animationDuration?: number
}

// 博客创建日期
const props = defineProps<{
  options?: BlogStatsOptions
}>()

const defaultOptions: BlogStatsOptions = {
  creationDate: '2024-06-15',
  animationDuration: 1000,
}

const options = computed(() => ({ ...defaultOptions, ...props.options }))

// 响应式数据
const totalVisits = ref(0)
const todayVisits = ref(0)
const daysRunning: Ref<number> = ref(0)
const isMounted: Ref<boolean> = ref(false)

// 计算运行天数
function calculateRunningDays() {
  const today = new Date()
  const creationDate = new Date(options.value.creationDate)
  const diffTime = Math.abs(today.getTime() - creationDate.getTime())
  daysRunning.value = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

// 数字动画函数
function animateValue(
  target: Ref<number>,
  start: number,
  end: number,
  duration: number,
) {
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (!startTime)
      startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const easeProgress = progress === 1 ? 1 : 1 - 2 ** (-10 * progress)
    target.value = Math.floor(start + easeProgress * (end - start))

    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

// 加载真实数据
onMounted(async () => {
  calculateRunningDays()
  isMounted.value = true

  try {
    // 记录一次访问
    visitorApi.record()
    // 获取统计数据
    const { data: statsRes } = await visitorApi.stats()
    const stats = statsRes.data

    setTimeout(() => {
      animateValue(
        totalVisits,
        0,
        stats.totalVisits,
        options.value.animationDuration!,
      )
      animateValue(
        todayVisits,
        0,
        stats.todayVisits,
        options.value.animationDuration! / 2,
      )
    }, 300)
  }
  catch (e) {
    console.error('Failed to fetch visitor stats', e)
  }
})

// 定义卡片样式 - 只优化颜色部分
const cardVariants = computed(() => [
  {
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
    textColor: 'text-blue-50',
    hoverColor: 'hover:from-blue-600 hover:to-blue-650',
    borderColor: 'border-blue-400/40',
  },
  {
    bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
    textColor: 'text-emerald-50',
    hoverColor: 'hover:from-emerald-600 hover:to-emerald-650',
    borderColor: 'border-emerald-400/40',
  },
  {
    bgColor: 'bg-gradient-to-br from-violet-400 to-violet-500',
    textColor: 'text-violet-50',
    hoverColor: 'hover:from-violet-600 hover:to-violet-650',
    borderColor: 'border-violet-400/40',
  },
])
</script>

<template>
  <ShadowCard class="!p-[5px]">
    <!-- 背景优化：使用现代渐变 -->
    <div
      class="blog-stats-container h-full w-full max-w-4xl mx-auto p-4 sm:p-6 min-h-[180px] flex items-center transition-all duration-300"
      :class="{
        'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500':
          isMounted,
        'bg-gray-800': !isMounted,
      }"
    >
      <div class="stats-grid w-full overflow-x-auto pb-2">
        <div class="flex space-x-3 min-w-max">
          <!-- 统计卡片 - 只优化颜色部分 -->
          <div
            v-for="(variant, index) in cardVariants"
            :key="index"
            class="stat-card flex-shrink-0 w-[calc(33.333%-8px)] sm:w-auto sm:flex-1 rounded-xl p-4 border shadow-lg transition-all duration-300"
            :class="[
              variant.bgColor,
              variant.hoverColor,
              variant.borderColor,
            ]"
          >
            <div
              class="stat-data flex flex-col items-center justify-center h-full"
            >
              <div
                class="stat-value text-xl md:text-2xl font-bold transition-transform duration-300 hover:scale-105"
                :class="variant.textColor"
              >
                {{
                  index === 0
                    ? (totalVisits || '-')
                    : index === 1
                      ? (todayVisits || '-')
                      : daysRunning
                }}
              </div>
              <div
                class="stat-label text-sm font-medium mt-1"
                :class="variant.textColor"
              >
                {{
                  index === 0
                    ? "总访问量"
                    : index === 1
                      ? "今日访问"
                      : "运行天数"
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ShadowCard>
</template>

<style scoped>
.blog-stats-container {
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
