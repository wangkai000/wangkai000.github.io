import{a3 as r,a4 as s}from"./app-BPXB5aGs.js";const t=r();function d(n){if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)){t.value=!t.value;return}const e=n.clientX,a=n.clientY,o=Math.hypot(Math.max(e,innerWidth-e),Math.max(a,innerHeight-a));document.startViewTransition(async()=>{t.value=!t.value,await s()}).ready.then(()=>{const i=[`circle(0px at ${e}px ${a}px)`,`circle(${o}px at ${e}px ${a}px)`];document.documentElement.animate({clipPath:t.value?[...i].reverse():i},{duration:400,easing:"ease-out",pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}export{t as i,d as t};
