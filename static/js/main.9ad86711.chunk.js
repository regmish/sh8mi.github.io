(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),m=(a(45),a(6)),s=a(121),o=a(3),l=Object(n.createContext)(),u=a(38),i=(a(47),function(){return Object(n.useEffect)(function(){setInterval(r,1e3);var e=document.querySelector("[data-hour-hand]"),t=document.querySelector("[data-minute-hand]"),a=document.querySelector("[data-second-hand]"),n=document.querySelector("[data-digital]");function r(){var r=new Date,m=r.getHours()<10?"0".concat(r.getHours()):r.getHours(),s=r.getMinutes()<10?"0".concat(r.getMinutes()):r.getMinutes(),o=r.getSeconds()<10?"0".concat(r.getSeconds()):r.getSeconds(),l="".concat(m," : ").concat(s," : ").concat(o),u=r.getSeconds()/60,i=(u+r.getMinutes())/60,d=(i+r.getHours())/12;c(a,u),c(t,i),c(e,d),n.innerHTML=l}function c(e,t){e.style.setProperty("--rotation",360*t)}r()}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"hand hour","data-hour-hand":!0}),r.a.createElement("div",{className:"hand minute","data-minute-hand":!0}),r.a.createElement("div",{className:"hand second","data-second-hand":!0}),r.a.createElement("div",{className:"number number1"},"1"),r.a.createElement("div",{className:"number number2"},"2"),r.a.createElement("div",{className:"number number3"},"3"),r.a.createElement("div",{className:"number number4"},"4"),r.a.createElement("div",{className:"number number5"},"5"),r.a.createElement("div",{className:"number number6"},"6"),r.a.createElement("div",{className:"number number7"},"7"),r.a.createElement("div",{className:"number number8"},"8"),r.a.createElement("div",{className:"number number9"},"9"),r.a.createElement("div",{className:"number number10"},"10"),r.a.createElement("div",{className:"number number11"},"11"),r.a.createElement("div",{className:"number number12"},"12")),r.a.createElement("div",{className:"digital","data-digital":!0}))}),d=(a(49),function(){return r.a.createElement(i,null)}),b=a(7),p=a.n(b),E=a(12),v=a(4),N=a(8),f=(a(35),a(94),a(20)),g=a.n(f),h=a(5),O="https://api.shankar.xyz",j=function(){var e={};return localStorage.getItem("TOKEN")&&(e.Authorization=localStorage.getItem("TOKEN")),e},w=function(e,t){return console.log("POST /".concat(e)),g.a.post("".concat(O,"/").concat(e),t,{headers:j()}).then(function(e){return"OK"===Object(h.get)(e,"data.status")?Object(h.get)(e,"data.data"):null}).catch(function(e){throw Object(h.get)(e,"response.data.error",{message:"Unknown Error !!"})})},x=function(e,t){var a=Object(n.useState)({error:"",firstName:"",lastName:"",email:"",password:""}),c=Object(m.a)(a,2),s=c[0],o=c[1],l=function(e){var t,a=e.target;o(Object(N.a)({},s,(t={},Object(v.a)(t,a.name,a.value),Object(v.a)(t,"error",""),t)))},u=function(){var e=Object(E.a)(p.a.mark(function e(t){var a,n,r,c,m;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=s.firstName,n=s.lastName,r=s.email,c=s.password,e.prev=2,e.next=5,w("auth/register",{firstName:a,lastName:n,email:r,password:c});case 5:m=e.sent,q.push("/login",{username:m.username}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o(Object(N.a)({},s,{error:e.t0.message}));case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"heading"},"Signup")),r.a.createElement("div",{className:"text-center error-text "+(s.error?"":"visibility-hidden")},r.a.createElement("span",null,s.error)),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",placeholder:"First Name",name:"firstName",id:"firstName",value:s.firstName,onChange:l,required:!0}),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",placeholder:"Last Name",name:"lastName",id:"lastName",value:s.lastName,onChange:l,required:!0}),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",placeholder:"Email",name:"email",id:"email",value:s.email,onChange:l,required:!0}),r.a.createElement("input",{type:"password",className:"form-control col-sm-9",placeholder:"Password",name:"password",id:"password",value:s.password,onChange:l,required:!0}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn login-btn"},"Sign up"))))},y=function(e){var t=e.component,a=Object(u.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return r.a.createElement(t,e)}}))},S=Object(s.e)(function(){return r.a.createElement(s.d,null,r.a.createElement(y,{component:d,exact:!0,path:"/"}),r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return r.a.createElement(s.a,{to:"/"})}}),r.a.createElement(s.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(s.a,{to:"/"})}}),r.a.createElement(s.b,{exact:!0,path:"/register",component:x}),r.a.createElement(s.a,{to:"/"}))}),q=Object(o.a)();Object(c.render)(r.a.createElement(function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1];return r.a.createElement(l.Provider,{value:{store:a,setContext:c}},r.a.createElement(s.c,{history:q},r.a.createElement(S,null)))},null),document.getElementById("root"))},40:function(e,t,a){e.exports=a(120)},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},94:function(e,t,a){}},[[40,2,1]]]);
//# sourceMappingURL=main.9ad86711.chunk.js.map