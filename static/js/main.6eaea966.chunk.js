(this["webpackJsonpbpm-converter"]=this["webpackJsonpbpm-converter"]||[]).push([[0],{135:function(e,t,n){e.exports=n(262)},262:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(22),o=n.n(r),c=n(124),i=(n(140),n(269)),s=n(273),u=n(272),m=n(271),d=n(41),h=n(33),v=function(){return l.a.createElement(s.a,{style:{margin:"1%"},as:"h2"},l.a.createElement(h.a,{name:"exchange"}),l.a.createElement(s.a.Content,null,"BPM Converter"))},g=n(122),E=function e(){Object(g.a)(this,e)};E.BPM_CHANGED="BPM_CHANGED";var p=function(){var e,t,n,r,o=Object(a.useState)(!1),h=Object(c.a)(o,2),g=h[0],p=h[1],b=Object(d.c)((function(e){return e})),M=Object(d.b)();function f(e){console.log(e);var t=function(e){if(e&&(console.log("the val",e),/^\d+$/.test(e))){var t=parseInt(e);if(t<200)return console.log("num is",t),!1}return console.log("returning error"),!0}(e);console.log("error will be set to",t),p(t),console.log("dispatching bpm",e),M({type:E.BPM_CHANGED,payload:t?0:e})}return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(i.a,{textAlign:"center",fluid:!0},l.a.createElement(s.a,{style:{marginTop:"10%"},as:"h2"},"Convert BPM to ms"),l.a.createElement(u.a,{style:{marginTop:"2%"},size:"massive",label:{basic:!0,content:"BPM"},type:"digits",error:g,onChange:function(e){return f(e.target.value)},labelPosition:"right",placeholder:"Enter BPM..."}),0!==b.bpm&&l.a.createElement(i.a,{size:"huge"},l.a.createElement(m.a,{style:{marginTop:"10%"},basic:"very"},l.a.createElement(m.a.Header,null,l.a.createElement(m.a.Row,null,l.a.createElement(m.a.HeaderCell,null,"Tempo"),l.a.createElement(m.a.HeaderCell,null,"1/4"),l.a.createElement(m.a.HeaderCell,null,"1/8"),l.a.createElement(m.a.HeaderCell,null,"1/8T"),l.a.createElement(m.a.HeaderCell,null,"1/16"))),l.a.createElement(m.a.Body,null,l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Cell,null,b.bpm," BPM"),l.a.createElement(m.a.Cell,null,Math.round(null===(e=b.conversion)||void 0===e?void 0:e.quarterMs)),l.a.createElement(m.a.Cell,null,Math.round(null===(t=b.conversion)||void 0===t?void 0:t.eighthMs)),l.a.createElement(m.a.Cell,null,Math.round(null===(n=b.conversion)||void 0===n?void 0:n.eightsTripletMs)),l.a.createElement(m.a.Cell,null,Math.round(null===(r=b.conversion)||void 0===r?void 0:r.sixteenth))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(81),M=n(125),f={bpm:0,conversion:{quarterMs:0,eighthMs:0,sixteenth:0,eightsTripletMs:0}};function C(e){var t=6e4/e,n=t/2;return{quarterMs:t,eighthMs:n,sixteenth:n/2,eightsTripletMs:t/3}}var y=Object(M.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(console.log("some action appeared",t),t.type){case E.BPM_CHANGED:return w(Object(b.a)(Object(b.a)({},e),{},{bpm:t.payload,conversion:C(t.payload)}));default:return e}})),w=function(e){return console.log("new state",e),e};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,{store:y},l.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.6eaea966.chunk.js.map