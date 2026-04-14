# 天渺Studio的小站

[🌐 在线浏览](https://tianmiao.site/)

一个魔改别人基础模板的个人博客，基于 Vue3 + TypeScript + Vite 构建。

## 特性

- **🎨 现代化设计** - 简洁优雅的 UI，支持亮色/暗色主题切换
- **📱 响应式布局** - 完美适配桌面端和移动端
- **⚡ SSG 静态生成** - 使用 vite-ssg 实现服务端预渲染，首屏加载更快
- **🌐 多语言支持** - 内置 i18n 国际化方案
- **🔍 SEO 友好** - 基于 Unhead 提供完善的 SEO 支持
- **📦 PWA 支持** - 可安装为桌面/移动应用
- **📊 资源收集** - 收录优质工具、网站、框架等资源
- **🎬 视频推荐** - B站视频推荐合集
- **🔗 友链系统** - 独立的友链展示页面
- **💼 项目展示** - 个人项目作品集

## 技术栈

### 核心框架

- Vue 3.4 + Composition API
- TypeScript 5
- Vite 5
- Vue Router 4
- Pinia 状态管理
- Vue I18n 国际化

### UI 与样式

- Tailwind CSS 3
- Naive UI 组件库
- Lucide 图标库
- CSS 动画 (Vue Motion)

### 构建与部署

- Vite SSG 静态站点生成
- Vite PWA 插件
- Vite Bundle Visualizer 打包分析

### 开发工具

- ESLint + Prettier
- Vitest 单元测试
- Cypress E2E 测试
- bumpp 版本发布

## 页面预览

| 页面       | 说明         |
| ---------- | ------------ |
| `/`        | 首页         |
| `/blog`    | 博客文章列表 |
| `/ai`      | AI 助手对话  |
| `/project` | 个人项目展示 |
| `/video`   | 视频推荐合集 |
| `/record`  | 资源收集分享 |
| `/friend`  | 友链页面     |
| `/about`   | 关于页面     |

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 9

### 安装依赖

```bash
pnpm install
```

### 开发预览

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 项目结构

```
src/
├── pages/          # 页面组件
├── components/     # 公共组件
├── config/         # 配置文件
├── data/           # 数据文件
├── plugins/        # 插件
├── public/         # 静态资源
└── locales/        # 国际化语言文件
```

## License

MIT License
