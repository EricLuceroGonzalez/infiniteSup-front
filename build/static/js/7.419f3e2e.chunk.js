(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{82:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(29),o=a(19),l=a(7),s=a(8);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"Ha ocurrido un error!",show:!!e.error,footer:r.a.createElement(o.a,{onClick:e.onClear},r.a.createElement(l.a,{icon:s.d})," ","REGRESAR")},r.a.createElement("p",null,e.error))}},99:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(14),o=a(2),l=a(0),s=a.n(l),i=a(20),m=a.n(i),u=(a(47),a(5)),d=(a(48),a(49),a(7)),p=a(8),f=a(17),E=a(15),v=(a(82),a(16));t.default=function(){var e=function(){var e=Object(l.useState)([0,0]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(l.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),t=Object(o.a)(e,1)[0],a=Object(f.a)(),n=a.isLoading,i=(a.error,a.sendRequest),b=(a.clearError,Object(l.useState)([])),g=Object(o.a)(b,2),w=g[0],h=g[1];Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat("https://infinte-supplies.herokuapp.com/api","/content/getBlog"));case 3:t=e.sent,h(t.blogContent),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[i]);return s.a.createElement("div",{className:"mt-3"},s.a.createElement(v.a,null,s.a.createElement("title",null,"Infinite Supplies | Blog"),s.a.createElement("meta",{name:"description",content:"Los mejores productos de limpieza para la industria y el hogar, desinfectantes, detergentes e insumos. Nuestro blog con las mejores recomendaciones"})),n&&s.a.createElement(E.a,{asOverlay:!0}),s.a.createElement("h1",{className:"itemTitle"},"Blog"),s.a.createElement("div",null,w.map((function(e,a){return s.a.createElement(u.b,{key:a,style:{textDecoration:"none"},to:"/blog/".concat(e._id)},s.a.createElement("div",{className:"row d-flex col-10 col-md-6 mr-auto ml-auto bordeC entryBox"},s.a.createElement("p",{className:"entryTitle col-12"},e.title),s.a.createElement("div",{className:"col-10 col-sm-4"},s.a.createElement("p",{className:"entryDate"}," ",m()(e.creationDate).format("LL")),s.a.createElement("p",{className:"para"}," ",e.resumen)),t>"500"?s.a.createElement("div",{className:"col-10 col-sm-8 d-flex align-items-end"},s.a.createElement("img",{className:"entryImg",src:e.image,alt:"blog entry"}),s.a.createElement(d.a,{className:"ml-auto entryArrow",icon:p.e})):s.a.createElement("div",{className:"col-2 entryArrow"},s.a.createElement(d.a,{icon:p.e}))))}))))}}}]);
//# sourceMappingURL=7.419f3e2e.chunk.js.map