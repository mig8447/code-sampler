_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{IWsD:function(e,t,n){e.exports={container:"search_container__1hhD6",search:"search_search__3j3U3",results:"search_results__3LKiv",result:"search_result__Ccsv1"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return l}));var r=n("nKUr"),c=n("YFqc"),a=n.n(c),o=n("q1tI"),s=n("IWsD"),u=n.n(s);function i(){var e=Object(o.useRef)(null),t=Object(o.useState)(""),n=t[0],c=t[1],s=Object(o.useState)(!1),i=s[0],l=s[1],f=Object(o.useState)([]),d=f[0],v=f[1],h=Object(o.useCallback)((function(e){var t=e.target.value;c(t),t.length?fetch(function(e){return"/api/search?q=".concat(e)}(t)).then((function(e){return e.json()})).then((function(e){v(e.results)})):v([])}),[]),p=Object(o.useCallback)((function(){l(!0),window.addEventListener("click",b)}),[]),b=Object(o.useCallback)((function(t){e.current&&!e.current.contains(t.target)&&(l(!1),window.removeEventListener("click",b))}),[]);return Object(r.jsxs)("div",{className:u.a.container,ref:e,children:[Object(r.jsx)("input",{className:u.a.search,onChange:h,onFocus:p,placeholder:"Search posts",type:"text",value:n}),i&&d.length>0&&Object(r.jsx)("ul",{className:u.a.results,children:d.map((function(e){var t=e.id,n=e.title;return Object(r.jsx)("li",{className:u.a.result,children:Object(r.jsx)(a.a,{href:"/[id]",as:"/".concat(t),children:Object(r.jsx)("a",{children:n})})},t)}))})]})}var l=!0;t.default=function(e){var t=e.slugs;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Hello World"}),Object(r.jsx)(i,{}),t.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{href:"/"+e,children:Object(r.jsx)("a",{children:"/"+e})})},e)}))]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),o=n("elyg"),s=n("nOHt"),u=n("vNVm"),i={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,o.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,o.resolveHref)(c,e.as):s||a}}),[c,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,b=e.shallow,j=e.scroll,_=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var O=a.Children.only(h),g=O&&"object"===typeof O&&O.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),w=r(m,2),y=w[0],x=w[1],E=a.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,a.useEffect)((function(){var e=x&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof _?_:n&&n.locale,c=i[d+"%"+v+(r?"%"+r:"")];e&&!c&&l(n,d,v,{locale:r})}),[v,d,x,_,t,n]);var L={ref:E,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:u,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,d,v,p,b,j,_)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(n,d,v,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var N="undefined"!==typeof _?_:n&&n.locale,k=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(v,N,n&&n.locales,n&&n.domainLocales);L.href=k||(0,o.addBasePath)((0,o.addLocale)(v,N,n&&n.defaultLocale))}return a.default.cloneElement(O,L)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,u=(0,c.useRef)(),i=(0,c.useState)(!1),l=r(i,2),f=l[0],d=l[1],v=(0,c.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!o&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[v,f]};var c=n("q1tI"),a=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var s=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);