import{r as v,w as B,u as y,o as j,a as C,t as N,d as k,b as D,c as h,e as I,f as z,g,h as b,i as o,j as m,_ as w,k as l,l as S,m as L,n as M,p as R,q as E,s as P,v as V,x as q}from"./app-e0966538.js";function A(n){const i=v({});function t(s){if(!s)return;const d=s.style,_=window.getComputedStyle(s),{getStyle:u}=F({style:d,computedStyle:_}),r=u("display"),p=u("visibility"),a=u("position");r==="none"?(s.style.display="unset",s.style.visibility="hidden",s.style.position="absolute",i.value=T(window.getComputedStyle(s)),s.style.position=a,s.style.visibility=p,s.style.display=r):i.value=T(window.getComputedStyle(s))}B(()=>y(n),s=>{t(s)});let e,c;return j(()=>{e=C(window,"resize",()=>{t(y(n))}),c=C(window,"orientationchange",()=>{t(y(n))})}),N(()=>{e(),c()}),{style:i}}function T(n){const i={},t=n.length;for(let e=0;e<t;e++){const c=n[e],s=n.getPropertyValue(c);i[c]=s}return i}function F(n){const{style:i={},computedStyle:t={}}=n||{};return{getStyle(e){return i[e]||t[e]||""}}}const H={class:"name relative w-fit leading-none text-default transition dark-text-darkdefault"},G=k({__name:"Typewriter",props:{name:{default:"科科Cole"},duration:{default:400},cursorDuration:{default:1500}},emits:["loaded"],setup(n,{emit:i}){const t=n;D(a=>({"9d84cb8e":h(u)}));const{name:e,cursorDuration:c,duration:s}=I(t),d=v(),{style:_}=A(d);B(_,a=>{a&&i("loaded",a)});const u=z(()=>r.value.length<e.value.length?"0":`${c.value/1e3}s`);let r=v([]);function p(){r.value=[];const a=e.value.split("");let f;function x(){r.value.push(a.shift())}f=window.setInterval(()=>{a.length>0?x():(clearInterval(f),f=void 0)},s.value)}return j(()=>{p()}),(a,f)=>(g(),b("div",null,[o("div",{ref_key:"hiddenName",ref:d,class:"name relative hidden w-fit leading-none text-default transition dark-text-darkdefault"},m(h(e)),513),o("div",H,m(h(r).join("")),1)]))}});const O=w(G,[["__scopeId","data-v-ccf53220"]]),J="/avatar.webp",K={},Q={class:"flex flex-col flex-gap-4"},U={class:"flex flex-gap-2"},W=o("img",{class:"h-20 w-20 select-none rounded-999",draggable:"false",src:J,alt:"avatar"},null,-1),X={class:"flex flex-col justify-center"},Y={class:"flex flex-gap-3"},Z=o("div",{class:"h-5.5 w-5.5 flex items-center justify-center text-4.5"}," 简 ",-1);function ee(n,i){const t=O,e=L;return g(),b("div",Q,[o("div",U,[W,o("div",X,[l(t,{"data-blobity":"true","data-blobity-magnetic":"true",class:"p-2 text-7.5"})])]),o("div",Y,[l(e,{href:"https://blog.keke.cc/",title:"Posts",icon:"i-ri:bill-line",show:"auto"}),l(e,{href:"https://github.com/Bernankez",title:"GitHub",icon:"i-ri:github-line",show:"auto"}),l(e,{icon:"i-ri:bilibili-fill",title:"Bilibili",href:"https://space.bilibili.com/32431375",show:"auto"}),l(e,{href:"https://www.jianshu.com/u/97ce768c5437",title:"简书",show:"auto"},{default:S(()=>[Z]),_:1})])])}const te=w(K,[["render",ee]]),se={class:"w-full flex flex-col flex-gap-1"},ie={class:"text-5"},ne={class:"text-3.5"},oe=k({__name:"Tagi",props:{title:{default:""},desc:{default:""},icon:{default:""},href:{default:""},to:{default:""},target:{default:"_blank"}},setup(n){const i=n,t=z(()=>i.href?i.target:"");return(e,c)=>{const s=M("RouterLink");return g(),R(s,{to:e.to,class:"block flex select-none items-center flex-gap-3 p-2 text-dark-500 dark:text-darkdefault",href:e.href,target:h(t)},{default:S(()=>[o("div",{class:E([e.icon,"text-9"])},null,2),o("div",se,[o("div",ie,[P(e.$slots,"default",{},()=>[V(m(e.title),1)])]),o("div",ne,m(e.desc),1)])]),_:3},8,["to","href","target"])}}}),ae={},le={class:"text-7"},ce={class:"grid grid-cols-1 m-t-2 grid-gap-2 md:grid-cols-2"},re=o("img",{class:"h-12 object-scale-down",src:"https://badge.keke.cc/api/keke.cc/bernankez",alt:"visitor badge"},null,-1);function de(n,i){const t=oe;return g(),b("div",le,[V(" Projects "),o("div",ce,[l(t,{title:"Bilibili Fans Card",icon:"i-ri:bilibili-fill",desc:"A tool making bilibili fans card.",href:"https://bilibili-fans.keke.cc/"}),l(t,{title:"Bilibili SuperChat",icon:"i-ri:bilibili-fill",desc:"Generate custom SuperChat image.",href:"https://sc.keke.cc/"}),l(t,{icon:"i-mdi:counter",desc:"Custom Visitor Badge.",href:"https://github.com/Bernankez/visitor-badge"},{default:S(()=>[re]),_:1}),l(t,{title:"Snippets",icon:"i-mdi:vector-intersection",desc:"Just snippets.",href:"https://snippets.keke.cc/"}),l(t,{title:"create-l",icon:"i-gridicons:create",desc:"TypeScript library scaffold.",href:"https://github.com/Bernankez/create-l"})])])}const ue=w(ae,[["render",de]]);function fe(n,i){const{interval:t=50,autoRun:e=!0,textIteration:c=7}=i||{},s="斅兝谲萿祧劝峅夬殡繦够夐氍兯吷葾隼两冴绘鷘志婾兠峫夑环婥峆吚塖鎱";let d=0,_=0;const u=v("");function r(){let p=0;const a=q(n);function f(x=!1){if(!x&&(_=performance.now()-d,_<t)){requestAnimationFrame(()=>f());return}d=performance.now(),u.value=a.split("").map((ve,$)=>$<p?a[$]:s[Math.floor(Math.random()*s.length)]).join(""),p+=1/c,p<a.length&&requestAnimationFrame(()=>f())}d=performance.now(),f(!0)}return e&&r(),{run:r,hackedText:u}}const pe={class:"relative"},_e={class:"h-full w-full flex items-center justify-center"},he={class:"box-border h-full max-w-200 w-full flex flex-col flex-gap-4 p-x-10 p-b-10"},me={class:"absolute bottom-0 h-10 w-full text-center vertical-middle"},ge={class:"text-3.5 tracking-3 text-disabled-dark md:tracking-7"},xe=k({__name:"index",setup(n){const i=["什么也不会，喜欢睡觉"],t=Math.floor(Math.random()*i.length),{hackedText:e}=fe(i[t]);return(c,s)=>(g(),b("div",pe,[o("div",_e,[o("div",he,[l(te),l(ue)])]),o("div",me,[o("span",ge,"/"+m(h(e))+"/",1)])]))}});export{xe as default};
