(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"3Z9Z":function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),o=a("TSYQ"),c=a.n(o),s=a("q1tI"),i=a.n(s),l=a("vUet"),u=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.noGutters,f=e.as,d=void 0===f?"div":f,b=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(l.a)(a,"row"),v=m+"-cols",j=[];return u.forEach((function(e){var t,a=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&j.push(""+v+r+"-"+t)})),i.a.createElement(d,Object(r.a)({ref:t},b,{className:c.a.apply(void 0,[o,m,s&&"no-gutters"].concat(j))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},"6Yj5":function(e,t,a){e.exports={tag:"Tags_tag__2sw_z",tags:"Tags_tags__1ysPp"}},"6xyR":function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),o=a("TSYQ"),c=a.n(o),s=a("q1tI"),i=a.n(s),l=a("vUet"),u=a("YdCC"),f=a("U1MP"),d=i.a.createContext(null);d.displayName="CardContext";var b=d,m=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.variant,u=e.as,f=void 0===u?"img":u,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(l.a)(a,"card-img");return i.a.createElement(f,Object(r.a)({ref:t,className:c()(s?b+"-"+s:b,o)},d))}));m.displayName="CardImg",m.defaultProps={variant:null};var v=m,j=Object(f.a)("h5"),p=Object(f.a)("h6"),O=Object(u.a)("card-body"),h=Object(u.a)("card-title",{Component:j}),x=Object(u.a)("card-subtitle",{Component:p}),y=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),w=Object(u.a)("card-img-overlay"),E=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,u=e.bg,f=e.text,d=e.border,m=e.body,v=e.children,j=e.as,p=void 0===j?"div":j,h=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(a,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return i.a.createElement(b.Provider,{value:y},i.a.createElement(p,Object(r.a)({ref:t},h,{className:c()(o,x,u&&"bg-"+u,f&&"text-"+f,d&&"border-"+d)}),m?i.a.createElement(O,null,v):v))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=v,E.Title=h,E.Subtitle=x,E.Body=O,E.Link=y,E.Text=g,E.Header=N,E.Footer=C,E.ImgOverlay=w;t.a=E},BsWD:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("a3WO");function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},JI6e:function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),o=a("TSYQ"),c=a.n(o),s=a("q1tI"),i=a.n(s),l=a("vUet"),u=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.as,f=void 0===s?"div":s,d=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(l.a)(a,"col"),m=[],v=[];return u.forEach((function(e){var t,a,r,n=d[e];if(delete d[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var c="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+b+c:""+b+c+"-"+t),null!=r&&v.push("order"+c+"-"+r),null!=a&&v.push("offset"+c+"-"+a)})),m.length||m.push(b),i.a.createElement(f,Object(r.a)({},d,{ref:t,className:c.a.apply(void 0,[o].concat(m,v))}))}));f.displayName="Col",t.a=f},KQm4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("a3WO");var n=a("BsWD");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},U1MP:function(e,t,a){"use strict";var r=a("RAs/"),n=a("q1tI"),o=a.n(n),c=a("TSYQ"),s=a.n(c);t.a=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},Vhrh:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n=a("XcHJ"),o=a("i52p"),c=Math.pow(2,31)-1;function s(e,t,a){var r=a-Date.now();e.current=r<=c?setTimeout(t,r):setTimeout((function(){return s(e,t,a)}),c)}function i(){var e=Object(n.a)(),t=Object(r.useRef)();return Object(o.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(r,n){void 0===n&&(n=0),e()&&(a(),n<=c?t.current=setTimeout(r,n):s(t,r,Date.now()+n))},clear:a}}),[])}},"WY+I":function(e,t,a){"use strict";var r=a("nKUr"),n=a("6Yj5"),o=a.n(n);t.a=function(e){var t=e.tags;return Object(r.jsx)("div",{className:["d-flex","flex-row","flex-wrap","mb-2",o.a.tags].join(" "),children:t.map((function(e){return Object(r.jsx)("p",{className:["text-capitalize","mb-1","mr-1","text-truncate",o.a.tag].join(" "),children:e},e)}))})}},YFqc:function(e,t,a){e.exports=a("cTJO")},a3WO:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},cTJO:function(e,t,a){"use strict";var r=a("J4zp"),n=a("284h");t.__esModule=!0,t.default=void 0;var o=n(a("q1tI")),c=a("elyg"),s=a("nOHt"),i=a("vNVm"),l={};function u(e,t,a,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,a,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+a+(n?"%"+n:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,a=(0,s.useRouter)(),n=a&&a.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(n,e.href,!0),a=r(t,2),o=a[0],s=a[1];return{href:o,as:e.as?(0,c.resolveHref)(n,e.as):s||o}}),[n,e.href,e.as]),d=f.href,b=f.as,m=e.children,v=e.replace,j=e.shallow,p=e.scroll,O=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var h=o.Children.only(m),x=h&&"object"===typeof h&&h.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),g=r(y,2),N=g[0],C=g[1],w=o.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,o.useEffect)((function(){var e=C&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof O?O:a&&a.locale,n=l[d+"%"+b+(r?"%"+r:"")];e&&!n&&u(a,d,b,{locale:r})}),[b,d,C,O,t,a]);var E={ref:w,onClick:function(e){h.props&&"function"===typeof h.props.onClick&&h.props.onClick(e),e.defaultPrevented||function(e,t,a,r,n,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(a))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[n?"replace":"push"](a,r,{shallow:o,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,a,d,b,v,j,p,O)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(h.props&&"function"===typeof h.props.onMouseEnter&&h.props.onMouseEnter(e),u(a,d,b,{priority:!0}))}};if(e.passHref||"a"===h.type&&!("href"in h.props)){var I="undefined"!==typeof O?O:a&&a.locale,k=a&&a.isLocaleDomain&&(0,c.getDomainLocale)(b,I,a&&a.locales,a&&a.domainLocales);E.href=k||(0,c.addBasePath)((0,c.addLocale)(b,I,a&&a.defaultLocale))}return o.default.cloneElement(h,E)};t.default=f},mKw1:function(e,t,a){"use strict";var r=a("nKUr"),n=a("YFqc"),o=a.n(n),c=a("6xyR"),s=a("3Z9Z"),i=a("JI6e"),l=a("WY+I");t.a=function(e){var t=e.title,a=e.description,n=e.tags,u=e.filename,f=e.favorite,d=e.onClickFavorite,b=f?"fa fa-bookmark fa-sm fa-2x text-warning":"fa fa-bookmark-o fa-sm fa-2x",m=f?"delete":"add",v=f?"favorite bookmark selected":"favorite bookmark";return Object(r.jsx)(c.a,{style:{backgroundColor:"#dae2ef",flexBasis:"30%"},children:Object(r.jsxs)(c.a.Body,{children:[Object(r.jsx)(c.a.Title,{className:"text-capitalize",children:Object(r.jsxs)(s.a,{className:"align-items-center",children:[Object(r.jsx)(i.a,{children:Object(r.jsx)(o.a,{href:"/".concat(u),children:t})}),Object(r.jsx)(i.a,{className:["d-flex","justify-content-end"].join(" "),children:Object(r.jsx)("button",{"aria-label":v,tabIndex:"0",onClick:function(){return d(m,u,{title:t,description:a,tags:n})},style:{backgroundColor:"transparent"},className:"border-0",children:Object(r.jsx)("span",{className:b,"aria-hidden":"true"})})})]})}),Object(r.jsx)(l.a,{tags:n}),Object(r.jsx)(c.a.Text,{children:a})]})})}},rwuF:function(e,t,a){"use strict";var r=a("nKUr"),n=a("RAs/"),o=a("hVfy"),c=a("q1tI"),s=a.n(c),i=a("TSYQ"),l=a.n(i),u=a("Vhrh"),f=a("7xGa"),d=a("ZCiN"),b=a("vUet"),m=a("XQC9"),v=s.a.createContext({onClose:function(){}}),j=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.closeLabel,i=e.closeButton,u=e.className,f=e.children,j=Object(o.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);a=Object(b.a)(a,"toast-header");var p=Object(c.useContext)(v),O=Object(d.a)((function(e){p&&p.onClose&&p.onClose(e)}));return s.a.createElement("div",Object(n.a)({ref:t},j,{className:l()(a,u)}),f,i&&s.a.createElement(m.a,{label:r,onClick:O,className:"ml-2 mb-1","data-dismiss":"toast"}))}));j.displayName="ToastHeader",j.defaultProps={closeLabel:"Close",closeButton:!0};var p=j,O=a("YdCC"),h=Object(O.a)("toast-body"),x=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.children,d=e.transition,m=void 0===d?f.a:d,j=e.show,p=void 0===j||j,O=e.animation,h=void 0===O||O,x=e.delay,y=void 0===x?3e3:x,g=e.autohide,N=void 0!==g&&g,C=e.onClose,w=Object(o.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);a=Object(b.a)(a,"toast");var E=Object(c.useRef)(y),I=Object(c.useRef)(C);Object(c.useEffect)((function(){E.current=y,I.current=C}),[y,C]);var k=Object(u.a)(),R=!(!N||!p),P=Object(c.useCallback)((function(){R&&(null==I.current||I.current())}),[R]);Object(c.useEffect)((function(){k.set(P,E.current)}),[k,P]);var T=Object(c.useMemo)((function(){return{onClose:C}}),[C]),M=!(!m||!h),L=s.a.createElement("div",Object(n.a)({},w,{ref:t,className:l()(a,r,!M&&(p?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),i);return s.a.createElement(v.Provider,{value:T},M&&m?s.a.createElement(m,{in:p,unmountOnExit:!0},L):L)}));x.displayName="Toast";var y=Object.assign(x,{Body:h,Header:p});t.a=function(e){var t=e.description,a=Object(c.useState)(!0),n=a[0],o=a[1],s=function(){o(!n)};return Object(c.useEffect)((function(){setTimeout((function(){s()}),2500)}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(y,{onClose:s,show:n,animation:!0,children:[Object(r.jsxs)(y.Header,{children:[Object(r.jsx)("strong",{className:"mr-auto",children:"Notification"}),Object(r.jsx)("small",{children:"Just now"})]}),Object(r.jsx)(y.Body,{children:t})]})})}},vNVm:function(e,t,a){"use strict";var r=a("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!c,i=(0,n.useRef)(),l=(0,n.useState)(!1),u=r(l,2),f=u[0],d=u[1],b=(0,n.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),a||f||e&&e.tagName&&(i.current=function(e,t,a){var r=function(e){var t=e.rootMargin||"",a=s.get(t);if(a)return a;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return s.set(t,a={id:t,observer:n,elements:r}),a}(a),n=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(n))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[a,t,f]);return(0,n.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[b,f]};var n=a("q1tI"),o=a("0G5g"),c="undefined"!==typeof IntersectionObserver;var s=new Map}}]);