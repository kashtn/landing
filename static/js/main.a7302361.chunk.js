(this["webpackJsonpmercury-test"]=this["webpackJsonpmercury-test"]||[]).push([[0],{102:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),s=n(14),a=n.n(s),l=(n(97),n(31));function o(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"navContainer",children:[Object(c.jsx)("div",{className:"logoContainer",children:Object(c.jsx)("h3",{children:"Logo"})}),Object(c.jsxs)("div",{className:"linksContainer",children:[Object(c.jsx)("div",{className:"link",children:Object(c.jsx)("p",{children:Object(c.jsx)(l.b,{className:"linkBtn",to:"/",children:"Link1"})})}),Object(c.jsx)("div",{className:"link",children:Object(c.jsx)("p",{children:Object(c.jsx)(l.b,{className:"linkBtn",to:"/",children:"Link2"})})}),Object(c.jsx)("div",{className:"link",children:Object(c.jsx)("p",{children:Object(c.jsx)(l.b,{className:"linkBtn",to:"/",children:"Link3"})})}),Object(c.jsx)("div",{className:"link",children:Object(c.jsx)("p",{children:Object(c.jsx)(l.b,{className:"linkBtn",to:"/",children:"Link4"})})})]})]})})}var j=n(25),d=(n(102),n(21)),b=n(128),h=(n(104),n(53)),u=n(54);function O(){var e=Object(h.a)(["\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n"]);return O=function(){return e},e}function m(){var e=Object(h.a)(['\n  font-size: 25px;\n  font-family: "Quicksand", sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding: 5px 60px;\n  background-color: rgb(53, 181, 236);\n  color: white;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n']);return m=function(){return e},e}var x=u.a.button(m()),p=u.a.input(O()),g=n(55),f=n.n(g),v=n(72),N="AUTH",C="ADD_CLIENT",y="SET_POSTS",k=n(73),w=n.n(k);function S(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)(),a=Object(j.a)(s,2),l=a[0],o=a[1],h=Object(i.useState)(),u=Object(j.a)(h,2),O=u[0],m=u[1],g=Object(d.b)(),f=Object(d.c)((function(e){return e})).auth,v=function(){r((function(e){return!e}))},C=function(e){e.preventDefault(),"admin"===l&&"123"===O&&(g({type:N,payload:!0}),v())};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"loginContainer",children:Object(c.jsxs)("div",{className:"loginContent",children:[f?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("p",{className:"title",children:"Welcome Home!"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"title",children:"Hello, stranger"}),Object(c.jsx)(x,{onClick:v,children:"Login"})]}),Object(c.jsx)(b.a,{title:"Sign In",visible:n,footer:null,onCancel:function(){r(!1)},children:Object(c.jsxs)("form",{name:"loginForm",children:["admin"!==l&&(null===l||void 0===l?void 0:l.length)>0&&Object(c.jsx)("p",{className:"error",children:"Wrong login!"}),Object(c.jsx)(p,{required:!0,name:"login",type:"text",placeholder:"Login: admin",onChange:function(e){o(e.target.value)}}),"123"!==O&&(null===O||void 0===O?void 0:O.length)>0&&Object(c.jsx)("p",{className:"error",children:"Wrong password!"}),Object(c.jsx)(p,{required:!0,name:"password",type:"password",placeholder:"Pass: 123",onChange:function(e){m(e.target.value)}}),Object(c.jsx)(x,{type:"submit",onClick:function(e){C(e)},children:"Sign In"})]})})]})})})}n(122);function F(){var e=Object(d.b)();Object(i.useEffect)((function(){e(function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/photos");case 2:n=e.sent,t((c=n.data.filter((function(e){return e.id<5})),{type:y,payload:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(d.c)((function(e){return e})).posts,n=Object(i.useState)(1),r=Object(j.a)(n,2),s=r[0],a=r[1],l=Object(i.useState)(),o=Object(j.a)(l,2),b=o[0],h=o[1];return Object(i.useEffect)((function(){var e=null===t||void 0===t?void 0:t.find((function(e){return e.id===s}));h(e)}),[t,s]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"sliderContainer",children:[Object(c.jsxs)("div",{className:"topContent",children:[Object(c.jsx)("div",{className:"leftArrow",children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){a((function(e){return s>1?e-1:4}))},children:Object(c.jsx)("i",{className:"arrow",children:"Left"})})})})}),Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{alt:"/",src:b&&b.url})}),Object(c.jsx)("div",{className:"rightArrow",children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){a((function(e){return s<4?e+1:1}))},children:Object(c.jsx)("i",{className:"arrow",children:"Right"})})})})})]}),Object(c.jsx)("div",{className:"bottomContent",children:null===t||void 0===t?void 0:t.map((function(e){return Object(c.jsx)("div",{className:"sliderDot",children:Object(c.jsx)("button",{onClick:function(){a(e.id)}})},e.id)}))})]})})}n(123);function T(){var e=Object(d.c)((function(e){return e})).posts;return Object(c.jsx)(c.Fragment,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(c.jsxs)("div",{className:"cardContainer",children:[Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{alt:"/",src:e.url})}),Object(c.jsxs)("div",{className:"contentContainer",children:[Object(c.jsx)("h6",{className:"title",children:"Title"}),Object(c.jsx)("p",{children:'The replaced content is scaled to maintain its aspect ratio while fitting within the element\u2019s content box. The entire object is made to fill the box, while preserving its aspect ratio, so the object will be "letterboxed" if its aspect ratio does not match the aspect ratio of the box.'})]})]},e.id)}))})}n(124);function L(){var e=Object(d.b)(),t=Object(i.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],a=Object(i.useState)(""),l=Object(j.a)(a,2),o=l[0],h=l[1],u=Object(i.useState)(""),O=Object(j.a)(u,2),m=O[0],g=O[1],f=/^([a-zA-Z])+$/,v=/^(([8])+([9])+([0-9]){9})$/,N=function(t){t.preventDefault(),f.test(r)&&f.test(o)&&v.test(m)?(e({type:C,payload:{name:r,lastName:o,tel:m}}),s(""),h(""),g(""),b.a.success({content:"Success!",centered:!0})):b.a.error({content:"Please fill inputs correct!",centered:!0})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"formContainer",children:[Object(c.jsx)("h1",{className:"title",children:"Form"}),Object(c.jsxs)("form",{name:"submitForm",children:[!f.test(r)&&r.length>0&&Object(c.jsx)("p",{className:"error",children:"Wrong name! (only latin)"}),Object(c.jsx)(p,{required:!0,name:"firstName",type:"text",placeholder:"First name",value:r,onChange:function(e){s(e.target.value)}}),!f.test(o)&&o.length>0&&Object(c.jsx)("p",{className:"error",children:"Wrong last name! (only latin)"}),Object(c.jsx)(p,{name:"lastName",type:"text",placeholder:"Last name",value:o,onChange:function(e){h(e.target.value)}}),!v.test(m)&&m.length>0&&Object(c.jsx)("p",{className:"error",children:"Wrong telephone number!"}),Object(c.jsx)(p,{required:!0,name:"tel",type:"tel",maxLength:"11",placeholder:"Phone number",value:m,onChange:function(e){g(e.target.value)}}),Object(c.jsx)(x,{type:"submit",onClick:function(e){N(e)},children:"Submit"})]})]}),Object(c.jsxs)("div",{className:"imagesContainer",children:[Object(c.jsxs)("div",{className:"back",children:[Object(c.jsx)("div",{className:"left",children:Object(c.jsx)("img",{width:"200",height:"240",alt:"/",src:"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"})}),Object(c.jsx)("div",{className:"right",children:Object(c.jsx)("img",{width:"200",height:"240",alt:"/",src:"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"})})]}),Object(c.jsx)("div",{className:"front",children:Object(c.jsx)("img",{height:"200",width:"300",alt:"/",src:"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"})})]})]})}n(125);var _=n(33),D=n(83),I=n(86),W=n(30),B={auth:!1,clientsToCall:[],posts:[]};var P=n(84),z=JSON.parse(localStorage.getItem("redux"))||{},A=Object(_.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(W.a)(Object(W.a)({},e),{},{auth:t.payload});case C:return Object(W.a)(Object(W.a)({},e),{},{clientsToCall:[].concat(Object(I.a)(e.clientsToCall),[t.payload])});case y:return Object(W.a)(Object(W.a)({},e),{},{posts:t.payload});default:return Object(W.a)({},e)}}),z,Object(P.composeWithDevTools)(Object(_.applyMiddleware)(D.a)));A.subscribe((function(){localStorage.setItem("redux",JSON.stringify(A.getState()))}));var E=A,q=n(10);var J=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(q.b,{children:Object(c.jsx)(d.a,{store:E,children:Object(c.jsxs)("div",{className:"mainContainer",children:[Object(c.jsx)("div",{className:"navigationContainer",children:Object(c.jsx)(o,{})}),Object(c.jsxs)("div",{className:"headerOneContainer",children:[Object(c.jsx)(S,{}),Object(c.jsx)(F,{})]}),Object(c.jsx)("div",{className:"headerTwoContainer",children:Object(c.jsx)(T,{})}),Object(c.jsx)("div",{className:"headerThreeContainer",children:Object(c.jsx)(L,{})}),Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("h1",{children:"Copyright \xa9 2021"})})]})})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),H()},97:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.a7302361.chunk.js.map