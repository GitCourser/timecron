import{Y as V,a2 as $,r as _,c as S,a as t,I as j,o as h,h as s,b as e,k as c,j as r,u as d,J as y,a3 as C,M as f,O as x,g as w,i as B,F as M,p as N,a4 as O,a5 as E,a6 as F}from"./index.62c2fd96.js";import{_ as b}from"./FormField.28284586.js";import{_ as z}from"./CardBoxModal.413b2fd1.js";import{_ as A}from"./LayoutGuest.ea174eae.js";function D(m,a){const i=m.split(".").join(""),o=a.split(".").join("");return i<o?!0:(i>o,!1)}const I={class:"text-blue-500 mr-5"},J={class:"text-blue-500 mr-5"},L=e("div",null,[c(" \u8BF7\u524D\u5F80\u5B98\u7F51\u4E0B\u8F7D\u66F4\u65B0: "),e("a",{href:"http://cron.navjs.cn",target:"_blank",class:"text-blue-500 mr-5",style:{"text-decoration":"revert"}},"http://cron.navjs.cn")],-1),T={class:"flex items-center justify-center"},U={class:"grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 max-w-6xl mx-auto"},Y={class:"mb-3 md:mb-6"},q=["src"],G={class:"text-xl md:text-2xl font-black capitalize"},H={class:"text-blue-500 mr-5"},X={__name:"SettingView",setup(m){const a=V(),i=["white","basic"],o=$(),g=l=>{o.setStyle(l)},v=_(""),u=_(!1);_(0);function k(){O(a.version).then(l=>{if(!l.version){E("\u7248\u672C\u4FE1\u606F\u83B7\u53D6\u5931\u8D25");return}D(a.version,l.version)?(v.value=l.version,u.value=!0):F("\u5F53\u524D\u4E3A\u6700\u65B0\u7248\u672C!")})}return(l,p)=>(h(),S(j,null,{default:t(()=>[s(x,null,{default:t(()=>[s(z,{modelValue:u.value,"onUpdate:modelValue":p[0]||(p[0]=n=>u.value=n),title:"\u6709\u65B0\u7248\u672C\u66F4\u65B0"},{default:t(()=>[e("div",null,[c(" \u5F53\u524D\u7248\u672C: "),e("span",I,r(d(a).version),1)]),e("div",null,[c(" \u6700\u65B0\u7248\u672C: "),e("span",J,r(v.value),1)]),L]),_:1},8,["modelValue"]),s(y,{icon:d(C),title:"\u7CFB\u7EDF\u914D\u7F6E",main:""},null,8,["icon"]),s(f,{class:"mb-5"},{default:t(()=>[s(b,{label:"\u9009\u62E9\u4E3B\u9898"},{default:t(()=>[s(A,null,{default:t(()=>[e("div",T,[s(x,null,{default:t(()=>[e("div",U,[(h(),w(M,null,B(i,n=>s(f,{key:n,class:"cursor-pointer bg-gray-50","is-hoverable":"",onClick:K=>g(n)},{default:t(()=>[e("div",Y,[e("img",{src:`image/${n}.png`,width:"1280",height:"720"},null,8,q)]),e("h1",G,r(n),1)]),_:2},1032,["onClick"])),64))])]),_:1})])]),_:1})]),_:1})]),_:1}),s(f,{class:"mb-5"},{default:t(()=>[s(b,{label:"\u7248\u672C\u66F4\u65B0"},{default:t(()=>[e("div",null,[c(" \u5F53\u524D\u7248\u672C: "),e("span",H,r(d(a).version),1)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{X as default};
