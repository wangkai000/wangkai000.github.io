import { defaultImageUrl } from '~/config'

/** 背景配置类型定义 */
interface BackgroundConfig {
  imageUrl: string
  size?: string
  position?: string
  attachment?: string
  repeat?: string
  opacity?: number
}

/** 默认兜底配置 */
const DEFAULT_CONFIG: BackgroundConfig = {
  imageUrl: defaultImageUrl,
  size: 'cover',
  position: 'center',
  attachment: 'fixed',
  repeat: 'no-repeat',
  opacity: 1,
}

/** 本地存储键名 */
const STORAGE_KEY = 'app_background_config'

/** 从本地存储读取配置 */
function getStoredConfig(): BackgroundConfig | null {
  try {
    // 关键修改：检查是否在浏览器环境
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : null
    }
    return null // 服务器环境返回 null
  }
  catch (error) {
    console.warn('读取背景配置失败，使用默认配置', error)
    return null
  }
}
/** 保存配置到本地存储 */
function saveConfigToStorage(config: BackgroundConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
  }
  catch (error) {
    console.warn('保存背景配置失败', error)
  }
}

/**
 * 尝试加载图片并在成功/失败时执行回调
 */
function tryLoadImage(url: string, onSuccess: () => void, onError: () => void) {
  const img = new Image()
  img.onload = onSuccess
  img.onerror = onError
  img.src = url
}

/** 应用背景样式到HTML根元素 */
function applyStyle(config: BackgroundConfig) {
  // 关键改进：检查是否在浏览器环境
  if (typeof document === 'undefined') {
    return // 服务器环境直接返回，不执行DOM操作
  }

  const { imageUrl, size, position, attachment, repeat, opacity } = config
  const htmlElement = document.documentElement // 获取HTML根元素

  // 设置除图片外的其他样式
  htmlElement.style.backgroundSize = size || DEFAULT_CONFIG.size || ''
  htmlElement.style.backgroundPosition
        = position || DEFAULT_CONFIG.position || ''
  htmlElement.style.backgroundAttachment
        = attachment || DEFAULT_CONFIG.attachment || ''
  htmlElement.style.backgroundRepeat = repeat || DEFAULT_CONFIG.repeat || ''

  // 为了确保背景覆盖整个页面，添加以下样式
  htmlElement.style.minHeight = '100%'
  htmlElement.style.margin = '0'
  htmlElement.style.padding = '0'

  // 应用不透明度（使用叠加层实现，避免影响内容）
  removeOldOverlay()

  if (opacity !== undefined && opacity < 1) {
    createOpacityOverlay(opacity)
  }

  htmlElement.style.transition = 'background-image 0.3s ease'

  // 尝试加载图片
  tryLoadImage(
    imageUrl,
    // 图片加载成功
    () => {
      htmlElement.style.backgroundImage = `url("${imageUrl}")`
    },
    // 图片加载失败
    () => {
      console.warn('背景图片加载失败，使用默认图片:', imageUrl)
      // 使用默认图片
      htmlElement.style.backgroundImage = `url("${DEFAULT_CONFIG.imageUrl}")`
      // 如果当前使用的不是默认配置，则更新配置
      if (config.imageUrl !== DEFAULT_CONFIG.imageUrl) {
        const newConfig = {
          ...config,
          imageUrl: DEFAULT_CONFIG.imageUrl,
        }
        saveConfigToStorage(newConfig)
      }
    },
  )
}

/** 移除旧的叠加层 */
function removeOldOverlay() {
  if (typeof document === 'undefined')
    return

  const oldOverlay = document.getElementById('background-overlay')
  if (oldOverlay) {
    try {
      oldOverlay.remove()
    }
    catch (error) {
      console.warn('移除旧叠加层失败:', error)
    }
  }
}

/** 创建不透明度叠加层 */
function createOpacityOverlay(opacity: number) {
  if (typeof document === 'undefined')
    return

  try {
    const overlay = document.createElement('div')
    overlay.id = 'background-overlay'
    overlay.style.position = 'fixed'
    overlay.style.top = '0'
    overlay.style.left = '0'
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.backgroundColor = `rgba(255, 255, 255, ${1 - opacity})`
    overlay.style.pointerEvents = 'none' // 允许点击穿透叠加层
    overlay.style.zIndex = '-1' // 放在背景后面

    // 添加到HTML元素内的最前面
    const htmlElement = document.documentElement
    htmlElement.insertBefore(overlay, htmlElement.firstChild)
  }
  catch (error) {
    console.warn('创建叠加层失败:', error)
  }
}

