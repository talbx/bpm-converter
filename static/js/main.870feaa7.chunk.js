(this["webpackJsonpbpm-converter"]=this["webpackJsonpbpm-converter"]||[]).push([[0],{145:function(e){e.exports=JSON.parse('{"name":"bpm-converter","version":"1.0.0","license":"UNLICENSED","homepage":"http://talbx.github.io/bpm-converter","dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","@types/jest":"^24.9.1","@types/node":"^12.12.42","@types/react":"^16.9.35","@types/react-dom":"^16.9.8","@types/react-redux":"^7.1.16","gh-pages":"^3.1.0","react":"^16.13.1","react-dom":"^16.13.1","react-redux":"^7.2.4","react-scripts":"^4.0.3","semantic-ui-css":"^2.4.1","semantic-ui-react":"^0.88.2","typescript":"^3.7.5"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},264:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),i=r(23),c=r.n(i),o=r(125),a=(r(140),r(271)),l=r(276),d=r(274),h=r(273),j=r(42),b=r(275),p=r(34),u=r(7),v=r(145),g=function(){return Object(u.jsxs)(b.a,{basic:!0,children:[Object(u.jsxs)(l.a,{as:"h2",floated:"left",textAlign:"left",children:[Object(u.jsx)(p.a,{name:"exchange"}),"BPM Converter"]}),Object(u.jsxs)(l.a,{floated:"right",as:"h5",textAlign:"right",children:["v",v.version]})]})},x=r(123),O=function e(){Object(x.a)(this,e)};O.BPM_CHANGED="BPM_CHANGED";var m=function(){var e,t,r,s,i=Object(n.useState)(!1),c=Object(o.a)(i,2),b=c[0],p=c[1],v=Object(j.c)((function(e){return e})),x=Object(j.b)();function m(e){console.log(e);var t=function(e){if(e&&(console.log("the val",e),/^\d+$/.test(e))){var t=parseInt(e);if(t<200)return console.log("num is",t),!1}return console.log("returning error"),!0}(e);console.log("error will be set to",t),p(t),console.log("dispatching bpm",e),x({type:O.BPM_CHANGED,payload:t?0:e})}return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsxs)(a.a,{textAlign:"center",fluid:!0,children:[Object(u.jsx)(l.a,{style:{marginTop:"10%"},as:"h2",children:"Convert BPM to ms"}),Object(u.jsx)(d.a,{style:{marginTop:"2%"},size:"massive",label:{basic:!0,content:"BPM"},type:"digits",error:b,onChange:function(e){return m(e.target.value)},labelPosition:"right",placeholder:"Enter BPM..."}),0!==v.bpm&&Object(u.jsx)(a.a,{size:"huge",children:Object(u.jsxs)(h.a,{style:{marginTop:"10%"},basic:"very",children:[Object(u.jsx)(h.a.Header,{children:Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"Tempo"}),Object(u.jsx)(h.a.HeaderCell,{children:"1/4"}),Object(u.jsx)(h.a.HeaderCell,{children:"1/8"}),Object(u.jsx)(h.a.HeaderCell,{children:"1/8T"}),Object(u.jsx)(h.a.HeaderCell,{children:"1/16"})]})}),Object(u.jsx)(h.a.Body,{children:Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Cell,{children:[v.bpm," BPM"]}),Object(u.jsx)(h.a.Cell,{children:Math.round(null===(e=v.conversion)||void 0===e?void 0:e.quarterMs)}),Object(u.jsx)(h.a.Cell,{children:Math.round(null===(t=v.conversion)||void 0===t?void 0:t.eighthMs)}),Object(u.jsx)(h.a.Cell,{children:Math.round(null===(r=v.conversion)||void 0===r?void 0:r.eightsTripletMs)}),Object(u.jsx)(h.a.Cell,{children:Math.round(null===(s=v.conversion)||void 0===s?void 0:s.sixteenth)})]})})]})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=r(82),y=r(126),M={bpm:0,conversion:{quarterMs:0,eighthMs:0,sixteenth:0,eightsTripletMs:0}};function C(e){var t=6e4/e,r=t/2;return{quarterMs:t,eighthMs:r,sixteenth:r/2,eightsTripletMs:t/3}}var w=Object(y.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(console.log("some action appeared",t),t.type){case O.BPM_CHANGED:return B(Object(f.a)(Object(f.a)({},e),{},{bpm:t.payload,conversion:C(t.payload)}));default:return e}})),B=function(e){return console.log("new state",e),e};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j.a,{store:w,children:Object(u.jsx)(m,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[264,1,2]]]);
//# sourceMappingURL=main.870feaa7.chunk.js.map