import{u as t,_ as s}from"./WrapperPost-CnYUKU7R.js";import{o as e,g as n,w as l,e as a,B as i}from"../assets/app-CmWGNqqr.js";import"./dayjs.min-DeCAdPYw.js";import"./dark-CWS0CtCh.js";const r=a("div",{class:"prose m-auto slide-enter-content"},[a("p",null,[a("div",{class:"table-of-contents"},[a("div",{class:"table-of-contents-anchor hidden"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[a("path",{fill:"currentColor",d:"M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"})])]),a("ul",null,[a("li",null,[a("a",{href:"#参考"},"参考 ")]),a("li",null,[a("a",{href:"#代码高亮"},"代码高亮 ")]),a("li",null,[a("a",{href:"#heti"},"heti ")]),a("li",null,[a("a",{href:"#prose-components"},"Prose components ")]),a("li",null,[a("a",{href:"#nuxt-themes"},"@nuxt-themes ")])])])]),a("img",{loading:"lazy",alt:"theme",decoding:"async","data-nimg":"fill",src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230614204503.png",width:"800"}),a("small",null,"设置渲染 Markdown 内容样式"),a("p",null,[a("strong",null,"原因")]),a("p",null,"使用 Nuxt/content 渲染 Markdown 博客内容，但是样式不够好看，这里两种自定义样式。"),a("h2",{id:"参考",tabindex:"-1"},[i("参考 "),a("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#")]),a("p",null,[i("当前项目使用的是 "),a("code",null,"@nuxt-themes/typography"),i(" 。 如果需要设置 "),a("code",null,"typography"),i(" 的样式，可以参考 "),a("code",null,"tokens.config.ts"),i(" 。 如果想要自定义样式，单个语法样式，可以重写 Prose 组件，参考当前项目的"),a("code",null,"components\\content\\ProseH1.vue"),i(" 。")]),a("p",null,[a("strong",null,"实现")]),a("ul",null,[a("li",null,[a("a",{href:"https://github.com/",target:"_blank",rel:"noopener"},"heti"),i(" 设置中文排版布局")]),a("li",null,[a("a",{href:"https://content.nuxtjs.org/api/components/prose/",target:"_blank",rel:"noopener"},"Prose components"),i(" 重写")]),a("li",null,[a("a",{href:"https://github.com/nuxt-themes",target:"_blank",rel:"noopener"},"@nuxt-themes"),i(" 直接应用官方主题")])]),a("h2",{id:"代码高亮",tabindex:"-1"},[i("代码高亮 "),a("a",{class:"header-anchor",href:"#代码高亮","aria-hidden":"true"},"#")]),a("p",null,[i("这里其实并不需要引入什么依赖，特殊需求除外，参考官方文档 "),a("a",{href:"https://content.nuxtjs.org/api/configuration#highlight-options",target:"_blank",rel:"noopener"},"Nuxt/content highlight"),i("。当前项目配置的是 GitHub 的 Code高亮，如下配置：")]),a("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[a("code",{class:"language-ts"},[a("span",{class:"line"},[a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"export"),a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," default"),a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," defineNuxtConfig"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"{")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  content"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    highlight"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"      theme"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"        // Default theme (same as single string)")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"        default"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," 'github-light'"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"        // Theme used if `html.dark`")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"        dark"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," 'github-dark'"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"        // Theme used if `html.sepia`")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"        sepia"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," 'monokai'")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"      }")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"    }")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")])])]),a("h2",{id:"heti",tabindex:"-1"},[i("heti "),a("a",{class:"header-anchor",href:"#heti","aria-hidden":"true"},"#")]),a("p",null,"这个是直接引入 JS 和 CSS ，现成的样式文件，然后在页面中添加类名，如果修改也是直接修改 CSS 文件就 okk 。"),a("ol",null,[a("li",null,"引入 JS")]),a("p",null,[i("这里是在 Nuxt3 中，使用了 "),a("code",null,"VueUse/useScriptTag"),i(" 引入")]),a("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[a("code",{class:"language-ts"},[a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 注册函数")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"export"),a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," async"),a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," function"),a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," registerHeti"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"()"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  // 字体间距优化")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  useScriptTag"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},"    '/heti/heti-addon.min.js'"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"    ("),a("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"el"),a("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," HTMLScriptElement"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},")"),a("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," =>"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"      const"),a("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," heti"),a("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF","--s-dark-font-weight":"inherit","--s-light-font-weight":"bold"}}," new"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," (window "),a("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"as"),a("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," any"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"Heti"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},"'.heti'"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"      heti"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"autoSpacing"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"    },")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  )")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")])])]),a("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[a("code",{class:"language-ts"},[a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 在页面中引入 heti.js")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"registerHeti"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")])])]),a("ol",{start:"2"},[a("li",null,[a("p",null,"在页面中引入 heti.min.css")]),a("li",null,[a("p",null,"在页面中添加类名 heti ，挂载样式，就 okk 了")])]),a("blockquote",null,[a("p",null,"如果想自定义 CSS 样式，直接修改样式文件就行了")]),a("ol",{start:"4"},[a("li",null,"当然 heti 主要是针对中文排版，如果觉得有些样式不能通过 CSS 很好的自定义样式，比如 Code 想要加一个语言的 Tab ，这里就可以通过编写代码，利用 Prose 。")]),a("h2",{id:"prose-components",tabindex:"-1"},[i("Prose components "),a("a",{class:"header-anchor",href:"#prose-components","aria-hidden":"true"},"#")]),a("p",null,"这个是直接利用 Nuxt/content 的 API ， 重写 Prose 组件，然后在页面中使用。"),a("blockquote",null,[a("p",null,"A list of Prose components currently implemented. Here is a list of all the Prose components currently implemented. To overwrite a prose component, create a component with the same name in your project components/content/ directory (ex: components/content/ProseA.vue)")]),a("p",null,"只要新建一个同名的组件，就可以重写 Prose 组件了，然后在渲染的时候直接会覆盖默认的样式。"),a("h2",{id:"nuxt-themes",tabindex:"-1"},[i("@nuxt-themes "),a("a",{class:"header-anchor",href:"#nuxt-themes","aria-hidden":"true"},"#")]),a("p",null,"Nuxt 提供了一些主题，比如:"),a("ul",null,[a("li",null,[a("a",{href:"https://github.com/nuxt-themes/docus",target:"_blank",rel:"noopener"},"nuxt-themes/docus")]),a("li",null,[a("a",{href:"https://github.com/nuxt-themes/alpine",target:"_blank",rel:"noopener"},"nuxt-themes/alpine")]),a("li",null,[a("a",{href:"https://github.com/nuxt-themes/typography",target:"_blank",rel:"noopener"},"nuxt-themes/typography")]),a("li",null,[a("a",{href:"https://github.com/nuxt-themes/starter",target:"_blank",rel:"noopener"},"nuxt-themes/starter")])]),a("p",null,"这里的前三个都是官方推荐的主题，可以直接安装使用，步骤很简单，直接安装依赖，然后在 nuxt.config.ts 中注册就 okk 了。"),a("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[a("code",{class:"language-bash"},[a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"# 安装依赖")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"pnpm"),a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," install"),a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," @nuxt-themes/docus"),a("span",{style:{"--s-dark":"#79B8FF","--s-light":"#40A02B"}}," -D")])])]),a("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[a("code",{class:"language-ts"},[a("span",{class:"line"},[a("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 注册使用")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"defineNuxtConfig"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"{")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  extends"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),a("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," '@nuxt-themes/docus'")]),i("\n"),a("span",{class:"line"},[a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),a("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")])])]),a("p",null,"这里其实还是使用 nuxt/content Prose 自定义渲染样式，只不过这些包已经将一些常备组件样式，并且又新增加规定了一些语法样式组件，所以使用起来更加方便，不需要自己去写样式了。"),a("p",null,"记得刚安装后，要删除 .nuxt 缓存，然后重新跑一下。"),a("p",null,[i("然后还有一个模板项目 "),a("code",null,"nuxt-themes/starter"),i(" ，可以自定义样式，并发布。")]),a("p",null,[i("在根目录新建一个 "),a("code",null,"tokens.config.ts"),i(" ，这里可以配置一些样式变量，比如颜色，字体等等。")])],-1),h="Nuxt3博客主题",p="2023/06/13",o="设置博客主题",g=["#全部","#简单"],d="https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230614204503.png",c="https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png",E="设置博客主题",u=[{property:"og:title",content:"Nuxt3博客主题"},{name:"twitter:title",content:"Nuxt3博客主题"},{name:"description",content:"设置博客主题"},{property:"og:description",content:"设置博客主题"},{name:"twitter:description",content:"设置博客主题"},{property:"og:image",content:"https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png"},{name:"twitter:card",content:"summary_large_image"}],y={__name:"04-Nuxt3博客主题",setup(a,{expose:i}){const h={title:"Nuxt3博客主题",date:"2023/06/13",desc:"设置博客主题",tags:["#全部","#简单"],cover:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230614204503.png",image:"https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png",description:"设置博客主题",meta:[{property:"og:title",content:"Nuxt3博客主题"},{name:"twitter:title",content:"Nuxt3博客主题"},{name:"description",content:"设置博客主题"},{property:"og:description",content:"设置博客主题"},{name:"twitter:description",content:"设置博客主题"},{property:"og:image",content:"https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png"},{name:"twitter:card",content:"summary_large_image"}]};i({frontmatter:h});return t({title:"Nuxt3博客主题",meta:[{property:"og:title",content:"Nuxt3博客主题"},{name:"twitter:title",content:"Nuxt3博客主题"},{name:"description",content:"设置博客主题"},{property:"og:description",content:"设置博客主题"},{name:"twitter:description",content:"设置博客主题"},{property:"og:image",content:"https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F04-Nuxt3%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98.png"},{name:"twitter:card",content:"summary_large_image"}]}),(t,a)=>{const i=s;return e(),n(i,{frontmatter:h},{default:l((()=>[r])),_:1})}}};export{d as cover,p as date,y as default,o as desc,E as description,c as image,u as meta,g as tags,h as title};
