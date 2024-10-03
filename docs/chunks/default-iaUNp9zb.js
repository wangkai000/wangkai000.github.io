import{i as e,t as a}from"./dark-DVllVnVS.js";import{I as t}from"./iconify-D1tYBhgG.js";import{d as s,o as l,c as n,f as o,g as i,h as r,w as d,i as c,n as u,j as p,k as f,b as m,m as v,l as x,p as g,q as b,s as y,v as h,x as _,y as k,r as w,e as C,F as B,z as j,A as D,B as T,C as z,t as $,D as H,E as I,G as L,H as M,I as O,T as P,J as E,K as N,L as R}from"../assets/app-BqS4ReQG.js";import{x as A,g as G,B as q,w as F,c as J,C as K,b as S}from"./shadcn-vue-utils-DFcfIMiT.js";import{c as U}from"./index-MWXiOzPM.js";const V=s({__name:"DarkToggle",setup:s=>(s,r)=>(l(),n("button",{class:"!outline-none",onClick:r[0]||(r[0]=(...e)=>("toggleDark"in s?s.toggleDark:o(a))&&("toggleDark"in s?s.toggleDark:o(a))(...e))},[("isDark"in s?s.isDark:o(e))?(l(),i(o(t),{key:0,class:"h-[16px] w-[16px]",icon:"carbon-moon"})):(l(),i(o(t),{key:1,class:"h-[16px] w-[16px]",icon:"carbon-sun"}))]))}),W={class:"mt-[0px] block h-[40px] w-[40px] md:mt-0 md:h-[56px] md:w-[56px]",src:"/logo.png",alt:""};const X=r({},[["render",function(e,a){return l(),n("img",W)}]]),Y=s({__name:"HoverCard",props:{defaultOpen:{type:Boolean},open:{type:Boolean},openDelay:{},closeDelay:{}},emits:["update:open"],setup(e,{emit:a}){const t=A(e,a);return(e,a)=>(l(),i(o(G),u(p(o(t))),{default:d((()=>[c(e.$slots,"default")])),_:3},16))}}),Z=s({__name:"HoverCardContent",props:{forceMount:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(e){const a=e,t=f((()=>{const{class:e,...t}=a;return t})),s=q(t);return(e,t)=>(l(),i(o(K),null,{default:d((()=>[m(o(F),v(o(s),{class:o(J)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a.class)}),{default:d((()=>[c(e.$slots,"default")])),_:3},16,["class"])])),_:3}))}}),Q=s({__name:"HoverCardTrigger",props:{asChild:{type:Boolean},as:{}},setup(e){const a=e;return(e,t)=>(l(),i(o(S),u(p(a)),{default:d((()=>[c(e.$slots,"default")])),_:3},16))}}),ee={id:"pc-nav",class:"nav-container"},ae={class:"flex flex-col items-center justify-start text-[14px]"},te={key:0,class:"mobile-nav-div flex fixed"},se={class:"flex-1 nav-menu"},le=r(s({__name:"Nav",setup(a){x((e=>({"03be8244":o(c)})));const t=g(),s=b(),r=y(!1),c=f((()=>e.value?"unset":"difference")),u=()=>{r.value=!r.value},p=()=>{r.value=!1},v=async()=>{await H(),r.value=!1},I=80,L=28,M=5,O=y(-2),P=f((()=>({width:`${I}px`,height:`${L}px`,transform:`\n      translate(\n        ${O.value*I+M}px,\n        5px\n      )\n    `}))),E=y();function N(e,a){s.value="组件"===e.label?"tianMiao":e.label,O.value=a,function(){const e=["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"],a=[1,1];if(E.value){E.value.animate({transform:e,opacity:a},{duration:900,fill:"forwards"}).onfinish=()=>{}}}()}return h((()=>{const e=_.find((e=>e.route===t.path));e&&N(e,_.indexOf(e))})),k((()=>t.path),(e=>{const a=_.find((e=>e.route===t.path));a&&N(a,_.indexOf(a));_.map((e=>e.route)).includes(e)||function(){const e=["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(0.97, 1.03, 1)","scale3d(0, 0, 1)"],a=[1,0];if(E.value){E.value.animate({transform:e,opacity:a},{duration:900,fill:"forwards"}).onfinish=()=>{}}}()})),(e,a)=>{const t=w("router-link"),s=Q,c=Z,f=Y;return l(),n(B,null,[C("div",ee,[(l(!0),n(B,null,j(o(_),(e=>(l(),n("div",{key:e.label},[m(f,{"open-delay":0,"close-delay":0},{default:d((()=>{var a;return[m(s,null,{default:d((()=>[m(t,{to:e.route,replace:"",class:"nav-item",style:D({height:`${L}px`,width:`${I}px`})},{default:d((()=>[z($(e.label),1)])),_:2},1032,["to","style"])])),_:2},1024),(null==(a=null==e?void 0:e.children)?void 0:a.length)>0?(l(),i(c,{key:0,"side-offset":15,class:"w-[120px]! p-[4px]!"},{default:d((()=>[C("div",ae,[(l(!0),n(B,null,j(e.children,(e=>(l(),n("div",{key:e.label,class:"option-item h-10 w-full flex cursor-pointer items-center justify-center"},$(e.label),1)))),128))])])),_:2},1024)):T("",!0)]})),_:2},1024)])))),128)),C("div",{style:D(o(P)),class:"pointer-events-none absolute left-0 top-0 transition-transform duration-300 ease-in-out"},[C("div",{ref_key:"bgInnerRef",ref:E,class:"h-full w-full rounded-[50px] border border-solid border-blue-700"},null,512)],4)]),C("div",{id:"mobile-nav",class:"nav-container"},[C("div",{class:"flex justify-end"},[C("div",{class:"flex-col items-center cursor-pointer relative",onClick:u}," ☰ ")])]),o(r)?(l(),n("div",te,[C("div",se,[(l(!0),n(B,null,j(o(_),(e=>(l(),i(t,{key:e.label,class:"nav-menu-link",replace:"",to:e.route,onClick:v},{default:d((()=>[z($(e.label),1)])),_:2},1032,["to"])))),128))]),C("div",{class:"flex-1 opacity-0",onClick:p})])):T("",!0)],64)}}}),[["__scopeId","data-v-eb02bc04"]]),ne={id:"nav-bg",class:"fixed left-0 top-0 z-[2] h-fit w-full flex flex-row items-center justify-between px-[3.5vw] py-[18px] md:h-[80px] md:py-unset"},oe={class:"grid h-[40px] w-[40px] place-items-center"},ie=r(s({__name:"index",setup:e=>(e,a)=>{const t=V;return l(),n("div",ne,[m(X),m(le),C("div",oe,[m(t)])])}}),[["__scopeId","data-v-0216a5e7"]]),re=C("div",{class:"absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-black:30"},null,-1),de=["src","alt"],ce=s({__name:"default",setup(e){const a=g(),t=["/blog/content-sidebar"],s=f((()=>t.includes(a.path))),r=I("(min-width: 720px)"),c=y();return L("click",(async e=>{const a=Array.from(e.composedPath()),t=a[0];if(!(t instanceof HTMLElement))return;if("IMG"!==t.tagName)return;if(t.classList.contains("no-preview"))return;if(a.some((e=>e instanceof HTMLElement&&["A","BUTTON"].includes(e.tagName))))return;if(!a.some((e=>e instanceof HTMLElement&&e.classList.contains("prose"))))return;const s=t.getBoundingClientRect();await new Promise((e=>setTimeout(e,50)));const l=t.getBoundingClientRect();s.left===l.left&&s.top===l.top&&(c.value=t)})),(e,a)=>{const t=ie,u=w("RouterView"),p=w("client-only");return l(),n("main",{id:"main-root",class:R(["bg-[var(--bg-main-color)]",o(s)?"":"pt-[100px] pb-20 px-[10px] md:px-5 overflow-x-hidden min-h-screen md:pt-[112px] "])},[M(m(t,null,null,512),[[O,!o(r)||!o(s)]]),m(u,null,{default:d((({Component:e})=>[m(P,{name:o(U)||"page",mode:"out-in"},{default:d((()=>[(l(),i(N,null,[(l(),i(E(e)))],1024))])),_:2},1032,["name"])])),_:1}),m(P,{name:"fade"},{default:d((()=>[o(c)?(l(),n("div",{key:0,class:"fixed bottom-0 left-0 right-0 top-0 z-[500] backdrop-blur",onClick:a[0]||(a[0]=e=>c.value=void 0)},[re,C("img",{class:"mx-auto h-[calc(100%_-_20px)] mt-[10px] w-[calc(100%_-_20px)] object-contain",src:o(c).src,alt:o(c).alt},null,8,de)])):T("",!0)])),_:1}),m(p)],2)}}});export{ce as default};
