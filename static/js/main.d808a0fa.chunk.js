(window.webpackJsonpvk_handmade=window.webpackJsonpvk_handmade||[]).push([[0],{107:function(e,t){},116:function(e,t,a){},119:function(e,t,a){e.exports=a.p+"static/media/arrow.aa69be66.svg"},122:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},124:function(e,t,a){e.exports=a.p+"static/media/search.e7324524.svg"},206:function(e,t,a){e.exports=a(325)},294:function(e,t){},295:function(e,t){},325:function(e,t,a){"use strict";a.r(t);a(207),a(233),a(235),a(236),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275);var n=a(0),r=a.n(n),o=a(78),c=a.n(o),i=a(24),s=a.n(i),l=a(6),u=a.n(l),p=a(14),d=a(60),f=a(126),m=a.n(f),h=(a(284),a(49));function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=function(e,t){switch(t.type){case"setActivePanel":return b({},e,{activePanel:t.payload.activePanel,indicators:b({},e.indicators,{},t.payload.data)});case"setPopout":return b({},e,{popout:t.payload.popout,error:t.payload.error});case"setUser":return b({},e,{fetchedUser:t.payload.fetchedUser,popout:t.payload.popout});case"setIndicators":return b({},e,{activePanel:t.payload.activePanel,indicators:b({},e.indicators,{},t.payload.data)});case"setTypes":return b({},e,{types:t.payload.types,popout:t.payload.popout});case"getAllProducts":return b({},e,{products:t.payload.products,popout:t.payload.popout});case"getFilteredProducts":return b({},e,{filteredProducts:t.payload.filteredProducts,popout:t.payload.popout});case"setOverflow":return b({},e,{isOverflow:t.payload.isOverflow,panelOverflow:t.payload.panelOverflow});default:return b({},e,{error:"\u0422\u0430\u043a\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"})}},g=r.a.createContext(),w=a(18),E=a.n(w),O=a(23),P=a.n(O),_=function(e){return r.a.createElement(P.a,{size:"l",level:"outline",onClick:e.handleClick,className:e.active?"btn-primary":"btn-white","data-to":e.data_to},e.children)},k=a(119),j=a.n(k),x=function(e){var t=Object(n.useContext)(g).dispatch;return r.a.createElement("div",{id:e.id,className:"wrapper "},r.a.createElement("div",{className:"home"},r.a.createElement(E.a,{className:"title"},"\u041d\u0435 \u0437\u043d\u0430\u0435\u0448\u044c \u0447\u0442\u043e \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u044c?"),r.a.createElement(E.a,{className:"text"},"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0441\u044f \u043d\u0430\u0448\u0438\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c",r.a.createElement("br",null),"\u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0438\u0434\u0435\u0438 \u0434\u043b\u044f \u043f\u043e\u0434\u0430\u0440\u043a\u0430!"),r.a.createElement("img",{src:j.a,className:"arrow"}),r.a.createElement(_,{data_to:"how",handleClick:function(e){t({type:"setActivePanel",payload:{activePanel:e.currentTarget.dataset.to}})}},"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0430\u0440\u043e\u043a!")))},N=a(127),C=a.n(N),S=a(61),A=a(56),H=a.n(A),U=function(){return H.a.request({url:"https://docs.google.com/spreadsheets/d/1Oikpp2P8Tp4I8s4gIJEjK4rnR4WRIoG8SMyawtCifSs/export?format=xlsx",method:"get",responseType:"arraybuffer",headers:{Accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}}).then((function(e){var t=new Uint8Array(e.data),a=S.read(t,{type:"array"}),n=a.Sheets[a.SheetNames[0]],r=a.Sheets[a.SheetNames[1]];return{types:S.utils.sheet_to_json(n),products:S.utils.sheet_to_json(r)}}))},I=a(44),R=a(57),T=a.n(R),B=a(58),z=a.n(B),W=(a(116),Object(I.b)()),K=function(e){var t=Object(n.useContext)(g),a=t.state,o=t.dispatch,c=Object.values(e.types).map((function(t){return r.a.createElement(_,{key:t,handleClick:function(a){return function(e,t){o({type:"setIndicators",payload:{data:t,activePanel:e.currentTarget.dataset.to}})}(a,Object(h.a)({},e.id,t))},data_to:e.to_id,active:a.indicators[e.id]===t},t)}));return r.a.createElement("div",{className:"wrapper",id:e.id},r.a.createElement("div",{className:"panel"},r.a.createElement(E.a,{className:"header"},r.a.createElement("button",{className:"btn-back",onClick:function(t){o({type:"setActivePanel",payload:{data:Object(h.a)({},e.id,null),activePanel:t.currentTarget.dataset.to}})},"data-to":e.back_id},W===I.a?r.a.createElement(T.a,null):r.a.createElement(z.a,null)),r.a.createElement(E.a,{className:"header-title"},e.title)),r.a.createElement(E.a,{className:"content"},r.a.createElement("div",{className:"btn-wrap",ref:function(e){if(e){var t=document.getElementById("root"),n=e.getBoundingClientRect().height>t.scrollHeight;a.isOverflow!==n&&a.panelOverflow!==a.activePanel&&o({type:"setOverflow",payload:{isOverflow:n,panelOverflow:a.activePanel}})}}},c))))},V=a(125),D=a.n(V),F=a(55),G=a.n(F),J=a(120),M=a.n(J),q=a(121),L=a.n(q),Q=a(122),X=a.n(Q),Y=function(e){var t=e.product;e.count,e.item,e.give,e.buy;return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"img-wrap"},r.a.createElement("img",{className:"img-product",src:t.img_url||X.a,alt:"Persik The Cat"})))},Z=a(59),$=function(e){if(!e||!e.trim())return"";var t=e.trim();return(t[0].toUpperCase()+t.slice(1)).replace(/  /g," ")},ee={"\u041f\u043e \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f\u043c":"hobby","\u041f\u043e \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438":"profession","\u0420\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u0443":"relation","\u041d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435":"event"},te=function e(){Object(Z.a)(this,e)};te.filter=function(e,t){return te.indicators=t,e.filter((function(e){var t=void 0===ee[te.indicators.how]||te["is".concat(ee[te.indicators.how].charAt(0).toUpperCase()).concat(ee[te.indicators.how].slice(1))](e);return!(!e.img||!e.img.trim())&&(te.isHow(e)&&te.isSex(e)&&te.isAge(e)&&t)})).sort((function(){return.5-Math.random()})).slice(0,15)},te.isHow=function(e){return void 0===e.how||e.how.split(",").filter((function(e){return te.indicators.how===$(e)})).length>0},te.isSex=function(e){return void 0===e.sex||e.sex.split(",").filter((function(e){return te.indicators.sex===$(e)})).length>0},te.isAge=function(e){return void 0===e.age||e.age.split(",").filter((function(e){return te.indicators.age===$(e)})).length>0},te.isEvent=function(e){return void 0===e.event||e.event.split(",").filter((function(e){return te.indicators===$(e)})).length>0},te.isHobby=function(e){return void 0===e.hobby||e.hobby.split(",").filter((function(e){return te.indicators.hobby===$(e)})).length>0},te.isProfession=function(e){return void 0===e.profession||e.profession.split(",").filter((function(e){return te.indicators.profession===$(e)})).length>0},te.isRelation=function(e){return void 0===e.relation||e.relation.split(",").filter((function(e){return te.indicators.relation===$(e)})).length>0};var ae=a(123),ne=a.n(ae),re="https://api.vk.com/method/",oe="470c6262470c6262470c62624a476171c74470c470c62621a81abc51a6bc2a2df1c0664",ce="176551026",ie={access_token:oe},se=H.a.create({baseURL:re}),le=function e(){Object(Z.a)(this,e)};le.get=function(){var e=Object(p.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.get(t,{params:Object.assign(a,ie)});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),le.post=function(){var e=Object(p.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.post(t,a);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),le.jsonp=function(){var e=Object(p.a)(u.a.mark((function e(t,a,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(re).concat(t,"?access_token=").concat(oe,"&photos=").concat(a.photos,"&extended=0&photo_sizes=0&v=5.101"),e.next=3,ne()(r,null,n);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();var ue=a(124),pe=a.n(ue),de=function(e){var t=e.again,a=e.redirectSiberiaHandmade;return r.a.createElement("div",{className:"product"},r.a.createElement("img",{src:pe.a,className:"img-search"}),r.a.createElement("div",null,r.a.createElement(P.a,{size:"l",level:"outline",className:"btn-white",onClick:t},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437!"),r.a.createElement(P.a,{size:"l",level:"outline",className:"btn-white",onClick:a},"\u041f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043d\u0435 \u043f\u043e\u0434\u0430\u0440\u043e\u043a!")))},fe=Object(I.b)(),me="photos.getById",he=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),o=a[0],c=a[1],i=Object(n.useContext)(g),l=i.state,f=i.dispatch,m={},h=function(){var e=Object(p.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.name,t.currentTarget.innerText,s.a.supports("VKWebAppShowWallPostBox")&&s.a.send("VKWebAppShowWallPostBox",{message:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0434\u0430\u0440\u043a\u043e\u0432! \u0425\u043e\u0447\u0443 \u0441\u0435\u0431\u0435 ".concat(a.name,"!"),attachments:"photo".concat(a.img_fullname,", https://vk.com/siberia_handmade")});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.parent.location="https://vk.com/siberia_handmade?w=app6887721_-176551026";case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e,t){e?(console.error("ERROR get images",e.message),f({type:"setPopout",payload:{popout:!1,error:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0412\u041a!"}})):(m.map((function(e){return t.response.forEach((function(t){e.img&&e.img.includes(t.id)&&(e.img_url=t.sizes[3].url)})),e})),f({type:"getFilteredProducts",payload:{filteredProducts:m,popout:!1}}))};Object(n.useEffect)((function(){f({type:"setPopout",payload:{popout:!0}}),function(){var e=(m=te.filter(l.products,l.indicators)).map((function(e){return e.img?(e.img_fullname="-".concat(ce,"_").concat(String(e.img).split(",")[0].trim()),e.img_fullname):""})).filter((function(e){return!!e})).join(",");e?le.jsonp(me,{photos:e},b):f({type:"getFilteredProducts",payload:{filteredProducts:m,popout:!1}})}()}),[]);var y=l.filteredProducts.length,w=l.filteredProducts.map((function(e,t){return r.a.createElement(Y,{give:h,buy:v,key:t,item:++t,product:e,count:y})})),O=o+1,_=l.filteredProducts[o],k=_&&_.name;return r.a.createElement("div",{className:"wrapper",id:e.id},r.a.createElement("div",{className:"panel"},r.a.createElement(E.a,{className:"header"},r.a.createElement("button",{className:"btn-back",onClick:function(t){f({type:"setActivePanel",payload:{activePanel:e.back_id}})},"data-to":e.back_id},fe===I.a?r.a.createElement(T.a,null):r.a.createElement(z.a,null)),r.a.createElement(E.a,{className:"header-title"},y&&y!==o?"".concat(O," \u0438\u0437 ").concat(y,": ").concat(k):"\u041d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0447\u0442\u043e \u0438\u0441\u043a\u0430\u043b\u0438?")),r.a.createElement("div",{className:"container-items",ref:function(e){if(e){var t=document.getElementById("root"),a=e.getBoundingClientRect().height>t.scrollHeight;console.log("log-- ",e.getBoundingClientRect().height,t.scrollHeight),console.log("isOverflow-- ",e.getBoundingClientRect().height>t.scrollHeight),l.isOverflow!==a&&l.panelOverflow!==l.activePanel&&f({type:"setOverflow",payload:{isOverflow:a,panelOverflow:l.activePanel}})}}},r.a.createElement("div",{className:"block-items"},r.a.createElement("div",null,r.a.createElement("div",{className:"slider-wrap"},!!y&&0!==o&&r.a.createElement(G.a,{className:"slider-btn slider-btn-left",onClick:function(){return c(0===o?0:o-1)},before:r.a.createElement(M.a,{width:40,height:40})}),r.a.createElement("div",{className:"slider-gallery"},r.a.createElement(D.a,{className:"gallery",align:"center",slideIndex:o,onChange:function(e){return c(e)}},w,r.a.createElement(de,{again:function(e){f({type:"setActivePanel",payload:{activePanel:"home"}})},redirectSiberiaHandmade:function(e){window.parent.location="https://vk.com/siberia_handmade?w=app6887721_-176551026"}}))),!!y&&y!==o&&r.a.createElement(G.a,{className:"slider-btn slider-btn-right",onClick:function(){return c(o+1)},before:r.a.createElement(L.a,{width:40,height:40})})))),!!y&&y!==o&&r.a.createElement("div",{className:"btn-wrap-items"},r.a.createElement(P.a,{size:"l",level:"outline",className:"btn-white","data-product":_.id,"data-name":_.name,onClick:function(e){return v(e)}},"\u0413\u0434\u0435 \u043a\u0443\u043f\u0438\u0442\u044c?"),r.a.createElement(P.a,{size:"l",level:"outline",className:"btn-white",onClick:function(e){return h(e,_)}},"\u0425\u043e\u0447\u0443 \u0441\u0435\u0431\u0435!")))))},ve=a(37),be=function(e,t){var a={age:[],event:[],hobby:[],how:[],relation:[],sex:[],profession:[]};return e.forEach((function(e){Object.keys(e).forEach((function(t){void 0!==a[t]&&e[t].split(",").map((function(e){var n=$(e);n&&a[t].push(n)}))}))})),a.age=Object(ve.a)(new Set(a.age.sort())),a.event=Object(ve.a)(new Set(a.event.sort())),a.hobby=Object(ve.a)(new Set(a.hobby.sort())),a.how=Object(ve.a)(new Set(a.how.sort())),a.sex=Object(ve.a)(new Set(a.sex.sort())),a.profession=Object(ve.a)(new Set(a.profession.sort())),a.relation=t.map((function(e){if(void 0!==e.relation)return $(e.relation)})).filter((function(e){return!!e})),a},ye={activePanel:"home",isOverflow:!1,panelOverflow:"",fetchedUser:{bdate:"",city:{id:null,title:""},country:{id:1,title:"\u0420\u043e\u0441\u0441\u0438\u044f"},first_name:"",id:null,last_name:"",photo_100:"",photo_200:"",photo_max_orig:"",sex:null,timezone:null},popout:!1,error:"",types:{how:[],sex:[],relation:[],age:[],profession:[],hobby:[],event:[]},products:[],filteredProducts:[],indicators:{sex:null,relation:null,age:null,how:null,profession:null,hobby:null,event:null}},ge=function(){var e=Object(n.useReducer)(y,ye),t=Object(d.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetAuthToken",{app_id:7125353,scope:"docs"});case 2:t=e.sent,console.log("data-- ",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,o({type:"setUser",payload:{fetchedUser:t,popout:!1}});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o({type:"setPopout",payload:{popout:!0}}),s.a.subscribe((function(e){var t=e.detail,a=t.type;t.data;if("VKWebAppUpdateConfig"===a)document.createAttribute("scheme")})),function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,Object.keys(t.types[0]),a=be(t.products,t.types),o({type:"setTypes",payload:{types:a,popout:!1}}),o({type:"getAllProducts",payload:{products:t.products,popout:!1}});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o({type:"setPopout",payload:{popout:!0}}),function(){e.apply(this,arguments)}()}),[]);return r.a.createElement(g.Provider,{value:{state:a,dispatch:o}},r.a.createElement("div",{className:a.isOverflow?"container-height-auto":"container"},r.a.createElement(m.a,{activePanel:a.activePanel,popout:a.popout?r.a.createElement(C.a,{size:"large"}):null},r.a.createElement(x,{id:"home",fetchedUser:a.fetchedUser}),r.a.createElement(K,{id:"how",to_id:"sex",back_id:"home",title:"\u041a\u0430\u043a \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0434\u0430\u0440\u043e\u043a?",types:a.types.how}),r.a.createElement(K,{withHeader:!0,id:"sex",back_id:"how",to_id:"age",title:"\u041a\u043e\u043c\u0443 \u0438\u0449\u0435\u043c \u043f\u043e\u0434\u0430\u0440\u043e\u043a?",types:a.types.sex}),r.a.createElement(K,{withHeader:!0,id:"age",back_id:"sex",to_id:ee[a.indicators.how]||"list_products",title:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0442?",types:a.types.age}),r.a.createElement(K,{withHeader:!0,id:"profession",back_id:"age",to_id:"list_products",title:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f?",types:a.types.profession}),r.a.createElement(K,{withHeader:!0,id:"relation",back_id:"age",to_id:"list_products",title:"\u041a\u0435\u043c \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f?",types:function(){var e,t=[];for(e in a.types.relation)a.types.relation.hasOwnProperty(e)&&("\u041c\u0443\u0436\u0447\u0438\u043d\u0435"===a.indicators.sex?+e<=6:+e>6)&&t.push(a.types.relation[e]);return t}()}),r.a.createElement(K,{withHeader:!0,id:"hobby",back_id:"age",to_id:"list_products",title:"\u0423\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435?",types:a.types.hobby}),r.a.createElement(K,{withHeader:!0,id:"event",back_id:"age",to_id:"list_products",title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435?",types:a.types.event}),r.a.createElement(he,{id:"list_products",back_id:ee[a.indicators.how]||"age"})),r.a.createElement("span",{className:"error"},a.error)))};s.a.send("VKWebAppInit"),c.a.render(r.a.createElement(ge,null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.d808a0fa.chunk.js.map