(window.webpackJsonpvk_handmade=window.webpackJsonpvk_handmade||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},186:function(e,t,a){e.exports=a(276)},276:function(e,t,a){"use strict";a.r(t);a(187),a(213),a(215),a(216),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255);var n=a(0),r=a.n(n),c=a(73),l=a.n(c),i=a(74),o=a.n(i),s=a(56),d=a(106),u=a.n(d),m=(a(263),a(101));function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e,t){switch(t.type){case"setActivePanel":return v({},e,{activePanel:t.payload.activePanel});case"setPopout":return v({},e,{popout:t.payload.popout});case"setUser":return v({},e,{fetchedUser:t.payload.fetchedUser,popout:null});case"setSex":return v({},e,{activePanel:t.payload.activePanel,indicators:v({},e.indicators,{sex:t.payload.sex})});case"setRelation":return v({},e,{activePanel:t.payload.activePanel,indicators:v({},e.indicators,{relation:t.payload.relation})});case"setAge":return console.log("action.payload-- ",t.payload),v({},e,{activePanel:t.payload.activePanel,indicators:v({},e.indicators,{age:t.payload.age})});default:return e}},f=r.a.createContext(),g=a(8),h=a.n(g),y=a(54),b=a.n(y),P=function(e){return r.a.createElement(b.a,{size:"l",level:"outline",onClick:e.handleClick,className:e.active?"btn-primary":"btn-white","data-to":e.data_to},e.children)},k=function(e){var t=Object(n.useContext)(f).dispatch;return r.a.createElement("div",{id:e.id,className:"wrapper bg-blue"},r.a.createElement(h.a,{className:""},"\u041d\u0435 \u0437\u043d\u0430\u0435\u0448\u044c \u0447\u0442\u043e \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u044c?"),r.a.createElement(h.a,{className:""},"\u043c\u044b \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u043d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"),r.a.createElement(P,{data_to:"whom",handleClick:function(e){t({type:"setActivePanel",payload:{activePanel:e.currentTarget.dataset.to}})}},"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0430\u0440\u043e\u043a!"))},w=(a(49),function(e){var t=Object(n.useContext)(f),a=t.state,c=t.dispatch,l=function(e,t){console.log("log-- dataset",e.currentTarget.dataset),c({type:"setSex",payload:{sex:t,activePanel:e.currentTarget.dataset.to}})};return console.log("state",a.indicators.sex),r.a.createElement("div",{id:e.id,className:"wrapper bg-gray"},r.a.createElement(h.a,null,"\u041a\u043e\u043c\u0443 \u0438\u0449\u0435\u043c \u043f\u043e\u0434\u0430\u0440\u043e\u043a?"),r.a.createElement(h.a,null,r.a.createElement(P,{handleClick:function(e){return l(e,"man")},data_to:"who_have",active:"man"===a.indicators.sex},"\u041c\u0443\u0436\u0447\u0438\u043d\u0435"),r.a.createElement(P,{handleClick:function(e){return l(e,"woman")},data_to:"who_have",active:"woman"===a.indicators.sex},"\u0416\u0435\u043d\u0449\u0438\u043d\u0435")))}),O=a(19),C=a(34),_=a.n(C),j=a(38),x=a.n(j),N=a(35),A=a.n(N),T=a(36),U=a.n(T),S=a(37),D=a.n(S),I=Object(O.b)(),R=function(e){var t=Object(n.useContext)(f),a=t.state,c=t.dispatch,l=function(e,t){c({type:"setRelation",payload:{relation:t,activePanel:e.currentTarget.dataset.to}})};return r.a.createElement(D.a,{id:e.id},r.a.createElement(_.a,{left:r.a.createElement(x.a,{onClick:function(e){c({type:"setActivePanel",payload:{activePanel:e.currentTarget.dataset.to}})},"data-to":"whom"},I===O.a?r.a.createElement(A.a,null):r.a.createElement(U.a,null))}),r.a.createElement(h.a,{className:"wrapper bg-gray"},r.a.createElement(h.a,null,"\u041a\u0435\u043c \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f?"),r.a.createElement(P,{handleClick:function(e){return l(e,"relative")},data_to:"age",active:"relative"===a.indicators.relation},"\u0420\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a"),r.a.createElement(P,{handleClick:function(e){return l(e,"friend")},data_to:"age",active:"friend"===a.indicators.relation},"\u0414\u0440\u0443\u0433"),r.a.createElement(P,{handleClick:function(e){return l(e,"colleague")},data_to:"age",active:"colleague"===a.indicators.relation},"\u041a\u043e\u043b\u0435\u0433\u0430"),r.a.createElement(P,{handleClick:function(e){return l(e,"couple")},data_to:"age",active:"couple"===a.indicators.relation},"\u041f\u0430\u0440\u0430"),r.a.createElement(P,{handleClick:function(e){return l(e,"other")},data_to:"age",active:"other"===a.indicators.relation},"\u0414\u0440\u0443\u0433\u043e\u0435")))},z=Object(O.b)(),J=function(e){var t=Object(n.useContext)(f),a=t.state,c=t.dispatch,l=function(e,t){console.log("log-- age",t),c({type:"setAge",payload:{age:t,activePanel:e.currentTarget.dataset.to}})};return console.log("loage",a.indicators.age),r.a.createElement(D.a,{id:e.id},r.a.createElement(_.a,{left:r.a.createElement(x.a,{onClick:function(e){c({type:"setActivePanel",payload:{activePanel:e.currentTarget.dataset.to}})},"data-to":"who_have"},z===O.a?r.a.createElement(A.a,null):r.a.createElement(U.a,null))}),r.a.createElement(h.a,{className:"wrapper bg-gray"},r.a.createElement(h.a,null,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0442?"),r.a.createElement(P,{handleClick:function(e){return l(e,0)},data_to:"list_products",active:0===a.indicators.age},"\u043e\u0442 0 \u0434\u043e 10 \u043b\u0435\u0442"),r.a.createElement(P,{handleClick:function(e){return l(e,1)},data_to:"list_products",active:1===a.indicators.age},"\u043e\u0442 11 \u0434\u043e 16 \u043b\u0435\u0442"),r.a.createElement(P,{handleClick:function(e){return l(e,2)},data_to:"list_products",active:2===a.indicators.age},"\u043e\u0442 17 \u0434\u043e 20 \u043b\u0435\u0442"),r.a.createElement(P,{handleClick:function(e){return l(e,3)},data_to:"list_products",active:3===a.indicators.age},"\u043e\u0442 21 \u0434\u043e 30 \u043b\u0435\u0442"),r.a.createElement(P,{handleClick:function(e){return l(e,4)},data_to:"list_products",active:4===a.indicators.age},"\u043e\u0442 30 \u0438 \u0441\u0442\u0430\u0440\u0448\u0435")))},W=a(107),B=a(105),K=a.n(B),V=a(55),q=a.n(V),F=a(102),G=a.n(F),H=a(103),L=a.n(H),M=a(104),Q=a.n(M),X=function(e){return r.a.createElement("div",{className:"product"},r.a.createElement("div",null,r.a.createElement("img",{className:"img-product",src:Q.a,alt:"Persik The Cat"})),r.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"),r.a.createElement("div",null,r.a.createElement("div",null,"4600 \u0440."),r.a.createElement(b.a,{size:"l",level:"outline",className:"btn-white"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441!")))},Y=Object(O.b)(),Z=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useContext)(f),o=(i.state,i.dispatch),d=Object(W.a)(Array(10).keys()).map((function(e){return r.a.createElement(X,{key:e})}));return r.a.createElement(D.a,{id:e.id},r.a.createElement(_.a,{left:r.a.createElement(x.a,{onClick:function(e){o({type:"setActivePanel",payload:{activePanel:e.currentTarget.dataset.to}})},"data-to":"age"},Y===O.a?r.a.createElement(A.a,null):r.a.createElement(U.a,null))}),r.a.createElement("div",null,r.a.createElement(h.a,{className:"slider-wrap"},r.a.createElement(q.a,{className:"slider-btn",onClick:function(){return l(0===c?0:c-1)},before:r.a.createElement(G.a,null)}),r.a.createElement(h.a,{className:"slider-gallery"},r.a.createElement(K.a,{className:"gallery",slideWidth:"98%",align:"center",slideIndex:c,onChange:function(e){return l(e)}},d)),r.a.createElement(q.a,{className:"slider-btn",onClick:function(){return l(2===c?0:c+1)},before:r.a.createElement(L.a,null)}))))},$={activePanel:"home",fetchedUser:null,popout:null,indicators:{sex:null,relation:null,age:null}},ee=function(){var e=Object(n.useReducer)(E,$),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(f.Provider,{value:{state:a,dispatch:c}},r.a.createElement("div",{className:"container"},r.a.createElement(u.a,{activePanel:a.activePanel,popout:a.popout},r.a.createElement(k,{id:"home",fetchedUser:a.fetchedUser}),r.a.createElement(w,{id:"whom"}),r.a.createElement(R,{id:"who_have"}),r.a.createElement(J,{id:"age"}),r.a.createElement(Z,{id:"list_products"}))))};o.a.send("VKWebAppInit"),l.a.render(r.a.createElement(ee,null),document.getElementById("root"))},49:function(e,t,a){}},[[186,1,2]]]);
//# sourceMappingURL=main.51d14bce.chunk.js.map