(self.webpackChunkLaw_web_app=self.webpackChunkLaw_web_app||[]).push([[526],{9602:function(e,t,n){"use strict";n.d(t,{ZP:function(){return u},d1:function(){return l},qN:function(){return s}});var o=n(74165),r=n(15861),a=n(64802),i=n(31505);function s(e,t){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)((0,o.Z)().mark((function e(t,n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,r.Z)((0,o.Z)().mark((function e(){var r,i,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(t)){e.next=7;break}return(r=new XMLHttpRequest).responseType="blob",r.onload=function(e){var t=r.response;(0,a.saveAs)(t,n)},r.open("GET",t),r.send(),e.abrupt("return");case 7:i=0;case 8:if(!(i<t.length)){e.next=19;break}return e.next=11,fetch(t[i]);case 11:return s=e.sent,e.next=14,s.blob();case 14:c=e.sent,(0,a.saveAs)(c);case 16:i++,e.next=8;break;case 19:case"end":return e.stop()}}),e)})))();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){for(var t in e)(""===e[t]||"Open this select menu"===e[t])&&delete e[t];return e}function l(e){if(!e)return"";var t=e;e instanceof i.EK&&(t=(0,i._d)(e));var n=new Date(t).toLocaleDateString("ko-KR",{timeZone:"Asia/Colombo"}).split("."),o=n[0].trim(),r=n[1].trim(),a=n[2].trim();return 2===o.length&&(o="00"+o),3===o.length&&(o="0"+o),1===r.length&&(r="0"+r),1===a.length&&(a="0"+a),"".concat(o,"-").concat(r,"-").concat(a)}},98526:function(e,t,n){"use strict";n.r(t);var o=n(29439),r=n(72791),a=n(79271),i=(n(88498),n(30577)),s=(n(9602),n(16030)),c=n(49585),u=n(83270),l=n(80184),f=r.lazy((function(){return n.e(733).then(n.bind(n,75733))})),p=r.lazy((function(){return n.e(951).then(n.bind(n,4951))}));t.default=function(){(0,a.k6)(),(0,s.I0)();var e=(0,r.useState)(!1),t=(0,o.Z)(e,2),n=t[0],d=t[1],v=(0,r.useState)([]),g=(0,o.Z)(v,2),m=(g[0],g[1]),b=(0,r.useState)([]),w=(0,o.Z)(b,2),h=w[0],y=w[1],k=(0,r.useState)({}),x=(0,o.Z)(k,2),A=x[0],E=(x[1],(0,r.useState)({})),L=(0,o.Z)(E,2),S=L[0],j=(L[1],"agent");(0,r.useEffect)((function(){var e=!0;return d(!0),c.tO.getAllAgents().then((function(t){e&&(d(!1),m(t),y(t))})).catch((function(e){d(!1),console.log(e.message),i.Am.error("Something went wrong. Please try again.")})),d(!1),function(){return e=!1}}),[]);var R=(0,r.useState)(1),T=(0,o.Z)(R,2),Z=T[0],O=T[1];return(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)("div",{className:"flex justify-center",children:[" ",(0,u.TF)("lg")," "]}):(0,l.jsx)(f,{accounts:h,maxPages:1,pageNumber:Z,setPageNumber:O,tableHeaderCells:["Full Name","Country","Email","Phone Number",""],filters:A,filterErrors:S,handleFilterChange:function(){},handleFilterSubmit:function(){},handleClearFilter:function(){},accountsType:j,children:(0,l.jsx)(p,{accounts:h,accountType:j})})})}},64802:function(e,t,n){var o,r,a;r=[],o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=i.URL||i.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):r(c.href)?o(e,t,n):a(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(r(e))o(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&c||s)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},l.readAsDataURL(e)}else{var f=i.URL||i.webkitURL,p=f.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){f.revokeObjectURL(p)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c},void 0===(a="function"===typeof o?o.apply(t,r):o)||(e.exports=a)}}]);
//# sourceMappingURL=526.f7d8e73a.chunk.js.map