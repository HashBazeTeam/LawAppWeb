"use strict";(self.webpackChunkLaw_web_app=self.webpackChunkLaw_web_app||[]).push([[935],{41618:function(e,t,n){n.d(t,{x:function(){return a}});var a={yetToBePicked:"Yet to be picked",ongoing:"Ongoing",answered:"Answered",timeUP:"Time up",assistance:"Assistance",ended:"Ended"}},75935:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(74165),s=n(15861),r=n(29439),i=n(29867),u=n(22030),c=n(84669),o=n(60777),l=n(69711),d=n(20602),f=n(96493),p=n(68803),x=n(4904),m=n(14175),h=n(41618),b=n(57660),w=n(82541),v=n(83692),g=n(20716),k=n(25087),y=n(92834);function D(e){var t=(0,c.k6)(),n=(0,d.$)().t,D=e.location.state.question,_=(0,i.useRef)(null),Z=(0,i.useRef)(),I=(0,i.useRef)(),j=(0,u.v9)(g.wl.user.selectUserID),q=(0,i.useState)([]),N=(0,r.Z)(q,2),C=N[0],A=N[1],M=(0,i.useState)(""),H=(0,r.Z)(M,2),S=H[0],Q=H[1],R=(0,i.useState)(!1),T=(0,r.Z)(R,2),O=(T[0],T[1]),B=(0,i.useState)(null),P=(0,r.Z)(B,2),U=(P[0],P[1],(0,i.useState)([])),z=(0,r.Z)(U,2),E=z[0],L=z[1],V=(0,i.useState)(!1),Y=(0,r.Z)(V,2),F=Y[0],J=Y[1],G=(0,i.useState)(!1),W=(0,r.Z)(G,2),$=W[0],K=W[1],X=(0,i.useState)(D.status),ee=(0,r.Z)(X,2),te=ee[0],ne=ee[1];(0,i.useEffect)((function(){var e=(0,v.IO)((0,v.hJ)(v.RZ,"Question",D.questionID,"chat"));return(0,v.cf)(e,(function(e){var t=[];e.forEach((function(e){var n=e.data(),a=n.author.id==D.clientID?"left":"right",s="text";switch(n.type){case"image":s="photo";break;case"file":s="file";break;default:s="text"}var r="py-2 text-black text-lg";"left"==a?"image"==n.type?r+=" mr-[60%]":r+=" mr-16":"image"==n.type?r+=" ml-[60%]":r+=" ml-16";var i={position:a,type:s,id:n.id,date:new Date(n.createdAt),className:r,text:n.text?n.text:n.name,title:"left"==a?"Client":"Admin",data:{uri:n.uri,className:"w-40",status:{click:!1,loading:0}}};t.push(i)})),A(t),t.length>0&&ce(),k.MH.updateQuestion(D.questionID,{isReadAdmin:!0})}))}),[]),(0,i.useEffect)((function(){var e=(0,v.IO)((0,v.JU)(v.RZ,"Question",D.questionID));return(0,v.cf)(e,(function(e){ne(e.data().status),e.data().status==h.x.ended?K(!1):K(!0)}))}),[]),(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.tO.getUserByID(D.clientID);case 2:t=e.sent,n=Object.values(t.fcmToken).filter((function(e){return null!=e&&void 0!=e&&""!=e})),L(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){console.log(e)}))}),[]);var ae=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s,r,i,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null===(n=t.target.files)||void 0===n?void 0:n[0]){e.next=3;break}return e.abrupt("return");case 3:if(r=(new Date).valueOf(),20971520,!(s.size>20971520)){e.next=8;break}return l.Am.error("Max file size is 20MB"),e.abrupt("return");case 8:if(i="image",i=s.type.startsWith("image")?"image":"file",u={author:{id:j},createdAt:r,id:r.toString(),type:i,name:s.name,size:s.size,height:720,width:1140,mimeType:s.type},e.prev=11,"Yet to be picked"!=D.status){e.next=17;break}return e.next=15,k.MH.updateQuestion(D.questionID,{status:"Ongoing",isReadClient:!1,adminID:j,updateAt:new Date});case 15:e.next=19;break;case 17:return e.next=19,k.MH.updateQuestion(D.questionID,{isReadClient:!1,adminID:j,updateAt:new Date});case 19:return e.next=21,k.MH.addChatFileToQuestion(D.questionID,s,u);case 21:return e.next=23,k.MH.sendChatNotification(E,D.questionID);case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(11),console.log(e.t0),l.Am.error("Error uploading file");case 29:case"end":return e.stop()}}),e,null,[[11,25]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!=S&&S){e.next=3;break}return e.abrupt("return");case 3:if(n=(new Date).valueOf(),s={author:{id:j},createdAt:n,id:n.toString(),type:"text",text:S},e.prev=5,"Yet to be picked"!=D.status){e.next=11;break}return e.next=9,k.MH.updateQuestion(D.questionID,{status:"Ongoing",isReadClient:!1,adminID:j,updateAt:new Date});case 9:e.next=13;break;case 11:return e.next=13,k.MH.updateQuestion(D.questionID,{isReadClient:!1,adminID:j,updateAt:new Date});case 13:return e.next=15,k.MH.addChatToQuestion(D.questionID,s);case 15:return I.current.value="",e.next=18,k.MH.sendChatNotification(E,D.questionID);case 18:Q(""),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0);case 24:ce();case 25:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var s,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0),t.preventDefault(),s=h.x.ongoing,e.t0=te,e.next=e.t0===h.x.yetToBePicked?6:e.t0===h.x.ongoing?9:e.t0===h.x.answered?13:e.t0===h.x.timeUP?17:e.t0===h.x.assistance?20:23;break;case 6:return s=h.x.ongoing,i=n("question_has_been_picked"),e.abrupt("break",25);case 9:case 13:return s=h.x.answered,r=new Date,i=n("question_has_been_answered"),e.abrupt("break",25);case 17:case 20:return s=h.x.ended,i=n("question_has_been_ended"),e.abrupt("break",25);case 23:return i=n("question_has_been_updated"),e.abrupt("break",25);case 25:if(e.prev=25,!r){e.next=31;break}return e.next=29,k.MH.updateQuestion(D.questionID,{status:s,answerDateTime:new Date,updateAt:new Date});case 29:e.next=33;break;case 31:return e.next=33,k.MH.updateQuestion(D.questionID,{status:s,updateAt:new Date});case 33:ne(s),l.Am.success(n(i)),e.next=41;break;case 37:e.prev=37,e.t1=e.catch(25),O(!1),l.Am.error(n("common_error"));case 41:J(!1),O(!1);case 43:case"end":return e.stop()}}),e,null,[[25,37]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:J(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.qN)(t,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(){Z.current.scrollIntoView({behavior:"smooth"})},oe=function(){switch(console.log("Modal",te),te){case h.x.answered:case h.x.timeUP:case h.x.assistance:return!0;default:return!1}},le=function(){switch(te){case h.x.answered:return{title:n("resubmit_answer"),body:n("are_you_sure_you_want_to_resubmit"),successLabel:n("resubmit")};case h.x.timeUP:case h.x.assistance:default:return{title:n("end_the_chat"),body:n("are_you_sure_you_want_to_end"),successLabel:n("finish")}}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"col-span-1 py-2 flex justify-center align-middle bg-slate-50",children:[(0,y.jsx)("div",{className:"mx-2 px-2",children:(0,y.jsx)(b.u_,{modalVisible:F,setModalVisible:J,successCallback:function(e){return ie(e)},successLabel:le().successLabel,title:le().title,body:le().body})}),(0,y.jsxs)(x.u5,{className:" text-md",color:"primary",variant:"outline",onClick:function(){return t.push({pathname:"/law-admin/question/pool",state:{client:{clientID:D.clientID,clientName:D.clientName}}})},children:[(0,y.jsx)(p.Z,{icon:m.j})," ",(0,y.jsx)("span",{className:"text-sm",children:n("show_previous_questions")})]})]}),(0,y.jsxs)("div",{className:"mb-4 columns-1 flex flex-col justify-between \n      h-screen bg-slate-50 overflow-y-scroll w-full",children:[(0,y.jsx)(f.rN,{className:"message-list m-1",lockable:!0,toBottomHeight:"100%",dataSource:C,onDownload:function(e){return ue(e.data.uri,e.text)}}),(0,y.jsx)("div",{ref:Z}),(0,y.jsx)("div",{className:"mb-0  mx-1 sticky bottom-0 grid grid-cols-8 align-middle justify-center ",children:(0,y.jsx)("div",{className:"col-span-8 ml-4 shadow border-b border-gray-200",children:(0,y.jsx)(f.II,{referance:I,className:"m-1 p-1",defaultValue:S,onChange:function(e){Q(e.target.value)},placeholder:"Type here...",multiline:!0,rightButtons:(0,y.jsxs)("div",{children:[(0,y.jsx)(f.zx,{className:"mx-2 px-4",color:"white",text:"Send",onClick:se,disabled:""==S||!S,backgroundColor:""!=S&&S?"black":"grey"}),(0,y.jsx)(f.zx,{disabled:!$,className:"px-4",color:"white",backgroundColor:te===h.x.ended?"grey":"Green",text:function(){switch(te){case h.x.yetToBePicked:return n("select_question");case h.x.assistance:return n("finish");case h.x.ended:return n("ended");case h.x.answered:return n("resubmit_answer");case h.x.timeUP:return n("finish");default:return n("submit_answer")}}(),onClick:function(e){console.log(te,oe()),oe()?J(!0):(K(!1),re(e))}})]}),leftButtons:(0,y.jsxs)("button",{id:"recaptcha-container",disabled:!1,onClick:function(){_.current.click()},type:"submit",className:"group relative w-full flex justify-center py-1 px-4\n                    border-transparent text-sm font-medium text-black \n                    ",children:[(0,y.jsx)("input",{style:{display:"none"},ref:_,type:"file",onChange:ae}),(0,y.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:(0,y.jsx)(o.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})})})})]})]})}}}]);
//# sourceMappingURL=935.99d5ec2f.chunk.js.map