_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2ZPU":function(e,t,n){e.exports={topCategoryCard:"TopTagCard_topCategoryCard__2kwlu",postLink:"TopTagCard_postLink__15Cc2"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return P}));var r=n("nKUr"),i=n("rePB"),a=n("Ff2n"),s=n("1Xi/"),c=n("8bSP"),o=n("KoNA"),l=n("k9GE"),j=n("g4pe"),p=n.n(j),f=n("7vrA"),m=n("6xyR"),b=n("3Z9Z"),u=n("JI6e"),d=n("65eO"),O=n("2ZPU"),h=n.n(O),x=n("YFqc"),g=n.n(x),y=function(e){var t=e.categoryName,n=e.posts,i=e.countPosts;return Object(r.jsx)(m.a,{style:{flexBasis:"30%"},className:[h.a.topCategoryCard,"text-light","mt-3"].join(" "),children:Object(r.jsxs)(m.a.Body,{children:[Object(r.jsx)(m.a.Title,{className:" border-bottom pb-4",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(u.a,{children:Object(r.jsx)("p",{className:"text-capitalize mb-0",children:t})}),Object(r.jsx)(u.a,{className:"d-flex justify-content-end",children:Object(r.jsxs)(d.a,{variant:"light",children:["count: ",i]})})]})}),Object(r.jsx)("div",{className:"d-flex flex-column",children:n.map((function(e){return Object(r.jsx)("p",{className:["border-bottom","pb-3"].join(" "),children:Object(r.jsx)(g.a,{href:"/".concat(e.filename),children:Object(r.jsx)("a",{className:h.a.postLink,children:e.title})})},e.filename)}))})]})})},v={js:[{filename:"newtest",title:"Test Sample"},{filename:"testsample1",title:"Test Sample"},{filename:"testsample2 copy",title:"Test Sample 2"}],"test new post":[{filename:"newtest",title:"Test Sample"}],"c++":[{filename:"newtest",title:"Test Sample"}],test1:[{filename:"testsample1",title:"Test Sample"}],python:[{filename:"testsample1",title:"Test Sample"}],"test copia":[{filename:"testsample2 copy",title:"Test Sample 2"}]},N=n("q1tI");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var P=!0;t.default=function(e){var t=e.recentContent,n=e.tags,i=Object(N.useState)(),j=i[0],m=i[1];Object(N.useEffect)((function(){m(JSON.parse(localStorage.getItem("favorites")))}),[]);var b=function(e,t,n){if("delete"===e)!function(e){j[e];var t=Object(a.a)(j,[e].map(_));m(t),localStorage.setItem("favorites",JSON.stringify(t))}(t);else if("add"===e){var r=w({},j);r[t]=w({},n),m(r),localStorage.setItem("favorites",JSON.stringify(r))}};return Object(r.jsxs)("div",{children:[Object(r.jsx)(p.a,{children:Object(r.jsx)("title",{children:"Code Sampler"})}),Object(r.jsx)(s.a,{}),Object(r.jsx)(c.a,{}),Object(r.jsxs)(f.a,{fluid:!0,className:"mt-3 mb-3",children:[Object(r.jsx)("h2",{children:"Recent content"}),Object(r.jsx)(l.a,{className:"{mt-5}",children:t.map((function(e){return Object(r.jsx)(o.a,{filename:e.id,title:e.title,description:e.description,tags:e.tags,onClickFavorite:b,favorite:j&&j[e.id]},e.id)}))})]}),Object(r.jsxs)(f.a,{fluid:!0,children:[Object(r.jsx)("h2",{children:"Top Tags"}),Object(r.jsx)(l.a,{children:n.map((function(e){return Object(r.jsx)(y,{categoryName:e,posts:v[e].slice(0,5),countPosts:v[e].length},e)}))})]})]})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);