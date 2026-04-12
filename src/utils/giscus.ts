import { giscusSetting } from '~/config/param'

interface ISetConfigMessage {
  setConfig: {
    theme?: any
    repo?: string
    repoId?: string
    category?: string
    categoryId?: string
    term?: string
    description?: string
    backLink?: string
    number?: number
    strict?: boolean
    reactionsEnabled?: boolean
    emitMetadata?: boolean
    inputPosition?: any
    lang?: any
  }
}

// 重试次数限制
const MAX_RETRIES = 20
const RETRY_INTERVAL = 200

// 存储当前的主题值，用于比较
let lastTheme = isDark.value ? 'dark' : 'light'

// 发送消息给 giscus iframe，带重试机制
function sendGiscusMessage(message: ISetConfigMessage, retries = 0) {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.giscus-frame',
  )
  if (!iframe?.contentWindow) {
    // iframe 还没加载好，延迟重试
    if (retries < MAX_RETRIES) {
      setTimeout(() => sendGiscusMessage(message, retries + 1), RETRY_INTERVAL)
    }
    return
  }
  iframe.contentWindow!.postMessage(
    { giscus: message },
    'https://giscus.app',
  )
}

// 获取当前主题并发送
function syncGiscusTheme() {
  const theme = isDark.value ? 'dark' : 'light'
  // 只有主题真正变化时才发送
  if (theme !== lastTheme) {
    lastTheme = theme
    sendGiscusMessage({
      setConfig: {
        theme: getCommentTheme(theme),
      },
    })
  }
}

// https://giscus.app/zh-CN
export function registerGiscus(root: HTMLElement) {
  const giscusFrame = document.getElementById('giscus-frame')
  if (giscusFrame) {
    return null
  }
  else {
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', giscusSetting['data-repo'])
    script.setAttribute('data-repo-id', giscusSetting['data-repo-id'])
    script.setAttribute('data-category', giscusSetting['data-category'])
    script.setAttribute(
      'data-category-id',
      giscusSetting['data-category-id'],
    )
    script.setAttribute('data-mapping', giscusSetting['data-mapping'])
    script.setAttribute('data-strict', giscusSetting['data-strict'])
    script.setAttribute(
      'data-reactions-enabled',
      giscusSetting['data-reactions-enabled'],
    )
    script.setAttribute(
      'data-emit-metadata',
      giscusSetting['data-emit-metadata'],
    )
    script.setAttribute(
      'data-input-position',
      giscusSetting['data-input-position'],
    )
    script.setAttribute(
      'data-theme',
      getCommentTheme(isDark.value ? 'dark' : 'light'),
    )
    script.setAttribute('data-lang', giscusSetting['data-lang'])
    // script.setAttribute('data-loading', 'lazy')
    script.setAttribute('crossorigin', giscusSetting.crossorigin)
    script.setAttribute('async', '')
    root.appendChild(script)

    // 监听 giscus 的 sync 消息
    window.addEventListener('message', handleGiscusMessage)

    // 初始化主题同步
    initGiscusThemeSync()
  }
  return { root }
}

// 处理 giscus 发来的消息
function handleGiscusMessage(event: MessageEvent) {
  if (event.origin !== 'https://giscus.app')
    return
  if (event.data?.giscus?.type === 'sync') {
    // giscus 请求同步主题
    syncGiscusTheme()
  }
}

export function updateGiscusConfig(message: ISetConfigMessage) {
  sendGiscusMessage(message)
}

// 全局主题同步状态
let themeCheckInterval: ReturnType<typeof setInterval> | null = null

export function initGiscusThemeSync() {
  // 立即发送一次当前主题
  syncGiscusTheme()

  // 监听主题变化
  watch(isDark, () => {
    syncGiscusTheme()
  })

  // 启动定时检查，每秒检查一次主题是否同步
  if (!themeCheckInterval) {
    themeCheckInterval = setInterval(() => {
      const currentTheme = isDark.value ? 'dark' : 'light'
      if (currentTheme !== lastTheme) {
        lastTheme = currentTheme
        sendGiscusMessage({
          setConfig: {
            theme: getCommentTheme(currentTheme),
          },
        })
      }
    }, 1000)
  }
}

// 保留旧的函数名兼容
export function updateGiscusTheme() {
  initGiscusThemeSync()
}

export function getCommentTheme(color: string) {
  if (color === 'dark')
    return 'dark_dimmed'
  else return 'light'
}
