"use strict";(self.webpackChunkLaw_web_app=self.webpackChunkLaw_web_app||[]).push([[174],{38108:function(e,n,r){r.d(n,{Tz:function(){return s},dM:function(){return u},sA:function(){return c}});var a=r(4942),t=(r(72791),r(78983)),o=(r(24846),r(57187)),l=r(80184);function u(e){var n=e.label,r=e.name,a=e.placeholder,o=e.value,u=e.onChange,c=e.error,s=e.readOnly,i=void 0!==s&&s,d=e.mdSize,m=void 0===d?12:d,p=e.type,h=void 0===p?"text":p,f=e.required,v=void 0===f||f,b=e.multiple,x=void 0===b||b,g=e.uppercase,y=void 0!==g&&g,N=e.inputClassName,Z=void 0===N?"":N;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(t.b7,{className:"mb-3",xs:12,md:m,children:[(0,l.jsx)(t.L8,{htmlFor:r,className:y?"uppercase":"",children:"".concat(n).concat(v?"*":"")}),(0,l.jsx)(t.jO,{disabled:i,type:h,className:"!bg-white ".concat(Z),readOnly:i,id:r,name:r,onChange:u,value:o,invalid:!!c,placeholder:a,multiple:x}),(0,l.jsx)(t.CO,{invalid:!0,children:c})]})})}function c(e){var n,r=e.label,u=e.name,c=(e.placeholder,e.value),s=e.onChange,i=e.error,d=e.readOnly,m=void 0!==d&&d,p=e.mdSize,h=void 0===p?12:p,f=e.required,v=void 0===f||f,b=(e.multiple,e.uppercase),x=void 0!==b&&b;e.inputClassName;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(t.b7,{className:"mb-3",xs:12,md:h,children:[(0,l.jsx)(t.L8,{htmlFor:u,className:x?"uppercase":"",children:"".concat(r).concat(v?"*":"")}),(0,l.jsx)(o.ZP,{name:u,value:c,onChange:s,defaultCountry:"LK",readOnly:m,style:(n={width:"100%",borderColor:"red",padding:"15px",marginBottom:"4px",height:40,borderWidth:"1px",borderStyle:"solid"},(0,a.Z)(n,"borderColor",i?"red":"#ced4da"),(0,a.Z)(n,"backgroundColor","#fff"),n)}),(0,l.jsx)(t.CO,{invalid:!!i,children:i})]})})}function s(e){var n=e.label,r=e.name,a=(e.placeholder,e.onChange),o=e.error,u=e.mdSize,c=void 0===u?12:u,s=e.required,i=void 0===s||s,d=e.uppercase,m=void 0!==d&&d,p=e.inputClassName,h=void 0===p?"":p,f=e.options,v=e.value,b=e.defaultValue;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(t.b7,{className:"mb-3",xs:12,md:c,children:[(0,l.jsx)(t.L8,{htmlFor:r,className:m?"uppercase":"",children:"".concat(n).concat(i?"*":"")}),(0,l.jsxs)(t.LX,{className:"!bg-white ".concat(h),name:r,defaultValue:b,onChange:a,"aria-label":"Default select example",invalid:!!o,value:v,children:[(0,l.jsx)("option",{children:"Open this select menu"}),f.map((function(e,n){return(0,l.jsx)("option",{value:e.value,children:e.label},n)}))]}),(0,l.jsx)(t.CO,{invalid:!0,children:o})]})})}},9602:function(e,n,r){r.d(n,{ZP:function(){return s},d1:function(){return i},qN:function(){return u}});var a=r(74165),t=r(15861),o=r(64802),l=r(31505);function u(e,n){return c.apply(this,arguments)}function c(){return(c=(0,t.Z)((0,a.Z)().mark((function e(n,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,t.Z)((0,a.Z)().mark((function e(){var t,l,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(n)){e.next=7;break}return(t=new XMLHttpRequest).responseType="blob",t.onload=function(e){var n=t.response;(0,o.saveAs)(n,r)},t.open("GET",n),t.send(),e.abrupt("return");case 7:l=0;case 8:if(!(l<n.length)){e.next=19;break}return e.next=11,fetch(n[l]);case 11:return u=e.sent,e.next=14,u.blob();case 14:c=e.sent,(0,o.saveAs)(c);case 16:l++,e.next=8;break;case 19:case"end":return e.stop()}}),e)})))();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){for(var n in e)(""===e[n]||"Open this select menu"===e[n])&&delete e[n];return e}function i(e){if(!e)return"";var n=e;e instanceof l.EK&&(n=(0,l._d)(e));var r=new Date(n).toLocaleDateString("ko-KR",{timeZone:"Asia/Colombo"}).split("."),a=r[0].trim(),t=r[1].trim(),o=r[2].trim();return 2===a.length&&(a="00"+a),3===a.length&&(a="0"+a),1===t.length&&(t="0"+t),1===o.length&&(o="0"+o),"".concat(a,"-").concat(t,"-").concat(o)}},89364:function(e,n,r){r.d(n,{d:function(){return u.d1},n:function(){return l}});var a=r(29439),t=r(10500);t.registerLocale(r(41086));var o=t.getNames("en",{select:"official"}),l=Object.entries(o).map((function(e){var n=(0,a.Z)(e,2),r=(n[0],n[1]);return{value:r,label:r}})),u=r(9602)},89174:function(e,n,r){r.r(n);var a=r(37762),t=r(4942),o=r(1413),l=r(74165),u=r(15861),c=r(29439),s=r(72791),i=r(16030),d=r(79271),m=r(30577),p=r(4819),h=r.n(p),f=r(78983),v=r(763),b=r.n(v),x=r(33168),g=r(57187),y=r(49585),N=r(89364),Z=r(83270),j=r(38108),w=r(80184);n.default=function(){(0,i.I0)();var e=(0,d.k6)(),n=(0,d.TH)().state.userID,r=(0,x.$)().t,p=(0,s.useState)(!1),v=(0,c.Z)(p,2),k=(v[0],v[1]),_=(0,s.useState)(C),O=(0,c.Z)(_,2),S=O[0],A=O[1],L=(0,s.useState)(C),q=(0,c.Z)(L,2),z=q[0],F=q[1],M=(0,s.useState)({}),D=(0,c.Z)(M,2),E=D[0],T=D[1],V=(0,s.useState)(!1),I=(0,c.Z)(V,2),K=I[0],P=I[1],B=(0,s.useState)(!1),H=(0,c.Z)(B,2),R=H[0],X=H[1],G=(0,s.useState)(!1),U=(0,c.Z)(G,2);U[0],U[1];(0,s.useEffect)((function(){var e=!0,a=function(){var a=(0,u.Z)((0,l.Z)().mark((function a(){var t;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,k(!0),a.next=4,y.tO.getAgentByID(n);case 4:(t=a.sent)&&e?(A(t),F(t)):m.Am.error(r("common_error")),a.next=13;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0),k(!1),m.Am.error(r("common_error"));case 13:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return a(),k(!1),function(){return e=!1}}),[]);var W=h().object({fullName:h().string().optional().label("Full name"),country:h().string().optional().label("Country"),email:h().string().email({tlds:{allow:!1}}).optional().label("Email"),phoneNumber:h().string().optional().allow("").label("Phone number")}),$=function(e){var n=e.target,r=n.name,a=n.value;n.files;delete E[r],A((0,o.Z)((0,o.Z)({},S),{},(0,t.Z)({},r,a)))},J=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){var u,c,s,i,d,p,h,f;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(K){e.next=2;break}return e.abrupt("return");case 2:if(u=b().pick(S,["fullName","country","email","phoneNumber"]),k(!0),c=W.validate(u,{abortEarly:!1}),s=c.error,c.value,i=!1,console.log(""!=S.phoneNumber),""==S.phoneNumber||(0,g.tm)(S.phoneNumber)||(k(!1),T((0,o.Z)((0,o.Z)({},E),{},{phoneNumber:"Invalid phone number"})),i=!0),s||i){e.next=26;break}return e.prev=9,e.next=12,y.tO.updateAgent(n,u);case 12:F(u),A(u),m.Am.success(r("common_success")),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(9),console.log(e.t0),m.Am.error("".concat(r("common_error")));case 21:return e.prev=21,k(!1),e.finish(21);case 24:e.next=31;break;case 26:d={},p=(0,a.Z)(s.details);try{for(p.s();!(h=p.n()).done;)f=h.value,d[f.path[0]]=f.message}catch(t){p.e(t)}finally{p.f()}T((0,o.Z)((0,o.Z)({},E),d)),k(!1);case 31:case"end":return e.stop()}}),e,null,[[9,17,21,24]])})));return function(n){return e.apply(this,arguments)}}(),Q=function(){var a=(0,u.Z)((0,l.Z)().mark((function a(t){return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(K){a.next=2;break}return a.abrupt("return");case 2:return t.preventDefault(),a.prev=3,a.next=6,y.tO.deleteAgent(n);case 6:m.Am.success(r("common_success")),e.replace("/law-admin/agent/all"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(3),console.log(a.t0),m.Am.error("".concat(r("common_error")));case 14:return a.prev=14,k(!1),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[3,10,14,17]])})));return function(e){return a.apply(this,arguments)}}();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"shadow sm:rounded-lg bg-white p-4 mt-2 mb-5 row g-3",children:[(0,w.jsx)("div",{className:"grid justify-end",children:(0,w.jsx)(f.kV,{label:"Enable Update Mode",id:"formSwitchCheckDefault",onChange:function(){P(!K),A(z)}})}),(0,w.jsx)(Z.u_,{modalVisible:R,setModalVisible:X,successCallback:Q,successLabel:r("remove"),title:r("remove_agent"),body:r("are_you_sure_you_want_to_remove")}),(0,w.jsxs)("div",{className:"row g-3",children:[(0,j.dM)({label:r("full_name"),name:"fullName",value:S.fullName,onChange:$,error:E.fullName,uppercase:!0,required:!1,readOnly:!K}),(0,j.dM)({label:r("email_address"),name:"email",value:S.email,onChange:$,error:E.email,uppercase:!0,required:!1,readOnly:!K}),K?(0,w.jsx)(j.sA,{label:r("phone_number"),name:"phoneNumber",value:S.phoneNumber,onChange:function(e){delete E.phoneNumber,A((0,o.Z)((0,o.Z)({},S),{},{phoneNumber:e}))},error:E.phoneNumber,uppercase:!0,mdSize:6}):(0,w.jsx)(j.dM,{label:r("phone_number"),name:"phoneNumber",value:S.phoneNumber,uppercase:!0,required:!1,readOnly:!K,mdSize:6}),K?(0,j.Tz)({label:r("country"),name:"country",value:S.country,onChange:$,error:E.country,uppercase:!0,required:!1,readOnly:!K,options:N.n,mdSize:6}):(0,j.dM)({label:r("country"),name:"country",value:S.country,onChange:$,error:E.country,uppercase:!0,required:!1,readOnly:!K,mdSize:6})]}),(0,w.jsxs)("div",{className:"flex justify-end",hidden:!K,children:[(0,w.jsx)("div",{className:"justify-end",children:(0,w.jsx)(f.u5,{color:"primary",variant:"outline",className:"mr-2",onClick:J,children:r("update")})}),(0,w.jsx)("div",{className:"justify-end",children:(0,w.jsx)(f.u5,{color:"danger",variant:"outline",className:"mr-2",onClick:function(){return X(!0)},children:r("remove")})})]})]})})};var C={fullName:"",email:"",phoneNumber:"",country:""}}}]);
//# sourceMappingURL=174.63489f9d.chunk.js.map