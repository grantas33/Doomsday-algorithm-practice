(this["webpackJsonpmath-games"]=this["webpackJsonpmath-games"]||[]).push([[0],{45:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(70),i=a(8),s=a(71),m=a(73),u=a(72),d=a(74),f=a(69);var b=a(11),g=a(9),y=a.n(g),E={18:5,19:3,20:2,21:0},h={1:"03",2:"14",3:"07",4:"04",5:"09",6:"06",7:"11",8:"08",9:"05",10:"10",11:"07",12:"12"},k=Object(b.a)(Object(b.a)({},h),{},{1:"04",2:"15"});function p(e){for(var t=g(e.currentDay),a=E[t.format("Y").substring(0,2)],c=Number(t.format("YY")),l=c%2===1?c+11:c,o=l/2,i=o%2===1?o+11:o,d=i%7===0?i:i+7-i%7,f=(d-i+a)%7,b=t.isLeapYear()?"".concat(t.format("MM-")).concat(k[t.format("M")]):"".concat(t.format("MM-")).concat(h[t.format("M")]),y=Number(t.format("D")),p=Number(b.substring(3)),O=[];Math.abs(y-p)>6;)O.push("".concat(t.format("MM-")).concat(p<10?"0".concat(p):p)),p<y?p+=7:p-=7;return O.length>0&&O.push("".concat(t.format("MM-")).concat(p<10?"0".concat(p):p)),r.a.createElement(s.a,{direction:"column",margin:"medium"},r.a.createElement(u.a,{alignSelf:"center"},r.a.createElement("span",{className:"century"},t.format("Y").substring(0,2)),r.a.createElement("span",{className:"year"},t.format("YY")),"-",r.a.createElement("span",{className:"month"},t.format("MM")),"-",r.a.createElement("span",{className:"day"},t.format("DD"))),r.a.createElement(m.a,{margin:{bottom:"xsmall"}},"Century index for the ",r.a.createElement("b",{className:"century"},t.format("Y").substring(0,2)),"00s is ",r.a.createElement("b",{className:"centuryIndex"},a),"."),r.a.createElement(m.a,null,"Calculating the year index for year ",r.a.createElement("b",{className:"year"},t.format("YY")),' using "odd + 11" method:'),r.a.createElement(s.a,{pad:{horizontal:"medium",vertical:"xsmall"},margin:{bottom:"xsmall"}},c!==l&&r.a.createElement(m.a,null,c," is odd, adding 11: ",c," + 11 = ",l,";"),r.a.createElement(m.a,null,l," is even, dividing by 2: ",l," / 2 = ",o===i?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",{className:"yearIndex"},o),"."):"".concat(o,";")),o!==i&&r.a.createElement(m.a,null,o," is odd, adding 11: ",o," + 11 = ",r.a.createElement("b",{className:"yearIndex"},i),".")),r.a.createElement(m.a,null,"The nearest higher multiple of 7 to ",r.a.createElement("b",{className:"yearIndex"},i)," is ",r.a.createElement("b",{className:"nearestMultiple"},d),"."),r.a.createElement(m.a,{margin:{bottom:"xsmall"}},"Calculating the weekday of the doomsday: (",r.a.createElement("b",{className:"nearestMultiple"},d)," - ",r.a.createElement("b",{className:"yearIndex"},i)," + ",r.a.createElement("b",{className:"centuryIndex"},a),") mod 7 = ",r.a.createElement("b",{className:"doomsdayWeekDay"},f)," ",r.a.createElement("b",null,"(",g.weekdays(f),")"),"."),r.a.createElement(m.a,null,"Doomsday for ",t.format("MMMM")," is ",r.a.createElement("b",null,b.substring(0,3)),r.a.createElement("b",{className:0===O.length?"doomsday":""},b.substring(3)),t.isLeapYear()&&t.format("M")<3&&r.a.createElement("b",null," (leap year)"),"."),O.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,"Selecting a doomsday closer to our date:"),r.a.createElement(s.a,{pad:{horizontal:"medium",vertical:"xsmall"}},r.a.createElement(m.a,null,O.map((function(e,t){return t===O.length-1?r.a.createElement(n.Fragment,{key:t},r.a.createElement("b",null,e.substring(0,3)),r.a.createElement("b",{className:"doomsday"},e.substring(3)),"."):"".concat(e," -> ")}))))),p===y?r.a.createElement(m.a,null,"Our date matches the doomsday, and it is ",r.a.createElement("b",null,t.format("dddd")),"."):r.a.createElement(m.a,null,"Calculating the day of the week: (",r.a.createElement("b",{className:"doomsdayWeekDay"},f)," ",y>p?r.a.createElement(r.a.Fragment,null," + (",r.a.createElement("b",{className:"day"},y)," - ",r.a.createElement("b",{className:"doomsday"},p),")"):r.a.createElement(r.a.Fragment,null," - (",r.a.createElement("b",{className:"doomsday"},p)," - ",r.a.createElement("b",{className:"day"},y),")"),") mod 7 = ",r.a.createElement("b",null,t.format("d")," (",t.format("dddd"),")"),"."))}function O(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],l=a[1],o=r.a.useState(!1),m=Object(i.a)(o,2),u=m[0],b=m[1];return function(e,t){var a=Object(n.useRef)(!1);Object(n.useEffect)((function(){a.current?e():a.current=!0}),t)}((function(){l(!1)}),[e.isVisible]),r.a.createElement(s.a,{key:e.isVisible,direction:"row",justify:"between",margin:{bottom:"small",right:"large",left:"large"},animation:e.isVisible?{type:"fadeIn"}:{type:"fadeOut",duration:200}},r.a.createElement(d.a,{label:"Explanation",onClick:e.isVisible?function(){return b(!0)}:function(){},style:{visibility:c?"hidden":"visible"}}),u&&r.a.createElement(f.a,{onEsc:function(){return b(!1)},onClickOutside:function(){return b(!1)},margin:"medium",className:"modal",responsive:!1},r.a.createElement(p,{currentDay:e.currentDay})),r.a.createElement(d.a,{label:"Continue",onClick:e.isVisible?e.onContinueClick:function(){},style:{visibility:c?"hidden":"visible"}}))}function w(e){var t=void 0!==e.selectedDayOfWeek,a=t&&e.selectedDayOfWeek!==e.expectedDayOfWeek&&e.number===e.selectedDayOfWeek,n=t&&e.number===e.expectedDayOfWeek;return void 0!==e.number?r.a.createElement(s.a,{flex:{grow:1},basis:"xxsmall",align:"center",justify:"center",style:{boxShadow:"none"},animation:a||n?{type:"zoomIn",duration:400}:{},background:a?"status-error":n?"status-ok":"",onClick:function(){t||e.setSelectedDayOfWeek(e.number)}},r.a.createElement(m.a,{size:"large"},y.a.weekdays(e.number))):r.a.createElement(s.a,{flex:{grow:1},basis:"xxsmall"})}function D(e){var t=e.selectedDayOfWeek,a=e.setSelectedDayOfWeek,n=e.expectedDayOfWeek;return r.a.createElement(s.a,{flex:{grow:2},direction:"column",justify:"center",alignSelf:"center",style:{width:"100%"}},r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},r.a.createElement(w,{number:1,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(w,{number:2,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(w,{number:3,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n})),r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},r.a.createElement(w,{number:4,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(w,{number:5,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(w,{number:6,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n})),r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},r.a.createElement(w,null),r.a.createElement(w,{number:0,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(w,null)))}var v=function(){return localStorage.getItem("highScore")||0},x=function(e){localStorage.setItem("highScore",e)};var W=a(40),S=a(9),j=a(59);var N=function(e){var t=function(){return j(S(e.endDate),S(e.startDate))},a=function(e){return Number(e.format("d"))},c=t(),l=Object(n.useState)(c.format("Y-MM-DD")),o=Object(i.a)(l,2),d=o[0],f=o[1],b=Object(n.useState)(0),g=Object(i.a)(b,2),y=g[0],E=g[1],h=function(){var e=Object(n.useState)(v()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){x(a)}),[a]),[a,r]}(),k=Object(i.a)(h,2),p=k[0],w=k[1],N=Object(n.useState)(),M=Object(i.a)(N,2),C=M[0],Y=M[1],I=Object(n.useState)(a(c)),z=Object(i.a)(I,2),V=z[0],A=z[1],F=Object(n.useState)(10),R=Object(i.a)(F,2),T=R[0],L=R[1],U=Object(n.useRef)();return Object(n.useEffect)((function(){T>0&&void 0===C?U.current=setTimeout((function(){L((function(e){return e-1}))}),1e3):clearTimeout(U.current)}),[T,C]),r.a.createElement(s.a,{fill:!0,background:"brand",direction:"column",overflow:"hidden"},r.a.createElement(s.a,{direction:"column",flex:"grow",style:{maxWidth:800,width:"100%"},alignSelf:"center"},r.a.createElement(s.a,{direction:"row",justify:"between",margin:{top:"medium",right:"medium",left:"medium"}},r.a.createElement(m.a,{size:"xlarge"},"Highscore: ",p),r.a.createElement(m.a,{size:"xlarge"},"Score: ",y)),r.a.createElement(s.a,{key:d,flex:{grow:1},align:"center",justify:"center",animation:{type:"fadeIn"}},r.a.createElement(s.a,{animation:T<=3&&T>0?{type:"pulse",size:"large",duration:500}:{},flex:{grow:1}},r.a.createElement(u.a,{size:"large",level:"1",color:0===T&&"status-warning"},T)),r.a.createElement(s.a,{flex:{grow:4}},r.a.createElement(u.a,{size:"large",level:"1"},d))),r.a.createElement(D,{selectedDayOfWeek:C,setSelectedDayOfWeek:Y,expectedDayOfWeek:V}),r.a.createElement(O,{onContinueClick:function(){var e=t();f(e.format("Y-MM-DD")),C===V&&T>0?(E((function(e){return e+1})),y+1>p&&w(y+1)):E(0),Y(void 0),A(a(e)),L(10)},isVisible:void 0!==C,currentDay:d}),r.a.createElement(s.a,{direction:"row",justify:"end",margin:{right:"large",left:"large"}},r.a.createElement(W.a,{href:"https://github.com/grantas33/Doomsday-algorithm-practice","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star me on GitHub"},"Star"))))},M=(a(60),{global:{font:{family:"Solway"}}});var C=function(){return r.a.createElement(o.a,{theme:M,full:!0},r.a.createElement(N,{startDate:"1800-01-01",endDate:"2199-12-31"}))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Doomsday-algorithm-practice",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Doomsday-algorithm-practice","/service-worker.js");Y?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.d78d12ed.chunk.js.map