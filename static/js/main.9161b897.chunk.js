(this["webpackJsonptodolist-react-app"]=this["webpackJsonptodolist-react-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),u=(n(12),n(6)),i=n(3),o=(n(13),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,e.text,r.a.createElement("i",{className:"fa fa-trash",onClick:function(){e.onSelect(e.id)},"aria-hidden":"true"})))}),m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),m=Object(i.a)(c,2),s=m[0],f=m[1],d=function(e){f((function(t){return t.filter((function(t,n){return n!==e}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"ToDo List ",r.a.createElement("i",{className:"fa fa-bomb",title:"Clear List",onClick:function(){f([])},"aria-hidden":"true"})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f((function(e){return[].concat(Object(u.a)(e),[n])})),l("")},className:"taskfield"},r.a.createElement("input",{type:"text",onChange:function(e){l(e.target.value)},value:n,name:"itemField",placeholder:"Add a Task",required:!0}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))),r.a.createElement("ol",null,s.map((function(e,t){return r.a.createElement(o,{key:t,id:t,text:e,onSelect:d})}))))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"todo"},r.a.createElement(m,null)))};n(14);c.a.render(r.a.createElement(s,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.9161b897.chunk.js.map