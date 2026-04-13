export const appName = 'tianMiao'
export const appDescription = 'tianMiao Web App'

// export const navFilter = [
//   { label: '首页', route: '/', children: [] },
//   { label: '文章', route: '/blog', children: [] },
//   { label: '项目', route: '/project', children: [] },
//   { label: '关于', route: '/about', children: [] },
//   { label: 'Web3.0', route: '/web3', children: [] },
//   { label: '资源录', route: '/record', children: [] },
//   {
//     label: '友链',
//     route: '/friend',
//     children: [],
//   },
//   { label: '更多', children: [
//     { label: '更多', route: '/more1', children: [] },
//     { label: '更多', route: '/more2', children: [] },
//   ] },
// ]

export const SITE = {
  title: '天渺studio的小站',
  author: '天渺studio的小站',
  avatar: 'https://s21.ax1x.com/2024/12/22/pAXAGEn.jpg',
  description: '记录 kai 的history',
  profileContent:
        '我是kai，曾创过业。喜欢 Vue、React、Android、Flutter、Nodejs。目前在从事Node全栈，Android开发的工作。',
  keywords: 'kai, Blog, 前端, Vue, 博客',
  cv: 'https://cv.tianmiao.site',
  justin: 'https://juejin.cn/user/1169536102179325/posts',
  mail: 'mailto:1071231288@qq.com',
  homePage: '/',
  profilePage: '/profile',
  twitterId: 'tianMiao',
  twitterUrl: 'https://twitter.com/',
  githubId: 'pinky-pig',
  githubHome: 'https://github.com/wangkai000',
  weeklyUrl: 'https://snake.timeline.ink',
  repo: 'pinky-pig/what-is-my-astro-blog',
  notion: 'https://www.notion.com/',
  weibo: 'https://weibo.com/u/5507083242',
  consoleColorFulOutput:
        '%cDon\'t ignore your dreams \nsay what you think \ncultivate friendships \nbe happy~\n不要停止学习的脚步，往前走，不要停。 ',
}

/**
 * 首页 Bento 通用组件布局
 */
export const bentoCommonComponentsCfg = [
  { id: 'Profile', x: 0, y: 0, width: 2, height: 2, index: 0 },
  { id: 'Weekly', x: 2, y: 0, width: 2, height: 1, index: 0 },
  { id: 'Notice', x: 0, y: 1, width: 2, height: 1, index: 0 },
  { id: 'Dark', x: 3, y: 1, width: 1, height: 1, index: 0 },
  { id: 'CountDown', x: 3, y: 1, width: 2, height: 1, index: 0 },
  { id: 'Tip', x: 4, y: 1, width: 1, height: 1, index: 0 },
  { id: 'Twitter', x: 5, y: 1, width: 1, height: 1, index: 0 },
  // { id: 'PlaneView', x: 0, y: 2, width: 1, height: 2, index: 0 },
  { id: 'Weibo', x: 0, y: 2, width: 1, height: 1, index: 0 },
  //   { id: 'DragMotion', x: 3, y: 2, width: 1, height: 1, index: 0 },
  { id: 'Notion', x: 3, y: 2, width: 1, height: 1, index: 0 },
  // { id: 'PageTransition', x: 4, y: 2, width: 1, height: 1, index: 0 }, // 隐藏页面过渡动画组件
  { id: 'BookList', x: 6, y: 2, width: 2, height: 2, index: 0 },
  { id: 'Text1', x: 6, y: 2, width: 1, height: 2, index: 0 },
  { id: 'Text', x: 6, y: 2, width: 2, height: 1, index: 0 },
  { id: 'Text2', x: 6, y: 2, width: 1, height: 1, index: 0 },
  { id: 'Text3', x: 6, y: 2, width: 2, height: 1, index: 0 },
  { id: 'Text4', x: 6, y: 2, width: 2, height: 1, index: 0 },
  { id: 'Text5', x: 6, y: 2, width: 1, height: 1, index: 0 },
  { id: 'Music', x: 2, y: 2, width: 1, height: 1, index: 0 }, // 调整音乐播放器为1x1大小
  // 移除StatusCard配置，使其不再作为可拖拽元素
]

/**
 * 首页 Bento 自定义组件布局
 */
export const bentoCustomComponentsCfg = [
  //   { id: 'StrokeText', x: 2, y: 2, width: 1, height: 1, index: 0 },
  // { id: 'Sticker8', x: 3, y: 3, width: 1, height: 1, index: 0 },
  // { id: 'Cover', x: 0, y: 2, width: 1, height: 2, index: 0 },
]

/**
 * 项目的内容
 */
export const PROJECTS = [
  {
    name: 'test001',
    desc: '测试',
    cover: '',
    demoUrl: '404',
    repoUrl: '404',
  },
  // {
  //   name: 'Superellipse SVG',
  //   desc: 'SVG 超椭圆生成器，支持直接下载及用作 SVG background-image',
  //   cover: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230728150846.png',
  //   demoUrl: 'https://baidu.com',
  //   repoUrl: 'https://baidu.com',
  // },
]

export const giscusSetting = {
  'data-repo': 'wangkai000/my-blog',
  'data-repo-id': 'R_kgDOJohJlw',
  'data-category': 'General',
  'data-category-id': 'DIC_kwDOJohJl84CjIV4',
  'data-mapping': 'pathname', // 改成按 URL 路径匹配
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-lang': 'zh-CN',
  'data-loading': '',
  'crossorigin': 'anonymous',
}

// 默认壁纸
export const defaultImageUrl = '/static/qrcode/bg.jpg'
