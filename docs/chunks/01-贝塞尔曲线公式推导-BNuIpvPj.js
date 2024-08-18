import{u as t,_ as e}from"./WrapperPost-CGKHC8RB.js";import{o as n,g as l,w as a,e as p,B as i}from"../assets/app-IlolUM4Z.js";import"./dayjs.min-CEL3C72h.js";import"./dark-BEJNkHlW.js";const s=p("div",{class:"prose m-auto slide-enter-content"},[p("p",null,[p("div",{class:"table-of-contents"},[p("div",{class:"table-of-contents-anchor hidden"},[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[p("path",{fill:"currentColor",d:"M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"})])]),p("ul",null,[p("li",null,[p("a",{href:"#贝塞尔曲线的公式推导"},"贝塞尔曲线的公式推导 "),p("ul",null,[p("li",null,[p("a",{href:"#_1-线性贝塞尔曲线"},"1. 线性贝塞尔曲线 ")]),p("li",null,[p("a",{href:"#_2-二次方贝塞尔曲线"},"2. 二次方贝塞尔曲线 ")]),p("li",null,[p("a",{href:"#_3-三次方贝塞尔曲线"},"3. 三次方贝塞尔曲线 ")])])]),p("li",null,[p("a",{href:"#svg-路径-path-的贝塞尔曲线"},"SVG 路径 Path 的贝塞尔曲线 "),p("ul",null,[p("li",null,[p("a",{href:"#_1-二维贝塞尔曲线（切图组合-q）"},"1. 二维贝塞尔曲线（切图组合 Q） ")]),p("li",null,[p("a",{href:"#_2-三维贝塞尔曲线（厕所组合-c）"},"2. 三维贝塞尔曲线（厕所组合 C） ")])])])])])]),p("img",{loading:"lazy",decoding:"async","data-nimg":"fill",src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925123554.png",width:"600"}),p("p",null,[p("small",null,"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆")]),p("blockquote",null,[p("p",null,[i("贝塞尔曲线可视化："),p("a",{href:"https://cubic-bezier.com/#.17,.67,.83,.67",target:"_blank",rel:"noopener"},"https://cubic-bezier.com/#.17,.67,.83,.67"),i(" SVG Path 编辑器: "),p("a",{href:"https://yqnn.github.io/svg-path-editor/",target:"_blank",rel:"noopener"},"https://yqnn.github.io/svg-path-editor/"),i(" 知乎转 YouTube 的视频地址: "),p("a",{href:"https://www.zhihu.com/zvideo/1574012392505241601",target:"_blank",rel:"noopener"},"https://www.zhihu.com/zvideo/1574012392505241601"),i(" 张鑫旭老师：SVG 的贝塞尔曲线指令 "),p("a",{href:"https://www.zhangxinxu.com/wordpress/2014/06/deep-understand-svg-path-bezier-curves-command/",target:"_blank",rel:"noopener"},"https://www.zhangxinxu.com/wordpress/2014/06/deep-understand-svg-path-bezier-curves-command/")])]),p("h1",{id:"贝塞尔曲线的公式推导",tabindex:"-1"},[i("贝塞尔曲线的公式推导 "),p("a",{class:"header-anchor",href:"#贝塞尔曲线的公式推导","aria-hidden":"true"},"#")]),p("h2",{id:"_1-线性贝塞尔曲线",tabindex:"-1"},[i("1. 线性贝塞尔曲线 "),p("a",{class:"header-anchor",href:"#_1-线性贝塞尔曲线","aria-hidden":"true"},"#")]),p("p",null,"这个是最基础的运动形成的曲线（其实就是直线）。"),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925115810.png",alt:"20230925115810"})]),p("p",null,"个人理解："),p("p",null,[i("求出 "),p("strong",null,"P 的位置与 t 之前的关系"),i("。 P 是运动的向量的位置， t 是运动的时间。")]),p("p",null,"第一步，明确几个定义，有两个点 P0 和 P1 ，构成一条直线。"),p("p",null,"然后有第三个点 P ， 点 P 在 P0 和 P1 构成的线段上运动，运动时间为 t ."),p("p",null,"那么点 P 的位置在 t 时间运动的路径就是贝塞尔曲线。"),p("p",null,"那么在坐标系中，用向量这样表示"),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925123554.png",alt:"20230925123554"})]),p("p",null,"这里有两个向量 P0 和 P1 ，然后还有在 P0 到 P1 上根据时间 t 运动的向量 P 。"),p("p",null,"那么如何求出 P 的位置。"),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925123910.png",alt:"20230925123910"})]),p("p",null,"这里很好理解，不做过多解释。其实第一行公式就不复杂，也很好理解，没有必要化简。但是化简的目的是为了在公式上更直观体现 P 与 (P0 和 P1) 之间的关系。"),p("p",null,"综上，P(t) = (1-t)P0 + tP1"),p("p",null,"这里简化表示：lerp(P0, P1, t) ，用 lerp 表示之间的关系。"),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925124405.png",alt:"20230925124405"})]),p("h2",{id:"_2-二次方贝塞尔曲线",tabindex:"-1"},[i("2. 二次方贝塞尔曲线 "),p("a",{class:"header-anchor",href:"#_2-二次方贝塞尔曲线","aria-hidden":"true"},"#")]),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925125419.png",alt:"20230925125419"}),i(" 其实相比于上一步的 线性贝塞尔曲线 推导，二次方贝塞尔曲线就是多增加了一个向量点。")]),p("p",null,"个人理解："),p("p",null,[p("strong",null,"这里首先还是要明确：已知的是三个向量 P0 、 P1 、 P2 和时间 t 。所要求导的是点 P 的位置与时间的关系。")]),p("p",null,"原来的两个向量点 P0 和 P1 ，现在多增加一个 P2 。然后 P0 和 P1 之间有个向量 P01 随着 t 发生位置改变， P1 和 P2 之间有个向量 P12 也是随着 t 发生位置改变。"),p("p",null,"这里其实就是两个线性贝塞尔曲线。"),p("p",null,"由上一步的 线性贝塞尔曲线 推导，我们能知道"),p("p",null,"P01 = (1-t)P0 + tP1 = lerp(P0, P1, t)"),p("p",null,"P02 = (1-t)P1 + tP2 = lerp(P1, P2, t)"),p("p",null,"这样 P01 和 和 P02 的位置就由已知的变量推导转换了，但是到目前 P 还未出场。"),p("p",null,"那么 P 的位置其实就是在 P01 和 P02 这两个向量之间。"),p("p",null,"就是可以把当前 P01 当做线性贝塞尔曲线的第一个点， P02 是第二个点， t 还是刚才的那个时间，而 P 的位置则是随着时间在 P01 和 P02 上运动。"),p("p",null,"那么这个时候就可以得出 P :"),p("p",null,"P = (1-t)P01 + tP12 = lerp(P01, P12, t)"),p("p",null,"这里看最初始的计算："),p("p",null,"P(t) = (1-t)P01 + tP12 = (1-t)((1-t)P0 + tP1) + t((1-t)P1 + tP2) = (1-t)^2 _ P0 + (1-t) _ t _ P1 + t _ (1-t)_P1 + t^2 _ P2 = (1-t)^2 _ P0 + 2t(1-t)P1 + t^2 _ P2"),p("p",null,"也是这样简化表达："),p("p",null,"P(t) = lerp(P01, P12, t) = lerp(lerp(P0, P1, t), lerp(P1, P2, t), t)"),p("h2",{id:"_3-三次方贝塞尔曲线",tabindex:"-1"},[i("3. 三次方贝塞尔曲线 "),p("a",{class:"header-anchor",href:"#_3-三次方贝塞尔曲线","aria-hidden":"true"},"#")]),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925132806.png",alt:"20230925132806"})]),p("p",null,"三次贝塞尔曲线其实跟上面同理，多一个向量点 P3 ，这里就不赘述了，直接推导。"),p("p",null,"这里点太多了，所以除了四个已知的向量点 P1 、 P2 、 P3 、 P4 ，其余的几个暂时的点用 ABCDEF 表示，如上图。"),p("p",null,"A = lerp(P0, P1, t) B = lerp(P1, P2, t) C = lerp(P2, P3, t) D = lerp(A, B, t) E = lerp(B, C, t) P = lerp(D, E, t)"),p("p",null,"当然我们需要的是 P 和 P1 、 P2 、 P3 、 P4 以及 t 之间的关系，这里化简暂时省略了。"),p("p",null,"也可以直接写出所有点的数学公式"),p("p",null,"A = (1-t)P0 + tP1 B = (1-t)P1 + tP2 C = (1-t)P2 + tP3 D = (1-t)A + tB E = (1-t)B + tC P = (1-t)D + tE"),p("p",null,"将其完全展开并化简得："),p("p",null,"P(t) = P0( -t^3 + 3t^2 - 3t + 1 ) + P1( 3 _ t^3 - 6 _ t^2 + 3t) + P2( -3 _ t^3 + 3 _ t^2 ) + P3( t^3 ) 综上推导，其实多次方的贝塞尔曲线始终是其低一级的曲线的 线性贝塞尔曲线。"),p("p",null,"在求导数的时候，可视化看出来，知道导数的方向，与其垂直的 90 度，也就是与曲线的相切的方向。"),p("p",null,"而在一阶导数的推导的时候，其实可以看出，就是点的速度。 二阶导数，就是点的速度的变化率，那就是加速度。 三维导数，就是加速度的变化率。"),p("p",null,"其实，也就是曲率。"),p("p",null,"K = (det( P’, p’‘)) / ||P’||^3"),p("h1",{id:"svg-路径-path-的贝塞尔曲线",tabindex:"-1"},[i("SVG 路径 Path 的贝塞尔曲线 "),p("a",{class:"header-anchor",href:"#svg-路径-path-的贝塞尔曲线","aria-hidden":"true"},"#")]),p("p",null,"在 SVG 中的 Path 使用贝塞尔曲线，从张鑫旭老师的文章中学到的记忆方法， “切图组合”和“厕所组合”。"),p("p",null,"从字面上理解，切图主要是在图，是二维的事情，所以对应是二维贝塞尔曲线。 厕所是三维世界的，所以对应的是三维贝塞尔曲线。"),p("p",null,"还有就是命令的对应，由上面可知，二维贝塞尔曲线有三个点，三维贝塞尔曲线有四个点。"),p("h2",{id:"_1-二维贝塞尔曲线（切图组合-q）",tabindex:"-1"},[i("1. 二维贝塞尔曲线（切图组合 Q） "),p("a",{class:"header-anchor",href:"#_1-二维贝塞尔曲线（切图组合-q）","aria-hidden":"true"},"#")]),p("p",null,"在 SVG 中，二维贝塞尔曲线对应的指令和参数是：（虚实） 因为是曲线，只显示两个点，所以好理解的是，显示第一个和第四个点。中间的都是控制点不显示。 而二维贝塞尔曲线的第一个点是前面的点，前面的点肯定不受这里影响，肯定会显示。然后最后一个点也肯定是显示，所以在二维贝塞尔曲线的指令中的两个坐标中的第一个是控制点，不会实际显示，第二个是真实点，会显示。"),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925142019.png",alt:"20230925142019"})]),p("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[p("code",{class:"language-text"},[p("span",{class:"line"},[p("span",null,"Q x1 y1, x y")])])]),p("p",null,"这里只有两个点，分别是第二个点和第三个点，第一个点使用的是前面的那个点。比如"),p("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[p("code",{class:"language-text"},[p("span",{class:"line"},[p("span",null,"M 0 10 Q 5 5 , 10 10")])])]),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925142308.png",alt:"20230925142308"})]),p("p",null,"这里贝塞尔曲线第一个点也就是起始点是 0 10 ，第二个点是 5 5 ，第三个点是 10 10 。"),p("h2",{id:"_2-三维贝塞尔曲线（厕所组合-c）",tabindex:"-1"},[i("2. 三维贝塞尔曲线（厕所组合 C） "),p("a",{class:"header-anchor",href:"#_2-三维贝塞尔曲线（厕所组合-c）","aria-hidden":"true"},"#")]),p("p",null,"在 SVG 中，三维贝塞尔曲线对应的指令和参数是：（虚虚实）"),p("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[p("code",{class:"language-text"},[p("span",{class:"line"},[p("span",null," C x1 y1, x2 y2, x y")])])]),p("p",null,"这里有三个点，跟上面同理，第一个点使用的是之前的坐标，这里的三个分别是第二、三、四点。 在 SVG 中，因为是曲线只显示两个点，所以其四个点对应的也是显示、不显示、不显示、显示。"),p("p",null,"而针对三维贝塞尔曲线的指令，更好理解的是，第一个点使用的是前面的那个点，前面的点肯定不受这里影响，肯定会显示。最后一个点也是会显示，所以中间的两个点是不显示的控制点。"),p("p",null,"示例："),p("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[p("code",{class:"language-text"},[p("span",{class:"line"},[p("span",null,"M 0 10 C 0 7 10 13 10 10")])])]),p("p",null,[p("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230925144154.png",alt:"20230925144154"})])],-1),r="贝塞尔曲线公式推导",h="2023/09/25",c="贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆",g=["#全部","#一般般"],d="https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesnest-route.gif",P="https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png",o="贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆",u=[{property:"og:title",content:"贝塞尔曲线公式推导"},{name:"twitter:title",content:"贝塞尔曲线公式推导"},{name:"description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{property:"og:description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{name:"twitter:description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{property:"og:image",content:"https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png"},{name:"twitter:card",content:"summary_large_image"}],m={__name:"01-贝塞尔曲线公式推导",setup(p,{expose:i}){const r={title:"贝塞尔曲线公式推导",date:"2023/09/25",desc:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆",tags:["#全部","#一般般"],cover:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesnest-route.gif",image:"https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png",description:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆",meta:[{property:"og:title",content:"贝塞尔曲线公式推导"},{name:"twitter:title",content:"贝塞尔曲线公式推导"},{name:"description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{property:"og:description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{name:"twitter:description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{property:"og:image",content:"https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png"},{name:"twitter:card",content:"summary_large_image"}]};i({frontmatter:r});return t({title:"贝塞尔曲线公式推导",meta:[{property:"og:title",content:"贝塞尔曲线公式推导"},{name:"twitter:title",content:"贝塞尔曲线公式推导"},{name:"description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{property:"og:description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{name:"twitter:description",content:"贝塞尔曲线的公式推导，和 SVG 中 Path 的贝塞尔曲线指令的理解记忆"},{property:"og:image",content:"https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F01-%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%E5%85%AC%E5%BC%8F%E6%8E%A8%E5%AF%BC.png"},{name:"twitter:card",content:"summary_large_image"}]}),(t,p)=>{const i=e;return n(),l(i,{frontmatter:r},{default:a((()=>[s])),_:1})}}};export{d as cover,h as date,m as default,c as desc,o as description,P as image,u as meta,g as tags,r as title};
