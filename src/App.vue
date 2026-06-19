<script setup lang="ts">
import { NMessageProvider, NNotificationProvider } from 'naive-ui'
import { useHead } from '@vueuse/head'
import { AppSetup } from './utils/app'

AppSetup()

useHead({
  title: '天渺studio',
  meta: [
    { name: 'author', content: '天渺studio | 天渺工作室' },
    { name: 'robots', content: 'index, follow' },
    { name: 'revisit-after', content: '7 days' },
    {
      name: 'description',
      content:
        '天渺studio(天渺工作室)的小站 - 独立开发者/独立游戏开发者 Kai 的个人博客，分享 Vue、React、Node.js、Android、Flutter、移动端开发等技术文章与生活感悟。',
    },
    {
      name: 'keywords',
      content:
        '天渺studio, 天渺工作室, Kai, 独立开发者, 独立游戏开发者, Blog, 前端, Vue, Node.js, Android, Flutter, 博客, 技术博客',
    },
    { property: 'og:title', content: '天渺studio(天渺工作室)的小站' },
    {
      property: 'og:description',
      content:
        '天渺studio(天渺工作室)的小站 - 独立开发者/独立游戏开发者 Kai 的个人博客',
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
      content: '天渺studio(天渺工作室)的小站',
    },
    {
      name: 'twitter:description',
      content:
        '天渺studio(天渺工作室)的小站 - 独立开发者/独立游戏开发者 Kai 的个人博客',
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
        'name': '天渺studio(天渺工作室)的小站',
        'url': 'https://tianmiao.site/',
        'description': '独立开发者/独立游戏开发者 Kai 的个人博客',
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
