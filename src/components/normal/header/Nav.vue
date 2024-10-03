<!-- eslint-disable antfu/top-level-function -->
<script setup lang="ts">
import { navFilter } from '~/config'

const route = useRoute()
const appTitle = useTitle()
const mobileNavBool = ref(false)

const navFilterOptionBgMode = computed(() => {
  if (isDark.value)
    return 'unset'

  return 'difference'
})

const mobileNavClick = () => {
  mobileNavBool.value = !mobileNavBool.value
}
const mobileNavClickHide = () => {
  mobileNavBool.value = false
}
const navMenuClick = async () => {
  await nextTick()
  mobileNavBool.value = false
}
// ------------------------------------data------------------------------------//
// 每个 item 的宽高
const navItemOptions = {
  width: 80,
  height: 28,
  padding: 5,
}
// 0. 通过序号计算左右移动的位置
const currentItemIndex = ref<number>(-2)
// 1. 背景的样式，外面的盒子移动
const outerBgStyles = computed(() => {
  return {
    width: `${navItemOptions.width}px`,
    height: `${navItemOptions.height}px`,
    transform: `
      translate(
        ${currentItemIndex.value * navItemOptions.width + navItemOptions.padding}px,
        5px
      )
    `,
  }
})
// 2. 背景的样式，里面的盒子跳动
const bgInnerRef = ref<HTMLElement>()
// ------------------------------------data------------------------------------//

// ------------------------------------logic------------------------------------//
// 1. 获取当前路由，设置动画
onMounted(() => {
  const currentRoute = navFilter.find(item => item.route === route.path)
  if (currentRoute)
    refreshActiveTab(currentRoute, navFilter.indexOf(currentRoute))
})

watch(
  () => route.path,
  (val) => {
    const currentRoute = navFilter.find(
      item => item.route === route.path,
    )
    if (currentRoute)
      refreshActiveTab(currentRoute, navFilter.indexOf(currentRoute))

    const whiteList = navFilter.map(item => item.route)
    if (!whiteList.includes(val))
      startJelloHideAnimate()
  },
)

// 2. 设置当前选中的 item 的背景
function refreshActiveTab(item: (typeof navFilter)[0], index: number) {
  // a. 设置标题
  appTitle.value = item.label === '组件' ? 'tianMiao' : item.label

  // b. 设置头部动画
  currentItemIndex.value = index
  startJelloShowAnimate()
}

function startJelloShowAnimate() {
  const jello = [
    'scale3d(1, 1, 1)',
    'scale3d(1.25, 0.75, 1)',
    'scale3d(0.75, 1.25, 1)',
    'scale3d(1.15, 0.85, 1)',
    'scale3d(0.95, 1.05, 1)',
    'scale3d(1.05, 0.95, 1)',
    'scale3d(1, 1, 1)',
  ]
  const opacity = [1, 1]

  if (bgInnerRef.value) {
    const animation = bgInnerRef.value.animate(
      { transform: jello, opacity },
      { duration: 900, fill: 'forwards' },
    )
    animation.onfinish = () => {}
  }
}
function startJelloHideAnimate() {
  const scale = [
    'scale3d(1, 1, 1)',
    'scale3d(1.25, 0.75, 1)',
    'scale3d(0.75, 1.25, 1)',
    'scale3d(1.15, 0.85, 1)',
    'scale3d(0.95, 1.05, 1)',
    'scale3d(1.05, 0.95, 1)',
    'scale3d(0.97, 1.03, 1)',
    'scale3d(0, 0, 1)',
  ]

  const opacity = [1, 0]

  if (bgInnerRef.value) {
    const animation = bgInnerRef.value.animate(
      { transform: scale, opacity },
      { duration: 900, fill: 'forwards' },
    )
    animation.onfinish = () => {}
  }
}
// ------------------------------------logic------------------------------------//
</script>

<template>
  <div id="pc-nav" class="nav-container">
    <!-- item -->

    <div v-for="item in navFilter" :key="item.label">
      <HoverCard :open-delay="0" :close-delay="0">
        <HoverCardTrigger>
          <router-link
            :to="item.route"
            replace
            class="nav-item"
            :style="{
              height: `${navItemOptions.height}px`,
              width: `${navItemOptions.width}px`,
            }"
          >
            {{ item.label }}
          </router-link>
        </HoverCardTrigger>
        <HoverCardContent
          v-if="item?.children?.length > 0"
          :side-offset="15"
          class="w-[120px]! p-[4px]!"
        >
          <div
            class="flex flex-col items-center justify-start text-[14px]"
          >
            <div
              v-for="it in item.children"
              :key="(it as any).label"
              class="option-item h-10 w-full flex cursor-pointer items-center justify-center"
            >
              {{ (it as any).label }}
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <!-- bg 外层移动，内层动画 -->
    <div
      :style="outerBgStyles"
      class="pointer-events-none absolute left-0 top-0 transition-transform duration-300 ease-in-out"
    >
      <div
        ref="bgInnerRef"
        class="h-full w-full rounded-[50px] border border-solid border-blue-700"
      />
    </div>
  </div>
  <div id="mobile-nav" class="nav-container">
    <div class="flex justify-end">
      <div class=" flex-col items-center cursor-pointer relative" @click="mobileNavClick">
        ☰
      </div>
    </div>
  </div>
  <div v-if="mobileNavBool" class="mobile-nav-div flex fixed ">
    <div class="flex-1 nav-menu">
      <router-link
        v-for="item in navFilter"
        :key="item.label"
        class="nav-menu-link" replace
        :to="item.route"
        @click="navMenuClick"
      >
        {{ item.label }}
      </router-link>
    </div>
    <div class="flex-1 opacity-0" @click="mobileNavClickHide" />
  </div>
</template>

<style scoped>
.nav-container {
  position: relative;
  display: flex;
  font-size: 14px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  box-shadow: var(--ui-second-box-shadow);
  overflow-x: auto;
}
.nav-item {
  position: relative;
  cursor: pointer;
  border-radius: 50px;
  -webkit-box-align: center;
  padding: 0px 16px;
  transition: opacity 0.3s ease 0s;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  user-select: none;
  /* color: var(--nav-text); */
  color: var(--text-color);
  mix-blend-mode: v-bind(navFilterOptionBgMode);
}

#mobile-nav {
  display: none;
  width: 100%;
}
@media (max-width: 600px) {
  #pc-nav {
    display: none;
  }
  #mobile-nav {
    display: block;
    width: 100%;
  }
}
.mobile-nav-div {
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  /* background-color: #d3d2d2; */
  /* opacity: 0.6; */
}
@media (min-width: 600px) {
  .mobile-nav-div {
    display: none;
  }
}
.nav-menu {
  background-color: #ddd;
}

.nav-menu-link {
  height: 56px;
  line-height: 56px;
  padding: 0 10px;
  display: block;
}
.nav-menu-link:active {
  background: #ffffff;
}
</style>
