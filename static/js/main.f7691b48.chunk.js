(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),m=a.n(r),i=a(1);a(9);var o=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],m=Object(n.useState)({}),o=Object(i.a)(m,2),l=o[0],s=o[1];return c.a.createElement("div",{className:l.main&&l.main.temp>16?"app warm":"app"},c.a.createElement("h1",null,"Check Weather"),c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Enter City name",onKeyPress:function(e){"Enter"===e.key&&(fetch("".concat("http://api.openweathermap.org/data/2.5/","weather?q=").concat(a,"&units=metric&appid=caa42e69e90ab35e0b7a00ea0a653f50")).then((function(e){return e.json()})).catch((function(e){return alert(e)})).then((function(e){console.log(e),"404"!==e.cod?s(e):alert("Enter Correct City name")})).catch((function(e){return alert(e)})),r(""))}})),l.main&&c.a.createElement("div",{className:"weather"},c.a.createElement("div",{className:"city-name"},l.name,", ",l.sys.country),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(l.main.temp),"\xb0c")),c.a.createElement("div",{className:"climate"},l.weather[0].main)))};m.a.render(c.a.createElement(o,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.f7691b48.chunk.js.map