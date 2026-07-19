<script setup lang="ts">
import { NMessageProvider, NNotificationProvider } from 'naive-ui'
import { useHead } from '@vueuse/head'
import { AppSetup } from './utils/app'
import { SITE } from '@/config/param'

AppSetup()

useHead({
  title: SITE.title,
  meta: [
    { name: 'author', content: SITE.author },
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: SITE.description,
    },
    {
      name: 'keywords',
      content: SITE.keywords,
    },
    { property: 'og:title', content: SITE.title },
    {
      property: 'og:description',
      content: SITE.description,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://tianmiao.site/' },
    { property: 'og:locale', content: 'zh_CN' },
    { property: 'og:site_name', content: '天渺studio' },
    {
      property: 'og:image',
      content: 'https://s21.ax1x.com/2024/12/22/pAXAGEn.jpg',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://tianmiao.site/' },
    {
      name: 'twitter:title',
      content: SITE.title,
    },
    {
      name: 'twitter:description',
      content: SITE.description,
    },
    {
      name: 'twitter:image',
      content: 'https://s21.ax1x.com/2024/12/22/pAXAGEn.jpg',
    },
    { name: 'msapplication-TileColor', content: '#f3f3f3' },
  ],
  link: [
    { rel: 'canonical', href: 'https://tianmiao.site' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': SITE.title,
        'url': 'https://tianmiao.site/',
        'description': SITE.description,
        'author': {
          '@type': 'Person',
          'name': 'Kai(天渺studio)',
          'url': 'https://tianmiao.site/about',
          'jobTitle': '独立开发者/独立游戏开发者',
          'knowsAbout': ['Vue', 'React', 'Node.js', 'Android', 'Flutter', '移动端开发'],
        },
      }),
    },
  ],
})
</script>

<template>
  <NNotificationProvider>
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NNotificationProvider>
</template>
