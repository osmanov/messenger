(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(51),a=n.n(i),o=n(138),c=n(90),s=n(22),u=n(131),l=n(132),d=n(36),b=n(5),j=n(130),h=n(88);function f(){return new Promise((function(e){setTimeout((function(){e([{id:"1",name:"Tomas Haake",instrument:"drums"},{id:"2",name:"Tom Morello",instrument:"guitar"},{id:"3",name:"Chino Moreno",instrument:"singer"},{id:"4",name:"Mike Patton",instrument:"singer"},{id:"5",name:"Bj\xf6rk",instrument:"singer"},{id:"6",name:"Aurora Aksnes",instrument:"singer"}])}),1e3)}))}function g(){return Object(s.useQuery)("users",f)}var m=n(4),x=r.createContext({isMobileSidebarStretched:!1,toggleMobileSidebarToStretched:function(){},isMobileContentManualClose:!1,toggleMobileContentManualClose:function(){}});function O(){var e=r.useContext(x);if(!e)throw new Error("useLayout must be used within a LayoutProvider");return e}function v(e){var t=Object(j.a)(),n=Object(b.a)(t,2),i=n[0],a=n[1],o=Object(j.a)(),c=Object(b.a)(o,2),s=c[0],u=c[1],l=Object(h.a)("(max-width: 30em)"),f=Object(b.a)(l,1)[0],g=w().id;r.useEffect((function(){f?a.on():(a.off(),u.off())}),[f,a,u]),r.useEffect((function(){g?u.off():u.on()}),[g,u]);var O={isMobileSidebarStretched:i,toggleMobileSidebarToStretched:a.toggle,isMobileContentManualClose:s,toggleMobileContentManualClose:u.toggle};return Object(m.jsx)(x.Provider,Object(d.a)({value:O},e))}var p=r.createContext({id:null,setId:function(e){},meta:null});function w(){var e=r.useContext(p);if(!e)throw new Error("useActiveUser must be used within an ActiveProvider");return e}function y(e){var t=r.useState(null),n=Object(b.a)(t,2),i=n[0],a=n[1],o=r.useState(null),c=Object(b.a)(o,2),s=c[0],u=c[1],l=g().data;r.useEffect((function(){if(i){var e=(null===l||void 0===l?void 0:l.find((function(e){return e.id===i})))||null;u(e)}else u(null)}),[i,u,l]);var j={id:i,setId:a,meta:s};return Object(m.jsx)(p.Provider,Object(d.a)({value:j},e))}var C=function(e){var t=e.sidebar,n=e.children;return Object(m.jsx)(y,{children:Object(m.jsx)(v,{children:Object(m.jsxs)(u.a,{h:"100vh",children:[Object(m.jsx)(S,{children:t}),Object(m.jsx)(M,{children:n})]})})})};function S(e){var t=e.children,n=O(),r=n.isMobileSidebarStretched,i=n.isMobileContentManualClose;return r&&!i?null:Object(m.jsx)(l.a,{w:["100%","30%","20%"],bg:"white",borderRight:"1px",borderColor:"gray.300",children:t})}var M=function(e){var t=e.children,n=O().isMobileContentManualClose;return Object(m.jsx)(l.a,{flex:"1",w:[n?0:"100%","70%","80%"],bgGradient:"linear(to-r, green.300, yellow.200)",children:t})},k=n(133),I=n(141),P=n(140),T=n(134);function B(){var e=g(),t=e.isLoading,n=e.data,r=w(),i=r.setId,a=r.id;return t?Object(m.jsx)(k.a,{h:"100%",children:Object(m.jsx)(I.a,{})}):Object(m.jsx)(m.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e,t){var n=e.id,r=e.name,o=e.instrument,c=a===n;return Object(m.jsxs)(u.a,{p:3,onClick:function(){i(n)},bg:c?"blue.400":"white",color:c?"white":"black",cursor:"pointer",_hover:{background:c?"":"gray.100"},children:[Object(m.jsx)(P.a,{children:Object(m.jsx)(P.b,{boxSize:"1.25em",bg:t%2?"green.500":"tomato"})}),Object(m.jsxs)(l.a,{ml:"3",children:[Object(m.jsx)(T.a,{fontWeight:"bold",children:r}),Object(m.jsx)(T.a,{fontSize:"sm",children:o})]})]},n)}))})}var E=n(135),F=n(136),L=n(139),A=n(142),Q=n(15),D=n(44),U=n.n(D),W=n(70);function J(){return new Promise((function(e){setTimeout((function(){e(JSON.parse(localStorage.getItem("allUsersMessages")))}),1)}))}function z(){return(z=Object(W.a)(U.a.mark((function e(t){var n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,r=n[t]||[],e.abrupt("return",Promise.resolve(r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(W.a)(U.a.mark((function e(t){var n,r,i,a,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.text,r=t.userId,e.next=3,J();case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:return i=e.t0,a=i[r],o={text:n,date:new Date},i[r]=a?[].concat(Object(Q.a)(a),[o]):[o],localStorage.setItem("allUsersMessages",JSON.stringify(i)),e.abrupt("return",Object(d.a)(Object(d.a)({},o),{},{userId:r}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return Object(s.useQuery)(["messagesByUserId",e],(function(){return function(e){return z.apply(this,arguments)}(e)}))}function R(e){var t=Object(s.useMutation)((function(e){return function(e){return H.apply(this,arguments)}(e)}),e);return t}function K(){var e=w(),t=e.setId,n=e.meta;return Object(m.jsxs)(u.a,{bg:"white",h:"8%",borderBottom:"1px",borderColor:"gray.300",p:2,alignItems:"center",children:[Object(m.jsx)(E.a,{above:"sm",children:Object(m.jsx)(A.a,{cursor:"pointer",onClick:function(){t(null)},mr:2})}),Object(m.jsx)(T.a,{fontWeight:"bold",children:null===n||void 0===n?void 0:n.name})]})}function q(e){var t=e.children;return Object(m.jsx)(k.a,{h:"100%",color:"white",children:Object(m.jsx)(F.a,{children:t})})}function G(){var e=w(),t=e.id,n=e.meta,i=N(t),a=i.data,o=i.isLoading,c=X().toBottom,s=!!(null===a||void 0===a?void 0:a.length);r.useLayoutEffect((function(){s&&c()}),[s,c]);var d=t?"77%":"100%";return!s&&n?Object(m.jsx)(l.a,{h:d,children:o?Object(m.jsx)(k.a,{h:"100%",children:Object(m.jsx)(I.a,{})}):Object(m.jsxs)(q,{children:["Say Hi to ",n.name,"\ud83d\udc4b"]})}):Object(m.jsx)(u.a,{className:"scrollable-area",h:d,alignItems:"end",justifyContent:"end",overflow:"scroll",flexFlow:"row wrap",p:5,children:Object(m.jsx)(l.a,{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(m.jsx)(l.a,{textAlign:"right",children:Object(m.jsxs)(l.a,{borderRadius:"6",borderEndEndRadius:"0",p:2,bg:"white",mb:3,display:"inline-block",textAlign:"left",children:[Object(m.jsx)(T.a,{fontSize:"xs",color:"gray.300",children:new Date(e.date).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})}),(n=e.text,n.split("\n")).map((function(e,t){return Object(m.jsx)(l.a,{children:e},t)}))]},e.date.toString())},t);var n}))})})}function X(){return{toBottom:function(){var e=document.querySelector(".scrollable-area");e&&(e.scrollTop=e.scrollHeight)}}}function $(){var e=w().id,t=X().toBottom,n=O().isMobileSidebarStretched;return r.useEffect((function(){e&&t()}),[e,t]),Object(m.jsx)(m.Fragment,{children:e?Object(m.jsx)(G,{}):n?null:Object(m.jsx)(q,{children:"Select a chat to start messaging"})})}function _(){var e=Object(s.useQueryClient)(),t=r.useState(""),n=Object(b.a)(t,2),i=n[0],a=n[1],o=w().id,c=R({onSuccess:function(){e.invalidateQueries(["messagesByUserId",o]),a("")}});return Object(m.jsx)(l.a,{h:"15%",display:"flex",alignItems:"center",paddingX:5,bg:"white",borderTop:"1px",borderColor:"gray.300",children:Object(m.jsx)("form",{style:{width:"100%"},onKeyDown:function(e){return function(e){if(13===e.keyCode&&!e.shiftKey){e.preventDefault();var t=e.target.value.trim();""!==t&&c.mutate({text:t,userId:o})}}(e)},children:Object(m.jsx)(L.a,{name:"message",placeholder:"Write a message...",value:i,onChange:function(e){a(e.target.value)}})})})}var V=function(){var e=w().id;return Object(m.jsxs)(m.Fragment,{children:[e?Object(m.jsx)(K,{}):null,Object(m.jsx)($,{}),e?Object(m.jsx)(_,{}):null]})},Y=new s.QueryClient,Z=function(){return Object(m.jsx)(o.a,{theme:c.theme,children:Object(m.jsx)(s.QueryClientProvider,{client:Y,children:Object(m.jsx)(C,{sidebar:Object(m.jsx)(B,{}),children:Object(m.jsx)(V,{})})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(r.StrictMode,{children:Object(m.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ee()}},[[116,1,2]]]);
//# sourceMappingURL=main.dd91a739.chunk.js.map