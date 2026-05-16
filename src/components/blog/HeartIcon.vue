<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import { likeApi } from '~/utils/api'
import { getFingerprint } from '~/utils/fingerprint'

const liked = ref(false)
const count = ref(0)
const loading = ref(false)

async function fetchLikeStatus() {
  try {
    const res = await likeApi.getStatus(getFingerprint())
    liked.value = res.data.data.liked
    count.value = res.data.data.count
  }
  catch (e) {
    console.error('Failed to fetch like status', e)
  }
}

async function toggleLike() {
  if (loading.value)
    return
  loading.value = true
  try {
    if (liked.value) {
      const res = await likeApi.unlike(getFingerprint())
      liked.value = false
      count.value = res.data.data.count
    }
    else {
      const res = await likeApi.like(getFingerprint())
      if (res.data.success !== false) {
        liked.value = true
        count.value = res.data.data.count
      }
    }
  }
  catch (e) {
    console.error('Failed to toggle like', e)
  }
  finally {
    loading.value = false
  }
}

onMounted(fetchLikeStatus)
</script>

<template>
  <div class="flex flex-col items-center gap-1 select-none">
    <Icon
      :icon="liked ? 'carbon:favorite-filled' : 'carbon:favorite'"
      class="text-5xl transition-all duration-300 cursor-pointer"
      :class="
        liked
          ? 'text-red-500 dark:text-red-400 scale-110'
          : 'text-gray-400 dark:text-gray-500 hover:scale-110 hover:text-red-400'
      "
      @click="toggleLike"
    />
    <span class="text-base font-medium text-gray-500 dark:text-gray-400">{{ count }}</span>
  </div>
</template>
