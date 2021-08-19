(this["webpackJsonpwildfire-tracker"]=this["webpackJsonpwildfire-tracker"]||[]).push([[0],{27:function(e,n,t){},31:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),o=t(3),a=t.n(o),r=(t(27),t(10)),s=t.n(r),l=t(16),d=t(4),j=t(22),u=t(6),b=(t(31),t(0)),h=function(e){e.lat,e.lng;var n=e.onClick,t=e.icon;return Object(b.jsx)("div",{className:"location-marker",onTouchEnd:n,onClick:n,children:Object(b.jsx)(u.Icon,{icon:t,className:"location-icon"})})},f=(t(33),function(e){var n=e.info,t=e.onClick,i=e.show;return Object(b.jsxs)("div",{className:"location-info-modal ".concat(i?"show":""),children:[Object(b.jsx)("h2",{children:"Event location info"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["ID: ",Object(b.jsx)("strong",{children:n.id})]}),Object(b.jsxs)("li",{children:["TITLE: ",Object(b.jsx)("strong",{children:n.title})]})]}),Object(b.jsx)("button",{className:"close-modal-button",onClick:t,children:"X"})]})}),O=(t(34),t(7)),m=t.n(O),x=t(18),g=t.n(x),p=t(11),v=t.n(p),k=function(e){var n=e.eventData,t=e.center,c=e.zoom,o=e.eventSelection,a=e.handleSideBarToggle,r=Object(i.useState)(null),s=Object(d.a)(r,2),l=s[0],u=s[1],O=Object(i.useState)(!1),x=Object(d.a)(O,2),p=x[0],k=x[1];return Object(b.jsxs)("div",{className:"map",onClick:a,children:[Object(b.jsxs)(j.a,{onClick:function(){return k(!1)},bootstrapURLKeys:{key:"AIzaSyA2tNwWfXkysXss4JleY7SX1SaZJbK93Bc"},defaultCenter:t,defaultZoom:c,children:["wildfires"===o&&n.map((function(e){return 8===e.categories[0].id?Object(b.jsx)(h,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],icon:m.a,onClick:function(n){u({id:e.id,title:e.title}),k(!0)}},e.id):null})),"storms"===o&&n.map((function(e){return 10===e.categories[0].id?Object(b.jsx)(h,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],icon:g.a,onClick:function(){u({id:e.id,title:e.title}),k(!0)}},e.id):null})),"volcanoes"===o&&n.map((function(e){return 12===e.categories[0].id?"Polygon"===e.geometries[0].type?e.geometries[0].coordinates[0].map((function(n){return Object(b.jsx)(h,{lat:n[1],lng:n[0],icon:v.a,onClick:function(){u({id:e.id,title:e.title}),k(!0)}},Math.floor(1e4*Math.random()))})):Object(b.jsx)(h,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],icon:v.a,onClick:function(){u({id:e.id,title:e.title}),k(!0)}},e.id):null}))]}),l&&Object(b.jsx)(f,{info:l,onClick:function(){return k(!1)},show:p})]})};k.defaultProps={center:{lat:53.0793,lng:8.8017},zoom:4};var C,S,w=k,y=t(12),N=t(13),T=N.a.div(C||(C=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n"]))),F=N.a.div(S||(S=Object(y.a)(["\n  border: 5px solid #b8b8b8;\n  border-top: 5px solid black;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  /* margin: 0 auto; */\n  background: white;\n\n  /* position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto; */\n\n  animation: spin 1s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),B=function(){return Object(b.jsxs)(T,{children:[Object(b.jsx)(F,{}),Object(b.jsx)("h1",{children:"Fetching Data"})]})},D=(t(37),function(e){var n=e.toggleClick;return Object(b.jsxs)("button",{className:"toggle-button",onClick:n,children:[" ","Select Disaster Event \u25bc"]})}),E=(t(38),function(e){var n=e.handleRadioChange,t=e.handleSideBarToggle;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)(u.Icon,{className:"header-icon",icon:m.a})," Disaster Events Tracker"]}),Object(b.jsxs)("div",{className:"radio-container",children:[Object(b.jsx)("input",{type:"radio",value:"wildfires",name:"disaster",onChange:n,id:"Wildfire",defaultChecked:!0}),"",Object(b.jsx)("label",{htmlFor:"Wildfire",children:Object(b.jsx)("span",{children:" Wildfires "})}),Object(b.jsx)("input",{type:"radio",value:"storms",name:"disaster",onChange:n,id:"Storm"})," ",Object(b.jsx)("label",{htmlFor:"Storm",children:Object(b.jsx)("span",{children:"Storms"})}),Object(b.jsx)("input",{type:"radio",value:"volcanoes",name:"disaster",onChange:n,id:"Volcano"}),"",Object(b.jsx)("label",{htmlFor:"Volcano",children:Object(b.jsx)("span",{children:"Volcanoes"})})]}),Object(b.jsx)(D,{toggleClick:t})]})}),I=(t(39),function(e){var n=e.handleSideBarToggle,t="side-bar";return e.show&&(t="side-bar open"),Object(b.jsx)("nav",{className:t,children:Object(b.jsxs)("div",{className:"radio-container-side-bar",children:[Object(b.jsx)("input",{type:"radio",value:"wildfires",name:"disaster",id:"Wildfire"}),"",Object(b.jsx)("label",{htmlFor:"Wildfire",onClick:n,children:Object(b.jsx)("span",{children:" Wildfires "})}),Object(b.jsx)("input",{type:"radio",value:"storms",name:"disaster",id:"Storm"})," ",Object(b.jsx)("label",{htmlFor:"Storm",onClick:n,children:Object(b.jsx)("span",{children:"Storms"})}),Object(b.jsx)("input",{type:"radio",value:"volcanoes",name:"disaster",id:"Volcano"}),"",Object(b.jsx)("label",{htmlFor:"Volcano",onClick:n,children:Object(b.jsx)("span",{children:"Volcanoes"})})]})})});var W=function(){var e=Object(i.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(i.useState)([]),a=Object(d.a)(o,2),r=a[0],j=a[1],u=Object(i.useState)("wildfires"),h=Object(d.a)(u,2),f=h[0],O=h[1],m=Object(i.useState)(!1),x=Object(d.a)(m,2),g=x[0],p=x[1];return Object(i.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n,t,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,i=t.events,c(i),j(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(E,{handleRadioChange:function(e){O(e.target.value)},handleSideBarToggle:function(){return p((function(e){return!e}))}}),Object(b.jsx)(I,{handleSideBarToggle:function(){return p(!1)},show:g}),Object(b.jsx)("div",{children:r?Object(b.jsx)(B,{}):Object(b.jsx)(w,{eventData:t,eventSelection:f,handleSideBarToggle:function(){return p(!1)}})})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),o(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),V()}},[[40,1,2]]]);
//# sourceMappingURL=main.86dd8f72.chunk.js.map