import{u as s,_ as t}from"./WrapperPost-CGKHC8RB.js";import{o as l,g as a,w as n,e,B as i}from"../assets/app-IlolUM4Z.js";import"./dayjs.min-CEL3C72h.js";import"./dark-BEJNkHlW.js";const E=e("div",{class:"prose m-auto slide-enter-content"},[e("p",null,[e("div",{class:"table-of-contents"},[e("div",{class:"table-of-contents-anchor hidden"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"})])]),e("ul",null,[e("li",null,[e("a",{href:"#实现"},"实现 ")])])])]),e("img",{loading:"lazy",alt:"mix-blend-mode1",decoding:"async","data-nimg":"fill",src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesWaveDrag.gif",width:"800"}),e("h1",{id:"实现",tabindex:"-1"},[i("实现 "),e("a",{class:"header-anchor",href:"#实现","aria-hidden":"true"},"#")]),e("p",null,"求拖拽速度设置倾斜角度，就是求速度与角度之间的关系。"),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925162133.png",alt:"20230925162133"})]),e("p",null,"∵ ( 角度 / 最大角度 ) = ( 速度 / 最大速度 ) * 固定系数"),e("p",null,"∴ 角度 = ( 速度 / 最大速度 ) / 最大角度 * 固定系数"),e("p",null,"这里的固定系数其实是旋转系数，用于调整旋转幅度。它是一个乘法因子，允许你根据需要增加或减小旋转的幅度。 好处就是自定义旋转幅度，可以在不改变速度和最大旋转角度的情况下，根据具体场景的需要自定义旋转幅度。"),e("p",null,"上面的公式非常清楚了，接下来就是编写 Code 求出速度就行。因为最大速度、最大角度、固定系数都是固定的。"),e("p",null,"而计算速度的方式就很简单了，路程除以时间。"),e("p",null,[i("而在拖拽过程中，路程就是两次触发拖拽的时候的差值，时间就直接 "),e("code",null,"performance.now()"),i(" 。所以计算速度的方法如下：")]),e("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[e("code",{class:"language-javascript"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// eslint-disable-next-line prefer-const")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"let"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," lastX "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," x"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// eslint-disable-next-line prefer-const")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"let"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," startTime "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," performance"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"now"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"function"),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," calVelocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"("),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"lastX"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," number"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," currentX"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," number"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," lastTime"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," number"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," currentTime"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," performance"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"now"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},")"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," distanceX"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentX "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"-"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," lastX")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," deltaTime"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentTime "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"-"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," lastTime")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  return"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    velocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," distanceX "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"/"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," deltaTime"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    newTime"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentTime"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    newX"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentX"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")])])]),e("p",null,"当拖拽的时候，触发 calVelocity() ， 然后将最新的 newTime 和 newX 赋值给 startTime 和 lastX 就行了。"),e("p",null,"以上就是核心代码逻辑，下面有首图的 ts 代码，不过使用了 Vue 框架和 VueUse 、VueUse/motion工具类。如果想要跑通，需要配置一下。"),e("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[e("code",{class:"language-javascript"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 1. 具有两个动画，一个是上下浮动，一个是拖拽的时候会有小幅度旋转")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 2. 拖拽的时候，根据速度计算旋转幅度，这个时候上下浮动消失")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 3. 拖拽结束后（速度小于一个阈值或者鼠标抬起或者鼠标移动到了外面），旋转幅度取消，上下浮动重新开始")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"/** ************************设置拖拽和旋转 */")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," props"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," defineProps"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"{")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  initialPosition"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"    default"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," ()"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," =>"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," ("),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"{")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"      x"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," Math"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"random"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"() "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"*"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," (window"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"innerWidth "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"-"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 400"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"      y"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," Math"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"random"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"() "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"*"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," (window"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"innerHeight "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"-"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 160"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"    }"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  },")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," target"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," ref"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#04A5E5"}},"<"),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"HTMLElement"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#04A5E5"}},">"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#4C4F69"}}," apply"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," waveApply"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," useMotion"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(target"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  initial"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," rotate"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 0"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," },")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  enter"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," rotate"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 0"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," },")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"async"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," function"),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," setRotate"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"("),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"rotate"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," number"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},")"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  await"),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," waveApply"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"{")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    rotate"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," x"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," style"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," isDragging"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," useDraggable"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(target"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," initialValue"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," props"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"initialPosition "),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"let"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," rotationDelta "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 0")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"watch"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(isDragging"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," async"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," ()"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," =>"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  if"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," (isDragging"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value) "),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"{")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"    // 拖拽的时候，取消上下浮动")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  else"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"    // 拖拽结束后，设置旋转角度为 0 ， 恢复上下浮动")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"    setRotate"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}},"0"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    rotationDelta "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 0")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"/** */")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"/** ************************通过速度计算旋转幅度 */")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"let"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," lastX "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," x"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"let"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," startTime "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," performance"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"now"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 当前角度 / 当前速度 = 最大角度 / 最大速度")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 得出：当前角度 = ( 最大角度 / 最大速度 ) * 当前速度")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"// 然后再乘以一个系数，用于调整旋转幅度，角度跟速度的比例")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," cfg"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  maxVelocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 10"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," // 最大速度")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  maxRotation"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 60"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," // 最大旋转角度")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  rotationFactor"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 0.8"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," // 旋转系数，用于调整旋转幅度")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"watch"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(x"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," ()"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," =>"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," velocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," newX"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," newTime"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," calVelocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(lastX"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," x"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," startTime)")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," maxVelocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," maxRotation"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," rotationFactor"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," cfg")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  // 速度除以最大速度，将速度归一化为一个介于 0 和 1 之间的小数值，表示速度相对于最大速度的比例。")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  // 将这个比例值乘以最大旋转角度 maxRotation，这样就得到了基于速度的旋转角度")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  // 但这得出的仍是一个相对值，最后，再将这个相对的旋转角度乘以旋转系数 rotationFactor，以调整最终的旋转幅度。")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  rotationDelta "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," -"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(velocity "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"/"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," maxVelocity "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"*"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," maxRotation "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"*"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," rotationFactor)")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  setRotate"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(rotationDelta)")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  lastX "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," newX")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"  startTime "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," newTime")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),i("\n"),e("span",{class:"line"}),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"function"),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," calVelocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"("),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"lastX"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," number"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," currentX"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," number"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," lastTime"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#8839EF"}}," number"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),e("span",{style:{"--s-dark":"#FFAB70","--s-light":"#E64553","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," currentTime"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," performance"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"now"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},")"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," distanceX"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentX "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"-"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," lastX")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),e("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," deltaTime"),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentTime "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"-"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," lastTime")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  return"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    velocity"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," distanceX "),e("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"/"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," deltaTime"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    newTime"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentTime"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    newX"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," currentX"),e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},",")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),i("\n"),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#6A737D","--s-light":"#9CA0B0","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"/** */")])])])],-1),r="拖拽速度设置倾斜角度",p="2023/09/25",h="拖拽速度设置倾斜角度",g=["#全部","#一般般"],y="https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesWaveDrag.gif",d="https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png",F="拖拽速度设置倾斜角度",k=[{property:"og:title",content:"拖拽速度设置倾斜角度"},{name:"twitter:title",content:"拖拽速度设置倾斜角度"},{name:"description",content:"拖拽速度设置倾斜角度"},{property:"og:description",content:"拖拽速度设置倾斜角度"},{name:"twitter:description",content:"拖拽速度设置倾斜角度"},{property:"og:image",content:"https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png"},{name:"twitter:card",content:"summary_large_image"}],o={__name:"02-拖拽速度设置倾斜角度",setup(e,{expose:i}){const r={title:"拖拽速度设置倾斜角度",date:"2023/09/25",desc:"拖拽速度设置倾斜角度",tags:["#全部","#一般般"],cover:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesWaveDrag.gif",image:"https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png",description:"拖拽速度设置倾斜角度",meta:[{property:"og:title",content:"拖拽速度设置倾斜角度"},{name:"twitter:title",content:"拖拽速度设置倾斜角度"},{name:"description",content:"拖拽速度设置倾斜角度"},{property:"og:description",content:"拖拽速度设置倾斜角度"},{name:"twitter:description",content:"拖拽速度设置倾斜角度"},{property:"og:image",content:"https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png"},{name:"twitter:card",content:"summary_large_image"}]};i({frontmatter:r});return s({title:"拖拽速度设置倾斜角度",meta:[{property:"og:title",content:"拖拽速度设置倾斜角度"},{name:"twitter:title",content:"拖拽速度设置倾斜角度"},{name:"description",content:"拖拽速度设置倾斜角度"},{property:"og:description",content:"拖拽速度设置倾斜角度"},{name:"twitter:description",content:"拖拽速度设置倾斜角度"},{property:"og:image",content:"https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F02-%E6%8B%96%E6%8B%BD%E9%80%9F%E5%BA%A6%E8%AE%BE%E7%BD%AE%E5%80%BE%E6%96%9C%E8%A7%92%E5%BA%A6.png"},{name:"twitter:card",content:"summary_large_image"}]}),(s,e)=>{const i=t;return l(),a(i,{frontmatter:r},{default:n((()=>[E])),_:1})}}};export{y as cover,p as date,o as default,h as desc,F as description,d as image,k as meta,g as tags,r as title};
