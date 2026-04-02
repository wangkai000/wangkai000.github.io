<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { NImage, NImageGroup } from 'naive-ui'
import avatar from '../../public/logo.svg'

// 统一的作者信息
const defaultAuthor = {
  name: 'kai233',
  avatar,
}

// 时间格式化函数
function formatTime(timestamp) {
  const now = new Date()
  const postDate = new Date(timestamp)
  const diffMs = now - postDate
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffMs / (1000 * 60))

  // 获取时分格式
  const hours = postDate.getHours().toString().padStart(2, '0')
  const minutes = postDate.getMinutes().toString().padStart(2, '0')
  const timeStr = `${hours}:${minutes}`

  if (diffMinutes < 60) {
    // 1小时内显示"刚刚"或"X分钟前"
    return diffMinutes < 1 ? '刚刚' : `${diffMinutes}分钟前`
  }
  else if (diffHours < 24) {
    // 24小时内显示"X小时前"
    return `${diffHours}小时前`
  }
  else if (diffDays === 1) {
    // 昨天
    return `昨天 ${timeStr}`
  }
  else if (diffDays === 2) {
    // 前天
    return `前天 ${timeStr}`
  }
  else if (diffDays < 7) {
    // 一周内显示"X天前 时:分"
    return `${diffDays}天前 ${timeStr}`
  }
  else {
    // 超过一周显示完整日期时间
    const year = postDate.getFullYear()
    const month = (postDate.getMonth() + 1).toString().padStart(2, '0')
    const day = postDate.getDate().toString().padStart(2, '0')

    // 如果是今年，不显示年份
    if (year === now.getFullYear()) {
      return `${month}-${day} ${timeStr}`
    }
    else {
      return `${year}-${month}-${day} ${timeStr}`
    }
  }
}

// ESC键关闭图片预览
function _handleEscKey(_e) {
  // 注意：Naive UI 的 Image 组件有自己的键盘事件处理，这里可能不需要
}

