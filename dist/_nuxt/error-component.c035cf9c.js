import{u as c,o as s,c as l,a as t,b as n,d as i,e as d}from"./entry.be366060.js";const u=""+globalThis.__publicAssetsURL("images/components/illustration.svg"),g={class:"bg-neutral-100 dark:bg-neutral"},m=t("p",{class:"text-sm font-medium text-blue-500 dark:text-blue-400"},"404 error",-1),_=t("h1",{class:"mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"},"Page not found",-1),x=t("p",{class:"mt-4 text-gray-500 dark:text-gray-400"},"Sorry, the page you are looking for doesn't exist.Here are some helpful links:",-1),h=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})],-1),p=t("span",null,"Go back",-1),k=[h,p],b=t("div",{class:"relative w-full mt-12 lg:w-1/2 lg:mt-0"},[t("img",{class:"w-full max-w-lg lg:mx-auto",src:u,alt:""})],-1),w={__name:"NotFound",setup(r){const e=c(),a=()=>{n({}),e.go(-1)},o=()=>{n({}),e.push("/")};return(y,v)=>(s(),l("div",g,[t("div",{class:"container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12"},[t("div",{class:"wf-ull lg:w-1/2"},[m,_,x,t("div",{class:"flex items-center mt-6 gap-x-3"},[t("button",{onClick:a,class:"flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"},k),t("button",{onClick:o,class:"w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"}," Take me home ")])]),b])]))}},f={__name:"error",props:["error"],setup(r){return(e,a)=>{const o=w;return s(),l("div",null,[r.error.statusCode?(s(),i(o,{key:0})):d("",!0)])}}},C=f;export{C as default};
