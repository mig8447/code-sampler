_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"6xyR":function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),c=a("TSYQ"),i=a.n(c),s=a("q1tI"),o=a.n(s),l=a("vUet"),d=a("YdCC"),b=a("U1MP"),u=o.a.createContext(null);u.displayName="CardContext";var f=u,j=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,d=e.as,b=void 0===d?"img":d,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(l.a)(a,"card-img");return o.a.createElement(b,Object(r.a)({ref:t,className:i()(s?f+"-"+s:f,c)},u))}));j.displayName="CardImg",j.defaultProps={variant:null};var v=j,m=Object(b.a)("h5"),O=Object(b.a)("h6"),p=Object(d.a)("card-body"),y=Object(d.a)("card-title",{Component:m}),h=Object(d.a)("card-subtitle",{Component:O}),x=Object(d.a)("card-link",{Component:"a"}),g=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),C=Object(d.a)("card-footer"),P=Object(d.a)("card-img-overlay"),w=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,d=e.bg,b=e.text,u=e.border,j=e.body,v=e.children,m=e.as,O=void 0===m?"div":m,y=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(l.a)(a,"card"),x=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return o.a.createElement(f.Provider,{value:x},o.a.createElement(O,Object(r.a)({ref:t},y,{className:i()(c,h,d&&"bg-"+d,b&&"text-"+b,u&&"border-"+u)}),j?o.a.createElement(p,null,v):v))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=v,w.Title=y,w.Subtitle=h,w.Body=p,w.Link=x,w.Text=g,w.Header=N,w.Footer=C,w.ImgOverlay=P;t.a=w},"8taD":function(e,t,a){e.exports={bgCardColor:"results_bgCardColor__3nVtJ",borderGrey:"results_borderGrey__3tWtr","list-group-item-2":"results_list-group-item-2__1CJtQ",bgBadge:"results_bgBadge__3AiAg",titlePost:"results_titlePost__2CWx2"}},PLdM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/results",function(){return a("TqjC")}])},TqjC:function(e,t,a){"use strict";a.r(t);var r=a("nKUr"),n=a("rePB"),c=a("Ff2n"),i=a("KQm4"),s=a("1Xi/"),o=a("8bSP"),l=a("7vrA"),d=a("3Z9Z"),b=a("6xyR"),u=a("65eO"),f=a("RAs/"),j=a("hVfy"),v=a("TSYQ"),m=a.n(v),O=a("q1tI"),p=a.n(O),y=(a("2W6z"),a("y8DL")),h=a("vUet"),x=a("Zeqi"),g=a("YGJp"),N=a("lcWJ"),C=a("F9IU"),P=a("ILyh"),w=p.a.createContext(null),k=function(){},E=p.a.forwardRef((function(e,t){var a,r,n=e.as,c=void 0===n?"ul":n,i=e.onSelect,s=e.activeKey,o=e.role,l=e.onKeyDown,d=Object(j.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(g.a)(),u=Object(O.useRef)(!1),v=Object(O.useContext)(P.a),m=Object(O.useContext)(w);m&&(o=o||"tablist",s=m.activeKey,a=m.getControlledId,r=m.getControllerId);var y=Object(O.useRef)(null),h=function(e){var t=y.current;if(!t)return null;var a=Object(x.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var n=a.indexOf(r);if(-1===n)return null;var c=n+e;return c>=a.length&&(c=0),c<0&&(c=a.length-1),a[c]},E=function(e,t){null!=e&&(i&&i(e,t),v&&v(e,t))};Object(O.useEffect)((function(){if(y.current&&u.current){var e=y.current.querySelector("[data-rb-event-key].active");e&&e.focus()}u.current=!1}));var S=Object(N.a)(t,y);return p.a.createElement(P.a.Provider,{value:E},p.a.createElement(C.a.Provider,{value:{role:o,activeKey:Object(P.b)(s),getControlledId:a||k,getControllerId:r||k}},p.a.createElement(c,Object(f.a)({},d,{onKeyDown:function(e){var t;switch(l&&l(e),e.key){case"ArrowLeft":case"ArrowUp":t=h(-1);break;case"ArrowRight":case"ArrowDown":t=h(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),u.current=!0,b())},ref:S,role:o}))))})),S=a("ZCiN"),_=p.a.forwardRef((function(e,t){var a=e.active,r=e.className,n=e.eventKey,c=e.onSelect,i=e.onClick,s=e.as,o=Object(j.a)(e,["active","className","eventKey","onSelect","onClick","as"]),l=Object(P.b)(n,o.href),d=Object(O.useContext)(P.a),b=Object(O.useContext)(C.a),u=a;if(b){o.role||"tablist"!==b.role||(o.role="tab");var v=b.getControllerId(l),y=b.getControlledId(l);o["data-rb-event-key"]=l,o.id=v||o.id,o["aria-controls"]=y||o["aria-controls"],u=null==a&&null!=l?b.activeKey===l:a}"tab"===o.role&&(o.disabled&&(o.tabIndex=-1,o["aria-disabled"]=!0),o["aria-selected"]=u);var h=Object(S.a)((function(e){i&&i(e),null!=l&&(c&&c(l,e),d&&d(l,e))}));return p.a.createElement(s,Object(f.a)({},o,{ref:t,onClick:h,className:m()(r,u&&"active")}))}));_.defaultProps={disabled:!1};var I=_,R={variant:void 0,active:!1,disabled:!1},K=p.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.active,n=e.disabled,c=e.className,i=e.variant,s=e.action,o=e.as,l=e.eventKey,d=e.onClick,b=Object(j.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(h.a)(a,"list-group-item");var u=Object(O.useCallback)((function(e){if(n)return e.preventDefault(),void e.stopPropagation();d&&d(e)}),[n,d]);return n&&void 0===b.tabIndex&&(b.tabIndex=-1,b["aria-disabled"]=!0),p.a.createElement(I,Object(f.a)({ref:t},b,{eventKey:Object(P.b)(l,b.href),as:o||(s?b.href?"a":"button":"div"),onClick:u,className:m()(c,a,r&&"active",n&&"disabled",i&&a+"-"+i,s&&a+"-action")}))}));K.defaultProps=R,K.displayName="ListGroupItem";var D=K,L={variant:void 0,horizontal:void 0},A=p.a.forwardRef((function(e,t){var a,r=Object(y.a)(e,{activeKey:"onSelect"}),n=r.className,c=r.bsPrefix,i=r.variant,s=r.horizontal,o=r.as,l=void 0===o?"div":o,d=Object(j.a)(r,["className","bsPrefix","variant","horizontal","as"]),b=Object(h.a)(c,"list-group");return a=s?!0===s?"horizontal":"horizontal-"+s:null,p.a.createElement(E,Object(f.a)({ref:t},d,{as:l,className:m()(n,b,i&&b+"-"+i,a&&b+"-"+a)}))}));A.defaultProps=L,A.displayName="ListGroup",A.Item=D;var z=A,q=a("zhAr"),B=a("8taD"),F=a.n(B),J=a("20a2"),T=a("cWnB"),U=a("/KrU"),Y=a("YFqc"),G=a.n(Y),M=function(e){var t=e.title,a=e.description,n=e.tags,c=e.version,i=e.favorite,s=e.onClickFavorite,o=e.filename,l=i?"fa fa-bookmark fa-sm fa-2x text-warning":"fa fa-bookmark-o fa-sm fa-2x",d=i?"delete":"add";return Object(r.jsxs)(z.Item,{className:[F.a.bgCardColor,F.a.borderGrey].join(" "),children:[Object(r.jsx)("button",{onClick:function(){return s(d,o,{title:t,description:a,tags:n})},style:{backgroundColor:"transparent"},className:"border-0 text-white float-right",children:Object(r.jsx)("span",{className:[" fa-sm fa-2x",l].join(" "),"aria-hidden":"true"})}),Object(r.jsx)("h4",{children:Object(r.jsx)("span",{className:F.a.titlePost,children:Object(r.jsx)(G.a,{href:"/".concat(o),children:t})})}),Object(r.jsx)(U.a,{tags:n}),Object(r.jsx)("p",{children:a}),Object(r.jsxs)(T.a,{variant:"outline-light",size:"sm",disabled:!0,children:[" DB  ",c]})]})},Q=a("dvwd"),W=a("YGJC"),Z=a("Yr8A");function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function X(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var $={includeScore:!0,keys:["title","description","tags","id"]};t.default=function(){var e=Object(J.useRouter)(),t=new W.a(Q.a,$),a=Object(O.useState)({}),n=a[0],f=a[1],j=Object(O.useState)([]),v=j[0],m=j[1],p=Object(O.useState)(""),y=p[0],h=p[1],x=Object(O.useState)(0),g=x[0],N=x[1],C=Math.ceil(v.length/3),P=function(e){var t=g+e;t>=0&&t<C&&N(t)},w=Object(O.useState)([]),k=w[0],E=w[1],S=function(e){var t=k,a=[].concat(Object(i.a)(t),[e]);E(a)};Object(O.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("keyword")||"";h(e),m(_(e));var t=JSON.parse(localStorage.getItem("favorites"))||{};f(t)}),[e.query.keyword]);var _=function(e){return t.search(e).map((function(e){return e.item}))},I=function(e,t,a){if("delete"===e)!function(e){n[e];var t=Object(c.a)(n,[e].map(X));f(t),localStorage.setItem("favorites",JSON.stringify(t))}(t),S("Bookmark removed succesfully!");else if("add"===e){var r=H({},n);r[t]=H({},a),f(r),localStorage.setItem("favorites",JSON.stringify(r)),S("Bookmark added succesfully!")}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{}),Object(r.jsx)(o.a,{}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d.a,{className:"d-flex justify-content-center p-4 text-white",children:Object(r.jsx)(b.a,{style:{width:"100%"},className:[F.a.bgCardColor].join(" "),children:Object(r.jsxs)(b.a.Body,{className:"ml-md-5 mr-md-5",children:[Object(r.jsxs)(b.a.Header,{className:[F.a.bgCardColor,F.a.borderGrey].join(" "),children:[Object(r.jsx)("h3",{children:"Results for:"}),Object(r.jsx)("h5",{children:y?'"'.concat(y,'"'):""}),Object(r.jsx)(u.a,{className:"position-absolute",variant:"light",style:{right:"0",top:"25%"},children:"Found: ".concat(v.length)})]}),Object(r.jsx)(z,{variant:"flush",children:v.length>0?v.slice(3*g,3*g+3).map((function(e){return Object(r.jsx)(M,{title:e.title,tags:e.tags,description:e.description,favorite:!!n[e.id],version:"12.3.3",filename:e.id,onClickFavorite:I},e.id)})):Object(r.jsx)("p",{children:"Your search did not match any document"})})]})})}),C>1?Object(r.jsx)(d.a,{className:"d-flex justify-content-center ",children:Object(r.jsxs)(q.a,{children:[Object(r.jsx)(q.a.Prev,{onClick:function(){return P(-1)}}),Object(r.jsx)(q.a.Item,{disabled:!0,children:g+1}),Object(r.jsx)(q.a.Next,{onClick:function(){return P(1)}})]})}):""]}),Object(r.jsx)("div",{style:{position:"fixed",bottom:"2%",right:"2%"},children:k?k.map((function(e,t){return Object(r.jsx)(Z.a,{description:e},t)})):""})]})}},zhAr:function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),c=a("TSYQ"),i=a.n(c),s=a("q1tI"),o=a.n(s),l=a("vUet"),d=a("dbZe"),b=o.a.forwardRef((function(e,t){var a=e.active,c=e.disabled,s=e.className,l=e.style,b=e.activeLabel,u=e.children,f=Object(n.a)(e,["active","disabled","className","style","activeLabel","children"]),j=a||c?"span":d.a;return o.a.createElement("li",{ref:t,style:l,className:i()(s,"page-item",{active:a,disabled:c})},o.a.createElement(j,Object(r.a)({className:"page-link",disabled:c},f),u,a&&b&&o.a.createElement("span",{className:"sr-only"},b)))}));b.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},b.displayName="PageItem";var u=b;function f(e,t,a){function r(e){var r=e.children,c=Object(n.a)(e,["children"]);return o.a.createElement(b,c,o.a.createElement("span",{"aria-hidden":"true"},r||t),o.a.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),r.displayName=e,r}var j=f("First","\xab"),v=f("Prev","\u2039","Previous"),m=f("Ellipsis","\u2026","More"),O=f("Next","\u203a"),p=f("Last","\xbb"),y=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.children,d=e.size,b=Object(n.a)(e,["bsPrefix","className","children","size"]),u=Object(l.a)(a,"pagination");return o.a.createElement("ul",Object(r.a)({ref:t},b,{className:i()(c,u,d&&u+"-"+d)}),s)}));y.First=j,y.Prev=v,y.Ellipsis=m,y.Item=u,y.Next=O,y.Last=p;t.a=y}},[["PLdM",0,2,1,3]]]);