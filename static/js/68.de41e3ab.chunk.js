"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[68],{6068:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,i,o,a,c,l,s,u,d=r(2791),p=r(9434),x=r(4270),m=r(168),h=r(5867),f=h.zo.ul(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 30px;\n"]))),b=h.zo.li(i||(i=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n  list-style: circle;\n  margin-left: 30px;\n"]))),g=h.zo.button(o||(o=(0,m.Z)(["\n  display: inline-block;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background-color: white;\n  cursor: pointer;\n"]))),j=r(3634),v=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},w=function(n){return n.filter},Z=r(184),z=function(){var n=(0,p.I0)(),e=(0,p.v9)(v),r=(0,p.v9)(w),t=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,Z.jsx)(Z.Fragment,{children:t.length>0&&(0,Z.jsx)(f,{children:t.map((function(e){return(0,Z.jsxs)(b,{children:[(0,Z.jsxs)("p",{children:[e.name,": ",e.number]}),(0,Z.jsx)(g,{onClick:function(){return r=e.id,void n((0,j.GK)(r));var r},children:"Delete"})]},e.id)}))})})},C=r(5705),q=(0,h.zo)(C.l0)(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 500px;\n  border: 1px solid black;\n"]))),F=h.zo.label(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),_=(0,h.zo)(C.gN)(l||(l=(0,m.Z)(["\n  margin-top: 10px;\n  width: 200px;\n"]))),I=h.zo.button(s||(s=(0,m.Z)(["\n  display: block;\n  width: 150px;\n  border-radius: 5px;\n  background-color: lightblue;\n  cursor: pointer;\n"]))),R=r(8007),L=R.Ry().shape({name:R.Z_().required("Required"),number:R.Z_().required("Required")}),N=function(){var n=(0,p.I0)(),e=(0,p.v9)(v);return(0,Z.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:L,onSubmit:function(r,t){var i;i=r,e.some((function(n){return n.name===i.name}))?alert("".concat(i.name," is already in contacts.")):n((0,j.uK)(i)),t.resetForm()},children:(0,Z.jsxs)(q,{children:[(0,Z.jsxs)(F,{children:["Name",(0,Z.jsx)(_,{name:"name"})]}),(0,Z.jsxs)(F,{children:["Number",(0,Z.jsx)(_,{name:"number"})]}),(0,Z.jsx)(I,{type:"submit",children:"Add contact"})]})})},E=h.zo.p(u||(u=(0,m.Z)(["\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]))),K=r(4808),S=function(){var n=(0,p.v9)(w),e=(0,p.I0)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(E,{children:"Find contact by name"}),(0,Z.jsx)("input",{type:"text",name:"search",placeholder:"Type name",value:n,onChange:function(n){return r=n.target.value,void e((0,K.E)(r));var r}})]})};function A(){var n=(0,p.I0)(),e=(0,p.v9)(y),r=(0,p.v9)(k);return(0,d.useEffect)((function(){n((0,j.yF)())}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(x.q,{children:(0,Z.jsx)("title",{children:"Phonebook"})}),(0,Z.jsx)(N,{}),(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsx)("div",{children:e&&!r&&(0,Z.jsx)("b",{children:"Request in progress..."})}),(0,Z.jsx)(S,{}),(0,Z.jsx)(z,{})]})}}}]);
//# sourceMappingURL=68.de41e3ab.chunk.js.map