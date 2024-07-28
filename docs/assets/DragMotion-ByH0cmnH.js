import{U as Nt}from"./ShadowCard-DUTw6PsQ.js";import{f as _,s as k,y as S,Y as ve,k as ce,as as Vt,E as A,at as Pt,au as It,av as Bt,d as qe,aw as Lt,o as le,c as Ut,e as L,t as $t,i as zt,J as Ht,A as Wt,aj as Yt,h as Zt,g as Ee,w as Fe,b as De,a1 as qt,G as Kt,H as Xt,C as Gt}from"./app-Ddps5ZSK.js";import{I as Qt}from"./iconify-CVmMpTBc.js";const Ke=1/60*1e3,Jt=typeof performance<"u"?()=>performance.now():()=>Date.now(),Xe=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Jt()),Ke);function en(e){let t=[],n=[],r=0,s=!1,a=!1;const o=new WeakSet,i={schedule:(c,l=!1,u=!1)=>{const f=u&&s,m=f?t:n;return l&&o.add(c),m.indexOf(c)===-1&&(m.push(c),f&&s&&(r=t.length)),c},cancel:c=>{const l=n.indexOf(c);l!==-1&&n.splice(l,1),o.delete(c)},process:c=>{if(s){a=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let l=0;l<r;l++){const u=t[l];u(c),o.has(u)&&(i.schedule(u),e())}s=!1,a&&(a=!1,i.process(c))}};return i}const tn=40;let ue=!0,U=!1,fe=!1;const V={delta:0,timestamp:0},z=["read","update","preRender","render","postRender"],ee=z.reduce((e,t)=>(e[t]=en(()=>U=!0),e),{}),pe=z.reduce((e,t)=>{const n=ee[t];return e[t]=(r,s=!1,a=!1)=>(U||sn(),n.schedule(r,s,a)),e},{}),nn=z.reduce((e,t)=>(e[t]=ee[t].cancel,e),{});z.reduce((e,t)=>(e[t]=()=>ee[t].process(V),e),{});const rn=e=>ee[e].process(V),Ge=e=>{U=!1,V.delta=ue?Ke:Math.max(Math.min(e-V.timestamp,tn),1),V.timestamp=e,fe=!0,z.forEach(rn),fe=!1,U&&(ue=!1,Xe(Ge))},sn=()=>{U=!0,ue=!0,fe||Xe(Ge)},Qe=()=>V;function Je(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}var Ne=function(){};const de=(e,t,n)=>Math.min(Math.max(n,e),t),re=.001,on=.01,an=10,cn=.05,ln=1;function un({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let s,a,o=1-t;o=de(cn,ln,o),e=de(on,an,e/1e3),o<1?(s=l=>{const u=l*o,f=u*e,m=u-n,h=me(l,o),b=Math.exp(-f);return re-m/h*b},a=l=>{const f=l*o*e,m=f*n+n,h=Math.pow(o,2)*Math.pow(l,2)*e,b=Math.exp(-f),T=me(Math.pow(l,2),o);return(-s(l)+re>0?-1:1)*((m-h)*b)/T}):(s=l=>{const u=Math.exp(-l*e),f=(l-n)*e+1;return-re+u*f},a=l=>{const u=Math.exp(-l*e),f=(n-l)*(e*e);return u*f});const i=5/e,c=pn(s,a,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const l=Math.pow(c,2)*r;return{stiffness:l,damping:o*2*Math.sqrt(r*l),duration:e}}}const fn=12;function pn(e,t,n){let r=n;for(let s=1;s<fn;s++)r=r-e(r)/t(r);return r}function me(e,t){return e*Math.sqrt(1-t*t)}const dn=["duration","bounce"],mn=["stiffness","damping","mass"];function Ve(e,t){return t.some(n=>e[n]!==void 0)}function hn(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Ve(e,mn)&&Ve(e,dn)){const n=un(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function xe(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:s}=e,a=Je(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:i,damping:c,mass:l,velocity:u,duration:f,isResolvedFromDuration:m}=hn(a),h=Pe,b=Pe;function T(){const v=u?-(u/1e3):0,x=n-t,y=c/(2*Math.sqrt(i*l)),d=Math.sqrt(i/l)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-t)/100,.4)),y<1){const g=me(d,y);h=O=>{const w=Math.exp(-y*d*O);return n-w*((v+y*d*x)/g*Math.sin(g*O)+x*Math.cos(g*O))},b=O=>{const w=Math.exp(-y*d*O);return y*d*w*(Math.sin(g*O)*(v+y*d*x)/g+x*Math.cos(g*O))-w*(Math.cos(g*O)*(v+y*d*x)-g*x*Math.sin(g*O))}}else if(y===1)h=g=>n-Math.exp(-d*g)*(x+(v+d*x)*g);else{const g=d*Math.sqrt(y*y-1);h=O=>{const w=Math.exp(-y*d*O),R=Math.min(g*O,300);return n-w*((v+y*d*x)*Math.sinh(R)+g*x*Math.cosh(R))/g}}}return T(),{next:v=>{const x=h(v);if(m)o.done=v>=f;else{const y=b(v)*1e3,d=Math.abs(y)<=r,g=Math.abs(n-x)<=s;o.done=d&&g}return o.value=o.done?n:x,o},flipTarget:()=>{u=-u,[t,n]=[n,t],T()}}}xe.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Pe=e=>0,et=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Oe=(e,t,n)=>-n*e+n*t+e,tt=(e,t)=>n=>Math.max(Math.min(n,t),e),P=e=>e%1?Number(e.toFixed(5)):e,$=/(-)?([\d]*\.?[\d])+/g,he=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,bn=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function H(e){return typeof e=="string"}const W={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},I=Object.assign(Object.assign({},W),{transform:tt(0,1)}),q=Object.assign(Object.assign({},W),{default:1}),Te=e=>({test:t=>H(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),F=Te("deg"),B=Te("%"),p=Te("px"),Ie=Object.assign(Object.assign({},B),{parse:e=>B.parse(e)/100,transform:e=>B.transform(e*100)}),we=(e,t)=>n=>!!(H(n)&&bn.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),nt=(e,t,n)=>r=>{if(!H(r))return r;const[s,a,o,i]=r.match($);return{[e]:parseFloat(s),[t]:parseFloat(a),[n]:parseFloat(o),alpha:i!==void 0?parseFloat(i):1}},N={test:we("hsl","hue"),parse:nt("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+B.transform(P(t))+", "+B.transform(P(n))+", "+P(I.transform(r))+")"},gn=tt(0,255),se=Object.assign(Object.assign({},W),{transform:e=>Math.round(gn(e))}),E={test:we("rgb","red"),parse:nt("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+se.transform(e)+", "+se.transform(t)+", "+se.transform(n)+", "+P(I.transform(r))+")"};function yn(e){let t="",n="",r="",s="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),s=e.substr(4,1),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const be={test:we("#"),parse:yn,transform:E.transform},M={test:e=>E.test(e)||be.test(e)||N.test(e),parse:e=>E.test(e)?E.parse(e):N.test(e)?N.parse(e):be.parse(e),transform:e=>H(e)?e:e.hasOwnProperty("red")?E.transform(e):N.transform(e)},rt="${c}",st="${n}";function vn(e){var t,n,r,s;return isNaN(e)&&H(e)&&((n=(t=e.match($))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((s=(r=e.match(he))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function ot(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(he);r&&(n=r.length,e=e.replace(he,rt),t.push(...r.map(M.parse)));const s=e.match($);return s&&(e=e.replace($,st),t.push(...s.map(W.parse))),{values:t,numColors:n,tokenised:e}}function at(e){return ot(e).values}function it(e){const{values:t,numColors:n,tokenised:r}=ot(e),s=t.length;return a=>{let o=r;for(let i=0;i<s;i++)o=o.replace(i<n?rt:st,i<n?M.transform(a[i]):P(a[i]));return o}}const xn=e=>typeof e=="number"?0:e;function On(e){const t=at(e);return it(e)(t.map(xn))}const Y={test:vn,parse:at,createTransformer:it,getAnimatableNone:On},Tn=new Set(["brightness","contrast","saturate","opacity"]);function wn(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match($)||[];if(!r)return e;const s=n.replace(r,"");let a=Tn.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+s+")"}const Mn=/([a-z-]*)\(.*?\)/g,ge=Object.assign(Object.assign({},Y),{getAnimatableNone:e=>{const t=e.match(Mn);return t?t.map(wn).join(" "):e}});function oe(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Be({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,a=0,o=0;if(!t)s=a=o=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;s=oe(c,i,e+1/3),a=oe(c,i,e),o=oe(c,i,e-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}const _n=(e,t,n)=>{const r=e*e,s=t*t;return Math.sqrt(Math.max(0,n*(s-r)+r))},Sn=[be,E,N],Le=e=>Sn.find(t=>t.test(e)),ct=(e,t)=>{let n=Le(e),r=Le(t),s=n.parse(e),a=r.parse(t);n===N&&(s=Be(s),n=E),r===N&&(a=Be(a),r=E);const o=Object.assign({},s);return i=>{for(const c in o)c!=="alpha"&&(o[c]=_n(s[c],a[c],i));return o.alpha=Oe(s.alpha,a.alpha,i),n.transform(o)}},An=e=>typeof e=="number",jn=(e,t)=>n=>t(e(n)),lt=(...e)=>e.reduce(jn);function ut(e,t){return An(e)?n=>Oe(e,t,n):M.test(e)?ct(e,t):pt(e,t)}const ft=(e,t)=>{const n=[...e],r=n.length,s=e.map((a,o)=>ut(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=s[o](a);return n}},kn=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=ut(e[s],t[s]));return s=>{for(const a in r)n[a]=r[a](s);return n}};function Ue(e){const t=Y.parse(e),n=t.length;let r=0,s=0,a=0;for(let o=0;o<n;o++)r||typeof t[o]=="number"?r++:t[o].hue!==void 0?a++:s++;return{parsed:t,numNumbers:r,numRGB:s,numHSL:a}}const pt=(e,t)=>{const n=Y.createTransformer(t),r=Ue(e),s=Ue(t);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?lt(ft(r.parsed,s.parsed),n):o=>`${o>0?t:e}`},Rn=(e,t)=>n=>Oe(e,t,n);function Cn(e){if(typeof e=="number")return Rn;if(typeof e=="string")return M.test(e)?ct:pt;if(Array.isArray(e))return ft;if(typeof e=="object")return kn}function En(e,t,n){const r=[],s=n||Cn(e[0]),a=e.length-1;for(let o=0;o<a;o++){let i=s(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]:t;i=lt(c,i)}r.push(i)}return r}function Fn([e,t],[n]){return r=>n(et(e,t,r))}function Dn(e,t){const n=e.length,r=n-1;return s=>{let a=0,o=!1;if(s<=e[0]?o=!0:s>=e[r]&&(a=r-1,o=!0),!o){let c=1;for(;c<n&&!(e[c]>s||c===r);c++);a=c-1}const i=et(e[a],e[a+1],s);return t[a](i)}}function dt(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const a=e.length;Ne(a===t.length),Ne(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=En(t,r,s),i=a===2?Fn(e,o):Dn(e,o);return n?c=>i(de(e[0],e[a-1],c)):i}const te=e=>t=>1-e(1-t),Me=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Nn=e=>t=>Math.pow(t,e),mt=e=>t=>t*t*((e+1)*t-e),Vn=e=>{const t=mt(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},ht=1.525,Pn=4/11,In=8/11,Bn=9/10,bt=e=>e,_e=Nn(2),Ln=te(_e),gt=Me(_e),yt=e=>1-Math.sin(Math.acos(e)),vt=te(yt),Un=Me(vt),Se=mt(ht),$n=te(Se),zn=Me(Se),Hn=Vn(ht),Wn=4356/361,Yn=35442/1805,Zn=16061/1805,Q=e=>{if(e===1||e===0)return e;const t=e*e;return e<Pn?7.5625*t:e<In?9.075*t-9.9*e+3.4:e<Bn?Wn*t-Yn*e+Zn:10.8*e*e-20.52*e+10.72},qn=te(Q),Kn=e=>e<.5?.5*(1-Q(1-e*2)):.5*Q(e*2-1)+.5;function Xn(e,t){return e.map(()=>t||gt).splice(0,e.length-1)}function Gn(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function Qn(e,t){return e.map(n=>n*t)}function X({from:e=0,to:t=1,ease:n,offset:r,duration:s=300}){const a={done:!1,value:e},o=Array.isArray(t)?t:[e,t],i=Qn(r&&r.length===o.length?r:Gn(o),s);function c(){return dt(i,o,{ease:Array.isArray(n)?n:Xn(o,n)})}let l=c();return{next:u=>(a.value=l(u),a.done=u>=s,a),flipTarget:()=>{o.reverse(),l=c()}}}function Jn({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:a}){const o={done:!1,value:t};let i=n*e;const c=t+i,l=a===void 0?c:a(c);return l!==c&&(i=l-t),{next:u=>{const f=-i*Math.exp(-u/r);return o.done=!(f>s||f<-s),o.value=o.done?l:l+f,o},flipTarget:()=>{}}}const $e={keyframes:X,spring:xe,decay:Jn};function er(e){if(Array.isArray(e.to))return X;if($e[e.type])return $e[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?X:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?xe:X}function xt(e,t,n=0){return e-t-n}function tr(e,t,n=0,r=!0){return r?xt(t+-e,t,n):t-(e-t)+n}function nr(e,t,n,r){return r?e>=t+n:e<=-n}const rr=e=>{const t=({delta:n})=>e(n);return{start:()=>pe.update(t,!0),stop:()=>nn.update(t)}};function Ot(e){var t,n,{from:r,autoplay:s=!0,driver:a=rr,elapsed:o=0,repeat:i=0,repeatType:c="loop",repeatDelay:l=0,onPlay:u,onStop:f,onComplete:m,onRepeat:h,onUpdate:b}=e,T=Je(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=T,x,y=0,d=T.duration,g,O=!1,w=!0,R;const Z=er(T);!((n=(t=Z).needsInterpolation)===null||n===void 0)&&n.call(t,r,v)&&(R=dt([0,100],[r,v],{clamp:!1}),r=0,v=100);const C=Z(Object.assign(Object.assign({},T),{from:r,to:v}));function Ct(){y++,c==="reverse"?(w=y%2===0,o=tr(o,d,l,w)):(o=xt(o,d,l),c==="mirror"&&C.flipTarget()),O=!1,h&&h()}function Et(){x.stop(),m&&m()}function Ft(ne){if(w||(ne=-ne),o+=ne,!O){const Ce=C.next(Math.max(0,o));g=Ce.value,R&&(g=R(g)),O=w?Ce.done:o<=0}b?.(g),O&&(y===0&&(d??(d=o)),y<i?nr(o,d,l,w)&&Ct():Et())}function Dt(){u?.(),x=a(Ft),x.start()}return s&&Dt(),{stop:()=>{f?.(),x.stop()}}}function Tt(e,t){return t?e*(1e3/t):0}function sr({from:e=0,velocity:t=0,min:n,max:r,power:s=.8,timeConstant:a=750,bounceStiffness:o=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:l,driver:u,onUpdate:f,onComplete:m,onStop:h}){let b;function T(d){return n!==void 0&&d<n||r!==void 0&&d>r}function v(d){return n===void 0?r:r===void 0||Math.abs(n-d)<Math.abs(r-d)?n:r}function x(d){b?.stop(),b=Ot(Object.assign(Object.assign({},d),{driver:u,onUpdate:g=>{var O;f?.(g),(O=d.onUpdate)===null||O===void 0||O.call(d,g)},onComplete:m,onStop:h}))}function y(d){x(Object.assign({type:"spring",stiffness:o,damping:i,restDelta:c},d))}if(T(e))y({from:e,velocity:t,to:v(e)});else{let d=s*t+e;typeof l<"u"&&(d=l(d));const g=v(d),O=g===n?-1:1;let w,R;const Z=C=>{w=R,R=C,t=Tt(C-w,Qe().delta),(O===1&&C>g||O===-1&&C<g)&&y({from:C,to:g,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:a,power:s,restDelta:c,modifyTarget:l,onUpdate:T(d)?Z:void 0})}return{stop:()=>b?.stop()}}const wt=(e,t)=>1-3*t+3*e,Mt=(e,t)=>3*t-6*e,_t=e=>3*e,J=(e,t,n)=>((wt(t,n)*e+Mt(t,n))*e+_t(t))*e,St=(e,t,n)=>3*wt(t,n)*e*e+2*Mt(t,n)*e+_t(t),or=1e-7,ar=10;function ir(e,t,n,r,s){let a,o,i=0;do o=t+(n-t)/2,a=J(o,r,s)-e,a>0?n=o:t=o;while(Math.abs(a)>or&&++i<ar);return o}const cr=8,lr=.001;function ur(e,t,n,r){for(let s=0;s<cr;++s){const a=St(t,n,r);if(a===0)return t;const o=J(t,n,r)-e;t-=o/a}return t}const G=11,K=1/(G-1);function fr(e,t,n,r){if(e===t&&n===r)return bt;const s=new Float32Array(G);for(let o=0;o<G;++o)s[o]=J(o*K,e,n);function a(o){let i=0,c=1;const l=G-1;for(;c!==l&&s[c]<=o;++c)i+=K;--c;const u=(o-s[c])/(s[c+1]-s[c]),f=i+u*K,m=St(f,e,n);return m>=lr?ur(o,f,e,n):m===0?f:ir(o,i,i+K,e,n)}return o=>o===0||o===1?o:J(a(o),t,r)}var Ae={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},pr=Object.defineProperty,dr=(e,t,n)=>t in e?pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mr=(e,t,n)=>(dr(e,t+"",n),n);class hr{constructor(){mr(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,r){if(this.subscriptions.size)for(const s of this.subscriptions)s(t,n,r)}clear(){this.subscriptions.clear()}}var br=Object.defineProperty,gr=(e,t,n)=>t in e?br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t,n)=>(gr(e,typeof t!="symbol"?t+"":t,n),n);function ze(e){return!Number.isNaN(Number.parseFloat(e))}class yr{constructor(t){j(this,"current"),j(this,"prev"),j(this,"timeDelta",0),j(this,"lastUpdated",0),j(this,"updateSubscribers",new hr),j(this,"stopAnimation"),j(this,"canTrackVelocity",!1),j(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=Qe();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),pe.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),j(this,"scheduleVelocityCheck",()=>pe.postRender(this.velocityCheck)),j(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=ze(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=t,this.canTrackVelocity=ze(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Tt(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:r}=t(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function vr(e){return new yr(e)}const{isArray:xr}=Array;function Or(){const e=k({}),t=r=>{const s=a=>{e.value[a]&&(e.value[a].stop(),e.value[a].destroy(),delete e.value[a])};r?xr(r)?r.forEach(s):s(r):Object.keys(e.value).forEach(s)},n=(r,s,a)=>{if(e.value[r])return e.value[r];const o=vr(s);return o.onChange(i=>a[r]=i),e.value[r]=o,o};return Bt(t),{motionValues:e,get:n,stop:t}}function Tr(e){return Array.isArray(e)}function D(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function ae(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function wr(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function ie(){return{type:"keyframes",ease:"linear",duration:300}}function Mr(e){return{type:"keyframes",duration:800,values:e}}const He={default:wr,x:D,y:D,z:D,rotate:D,rotateX:D,rotateY:D,rotateZ:D,scaleX:ae,scaleY:ae,scale:ae,backgroundColor:ie,color:ie,opacity:ie};function At(e,t){let n;return Tr(t)?n=Mr:n=He[e]||He.default,{to:t,...n(t)}}const We={...W,transform:Math.round},jt={color:M,backgroundColor:M,outlineColor:M,fill:M,stroke:M,borderColor:M,borderTopColor:M,borderRightColor:M,borderBottomColor:M,borderLeftColor:M,borderWidth:p,borderTopWidth:p,borderRightWidth:p,borderBottomWidth:p,borderLeftWidth:p,borderRadius:p,radius:p,borderTopLeftRadius:p,borderTopRightRadius:p,borderBottomRightRadius:p,borderBottomLeftRadius:p,width:p,maxWidth:p,height:p,maxHeight:p,size:p,top:p,right:p,bottom:p,left:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,rotate:F,rotateX:F,rotateY:F,rotateZ:F,scale:q,scaleX:q,scaleY:q,scaleZ:q,skew:F,skewX:F,skewY:F,distance:p,translateX:p,translateY:p,translateZ:p,x:p,y:p,z:p,perspective:p,transformPerspective:p,opacity:I,originX:Ie,originY:Ie,originZ:p,zIndex:We,filter:ge,WebkitFilter:ge,fillOpacity:I,strokeOpacity:I,numOctaves:We},je=e=>jt[e];function ye(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function _r(e,t){let n=je(e);return n!==ge&&(n=Y),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Sr={linear:bt,easeIn:_e,easeInOut:gt,easeOut:Ln,circIn:yt,circInOut:Un,circOut:vt,backIn:Se,backInOut:zn,backOut:$n,anticipate:Hn,bounceIn:qn,bounceInOut:Kn,bounceOut:Q};function Ye(e){if(Array.isArray(e)){const[t,n,r,s]=e;return fr(t,n,r,s)}else if(typeof e=="string")return Sr[e];return e}function Ar(e){return Array.isArray(e)&&typeof e[0]!="number"}function Ze(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Y.test(t)&&!t.startsWith("url("))}function jr(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function kr({ease:e,times:t,delay:n,...r}){const s={...r};return t&&(s.offset=t),e&&(s.ease=Ar(e)?e.map(Ye):Ye(e)),n&&(s.elapsed=-n),s}function Rr(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),jr(t),Cr(e)||(e={...e,...At(n,t.to)}),{...t,...kr(e)}}function Cr({delay:e,repeat:t,repeatType:n,repeatDelay:r,from:s,...a}){return!!Object.keys(a).length}function Er(e,t){return e[t]||e.default||e}function Fr(e,t,n,r,s){const a=Er(r,e);let o=a.from===null||a.from===void 0?t.get():a.from;const i=Ze(e,n);o==="none"&&i&&typeof n=="string"&&(o=_r(e,n));const c=Ze(e,o);function l(f){const m={from:o,to:n,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return a.type==="inertia"||a.type==="decay"?sr({...m,...a}):Ot({...Rr(a,m,e),onUpdate:h=>{m.onUpdate(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s&&s(),f&&f()}})}function u(f){return t.set(n),s&&s(),f&&f(),{stop:()=>{}}}return!c||!i||a.type===!1?u:l}function Dr(){const{motionValues:e,stop:t,get:n}=Or();return{motionValues:e,stop:t,push:(s,a,o,i={},c)=>{const l=o[s],u=n(s,l,o);if(i&&i.immediate){u.set(a);return}const f=Fr(s,u,a,i,c);u.start(f)}}}function Nr(e,t={},{motionValues:n,push:r,stop:s}=Dr()){const a=_(t),o=k(!1);S(n,f=>{o.value=Object.values(f).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!a||!a[f])throw new Error(`The variant ${f} does not exist.`);return a[f]},c=f=>{typeof f=="string"&&(f=i(f));const m=Object.entries(f).map(([b,T])=>{if(b!=="transition")return new Promise(v=>r(b,T,e,f.transition||At(b,f[b]),v))}).filter(Boolean);async function h(){await Promise.all(m),f.transition?.onComplete?.()}return Promise.all([h()])};return{isAnimating:o,apply:c,set:f=>{const m=Vt(f)?f:i(f);Object.entries(m).forEach(([h,b])=>{h!=="transition"&&r(h,b,e,{immediate:!0})})},leave:async f=>{let m;if(a&&(a.leave&&(m=a.leave),!a.leave&&a.initial&&(m=a.initial)),!m){f();return}await c(m),f()},stop:s}}const ke=typeof window<"u",Vr=()=>ke&&(window.onpointerdown===null||Ae.TEST),Pr=()=>ke&&(window.ontouchstart===null||Ae.TEST),Ir=()=>ke&&(window.onmousedown===null||Ae.TEST);function Br({target:e,state:t,variants:n,apply:r}){const s=_(n),a=k(!1),o=k(!1),i=k(!1),c=ce(()=>{let u=[...Object.keys(t.value||{})];return s&&(s.hovered&&(u=[...u,...Object.keys(s.hovered)]),s.tapped&&(u=[...u,...Object.keys(s.tapped)]),s.focused&&(u=[...u,...Object.keys(s.focused)])),u}),l=ce(()=>{const u={};Object.assign(u,t.value),a.value&&s.hovered&&Object.assign(u,s.hovered),o.value&&s.tapped&&Object.assign(u,s.tapped),i.value&&s.focused&&Object.assign(u,s.focused);for(const f in u)c.value.includes(f)||delete u[f];return u});s.hovered&&(A(e,"mouseenter",()=>a.value=!0),A(e,"mouseleave",()=>{a.value=!1,o.value=!1})),s.tapped&&(Ir()&&(A(e,"mousedown",()=>o.value=!0),A(e,"mouseup",()=>o.value=!1)),Vr()&&(A(e,"pointerdown",()=>o.value=!0),A(e,"pointerup",()=>o.value=!1)),Pr()&&(A(e,"touchstart",()=>o.value=!0),A(e,"touchend",()=>o.value=!1))),s.focused&&(A(e,"focus",()=>i.value=!0),A(e,"blur",()=>i.value=!1)),S([a,o,i],()=>{r(l.value)})}function Lr({set:e,target:t,variants:n,variant:r}){const s=_(n);S(()=>t,()=>{s&&(s.initial&&(e("initial"),r.value="initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function Ur({state:e,apply:t}){S(e,n=>{n&&t(n)},{immediate:!0})}function $r({target:e,variants:t,variant:n}){const r=_(t);r&&(r.visible||r.visibleOnce)&&Pt(e,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function zr(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&Lr(e),t.syncVariants&&Ur(e),t.visibilityHooks&&$r(e),t.eventListeners&&Br(e)}function Hr(e={}){const t=ve({...e}),n=k({});return S(t,()=>{const r={};for(const[s,a]of Object.entries(t)){const o=je(s),i=ye(a,o);r[s]=i}n.value=r},{immediate:!0,deep:!0}),{state:t,style:n}}function Re(e,t){S(()=>It(e),n=>{n&&t(n)},{immediate:!0})}const Wr={x:"translateX",y:"translateY",z:"translateZ"};function Yr(e={},t=!0){const n=ve({...e}),r=k("");return S(n,s=>{let a="",o=!1;if(t&&(s.x||s.y||s.z)){const i=[s.x||0,s.y||0,s.z||0].map(c=>ye(c,p)).join(",");a+=`translate3d(${i}) `,o=!0}for(const[i,c]of Object.entries(s)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const l=je(i),u=ye(c,l);a+=`${Wr[i]||i}(${u}) `}t&&!o&&(a+="translateZ(0px) "),r.value=a.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const Zr=["","X","Y","Z"],qr=["perspective","translate","scale","rotate","skew"],kt=["transformPerspective","x","y","z"];qr.forEach(e=>{Zr.forEach(t=>{const n=e+t;kt.push(n)})});const Kr=new Set(kt);function Rt(e){return Kr.has(e)}const Xr=new Set(["originX","originY","originZ"]);function Gr(e){return Xr.has(e)}function Qr(e,t){let n,r;const{state:s,style:a}=Hr();return Re(e,o=>{r=o;for(const i of Object.keys(jt))o.style[i]===null||o.style[i]===""||Rt(i)||Gr(i)||(s[i]=o.style[i]);n&&Object.entries(n).forEach(([i,c])=>o.style[i]=c),t&&t(s)}),S(a,o=>{if(!r){n=o;return}for(const i in o)r.style[i]=o[i]},{immediate:!0}),{style:s}}function Jr(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return t.reduce((r,s)=>{if(!s)return r;const[a,o]=s.split("("),c=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),l=c.length===1?c[0]:c;return{...r,[a]:l}},{})}function es(e,t){Object.entries(Jr(t)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(a=>e[a]=0);return}r.forEach((a,o)=>e[s[o]]=a);return}if(r=Number.parseFloat(`${r}`),n==="translateX"){e.x=r;return}if(n==="translateY"){e.y=r;return}if(n==="translateZ"){e.z=r;return}e[n]=r})}function ts(e,t){let n,r;const{state:s,transform:a}=Yr();return Re(e,o=>{r=o,o.style.transform&&es(s,o.style.transform),n&&(o.style.transform=n),t&&t(s)}),S(a,o=>{if(!r){n=o;return}r.style.transform=o},{immediate:!0}),{transform:s}}function ns(e,t){const n=ve({}),r=o=>Object.entries(o).forEach(([i,c])=>n[i]=c),{style:s}=Qr(e,r),{transform:a}=ts(e,r);return S(n,o=>{Object.entries(o).forEach(([i,c])=>{const l=Rt(i)?a:s;l[i]&&l[i]===c||(l[i]=c)})},{immediate:!0,deep:!0}),Re(e,()=>t),{motionProperties:n,style:s,transform:a}}function rs(e={}){const t=_(e),n=k();return{state:ce(()=>{if(n.value)return t[n.value]}),variant:n}}function ss(e,t={},n){const{motionProperties:r}=ns(e),{variant:s,state:a}=rs(t),o=Nr(r,t),i={target:e,variant:s,variants:t,state:a,motionProperties:r,...o};return zr(i,n),i}const os=Yt(`<svg class="scale-70" xmlns="http://www.w3.org/2000/svg" direction="ltr" width="499" height="50" viewBox="218.68555961942593 1803.897813546187 499 66" stroke-linecap="round" stroke-linejoin="round" data-v-e77ffca8><defs data-v-e77ffca8></defs><g transform="matrix(1, 0, 0, 1, 257.6856, 1829.8978)" opacity="1" data-v-e77ffca8><g data-v-e77ffca8><defs data-v-e77ffca8><mask id="shape_dYkvQ8frqn9u5bShF4X_U_clip" data-v-e77ffca8><rect x="-107" y="-94" width="635" height="202" fill="white" data-v-e77ffca8></rect><path d="M -7.000142685014907,7.937931690505816
  a 13.5,13.5 0 1,0 27,0
  a 13.5,13.5 0 1,0 -27,0 " fill="black" stroke="none" data-v-e77ffca8></path><path d="M 401.0001426850149,6.062068309494184
  a 13.5,13.5 0 1,0 27,0
  a 13.5,13.5 0 1,0 -27,0 " fill="black" stroke="none" data-v-e77ffca8></path></mask></defs><g mask="url(#shape_dYkvQ8frqn9u5bShF4X_U_clip)" data-v-e77ffca8><rect x="-100" y="-100" width="635" height="202" fill="transparent" stroke="none" data-v-e77ffca8></rect><path d="M-7,8L428,6" fill="none" stroke="currentColor" stroke-width="10" stroke-dasharray="none" stroke-dashoffset="none" data-v-e77ffca8></path></g><path d="M -7.000142685014907,7.937931690505816
  a 13.5,13.5 0 1,0 27,0
  a 13.5,13.5 0 1,0 -27,0 " fill="none" stroke="currentColor" stroke-width="10" data-v-e77ffca8></path><path d="M 401.0001426850149,6.062068309494184
  a 13.5,13.5 0 1,0 27,0
  a 13.5,13.5 0 1,0 -27,0 " fill="none" stroke="currentColor" stroke-width="10" data-v-e77ffca8></path></g></g></svg>`,1),as={class:"absolute left-[72px] top-[52px] select-none text-4xl font-extrabold"},is=qe({__name:"WaveMotion",props:{initialPosition:{default:()=>({x:Math.random()*(window.innerWidth-400),y:Math.random()*(window.innerHeight-160)})}},setup(e){const t=e,n=k(),{apply:r}=ss(n,{initial:{rotate:0},enter:{rotate:0}});async function s(h){await r({rotate:h})}const{x:a,style:o,isDragging:i}=Lt(n,{initialValue:t.initialPosition});let c=0;S(i,async()=>{i.value||(s(0),c=0)});let l=a.value,u=performance.now();const f={maxVelocity:10,maxRotation:60,rotationFactor:.8};S(a,()=>{const{velocity:h,newX:b,newTime:T}=m(l,a.value,u),{maxVelocity:v,maxRotation:x,rotationFactor:y}=f;c=-(h/v*x*y),s(c),l=b,u=T});function m(h,b,T,v=performance.now()){const x=b-h,y=v-T;return{velocity:x/y,newTime:v,newX:b}}return(h,b)=>(le(),Ut("div",{ref_key:"target",ref:n,class:Ht([_(i)?"":"element","pointer-events-auto fixed z-999 grid cursor-pointer touch-none select-none place-items-center rounded-[6px]"]),style:Wt(_(o))},[os,L("span",as,$t(_(c).toFixed(2)),1),zt(h.$slots,"default",{},void 0,!0)],6))}}),cs=Zt(is,[["__scopeId","data-v-e77ffca8"]]),ls="/stickers/Tesla.png",us=L("span",{class:"pointer-events-auto mr-[35px] w-[100px] cursor-pointer text-3xl font-extrabold underline underline-transparent underline-offset-4 underline-dashed transition-all duration-300 ease-in-out hover:underline-[--text-color]"}," Wave drag ",-1),fs={class:"pointer-events-none fixed inset-0 left-0 top-0 z-99 h-full w-full"},ps=L("img",{class:"pointer-events-none h-auto max-w-[300px] select-none !w-[300px]",src:ls},null,-1),bs=qe({__name:"DragMotion",setup(e){const t=k(!1);return(n,r)=>{const s=cs,a=Nt;return le(),Ee(a,{class:"!p-[5px]"},{default:Fe(()=>[L("div",{class:"h-full w-full flex flex-col items-center justify-center gap-6 pr-4 text-[--text-color]",onClick:r[0]||(r[0]=o=>t.value=!_(t))},[us,De(_(Qt),{icon:"fluent-emoji:taxi",class:"pointer-events-auto ml-auto cursor-pointer border-b-2 border-transparent border-dashed text-3xl transition-all duration-300 ease-in-out hover:border-[--text-color]"})]),_(t)?(le(),Ee(qt,{key:0,to:"body"},[L("div",fs,[Kt(De(s,{onDblclick:r[1]||(r[1]=o=>t.value=!1)},{default:Fe(()=>[ps]),_:1},512),[[Xt,_(t)]])])])):Gt("",!0)]),_:1})}}});export{bs as default};