/**
 * 背景处理主函数
 * 初始化时自动应用本地存储配置（无则用默认）
 */
function bodyBackgroundHandler() {
  // 初始化时自动应用配置
  const initConfig = getStoredConfig() || DEFAULT_CONFIG
  applyStyle(initConfig)

  return {
    /** 设置新背景（自动保存到本地存储） */
    set: (customConfig: Partial<BackgroundConfig>) => {
      const newConfig = { ...DEFAULT_CONFIG, ...customConfig }
      saveConfigToStorage(newConfig)
      applyStyle(newConfig)
    },

    /** 重置为默认配置（覆盖本地存储） */
    reset: () => {
      saveConfigToStorage(DEFAULT_CONFIG)
      applyStyle(DEFAULT_CONFIG)
    },

    /** 清除背景（同时清空本地存储） */
    clear: () => {
      const htmlElement = document.documentElement
      htmlElement.style.backgroundImage = ''
      htmlElement.style.backgroundSize = ''
      htmlElement.style.backgroundPosition = ''
      htmlElement.style.backgroundAttachment = ''
      htmlElement.style.backgroundRepeat = ''
      htmlElement.style.minHeight = ''
      htmlElement.style.margin = ''
      htmlElement.style.padding = ''

      // 移除叠加层
      const overlay = document.getElementById('background-overlay')
      if (overlay)
        overlay.remove()

      localStorage.removeItem(STORAGE_KEY)
    },

    /** 获取当前生效的配置 */
    getCurrentConfig: (): BackgroundConfig => {
      return getStoredConfig() || DEFAULT_CONFIG
    },
  }
}

// 初始化并导出工具函数
export const backgroundTool = bodyBackgroundHandler()

// 壁纸配置类型定义
interface Wallpaper {
  url: string
  description: string
}

interface DailyWallpapers {
  morning: Wallpaper[]
  afternoon: Wallpaper[]
  evening: Wallpaper[]
  lateNight: Wallpaper[]
}

// 公共晚间火星壁纸常量（可在所有 lateNight 时段追加）
const MARS_LATE_NIGHT: Wallpaper = {
  url: 'https://s3.bmp.ovh/2026/03/22/WlMQJA3r.jpg',
  description: '星际着陆：穿越火星大气层，冲刺归零的一瞬间',
}

