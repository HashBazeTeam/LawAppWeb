"use strict";(self.webpackChunkLaw_web_app=self.webpackChunkLaw_web_app||[]).push([[666],{6451:function(e,a,r){r.d(a,{Tz:function(){return u},dM:function(){return s},sA:function(){return o}});var n=r(4942),l=(r(29867),r(4904)),t=(r(68803),r(10444)),i=r(92834);function s(e){var a=e.label,r=e.name,n=e.placeholder,t=e.value,s=e.onChange,o=e.error,u=e.readOnly,c=void 0!==u&&u,d=e.mdSize,m=void 0===d?12:d,p=e.type,h=void 0===p?"text":p,v=e.required,b=void 0===v||v,f=e.multiple,x=void 0===f||f,g=e.uppercase,N=void 0!==g&&g,j=e.inputClassName,C=void 0===j?"":j;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.b7,{className:"mb-3",xs:12,md:m,children:[(0,i.jsx)(l.L8,{htmlFor:r,className:N?"uppercase":"",children:"".concat(a).concat(b?"*":"")}),(0,i.jsx)(l.jO,{disabled:c,type:h,className:"!bg-white ".concat(C),readOnly:c,id:r,name:r,onChange:s,value:t,invalid:!!o,placeholder:n,multiple:x}),(0,i.jsx)(l.CO,{invalid:!0,children:o})]})})}function o(e){var a,r=e.label,s=e.name,o=(e.placeholder,e.value),u=e.onChange,c=e.error,d=e.readOnly,m=void 0!==d&&d,p=e.mdSize,h=void 0===p?12:p,v=e.required,b=void 0===v||v,f=(e.multiple,e.uppercase),x=void 0!==f&&f;e.inputClassName;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.b7,{className:"mb-3",xs:12,md:h,children:[(0,i.jsx)(l.L8,{htmlFor:s,className:x?"uppercase":"",children:"".concat(r).concat(b?"*":"")}),(0,i.jsx)(t.ZP,{name:s,value:o,onChange:u,defaultCountry:"LK",readOnly:m,style:(a={width:"100%",borderColor:"red",padding:"15px",marginBottom:"4px",height:40,borderWidth:"1px",borderStyle:"solid"},(0,n.Z)(a,"borderColor",c?"red":"#ced4da"),(0,n.Z)(a,"backgroundColor","#fff"),a)}),(0,i.jsx)(l.CO,{invalid:!!c,children:c})]})})}function u(e){var a=e.label,r=e.name,n=(e.placeholder,e.onChange),t=e.error,s=e.mdSize,o=void 0===s?12:s,u=e.required,c=void 0===u||u,d=e.uppercase,m=void 0!==d&&d,p=e.inputClassName,h=void 0===p?"":p,v=e.options,b=e.value,f=e.defaultValue;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.b7,{className:"mb-3",xs:12,md:o,children:[(0,i.jsx)(l.L8,{htmlFor:r,className:m?"uppercase":"",children:"".concat(a).concat(c?"*":"")}),(0,i.jsxs)(l.LX,{className:"!bg-white ".concat(h),name:r,defaultValue:f,onChange:n,"aria-label":"Default select example",invalid:!!t,value:b,children:[(0,i.jsx)("option",{children:"Open this select menu"}),v.map((function(e,a){return(0,i.jsx)("option",{value:e.value,children:e.label},a)}))]}),(0,i.jsx)(l.CO,{invalid:!0,children:t})]})})}},36666:function(e,a,r){r.r(a);var n=r(74165),l=r(37762),t=r(15861),i=r(4942),s=r(1413),o=r(29439),u=r(29867),c=(r(22030),r(69711)),d=r(52506),m=r.n(d),p=r(20602),h=r(10444),v=r(74688),b=r(6451),f=r(25087),x=r(4904),g=r(92834);a.default=function(){var e=(0,p.$)().t,a=(0,u.useState)(N),r=(0,o.Z)(a,2),d=r[0],j=r[1],C=(0,u.useState)({}),y=(0,o.Z)(C,2),Z=y[0],w=y[1],S=(0,u.useState)([]),k=(0,o.Z)(S,2),O=k[0],z=k[1],F=(0,u.useState)(!1),_=(0,o.Z)(F,2),q=_[0],L=_[1];(0,u.useEffect)((function(){z(v.n)}),[]);var A=m().object({fullName:m().string().required().label("Full name"),country:m().string().required().label("Country"),email:m().string().email({tlds:{allow:!1}}).required().label("Email"),phoneNumber:m().string().required().label("Phone Number")}),E=function(e){var a=e.target,r=a.name,n=a.value,l=a.files;"images"===r?j((0,s.Z)((0,s.Z)({},d),{},(0,i.Z)({},r,l))):(delete Z[r],j((0,s.Z)((0,s.Z)({},d),{},(0,i.Z)({},r,n))))},M=function(){var a=(0,t.Z)((0,n.Z)().mark((function a(r){var t,i,o,u,m,p,v,b;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(L(!0),t=A.validate(d,{abortEarly:!1}),i=t.error,o=t.value,u=!1,(0,h.tm)(d.phoneNumber)||(L(!1),w((0,s.Z)((0,s.Z)({},Z),{},{phoneNumber:"Invalid phone number"})),u=!0),i||u){a.next=20;break}return a.prev=5,a.next=8,f.tO.addAgent(o);case 8:c.Am.success(e("common_success")),j(N),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(5),c.Am.error("Something went wrong. Please try again later.");case 15:return a.prev=15,L(!1),a.finish(15);case 18:a.next=25;break;case 20:m={},p=(0,l.Z)(i.details);try{for(p.s();!(v=p.n()).done;)b=v.value,m[b.path[0]]=b.message}catch(r){p.e(r)}finally{p.f()}w((0,s.Z)((0,s.Z)({},Z),m)),L(!1);case 25:case"end":return a.stop()}}),a,null,[[5,12,15,18]])})));return function(e){return a.apply(this,arguments)}}();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"shadow sm:rounded-lg bg-white p-4 mb-5 row g-3 mt-8",children:[(0,g.jsxs)("div",{className:"row g-3",children:[(0,g.jsx)(b.dM,{label:e("full_name"),name:"fullName",value:d.fullName,onChange:E,error:Z.fullName,uppercase:!0}),(0,g.jsx)(b.dM,{label:e("email_address"),name:"email",value:d.email,onChange:E,error:Z.email,uppercase:!0,mdSize:6}),(0,g.jsx)(b.Tz,{label:e("country"),name:"country",value:d.country,onChange:E,error:Z.country,uppercase:!0,mdSize:6,options:O}),(0,g.jsx)(b.sA,{label:e("phone_number"),name:"phoneNumber",value:d.phoneNumber,onChange:function(e){delete Z.phoneNumber,j((0,s.Z)((0,s.Z)({},d),{},{phoneNumber:e}))},error:Z.phoneNumber,uppercase:!0,mdSize:6})]}),(0,g.jsx)("div",{className:"grid justify-end",children:(0,g.jsxs)(x.u5,{color:"primary",variant:"outline",className:"mr-2",onClick:M,disabled:q,children:[" ","Submit"," "]})})]})})};var N={fullName:"",email:"",phoneNumber:"",country:""}}}]);
//# sourceMappingURL=666.61e576a3.chunk.js.map