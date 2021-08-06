(this["webpackJsonpwildfire-tracker"]=this["webpackJsonpwildfire-tracker"]||[]).push([[0],{25:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),r=t(3),a=t.n(r),s=(t(25),t(10)),o=t.n(s),l=t(15),j=t(5),d=t(20),u=t(6),b=t(7),f=t.n(b),h=t(2),O=function(e){e.lat,e.lng;var n=e.onClick;return Object(h.jsx)("div",{className:"location-marker",onClick:n,children:Object(h.jsx)(u.Icon,{icon:f.a,className:"location-icon"})})},x=function(e){var n=e.info;return Object(h.jsxs)("div",{className:"location-info",children:[Object(h.jsx)("h2",{children:"Event location info"}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["ID: ",Object(h.jsx)("strong",{children:n.id})]}),Object(h.jsxs)("li",{children:["TITLE: ",Object(h.jsx)("strong",{children:n.title})]})]})]})},g=function(e){var n=e.eventData,t=e.center,i=e.zoom,r=Object(c.useState)(null),a=Object(j.a)(r,2),s=a[0],o=a[1];return console.log(n[0]),Object(h.jsxs)("div",{className:"map",children:[Object(h.jsx)(d.a,{bootstrapURLKeys:{key:"AIzaSyA2tNwWfXkysXss4JleY7SX1SaZJbK93Bc"},defaultCenter:t,defaultZoom:i,children:n.map((function(e){return 8===e.categories[0].id?Object(h.jsx)(O,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){return o({id:e.id,title:e.title})}},e.id):null}))}),s&&Object(h.jsx)(x,{info:s})]})};g.defaultProps={center:{lat:53.0793,lng:8.8017},zoom:4};var m,p,v=g,k=t(11),w=t(12),y=w.a.div(m||(m=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n"]))),S=w.a.div(p||(p=Object(k.a)(["\n  border: 5px solid #b8b8b8;\n  border-top: 5px solid black;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  /* margin: 0 auto; */\n  background: white;\n\n  /* position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto; */\n\n  animation: spin 1s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),N=function(){return Object(h.jsxs)(y,{children:[Object(h.jsx)(S,{}),Object(h.jsx)("h1",{children:"Fetching Data"})]})},C=function(){return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("h1",{children:[Object(h.jsx)(u.Icon,{className:"header-icon",icon:f.a})," Wildfire Tracker (Powered by NASA)"]})})};var I=function(){var e=Object(c.useState)([]),n=Object(j.a)(e,2),t=n[0],i=n[1],r=Object(c.useState)([]),a=Object(j.a)(r,2),s=a[0],d=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n,t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,c=t.events,i(c),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{}),Object(h.jsx)("div",{children:s?Object(h.jsx)(N,{}):Object(h.jsx)(v,{eventData:t})})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),D()}},[[32,1,2]]]);
//# sourceMappingURL=main.dc0bf471.chunk.js.map