export function getCurrentWallpaper(): Wallpaper {
  const wallpaperSchedule: DailyWallpapers[] = [
    // 周一
    {
      morning: [
        {
          url: 'https://s21.ax1x.com/2025/07/20/pV8ecaq.jpg',
          description: '今天也是充满希望的一天，阳光正在为你铺好前路',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/8a509780942a3bdc.jpg',
          description: '晨光吻过窗棂，世界正悄悄为你准备惊喜',
        },
        {
          url: 'https://s3.bmp.ovh/2026/02/16/WwGMQ4bC.jpg',
          description: '清晨的第一缕阳光，唤醒沉睡的梦想',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2026/01/12/e3e61efb41586e2f.png',
          description: '蓝天白云，好心情从早晨开始',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/12/29/65e50152a717c584.jpeg',
          description: '阳光明媚的日子，适合追逐梦想',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/21/FfoJSkBJ.jpg',
          description: '晨光熹微，开启元气满满的一天',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/21/DMBot9i1.jpg',
          description: '早安，向着阳光出发',
        },
      ],
      afternoon: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/143fedbc60ddcb95.jpg',
          description: '午后的风很轻，专注眼前事，节奏慢一点也没关系',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/0f0ed4ec23f39a30.jpg',
          description:
                        '窗外的云朵胖乎乎的，像小时候偷藏在口袋里的棉花糖',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/23/dcc7d6e692b0d22b.jpg',
          description: '午后时光，温暖而宁静',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/01/60ee060ec7a1aa13.jpeg',
          description: '阳光正好，微风不燥',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/21/MDeXSdE2.jpg',
          description: '慵懒的午后，适合发呆和做梦',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/22/eqwLNlh8.jpg',
          description: '午后的惬意时光',
        },
      ],
      evening: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/9ccaeef64d42ccb4.jpg',
          description: '今天的你也辛苦啦',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/4bf8fb6f99028352.jpg',
          description: '今天你努力的样子真好看',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/21/O3USxWTt.jpg',
          description: '今天的你辛苦了',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/21/ilZsWzjb.jpg',
          description: '油画般的夜色，描绘城市的浪漫',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/22/KuCRXNub.jpg',
          description: '晚霞染红了天边，为今天画上完美句点',
        },
      ],
      lateNight: [
        {
          url: 'https://s3.bmp.ovh/2026/03/21/9lEeANt9.jpg',
          description: '火星之赤，寂静的荒原上藏着远行者的梦想',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/22/WlMQJA3r.jpg',
          description: '星际着陆：穿越火星大气层，冲刺归零的一瞬间',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/22/KHEJaZrl.jpg',
          description: '夜的帷幕降临，让心灵在黑暗中寻找光明',
        },
      ],
    },
    // 周二
    {
      morning: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/8a509780942a3bdc.jpg',
          description: '今天也是充满希望的一天，今天的你比昨天更从容',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/2dfe0816af8712a6.jpg',
          description:
                        '露珠里藏着整个宇宙的晨光，而你的眼里藏着整个宇宙的可能',
        },
        {
          url: 'https://s3.bmp.ovh/2026/02/16/WwGMQ4bC.jpg',
          description: '晨曦微露，新的故事开始了',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2026/01/12/e3e61efb41586e2f.png',
          description: '晴空万里，心情也跟着飞扬',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/21/DMBot9i1.jpg',
          description: '周二的早晨，阳光正好',
        },
      ],
      afternoon: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/19/7b8405ee444d930d.jpg',
          description: '午后，适合伸个懒腰再继续',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/83725233e3ffc9d7.jpg',
          description:
                        '树影在笔记本上画着抽象画，时间在这里慢得像滴落的蜂蜜',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/12/29/65e50152a717c584.jpeg',
          description: '温暖的午后，适合发呆和思考',
        },
        {
          url: 'https://s3.bmp.ovh/2026/03/21/MDeXSdE2.jpg',
          description: '周二下午，悠闲自在',
        },
      ],
      evening: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/19/7451822c6b9edb2a.jpg',
          description: '万家灯火里，总有一盏是为你亮的',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/d58c5eb364d1aa75.jpg',
          description:
                        '暮色像天鹅绒幕布，你今天的演出，值得最热烈的星光掌声',
        },
      ],
      lateNight: [
        {
          url: 'https://s3.bmp.ovh/2026/03/21/O3USxWTt.jpg',
          description: '深夜的宁静，属于思考者的时刻',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/27/TYc0XwN0.jpg',
          description: 'Elliot｜Hello friend!!',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/28/CCziNhnT.webp',
          description: '有时候我梦想拯救世界。从无形之手下拯救大家，那只每天偷偷地控制我们的手。',
        },
      ],
    },
    // 周三
    {
      morning: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/143fedbc60ddcb95.jpg',
          description: '一周过半，给自己加颗糖，今天也甜甜的',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/19/75fb9857e4cf845c.jpg',
          description:
                        '今天也是充满希望的一天，晨露里藏着整夜的星光礼物',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2026/01/12/e3e61efb41586e2f.png',
          description: '早安，向着目标出发',
        },
      ],
      afternoon: [
        {
          url: 'https://s21.ax1x.com/2025/07/20/pV8eRiV.jpg',
          description: '海风会带走疲惫，剩下的交给时间就好',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/143fedbc60ddcb95.jpg',
          description: '钢笔尖在纸上划出的痕迹，都是通向未来的小径',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/23/dcc7d6e692b0d22b.jpg',
          description: '悠闲的午后，享受片刻宁静',
        },
      ],
      evening: [
        {
          url: 'https://s21.ax1x.com/2025/07/20/pV8e6Zn.jpg',
          description: '奖励下坚持到现在的你',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/d58c5eb364d1aa75.jpg',
          description: '夜色温柔，适合放下手机发会儿呆',
        },
      ],
      lateNight: [
        {
          url: 'https://s21.ax1x.com/2025/07/20/pV8efRU.jpg',
          description: '快睡吧，梦里有好风景',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/27/USHE6OGF.jpg',
          description: '风之旅人 | 长路漫漫，终有一归',
        },
      ],
    },
    // 周四
    {
      morning: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/0e0e794906fec708.jpg',
          description:
                        '今天也是充满希望的一天，今天也是值得期待的一天',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/83725233e3ffc9d7.jpg',
          description: '今天也是充满希望的一天，晨光正在为坚持者镀金',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/12/29/65e50152a717c584.jpeg',
          description: '清晨的阳光，照亮前行的路',
        },
      ],
      afternoon: [
        {
          url: 'https://s21.ax1x.com/2025/07/20/pV8efRU.jpg',
          description: '水流不停，但也会绕开石头，你也可以慢慢来',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/0f0ed4ec23f39a30.jpg',
          description: '阳光穿过百叶窗，在桌面谱出光的五线谱',
        },
      ],
      evening: [
        {
          url: 'https://s21.ax1x.com/2025/07/20/pV8e5M4.jpg',
          description: '雪山在夜色里打盹，你也该歇歇啦',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/02/926b909abe49fc22.jpg',
          description: '路灯次第亮起，像大地生长出的温暖蘑菇',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/12/17/6597fdc08fe7d8c3.jpeg',
          description: '夜幕降临，城市点亮星光',
        },
      ],
      lateNight: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/58fe51baac0e6faf.jpg',
          description: '沙漠的夜很静，适合好好做梦，明天再努力也不迟',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/27/ZLiwlUZI.jpg',
          description: '风之旅人 | 沙漠，雪山变成了流动的诗',
        },
      ],
    },
    // 周五
    {
      morning: [
        {
          url: 'https://s21.ax1x.com/2025/07/20/pV8eRiV.jpg',
          description: '闻到周末的味道了吗？今天的风都是甜的',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/9840269286d61993.jpg',
          description:
                        '今天也是充满希望的一天，周末的甜味已经从晨光中渗出来',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2026/01/12/e3e61efb41586e2f.png',
          description: '周五早上好！周末在向你招手',
        },
      ],
      afternoon: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/143fedbc60ddcb95.jpg',
          description: '脚步可以放慢啦，周末就在转角',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/19/75fb9857e4cf845c.jpg',
          description: '周五下午的时间像被拉长的太妃糖，甜而绵长',
        },
      ],
      evening: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/25/c815eee67dfb5f8e.jpg',
          description: '终于可以卸下疲惫，好好享受夜晚啦',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/09/21/fb9c34dac9d7435f.jpg',
          description: '周末前夜的天空，连星星都提前开始庆祝',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/14/10d6a3362fae4874.jpg',
          description: '周五夜晚，城市的霓虹为你闪烁',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/12/17/6597fdc08fe7d8c3.jpeg',
          description: '夜色中的都市，闪烁着梦想的光芒',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/04/2W2fvFv1.webp',
          description: '动漫风的傍晚沙滩，夏日的海风轻拂脸庞',
        },
      ],
      lateNight: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/f8b24e04da6ebc42.jpg',
          description: '夜再美也不如你的梦，晚安，好好休息呀',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/28/qlBiJtca.webp',
          description: '你如果想改变什么，或许该试试从内部改造。',
        },
      ],
    },
    // 周六
    {
      morning: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/0f0ed4ec23f39a30.jpg',
          description: '不用设闹钟的早晨，阳光会轻轻叫醒你',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/143fedbc60ddcb95.jpg',
          description: '周末的晨光格外慷慨，允许你偷走整个上午的慵懒',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/01/60ee060ec7a1aa13.jpeg',
          description: '周末的早晨，自然醒是最幸福的',
        },
      ],
      afternoon: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/fa5cd935353c3ca3.jpg',
          description: '周末就该浪费在美好的事物上呀',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/8a509780942a3bdc.jpg',
          description: '周六下午的时光，应该泡在音乐和咖啡的香气里',
        },
      ],
      evening: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/14c6af610da3ef89.jpg',
          description: 'Have a good rest on the weekend.',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/08/09/4bf8fb6f99028352.jpg',
          description: '周末的晚霞穿着盛装，为你表演天空的魔术',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/01/44f7ca7bfd18464d.jpg',
          description: '周六夜晚，浪漫而温馨',
        },
        // {
        //   url: 'https://s3.bmp.ovh/2026/04/04/wMIwABFE.jpg',
        //   description: '草地与远山，冒险的气息扑面而来',
        // },
        {
          url: 'https://s3.bmp.ovh/2026/04/28/CCziNhnT.webp',
          description: '有时候我梦想拯救世界。从无形之手下拯救大家，那只每天偷偷地控制我们的手。',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/18/rYSOnVbD.webp',
          description: '登上神山的顶峰，我理解了艾瓦的精神世界',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/27/fIh4Fhoo.png',
          description: '林中之夜 | 黄昏下的破败小镇，我们艰难地成为大人',
        },
      ],
      lateNight: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/27/5512f4d2508ca10f.jpg',
          description: '周末的觉要睡够呀，星星会替你看好夜色的，晚安',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/27/Y0brpbaN.jpg',
          description: '我要让人们看到真实的世界。',
        },
      ],
    },
    // 周日
    {
      morning: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/23/87b59ec5ea63a6b2.jpg',
          description: '阳光正好，适合赖床，也适合出门走走',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/19/7b8405ee444d930d.jpg',
          description: '周日的阳光很懂事，它来得比平时晚一些',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/11/23/dcc7d6e692b0d22b.jpg',
          description: '周日的清晨，安静而美好',
        },
      ],
      afternoon: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/09/21/fc198918d366a961.jpeg',
          description: '给生活充充电，明天又是元气满满的一周',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/09/21/fb9c34dac9d7435f.jpg',
          description: '周日下午茶时间，让思绪像茶叶般徐徐舒展',
        },
      ],
      evening: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/21/9ccaeef64d42ccb4.jpg',
          description: '夕阳为周末画上句点，但明天的故事会更精彩',
        },
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/27/ebcf612f2def804d.jpg',
          description: '日落温柔，适合整理心情，和本周好好告别',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/27/fIh4Fhoo.png',
          description: '周日晚上了，早点休息吧💤',
        },
      ],
      lateNight: [
        {
          url: 'https://s3.bmp.ovh/imgs/2025/07/20/966dd8452edb17b1.jpg',
          description: '森林都睡了，你也闭上眼睛吧，晚安，好梦',
        },
        {
          url: 'https://s3.bmp.ovh/2026/04/18/rYSOnVbD.webp',
          description: '登上神山的顶峰，我理解了艾瓦的精神世界',
        },
      ],
    },
  ]

  // 时间判断逻辑（保持不变）
  const now = new Date()
  const dayIndex = now.getDay()
  const hour = now.getHours()
  const adjustedDayIndex = dayIndex === 0 ? 6 : dayIndex - 1

  let timePeriod: keyof DailyWallpapers
  if (hour >= 5 && hour < 12) {
    timePeriod = 'morning'
  }
  else if (hour >= 12 && hour < 18) {
    timePeriod = 'afternoon'
  }
  else if (hour >= 18 && hour < 24) {
    timePeriod = 'evening'
  }
  else {
    timePeriod = 'lateNight'
  }

  // 防护：如果索引越界或数据有误，返回兜底壁纸对象
  const safeDayIndex = Math.min(
    Math.max(adjustedDayIndex, 0),
    wallpaperSchedule.length - 1,
  )
  const dayEntry
        = wallpaperSchedule[safeDayIndex]
        || (wallpaperSchedule[0] as DailyWallpapers)
  // 规范化候选数组（支持两种形式：{url,description} 或直接 url 字符串）
  const rawCandidates = (dayEntry && (dayEntry as any)[timePeriod]) || []
  const candidates: Wallpaper[] = Array.isArray(rawCandidates)
    ? rawCandidates.map((it: any) => {
      if (!it)
        return { url: defaultImageUrl, description: '壁纸' }
      if (typeof it === 'string')
        return { url: it, description: '壁纸' }
      return {
        url:
                      typeof it.url === 'string' && it.url.length > 0
                        ? it.url
                        : defaultImageUrl,
        description:
                      typeof it.description === 'string'
                      && it.description.length > 0
                        ? it.description
                        : '壁纸',
      }
    })
    : []

  // 如果是夜间时段，添加公共的火星壁纸到候选集中
  if (timePeriod === 'lateNight') {
    candidates.push(MARS_LATE_NIGHT)
  }

  if (candidates.length > 0) {
    const randomIndex = Math.floor(Math.random() * candidates.length)
    const chosen = candidates[randomIndex]
    // 最后校验一次，确保 url 存在且是字符串
    if (chosen && typeof chosen.url === 'string' && chosen.url.length > 0) {
      return {
        url: chosen.url,
        description: chosen.description || '壁纸',
      }
    }
  }

  // 最后兜底：返回默认图片与描述
  return {
    url: defaultImageUrl,
    description: '🌹 花有重开日，人无再少年 ⏳',
  }
}
