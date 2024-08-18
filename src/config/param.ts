export const appName = "tianMiao";
export const appDescription = "tianMiao Web App";

export const navFilter = [
    { label: "首页", route: "/", children: [] },
    { label: "文章", route: "/blog", children: [] },
    { label: "项目", route: "/project", children: [] },
    // { label: 'bento', route: '/bento', children: [] },
    { label: "关于", route: "/about", children: [] },
    // { label: 'README', route: '/README', children: [] },
];

export const SITE = {
    title: "天渺工作室",
    author: "天渺工作室",
    description: "记录 kai 的history",
    profileContent:
        "我是kai，目前生活在深圳的开发者。我很喜欢 Vue、React、Android、Flutter、Nodejs。目前从事Node全栈，Android开发。",
    keywords: "kai, Blog, 前端, Vue, 博客",
    coordinate: [113.84835620042, 22.63484765642],
    icon: "https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imageslogo.svg",
    pic: "https://cdn.fliggy.coblogPagem/upic/2XFNGI.png",
    cv: "https://baidu.com/",
    justin: "https://juejin.cn/user/1169536102179325/posts",
    mail: "mailto:1071231288@qq.com",
    homePage: "/",
    profilePage: "/profile",
    twitterId: "tianMiao",
    twitterUrl: "https://twitter.com/",
    githubId: "pinky-pig",
    githubHome: "https://github.com/wangkai000",
    weeklyUrl: "https://baidu.com",
    repo: "pinky-pig/what-is-my-astro-blog",
    notion: "https://hail-manatee-fc5.notion.site/a3d8b723782e48a3b3570980e83c70ae?v=0c510fa996e2492b943e7746c1bd9974",
    consoleColorFulOutput:
        "%cDon't ignore your dreams \nDon't work too much \nsay what you think \ncultivate friendships \nbe happy~ ",
};

/**
 * 首页 Bento 通用组件布局
 */
export const bentoCommonComponentsCfg = [
    { id: "Profile", x: 0, y: 0, width: 2, height: 2, index: 0 },
    { id: "Weekly", x: 2, y: 0, width: 2, height: 1, index: 0 },
    { id: "Mapbox", x: 0, y: 1, width: 2, height: 1, index: 0 },
    { id: "Dark", x: 3, y: 1, width: 1, height: 1, index: 0 },
    { id: "CountDown", x: 3, y: 1, width: 2, height: 1, index: 0 },
    { id: "Twitter", x: 4, y: 1, width: 1, height: 1, index: 0 },
    { id: "PlaneView", x: 0, y: 2, width: 1, height: 2, index: 0 },
    { id: "DragMotion", x: 3, y: 2, width: 1, height: 1, index: 0 },
    { id: "Notion", x: 3, y: 2, width: 1, height: 1, index: 0 },
    { id: "PageTransition", x: 4, y: 2, width: 1, height: 1, index: 0 },
];

/**
 * 首页 Bento 自定义组件布局
 */
export const bentoCustomComponentsCfg = [
    { id: "StrokeText", x: 2, y: 2, width: 1, height: 1, index: 0 },
    // { id: 'Sticker8', x: 3, y: 3, width: 1, height: 1, index: 0 },
    // { id: 'Cover', x: 0, y: 2, width: 1, height: 2, index: 0 },
];

/**
 * 项目的内容
 */
export const PROJECTS = [
    {
        name: "kai",
        desc: "个人网站...",
        cover: "https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230625154539.png",
        demoUrl: "baidu.com",
        repoUrl: "baidu.com",
    },
    {
        name: "Superellipse SVG",
        desc: "SVG 超椭圆生成器，支持直接下载及用作 SVG background-image",
        cover: "https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230728150846.png",
        demoUrl: "https://baidu.com",
        repoUrl: "https://baidu.com",
    },
];

export const giscusSetting = {
    "data-repo": "pinky-pig/Arvin",
    "data-repo-id": "R_kgDOLC_KIQ",
    "data-category": "General",
    "data-category-id": "DIC_kwDOLC_KIc4CexE9",
    "data-mapping": "og:title",
    "data-strict": "0",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-lang": "zh-CN",
    "data-loading": "",
    crossorigin: "anonymous",
};

export enum MapboxSetting {
    token = "pk.eyJ1IjoicGlua3ktcGlnIiwiYSI6ImNsZnJvZ2Q1cDAwZ3ozcG56bXFwbjAzZjAifQ.eEOFvRbKqZHQ3OxeqPBsXw",
    mapLightStyle = "mapbox://styles/pinky-pig/clgc32u1e004g01n2bitvj86a",
    mapDarkStyle = "mapbox://styles/pinky-pig/clft35kll000o01osk8svnlfg",
}
