(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(70);t.a=function(e){return c.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},c.a.createElement("div",{className:"lds-dual-ring  mr-auto ml-auto"}))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(10),c=a.n(n),l=a(14),r=a(2),o=a(0),s=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(o.useState)(),i=Object(r.a)(s,2),m=i[0],u=i[1],d=Object(o.useRef)([]),f=Object(o.useCallback)(function(){var e=Object(l.a)(c.a.mark((function e(t){var a,l,r,o,s,i,m=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.length>1&&void 0!==m[1]?m[1]:"GET",l=m.length>2&&void 0!==m[2]?m[2]:null,r=m.length>3&&void 0!==m[3]?m[3]:{},n(!0),o=new AbortController,d.current.push(o),e.prev=6,e.next=9,fetch(t,{method:a,body:l,headers:r,signal:o.signal});case 9:return s=e.sent,e.next=12,s.json();case 12:if(i=e.sent,d.current=d.current.filter((function(e){return e!==o})),s.ok){e.next=16;break}throw new Error(i.message);case 16:return n(!1),e.abrupt("return",i);case 20:throw e.prev=20,e.t0=e.catch(6),u(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:m,sendRequest:f,clearError:function(){u(null)}}}},,,function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(5);a(67);t.a=function(e){return e.floating?c.a.createElement(l.b,{className:"button ".concat(e.inverse&&"button--inverse"," \n        ").concat(e.floating&&"button--float"),to:e.toBack},e.children):e.href?c.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.whatsapp&&"button--whatsapp"),href:e.href,disabled:e.disabled},e.children):e.to?c.a.createElement(l.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):c.a.createElement("button",{className:"button ".concat(e.animate," button--").concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},,,,function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(11),r=a.n(l);a(64);t.a=function(e){return r.a.createPortal(c.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},function(e,t,a){e.exports=a.p+"static/media/navlogo.565b4867.png"},,,,,function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(11),r=a.n(l),o=a(81),s=a(23),i=(a(65),function(e){var t=c.a.createElement("div",{className:"mymodal ".concat(e.className),style:e.style},c.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},c.a.createElement("div",null,e.header)),c.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),c.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return r.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return c.a.createElement(c.a.Fragment,null,e.show&&c.a.createElement(s.a,{onClick:e.onCancel}),c.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},c.a.createElement(i,e)))}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),c=Object(n.createContext)({isLoggedIn:!1,token:null,userId:null,login:function(){},logout:function(){}})},function(e,t,a){},,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/1-mobile.908ddef4.png"},function(e,t,a){e.exports=a.p+"static/media/2-mobile.d4014ec8.png"},function(e,t,a){e.exports=a.p+"static/media/3-mobile.ca2e72c0.png"},function(e,t,a){e.exports=a.p+"static/media/4-mobile.b170a6dc.png"},function(e,t,a){e.exports=a.p+"static/media/1-1920x1080.963e500c.png"},function(e,t,a){e.exports=a.p+"static/media/2-1920x1080.ee534b0b.png"},function(e,t,a){e.exports=a.p+"static/media/3-1920x1080.6633cc6c.png"},function(e,t,a){e.exports=a.p+"static/media/4-1980x1080.e0563f56.png"},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a(80)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,c=a(0),l=a.n(c),r=a(11),o=a.n(r),s=(a(56),a(57),a(3)),i=a(5),m=a(2),u=a(32),d=a(36),f=a.n(d),p=a(37),E=a.n(p),b=a(38),g=a.n(b),v=a(39),h=a.n(v),N=a(40),O=a.n(N),j=a(41),y=a.n(j),x=a(42),w=a.n(x),k=a(43),S=a.n(k),C=a(10),I=a.n(C),z=a(14),L=(a(33),a(7)),T=a(8),D=a(29),_=(a(66),a(19)),A=a(21),B=a(17),F=function(e){var t=Object(c.useState)(e.products),a=Object(m.a)(t,1)[0],n=Object(c.useState)(0),r=Object(m.a)(n,2),o=r[0],s=r[1];return l.a.createElement("div",null,function(){if(a[o])return l.a.createElement("div",null,l.a.createElement(B.a,null,l.a.createElement("title",null,"Infinite Supplies | ".concat(a[o].name))),l.a.createElement("div",{className:"d-flex col-10"},l.a.createElement("p",{className:"col-10 itemTitle thePurple"},a[o].name),l.a.createElement("p",{className:"col-2 NotAvailable"},"".concat(a?"("+(o+1)+"/"+a.length+")":""))),l.a.createElement("div",{className:"row d-flex catalogList"},l.a.createElement("div",{className:"mr-auto ml-auto col-8 col-sm-4 product-image-box"},l.a.createElement("img",{className:"productShowImg",src:a[o].image,alt:"product illustration"})),l.a.createElement("div",{className:"mr-auto ml-auto col-12 col-sm-8"},a[o].description.length>0&&l.a.createElement("div",{className:"insideTitle"},"Descripci\xf3n"),a[o].description.length>0&&l.a.createElement("ul",null,a[o].description.map((function(e,t){return l.a.createElement("li",{key:t},e)}))),!a[o].isSupplies&&l.a.createElement("div",null,l.a.createElement("div",{className:"insideTitle"},"Ventajas ambientales"),l.a.createElement("ol",null,a[o].features.map((function(e,t){return l.a.createElement("li",{key:t},e)}))),l.a.createElement("div",{className:"insideTitle"},"Tama\xf1os"),l.a.createElement("div",{className:"d-flex"},a[o].sizes.map((function(e,t){return l.a.createElement("div",{className:"theSizes col-2",key:t},e)}))),l.a.createElement("div",{className:"col-10 col-sm-6 d-flex justify-content-around"},l.a.createElement("div",{className:"  ".concat(a[o].hasFragance?"available":"NotAvailable")},l.a.createElement(L.a,{icon:T.p}),a[o].hasFragance?l.a.createElement("p",{className:"smallWords"},"con fragancia"):l.a.createElement("p",{className:"smallWords"},"sin fragancia")),l.a.createElement("div",{className:" ".concat(a[o].domesticUse?"available":"NotAvailable")},l.a.createElement(L.a,{icon:T.h}),l.a.createElement("p",{className:"smallWords"},"uso domestico")),l.a.createElement("div",{className:" ".concat(a[o].industryUse?"available":"NotAvailable")},l.a.createElement(L.a,{icon:T.i}),l.a.createElement("p",{className:"smallWords"},"uso industrial")))))),l.a.createElement("div",{className:"d-flex justify-content-end mb-1"},l.a.createElement("div",{className:"iVibrate mb-2"},l.a.createElement(_.a,{inverse:!0,href:"https://wa.me/+50769825076?text=%F0%9F%94%B5%20INFINITE-SUPPLIES.COM%0AHola%2C%20me%20interesa%20este%20producto%3A%20%0A%0A".concat(a[o].name,"%20%0A%0A")},l.a.createElement(L.a,{style:{fontSize:"1.25rem"},icon:A.b})))))}(),a.length>1?l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(_.a,{size:"small",disabled:o<1,onClick:function(){return s(o-1)}},l.a.createElement(L.a,{icon:T.b})),l.a.createElement(_.a,{size:"small",disabled:!(o<a.length-1),onClick:function(){return s((function(){s(o+1)}))}},l.a.createElement(L.a,{icon:T.c}))):"")},P=function(e){return l.a.createElement(D.a,{onCancel:e.onClear,header:e.logo?l.a.createElement("div",{className:"col-12 row d-flex align-items-center"},l.a.createElement("div",{className:"col-6 col-md-8"},l.a.createElement("p",null,e.title)),l.a.createElement(L.a,{className:"col-2 col-md-2 theAqua ml-auto",style:{fontSize:"1.75em"},onClick:e.closeModal,icon:T.o})):"",show:e.show},l.a.createElement(F,{category:e.title,products:e.products}))},R=function(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];return l.a.createElement("div",{className:"img-box img-hover-zoom col-6 col-sm-4 col-md-2"},l.a.createElement(P,{show:n,closeModal:function(){r(!n)},title:e.category,products:e.products,onClear:function(){r(!1)}}),l.a.createElement("img",{onClick:function(){r(!n)},className:"card-img-top img-restr homeLogo",src:e.logo,alt:"Card cap"}),l.a.createElement("h4",{className:"card-title img-text"},e.category))},q=a(16),M=a(15),U=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),o=Object(m.a)(r,2),s=o[0],i=(o[1],Object(q.a)()),u=i.isLoading,d=i.sendRequest;Object(c.useEffect)((function(){s&&function(){var e=Object(z.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://infinte-supplies.herokuapp.com/api","/products/getCategories"));case 3:t=e.sent,console.log(t.categories),n(t.categories),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[d,s]);return l.a.createElement(l.a.Fragment,null,u&&l.a.createElement(M.a,{asOverlay:!0}),l.a.createElement("div",{className:"row d-flex col-12 mr-auto ml-auto justify-content-around mt-2"},a.map((function(e,t){return l.a.createElement(R,{key:t,category:e.categoryName,logo:e.logo,products:e.products})}))))},W=a(20),J=a.n(W),V=(a(47),a(49),function(e){var t=Object(q.a)(),a=t.isLoading,n=(t.error,t.sendRequest),r=(t.clearError,Object(c.useState)([])),o=Object(m.a)(r,2),s=o[0],u=o[1];Object(c.useEffect)((function(){(function(){var e=Object(z.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("https://infinte-supplies.herokuapp.com/api","/content/getBlog"));case 3:t=e.sent,u(t.blogContent),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(c.useEffect)((function(){J.a.locale("es")}),[]);return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement(M.a,{asOverlay:!0}),l.a.createElement("div",{className:"row d-flex col-12 mr-auto ml-auto justify-content-around mt-2"},s.map((function(e,t){return l.a.createElement(i.b,{key:t,style:{textDecoration:"none"},className:"row d-flex col-12 col-md-3 mr-auto ml-auto entryBox",to:"/blog/".concat(e._id)},l.a.createElement("div",{className:"col-12 d-flex align-items-end"},l.a.createElement("img",{className:"entryImg",src:e.image,alt:"blog entry"})),l.a.createElement("p",{className:"mt-4 entryTitle col-12"},e.title),l.a.createElement("div",{className:"col-10 col-sm-12"},l.a.createElement("p",{className:"entryDate"}," ",J()(e.creationDate).format("LL")),l.a.createElement("p",{className:"para"}," ",e.abstract),l.a.createElement("div",{className:"entryDate"},"Leer mas"," ",l.a.createElement(L.a,{className:"ml-auto entryArrow",icon:T.e}))))}))))}),G=(a(72),a(81)),H=function(e){var t=function(){var e=Object(c.useState)([0,0]),t=Object(m.a)(e,2),a=t[0],n=t[1];return Object(c.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),a=Object(m.a)(t,1)[0],n=Object(c.useState)([O.a,y.a,w.a,S.a]),r=Object(m.a)(n,1)[0],o=Object(c.useState)([f.a,E.a,g.a,h.a]),s=Object(m.a)(o,1)[0],u=Object(c.useState)(""),d=Object(m.a)(u,2),p=d[0],b=d[1],v=Object(c.useState)(0),N=Object(m.a)(v,2),j=N[0],x=N[1],k=Object(c.useState)(!1),C=Object(m.a)(k,2),I=C[0],z=C[1],L=Object(c.useState)(!0),T=Object(m.a)(L,1)[0],D=Object(c.useState)(),_=Object(m.a)(D,1)[0],A=Object(c.useState)(),F=Object(m.a)(A,1)[0];Object(c.useEffect)((function(){var e,t;return T&&(j<3?e=setTimeout((function(){z(!0),x(j+1)}),6200):t=setTimeout((function(){z(!0),x(0)}),6200),b(a>768?r[j]:s[j])),function(){clearTimeout(e),clearTimeout(t)}}),[a,j,r,s,T,F,_]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,null,l.a.createElement("title",null,"Infinite Supplies | Bienvenido!"),l.a.createElement("meta",{name:"description",content:"Productos de limpieza para la industria y el hogar. Desinfectantes, detergentes, limpiavidrios, escobas y todos los insumos de limpieza que necesitas."})),l.a.createElement("div",{className:"col-12 flex-container"},l.a.createElement("div",null,l.a.createElement(G.a,{in:I,timeout:300,classNames:"sample"},l.a.createElement("img",{className:"bgImage",src:p,alt:"Brand logo, people cleaning"}))),l.a.createElement("div",null,l.a.createElement("div",{className:"mt-5"},l.a.createElement(i.b,{className:"category",to:"/productos"},"Productos")),l.a.createElement(U,null)),l.a.createElement("div",null,l.a.createElement("div",{className:"mt-5"},l.a.createElement(i.b,{className:"category",to:"/blog"},"Blog")),l.a.createElement(V,null))))},K=(a(73),function(){return l.a.createElement("div",{className:"col-12 footer-bar d-flex"},l.a.createElement("div",{className:"col-6  col-sm-3"},l.a.createElement("a",{style:{textDecoration:"none",color:"white"},href:"https://www.instagram.com/infinitesuppliessa/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(L.a,{icon:A.a,style:{marginRight:"8px",color:"#06d6a2"}}),"infinitesupplies",l.a.createElement("span",{className:"theLightBlue-b"},"sa"))),l.a.createElement("div",{className:"col-6 col-sm-3 hoverLink",onClick:function(){window.location.href="tel:(+507) 6291-7954"}},l.a.createElement(L.a,{icon:T.n,className:"iconVibrate",style:{color:"rgb(19, 245, 113)",marginRight:"8px"}}),"(+507) 6291-7954"),l.a.createElement("div",{className:"col-6  col-sm-3"},l.a.createElement(L.a,{icon:T.n,style:{color:"rgb(19, 245, 113)",marginRight:"8px"}}),"(+507) 382- 8846/47"),l.a.createElement("div",{className:"col-12 col-sm-3"},l.a.createElement(L.a,{icon:T.g,style:{color:"rgb(236, 27, 12)",marginRight:"0px"}})," ","Infinite Supplies, S.A."))}),Q=(a(74),function(e){return l.a.createElement("header",{className:"main-header"},e.children)}),X=a(24),Y=a.n(X),Z=(a(75),function(e){return l.a.createElement("ul",{className:"nav-links"},e.drawerOpen&&l.a.createElement(i.c,{to:"/"},l.a.createElement("div",{style:{marginBottom:"90px"}}," ",l.a.createElement("img",{className:"logoSize",src:Y.a,alt:"infinite supplies logo"}))),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/nosotros",exact:!0},"NOSOTROS")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/productos"},"PRODUCTOS")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/contacto"},"CONT\xc1CTENOS")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/blog"},"BLOG")))}),$=(a(76),a(77),function(e){var t=l.a.createElement(G.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),ee=a(23),te=function(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],o=function(){r(!1)};return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement(ee.a,{onClick:o}," "),l.a.createElement($,{show:n,onClick:o},l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(Z,{drawerOpen:n}))),l.a.createElement(Q,null,l.a.createElement("h1",{className:"main-navigation__title"},l.a.createElement(i.b,{to:"/"},l.a.createElement("img",{className:"logoSize",src:Y.a,alt:"infinite supplies logo"}))),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(Z,null)),l.a.createElement("button",{className:"main-navigation__menu-btn ml-auto",onClick:function(){r(!0)}},l.a.createElement("span",{className:"spanUp"}),l.a.createElement("span",{className:"spanMid"}),l.a.createElement("span",{className:"spanDow"}))))},ae=(a(35),function(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];return l.a.createElement("div",{className:"col-12 col-sm-6 col-lg-6 row d-flex"},l.a.createElement(P,{show:n,closeModal:function(){r(!n)},title:e.categoryName,products:e.products,onClear:function(){r(!1)}}),l.a.createElement("div",{className:"col-10 itemTitle justify-content-start align-items-center categoryBox d-flex",onClick:function(){r(!n)}},l.a.createElement("div",{className:"col-4 col-sm-6 col-md-6 col-lg-3"},l.a.createElement("img",{className:"productShowImg",src:e.fgLogo,alt:"category ".concat(e.category," logo")})),l.a.createElement("div",{style:{textAlign:"left"},className:"align-middle categoryNameItem"},e.category)))}),ne=(a(48),function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),o=Object(m.a)(r,1)[0],s=Object(q.a)(),i=s.isLoading,u=(s.error,s.sendRequest);s.clearError;Object(c.useEffect)((function(){o&&function(){var e=Object(z.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat("https://infinte-supplies.herokuapp.com/api","/products/getCategories"));case 3:t=e.sent,n(t.categories),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[u,o]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,null,l.a.createElement("title",null,"Infinite Supplies | Nuestros Productos"),l.a.createElement("meta",{name:"description",content:"Los mejores productos de limpieza para la industria y el hogar, desinfectantes, detergentes e insumos. Escobas, trapeadores y mas."})),i&&l.a.createElement(M.a,{asOverlay:!0}),l.a.createElement("h5",{className:"mt-5"},"Nuestros productos"),l.a.createElement("div",{className:"row d-flex col-12 col-md-8 mr-auto ml-auto"},a.map((function(e,t){return l.a.createElement(ae,{key:t,category:e.categoryName,logo:e.logo,products:e.products,fgLogo:e.fgLogo})}))))}),ce=(a(78),a(79),l.a.lazy((function(){return a.e(6).then(a.bind(null,98))}))),le=l.a.lazy((function(){return a.e(7).then(a.bind(null,99))})),re=l.a.lazy((function(){return a.e(8).then(a.bind(null,100))})),oe=l.a.lazy((function(){return a.e(3).then(a.bind(null,101))})),se=l.a.lazy((function(){return a.e(4).then(a.bind(null,103))})),ie=l.a.lazy((function(){return a.e(5).then(a.bind(null,102))}));var me=function(){var e,t=function(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(),o=Object(m.a)(r,2),s=o[0],i=o[1],u=Object(c.useState)(!1),d=Object(m.a)(u,2),f=d[0],p=d[1],E=Object(c.useCallback)((function(e,t,a){l(t),p(e);var n=a||new Date((new Date).getTime()+36e5);i(n),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:n.toISOString()}))}),[]),b=Object(c.useCallback)((function(){l(null),i(null),p(null),localStorage.removeItem("userData")}),[]);return Object(c.useEffect)((function(){if(a&&s){var e=s.getTime()-(new Date).getTime();n=setTimeout(b,e)}else clearTimeout(n)}),[a,b,s]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&E(e.userId,e.token,new Date(e.expiration))}),[E]),{token:a,login:E,logout:b,userId:f}}(),a=t.token,r=t.login,o=t.logout,d=t.userId;return e=a?l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/blog",component:le}),l.a.createElement(s.b,{path:"/blog/:id",component:ce}),l.a.createElement(s.b,{path:"/productos",component:ne}),l.a.createElement(s.b,{path:"/nosotros",component:re}),l.a.createElement(s.b,{path:"/contacto",component:oe}),l.a.createElement(s.b,{path:"/",exact:!0},l.a.createElement(H,null)),l.a.createElement(s.b,{path:"/dashboard"},l.a.createElement(ie,null)),l.a.createElement(s.b,{path:"/dashboard"},l.a.createElement(se,null)),l.a.createElement(s.a,{to:"/dashboard"})):l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/infiniteStaff"},l.a.createElement(se,null)),l.a.createElement(s.b,{exact:!0,path:"/blog",component:le}),l.a.createElement(s.b,{path:"/blog/:id",component:ce}),l.a.createElement(s.b,{path:"/productos",component:ne}),l.a.createElement(s.b,{path:"/nosotros",component:re}),l.a.createElement(s.b,{path:"/contacto",component:oe}),l.a.createElement(s.b,{exact:!0,path:"/",component:H}),l.a.createElement(s.a,{to:"/"})),l.a.createElement(u.a.Provider,{value:{isLoggedIn:!!a,token:a,userId:d,login:r,logout:o}},l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(te,null),l.a.createElement("main",{className:"main"},l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",{className:"center"},l.a.createElement(M.a,null))},e)),l.a.createElement("footer",null,l.a.createElement(K,null)))))};o.a.render(l.a.createElement(me,null),document.getElementById("root"))}],[[51,1,2]]]);
//# sourceMappingURL=main.ae8af64e.chunk.js.map