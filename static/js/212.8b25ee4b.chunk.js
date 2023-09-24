"use strict";(self.webpackChunkLaw_web_app=self.webpackChunkLaw_web_app||[]).push([[212],{6451:function(e,r,n){n.d(r,{Tz:function(){return c},dM:function(){return s},sA:function(){return u}});var a=n(4942),t=(n(29867),n(4904)),l=(n(68803),n(10444)),o=n(92834);function s(e){var r=e.label,n=e.name,a=e.placeholder,l=e.value,s=e.onChange,u=e.error,c=e.readOnly,i=void 0!==c&&c,d=e.mdSize,m=void 0===d?12:d,p=e.type,h=void 0===p?"text":p,v=e.required,b=void 0===v||v,f=e.multiple,x=void 0===f||f,g=e.uppercase,y=void 0!==g&&g,N=e.inputClassName,j=void 0===N?"":N;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(t.b7,{className:"mb-3",xs:12,md:m,children:[(0,o.jsx)(t.L8,{htmlFor:n,className:y?"uppercase":"",children:"".concat(r).concat(b?"*":"")}),(0,o.jsx)(t.jO,{disabled:i,type:h,className:"!bg-white ".concat(j),readOnly:i,id:n,name:n,onChange:s,value:l,invalid:!!u,placeholder:a,multiple:x}),(0,o.jsx)(t.CO,{invalid:!0,children:u})]})})}function u(e){var r,n=e.label,s=e.name,u=(e.placeholder,e.value),c=e.onChange,i=e.error,d=e.readOnly,m=void 0!==d&&d,p=e.mdSize,h=void 0===p?12:p,v=e.required,b=void 0===v||v,f=(e.multiple,e.uppercase),x=void 0!==f&&f;e.inputClassName;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(t.b7,{className:"mb-3",xs:12,md:h,children:[(0,o.jsx)(t.L8,{htmlFor:s,className:x?"uppercase":"",children:"".concat(n).concat(b?"*":"")}),(0,o.jsx)(l.ZP,{name:s,value:u,onChange:c,defaultCountry:"LK",readOnly:m,style:(r={width:"100%",borderColor:"red",padding:"15px",marginBottom:"4px",height:40,borderWidth:"1px",borderStyle:"solid"},(0,a.Z)(r,"borderColor",i?"red":"#ced4da"),(0,a.Z)(r,"backgroundColor","#fff"),r)}),(0,o.jsx)("p",{className:"text-red-400 text-sm",children:i})]})})}function c(e){var r=e.label,n=e.name,a=(e.placeholder,e.onChange),l=e.error,s=e.mdSize,u=void 0===s?12:s,c=e.required,i=void 0===c||c,d=e.uppercase,m=void 0!==d&&d,p=e.inputClassName,h=void 0===p?"":p,v=e.options,b=e.value,f=e.defaultValue,x=e.readOnly;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(t.b7,{className:"mb-3",xs:12,md:u,children:[(0,o.jsx)(t.L8,{htmlFor:n,className:m?"uppercase":"",children:"".concat(r).concat(i?"*":"")}),(0,o.jsxs)(t.LX,{className:"!bg-white ".concat(h),name:n,defaultValue:f,onChange:a,"aria-label":"Default select example",invalid:!!l,value:b,disabled:x,children:[(0,o.jsx)("option",{children:"Open this select menu"}),v.map((function(e,r){return(0,o.jsx)("option",{value:e.value,children:e.label},r)}))]}),(0,o.jsx)(t.CO,{invalid:!0,children:l})]})})}},212:function(e,r,n){n.r(r);var a=n(37762),t=n(4942),l=n(1413),o=n(74165),s=n(15861),u=n(29439),c=n(29867),i=n(22030),d=n(84669),m=n(69711),p=n(52506),h=n.n(p),v=n(4904),b=n(58730),f=n.n(b),x=n(20602),g=n(10444),y=n(25087),N=n(74688),j=n(57660),Z=n(6451),C=n(92834);r.default=function(){(0,i.I0)();var e=(0,d.k6)(),r=(0,d.TH)().state.userID,n=(0,x.$)().t,p=(0,c.useState)(!1),b=(0,u.Z)(p,2),k=(b[0],b[1]),_=(0,c.useState)(w),O=(0,u.Z)(_,2),S=O[0],A=O[1],z=(0,c.useState)(w),q=(0,u.Z)(z,2),F=q[0],L=q[1],M=(0,c.useState)({}),D=(0,u.Z)(M,2),V=D[0],E=D[1],I=(0,c.useState)(!1),T=(0,u.Z)(I,2),B=T[0],P=T[1],H=(0,c.useState)(!1),K=(0,u.Z)(H,2),U=K[0],W=K[1],X=(0,c.useState)(!1),$=(0,u.Z)(X,2);$[0],$[1];(0,c.useEffect)((function(){var e=!0,a=function(){var a=(0,s.Z)((0,o.Z)().mark((function a(){var t;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,k(!0),a.next=4,y.tO.getAgentByID(r);case 4:(t=a.sent)&&e?(A(t),L(t)):m.Am.error(n("common_error")),a.next=13;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0),k(!1),m.Am.error(n("common_error"));case 13:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return a(),k(!1),function(){return e=!1}}),[]);var G=h().object({fullName:h().string().optional().label("Full name"),country:h().string().optional().label("Country"),email:h().string().email({tlds:{allow:!1}}).optional().label("Email"),phoneNumber:h().string().optional().allow("").label("Phone number")}),J=function(e){var r=e.target,n=r.name,a=r.value;r.files;delete V[n],A((0,l.Z)((0,l.Z)({},S),{},(0,t.Z)({},n,a)))},Q=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var s,u,c,i,d,p,h,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B){e.next=2;break}return e.abrupt("return");case 2:if(s=f().pick(S,["fullName","country","email","phoneNumber"]),k(!0),u=G.validate(s,{abortEarly:!1}),c=u.error,u.value,i=!1,console.log(""!=S.phoneNumber),""==S.phoneNumber||(0,g.tm)(S.phoneNumber)||(k(!1),E((0,l.Z)((0,l.Z)({},V),{},{phoneNumber:"Invalid phone number"})),i=!0),c||i){e.next=26;break}return e.prev=9,e.next=12,y.tO.updateAgent(r,s);case 12:L(s),A(s),m.Am.success(n("common_success")),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(9),console.log(e.t0),m.Am.error("".concat(n("common_error")));case 21:return e.prev=21,k(!1),e.finish(21);case 24:e.next=31;break;case 26:d={},p=(0,a.Z)(c.details);try{for(p.s();!(h=p.n()).done;)v=h.value,d[v.path[0]]=v.message}catch(t){p.e(t)}finally{p.f()}E((0,l.Z)((0,l.Z)({},V),d)),k(!1);case 31:case"end":return e.stop()}}),e,null,[[9,17,21,24]])})));return function(r){return e.apply(this,arguments)}}(),R=function(){var a=(0,s.Z)((0,o.Z)().mark((function a(t){return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(B){a.next=2;break}return a.abrupt("return");case 2:return t.preventDefault(),a.prev=3,a.next=6,y.tO.deleteAgent(r);case 6:m.Am.success(n("common_success")),e.replace("/law-admin/agent/all"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(3),console.log(a.t0),m.Am.error("".concat(n("common_error")));case 14:return a.prev=14,k(!1),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[3,10,14,17]])})));return function(e){return a.apply(this,arguments)}}();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("div",{className:"shadow sm:rounded-lg bg-white p-4 mt-8 mb-5 row g-3",children:[(0,C.jsx)("div",{className:"grid justify-end",children:(0,C.jsx)(v.kV,{label:"Enable Update Mode",id:"formSwitchCheckDefault",onChange:function(){P(!B),A(F)}})}),(0,C.jsx)(j.u_,{modalVisible:U,setModalVisible:W,successCallback:R,successLabel:n("remove"),title:n("remove_agent"),body:n("are_you_sure_you_want_to_remove")}),(0,C.jsxs)("div",{className:"row g-3",children:[(0,Z.dM)({label:n("full_name"),name:"fullName",value:S.fullName,onChange:J,error:V.fullName,uppercase:!0,required:!1,readOnly:!B}),(0,Z.dM)({label:n("email_address"),name:"email",value:S.email,onChange:J,error:V.email,uppercase:!0,required:!1,readOnly:!B}),B?(0,C.jsx)(Z.sA,{label:n("phone_number"),name:"phoneNumber",value:S.phoneNumber,onChange:function(e){delete V.phoneNumber,A((0,l.Z)((0,l.Z)({},S),{},{phoneNumber:e}))},error:V.phoneNumber,uppercase:!0,mdSize:6}):(0,C.jsx)(Z.dM,{label:n("phone_number"),name:"phoneNumber",value:S.phoneNumber,uppercase:!0,required:!1,readOnly:!B,mdSize:6}),B?(0,Z.Tz)({label:n("country"),name:"country",value:S.country,onChange:J,error:V.country,uppercase:!0,required:!1,readOnly:!B,options:N.n,mdSize:6}):(0,Z.dM)({label:n("country"),name:"country",value:S.country,onChange:J,error:V.country,uppercase:!0,required:!1,readOnly:!B,mdSize:6})]}),(0,C.jsxs)("div",{className:"flex justify-end",hidden:!B,children:[(0,C.jsx)("div",{className:"justify-end",children:(0,C.jsx)(v.u5,{color:"primary",variant:"outline",className:"mr-2",onClick:Q,children:n("update")})}),(0,C.jsx)("div",{className:"justify-end",children:(0,C.jsx)(v.u5,{color:"danger",variant:"outline",className:"mr-2",onClick:function(){return W(!0)},children:n("remove")})})]})]})})};var w={fullName:"",email:"",phoneNumber:"",country:""}}}]);
//# sourceMappingURL=212.8b25ee4b.chunk.js.map