(this.webpackJsonpowncorona=this.webpackJsonpowncorona||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq",lastUpdate:"Cards_lastUpdate__32tr2",countUp:"Cards_countUp__3r9kI"}},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(67),o=a.n(c),u=(a(84),a(5)),s=a.n(u),l=a(10),i=a(16),d=a(30),f=a.n(d),p="https://covid19.mathdro.id/api",m=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p,t&&(a="".concat(p,"/countries/").concat(t)),e.next=4,f.a.get(a);case 4:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(p,"/daily"));case 2:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(p,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=a(221),_=a(225),E=a(222),x=a(223),g=a(68),C=a.n(g),O=a(11),j=a.n(O),y=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;if(!a)return"Loading...";var u=[{title:"Infected",value:a.value,text:"Number of infected patients of COVID-19",border_color:"".concat(j.a.infected)},{title:"Recovered",value:n.value,text:"Number of recovered patients of COVID-19",border_color:"".concat(j.a.recovered)},{title:"Deaths",value:c.value,text:"Number of Deaths caused by COVID-19",border_color:"".concat(j.a.deaths)}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},u.map((function(e){return r.a.createElement(h.a,{item:!0,component:_.a,className:"".concat(j.a.card," ").concat(e.border_color)},r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0,className:j.a.cardTitle},e.title),r.a.createElement(C.a,{className:j.a.countUp,start:0,end:e.value,duration:1,separator:","}),r.a.createElement(x.a,{className:j.a.lastUpdate},new Date(o).toDateString()),r.a.createElement(x.a,{className:j.a.cardText},e.text))))})))))},w=a(226),k=a(224),N=a(73),D=a.n(N),I=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"filled",className:D.a.formControl},r.a.createElement(k.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},U=a(41),S=a(74),V=a.n(S),F=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,d=Object(n.useState)([]),f=Object(i.a)(d,2),p=f[0],m=f[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=p.length?r.a.createElement(U.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(186, 171, 218, 0.5)",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(232, 74, 95, 0.5)",fill:!0}]}}):null,_=a?r.a.createElement(U.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(232, 74, 95, 0.5)"," rgba(121, 215, 15, 0.5)","rgba(186, 171, 218, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current data of ".concat(u)}}}):null;return r.a.createElement("div",{className:V.a.container},u?_:h)},B=a(75),P=a.n(B),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("img",{src:P.a,alt:"Covid-19"})))},G=a(76),J=a.n(G);var L=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),d=u[0],f=u[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(d);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:a=e.sent,c(a),f(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:J.a.container},r.a.createElement(z,null),r.a.createElement(y,{data:a}),r.a.createElement(I,{handleCountryChange:v}),r.a.createElement(F,{data:a,country:d})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))},73:function(e,t,a){e.exports={formControl:"CountryPIcker_formControl__2bx6Y"}},74:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},75:function(e,t,a){e.exports=a.p+"static/media/COVID- 19 (1).c53c344b.png"},76:function(e,t,a){e.exports={container:"App_container__1MQN3"}},79:function(e,t,a){e.exports=a(203)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.4b16600b.chunk.js.map