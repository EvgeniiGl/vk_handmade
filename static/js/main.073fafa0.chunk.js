(window.webpackJsonpvk_handmade=window.webpackJsonpvk_handmade||[]).push([[0],{110:function(e,t){},119:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},206:function(e,t,a){e.exports=a(327)},294:function(e,t){},295:function(e,t){},327:function(e,t,a){"use strict";a.r(t);a(207),a(233),a(235),a(236),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275);var n=a(0),r=a.n(n),o=a(82),c=a.n(o),i=a(20),s=a.n(i),l=a(7),u=a.n(l),p=a(18),d=a(63),f=a(126),m=a.n(f),h=(a(284),a(52));function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=function(e,t){switch(t.type){case"setActivePanel":return b({},e,{activePanel:t.payload.activePanel,indicators:b({},e.indicators,{},t.payload.data)});case"setPopout":return b({},e,{popout:t.payload.popout,error:t.payload.error});case"setUser":return b({},e,{fetchedUser:t.payload.fetchedUser,popout:t.payload.popout});case"setIndicators":return b({},e,{activePanel:t.payload.activePanel,indicators:b({},e.indicators,{},t.payload.data)});case"setTypes":return b({},e,{types:t.payload.types,popout:t.payload.popout});case"getAllProducts":return b({},e,{products:t.payload.products,popout:t.payload.popout});case"getFilteredProducts":return console.log("getFilteredProducts-- "),b({},e,{filteredProducts:t.payload.filteredProducts,popout:t.payload.popout});default:return b({},e,{error:"\u0422\u0430\u043a\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"})}},g=r.a.createContext(),E=a(21),w=a.n(E),P=a(38),_=a.n(P),k=function(e){return r.a.createElement(_.a,{size:"l",level:"outline",onClick:e.handleClick,className:e.active?"btn-primary":"btn-white","data-to":e.data_to},e.children)},O=function(e){var t=Object(n.useContext)(g).dispatch;return r.a.createElement("div",{id:e.id,className:"wrapper bg-blue"},r.a.createElement(w.a,{className:""},"\u041d\u0435 \u0437\u043d\u0430\u0435\u0448\u044c \u0447\u0442\u043e \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u044c?"),r.a.createElement(w.a,{className:""},"\u043c\u044b \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u043d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"),r.a.createElement(k,{data_to:"how",handleClick:function(e){t({type:"setActivePanel",payload:{activePanel:e.currentTarget.dataset.to}})}},"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0430\u0440\u043e\u043a!"))},x=a(127),j=a.n(x),C=a(64),N=a(45),A=a.n(N),S=function(){return A.a.request({url:"https://docs.google.com/spreadsheets/d/1Oikpp2P8Tp4I8s4gIJEjK4rnR4WRIoG8SMyawtCifSs/export?format=xlsx",method:"get",responseType:"arraybuffer",headers:{Accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}}).then((function(e){var t=new Uint8Array(e.data),a=C.read(t,{type:"array"}),n=a.Sheets[a.SheetNames[0]],r=a.Sheets[a.SheetNames[1]];return{types:C.utils.sheet_to_json(n),products:C.utils.sheet_to_json(r)}}))},T=a(47),U=a(61),H=a.n(U),I=a(51),z=a.n(I),W=a(62),R=a.n(W),K=a(59),V=a.n(K),D=a(60),B=a.n(D),F=(a(119),Object(T.b)()),G=function(e){var t=Object(n.useContext)(g),a=t.state,o=t.dispatch,c=Object.values(e.types).map((function(t){return r.a.createElement(k,{key:t,handleClick:function(a){return function(e,t){o({type:"setIndicators",payload:{data:t,activePanel:e.currentTarget.dataset.to}})}(a,Object(h.a)({},e.id,t))},data_to:e.to_id,active:a.indicators[e.id]===t},t)}));return r.a.createElement(H.a,{id:e.id},e.withHeader&&r.a.createElement(z.a,{left:r.a.createElement(R.a,{onClick:function(t){o({type:"setActivePanel",payload:{data:Object(h.a)({},e.id,null),activePanel:t.currentTarget.dataset.to}})},"data-to":e.back_id},F===T.a?r.a.createElement(V.a,null):r.a.createElement(B.a,null))}),r.a.createElement(w.a,{className:"wrapper bg-gray"},r.a.createElement(w.a,null,e.title),c))},J=a(125),L=a.n(J),q=a(58),M=a.n(q),Q=a(121),X=a.n(Q),Y=a(122),Z=a.n(Y),$=a(123),ee=a.n($),te=function(e){var t=e.product,a=e.count,n=e.item,o=e.give,c=e.buy;return r.a.createElement("div",{className:"product"},r.a.createElement("div",null,"\u0418\u0434\u0435\u044f ",n," \u0438\u0437 ",a,":",r.a.createElement("br",null)," ",t.name),r.a.createElement("div",null,r.a.createElement("img",{className:"img-product",src:t.img_url||ee.a,alt:"Persik The Cat"})),r.a.createElement("div",null,r.a.createElement(_.a,{size:"l",level:"outline",className:"btn-primary","data-product":t.id,"data-name":t.name,onClick:function(e){return c(e)}},"\u0413\u0434\u0435 \u043a\u0443\u043f\u0438\u0442\u044c?"),r.a.createElement(_.a,{size:"l",level:"outline",className:"btn-primary",onClick:function(e){return o(e,t)}},"\u0425\u043e\u0447\u0443 \u0441\u0435\u0431\u0435!")))},ae=a(46),ne=function(e){var t=e.trim();return""===t?"":t[0].toUpperCase()+t.slice(1)},re={"\u041f\u043e \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f\u043c":"hobby","\u041f\u043e \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438":"profession","\u0420\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u0443":"relation","\u041d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435":"event"},oe=function e(){Object(ae.a)(this,e)};oe.filter=function(e,t){return oe.indicators=t,e.filter((function(e){var t=void 0===re[oe.indicators.how]||oe["is".concat(re[oe.indicators.how].charAt(0).toUpperCase()).concat(re[oe.indicators.how].slice(1))](e);return oe.isHow(e)&&oe.isSex(e)&&oe.isAge(e)&&t}))},oe.isHow=function(e){return void 0===e.how||e.how.split(",").filter((function(e){return oe.indicators.how===ne(e)})).length>0},oe.isSex=function(e){return void 0===e.sex||e.sex.split(",").filter((function(e){return oe.indicators.sex===ne(e)})).length>0},oe.isAge=function(e){return void 0===e.age||e.age.split(",").filter((function(e){return oe.indicators.age===ne(e)})).length>0},oe.isEvent=function(e){return void 0===e.event||e.event.split(",").filter((function(e){return oe.indicators===ne(e)})).length>0},oe.isHobby=function(e){return void 0===e.hobby||e.hobby.split(",").filter((function(e){return oe.indicators.hobby===ne(e)})).length>0},oe.isProfession=function(e){return void 0===e.profession||e.profession.split(",").filter((function(e){return oe.indicators.profession===ne(e)})).length>0},oe.isRelation=function(e){return void 0===e.relation||e.relation.split(",").filter((function(e){return oe.indicators.relation===ne(e)})).length>0};var ce=a(124),ie=a.n(ce),se="https://api.vk.com/method/",le="470c6262470c6262470c62624a476171c74470c470c62621a81abc51a6bc2a2df1c0664",ue="176551026",pe={access_token:le},de=A.a.create({baseURL:se}),fe=function e(){Object(ae.a)(this,e)};fe.get=function(){var e=Object(p.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.get(t,{params:Object.assign(a,pe)});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),fe.post=function(){var e=Object(p.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a),e.prev=1,e.next=4,de.post(t,a);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),fe.jsonp=function(){var e=Object(p.a)(u.a.mark((function e(t,a,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(se).concat(t,"?access_token=").concat(le,"&photos=").concat(a.photos,"&extended=0&photo_sizes=0&v=5.101"),e.next=3,ie()(r,null,n);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();var me=function(e){var t=e.again,a=e.redirectSiberiaHandmade;return r.a.createElement("div",{className:"product"},r.a.createElement("div",null,"\u041d\u0435 \u043d\u0430\u0448\u043b\u0438 \u0447\u0442\u043e \u0438\u0441\u043a\u0430\u043b\u0438?"),r.a.createElement("div",null,r.a.createElement(_.a,{size:"l",level:"outline",className:"btn-primary",onClick:t},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437!"),r.a.createElement(_.a,{size:"l",level:"outline",className:"btn-primary",onClick:a},"\u041f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043d\u0435 \u043f\u043e\u0434\u0430\u0440\u043e\u043a!")))},he=(A.a.create({baseURL:"https://oauth.vk.com/authorize"}),Object(T.b)()),ye="photos.getById",be=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),o=a[0],c=a[1],i=Object(n.useContext)(g),l=i.state,f=i.dispatch,m={},h=function(){var e=Object(p.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.a.supports("VKWebAppShowWallPostBox")&&s.a.send("VKWebAppShowWallPostBox",{message:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0434\u0430\u0440\u043a\u043e\u0432! \u0425\u043e\u0447\u0443 \u0441\u0435\u0431\u0435 ".concat(a.name,"!"),attachments:"photo".concat(a.img_fullname,", https://vk.com/siberia_handmade")});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(e){e.currentTarget.dataset.name;console.log("product_id-- ",e.currentTarget.dataset.product);e.currentTarget.innerText;console.log("btn-- ",e.currentTarget.innerText),console.log("time-- ",(new Date).toLocaleString()),console.log("indicators-- ",l.indicators),s.a.send("VKWebAppGetAuthToken",{app_id:7148453,scope:"messages"})},b=function(e,t){e?(console.error("ERROR get images",e.message),f({type:"setPopout",payload:{popout:!1,error:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0412\u041a!"}})):(console.log("data-- ",t),m.map((function(e){return t.response.forEach((function(t){e.img&&e.img.includes(t.id)&&(e.img_url=t.sizes[3].url)})),e})),f({type:"getFilteredProducts",payload:{filteredProducts:m,popout:!1}}))};Object(n.useEffect)((function(){f({type:"setPopout",payload:{popout:!0}}),function(){var e=(m=oe.filter(l.products,l.indicators)).map((function(e){return e.img?(e.img_fullname="-".concat(ue,"_").concat(e.img.split(",")[0].trim()),e.img_fullname):""})).join(",");e?fe.jsonp(ye,{photos:e},b):f({type:"getFilteredProducts",payload:{filteredProducts:m,popout:!1}})}()}),[]);var v=l.filteredProducts.length,E=l.filteredProducts.map((function(e,t){return r.a.createElement(te,{give:h,buy:y,key:t,item:++t,product:e,count:v})}));return console.log("slideIndex-- ",o),console.log("countProducts-- ",v),console.log("state.filteredProducts-- ",l.filteredProducts),r.a.createElement(H.a,{id:e.id},r.a.createElement(z.a,{left:r.a.createElement(R.a,{onClick:function(t){f({type:"setActivePanel",payload:{activePanel:e.back_id}})},"data-to":"age"},he===T.a?r.a.createElement(V.a,null):r.a.createElement(B.a,null))}),r.a.createElement("div",null,r.a.createElement(w.a,{className:"title"},"\u041c\u044b \u043a\u043e\u0435-\u0447\u0442\u043e \u043d\u0430\u0448\u043b\u0438"),r.a.createElement(w.a,{className:"slider-wrap"},!!v&&0!==o&&r.a.createElement(M.a,{className:"slider-btn",onClick:function(){return c(0===o?0:o-1)},before:r.a.createElement(X.a,null)}),r.a.createElement(w.a,{className:"slider-gallery"},r.a.createElement(L.a,{className:"gallery",slideWidth:"98%",align:"center",slideIndex:o,onChange:function(e){return c(e)}},E,r.a.createElement(me,{again:function(e){console.log("again-- "),f({type:"setActivePanel",payload:{activePanel:"home"}})},redirectSiberiaHandmade:function(e){console.log("redirectSiberiaHandmade-- "),window.location.href="https://vk.com/siberia_handmade?w=app6887721_-176551026"}}))),!!v&&v!==o&&r.a.createElement(M.a,{className:"slider-btn",onClick:function(){return c(o+1)},before:r.a.createElement(Z.a,null)}))))},ve={activePanel:"home",fetchedUser:{bdate:"",city:{id:null,title:""},country:{id:1,title:"\u0420\u043e\u0441\u0441\u0438\u044f"},first_name:"",id:null,last_name:"",photo_100:"",photo_200:"",photo_max_orig:"",sex:null,timezone:null},popout:!1,error:"",types:{how:{},sex:{},relation:{},age:{},profession:{},hobby:{},event:{}},products:[],filteredProducts:[],indicators:{sex:null,relation:null,age:null,how:"",profession:null,hobby:null,event:null}},ge=function(){var e=Object(n.useReducer)(v,ve),t=Object(d.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,o({type:"setUser",payload:{fetchedUser:t,popout:!1}});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o({type:"setPopout",payload:{popout:!0}}),s.a.subscribe((function(e){var t=e.detail,a=t.type;t.data;if("VKWebAppUpdateConfig"===a){var n=document.createAttribute("scheme");console.log("schemeAttribute-- ",n)}})),function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,a=Object.keys(t.types[0]),n={},a.forEach((function(e){n[e]={}})),t.types.forEach((function(e){a.forEach((function(t){void 0!==e[t]&&(n[t][e.id]=ne(e[t]))}))})),o({type:"setTypes",payload:{types:n,popout:!1}}),o({type:"getAllProducts",payload:{products:t.products,popout:!1}});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o({type:"setPopout",payload:{popout:!0}}),function(){e.apply(this,arguments)}()}),[]);return r.a.createElement(g.Provider,{value:{state:a,dispatch:o}},r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{activePanel:a.activePanel,popout:a.popout?r.a.createElement(j.a,{size:"large"}):null},r.a.createElement(O,{id:"home",fetchedUser:a.fetchedUser}),r.a.createElement(G,{id:"how",to_id:"sex",title:"\u041a\u0430\u043a \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0434\u0430\u0440\u043e\u043a?",types:a.types.how}),r.a.createElement(G,{withHeader:!0,id:"sex",back_id:"how",to_id:"age",title:"\u041a\u043e\u043c\u0443 \u0438\u0449\u0435\u043c \u043f\u043e\u0434\u0430\u0440\u043e\u043a?",types:a.types.sex}),r.a.createElement(G,{withHeader:!0,id:"age",back_id:"sex",to_id:re[a.indicators.how]||"list_products",title:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0442?",types:a.types.age}),r.a.createElement(G,{withHeader:!0,id:"profession",back_id:"age",to_id:"list_products",title:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f?",types:a.types.profession}),r.a.createElement(G,{withHeader:!0,id:"relation",back_id:"age",to_id:"list_products",title:"\u041a\u0435\u043c \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f?",types:function(){var e,t={};for(e in a.types.relation)a.types.relation.hasOwnProperty(e)&&("\u041c\u0443\u0436\u0447\u0438\u043d\u0435"===a.indicators.sex?+e<=7:+e>7)&&(t[e]=a.types.relation[e]);return t}()}),r.a.createElement(G,{withHeader:!0,id:"hobby",back_id:"age",to_id:"list_products",title:"\u0423\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435?",types:a.types.hobby}),r.a.createElement(G,{withHeader:!0,id:"event",back_id:"age",to_id:"list_products",title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435?",types:a.types.event}),r.a.createElement(be,{id:"list_products",back_id:re[a.indicators.how]||"age"})),r.a.createElement("span",{className:"error"},a.error)))};s.a.send("VKWebAppInit"),c.a.render(r.a.createElement(ge,null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.073fafa0.chunk.js.map