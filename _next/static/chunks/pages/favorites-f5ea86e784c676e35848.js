_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"07zo":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorites",function(){return r("fI/2")}])},"6xyR":function(e,t,r){"use strict";var n=r("RAs/"),a=r("hVfy"),c=r("TSYQ"),i=r.n(c),o=r("q1tI"),s=r.n(o),l=r("vUet"),u=r("YdCC"),f=r("U1MP"),d=s.a.createContext(null);d.displayName="CardContext";var b=d,v=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,o=e.variant,u=e.as,f=void 0===u?"img":u,d=Object(a.a)(e,["bsPrefix","className","variant","as"]),b=Object(l.a)(r,"card-img");return s.a.createElement(f,Object(n.a)({ref:t,className:i()(o?b+"-"+o:b,c)},d))}));v.displayName="CardImg",v.defaultProps={variant:null};var p=v,j=Object(f.a)("h5"),m=Object(f.a)("h6"),O=Object(u.a)("card-body"),h=Object(u.a)("card-title",{Component:j}),y=Object(u.a)("card-subtitle",{Component:m}),g=Object(u.a)("card-link",{Component:"a"}),x=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),k=Object(u.a)("card-footer"),w=Object(u.a)("card-img-overlay"),E=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,u=e.bg,f=e.text,d=e.border,v=e.body,p=e.children,j=e.as,m=void 0===j?"div":j,h=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(l.a)(r,"card"),g=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.a.createElement(b.Provider,{value:g},s.a.createElement(m,Object(n.a)({ref:t},h,{className:i()(c,y,u&&"bg-"+u,f&&"text-"+f,d&&"border-"+d)}),v?s.a.createElement(O,null,p):p))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=p,E.Title=h,E.Subtitle=y,E.Body=O,E.Link=g,E.Text=x,E.Header=N,E.Footer=k,E.ImgOverlay=w;t.a=E},KoNA:function(e,t,r){"use strict";var n=r("nKUr"),a=r("YFqc"),c=r.n(a),i=r("6xyR"),o=r("3Z9Z"),s=r("JI6e"),l=r("/KrU");t.a=function(e){var t=e.title,r=e.description,a=e.tags,u=e.filename,f=e.favorite,d=e.onClickFavorite,b=f?"fa fa-bookmark fa-sm fa-2x text-warning":"fa fa-bookmark-o fa-sm fa-2x",v=f?"delete":"add";return Object(n.jsx)(i.a,{style:{backgroundColor:"#dae2ef",flexBasis:"30%"},children:Object(n.jsxs)(i.a.Body,{children:[Object(n.jsx)(i.a.Title,{className:"text-capitalize",children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(s.a,{children:Object(n.jsx)(c.a,{href:"/".concat(u),children:t})}),Object(n.jsx)(s.a,{className:["d-flex","justify-content-end"].join(" "),children:Object(n.jsx)("button",{onClick:function(){return d(v,u,{title:t,description:r,tags:a})},style:{backgroundColor:"transparent"},className:"border-0",children:Object(n.jsx)("span",{className:b,"aria-hidden":"true"})})})]})}),Object(n.jsx)(l.a,{tags:a}),Object(n.jsx)(i.a.Text,{children:r})]})})}},Qg85:function(e,t,r){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),null)}},U1MP:function(e,t,r){"use strict";var n=r("RAs/"),a=r("q1tI"),c=r.n(a),i=r("TSYQ"),o=r.n(i);t.a=function(e){return c.a.forwardRef((function(t,r){return c.a.createElement("div",Object(n.a)({},t,{ref:r,className:o()(t.className,e)}))}))}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var c=a(r("q1tI")),i=r("elyg"),o=r("nOHt"),s=r("vNVm"),l={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,o.useRouter)(),a=r&&r.pathname||"/",f=c.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),c=r[0],o=r[1];return{href:c,as:e.as?(0,i.resolveHref)(a,e.as):o||c}}),[a,e.href,e.as]),d=f.href,b=f.as,v=e.children,p=e.replace,j=e.shallow,m=e.scroll,O=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var h=c.Children.only(v),y=h&&"object"===typeof h&&h.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),x=n(g,2),N=x[0],k=x[1],w=c.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);(0,c.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof O?O:r&&r.locale,a=l[d+"%"+b+(n?"%"+n:"")];e&&!a&&u(r,d,b,{locale:n})}),[b,d,k,O,t,r]);var E={ref:w,onClick:function(e){h.props&&"function"===typeof h.props.onClick&&h.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,c,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:c,locale:s,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,r,d,b,p,j,m,O)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(h.props&&"function"===typeof h.props.onMouseEnter&&h.props.onMouseEnter(e),u(r,d,b,{priority:!0}))}};if(e.passHref||"a"===h.type&&!("href"in h.props)){var P="undefined"!==typeof O?O:r&&r.locale,C=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(b,P,r&&r.locales,r&&r.domainLocales);E.href=C||(0,i.addBasePath)((0,i.addLocale)(b,P,r&&r.defaultLocale))}return c.default.cloneElement(h,E)};t.default=f},dbZe:function(e,t,r){"use strict";var n=r("RAs/"),a=r("hVfy"),c=r("q1tI"),i=r.n(c),o=r("Qg85");function s(e){return!e||"#"===e.trim()}var l=i.a.forwardRef((function(e,t){var r=e.as,c=void 0===r?"a":r,l=e.disabled,u=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,r=f.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():r&&r(e)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(c,Object(n.a)({ref:t},f,{onClick:d,onKeyDown:Object(o.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},"fI/2":function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("rePB"),c=r("KQm4"),i=r("Ff2n"),o=r("hGi/"),s=r("g4pe"),l=r.n(s),u=r("KoNA"),f=r("q1tI"),d=r("k9GE"),b=r("Yr8A"),v=r("7vrA"),p=r("3Z9Z"),j=r("zhAr");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}t.default=function(e){Object(o.a)(e);var t=function(e){var t=I+e;t>=0&&t<E&&S(t)},r=Object(f.useState)([]),a=r[0],s=r[1],m=function(e){var t=a,r=[].concat(Object(c.a)(t),[e]);s(r)},y=function(e,r,n){if("delete"===e){!function(e){N[e];var t=Object(i.a)(N,[e].map(h));k(t),localStorage.setItem("favorites",JSON.stringify(t))}(r);var a=Math.ceil(Object.keys(N).length/g);P(a-1),I===a-1&&t(-1),m("Bookmark removed succesfully!")}else if("add"===e){var c=O({},N);c[r]=O({},n),k(c),localStorage.setItem("favorites",JSON.stringify(c)),m("Bookmark added succesfully!")}},g=2,x=Object(f.useState)({}),N=x[0],k=x[1],w=Object(f.useState)(1),E=w[0],P=w[1],C=Object(f.useState)(0),I=C[0],S=C[1];return Object(f.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"))||{};k(e),P(Math.ceil(Object.keys(e).length/g))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{children:Object(n.jsx)("title",{children:"Favorites"})}),Object(n.jsx)("h4",{className:"mt-3",children:"Bookmarks"}),Object(n.jsxs)(v.a,{fluid:!0,children:[Object(n.jsx)(d.a,{children:Object.keys(N).length>0?Object.keys(N).slice(I*g,I*g+g).map((function(e){return Object(n.jsx)(u.a,{filename:e,title:N[e].title,description:N[e].description,tags:N[e].tags,onClickFavorite:y,favorite:N&&N[e]},e)})):Object(n.jsx)("p",{className:"text-white",children:"You don't have any bookmarks yet  :'("})}),E&&E>1?Object(n.jsx)(p.a,{className:"d-flex justify-content-center ",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(j.a.Prev,{onClick:function(){return t(-1)}}),Object(n.jsx)(j.a.Item,{disabled:!0,children:I+1}),Object(n.jsx)(j.a.Next,{onClick:function(){return t(1)}})]})}):""]}),Object(n.jsx)("div",{style:{position:"fixed",bottom:"2%",left:"2%"},children:a?a.map((function(e,t){return Object(n.jsx)(b.a,{description:e},t)})):""})]})}},"hGi/":function(e,t,r){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}r.d(t,"a",(function(){return n}))},k9GE:function(e,t,r){"use strict";var n=r("nKUr"),a=r("7vrA"),c=r("mg4P"),i=r.n(c);t.a=function(e){var t=e.children,r=e.style;return Object(n.jsx)(a.a,{style:r,className:i.a.recentCards,fluid:!0,children:t})}},mg4P:function(e,t,r){e.exports={recentCards:"ContentCards_recentCards__2r_fB"}},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=(0,a.useRef)(),l=(0,a.useState)(!1),u=n(l,2),f=u[0],d=u[1],b=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=o.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return o.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,c=n.observer,i=n.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[b,f]};var a=r("q1tI"),c=r("0G5g"),i="undefined"!==typeof IntersectionObserver;var o=new Map},zhAr:function(e,t,r){"use strict";var n=r("RAs/"),a=r("hVfy"),c=r("TSYQ"),i=r.n(c),o=r("q1tI"),s=r.n(o),l=r("vUet"),u=r("dbZe"),f=s.a.forwardRef((function(e,t){var r=e.active,c=e.disabled,o=e.className,l=e.style,f=e.activeLabel,d=e.children,b=Object(a.a)(e,["active","disabled","className","style","activeLabel","children"]),v=r||c?"span":u.a;return s.a.createElement("li",{ref:t,style:l,className:i()(o,"page-item",{active:r,disabled:c})},s.a.createElement(v,Object(n.a)({className:"page-link",disabled:c},b),d,r&&f&&s.a.createElement("span",{className:"sr-only"},f)))}));f.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},f.displayName="PageItem";var d=f;function b(e,t,r){function n(e){var n=e.children,c=Object(a.a)(e,["children"]);return s.a.createElement(f,c,s.a.createElement("span",{"aria-hidden":"true"},n||t),s.a.createElement("span",{className:"sr-only"},r))}return void 0===r&&(r=e),n.displayName=e,n}var v=b("First","\xab"),p=b("Prev","\u2039","Previous"),j=b("Ellipsis","\u2026","More"),m=b("Next","\u203a"),O=b("Last","\xbb"),h=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,o=e.children,u=e.size,f=Object(a.a)(e,["bsPrefix","className","children","size"]),d=Object(l.a)(r,"pagination");return s.a.createElement("ul",Object(n.a)({ref:t},f,{className:i()(c,d,u&&d+"-"+u)}),o)}));h.First=v,h.Prev=p,h.Ellipsis=j,h.Item=d,h.Next=m,h.Last=O;t.a=h}},[["07zo",0,1,3,2,4]]]);