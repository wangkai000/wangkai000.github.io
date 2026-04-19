<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { NTooltip } from 'naive-ui'
import { registerGiscus } from '~/utils/giscus'

// 站点类链接（非个人博客）
const sites = ref([
  {
    title: '十年之约',
    description:
            '一个人的寂寞，一群人的狂欢。十年之约是一个记录、展示独立博客的平台，即从加入这个活动起，我们的博客 10 年不关闭或者更久，保持更新和活力。把博客从爱好变成一种习惯，坚持 10 年，是一项很有意义的活动，我们希望更多的博主加入！',
    avatar: 'https://www.foreverblog.cn/favicon.ico',
    url: 'https://www.foreverblog.cn/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '博客录',
    description: '一个个人博客收集平台',
    avatar: 'https://boke.lu/%E5%8D%9A%E5%AE%A2%E5%BD%95logo%E5…B%9B%E7%89%88%E5%8A%A0%E5%AE%BD%E7%89%881-70k.png',
    url: 'https://boke.lu/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '拾光',
    description: '给未来写封信，愿你未来不负所期',
    avatar: 'https://www.timeletters.cn/favicon.ico',
    url: 'https://www.timeletters.cn/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '拾趣博客导航',
    description: '捡拾文字里的小乐趣！',
    avatar: 'https://s7.fan/img/tubiao.png',
    url: 'https://s7.fan/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'ImgURL图床',
    description: 'ImgURL图床 - 免费图床',
    avatar: 'https://sv.png.pub/imgs/2026/01/07/90c0dd265b52cea6.png',
    url: 'https://www.imgurl.org/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '路过图床',
    description: '免费图床服务',
    avatar: 'https://imgchr.com/content/images/system/favicon_1587118523486_91617a.png',
    url: 'https://imgchr.com',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '阮一峰的网络日志',
    description: '阮一峰的博客',
    avatar: 'https://www.ruanyifeng.com/favicon.ico',
    url: 'https://www.ruanyifeng.com/blog/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '机核网',
    description: '专注分享游戏、动漫、影视等泛娱乐内容的社区平台',
    avatar: 'https://www.gcores.com/favicon.ico',
    url: 'https://www.gcores.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '数字游牧人（大佬）',
    description: '数字游牧人 samuel 的博客',
    avatar: 'https://www.qzq.at/Hero.jpeg',
    url: 'https://www.qzq.at/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'mingjyunhung',
    description: '一个webGPU大佬',
    avatar: '',
    url: 'https://mingjyunhung.com',
    avatarFailed: false,
    avatarLoaded: false,
  },
])

// 个人博客链接
const personalBlogs = ref<
  {
    title: string
    description: string
    avatar: string
    url: string
    rss?: string
    avatarFailed: boolean
    avatarLoaded: boolean
  }[]
