var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,r=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,n=(e,n)=>{for(var o in n||(n={}))t.call(n,o)&&r(e,o,n[o]);if(s)for(var o of s(n))a.call(n,o)&&r(e,o,n[o]);return e};import{r as o,o as c,c as l,d as u,a as i,t as d,F as p,b as h,e as m,w as f,u as v,f as g,g as w,p as b,h as y,i as L,j as O,k as x}from"./vendor.e66f27de.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,n)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return s(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){n(new Error(`Failed to import: ${e}`)),r(l)},onload(){s(self[t].moduleMap[o]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/beta/assets/");const U={};U.render=function(e,t){const s=o("router-view");return c(),l(s)};const E={};E.render=function(e,t){return" main page of YaSaas "};var C,S;(S=C||(C={})).SLACK="SLACK",S.GOOGLE_DRIVE="GOOGLE_DRIVE",S.CONFLUENCE_CLOUD="CONFLUENCE_CLOUD";var R=u({props:["data"],setup:()=>({getLogoSvg:function(e){switch(e){case C.SLACK:return"/beta/assets/slack.1c20bb4d.svg";case C.GOOGLE_DRIVE:return"/beta/assets/google.144fb3cc.svg";case C.CONFLUENCE_CLOUD:return"/beta/assets/confluence.0ce8d1c8.svg";default:throw new Error(`unknown link type ${e}`)}}})});const j={class:"grid grid-cols-3 gap-4 p-4 border-2 border-gray-100 rounded hover:shadow-md"},k={class:"col-span-1 flex"},I={class:"col-span-2"},V={class:"text-gray-400 text-sm"},_={class:"text-lg extrabold mb-2"},D={class:"text-sm"};R.render=function(e,t,s,a,r,n){return c(),l("div",j,[i("div",k,[i("img",{src:e.getLogoSvg(e.data.source),alt:"slack logo"},null,8,["src"])]),i("div",I,[i("div",V,d(e.data.url),1),i("div",_,d(e.data.title),1),i("div",D,d(e.data.text),1)])])};var N=u({components:{"result-card":R},setup(){}});const P=i("div",{class:"my-8 text-center"},"Component demo page",-1),A={class:"flex justify-around"};N.render=function(e,t,s,a,r,n){const u=o("result-card");return c(),l(p,null,[P,i("div",A,[i(u,{class:"w-1/2"})])],64)};const F={headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},G=e=>async function(t,s={},a={}){const r=new URL(this.baseUrl),o=new URL(r.pathname+t,r);o.search=new URLSearchParams(s).toString();try{const t=await fetch(o.toString(),n(n(n({},this.defaultInit),a),{method:e}));if(t.ok)return await t.json();throw await t.text()}catch(c){throw c}},T=e=>async function(t,s,a={}){const r=new URL(this.baseUrl),o=new URL(r.pathname+t,r);try{const t=await fetch(o.toString(),n(n(n({},this.defaultInit),a),{method:e,body:JSON.stringify(s)}));return t.ok?await t.json():await t.text()}catch(c){throw c}};var $=new class extends class{constructor(e,t=F){this.baseUrl=e,this.defaultInit=t,this.get=G("GET"),this.delete=G("DELETE"),this.head=G("HEAD"),this.post=T("POST"),this.put=T("PUT"),this.patch=T("PATCH")}}{search(e){return this.get("/search",{q:e})}}("https://my-json-server.typicode.com/yasaas/fake-data-stub/",{}),q=u({name:"Search Bar",props:["modelValue"],setup:(e,{emit:t})=>({emitInput:function(e){t("update:modelValue",e.target.value)}})});const M={class:"flex w-full bg-blue-300 py-4 items-center"},K=i("span",{class:"w-1/12 text-white text-lg font-extrabold px-8"},"YaSaas",-1),B={class:"w-6/12"};q.render=function(e,t,s,a,r,n){return c(),l("div",M,[K,i("span",B,[i("input",{class:"w-full p-3 rounded-md sm:text-sm",placeholder:"e.g. google",value:e.modelValue,onInput:t[1]||(t[1]=(...t)=>e.emitInput&&e.emitInput(...t))},null,40,["value"])]),i("span",null,[i("button",{class:"ml-2 p-3 text-white hover:bg-blue-400 rounded-md",onClick:t[2]||(t[2]=t=>e.$emit("search"))},"Search")])])};var H=u({props:["results"],components:{"result-card":R}});const Y={key:0},J={key:1,class:"m-8 max-w-3xl place-items-center"};H.render=function(e,t,s,a,r,n){const u=o("result-card");return 0==e.results.length?(c(),l("div",Y," No Result Found ")):(c(),l("div",J,[(c(!0),l(p,null,h(e.results,(e=>(c(),l(u,{class:"m-8",key:e.title,data:e},null,8,["data"])))),128))]))};var z=u({components:{"search-bar":q,"results-container":H},setup(){const e=g(),t=v(),s=m([]),a=m(t.query.q);return f([a],(()=>{e.push({path:"/search",query:{q:a.value}})})),{searchValue:a,search:function(){$.search(a.value).then((e=>{s.value=e}))},searchResults:s}}});const Q=w();b("data-v-d3d8d484");const W={class:""};y();const X=Q(((e,t,s,a,r,n)=>{const u=o("search-bar"),d=o("results-container");return c(),l("div",W,[i(u,{modelValue:e.searchValue,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchValue=t),onSearch:e.search},null,8,["modelValue","onSearch"]),i(d,{results:e.searchResults},null,8,["results"])])}));z.render=X,z.__scopeId="data-v-d3d8d484";const Z=[{path:"/",component:E},{path:"/demo",component:N},{path:"/search",component:z}],ee=L({history:O(),routes:Z});x(U).use(ee).mount("#app");
