(this["webpackJsonpget-request-app"]=this["webpackJsonpget-request-app"]||[]).push([[0],{39:function(t,e,c){},40:function(t,e,c){},64:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),a=c(29),i=c.n(a),j=(c(39),c(40),c(9)),r=c(3),o=c(1);function l(){return Object(o.jsx)("h1",{children:"About Page"})}function b(){return Object(o.jsx)("h1",{children:"Contact Page"})}function h(){return Object(o.jsxs)("div",{className:"navigation-bar",children:[Object(o.jsx)("h1",{children:"Logo"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(j.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(j.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(j.b,{to:"/contact",children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)(j.b,{to:"/users",children:"Users"})})]})]})}function d(){return Object(o.jsx)("h1",{children:"Home Page"})}var u=c(15),O=c(14),x=c.n(O),f=c(11);function m(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],s=e[1];Object(n.useEffect)((function(){x.a.get("https://reqres.in/api/users").then((function(t){console.log(t.data.data),s(t.data.data)})).catch((function(t){console.log(t)}))}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.a,{children:Object(o.jsx)("title",{children:"Users List"})}),c.map((function(t){return Object(o.jsx)("div",{className:"users-container",children:Object(o.jsxs)(j.b,{to:"/user/".concat(t.id),children:[Object(o.jsx)("img",{src:t.avatar,alt:"".concat(t.first_name," ").concat(t.last_name)}),Object(o.jsxs)("h1",{children:[t.first_name," ",t.last_name]}),Object(o.jsx)("p",{children:t.email})]})},t.id)}))]})}function p(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],s=e[1],a=Object(r.f)().id;return Object(n.useEffect)((function(){x.a.get("https://reqres.in/api/users/".concat(a)).then((function(t){console.log(t.data.data),s(t.data.data)})).catch((function(t){console.log(t)}))}),[]),Object(o.jsxs)("div",{className:"user-container",children:[Object(o.jsx)(f.a,{children:Object(o.jsx)("title",{children:"".concat(c.first_name," ").concat(c.last_name)})}),Object(o.jsx)("img",{src:c.avatar,alt:c.first_name}),Object(o.jsxs)("h1",{children:[c.first_name," ",c.last_name]}),Object(o.jsx)("p",{children:c.email})]})}var g=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.a,{children:Object(o.jsx)("title",{children:"Welcome"})}),Object(o.jsx)(h,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",exact:!0,children:Object(o.jsx)(d,{})}),Object(o.jsx)(r.a,{path:"/about",component:l}),Object(o.jsx)(r.a,{path:"/contact",component:b}),Object(o.jsx)(r.a,{path:"/users",component:m}),Object(o.jsx)(r.a,{path:"/user/:id",component:p})]})]})})},v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),s(t),a(t),i(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),v()}},[[64,1,2]]]);
//# sourceMappingURL=main.82e05109.chunk.js.map