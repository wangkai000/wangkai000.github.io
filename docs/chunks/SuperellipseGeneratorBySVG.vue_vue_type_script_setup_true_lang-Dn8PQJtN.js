import{d as t,s as a,aA as s,v as e,o as n,c as h,e as o,f as r}from"../assets/app-CmWGNqqr.js";const i=["viewBox"],l=["d"],c=t({__name:"SuperellipseGeneratorBySVG",async setup(t){let c,u;const w=a("");w.value=([c,u]=s((()=>async function(t=50,a=50,s=4,e=4,n=360){const h=2/s,o=2/e;return`${(await Array.from({length:n},((s,e)=>{const r=2*e*Math.PI/n,i=Math.cos(r),l=Math.sin(r);return{x:Math.abs(i)**h*t*Math.sign(i),y:Math.abs(l)**o*a*Math.sign(l)}}))).map(((t,a)=>`${0===a?"M":"L"} ${t.x} ${t.y}`)).join(" ")} Z`}())),c=await c,u(),c);const g=a(null),p=a({x:0,y:0,width:200,height:200});return e((()=>{const t=g.value.getBBox();p.value={x:t.x,y:t.y,width:t.width,height:t.height}})),(t,a)=>(n(),h("svg",{viewBox:`${r(p).x} ${r(p).y} ${r(p).width} ${r(p).height}`,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[o("path",{ref_key:"$path",ref:g,d:r(w),fill:"currentColor"},null,8,l)],8,i))}});export{c as _};
