import{k as e}from"../assets/app-Cg4_voFO.js";import{n as t}from"./vue-wdX2hzzr.js";const a=e();function n(e){if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches))return void(a.value=!a.value);const n=e.clientX,i=e.clientY,o=Math.hypot(Math.max(n,innerWidth-n),Math.max(i,innerHeight-i));document.startViewTransition((async()=>{a.value=!a.value,await t()})).ready.then((()=>{const e=[`circle(0px at ${n}px ${i}px)`,`circle(${o}px at ${n}px ${i}px)`];document.documentElement.animate({clipPath:a.value?[...e].reverse():e},{duration:400,easing:"ease-out",pseudoElement:a.value?"::view-transition-old(root)":"::view-transition-new(root)"})}))}export{a as i,n as t};
//# sourceMappingURL=dark-DEVuhfJz.js.map
