(self.webpackChunkLaw_web_app=self.webpackChunkLaw_web_app||[]).push([[236],{9602:function(e,t,n){"use strict";n.d(t,{ZP:function(){return u},d1:function(){return l},qN:function(){return s}});var r=n(74165),o=n(15861),a=n(64802),i=n(31505);function s(e,t){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,o.Z)((0,r.Z)().mark((function e(){var o,i,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(t)){e.next=7;break}return(o=new XMLHttpRequest).responseType="blob",o.onload=function(e){var t=o.response;(0,a.saveAs)(t,n)},o.open("GET",t),o.send(),e.abrupt("return");case 7:i=0;case 8:if(!(i<t.length)){e.next=19;break}return e.next=11,fetch(t[i]);case 11:return s=e.sent,e.next=14,s.blob();case 14:c=e.sent,(0,a.saveAs)(c);case 16:i++,e.next=8;break;case 19:case"end":return e.stop()}}),e)})))();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){for(var t in e)(""===e[t]||"Open this select menu"===e[t])&&delete e[t];return e}function l(e){if(!e)return"";var t=e;e instanceof i.EK&&(t=(0,i._d)(e));var n=new Date(t).toLocaleDateString("ko-KR",{timeZone:"Asia/Colombo"}).split("."),r=n[0].trim(),o=n[1].trim(),a=n[2].trim();return 2===r.length&&(r="00"+r),3===r.length&&(r="0"+r),1===o.length&&(o="0"+o),1===a.length&&(a="0"+a),"".concat(r,"-").concat(o,"-").concat(a)}},68236:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(4942),o=n(1413),a=n(74165),i=n(15861),s=n(29439),c=n(72791),u=n(30577),l=n(33168),f=n(83270),p=n(9602),d=n(49585),v=n(80184),h=c.lazy((function(){return n.e(294).then(n.bind(n,34294))})),b=c.lazy((function(){return Promise.all([n.e(444),n.e(982)]).then(n.bind(n,3675))}));function g(e){var t,n=(0,l.$)().t,g=null===(t=e.location.state)||void 0===t?void 0:t.client,w=(0,c.useState)([]),y=(0,s.Z)(w,2),x=y[0],k=y[1],Z=(0,c.useState)(0),A=(0,s.Z)(Z,2),E=A[0],L=A[1],S=(0,c.useState)(1),j=(0,s.Z)(S,2),R=j[0],C=j[1],M=(0,c.useState)(null),T=(0,s.Z)(M,2),O=T[0],D=T[1],H=(0,c.useState)(!1),U=(0,s.Z)(H,2),_=U[0],F=U[1],P=(0,c.useState)([]),q=(0,s.Z)(P,2),B=q[0],N=q[1],I=(0,c.useState)(m),K=(0,s.Z)(I,2),X=K[0],z=K[1],G=(0,c.useState)({}),Q=(0,s.Z)(G,2),V=Q[0];Q[1];(0,c.useEffect)((function(){return F(!0),W().catch((function(e){console.log(e),F(!1)})),F(!1),function(){return!1}}),[]),(0,c.useEffect)((function(){return F(!0),W().catch((function(e){console.log(e),F(!1)})),F(!1),function(){return!1}}),[g]);var W=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,o,i,s,c,l,f,p,v,h,b;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(!0),e.prev=1,!g||null==g.clientID){e.next=14;break}return e.next=5,d.MH.getClientQuestion(g.clientID,20,O,t);case 5:s=e.sent,c=s.questions,l=s.totalCount,f=s.lastVisible,r=c,o=l,i=f,e.next=23;break;case 14:return e.next=16,d.MH.getAllQuestions(X.status,20,O,t);case 16:p=e.sent,v=p.questions,h=p.totalCount,b=p.lastVisible,r=v,o=h,i=b;case 23:k(r),N(r),D(i),L(Math.ceil(o/20)),F(!1),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(1),console.log(e.t0),u.Am.error(n("common_error"));case 34:F(!1);case 35:case"end":return e.stop()}}),e,null,[[1,30]])})));return function(t){return e.apply(this,arguments)}}(),$=[n("topic"),n("date"),n("country"),n("status"),""];return(0,v.jsx)(v.Fragment,{children:_?(0,v.jsxs)("div",{className:"flex justify-center",children:[" ",(0,f.TF)("lg")," "]}):(0,v.jsx)(h,{accounts:B,maxPages:E,pageNumber:R,setPageNumber:C,tableHeaderCells:$,filters:X,filterErrors:V,handleFilterChange:function(e){var t=e.target,n=t.name,a=t.value;z((0,o.Z)((0,o.Z)({},X),{},(0,r.Z)({},n,a)))},handleFilterSubmit:function(e){e.preventDefault();var t=(0,p.ZP)(X),n=x.filter((function(e){for(var n in t)if(t[n]!=e[n])return!1;return!0}));N(n)},handleClearFilter:function(){z(m),N(x)},handlePageChangePrevious:function(){1==R||C(R-1),W("previous")},handlePageChangeNext:function(){R==E||C(R+1),W("next")},showFilter:null==(null===g||void 0===g?void 0:g.clientID),children:(0,v.jsx)(b,{questions:B})})})}var m={status:""}},64802:function(e,t,n){var r,o,a;o=[],r=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){c(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=i.URL||i.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):o(c.href)?r(e,t,n):a(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(o(e))r(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var a="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&c||s)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},l.readAsDataURL(e)}else{var f=i.URL||i.webkitURL,p=f.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout((function(){f.revokeObjectURL(p)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c},void 0===(a="function"===typeof r?r.apply(t,o):r)||(e.exports=a)}}]);
//# sourceMappingURL=236.88f1aca8.chunk.js.map