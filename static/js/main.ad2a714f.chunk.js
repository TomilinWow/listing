(this.webpackJsonplisting=this.webpackJsonplisting||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},57:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"concertReducer",(function(){return y})),n.d(c,"setIsFavourites",(function(){return C})),n.d(c,"isFavouriteAC",(function(){return I})),n.d(c,"changeFilters",(function(){return E})),n.d(c,"filterItems",(function(){return S})),n.d(c,"getConcerts",(function(){return T}));var r=n(0),i=n(9),s=n.n(i),a=(n(29),n(30),n(31),n(4)),o=n(5),u=n(12),l=n.n(u),d=n(22),j=n(2),f=n(6),b=n(23),v=n.n(b),O=[{id:"01",month:"January"},{id:"02",month:"February"},{id:"03",month:"March"},{id:"04",month:"May"},{id:"05",month:"April"},{id:"06",month:"June"},{id:"07",month:"Jule"},{id:"08",month:"August"},{id:"09",month:"September"},{id:"10",month:"October"},{id:"11",month:"November"},{id:"12",month:"December"}],m="SET_CONCERTS",h="IS_FAVOURITES",x="IS_FAVOURITE",p="FILTERED_ITEMS",g="ADD_FILTER",F={listFilters:{city:[],month:[],isFavourite:[]},cities:[],isFavourites:!1,concerts:[],filterConcerts:[]},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:var n=Object(f.a)(e.data);if(e.isNewData)for(var c=0;c<n.length;c++)n[c].isFavourite=!1;return Object(j.a)(Object(j.a)({},t),{},{cities:Object(f.a)(new Set(e.data.map((function(t){return t.city})))),concerts:n,filterConcerts:n});case h:return Object(j.a)(Object(j.a)({},t),{},{isFavourites:!t.isFavourites});case x:var r=function(t){return t.id===e.idCard?Object(j.a)(Object(j.a)({},t),{},{isFavourite:e.isFavourite}):t};return Object(j.a)(Object(j.a)({},t),{},{concerts:Object(f.a)(t.concerts).map((function(t){return r(t)})),filterConcerts:Object(f.a)(t.filterConcerts).map((function(t){return r(t)}))});case p:return Object(j.a)(Object(j.a)({},t),{},{filterConcerts:e.items});case g:return Object(j.a)(Object(j.a)({},t),{},{listFilters:Object(j.a)({},e.payload.listFilters)});default:return t}},C=function(){return{type:h}},N=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:m,data:t,isNewData:e}},I=function(t,e){return{type:x,idCard:t,isFavourite:e}},E=function(t,e,n){return function(c){n[t]=e?[e]:[],c({type:g,payload:{type:t,value:e,listFilters:n}})}},S=function(t,e){return function(n){var c=Object.keys(e),r=t.filter((function(t){return c.every((function(n){if(!e[n].length)return!0;if("month"===n){var c=t.date.split(".")[1];return e[n].includes(c)}return e[n].includes(t[n])}))}));n({type:p,items:r})}},T=function(){return function(){var t=Object(d.a)(l.a.mark((function t(e){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=localStorage.getItem("concerts"))){t.next=5;break}e(N(JSON.parse(n),!1)),t.next=9;break;case 5:return t.next=7,v.a.get("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json");case 7:c=t.sent,e(N(c.data));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(){var t=Object(a.b)();return Object(o.b)(c,t)},k=n.p+"static/media/notfavorites.405cea49.svg",A=n.p+"static/media/favorites.e1bc097d.svg",J=(n(57),n(1)),D=function(t){var e=t.item,n=t.setIsFavourite;return Object(J.jsxs)("div",{className:"card",children:[Object(J.jsx)("img",{className:"cardImage",src:"".concat(e.image),alt:""}),Object(J.jsx)("div",{className:"dataCard",children:e.date.split(".")[1]}),Object(J.jsx)("div",{className:"isFavorites",children:Object(J.jsx)("img",{onClick:function(){return n(e.id,!e.isFavourite)},src:e.isFavourite?A:k,alt:""})}),Object(J.jsx)("h2",{className:"textCard",children:e.name})]})},R=(n(59),function(){var t=Object(a.c)((function(t){return t.concert})),e=t.cities,n=t.isFavourites,c=t.concerts,i=t.listFilters,s=w(),o=s.filterItems,u=s.changeFilters,l=s.setIsFavourites;Object(r.useEffect)((function(){o(c,i)}),[i]);var d=function(t,e){u(t,e,i)};return Object(J.jsxs)("div",{className:"filters",children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("span",{className:"selectorText",children:"City:"}),Object(J.jsxs)("select",{onChange:function(t){d("city",t.target.value)},className:"select selectorText",defaultValue:"",children:[Object(J.jsx)("option",{value:""}),e.map((function(t){return Object(J.jsx)("option",{value:"".concat(t),children:t},t)}))]})]}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("span",{className:"selectorText",children:"Month:"}),Object(J.jsxs)("select",{onChange:function(t){d("month",t.target.value)},className:"select selectorText",defaultValue:"",children:[Object(J.jsx)("option",{value:""}),O.map((function(t){return Object(J.jsx)("option",{value:"".concat(t.id),children:t.month},t.id)}))]})]}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{onClick:function(){var t,e;t="isFavourite",e=!n,l(),d(t,e)},className:n?"favorites favoritesSuccess":"favorites",children:Object(J.jsx)("img",{src:"".concat(k),alt:""})})})]})]})}),_=function(){var t=Object(a.c)((function(t){return t.concert})),e=t.filterConcerts,n=t.concerts,c=w(),i=c.getConcerts,s=c.isFavouriteAC;Object(r.useEffect)((function(){i()}),[]),Object(r.useEffect)((function(){n!==[]&&localStorage.setItem("concerts",JSON.stringify(n))}),[n]);var o=function(t,e){s(t,e)};return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{className:"contentText",children:"Event Listing"}),Object(J.jsx)(R,{}),Object(J.jsx)("div",{className:"grid",children:e.map((function(t){return Object(J.jsx)(D,{item:t,setIsFavourite:o},t.id)}))})]})};var M=function(){return Object(J.jsx)("div",{className:"wrapper",children:Object(J.jsx)("div",{className:"content",children:Object(J.jsx)(_,{})})})},V=n(24),L=Object(o.c)({concert:y}),U=Object(o.d)(L,Object(o.a)(V.a));s.a.render(Object(J.jsx)(a.a,{store:U,children:Object(J.jsx)(M,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.ad2a714f.chunk.js.map