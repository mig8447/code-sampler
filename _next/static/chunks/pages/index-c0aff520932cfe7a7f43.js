(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{50676:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},87329:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(50676);var a=r(82961);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},82961:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(50676);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},94044:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(67294),a=r(6454),s=r(55088),o=Math.pow(2,31)-1;function i(e,t,r){var n=r-Date.now();e.current=n<=o?setTimeout(t,n):setTimeout((function(){return i(e,t,r)}),o)}function c(){var e=(0,a.Z)(),t=(0,n.useRef)();return(0,s.Z)((function(){return clearTimeout(t.current)})),(0,n.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(n,a){void 0===a&&(a=0),e()&&(r(),a<=o?t.current=setTimeout(n,a):i(t,n,Date.now()+a))},clear:r}}),[])}},88241:function(e,t,r){"use strict";var n=r(85893),a=r(10682),s=r(4228),o=r.n(s);t.Z=function(e){var t=e.children,r=e.style;return(0,n.jsx)(a.Z,{style:r,className:o().recentCards,fluid:!0,children:t})}},25236:function(e,t,r){"use strict";var n=r(85893),a=r(41664),s=r(24479),o=r(34051),i=r(31555),c=r(67568);t.Z=function(e){var t=e.title,r=e.description,l=e.tags,u=e.filename,f=e.favorite,d=e.onClickFavorite,m=f?"fa fa-bookmark fa-sm fa-2x":"fa fa-bookmark-o fa-sm fa-2x",p=f?"delete":"add",v=f?"favorite bookmark selected":"favorite bookmark";return(0,n.jsx)(s.Z,{style:{backgroundColor:"#dae2ef",flexBasis:"30%"},children:(0,n.jsxs)(s.Z.Body,{children:[(0,n.jsx)(s.Z.Title,{className:"text-capitalize",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(i.Z,{children:(0,n.jsx)(a.default,{href:"/".concat(u),children:t})}),(0,n.jsx)(i.Z,{xs:"auto",className:["d-flex","justify-content-end"].join(" "),children:(0,n.jsx)("button",{"aria-label":v,tabIndex:"0",onClick:function(){return d(p,u,{title:t,description:r,tags:l})},style:{backgroundColor:"transparent"},className:"border-0",children:(0,n.jsx)("span",{className:m,style:{color:"#2b6242"},"aria-hidden":"true"})})})]})}),(0,n.jsx)(c.Z,{tags:l}),(0,n.jsx)(s.Z.Text,{children:r})]})})}},18737:function(e,t,r){"use strict";var n=r(85893),a=r(26396),s=r(67294);t.Z=function(e){var t=e.description,r=(0,s.useState)(!0),o=r[0],i=r[1],c=function(){i(!o)};return(0,s.useEffect)((function(){setTimeout((function(){c()}),2500)}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Z,{onClose:c,show:o,animation:!0,children:[(0,n.jsxs)(a.Z.Header,{children:[(0,n.jsx)("strong",{className:"mr-auto",children:"Notification"}),(0,n.jsx)("small",{children:"Just now"})]}),(0,n.jsx)(a.Z.Body,{children:t})]})})}},67568:function(e,t,r){"use strict";var n=r(85893),a=r(85466),s=r.n(a);t.Z=function(e){var t=e.tags;return(0,n.jsx)("div",{className:["d-flex","flex-row","flex-wrap","mb-2",s().tags].join(" "),children:t.map((function(e){return(0,n.jsx)("p",{className:["text-capitalize","mb-1 mr-1","text-truncate","px-2",s().tag].join(" "),children:e},e)}))})}},63864:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return k},default:function(){return O}});var n=r(85893),a=r(96156),s=r(2949),o=r(87329),i=r(25236),c=r(88241),l=r(9008),u=r(10682),f=r(24479),d=r(34051),m=r(31555),p=r(89578),v=r(38829),x=r(94184),h=r.n(x),b=r(67294),y=r(76792),g=b.forwardRef((function(e,t){var r=e.bsPrefix,n=e.variant,a=e.pill,s=e.className,o=e.as,i=void 0===o?"span":o,c=(0,v.Z)(e,["bsPrefix","variant","pill","className","as"]),l=(0,y.vE)(r,"badge");return b.createElement(i,(0,p.Z)({ref:t},c,{className:h()(s,l,a&&l+"-pill",n&&l+"-"+n)}))}));g.displayName="Badge",g.defaultProps={pill:!1};var j=g,Z=r(82543),N=r.n(Z),C=r(41664),w=function(e){var t=e.categoryName,r=e.posts,a=e.countPosts;return(0,n.jsx)(f.Z,{style:{flexBasis:"30%"},className:[N().topCategoryCard,"text-light"].join(" "),children:(0,n.jsxs)(f.Z.Body,{children:[(0,n.jsx)(f.Z.Title,{className:[N().borderBottomLight,"pb-4"].join(" "),children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(m.Z,{children:(0,n.jsx)("p",{className:"text-capitalize mb-0",children:t})}),(0,n.jsx)(m.Z,{xs:"auto",className:"d-flex justify-content-end",children:(0,n.jsx)(j,{variant:"light",children:a})})]})}),(0,n.jsx)("div",{className:"d-flex flex-column",children:r.map((function(e){return(0,n.jsx)("p",{className:[N().borderBottomLight,"pb-3"].join(" "),children:(0,n.jsx)(C.default,{href:"/".concat(e.filename),children:(0,n.jsx)("a",{className:N().postLink,children:e.title})})},e.filename)}))})]})})},P={js:[{filename:"newtest",title:"Test Sample"},{filename:"testsample1",title:"Test Sample"},{filename:"testsample2 copy",title:"Test Sample 2"}],"test new post":[{filename:"newtest",title:"Test Sample"}],"c++":[{filename:"newtest",title:"Test Sample"}],test1:[{filename:"testsample1",title:"Test Sample"}],python:[{filename:"testsample1",title:"Test Sample"}],"test copia":[{filename:"testsample2 copy",title:"Test Sample 2"}]},T=r(18737);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var k=!0,O=function(e){var t=e.recentContent,r=e.tags,a=(0,b.useState)([]),f=a[0],d=a[1],m=(0,b.useState)(),p=m[0],v=m[1],x=function(e){var t=f,r=[].concat((0,o.Z)(t),[e]);d(r)};(0,b.useEffect)((function(){v(JSON.parse(localStorage.getItem("favorites")))}),[]);var h=function(e,t,r){if("delete"===e)!function(e){p[e];var t=(0,s.Z)(p,[e].map(S));v(t),localStorage.setItem("favorites",JSON.stringify(t))}(t),x("Bookmark removed successfully!");else if("add"===e){var n=_({},p);n[t]=_({},r),v(n),localStorage.setItem("favorites",JSON.stringify(n)),x("Bookmark added successfully!")}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(l.default,{children:(0,n.jsx)("title",{children:"Code Sampler"})}),(0,n.jsxs)(u.Z,{fluid:!0,className:"mt-3",children:[(0,n.jsx)("h2",{children:"Recent content"}),(0,n.jsx)(c.Z,{children:t.map((function(e){return(0,n.jsx)(i.Z,{filename:e.id,title:e.title,description:e.description,tags:e.tags,onClickFavorite:h,favorite:p&&p[e.id]},e.id)}))})]}),(0,n.jsxs)(u.Z,{fluid:!0,children:[(0,n.jsx)("h2",{children:"Top Tags"}),(0,n.jsx)(c.Z,{children:r.map((function(e){return(0,n.jsx)(w,{categoryName:e,posts:P[e].slice(0,5),countPosts:P[e].length},e)}))})]}),(0,n.jsx)("div",{style:{position:"fixed",top:"4rem",right:"2rem"},children:f?f.map((function(e,t){return(0,n.jsx)(T.Z,{description:e},t)})):""})]})}},78581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(63864)}])},4228:function(e){e.exports={recentCards:"ContentCards_recentCards__1cDso"}},85466:function(e){e.exports={tag:"Tags_tag__2sw_z",tags:"Tags_tags__1ysPp"}},82543:function(e){e.exports={topCategoryCard:"TopTagCard_topCategoryCard__nfRee",postLink:"TopTagCard_postLink__1yMHL",borderBottomLight:"TopTagCard_borderBottomLight__3hwwT"}},24479:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(89578),a=r(38829),s=r(94184),o=r.n(s),i=r(67294),c=r(76792),l=r(44680),u=r(39602),f=i.createContext(null);f.displayName="CardContext";var d=f,m=i.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,l=e.variant,u=e.as,f=void 0===u?"img":u,d=(0,a.Z)(e,["bsPrefix","className","variant","as"]),m=(0,c.vE)(r,"card-img");return i.createElement(f,(0,n.Z)({ref:t,className:o()(l?m+"-"+l:m,s)},d))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,v=(0,u.Z)("h5"),x=(0,u.Z)("h6"),h=(0,l.Z)("card-body"),b=(0,l.Z)("card-title",{Component:v}),y=(0,l.Z)("card-subtitle",{Component:x}),g=(0,l.Z)("card-link",{Component:"a"}),j=(0,l.Z)("card-text",{Component:"p"}),Z=(0,l.Z)("card-header"),N=(0,l.Z)("card-footer"),C=(0,l.Z)("card-img-overlay"),w=i.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,l=e.bg,u=e.text,f=e.border,m=e.body,p=e.children,v=e.as,x=void 0===v?"div":v,b=(0,a.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,c.vE)(r,"card"),g=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.createElement(d.Provider,{value:g},i.createElement(x,(0,n.Z)({ref:t},b,{className:o()(s,y,l&&"bg-"+l,u&&"text-"+u,f&&"border-"+f)}),m?i.createElement(h,null,p):p))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=p,w.Title=b,w.Subtitle=y,w.Body=h,w.Link=g,w.Text=j,w.Header=Z,w.Footer=N,w.ImgOverlay=C;var P=w},31555:function(e,t,r){"use strict";var n=r(89578),a=r(38829),s=r(94184),o=r.n(s),i=r(67294),c=r(76792),l=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,u=e.as,f=void 0===u?"div":u,d=(0,a.Z)(e,["bsPrefix","className","as"]),m=(0,c.vE)(r,"col"),p=[],v=[];return l.forEach((function(e){var t,r,n,a=d[e];if(delete d[e],"object"===typeof a&&null!=a){var s=a.span;t=void 0===s||s,r=a.offset,n=a.order}else t=a;var o="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+o:""+m+o+"-"+t),null!=n&&v.push("order"+o+"-"+n),null!=r&&v.push("offset"+o+"-"+r)})),p.length||p.push(m),i.createElement(f,(0,n.Z)({},d,{ref:t,className:o().apply(void 0,[s].concat(p,v))}))}));u.displayName="Col",t.Z=u},34051:function(e,t,r){"use strict";var n=r(89578),a=r(38829),s=r(94184),o=r.n(s),i=r(67294),c=r(76792),l=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,u=e.noGutters,f=e.as,d=void 0===f?"div":f,m=(0,a.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,c.vE)(r,"row"),v=p+"-cols",x=[];return l.forEach((function(e){var t,r=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&x.push(""+v+n+"-"+t)})),i.createElement(d,(0,n.Z)({ref:t},m,{className:o().apply(void 0,[s,p,u&&"no-gutters"].concat(x))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},26396:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(89578),a=r(38829),s=r(67294),o=r(94184),i=r.n(o),c=r(94044),l=r(41068),u=r(96895),f=r(76792),d=r(41485),m=s.createContext({onClose:function(){}}),p=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.closeLabel,c=e.closeButton,l=e.className,p=e.children,v=(0,a.Z)(e,["bsPrefix","closeLabel","closeButton","className","children"]);r=(0,f.vE)(r,"toast-header");var x=(0,s.useContext)(m),h=(0,u.Z)((function(e){x&&x.onClose&&x.onClose(e)}));return s.createElement("div",(0,n.Z)({ref:t},v,{className:i()(r,l)}),p,c&&s.createElement(d.Z,{label:o,onClick:h,className:"ml-2 mb-1","data-dismiss":"toast"}))}));p.displayName="ToastHeader",p.defaultProps={closeLabel:"Close",closeButton:!0};var v=p,x=(0,r(44680).Z)("toast-body"),h=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,u=e.children,d=e.transition,p=void 0===d?l.Z:d,v=e.show,x=void 0===v||v,h=e.animation,b=void 0===h||h,y=e.delay,g=void 0===y?3e3:y,j=e.autohide,Z=void 0!==j&&j,N=e.onClose,C=(0,a.Z)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);r=(0,f.vE)(r,"toast");var w=(0,s.useRef)(g),P=(0,s.useRef)(N);(0,s.useEffect)((function(){w.current=g,P.current=N}),[g,N]);var T=(0,c.Z)(),E=!(!Z||!x),_=(0,s.useCallback)((function(){E&&(null==P.current||P.current())}),[E]);(0,s.useEffect)((function(){T.set(_,w.current)}),[T,_]);var S=(0,s.useMemo)((function(){return{onClose:N}}),[N]),k=!(!p||!b),O=s.createElement("div",(0,n.Z)({},C,{ref:t,className:i()(r,o,!k&&(x?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),u);return s.createElement(m.Provider,{value:S},k&&p?s.createElement(p,{in:x,unmountOnExit:!0},O):O)}));h.displayName="Toast";var b=Object.assign(h,{Body:x,Header:v})}},function(e){e.O(0,[774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);