(self.webpackChunkyacd=self.webpackChunkyacd||[]).push([[507],{77098:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return se}});r(82526),r(57327),r(89554),r(49337),r(54747);var n=r(34699),o=r(96156),i=r(85893),c=r(86010),s=r(67294),a=r(69834),l=(r(41539),r(88674),r(39714),r(23123),r(97943));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d,v,g,h="/logs",p=new TextDecoder("utf-8"),y=!1,b=!1,j="";function O(e,t){var r;try{r=JSON.parse(e)}catch(t){console.log("JSON.parse error",JSON.parse(e))}var n=new Date,o=n.toLocaleString("zh-Hans");r.time=o,r.id=+n-0+Math.floor(65536*(1+Math.random())).toString(16),r.even=y=!y,t(r)}function m(e,t){return e.read().then((function(r){for(var n=r.done,o=r.value,i=p.decode(o,{stream:!n}),c=(j+=i).split("\n"),s=c[c.length-1],a=0;a<c.length-1;a++)O(c[a],t);return n?(O(s,t),j="",console.log("GET /logs streaming done"),void(b=!1)):(j=s,m(e,t))}))}function w(e,t){if(!b&&1!==g){g=1;var r=(0,l.P)(e,h),n=new WebSocket(r);n.addEventListener("error",(function(){return g=3})),n.addEventListener("close",(function(r){g=3,function(e,t){if(!v||d.baseURL===e.baseURL&&d.secret===e.secret&&d.logLevel===e.logLevel){if(b)return}else v.abort();b=!0,d=f({},e);var r=(v=new AbortController).signal,n=(0,l.g)(e),o=n.url,i=n.init;fetch(o+h+"?level="+e.logLevel,f(f({},i),{},{signal:r})).then((function(e){m(e.body.getReader(),t)}),(function(e){b=!1,r.aborted||console.log("GET /logs error:",e.message)}))}(e,t)})),n.addEventListener("message",(function(e){O(e.data,t)}))}}var x=r(87462),P=r(6055),S=r(92669),L=r(49522),N=r(82569),k="_3rlaagQhmO",E="_1Y8l2FW3db",C="_3RhnPkHfE2",D="o1S9cV4T0R",Z="_3GIdCSyyS7",T="lUDfnPiNdD",_="PaFzglKCf5",R="_29b6nIu_GY",z=r(80125),Y=r(45697),H=r.n(Y);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var G=(0,s.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,c=U(e,["color","size"]);return s.createElement("svg",I({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),s.createElement("circle",{cx:"11",cy:"11",r:"8"}),s.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));G.propTypes={color:H().string,size:H().oneOfType([H().string,H().number])},G.displayName="Search";var J=G,Q="_2QPZldYe9U",B="_2PCUI90lIf",K="xOYTLnYrng",M="_1JKQs_Qawx",W="_2km92h_dfH";var $=function(e){var t=e.dispatch,r=e.searchText,o=e.updateSearchText,c=(0,s.useState)(r),a=(0,n.Z)(c,2),l=a[0],u=a[1],f=(0,s.useCallback)((function(e){t(o(e))}),[t,o]),d=(0,s.useMemo)((function(){return(0,z.Z)(f,300)}),[f]);return(0,i.jsx)("div",{className:Q,children:(0,i.jsxs)("div",{className:B,children:[(0,i.jsx)("div",{className:K,children:(0,i.jsx)("input",{type:"text",value:l,onChange:function(e){u(e.target.value),d(e.target.value)},className:M})}),(0,i.jsx)("div",{className:W,children:(0,i.jsx)(J,{size:20})})]})})},A=r(85295),F=(0,A.$j)((function(e){return{searchText:(0,L.Rv)(e),updateSearchText:L.AR}}))($),V=r(4541);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=s.useCallback,te=s.memo,re=s.useEffect,ne={debug:"none",info:"#454545",warning:"#b99105",error:"#c11c1c"};function oe(e){var t=e.time,r=e.even,n=e.payload,o=e.type,s=(0,c.Z)({even:r},T);return(0,i.jsx)("div",{className:s,children:(0,i.jsxs)("div",{className:k,children:[(0,i.jsx)("div",{className:C,children:t}),(0,i.jsx)("div",{className:E,style:{backgroundColor:ne[o]},children:o}),(0,i.jsx)("div",{className:D,children:n})]})})}function ie(e,t){return t[e].id}var ce=te((function(e){var t=e.index,r=e.style,n=e.data[t];return(0,i.jsx)("div",{style:r,children:(0,i.jsx)(oe,q({},n))})}),a.wy);var se=(0,A.$j)((function(e){return{logs:(0,L.Xs)(e),logLevel:(0,S.ZO)(e),apiConfig:(0,P.Y$)(e)}}))((function(e){var t=e.dispatch,r=e.logLevel,o=e.apiConfig,c=e.logs,s=ee((function(e){t((0,L.TH)(e))}),[t]);re((function(){w(q(q({},o),{},{logLevel:r}),s)}),[o,r,s]);var l=(0,x.Z)(),u=(0,n.Z)(l,2),f=u[0],d=u[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(N.Z,{title:"日志"}),(0,i.jsx)(F,{}),(0,i.jsx)("div",{ref:f,style:{paddingBottom:30},children:0===c.length?(0,i.jsxs)("div",{className:_,style:{height:d-30},children:[(0,i.jsx)("div",{className:R,children:(0,i.jsx)(V.Z,{width:200,height:200})}),(0,i.jsx)("div",{children:"尚无日志，请稍等..."})]}):(0,i.jsx)("div",{className:Z,children:(0,i.jsx)(a.t7,{height:d-30,width:"100%",itemCount:c.length,itemSize:80,itemData:c,itemKey:ie,children:ce})})})]})}))},87462:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(34699),o=r(67294),i=o.useState,c=o.useRef,s=o.useCallback,a=o.useLayoutEffect;function l(){var e=c(null),t=i(200),r=(0,n.Z)(t,2),o=r[0],l=r[1],u=s((function(){var t=e.current.getBoundingClientRect().top;l(window.innerHeight-t)}),[]);return a((function(){return u(),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[u]),[e,o]}}}]);
//# sourceMappingURL=logs.e13de7d7543506850466.js.map