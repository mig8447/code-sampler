_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"0YtT":function(e,t,a){"use strict";a.r(t);var r=a("nKUr"),n=a("Ff2n"),c=a("rePB"),i=a("KQm4");var o=a("BsWD");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(s){n=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=a("7vrA"),u=a("3Z9Z"),d=a("6xyR"),f=a("65eO"),b=a("RAs/"),j=a("hVfy"),v=a("TSYQ"),m=a.n(v),O=a("q1tI"),y=a.n(O),h=(a("2W6z"),a("y8DL")),p=a("vUet"),x=a("Zeqi"),g=a("YGJp"),N=a("lcWJ"),w=a("F9IU"),C=a("ILyh"),P=y.a.createContext(null),E=function(){},S=y.a.forwardRef((function(e,t){var a,r,n=e.as,c=void 0===n?"ul":n,i=e.onSelect,o=e.activeKey,s=e.role,l=e.onKeyDown,u=Object(j.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),d=Object(g.a)(),f=Object(O.useRef)(!1),v=Object(O.useContext)(C.a),m=Object(O.useContext)(P);m&&(s=s||"tablist",o=m.activeKey,a=m.getControlledId,r=m.getControllerId);var h=Object(O.useRef)(null),p=function(e){var t=h.current;if(!t)return null;var a=Object(x.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var n=a.indexOf(r);if(-1===n)return null;var c=n+e;return c>=a.length&&(c=0),c<0&&(c=a.length-1),a[c]},S=function(e,t){null!=e&&(i&&i(e,t),v&&v(e,t))};Object(O.useEffect)((function(){if(h.current&&f.current){var e=h.current.querySelector("[data-rb-event-key].active");e&&e.focus()}f.current=!1}));var k=Object(N.a)(t,h);return y.a.createElement(C.a.Provider,{value:S},y.a.createElement(w.a.Provider,{value:{role:s,activeKey:Object(C.b)(o),getControlledId:a||E,getControllerId:r||E}},y.a.createElement(c,Object(b.a)({},u,{onKeyDown:function(e){var t;switch(l&&l(e),e.key){case"ArrowLeft":case"ArrowUp":t=p(-1);break;case"ArrowRight":case"ArrowDown":t=p(1);break;default:return}t&&(e.preventDefault(),S(t.dataset.rbEventKey,e),f.current=!0,d())},ref:k,role:s}))))})),k=a("ZCiN"),I=y.a.forwardRef((function(e,t){var a=e.active,r=e.className,n=e.eventKey,c=e.onSelect,i=e.onClick,o=e.as,s=Object(j.a)(e,["active","className","eventKey","onSelect","onClick","as"]),l=Object(C.b)(n,s.href),u=Object(O.useContext)(C.a),d=Object(O.useContext)(w.a),f=a;if(d){s.role||"tablist"!==d.role||(s.role="tab");var v=d.getControllerId(l),h=d.getControlledId(l);s["data-rb-event-key"]=l,s.id=v||s.id,s["aria-controls"]=h||s["aria-controls"],f=null==a&&null!=l?d.activeKey===l:a}"tab"===s.role&&(s.disabled&&(s.tabIndex=-1,s["aria-disabled"]=!0),s["aria-selected"]=f);var p=Object(k.a)((function(e){i&&i(e),null!=l&&(c&&c(l,e),u&&u(l,e))}));return y.a.createElement(o,Object(b.a)({},s,{ref:t,onClick:p,className:m()(r,f&&"active")}))}));I.defaultProps={disabled:!1};var _=I,R={variant:void 0,active:!1,disabled:!1},T=y.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.active,n=e.disabled,c=e.className,i=e.variant,o=e.action,s=e.as,l=e.eventKey,u=e.onClick,d=Object(j.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(p.a)(a,"list-group-item");var f=Object(O.useCallback)((function(e){if(n)return e.preventDefault(),void e.stopPropagation();u&&u(e)}),[n,u]);return n&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0),y.a.createElement(_,Object(b.a)({ref:t},d,{eventKey:Object(C.b)(l,d.href),as:s||(o?d.href?"a":"button":"div"),onClick:f,className:m()(c,a,r&&"active",n&&"disabled",i&&a+"-"+i,o&&a+"-action")}))}));T.defaultProps=R,T.displayName="ListGroupItem";var A=T,K={variant:void 0,horizontal:void 0},B=y.a.forwardRef((function(e,t){var a,r=Object(h.a)(e,{activeKey:"onSelect"}),n=r.className,c=r.bsPrefix,i=r.variant,o=r.horizontal,s=r.as,l=void 0===s?"div":s,u=Object(j.a)(r,["className","bsPrefix","variant","horizontal","as"]),d=Object(p.a)(c,"list-group");return a=o?!0===o?"horizontal":"horizontal-"+o:null,y.a.createElement(S,Object(b.a)({ref:t},u,{as:l,className:m()(n,d,i&&d+"-"+i,a&&d+"-"+a)}))}));B.defaultProps=K,B.displayName="ListGroup",B.Item=A;var D=B,Y=a("zhAr"),q=a("FGsH"),F=a.n(q),L=a("cWnB"),z=a("WY+I"),G=a("YFqc"),U=a.n(G),W=function(e){var t=e.title,a=e.description,n=e.tags,c=e.version,i=e.favorite,o=e.onClickFavorite,s=e.filename,l=i?"fa fa-bookmark fa-sm fa-2x text-warning":"fa fa-bookmark-o fa-sm fa-2x",u=i?"delete":"add";return Object(r.jsxs)(D.Item,{className:[F.a.bgCardColor,F.a.borderGrey].join(" "),children:[Object(r.jsx)("button",{onClick:function(){return o(u,s,{title:t,description:a,tags:n})},style:{backgroundColor:"transparent"},className:"border-0 text-white float-right",children:Object(r.jsx)("span",{className:[" fa-sm fa-2x",l].join(" "),"aria-hidden":"true"})}),Object(r.jsx)("h4",{children:Object(r.jsx)("span",{className:F.a.titlePost,children:Object(r.jsx)(U.a,{href:"/".concat(s),children:t})})}),Object(r.jsx)(z.a,{tags:n}),Object(r.jsx)("p",{children:a}),Object(r.jsxs)(L.a,{variant:"outline-light",size:"sm",disabled:!0,children:[" DB  ",c]})]})},J=a("iJR3"),M=a("20a2"),Q=a("hhjO"),H=a("rwuF");function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function X(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}t.default=function(){var e=Object(M.useRouter)(),t=Object(O.useState)(JSON.parse(localStorage.getItem("favorites"))),a=t[0],o=t[1],b=Object(O.useState)(0),j=b[0],v=b[1],m=Object(Q.a)(J.a,{includeScore:!0,keys:["title","description","tags","id"],matchAllOnEmptyQuery:!1}),y=m.results,h=m.query,p=m.setQuery,x=m.setFilters,g=m.filtersSelected,N=Math.ceil(y.length/3);Object(O.useEffect)((function(){var t=s(function(){var t=e.query.keyword,a=e.query.filters;a="string"===typeof a?Object(c.a)({},a,!0):"object"===typeof a?a.reduce((function(e,t){return e[t]=!0,e}),{}):{};return[t,a]}(),2),a=t[0],r=t[1];p(a),x(r)}),[e.query.keyword,e.query.filters]);var w=function(e){var t=j+e;t>=0&&t<N&&v(t)},C=Object(O.useState)([]),P=C[0],E=C[1],S=function(e){var t=P,a=[].concat(Object(i.a)(t),[e]);E(a)};var k=function(e,t,r){if("delete"===e)!function(e){a[e];var t=Object(n.a)(a,[e].map(X));o(t),localStorage.setItem("favorites",JSON.stringify(t))}(t),S("Bookmark removed succesfully!");else if("add"===e){var c=V({},a);c[t]=V({},r),o(c),localStorage.setItem("favorites",JSON.stringify(c)),S("Bookmark added succesfully!")}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(l.a,{children:[Object(r.jsx)(u.a,{className:"d-flex justify-content-center p-4 text-white",children:Object(r.jsx)(d.a,{style:{width:"100%"},className:[F.a.bgCardColor].join(" "),children:Object(r.jsxs)(d.a.Body,{className:"ml-md-5 mr-md-5",children:[Object(r.jsxs)(d.a.Header,{className:[F.a.bgCardColor,F.a.borderGrey].join(" "),children:[Object(r.jsx)("h3",{children:"Results for:"}),Object(r.jsx)("h5",{children:h?'"'.concat(h,'"'):""}),Object(r.jsx)(z.a,{tags:g}),Object(r.jsx)(f.a,{className:"position-absolute",variant:"light",style:{right:"0",top:"25%"},children:"Found: ".concat(y.length)})]}),Object(r.jsx)(D,{variant:"flush",children:y.length>0?y.slice(3*j,3*j+3).map((function(e){return Object(r.jsx)(W,{title:e.item.title,tags:e.item.tags,description:e.item.description,favorite:!(!a||!a[e.item.id]),version:"12.3.3",filename:e.item.id,onClickFavorite:k},e.item.id)})):Object(r.jsx)("p",{children:"Your search did not match any document"})})]})})}),N>1?Object(r.jsx)(u.a,{className:"d-flex justify-content-center ",children:Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(Y.a.Prev,{onClick:function(){return w(-1)}}),Object(r.jsx)(Y.a.Item,{disabled:!0,children:j+1}),Object(r.jsx)(Y.a.Next,{onClick:function(){return w(1)}})]})}):""]}),Object(r.jsx)("div",{style:{position:"fixed",top:"2%",right:"2%"},children:P?P.map((function(e,t){return Object(r.jsx)(H.a,{description:e},t)})):""})]})}},"3Z9Z":function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),c=a("TSYQ"),i=a.n(c),o=a("q1tI"),s=a.n(o),l=a("vUet"),u=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.noGutters,d=e.as,f=void 0===d?"div":d,b=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),j=Object(l.a)(a,"row"),v=j+"-cols",m=[];return u.forEach((function(e){var t,a=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&m.push(""+v+r+"-"+t)})),s.a.createElement(f,Object(r.a)({ref:t},b,{className:i.a.apply(void 0,[c,j,o&&"no-gutters"].concat(m))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"6Yj5":function(e,t,a){e.exports={tag:"Tags_tag__2sw_z",tags:"Tags_tags__1ysPp"}},"6xyR":function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),c=a("TSYQ"),i=a.n(c),o=a("q1tI"),s=a.n(o),l=a("vUet"),u=a("YdCC"),d=a("U1MP"),f=s.a.createContext(null);f.displayName="CardContext";var b=f,j=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(l.a)(a,"card-img");return s.a.createElement(d,Object(r.a)({ref:t,className:i()(o?b+"-"+o:b,c)},f))}));j.displayName="CardImg",j.defaultProps={variant:null};var v=j,m=Object(d.a)("h5"),O=Object(d.a)("h6"),y=Object(u.a)("card-body"),h=Object(u.a)("card-title",{Component:m}),p=Object(u.a)("card-subtitle",{Component:O}),x=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),w=Object(u.a)("card-footer"),C=Object(u.a)("card-img-overlay"),P=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,f=e.border,j=e.body,v=e.children,m=e.as,O=void 0===m?"div":m,h=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(l.a)(a,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return s.a.createElement(b.Provider,{value:x},s.a.createElement(O,Object(r.a)({ref:t},h,{className:i()(c,p,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),j?s.a.createElement(y,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=v,P.Title=h,P.Subtitle=p,P.Body=y,P.Link=x,P.Text=g,P.Header=N,P.Footer=w,P.ImgOverlay=C;t.a=P},BsWD:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("a3WO");function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},FGsH:function(e,t,a){e.exports={bgCardColor:"results_bgCardColor__1KpJK",borderGrey:"results_borderGrey__qXp9u","list-group-item-2":"results_list-group-item-2__YaS3k",bgBadge:"results_bgBadge__1V_w2",titlePost:"results_titlePost__3ZiRc"}},KQm4:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a("a3WO");var n=a("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PLdM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/results",function(){return a("0YtT")}])},Vhrh:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("q1tI"),n=a("XcHJ"),c=a("i52p"),i=Math.pow(2,31)-1;function o(e,t,a){var r=a-Date.now();e.current=r<=i?setTimeout(t,r):setTimeout((function(){return o(e,t,a)}),i)}function s(){var e=Object(n.a)(),t=Object(r.useRef)();return Object(c.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(r,n){void 0===n&&(n=0),e()&&(a(),n<=i?t.current=setTimeout(r,n):o(t,r,Date.now()+n))},clear:a}}),[])}},"WY+I":function(e,t,a){"use strict";var r=a("nKUr"),n=a("6Yj5"),c=a.n(n);t.a=function(e){var t=e.tags;return Object(r.jsx)("div",{className:["d-flex","flex-row","flex-wrap",c.a.tags].join(" "),children:t.map((function(e){return Object(r.jsx)("p",{className:["text-capitalize",c.a.tag].join(" "),children:e},e)}))})}},a3WO:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},rwuF:function(e,t,a){"use strict";var r=a("nKUr"),n=a("RAs/"),c=a("hVfy"),i=a("q1tI"),o=a.n(i),s=a("TSYQ"),l=a.n(s),u=a("Vhrh"),d=a("7xGa"),f=a("ZCiN"),b=a("vUet"),j=a("XQC9"),v=o.a.createContext({onClose:function(){}}),m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.closeLabel,s=e.closeButton,u=e.className,d=e.children,m=Object(c.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);a=Object(b.a)(a,"toast-header");var O=Object(i.useContext)(v),y=Object(f.a)((function(e){O&&O.onClose&&O.onClose(e)}));return o.a.createElement("div",Object(n.a)({ref:t},m,{className:l()(a,u)}),d,s&&o.a.createElement(j.a,{label:r,onClick:y,className:"ml-2 mb-1","data-dismiss":"toast"}))}));m.displayName="ToastHeader",m.defaultProps={closeLabel:"Close",closeButton:!0};var O=m,y=a("YdCC"),h=Object(y.a)("toast-body"),p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.children,f=e.transition,j=void 0===f?d.a:f,m=e.show,O=void 0===m||m,y=e.animation,h=void 0===y||y,p=e.delay,x=void 0===p?3e3:p,g=e.autohide,N=void 0!==g&&g,w=e.onClose,C=Object(c.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);a=Object(b.a)(a,"toast");var P=Object(i.useRef)(x),E=Object(i.useRef)(w);Object(i.useEffect)((function(){P.current=x,E.current=w}),[x,w]);var S=Object(u.a)(),k=!(!N||!O),I=Object(i.useCallback)((function(){k&&(null==E.current||E.current())}),[k]);Object(i.useEffect)((function(){S.set(I,P.current)}),[S,I]);var _=Object(i.useMemo)((function(){return{onClose:w}}),[w]),R=!(!j||!h),T=o.a.createElement("div",Object(n.a)({},C,{ref:t,className:l()(a,r,!R&&(O?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),s);return o.a.createElement(v.Provider,{value:_},R&&j?o.a.createElement(j,{in:O,unmountOnExit:!0},T):T)}));p.displayName="Toast";var x=Object.assign(p,{Body:h,Header:O});t.a=function(e){var t=e.description,a=Object(i.useState)(!0),n=a[0],c=a[1],o=function(){c(!n)};return Object(i.useEffect)((function(){setTimeout((function(){o()}),2500)}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(x,{onClose:o,show:n,animation:!0,children:[Object(r.jsxs)(x.Header,{children:[Object(r.jsx)("strong",{className:"mr-auto",children:"Notification"}),Object(r.jsx)("small",{children:"A moment ago"})]}),Object(r.jsx)(x.Body,{children:t})]})})}},zhAr:function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),c=a("TSYQ"),i=a.n(c),o=a("q1tI"),s=a.n(o),l=a("vUet"),u=a("dbZe"),d=s.a.forwardRef((function(e,t){var a=e.active,c=e.disabled,o=e.className,l=e.style,d=e.activeLabel,f=e.children,b=Object(n.a)(e,["active","disabled","className","style","activeLabel","children"]),j=a||c?"span":u.a;return s.a.createElement("li",{ref:t,style:l,className:i()(o,"page-item",{active:a,disabled:c})},s.a.createElement(j,Object(r.a)({className:"page-link",disabled:c},b),f,a&&d&&s.a.createElement("span",{className:"sr-only"},d)))}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var f=d;function b(e,t,a){function r(e){var r=e.children,c=Object(n.a)(e,["children"]);return s.a.createElement(d,c,s.a.createElement("span",{"aria-hidden":"true"},r||t),s.a.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),r.displayName=e,r}var j=b("First","\xab"),v=b("Prev","\u2039","Previous"),m=b("Ellipsis","\u2026","More"),O=b("Next","\u203a"),y=b("Last","\xbb"),h=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.children,u=e.size,d=Object(n.a)(e,["bsPrefix","className","children","size"]),f=Object(l.a)(a,"pagination");return s.a.createElement("ul",Object(r.a)({ref:t},d,{className:i()(c,f,u&&f+"-"+u)}),o)}));h.First=j,h.Prev=v,h.Ellipsis=m,h.Item=f,h.Next=O,h.Last=y;t.a=h}},[["PLdM",0,1,3,2,4,7]]]);