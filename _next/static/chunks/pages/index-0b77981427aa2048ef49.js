_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"1QP3":function(e,t,n){e.exports={recentCards:"ContentCards_recentCards__1cDso"}},"65eO":function(e,t,n){"use strict";var r=n("RAs/"),a=n("hVfy"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),s=n.n(c),u=n("vUet"),l=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.pill,l=e.className,f=e.as,d=void 0===f?"span":f,p=Object(a.a)(e,["bsPrefix","variant","pill","className","as"]),m=Object(u.a)(n,"badge");return s.a.createElement(d,Object(r.a)({ref:t},p,{className:i()(l,m,c&&m+"-pill",o&&m+"-"+o)}))}));l.displayName="Badge",l.defaultProps={pill:!1},t.a=l},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(f)?(p.add(f),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},D6Vm:function(e,t,n){e.exports={topCategoryCard:"TopTagCard_topCategoryCard__nfRee",postLink:"TopTagCard_postLink__1yMHL"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return C}));var r=n("nKUr"),a=n("rePB"),o=n("Ff2n"),i=n("KQm4"),c=n("mKw1"),s=n("UU7b"),u=n("g4pe"),l=n.n(u),f=n("7vrA"),d=n("6xyR"),p=n("3Z9Z"),m=n("JI6e"),b=n("65eO"),h=n("D6Vm"),v=n.n(h),y=n("YFqc"),j=n.n(y),O=function(e){var t=e.categoryName,n=e.posts,a=e.countPosts;return Object(r.jsx)(d.a,{style:{flexBasis:"30%"},className:[v.a.topCategoryCard,"text-light","mt-3"].join(" "),children:Object(r.jsxs)(d.a.Body,{children:[Object(r.jsx)(d.a.Title,{className:" border-bottom pb-4",children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)(m.a,{children:Object(r.jsx)("p",{className:"text-capitalize mb-0",children:t})}),Object(r.jsx)(m.a,{className:"d-flex justify-content-end",children:Object(r.jsxs)(b.a,{variant:"light",children:["count: ",a]})})]})}),Object(r.jsx)("div",{className:"d-flex flex-column",children:n.map((function(e){return Object(r.jsx)("p",{className:["border-bottom","pb-3"].join(" "),children:Object(r.jsx)(j.a,{href:"/".concat(e.filename),children:Object(r.jsx)("a",{className:v.a.postLink,children:e.title})})},e.filename)}))})]})})},g={js:[{filename:"newtest",title:"Test Sample"},{filename:"testsample1",title:"Test Sample"},{filename:"testsample2 copy",title:"Test Sample 2"}],"test new post":[{filename:"newtest",title:"Test Sample"}],"c++":[{filename:"newtest",title:"Test Sample"}],test1:[{filename:"testsample1",title:"Test Sample"}],python:[{filename:"testsample1",title:"Test Sample"}],"test copia":[{filename:"testsample2 copy",title:"Test Sample 2"}]},x=n("q1tI"),_=n("rwuF");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var C=!0;t.default=function(e){var t=e.recentContent,n=e.tags,a=Object(x.useState)([]),u=a[0],d=a[1],p=Object(x.useState)(),m=p[0],b=p[1],h=function(e){var t=u,n=[].concat(Object(i.a)(t),[e]);d(n)};Object(x.useEffect)((function(){b(JSON.parse(localStorage.getItem("favorites")))}),[]);var v=function(e,t,n){if("delete"===e)!function(e){m[e];var t=Object(o.a)(m,[e].map(P));b(t),localStorage.setItem("favorites",JSON.stringify(t))}(t),h("Bookmark removed succesfully!");else if("add"===e){var r=S({},m);r[t]=S({},n),b(r),localStorage.setItem("favorites",JSON.stringify(r)),h("Bookmark added succesfully!")}};return Object(r.jsxs)("div",{children:[Object(r.jsx)(l.a,{children:Object(r.jsx)("title",{children:"Code Sampler"})}),Object(r.jsxs)(f.a,{fluid:!0,className:"mt-3 mb-3",children:[Object(r.jsx)("h2",{children:"Recent content"}),Object(r.jsx)(s.a,{className:"{mt-5}",children:t.map((function(e){return Object(r.jsx)(c.a,{filename:e.id,title:e.title,description:e.description,tags:e.tags,onClickFavorite:v,favorite:m&&m[e.id]},e.id)}))})]}),Object(r.jsxs)(f.a,{fluid:!0,children:[Object(r.jsx)("h2",{children:"Top Tags"}),Object(r.jsx)(s.a,{children:n.map((function(e){return Object(r.jsx)(O,{categoryName:e,posts:g[e].slice(0,5),countPosts:g[e].length},e)}))})]}),Object(r.jsx)("div",{style:{position:"fixed",top:"4rem",right:"2rem"},children:u?u.map((function(e,t){return Object(r.jsx)(_.a,{description:e},t)})):""})]})}},UU7b:function(e,t,n){"use strict";var r=n("nKUr"),a=n("7vrA"),o=n("1QP3"),i=n.n(o);t.a=function(e){var t=e.children,n=e.style;return Object(r.jsx)(a.a,{style:n,className:i.a.recentCards,fluid:!0,children:t})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,1,3,2,4]]]);