// 书籍数据模块 - 供首页 BookList 组件和书单专属页面共享

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    cover: string;
}

export const books: Book[] = [
    {
        id: 0,
        title: "《故事》",
        author: "罗伯特·麦基",
        description:
            "《故事》由好莱坞首屈一指的故事大师罗伯特·麦基集结30年授课经验心血写成，自1997年出版以来便成为全球编剧的必读圣经，至今仍稳居亚马逊畅销榜。全书以《教父》《阿甘正传》《星球大战》等不朽经典为案例，深入拆解故事的结构原理、角色弧光、场景设计、情节节奏等核心要素。无论是电影编剧、游戏叙事、小说创作还是广告文案，任何需要讲故事的人都能从中获得颠覆性的启发。",
        cover: "https://s41.ax1x.com/2026/03/29/pe1H1xO.jpg",
    },
    {
        id: 1,
        title: "《游戏剧本怎么写》",
        author: "佐佐木智广",
        description:
            "日本资深游戏编剧佐佐木智广的实战之作，系统讲解了游戏剧本与影视剧本的本质差异，涵盖角色设定、对话写作、支线叙事、分支选项处理等游戏专属课题。书中通过大量实际案例，阐述如何构建有代入感的游戏世界观与令人欲罢不能的剧情节奏，适合游戏策划、剧本设计师以及对游戏叙事感兴趣的读者。",
        cover: "https://s41.ax1x.com/2026/03/29/pe1HZqJ.jpg",
    },
    {
        id: 2,
        title: "《体验引擎游戏设计全景探秘》",
        author: "Tynan Sylvester",
        description: "想要了解游戏设计这本书我觉得必看...",
        cover: "https://s41.ax1x.com/2026/03/29/pe1H0Rf.jpg",
    },
    {
        id: 3,
        title: "《WTF Solidity》",
        author: "0xAA",
        description:
            "《WTF Solidity》是由以太坊开发者0xAA撰写的Solidity智能合约编程指南，只能算是Evm链开发生态的入门书籍吧...",
        cover: "https://s41.ax1x.com/2026/03/29/pe1HtZd.jpg",
    },
    {
        id: 4,
        title: "《现代JS库开发》",
        author: "颜海镜 / 侯策",
        description:
            "围绕「如何从零打造一个高质量JavaScript库」展开，深入讲解库的架构设计、模块化拆分、API抽象、版本管理、文档生成与CI/CD流程，并结合真实开源案例分析最佳工程实践。对于想从业务开发者进阶为框架/工具建设者的前端工程师而言，这是一本难得的实战指南。",
        cover: "https://s21.ax1x.com/2025/07/24/pVGh8KI.jpg",
    },
    {
        id: 5,
        title: "《React设计原理》",
        author: "卡颂",
        description:
            "深入React内核，从源码层面剖析虚拟DOM的构建与Diff算法、Fiber架构的调度机制、Hooks的实现原理与组件渲染的完整生命周期。不同于浮于表面的API讲解，本书更关注「React为什么这样设计」——帮助读者建立对前端框架设计的系统性认知，写出更高效、更可维护的React应用。",
        cover: "https://s21.ax1x.com/2025/07/24/pVGhGrt.jpg",
    },
    {
        id: 6,
        title: "《Vue.js设计与实现》",
        author: "霍春阳",
        description:
            "以Vue.js 3.x源码为基石，逐行拆解响应式系统、模板编译、虚拟DOM、组件实例化与生命周期等核心模块的设计思路与实现细节。作者用通俗易懂的语言将复杂的框架内核娓娓道来，帮助读者不仅「会用」Vue，更能「懂」Vue，从而在前端工程化道路上游刃有余。",
        cover: "https://s21.ax1x.com/2025/07/24/pVGhtVf.jpg",
    },
    {
        id: 7,
        title: "《Vue.js技术内幕》",
        author: "黄轶",
        description:
            "从源码层面抽丝剥茧Vue.js的内部工作机制，涵盖响应式原理、依赖收集、派发更新、异步更新队列、nextTick实现、插槽解析等高频面试与实战难点。作者对每个模块都给出深入浅出的解读，并配以大量图示帮助理解数据流，是Vue.js开发者进阶必读的深度之作。",
        cover: "https://s21.ax1x.com/2025/07/24/pVGhl2d.jpg",
    },
    {
        id: 8,
        title: "《Android开发艺术探索》",
        author: "任玉刚",
        description:
            "聚焦Android开发中的高级主题，涵盖自定义View绘制原理、属性动画与硬件加速、性能优化（内存、卡顿、布局渲染）、Activity与Window管理、IPC机制与Binder驱动等核心知识。作者结合大量源码分析与真实案例，将Android深水区的原理讲得透彻清晰，是中高级Android工程师突破瓶颈的进阶指南。",
        cover: "https://s21.ax1x.com/2025/07/24/pVGhyq0.jpg",
    },
    {
        id: 9,
        title: "《狼书1，2，3》",
        author: "狼叔",
        description:
            "狼叔Node.js三部曲，循序渐进深入Node.js核心世界：第一卷夯实基础，讲解模块系统、事件循环与非阻塞I/O；第二卷进阶实战，涵盖网络编程、文件系统、Streams与Buffer；第三卷升华至架构层面，讨论微服务、性能调优与Deno演进。整套书兼具深度与广度，是中文Node.js社区公认的进阶必读。",
        cover: "https://s21.ax1x.com/2025/07/24/pVGh1xA.jpg",
    },
    {
        id: 10,
        title: "《前方的路》",
        author: "阮一峰",
        description:
            "阮一峰老师作为国内最具影响力的技术作家之一，其博客文章的质量与深度毋庸置疑。此书收集了他很多文章和博客的总结汇总...",
        cover: "https://s21.ax1x.com/2025/07/24/pVGhJqP.jpg",
    },
    {
        id: 11,
        title: "《克苏鲁神话系列》",
        author: "H.P.洛夫克拉夫特",
        description:
            "美国怪谈小说家H.P.洛夫克拉夫特开创的文学宇宙，以「人类最古老、最强烈的情感是恐惧，而最古老、最强烈的恐惧是无知」为核心理念。克苏鲁神话构建了一套前所未有的宇宙恐怖体系：沉睡于深海中的旧日支配者、不可名状的邪神、禁忌的古老文明……其影响深远波及整个流行文化，从《异形》到《怪奇物语》，从伊藤润二到尼尔·盖曼，无数创作者都曾从中汲取灵感。",
        cover: "https://s41.ax1x.com/2026/03/30/pe3AdFx.jpg",
    },
];