>([
  {
    title: '匠心独运',
    description: '一个有追求的程序员（某手机厂资深技术专家）',
    avatar: 'https://wujian.xyz/static/images/avatar_256.jpg',
    url: 'https://wujian.xyz',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'dev-zuo',
    description: 'dev-zuo 技术日常',
    avatar: 'http://food.zuo11.com/logo.png',
    url: 'http://www.zuo11.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // Deleted:  {
  // Deleted:    title: '博客录',
  // Deleted:    description: '一个个人博客收集平台',
  // Deleted:    avatar: 'https://boke.lu/博客录新图标透明底圆底 (1).png',
  // Deleted:    url: 'https://boke.lu/',
  // Deleted:    avatarFailed: false,
  // Deleted:  },
  {
    title: '有余',
    description: '手执烟火以谋生，心怀诗意至远方~',
    avatar: 'https://image.dongping.link/imageupload/3022db7803924133aeed921cb73822c9.png',
    url: 'https://dongping.link',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'Zkeq',
    description: '永远安定于美好事物',
    avatar: 'https://img.onmicrosoft.cn/Avatar.jpg',
    url: 'https://icodeq.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // {
  //   title: 'Liu Zijian\'s Blog',
  //   description: 'Keep on going never give up',
  //   avatar: 'https://blog.liuzijian.com/img/logo.jpg',
  //   url: 'https://blog.liuzijian.com',
  //   avatarFailed: false,
  // },

  {
    title: '张洪 Heo',
    description: '分享设计与科技生活',
    avatar: 'https://img.zhheo.com/i/67d8fa75943e4.webp',
    url: 'https://blog.zhheo.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'echeverra',
    description: 'let\'s go, together!',
    avatar: 'https://echeverra.cn/favicon.jpg',
    url: 'https://echeverra.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '宇阳',
    description: '记录所学知识，缩短和大神的差距！',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640',
    url: 'https://liuyuyang.net',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // {
  //   title: 'Nibbles 尼布',
  //   description: '向着终生成长者迈进！',
  //   avatar: 'https://studio.nibbles.cn/avatar.jpg',
  //   url: 'https://nibbles.cn/',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  // {
  //     title: "姚远",
  //     description: "A vegetable student",
  //     avatar: "https://yaoyuan.vip/images/Avatar.jpg",
  //     url: "https://yaoyuan.vip",
  //     avatarFailed: false,
  // },
  {
    title: 'Minsp·隅',
    description: '在纷扰中寻得宁静，于思索里洞察真意。',
    avatar: 'https://img.minsp.org/images/2024/public/logo.jpeg',
    url: ' https://www.minsp.org',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '小张的个人博客',
    description: '比起有一百个朋友，不如有个比一百人还要重要的真心朋友。',
    avatar: 'http://img.mrzym.top/FsjKJtHwnWCvmbk9V4MWcZrSKhm-',
    url: 'http://mrzym.top/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'WQG',
    description: 'A SIMPLE BLOG.',
    avatar: 'https://cdn.wqg.life/common/logo.jpg',
    url: 'https://wqg.life/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'POETIZE',
    description: '这是一个 Vue2 Vue3 与 SpringBoot 结合的产物～',
    avatar: 'https://s1.ax1x.com/2022/11/10/z9E7X4.jpg',
    url: 'https://poetize.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // Deleted:  {
  // Deleted:    title: '拾光',
  // Deleted:    description: '给未来写封信，愿你未来不负所期',
  // Deleted:    avatar: 'https://www.timeletters.cn/favicon.ico',
  // Deleted:    url: 'https://www.timeletters.cn/',
  // Deleted:    avatarFailed: false,
  // Deleted:  },
  // {
  //   title: 'MoyuqLのBlog',
  //   description: 'MoyquL与你同在~',
  //   avatar: 'https://bu.dusays.com/2023/07/29/64c4f45ee421b.jpg',
  //   url: 'https://blog.moyuql.top',
  //   avatarFailed: false,
  // },
  {
    title: 'leorain',
    description: '一个对技术和生活充满热爱的文艺型技术青年~',
    avatar: 'https://www.leorain.cn/images/logo.png',
    url: 'https://www.leorain.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'I Am I',
    description: '永远相信美好的事情即将发生',
    avatar: 'https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg',
    url: 'https://5ime.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '慕雪的寒舍',
    description: '爱折腾的代码初学者',
    avatar: 'https://blog.musnow.top/favicon.jpg',
    url: 'https://blog.musnow.top/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  //   {
  //     title: '小码同学',
  //     description: '喜欢的东西就努力去追求，万一成功了呢!',
  //     avatar: 'https://bu.dusays.com/2025/03/02/67c4531250141.jpg',
  //     url: 'https://blog.hikki.site',
  //     avatarFailed: false,
  //   },

  {
    title: 'snows_l\'s BLOG',
    description: '渔得鱼心满意足，樵得樵眼笑眉舒！',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=37523953&s=640',
    url: 'http://snows-l.site',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // {
  //   title: '唐志远',
  //   description: '立志成为一名架构师',
  //   avatar: 'https://bu.dusays.com/2022/05/02/626f92e193879.jpg',
  //   url: 'https://fe32.top/',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  {
    title: ' Levi\'s space',
    description: '一个有意思的 Blog，工作记录，日常分享，欢迎访问',
    avatar: 'https://i.postimg.cc/cJmdWqkn/Snipaste-2024-04-24-16-54-57.png',
    url: 'https://leviqin.top',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'Yeppioo',
    description: '梦想成为庄稼地里的读书人.....',
    avatar: 'https://blog.yik.at/static/img/avatar.png',
    url: 'https://i.yik.at/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'Anye の小站',
    description: 'Always Nurturing Your Enthusiasm',
    avatar: 'https://www.anye.xyz/upload/Anye-logo-white.webp',
    url: 'https://www.anye.xyz/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // {
  //   title: '泽若',
  //   description: '酌贪泉而觉爽，处涸辙以犹欢。',
  //   avatar: 'https://www.zeruo.net/wp-content/uploads/2025/07/1753778958-IMG_7458.jpeg',
  //   url: 'https://www.zeruo.net',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  {
    title: '我不是咕咕鸽',
    description:
            '定期分享一些好玩的东西，包括但不局限于服务器、Web3 等相关知识。',
    avatar: 'https://gao.ee/gugu',
    url: 'https://blog.laoda.de',
    avatarFailed: false,
    avatarLoaded: false,
  },

  // {
  //   title: 'Dale',
  //   description: 'Wir müssen wissen ! Wir werden wissen !',
  //   avatar: 'https://picscdn.dalechu.cn/dale_avt.png',
  //   url: 'https://www.dalechu.cn',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  // {
  //   title: '小鹿的个人网站',
  //   description: '跳吧，在无比宏大的星系！',
  //   avatar: 'https://www.siena.zone/favicon_compressed.png',
  //   url: 'https://www.siena.zone',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  {
    title: '若海の技术写真',
    description: '一个全栈攻城狮的纯技术干货分享',
    avatar: 'https://www.rehiy.com/logo.png',
    url: 'https://www.rehiy.com',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '轻笑 Chuckle',
    description: '漫天倾尘，风中轻笑',
    avatar: 'https://www.qcqx.cn/head.webp',
    url: 'https://www.qcqx.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'MuXiaoChen🍊',
    description: '柴米油盐酱醋茶，般般都在别人家',
    avatar: 'https://tuchuang.voooe.cn/images/2025/11/28/Mx_1761296939311296300.webp',
    url: 'https://miraii.cn/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '因卓诶 Yinzhuoei',
    description: '因卓诶的博客',
    avatar: 'https://www.yinzhuoei.com/favicon.ico',
    url: 'https://www.yinzhuoei.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // {
  //   title: 'Nebula Blog ',
  //   description: ' Nebula.SYS',
  //   avatar: 'https://img.scdn.io/i/692d847f79589_1764590719.webp',
  //   url: 'https://www.996icu.eu.org',
  //   avatarFailed: false,
  // },
  {
    title: 'CcoMm',
    description: '你要吃 C4 吗？',
    avatar: 'https://avatars.githubusercontent.com/u/147143261',
    url: 'https://blog.ccomm.top',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '旧识桥',
    description: '什么都略懂一点，生活更多彩一些',
    avatar: 'https://img.167891.xyz/v2/3VHU8UR.png',
    url: 'https://ailmel.top/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'YUAN 的个人主页',
    description: '去 AI 化的个人主页，手工打磨的网页与文字',
    avatar: 'https://www.upyi.cn/images/icon.jpg',
    url: 'https://www.upyi.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '小元博客',
    description: '既有生活唠嗑也有技术杂谈',
    avatar: 'https://reblog.cn/upload/img/web-user.jpeg',
    url: 'https://reblog.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '潘智祥',
    description: '记录在 Python、DevOps、SRE、大模型、投资等方面的经验',
    avatar: 'https://panzhixiang.cn/images/avatar.jpg',
    url: 'https://panzhixiang.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '老朱独立开发',
    description: '用智慧打破边界，以代码书写未来',
    avatar: 'https://ilaozhu.com/usr/themes/WaterDrop/static/images/avatar.jpg',
    url: 'https://ilaozhu.com',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '旺东自留地',
    description: '爱生活、爱摸鱼',
    avatar: 'https://wang618.cn/logo.gif',
    url: 'https://wang618.cn/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: ' 2BROEAR',
    description: '兴趣指引方向，会玩才会学',
    avatar: 'https://imgs.2broear.com/2broear.png',
    url: 'https://blog.2broear.com',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'Sky\'s Blog',
    description: '山河浪漫，人间温暖',
    avatar: 'http://cdn.wanglingyue.com/me-1.jpg',
    url: 'https://www.wanglingyue.com',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '酥米的小站',
    description: '记录小日常与代码笔记，分享生活点滴',
    avatar: 'https://www.sumi233.top/favicon.ico',
    url: 'https://www.sumi233.top',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '十玖八柒',
    description: '探索代码的世界，追寻生活的诗篇',
    avatar: 'https://ahzoo.cn/img/avatar.webp',
    url: 'https://blog.ahzoo.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // {
  //   title: '哈喽！林墨白',
  //   description: '沉墨满纸，一笑若白。',
  //   avatar: 'https://files.blog.lmb.blue/assets/img/logo/pink-black.png',
  //   url: 'https://blog.lmb.blue/',
  //   rss: 'https://xifeng.net/feed/',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  // {
  //   title: '周天记(满心博客)',
  //   description: '记录生活里的小美好',
  //   avatar: 'https://bu.dusays.com/2023/01/29/63d5bf7fa0d2c.png',
  //   url: 'https://zhoutian.com',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  // {
  //   title: 'Tangly的学习笔记',
  //   description: 'Tangly的学习笔记',
  //   avatar: 'https://img.notionusercontent.com/s3/prod-files-secure%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg/size/w=1080?exp=1774883383&sig=s5uMifhDf-AYnv0j2FNgpSAYnfyqWgsdJj9XB6hJNIM&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&table=collection',
  //   url: 'https://blog.tangly1024.com',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  // {
  //   title: '青序栈',
  //   description: '青序成栈·向简而生',
  //   avatar: 'https://www.qixz.cn/avatar.avif',
  //   url: 'https://www.qixz.cn/',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  {
    title: 'NNNullptr南',
    description: '数学生的古早拼贴风格网站',
    avatar: 'https://www.xnmoe.com/assets/images/pfp.png',
    url: 'https://xnmoe.com',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '清羽飞扬',
    description: '柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜',
    avatar: 'https://blog.liushen.fun/info/avatar.ico',
    url: 'https://blog.liushen.fun/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '梁栋烨',
    description: '今天空气真好，天气真不错！',
    avatar: 'https://090909.top/assets/images/avatar.webp',
    url: 'https://090909.top',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'Wcowin\'s Blog',
    description: '循此苦旅，以达星辰',
    avatar: 'https://s1.imagehub.cc/images/2025/12/06/28380affd86b014a6dcaf082fcc97064.png',
    url: 'https://wcowin.work/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'Fengc\'s Blog',
    description: '让我们一起在镜头下发现生活之美',
    avatar: 'https://fengc-img.880200.xyz/api/rfile/logo.png',
    url: 'https://fengcblog.880200.xyz',
    avatarFailed: false,
    avatarLoaded: false,
  },
  // {
  //   title: '西风',
  //   description: '爱好驱动生产',
  //   avatar: 'https://xifeng.net/images/avatar.svg',
  //   url: 'https://xifeng.net/',
  //   rss: 'https://xifeng.net/feed/',
  //   avatarFailed: false,
  //   avatarLoaded: false,
  // },
  {
    title: '韩小韩博客',
    description: '运气是计划之外的东西.',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640',
    url: 'https://www.vvhan.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '加密鲸拓',
    description: 'B 站 web3up',
    avatar: 'https://leapwhale.com/favicon.ico',
    url: 'https://leapwhale.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '芊',
    description: 'let me dawn',
    avatar: 'https://hxqblog.cn/upload/63119497_p0.jpg',
    url: 'https://hxqblog.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'Minikano的小窝',
    description: '鹿友，经常会开坑忘填（划掉）のblog',
    avatar: 'https://cravatar.cn/avatar/c56b6f5018fec0dfe27cf32f7324c5b4?s=400',
    url: 'https://kanokano.cn',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '𝕩𝕚𝕒𝕠𝕧',
    description: '偶尔喜欢摆烂，经常喜欢偶尔！',
    avatar: 'https://www.xhh.ch/upload/IMG_4314.jpeg?width=1600',
    url: 'https://www.xhh.ch/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '陶其的个人博客',
    description: '当下，即是未来',
    avatar: 'https://oss.tqazy.com/wordpress/resources/img/taoqilogo.jpg',
    url: 'https://www.tqazy.com',
    rss: 'https://www.tqazy.com/?feed=rss2',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'ZLX STUDIO',
    description: '为音乐创作发电！',
    avatar: 'https://blog.iooioio.com/upload/ZLXSTUDIO.png',
    url: 'https://blog.iooioio.com/',
    rss: 'https://blog.iooioio.com/rss.xml',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'qlAD',
    description: '一名小小的计算机爱好者',
    avatar: 'https://cdn.qladgk.com/images/qlAD.jpg',
    url: 'https://www.qladgk.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: 'qlAD',
    description: '一名小小的计算机爱好者',
    avatar: 'https://cdn.qladgk.com/images/qlAD.jpg',
    url: 'https://www.qladgk.com/',
    avatarFailed: false,
    avatarLoaded: false,
  },
  {
    title: '冷月笙寒的小窝',
    description: '发现巷子里的那颗星星(技术与生活分享)',
    avatar: 'https://lygalaxy.cn/uploads/20260128_200240_6979fae094c7b.jpg',
    url: 'https://lygalaxy.cn/',
    avatarFailed: false,
    avatarLoaded: false,
  },
])
// 我的网站信息
const mySite = ref({
  title: '天渺studio',
  description: '天渺工作室的小站&日志记录',
  url: 'https://tianmiao.site',
  avatar: 'https://s21.ax1x.com/2024/12/22/pAXtJat.jpg',
  rss: 'https://blog.tianmiao.site/feed.xml',
})

// 复制JSON功能
const isCopied = ref(false)
function copyJson() {
  const jsonStr = JSON.stringify(mySite.value, null, 2)
  navigator.clipboard.writeText(jsonStr).then(() => {
    isCopied.value = true
    setTimeout(() => (isCopied.value = false), 2000)
  })
}

// 头像加载处理 - 站点类
function handleSiteAvatarLoad(site: any) {
  site.avatarLoaded = true
  const img = document.querySelector(`img[src="${site.avatar}"]`)
  if (img)
    img.classList.add('opacity-100')
}

function handleSiteAvatarError(site: any) {
  site.avatarFailed = true
  site.avatarLoaded = false
}

// 头像加载处理 - 个人博客
function handleAvatarLoad(blog: any) {
  blog.avatarLoaded = true
  const img = document.querySelector(`img[src="${blog.avatar}"]`)
  if (img)
    img.classList.add('opacity-100')
}

function handleAvatarError(blog: any) {
  blog.avatarFailed = true
  blog.avatarLoaded = false
}

// 评论区
const giscusRootRef = ref<HTMLElement | null>(null)
watchOnce(giscusRootRef, (root) => {
  if (root && root instanceof HTMLElement)
    registerGiscus(root)
})
</script>

<template>
  <main>
    <div class="min-h-screen">
      <div class="mx-auto max-w-6xl px-4 py-8">
        <!-- 站点类链接 -->
        <div class="mb-12">
          <div
            class="mb-8 text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 via-purple-50/60 to-slate-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-gray-800 border border-slate-200/50 dark:border-gray-600 shadow-sm max-w-2xl mx-auto"
          >
            <div class="mx-auto max-w-prose text-center">
              <h2
                class="text-xl md:text-2xl font-bold text-slate-700 dark:text-white mb-2 flex items-center justify-center"
              >
                <Icon
                  icon="mdi:web"
                  class="mr-3 text-purple-400 text-2xl"
                />
                站点导航
              </h2>
              <p
                class="text-slate-600 dark:text-slate-300 text-sm"
              >
                优质的综合性站点和资源平台
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-4"
          >
            <a
              v-for="(site, index) in sites"
              :key="`site-${index}`"
              :href="site.url"
              target="_blank"
              rel="noopener noreferrer"
              class="site-card group flex flex-col items-center text-center rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm transition-all duration-300 border border-slate-200/60 dark:border-gray-700 hover:border-purple-300/60 dark:hover:border-purple-600/40"
            >
              <!-- 头像容器 -->
              <div class="relative mb-3 avatar-container-site">
                <!-- 骨架屏（加载中） -->
                <div
                  v-if="
                    !site.avatarLoaded && !site.avatarFailed
                  "
                  class="avatar-skeleton-site rounded-full border-2 border-slate-200/60 dark:border-gray-700 animate-pulse"
                />

                <!-- 实际头像 -->
                <img
                  v-if="!site.avatarFailed"
                  :src="site.avatar"
                  :alt="site.title"
                  class="avatar-image-site rounded-full object-cover border-2 border-slate-200/60 dark:border-gray-700 opacity-0 transition-opacity duration-500"
                  loading="lazy"
                  @load="handleSiteAvatarLoad(site)"
                  @error="handleSiteAvatarError(site)"
                >

                <!-- 加载失败占位符 -->
                <div
                  v-else
                  class="avatar-fallback-site rounded-full border-2 border-slate-200/60 dark:border-gray-700 flex items-center justify-center bg-slate-50 dark:bg-gray-700"
                >
                  <Icon
                    icon="mdi:web"
                    class="text-slate-400 dark:text-slate-400 text-2xl"
                  />
                </div>
              </div>

              <h3
                class="text-base font-medium text-gray-800 dark:text-gray-100 mb-2"
              >
                {{ site.title }}
              </h3>
              <p
                class="text-xs text-gray-600 dark:text-gray-400 line-clamp-3"
              >
                {{ site.description || "暂无描述" }}
              </p>
            </a>
          </div>
        </div>

        <!-- 个人博客链接 -->
        <div class="mb-16">
          <div
            class="mb-8 text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 via-blue-50/60 to-slate-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-gray-800 border border-slate-200/50 dark:border-gray-600 shadow-sm max-w-2xl mx-auto"
          >
            <div class="mx-auto max-w-prose text-center">
              <h2
                class="text-xl md:text-2xl font-bold text-slate-700 dark:text-white mb-2 flex items-center justify-center"
              >
                <Icon
                  icon="mdi:account-circle"
                  class="mr-3 text-blue-400 text-2xl"
                />
                个人博客
              </h2>
              <p
                class="text-slate-600 dark:text-slate-300 text-sm"
              >
                来自各位博主的个人技术博客与生活分享
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
          >
            <a
              v-for="(blog, index) in personalBlogs"
              :key="`blog-${index}`"
              :href="blog.url"
              target="_blank"
              rel="noopener noreferrer"
              class="friend-card group flex items-center rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm transition-all duration-300 border border-slate-200/60 dark:border-gray-700 hover:border-blue-300/60 dark:hover:border-blue-600/40"
            >
              <!-- 头像容器 -->
              <div
                class="relative flex-shrink-0 avatar-container"
              >
                <!-- 骨架屏（加载中） -->
                <div
                  v-if="
                    !blog.avatarLoaded && !blog.avatarFailed
                  "
                  class="avatar-skeleton rounded-full border-2 border-slate-200/60 dark:border-gray-700 animate-pulse"
                />

                <!-- 实际头像 -->
                <img
                  v-if="!blog.avatarFailed"
                  :src="blog.avatar"
                  :alt="blog.title"
                  class="avatar-image rounded-full object-cover border-2 border-slate-200/60 dark:border-gray-700 opacity-0 transition-opacity duration-500"
                  loading="lazy"
                  @load="handleAvatarLoad(blog)"
                  @error="handleAvatarError(blog)"
                >

                <!-- 加载失败占位符 -->
                <div
                  v-else
                  class="avatar-fallback rounded-full border-2 border-slate-200/60 dark:border-gray-700 flex items-center justify-center bg-slate-50 dark:bg-gray-700"
                >
                  <Icon
                    icon="mdi:link-variant"
                    class="text-slate-400 dark:text-slate-400 text-2xl"
                  />
                </div>
              </div>

              <div
                class="ml-4 flex-1 flex flex-col justify-center"
              >
                <h2
                  class="text-lg font-medium text-gray-800 dark:text-gray-100 md:text-xl"
                >
                  {{ blog.title }}
                </h2>
                <NTooltip
                  trigger="hover"
                  :disabled="!blog.description"
                >
                  <template #trigger>
                    <p
                      class="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-grow cursor-default"
                    >
                      {{ blog.description || "暂无描述" }}
                    </p>
                  </template>
                  {{ blog.description }}
                </NTooltip>
              </div>
            </a>
          </div>
        </div>

        <!-- 互换友链区块 -->
        <div
          class="friend-request-card p-6 md:p-8 mb-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-gray-800 dark:via-blue-900/15 dark:to-gray-800 border border-slate-200/50 dark:border-gray-600 rounded-xl shadow-sm"
        >
          <div class="flex-1">
            <h2
              class="text-2xl font-bold text-slate-700 dark:text-white mb-6 flex items-center"
            >
              <Icon
                icon="mdi:handshake"
                class="mr-3 text-blue-400 text-2xl"
              />
              互换友链
            </h2>

            <p class="text-slate-600 dark:text-slate-300 mb-6">
              欢迎互换友链！如果想要匿名添加，请发送邮件至<a
                href="mailto:wangkai233@qq.com"
                class="text-pink-500 hover:text-pink-600 underline"
              >wangkai233@qq.com</a>。以下是本站信息：
            </p>

            <!-- JSON代码块 -->
            <div
              class="relative rounded-xl overflow-hidden mb-6 group"
            >
              <div
                class="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700"
              >
                <div class="flex space-x-2">
                  <div
                    class="w-3 h-3 rounded-full bg-red-500"
                  />
                  <div
                    class="w-3 h-3 rounded-full bg-yellow-500"
                  />
                  <div
                    class="w-3 h-3 rounded-full bg-green-500"
                  />
                </div>
                <div class="flex items-center">
                  <span class="text-gray-400 text-sm mr-2">site-info.json</span>
                  <button
                    class="text-gray-400 hover:text-white transition-colors p-1"
                    :title="isCopied ? '已复制' : '复制'"
                    @click="copyJson"
                  >
                    <Icon
                      :icon="
                        isCopied
                          ? 'mdi:check'
                          : 'mdi:content-copy'
                      "
                      class="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
              <div
                class="bg-gray-900 p-4 md:p-6 font-mono text-sm md:text-base overflow-x-auto"
              >
                <pre class="text-gray-300 leading-relaxed m-0">
<span class="text-blue-400">{</span>
  <span class="text-yellow-300">"title"</span>: <span class="text-green-400">"{{ mySite.title }}"</span>,
  <span class="text-yellow-300">"description"</span>: <span class="text-green-400">"{{ mySite.description }}"</span>,
  <span class="text-yellow-300">"url"</span>: <span class="text-green-400">"{{ mySite.url }}"</span>,
  <span class="text-yellow-300">"avatar"</span>: <span class="text-green-400">"{{ mySite.avatar }}"</span>
  <span class="text-yellow-300">"RSS"</span>: <span class="text-green-400">"{{ mySite.rss }}"</span>
<span class="text-blue-400">}</span>
              </pre>
              </div>
            </div>

            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center"
            >
              <Icon
                icon="mdi:check-circle"
                class="mr-2 text-blue-500"
              />
              互换要求：
            </h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <span
                  class="requirement-badge px-3 py-1 rounded-full text-sm font-medium mr-3"
                >1</span>
                <span class="text-gray-700 dark:text-gray-300">网站需部署 HTTPS</span>
              </div>
              <div class="flex items-center">
                <span
                  class="requirement-badge px-3 py-1 rounded-full text-sm font-medium mr-3"
                >2</span>
                <span class="text-gray-700 dark:text-gray-300">网站长期维护，内容积极健康</span>
              </div>
              <div class="flex items-center">
                <span
                  class="requirement-badge px-3 py-1 rounded-full text-sm font-medium mr-3"
                >3</span>
                <span class="text-gray-700 dark:text-gray-300">申请前请将本网站添加为友链</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 讨论区 -->
        <div
          class="comment-section overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl"
        >
          <div
            class="comment-header p-4 md:p-6 bg-gray-50 dark:bg-gray-800"
          >
            <div class="flex items-center">
              <div
                class="discuss-icon w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r from-blue-500 to-indigo-600"
              >
                <Icon
                  icon="mdi:forum"
                  class="text-white text-2xl"
                />
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-gray-800 dark:text-white"
                >
                  友链申请讨论区
                </h3>
              </div>
            </div>
          </div>
          <div
            class="github-comments-container bg-white dark:bg-gray-900 p-6 min-h-[300px] flex items-center justify-center"
          >
            <div class="text-center">
              <div id="giscusRoot" ref="giscusRootRef" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollTopButton />
  </main>
</template>

<style scoped>
/* 基础样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.friend-card {
  min-height: 120px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
}

.friend-card:hover {
  background-color: #eff6ff;
  transform: translateY(-3px);
  opacity: 0.8;
  box-shadow: 0 8px 16px -4px rgba(59, 130, 246, 0.08);
}

.dark .friend-card:hover {
  background-color: #1e3a5f;
  opacity: 0.8;
}

/* 站点卡片样式 */
.site-card {
  min-height: 140px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.site-card:hover {
  background-color: #f5f3ff;
  transform: translateY(-3px);
  opacity: 0.9;
  box-shadow: 0 8px 16px -4px rgba(168, 85, 247, 0.08);
}

.dark .site-card:hover {
  background-color: #4c1d95;
  opacity: 0.9;
}

/* 头像容器（关键修复） */
.avatar-container {
  width: 48px;
  height: 48px;
  position: relative;
}

/* 站点类头像容器 */
.avatar-container-site {
  width: 56px;
  height: 56px;
  overflow: hidden;
  position: relative;
}

/* 头像相关元素统一样式 */
.avatar-skeleton,
.avatar-image,
.avatar-fallback {
  width: 100%;
  height: 100%;
  display: block; /* 消除行内元素间隙 */
  object-fit: cover; /* 图片自适应 */
}

/* 站点类头像样式 */
.avatar-skeleton-site,
.avatar-image-site,
.avatar-fallback-site {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* 站点类头像 hover 放大效果 */
.site-card:hover .avatar-image-site,
.site-card:hover .avatar-fallback-site {
  transform: scale(1.15);
}

/* 骨架屏 */
.avatar-skeleton {
  background-color: rgba(226, 232, 240, 0.6);
}
.dark .avatar-skeleton {
  background-color: rgba(55, 65, 81, 0.6);
}

/* 头像图片（修复加载显示） */
.avatar-image {
  opacity: 0;
  transition:
    opacity 0.5s ease,
    transform 0.3s ease;
  /* 确保图片可点击（a标签内） */
  pointer-events: none;
  transform: scale(1);
}
/* 加载完成后显示 */
.avatar-image.opacity-100 {
  opacity: 1;
}

/* 头像 hover 放大效果 */
.friend-card:hover .avatar-image,
.friend-card:hover .avatar-fallback {
  transform: scale(1.15);
}

/* 加载失败占位符 */
.avatar-fallback,
.avatar-fallback-site {
  background: linear-gradient(
    135deg,
    rgba(241, 245, 249, 0.8) 0%,
    rgba(226, 232, 240, 0.6) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  /* 确保图标完全居中 */
  text-align: center;
  line-height: 1;
}

.dark .avatar-fallback,
.dark .avatar-fallback-site {
  background: linear-gradient(
    135deg,
    rgba(30, 41, 59, 0.5) 0%,
    rgba(51, 65, 85, 0.4) 100%
  );
}

/* 确保站点头像占位符的图标居中 */
.avatar-fallback-site {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-fallback-site .iconify {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 加载动画 */
.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* 其他样式（保持不变） */
.requirement-badge {
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.06) 0%,
    rgba(74, 222, 128, 0.04) 100%
  );
  border: 1px solid rgba(34, 197, 94, 0.15);
  color: #15803d;
}
.dark .requirement-badge {
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.12) 0%,
    rgba(74, 222, 128, 0.06) 100%
  );
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: rgba(134, 239, 172, 0.85);
}

.discuss-icon {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.12);
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.85) 0%,
    rgba(99, 102, 241, 0.85) 100%
  );
}

pre {
  tab-size: 2;
}
.text-blue-400 {
  color: #60a5fa;
}
.text-yellow-300 {
  color: #fbbf24;
}
.text-green-400 {
  color: #4ade80;
}
.text-gray-300 {
  color: #d1d5db;
}

/* 响应式 */
@media (max-width: 768px) {
  .friend-card {
    min-height: 100px;
  }
  .site-card {
    min-height: 120px;
    padding: 0.75rem;
  }
  .friend-request-card {
    padding: 1.5rem;
  }
}

@media (min-width: 769px) {
  .avatar-container {
    width: 64px;
    height: 64px;
  }
  :deep(.giscus) iframe {
    width: 560px;
    min-height: 150px;
  }
}

/* 移动端更小屏幕优化 */
@media (max-width: 640px) {
  .site-card {
    min-height: 110px;
  }
}

/* 入场动画 - 淡入上浮 */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeSlideUpSite {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 个人博客卡片入场动画 */
.friend-card {
  animation: fadeSlideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

/* 站点卡片入场动画 */
.site-card {
  animation: fadeSlideUpSite 0.4s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

/* 交错延迟 - 个人博客 */
.friend-card:nth-child(1) {
  animation-delay: 0.05s;
}
.friend-card:nth-child(2) {
  animation-delay: 0.1s;
}
.friend-card:nth-child(3) {
  animation-delay: 0.15s;
}
.friend-card:nth-child(4) {
  animation-delay: 0.2s;
}
.friend-card:nth-child(5) {
  animation-delay: 0.25s;
}
.friend-card:nth-child(6) {
  animation-delay: 0.3s;
}
.friend-card:nth-child(7) {
  animation-delay: 0.35s;
}
.friend-card:nth-child(8) {
  animation-delay: 0.4s;
}
.friend-card:nth-child(9) {
  animation-delay: 0.45s;
}
.friend-card:nth-child(10) {
  animation-delay: 0.5s;
}
.friend-card:nth-child(n + 11) {
  animation-delay: 0.55s;
}

/* 交错延迟 - 站点类 */
.site-card:nth-child(1) {
  animation-delay: 0.05s;
}
.site-card:nth-child(2) {
  animation-delay: 0.1s;
}
.site-card:nth-child(3) {
  animation-delay: 0.15s;
}
.site-card:nth-child(4) {
  animation-delay: 0.2s;
}
.site-card:nth-child(5) {
  animation-delay: 0.25s;
}
.site-card:nth-child(6) {
  animation-delay: 0.3s;
}

/* 自定义tooltip样式 */
:deep(.n-tooltip) {
  background-color: rgba(255, 255, 255, 0.95) !important;
  color: #333 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

:deep(.n-tooltip__content) {
  background-color: rgba(255, 255, 255, 0.95) !important;
}

.dark :deep(.n-tooltip) {
  background-color: rgba(50, 50, 50, 0.95) !important;
  color: #e5e5e5 !important;
}
</style>
