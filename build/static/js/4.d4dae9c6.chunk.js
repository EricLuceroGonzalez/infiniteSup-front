(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{103:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),i=n(14),o=n(83),c=n(2),l=n(0),u=n.n(l),s=(n(94),function(e){return u.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),p=n(88),d=n(19),f=n(82),v=n(15),b=n(87),m=n(16),O=n(32),y=n(85),E=(n(95),n(3));t.default=function(){var e=Object(l.useContext)(O.a),t=Object(l.useState)(!0),n=Object(c.a)(t,2),a=n[0],h=n[1],j=Object(m.a)(),g=j.isLoading,w=j.error,I=j.sendRequest,N=j.clearError,T=Object(E.g)(),V=Object(b.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),S=Object(c.a)(V,3),C=S[0],P=S[1],k=S[2],A=function(){var t=Object(i.a)(r.a.mark((function t(n){var i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(C.inputs),n.preventDefault(),!a){t.next=15;break}return t.prev=3,t.next=6,I("https://infinte-supplies.herokuapp.com/api/users/login","POST",JSON.stringify({email:C.inputs.email.value,password:C.inputs.password.value}),{"Content-Type":"application/json"});case 6:i=t.sent,e.login(i.userId,i.token),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("some Error: ".concat(t.t0));case 13:t.next=27;break;case 15:return console.log("".concat("https://infinte-supplies.herokuapp.com/api","/users/signup")),t.prev=16,t.next=19,I("https://infinte-supplies.herokuapp.com/api/users/signup","POST",JSON.stringify({name:C.inputs.name.value,email:C.inputs.email.value,password:C.inputs.password.value}),{"Content-Type":"application/json"});case 19:o=t.sent,e.login(o.userId,o.token),T.push("/dashboard"),t.next=27;break;case 24:t.prev=24,t.t1=t.catch(16),console.log("Signup error: ".concat(t.t1));case 27:case"end":return t.stop()}}),t,null,[[3,10],[16,24]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{error:w,onClear:function(){N()}}),u.a.createElement(s,{className:"authentication"},g&&u.a.createElement(v.a,{asOverlay:!0}),u.a.createElement("h2",null,"Iniciar sesi\xf3n"),u.a.createElement("hr",null),u.a.createElement("form",{onSubmit:A},!a&&u.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Nombre",validators:[Object(y.d)()],errorText:"Please enter a name",onInput:P}),u.a.createElement(p.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(y.a)()],errorText:"Please enter a valid email address",onInput:P}),u.a.createElement(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(y.c)(6)],errorText:"Please enter a valid password. Min Length (6)",onInput:P}),u.a.createElement("div",{className:"mt-5"},u.a.createElement(d.a,{type:"submit",disabled:!C.isValid},a?"LOGIN":"SIGNUP"))),u.a.createElement(d.a,{inverse:!0,onClick:function(){console.log("isLoginMode: ".concat(a)),a?k(Object(o.a)(Object(o.a)({},C.inputs),{},{name:{value:"",isValid:!1}}),!1):k(Object(o.a)(Object(o.a)({},C.inputs),{},{name:void 0}),C.inputs.email.isValid&&C.inputs.password.isValid),h((function(e){return!e}))}},"SWITCH TO ",a?"SIGNUP":"LOGIN")))}},82:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(29),o=n(19),c=n(7),l=n(8);t.a=function(e){return r.a.createElement(i.a,{onCancel:e.onClear,header:"Ha ocurrido un error!",show:!!e.error,footer:r.a.createElement(o.a,{onClick:e.onClear},r.a.createElement(c.a,{icon:l.d})," ","REGRESAR")},r.a.createElement("p",null,e.error))}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(84);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},84:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},85:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l}));var a=n(30);var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},o=function(e){return{type:"MAXLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var n,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;"REQUIRE"===o.type&&(r=r&&e.trim().length>0),"MINLENGTH"===o.type&&(r=r&&e.trim().length>=o.val),"MAXLENGTH"===o.type&&(r=r&&e.trim().length<=o.val),"MIN"===o.type&&(r=r&&+e>=o.val),"MAX"===o.type&&(r=r&&+e<=o.val),"EMAIL"===o.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){i.e(c)}finally{i.f()}return r}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n(84),i=n(83),o=n(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=function(e,t){var n=Object(o.useReducer)(c,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],l=r[1];return[i,Object(o.useCallback)((function(e,t,n){l({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(o.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},88:function(e,t,n){"use strict";var a=n(2),r=n(83),i=n(0),o=n.n(i),c=(n(89),n(85)),l=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(c.e)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(a.a)(t,2),r=n[0],c=n[1],u=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(u,p,d)}),[u,p,d,s]);var f,v=function(t){t||console.log("No Event"),t.target?c({type:"CHANGE",val:t.target.value,validators:e.validators}):c({type:"CHANGE",val:t,validators:(void 0).props.validators})},b=function(){c({type:"TOUCH"})};return"input"===e.element&&(f=o.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onBlur:b,onChange:v,value:r.value})),"textarea"===e.element&&(f=o.a.createElement("textarea",{id:e.id,rows:e.rows||3,placeholder:e.placeholder,onBlur:b,onChange:v,value:r.value})),o.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},o.a.createElement("label",{htmlFor:e.id},e.label),f,!r.isValid&&r.isTouched&&o.a.createElement("p",null,e.errorText))}},89:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}}]);
//# sourceMappingURL=4.d4dae9c6.chunk.js.map