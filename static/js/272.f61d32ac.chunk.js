(self.webpackChunkLaw_web_app=self.webpackChunkLaw_web_app||[]).push([[272],{73272:function(r,e,n){"use strict";n.r(e);var a=n(29439),t=n(72791),u=(n(21105),n(93076)),o=n(3841),s=n.n(o),i=n(80184);e.default=function(r){var e=(0,t.useState)([]),n=(0,a.Z)(e,2),o=n[0],c=n[1];return(0,t.useEffect)((function(){var r=["Sri Lanka","India","Sweden","Ukraine"],e=s()({count:r.length,alpha:.5});c({labels:r,datasets:[{backgroundColor:e,data:[40,20,80,10]}]})}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"w-1/2 object-contain",children:(0,i.jsx)(u.FR,{wrapper:!0,height:200,className:"",type:"doughnut",data:o})})})}},3841:function(r,e,n){r=n.nmd(r),function(n,a){var t=function(){var r=null,e={};v();var n=[];function a(r){if(n.length>0){var e=h(u=k(r.hue)),a=(u[1]-u[0])/n.length,t=parseInt((e-u[0])/a);return!0===n[t]?t=(t+2)%n.length:n[t]=!0,(e=h(u=[(u[0]+t*a)%359,(u[0]+(t+1)*a)%359]))<0&&(e=360+e),e}var u;return(e=h(u=i(r.hue)))<0&&(e=360+e),e}function t(r,e){if("monochrome"===e.hue)return 0;if("random"===e.luminosity)return h([0,100]);var n=c(r),a=n[0],t=n[1];switch(e.luminosity){case"bright":a=55;break;case"dark":a=t-10;break;case"light":t=55}return h([a,t])}function u(r,e,n){var a=s(r,e),t=100;switch(n.luminosity){case"dark":t=a+20;break;case"light":a=(t+a)/2;break;case"random":a=0,t=100}return h([a,t])}function o(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return b(r);case"hsl":var n=b(r);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var a=b(r),t=e.alpha||Math.random();return"hsla("+a[0]+", "+a[1]+"%, "+a[2]+"%, "+t+")";case"rgbArray":return d(r);case"rgb":return"rgb("+d(r).join(", ")+")";case"rgba":var u=d(r);t=e.alpha||Math.random();return"rgba("+u.join(", ")+", "+t+")";default:return f(r)}}function s(r,e){for(var n=l(r).lowerBounds,a=0;a<n.length-1;a++){var t=n[a][0],u=n[a][1],o=n[a+1][0],s=n[a+1][1];if(e>=t&&e<=o){var i=(s-u)/(o-t);return i*e+(u-i*t)}}return 0}function i(r){if("number"===typeof parseInt(r)){var n=parseInt(r);if(n<360&&n>0)return[n,n]}if("string"===typeof r)if(e[r]){var a=e[r];if(a.hueRange)return a.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var t=p(r)[0];return[t,t]}return[0,360]}function c(r){return l(r).saturationRange}function l(r){for(var n in r>=334&&r<=360&&(r-=360),e){var a=e[n];if(a.hueRange&&r>=a.hueRange[0]&&r<=a.hueRange[1])return e[n]}return"Color not found"}function h(e){if(null===r){var n=.618033988749895,a=Math.random();return a+=n,a%=1,Math.floor(e[0]+a*(e[1]+1-e[0]))}var t=e[1]||1,u=e[0]||0,o=(r=(9301*r+49297)%233280)/233280;return Math.floor(u+o*(t-u))}function f(r){var e=d(r);function n(r){var e=r.toString(16);return 1==e.length?"0"+e:e}return"#"+n(e[0])+n(e[1])+n(e[2])}function g(r,n,a){var t=a[0][0],u=a[a.length-1][0],o=a[a.length-1][1],s=a[0][1];e[r]={hueRange:n,lowerBounds:a,saturationRange:[t,u],brightnessRange:[o,s]}}function v(){g("monochrome",null,[[0,0],[100,0]]),g("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),g("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),g("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),g("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),g("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),g("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),g("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function d(r){var e=r[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=r[1]/100,a=r[2]/100,t=Math.floor(6*e),u=6*e-t,o=a*(1-n),s=a*(1-u*n),i=a*(1-(1-u)*n),c=256,l=256,h=256;switch(t){case 0:c=a,l=i,h=o;break;case 1:c=s,l=a,h=o;break;case 2:c=o,l=a,h=i;break;case 3:c=o,l=s,h=a;break;case 4:c=i,l=o,h=a;break;case 5:c=a,l=o,h=s}return[Math.floor(255*c),Math.floor(255*l),Math.floor(255*h)]}function p(r){r=3===(r=r.replace(/^#/,"")).length?r.replace(/(.)/g,"$1$1"):r;var e=parseInt(r.substr(0,2),16)/255,n=parseInt(r.substr(2,2),16)/255,a=parseInt(r.substr(4,2),16)/255,t=Math.max(e,n,a),u=t-Math.min(e,n,a),o=t?u/t:0;switch(t){case e:return[(n-a)/u%6*60||0,o,t];case n:return[60*((a-e)/u+2)||0,o,t];case a:return[60*((e-n)/u+4)||0,o,t]}}function b(r){var e=r[0],n=r[1]/100,a=r[2]/100,t=(2-n)*a;return[e,Math.round(n*a/(t<1?t:2-t)*1e4)/100,t/2*100]}function m(r){for(var e=0,n=0;n!==r.length&&!(e>=Number.MAX_SAFE_INTEGER);n++)e+=r.charCodeAt(n);return e}function k(r){if(isNaN(r)){if("string"===typeof r)if(e[r]){var n=e[r];if(n.hueRange)return n.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){return l(p(r)[0]).hueRange}}else{var a=parseInt(r);if(a<360&&a>0)return l(r).hueRange}return[0,360]}return function e(s){if(void 0!==(s=s||{}).seed&&null!==s.seed&&s.seed===parseInt(s.seed,10))r=s.seed;else if("string"===typeof s.seed)r=m(s.seed);else{if(void 0!==s.seed&&null!==s.seed)throw new TypeError("The seed value must be an integer or string");r=null}var i,c;if(null!==s.count&&void 0!==s.count){for(var l=s.count,h=[],f=0;f<s.count;f++)n.push(!1);for(s.count=null;l>h.length;){var g=e(s);null!==r&&(s.seed=r),h.push(g)}return s.count=l,h}return o([i=a(s),c=t(i,s),u(i,c,s)],s)}}();r&&r.exports&&(e=r.exports=t),e.randomColor=t}()}}]);
//# sourceMappingURL=272.f61d32ac.chunk.js.map