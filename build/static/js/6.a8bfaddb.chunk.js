(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{85:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(29),l=a(19),o=a(7),s=a(8);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"Ha ocurrido un error!",show:!!e.error,footer:r.a.createElement(l.a,{onClick:e.onClear},r.a.createElement(o.a,{icon:s.d})," ","REGRESAR")},r.a.createElement("p",null,e.error))}},89:function(e,t,a){e.exports=a.p+"static/media/logo_sm_cut.c3c1755e.png"},98:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(14),l=a(2),o=a(0),s=a.n(o),i=a(20),m=a.n(i),u=(a(47),a(48),a(8)),p=a(7),d=a(19),E=a(89),f=a.n(E),g=a(16),h=a(15),v=(a(85),a(17));t.default=function(e){var t=Object(o.useState)([]),a=Object(l.a)(t,2),n=a[0],i=a[1],E=Object(g.a)(),b=E.isLoading,N=(E.error,E.sendRequest);E.clearError;Object(o.useEffect)((function(){(function(){var t=Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N("".concat("https://infinte-supplies.herokuapp.com/api","/content/getBlog/").concat(e.match.params.id));case 3:a=t.sent,i(a.blogContent),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[N,e]);return s.a.createElement("div",{className:"mt-3"},s.a.createElement(v.a,null,s.a.createElement("title",null,"Infinite Supplies | ".concat(n.title?n.title:"Blog")),s.a.createElement("meta",{name:"description",content:"Los mejores productos de limpieza para la industria y el hogar, desinfectantes, detergentes e insumos. Nuestro blog con las mejores recomendaciones"})),b&&s.a.createElement(h.a,{asOverlay:!0}),s.a.createElement("h1",{className:"itemTitle"},"Blog"),s.a.createElement("div",null,s.a.createElement("div",{className:"col-12 mr-auto ml-auto"},s.a.createElement("div",{className:"col-12 mr-auto ml-auto"},s.a.createElement("h2",null,n.title),s.a.createElement("p",{className:"entryDate"}," ",m()(n.creationDate).format("LL")),s.a.createElement("div",null,s.a.createElement("p",{className:"itemTitle"},n.abstract))),s.a.createElement("div",{className:"mr-auto ml-auto col-12 col-md-10 col-lg-7"},s.a.createElement("img",{width:"90%",src:n.image,alt:"brand logo as footer"}),s.a.createElement("p",{className:"para"},n.textContent)))),s.a.createElement(d.a,{floating:!0,toBack:"/blog"},s.a.createElement(p.a,{icon:u.a})),s.a.createElement("div",{className:"col-12 mt-5 mb-4"},s.a.createElement("img",{width:"100px",src:f.a,alt:"brand logo as footer"})))}}}]);
//# sourceMappingURL=6.a8bfaddb.chunk.js.map