onMounted(() => {
  window.addEventListener('keydown', _handleEscKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', _handleEscKey)
})

// 模拟朋友圈数据
const posts = ref([
  {
    author: defaultAuthor,
    timestamp: 1764074400000, // 2小时前
    location: '深圳大鹏新区坝光白沙湾',
    content: '三水线徒步路线挑战结束，只完成了85%',
    images: [
      'https://s21.ax1x.com/2025/11/23/pZktM0H.jpg',
      'https://s21.ax1x.com/2025/11/23/pZktKne.jpg',
      'https://s21.ax1x.com/2025/11/23/pZktnXD.jpg',
      'https://s21.ax1x.com/2025/11/23/pZktm6O.jpg',
      'https://s21.ax1x.com/2025/11/23/pZktEfx.jpg',
      'https://s21.ax1x.com/2025/11/23/pZktAt1.jpg',
      'https://s21.ax1x.com/2025/11/23/pZkte1K.jpg',
    ],
    likes: 0,
    liked: false,
    likedUsers: ['李四', '王五', '赵六'],
  },
  {
    author: defaultAuthor,
    timestamp: 1757512872812, // 2小时前
    location: '未知',
    content: '见证者为见证而来,铭记者为铭记而生 —— 钟离',
    images: ['https://s3.bmp.ovh/imgs/2025/08/14/532b284a734990e7.png'],
    likes: 0,
    liked: false,
    likedUsers: ['李四', '王五', '赵六'],
  },
  {
    author: defaultAuthor,
    timestamp: 1755339000000, // 2小时前
    location: '未知',
    content: '团建结束',
    images: ['https://s21.ax1x.com/2025/09/20/pV4VdKI.jpg'],
    likes: 0,
    liked: false,
    likedUsers: ['李四', '王五', '赵六'],
  },
  {
    author: defaultAuthor,
    timestamp: 1746192000000, // 2小时前
    location: '未知',
    content:
            '历史是一个有耐心的老师，如果你吸取不了教训，那他就会一次又一次的教你。',
    images: ['https://s21.ax1x.com/2025/09/19/pV4ViD0.jpg'],
    likes: 0,
    liked: false,
    likedUsers: ['李四', '王五', '赵六'],
  },
  {
    author: defaultAuthor,
    timestamp: 1746192000000, // 2小时前
    location: '未知',
    content: '已识乾坤大，犹怜草木青',
    images: [
      'https://s3.bmp.ovh/imgs/2025/09/20/9acacc1825b45118.jpg',
      'https://s3.bmp.ovh/imgs/2025/09/20/51620ece13ef1896.jpg',
      'https://s3.bmp.ovh/imgs/2025/09/20/34c941b12db8291a.jpg',
      'https://s3.bmp.ovh/imgs/2025/09/20/e4a4fc4be5a5cd46.jpg',
      'https://s3.bmp.ovh/imgs/2025/09/20/e7d536d72e7e883a.jpg',
    ],
    likes: 0,
    liked: false,
    likedUsers: ['李四', '王五', '赵六'],
  },
  {
    author: defaultAuthor,
    timestamp: 1725120237107,
    location: '未知',
    content: '分享几张爬山拍的图',
    images: [
      'https://s21.ax1x.com/2025/07/22/pV840ET.jpg',
      'https://s21.ax1x.com/2025/06/22/pVZaYzF.jpg',
      'https://s21.ax1x.com/2025/06/22/pVZa8iV.jpg',
    ],
    likes: 0,
    liked: true,
    likedUsers: ['张三', '小明', '小红', '小刚'],
  },
  {
    author: defaultAuthor,
    timestamp: 1721520227892,
    content:
            'To be creative means to be in love with life. You can be creative only if you love life enough that you want to enhance its beauty, you want to bring a little more music to it, a little more poetry to it, a little more dance to it.',
    images: ['https://s3.bmp.ovh/imgs/2025/08/14/5fe6df0ae9b5ca0f.jpg'],
    likes: 0,
    liked: false,
    likedUsers: ['小丽', '大强'],
  },
  {
    author: defaultAuthor,
    timestamp: 1718519127892,
    content: 'first\ntest！',
    images: [],
    likes: 0,
    liked: false,
    likedUsers: ['小丽', '大强'],
  },
])

// 图片加载失败状态管理
const failedImages = ref(new Set())

// 图片加载失败处理
function handleImageError(e, imageId) {
  failedImages.value.add(imageId)
  e.target.style.display = 'none'
}

// 检查图片是否加载失败
function isImageFailed(imageId) {
  return failedImages.value.has(imageId)
}

// 加载状态
const loading = ref(false)

// 切换点赞状态
function _toggleLike(_index) {
  // 功能预留
}

// 加载更多
function _loadMore() {
  if (loading.value)
    return

  loading.value = true

  // 模拟网络请求延迟
  setTimeout(() => {
    const newPosts = [
      {
        author: defaultAuthor,
        timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3天前
        content: '新买的相机到了，试拍了几张，效果还不错！',
        images: ['https://picsum.photos/id/96/800/600'],
        likes: 45,
        liked: false,
        likedUsers: ['小红', '小刚'],
      },
      {
        author: defaultAuthor,
        timestamp: Date.now() - 4 * 24 * 60 * 60 * 1000, // 4天前
        location: '城市图书馆',
        content: '分享最近在读的一本书，很有启发，推荐给大家～',
        images: ['https://picsum.photos/id/24/800/600'],
        likes: 29,
        liked: false,
        likedUsers: ['小明', '王五'],
      },
    ]

    posts.value = [...posts.value, ...newPosts]
    loading.value = false
  }, 1000)
}
</script>

<template>
  <main>
    <div class="min-h-screen flex flex-col">
      <!-- 朋友圈列表 -->
      <main class="flex-1 max-w-3xl w-full mx-auto px-4 py-6">
        <!-- 朋友圈内容 -->
        <div class="space-y-6">
          <div
            v-for="(post, postIndex) in posts"
            :key="postIndex"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-md"
          >
            <!-- 作者信息和时间 -->
            <div class="p-4 flex items-center">
              <div class="relative w-10 h-10 mr-3">
                <NImage
                  v-if="!isImageFailed(`avatar-${postIndex}`)"
                  :src="post.author.avatar"
                  alt="用户头像"
                  class="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700"
                  :preview-disabled="true"
                  @error="
                    handleImageError(
                      $event,
                      `avatar-${postIndex}`,
                    )
                  "
                />
                <div
                  v-else
                  class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                >
                  <Icon
                    icon="ic:baseline-person"
                    width="20"
                    height="20"
                    class="text-gray-500 dark:text-gray-400"
                  />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h3
                    class="font-semibold text-gray-800 dark:text-white truncate"
                  >
                    {{ post.author.name }}
                  </h3>
                  <p
                    class="text-xs text-gray-500 dark:text-gray-400 ml-2"
                  >
                    {{ formatTime(post.timestamp) }}
                  </p>
                </div>
                <!-- 可添加位置信息等辅助内容 -->
                <p
                  v-if="post.location"
                  class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex items-center"
                >
                  <Icon
                    icon="ic:baseline-place"
                    width="12"
                    height="12"
                    class="mr-1 flex-shrink-0"
                  />
                  <span>{{ post.location }}</span>
                </p>
              </div>
            </div>

            <!-- 内容 -->
            <div class="px-4 pb-3">
              <p
                class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
              >
                {{ post.content }}
              </p>
            </div>

            <!-- 图片 -->
            <div v-if="post.images.length > 0" class="px-4 pb-4">
              <NImageGroup>
                <!-- 1张图片 -->
                <div v-if="post.images.length === 1" class="w-full">
                  <NImage
                    v-if="
                      !isImageFailed(
                        `post-${postIndex}-img-0`,
                      )
                    "
                    :src="post.images[0]"
                    alt="朋友圈图片"
                    class="rounded-lg w-full"
                    object-fit="contain"
                    :preview-src="post.images[0]"
                    height="360"
                    @error="
                      handleImageError(
                        $event,
                        `post-${postIndex}-img-0`,
                      )
                    "
                  />
                  <div
                    v-else
                    class="rounded-lg bg-gray-200 dark:bg-gray-700 w-full h-[280px] sm:h-[360px] flex items-center justify-center"
                  >
                    <Icon
                      icon="ic:baseline-image"
                      width="48"
                      height="48"
                      class="text-gray-400 dark:text-gray-500"
                    />
                  </div>
                </div>

                <!-- 2张图片 -->
                <div
                  v-if="post.images.length === 2"
                  class="grid grid-cols-2 gap-2"
                >
                  <div
                    v-for="(img, imgIndex) in post.images"
                    :key="imgIndex"
                  >
                    <NImage
                      v-if="
                        !isImageFailed(
                          `post-${postIndex}-img-${imgIndex}`,
                        )
                      "
                      :src="img"
                      :alt="`朋友圈图片 ${imgIndex + 1}`"
                      class="rounded-lg w-full"
                      object-fit="contain"
                      :preview-src="img"
                      height="240"
                      @error="
                        handleImageError(
                          $event,
                          `post-${postIndex}-img-${imgIndex}`,
                        )
                      "
                    />
                    <div
                      v-else
                      class="rounded-lg bg-gray-200 dark:bg-gray-700 w-full h-[180px] sm:h-[240px] flex items-center justify-center"
                    >
                      <Icon
                        icon="ic:baseline-image"
                        width="32"
                        height="32"
                        class="text-gray-400 dark:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <!-- 3张以上图片 -->
                <div
                  v-if="post.images.length > 2"
                  class="grid grid-cols-3 gap-2"
                >
                  <div
                    v-for="(img, imgIndex) in post.images"
                    :key="imgIndex"
                  >
                    <NImage
                      v-if="
                        !isImageFailed(
                          `post-${postIndex}-img-${imgIndex}`,
                        )
                      "
                      :src="img"
                      :alt="`朋友圈图片 ${imgIndex + 1}`"
                      class="rounded-lg w-full"
                      object-fit="contain"
                      :preview-src="img"
                      height="160"
                      @error="
                        handleImageError(
                          $event,
                          `post-${postIndex}-img-${imgIndex}`,
                        )
                      "
                    />
                    <div
                      v-else
                      class="rounded-lg bg-gray-200 dark:bg-gray-700 w-full h-[120px] sm:h-[160px] flex items-center justify-center"
                    >
                      <Icon
                        icon="ic:baseline-image"
                        width="24"
                        height="24"
                        class="text-gray-400 dark:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </NImageGroup>
            </div>

            <!-- 互动按钮 -->
            <div
              class="border-t border-gray-100 dark:border-gray-700 px-4 py-1"
            >
              <div
                class="flex justify-between text-gray-500 dark:text-gray-400 text-sm"
              >
                <button
                  class="flex items-center justify-center space-x-1.5 py-2 px-4 rounded-full cursor-not-allowed opacity-50 flex-1"
                  disabled
                >
                  <Icon
                    icon="ic:baseline-thumb-up"
                    width="18"
                    height="18"
                    class="text-gray-400"
                  />
                  <span>{{ post.likes }}</span>
                </button>
                <button
                  class="flex items-center justify-center space-x-1.5 py-2 px-4 rounded-full cursor-not-allowed opacity-50 flex-1"
                  disabled
                >
                  <Icon
                    icon="ic:baseline-comment"
                    width="18"
                    height="18"
                    class="text-gray-400"
                  />
                  <span>评论</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      <!-- 加载更多 -->
      <!-- <div class="flex justify-center py-8">
        <button
          class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all flex items-center space-x-2"
          :disabled="loading"
          @click="loadMore"
        >
          <span>加载更多</span>
          <Icon
            icon="ic:baseline-chevron-down"
            width="18"
            height="18"
            :class="{ 'animate-spin': loading }"
          />
        </button>
      </div> -->
      </main>
    </div>
    <ScrollTopButton />
  </main>
</template>

<style scoped>
/* 滚动条美化 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* 动画效果 */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
