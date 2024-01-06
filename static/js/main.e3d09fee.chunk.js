(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=a(97),s=a(95),i=a(96),m=a(98),d=a(93),u=a(99);var f=a(94),E=a(11),b=a.n(E);const g={18:5,19:3,20:2,21:0},y={1:"03",2:"14",3:"07",4:"04",5:"09",6:"06",7:"11",8:"08",9:"05",10:"10",11:"07",12:"12"},p={...y,1:"04",2:"15"};function h(e){let t=E(e.currentDay),a=g[t.format("Y").substring(0,2)],r=Number(t.format("YY")),c=r%2===1?r+11:r,o=c/2,d=o%2===1?o+11:o,u=d%7===0?d:d+7-d%7,b=(u-d+a)%7,h=t.isLeapYear()?"".concat(t.format("MM-")).concat(p[t.format("M")]):"".concat(t.format("MM-")).concat(y[t.format("M")]),k=Number(t.format("D")),w=Number(h.substring(3)),D=[];for(;Math.abs(k-w)>6;)D.push("".concat(t.format("MM-")).concat(w<10?"0".concat(w):w)),w<k?w+=7:w-=7;return D.length>0&&D.push("".concat(t.format("MM-")).concat(w<10?"0".concat(w):w)),l.a.createElement(s.a,{direction:"column",margin:"medium"},l.a.createElement(m.a,{alignSelf:"center"},l.a.createElement("span",{className:"century"},t.format("Y").substring(0,2)),l.a.createElement("span",{className:"year"},t.format("YY")),"-",l.a.createElement("span",{className:"month"},t.format("MM")),"-",l.a.createElement("span",{className:"day"},t.format("DD"))),l.a.createElement(i.a,{margin:{bottom:"xsmall"}},l.a.createElement(f.a,{content:l.a.createElement("div",{style:{backgroundColor:"white",color:"black",padding:"10px",borderRadius:"4px"}},l.a.createElement("p",null,"1800s: 5"),l.a.createElement("p",null,"1900s: 3"),l.a.createElement("p",null,"2000s: 2"),l.a.createElement("p",null,"2100s: 0")),dropProps:{align:{top:"bottom"}}},l.a.createElement("b",{style:{textDecoration:"underline"}},"Century index"))," for the ",l.a.createElement("b",{className:"century"},t.format("Y").substring(0,2)),"00s is ",l.a.createElement("b",{className:"centuryIndex"},a),"."),l.a.createElement(i.a,null,"Calculating the year index for year ",l.a.createElement("b",{className:"year"},t.format("YY"))," using ",l.a.createElement(f.a,{content:l.a.createElement("div",{style:{backgroundColor:"white",color:"black",padding:"10px",borderRadius:"4px"}},l.a.createElement("p",null,"1. If odd, add 11"),l.a.createElement("p",null,"2. Divide by 2"),l.a.createElement("p",null,"3. If odd, add 11")),dropProps:{align:{top:"bottom"}}},l.a.createElement("b",{style:{textDecoration:"underline"}},'"odd + 11"'))," method:"),l.a.createElement(s.a,{pad:{horizontal:"medium",vertical:"xsmall"},margin:{bottom:"xsmall"}},r!==c&&l.a.createElement(i.a,null,r," is odd, adding 11: ",r," + 11 = ",c,";"),l.a.createElement(i.a,null,c," is even, dividing by 2: ",c," / 2 = ",o===d?l.a.createElement(l.a.Fragment,null,l.a.createElement("b",{className:"yearIndex"},o),"."):"".concat(o,";")),o!==d&&l.a.createElement(i.a,null,o," is odd, adding 11: ",o," + 11 = ",l.a.createElement("b",{className:"yearIndex"},d),".")),l.a.createElement(i.a,null,"The nearest higher multiple of 7 to ",l.a.createElement("b",{className:"yearIndex"},d)," is ",l.a.createElement("b",{className:"nearestMultiple"},u),"."),l.a.createElement(i.a,{margin:{bottom:"xsmall"}},"Calculating the weekday of the doomsday: (",l.a.createElement("b",{className:"nearestMultiple"},u)," - ",l.a.createElement("b",{className:"yearIndex"},d)," + ",l.a.createElement("b",{className:"centuryIndex"},a),") mod 7 = ",l.a.createElement("b",{className:"doomsdayWeekDay"},b)," ",l.a.createElement("b",null,"(",E.weekdays(b),")"),"."),l.a.createElement(i.a,null,l.a.createElement(f.a,{content:l.a.createElement("div",{style:{backgroundColor:"white",color:"black",padding:"10px",borderRadius:"4px"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Doomsday"))),l.a.createElement("tbody",null,Object.entries(y).map(e=>{let[t,a]=e;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t),l.a.createElement("td",null,a," ","1"===t&&"(04 on leap years)"," ","2"===t&&"(15 on leap years)"))})))),dropProps:{align:{bottom:"top"}}},l.a.createElement("b",{style:{textDecoration:"underline"}},"Doomsday"))," for ",t.format("MMMM")," is ",l.a.createElement("b",null,h.substring(0,3)),l.a.createElement("b",{className:0===D.length?"doomsday":""},h.substring(3)),t.isLeapYear()&&t.format("M")<3&&l.a.createElement("b",null," (leap year)"),"."),D.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,"Selecting a doomsday closer to our date:"),l.a.createElement(s.a,{pad:{horizontal:"medium",vertical:"xsmall"}},l.a.createElement(i.a,null,D.map((e,t)=>t===D.length-1?l.a.createElement(n.Fragment,{key:t},l.a.createElement("b",null,e.substring(0,3)),l.a.createElement("b",{className:"doomsday"},e.substring(3)),"."):"".concat(e," -> "))))),w===k?l.a.createElement(i.a,null,"Our date matches the doomsday, and it is ",l.a.createElement("b",null,t.format("dddd")),"."):l.a.createElement(i.a,null,"Calculating the day of the week: (",l.a.createElement("b",{className:"doomsdayWeekDay"},b)," ",k>w?l.a.createElement(l.a.Fragment,null," + (",l.a.createElement("b",{className:"day"},k)," - ",l.a.createElement("b",{className:"doomsday"},w),")"):l.a.createElement(l.a.Fragment,null," - (",l.a.createElement("b",{className:"doomsday"},w)," - ",l.a.createElement("b",{className:"day"},k),")"),") mod 7 = ",l.a.createElement("b",null,t.format("d")," (",t.format("dddd"),")"),"."))}function k(e){const[t,a]=Object(n.useState)(!0),[r,c]=l.a.useState(!1);return function(e,t){const a=Object(n.useRef)(!1);Object(n.useEffect)(()=>{a.current?e():a.current=!0},t)}(()=>{a(!1)},[e.isVisible]),l.a.createElement(s.a,{key:e.isVisible,direction:"row",justify:"between",margin:{bottom:"small",right:"large",left:"large"},animation:e.isVisible?{type:"fadeIn"}:{type:"fadeOut",duration:200}},l.a.createElement(d.a,{label:"Explanation",onClick:e.isVisible?()=>c(!0):()=>{},style:{visibility:t?"hidden":"visible"}}),r&&l.a.createElement(u.a,{onEsc:()=>c(!1),onClickOutside:()=>c(!1),margin:"medium",className:"modal",responsive:!1,full:"horizontal"},l.a.createElement(h,{currentDay:e.currentDay})),l.a.createElement(d.a,{label:"Continue",onClick:e.isVisible?e.onContinueClick:()=>{},style:{visibility:t?"hidden":"visible"}}))}function w(e){const t=void 0!==e.selectedDayOfWeek,a=t&&e.selectedDayOfWeek!==e.expectedDayOfWeek&&e.number===e.selectedDayOfWeek,n=t&&e.number===e.expectedDayOfWeek;return void 0!==e.number?l.a.createElement(s.a,{flex:{grow:1},basis:"xxsmall",align:"center",justify:"center",style:{boxShadow:"none"},animation:a||n?{type:"zoomIn",duration:400}:{},background:a?"status-error":n?"status-ok":"",onClick:()=>{t||e.setSelectedDayOfWeek(e.number)}},l.a.createElement(i.a,{size:"large"},b.a.weekdays(e.number))):l.a.createElement(s.a,{flex:{grow:1},basis:"xxsmall"})}function D(e){let t=e.selectedDayOfWeek,a=e.setSelectedDayOfWeek,n=e.expectedDayOfWeek;return l.a.createElement(s.a,{flex:{grow:2},direction:"column",justify:"center",alignSelf:"center",style:{width:"100%"}},l.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},l.a.createElement(w,{number:1,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),l.a.createElement(w,{number:2,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),l.a.createElement(w,{number:3,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n})),l.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},l.a.createElement(w,{number:4,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),l.a.createElement(w,{number:5,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),l.a.createElement(w,{number:6,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n})),l.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},l.a.createElement(w,null),l.a.createElement(w,{number:0,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),l.a.createElement(w,null)))}const x={getHighScore:()=>localStorage.getItem("highScore")||0,setHighScore:e=>{localStorage.setItem("highScore",e)}};var O=a(59);const v=a(11),W=a(79);var S=function(e){const t=()=>W(v(e.endDate),v(e.startDate)),a=e=>Number(e.format("d"));let r=t();const[c,o]=Object(n.useState)(r.format("Y-MM-DD")),[d,u]=Object(n.useState)(0),[f,E]=function(){const[e,t]=Object(n.useState)(x.getHighScore());return Object(n.useEffect)(()=>{x.setHighScore(e)},[e]),[e,t]}(),[b,g]=Object(n.useState)(),[y,p]=Object(n.useState)(a(r)),[h,w]=Object(n.useState)(10);let S=Object(n.useRef)();return Object(n.useEffect)(()=>{h>0&&void 0===b?S.current=setTimeout(()=>{w(e=>e-1)},1e3):clearTimeout(S.current)},[h,b]),l.a.createElement(s.a,{fill:!0,background:"brand",direction:"column",overflow:"hidden"},l.a.createElement(s.a,{direction:"column",flex:"grow",style:{maxWidth:800,width:"100%"},alignSelf:"center"},l.a.createElement(s.a,{direction:"row",justify:"between",margin:{top:"medium",right:"medium",left:"medium"}},l.a.createElement(i.a,{size:"xlarge"},"Highscore: ",f),l.a.createElement(i.a,{size:"xlarge"},"Score: ",d)),l.a.createElement(s.a,{key:c,flex:{grow:1},align:"center",justify:"center",animation:{type:"fadeIn"}},l.a.createElement(s.a,{animation:h<=3&&h>0?{type:"pulse",size:"large",duration:500}:{},flex:{grow:1}},l.a.createElement(m.a,{size:"large",level:"1",color:0===h&&"status-warning"},h)),l.a.createElement(s.a,{flex:{grow:4}},l.a.createElement(m.a,{size:"large",level:"1"},c))),l.a.createElement(D,{selectedDayOfWeek:b,setSelectedDayOfWeek:g,expectedDayOfWeek:y}),l.a.createElement(k,{onContinueClick:()=>{let e=t();o(e.format("Y-MM-DD")),b===y&&h>0?(u(e=>e+1),d+1>f&&E(d+1)):u(0),g(void 0),p(a(e)),w(10)},isVisible:void 0!==b,currentDay:c}),l.a.createElement(s.a,{direction:"row",justify:"end",margin:{right:"large",left:"large"}},l.a.createElement(O.a,{href:"https://github.com/grantas33/Doomsday-algorithm-practice","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star me on GitHub"},"Star"))))};a(80);const N={global:{font:{family:"Solway"}}};var M=function(){return l.a.createElement(o.a,{theme:N,full:!0},l.a.createElement(S,{startDate:"1800-01-01",endDate:"2199-12-31"}))};const j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const a=e.installing;null!=a&&(a.onstatechange=(()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Doomsday-algorithm-practice",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/Doomsday-algorithm-practice","/service-worker.js");j?(function(e,t){fetch(e).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):C(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.e3d09fee.chunk.js.map