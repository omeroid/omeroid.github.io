(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+nw6":function(t,e,M){t.exports=M.p+"static/travel2020-78ee6d7cdfae7dfed8159d458d79e684.jpg"},"0Wn5":function(t,e,M){"use strict";var n=M("q1tI"),L=M.n(n),u=M("dTeP"),N=M.n(u),j=M("Wbzz");e.a=function(t){return L.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+t.image+")"}},L.a.createElement("div",{className:"inner"},L.a.createElement(j.Link,{to:"/"},L.a.createElement("img",{src:N.a,alt:"omeroid",to:"/"})),L.a.createElement("div",{className:"content"},L.a.createElement("p",null,t.content))))}},"3MWX":function(t,e,M){"use strict";var n=M("q1tI"),L=M.n(n),u=M("Wbzz");function N(t){var e=t.to,M=t.className,n=t.children;return e?L.a.createElement(u.Link,{to:e,className:M},n):L.a.createElement("div",{className:M},n)}function j(t){var e=t.image,M=t.imageAlt;return e?L.a.createElement(N,{to:t.to,className:"image fit"},L.a.createElement("img",{src:e,alt:M})):L.a.createElement("div",null)}e.a=function(t){return L.a.createElement("section",null,L.a.createElement(j,{image:t.image,to:t.to}),L.a.createElement("div",{className:"content"},L.a.createElement("div",{className:"inner"},L.a.createElement("header",{className:"major"},L.a.createElement("h3",null,t.title)),L.a.createElement("p",null,t.content),t.children,t.to&&L.a.createElement("ul",{className:"actions"},L.a.createElement("li",null,L.a.createElement(u.Link,{to:t.to,className:"button"},"詳細を見る"))))))}},A1DE:function(t,e,M){"use strict";var n=M("q1tI"),L=M.n(n);function u(t){return null!==t&&"object"==typeof t&&"constructor"in t&&t.constructor===Object}function N(t,e){void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(e).forEach((function(M){void 0===t[M]?t[M]=e[M]:u(e[M])&&u(t[M])&&Object.keys(e[M]).length>0&&N(t[M],e[M])}))}var j={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};N("undefined"!=typeof document?document:{},j);var a="undefined"!=typeof window?window:{};N(a,{document:j,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var c=M("3MWX");function g(t){var e=t.children;return t.show?L.a.createElement("div",null,e):L.a.createElement("div",null)}function i(t){var e=t.number,M=t.current;return L.a.createElement("li",null,L.a.createElement("a",{href:"?page="+e,className:e==M?"page active":"page"},e))}e.a=function(t){var e=function(){var t=a.location.search.substring(1),e={};return t.split("&").forEach((function(t){var M,n=t.split("=");e=Object.assign({},e,((M={})[n[0]]=n[1],M))})),e}(),M=parseInt(e.page)||1,n=function(t,e){console.log("array",t),console.log("number",e);var M=Math.ceil(t.length/e);return new Array(M).fill().map((function(M,n){return t.slice(n*e,(n+1)*e)}))}(t.items,10),u=n.length,N=n[(M=M>u?1:M)-1];return L.a.createElement("section",{id:"two",className:"spotlights"},N.map((function(e){return L.a.createElement(c.a,{image:e.image,imageAlt:e.imageAlt,to:e.to,title:e.title,content:e.content},t.children)})),L.a.createElement(g,{show:u>1},L.a.createElement("div",{className:"pagination-wrap"},L.a.createElement("ul",{className:"pagination"},L.a.createElement("li",null,L.a.createElement("span",{className:"button small "+(1==M?"disabled":"")},"Prev")),n.map((function(t,e){return L.a.createElement(i,{number:e+1,current:M})})),L.a.createElement("li",null,L.a.createElement("a",{href:"?page="+(M+1),className:"button small "+(M==u?"disabled":"")},"Next"))))))}},Wo83:function(t,e,M){"use strict";M.r(e);var n=M("q1tI"),L=M.n(n),u=(M("Wbzz"),M("TJpk")),N=M.n(u),j=M("Bl7J"),a=M("0Wn5"),c=M("A1DE"),g=M("bdrn"),i=M.n(g),I=M("+nw6"),T=M.n(I),A=M("fP1Q"),y=[{image:M.n(A).a,imageAlt:"新規事業への取り組みを始めました",to:"https://note.com/omeroid/n/n0e0cb1249d0e",title:[L.a.createElement("small",null,"2020/11"),L.a.createElement("br",null),"[ブログ]新規事業への取り組み"],content:["メンバーからアイデアを募り、仮説検証スプリントを回して、新規事業を創造するプログラムをはじました",L.a.createElement("br",null)]},{image:T.a,imageAlt:"社員旅行2020",to:"https://note.com/omeroid/n/nf7d1e62fc1b2",title:[L.a.createElement("small",null,"2020/10"),L.a.createElement("br",null),"社員旅行2020"],content:["メンバー8名で社員旅行に行ったきた様子をお届けします",L.a.createElement("br",null)]},{image:i.a,imageAlt:"What is omeroid?",to:"https://note.com/omeroid/n/n874cf4ff76c6",title:["What is omeroid?"],content:["omeroidの社名の由来をご紹介します",L.a.createElement("br",null)]}];e.default=function(t){return L.a.createElement(j.a,null,L.a.createElement(N.a,null,L.a.createElement("title",null,"News"),L.a.createElement("meta",{name:"description",content:"Blog Page"})),L.a.createElement(a.a,{title:"Blog",content:"omeroidの様子をお届けします",image:i.a}),L.a.createElement("div",{id:"main"},L.a.createElement(c.a,{items:y})))}},bdrn:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA3OTQgNzk0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCgk8ZyBzdHlsZT0iZmlsbDojNDA0MDQwIj4NCgkJPHBhdGggZD0ibTM3MSAxOS40Yy01NC44LTEuMjYtMTExIDEyLTE2MSA0MS4zLTE0OCA4NS40LTE5OSAyNzUtMTEzIDQyM2EzMS41IDMxLjUgMCAwIDAgMC4wNzQgMC4xMzRjNS43NCA5Ljg0IDEyLjEgMTkuMyAxOC45IDI4LjRsLTc0LjQgNDNhMzEuNSAzMS41IDAgMSAwIDMxLjUgNTQuNWw1NzQtMzMyYTMxLjUgMzEuNSAwIDAgMCAwLjM3OC0wLjIxM2wxMDctNjEuN2EzMS41IDMxLjUgMCAxIDAtMzEuNS01NC41bC03NC40IDQzYy00LjUxLTEwLjQtOS41NC0yMC42LTE1LjItMzAuNWEzMS41IDMxLjUgMCAwIDAtMC4wNzUtMC4xNWMtNTYtOTctMTU3LTE1Mi0yNjItMTU1em0zNDIgMjk0LTU0LjUgMzEuNWM2Ny4yIDExNiAyNi40IDI2NS05MiAzMzQtMTE4IDY4LjQtMjY4IDI5LjItMzM1LTg3LjFsLTU0LjUgMzEuNWM4NC40IDE0NiAyNzMgMTk1IDQyMSAxMTAgMTQ4LTg1LjIgMTk5LTI3MyAxMTUtNDIwem0tMTMxIDgyLjFhNDguNCA0OC40IDAgMCAwLTIzIDYuNDYgNDguNCA0OC40IDAgMCAwLTE3LjcgNjYuMSA0OC40IDQ4LjQgMCAwIDAgNjYuMSAxNy43IDQ4LjQgNDguNCAwIDAgMCAxNy43LTY2LjEgNDguNCA0OC40IDAgMCAwLTQzLTI0LjJ6Ii8+DQoJPC9nPg0KPC9zdmc+DQo="},dTeP:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMTIzIDE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQoJPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+DQoJCTxwYXRoIGQ9Im00MzMgNjBjLTE1LjggMC0yOC44IDEzLTI4LjggMjguOHY1Ny40Yy0wLjA4MyAzLjkyIDMuMDggNy4xNSA3IDcuMTUgMy45MyAwIDcuMDgtMy4yMyA3LTcuMTV2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjggOC4yNSAwIDE0LjggNi41NCAxNC44IDE0Ljh2NTcuNGMtMC4wNTggMy45MSAzLjA5IDcuMTEgNyA3LjExIDMuOTEgMCA3LjA2LTMuMiA3LTcuMTF2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjhzMTQuOCA2LjU0IDE0LjggMTQuOHY1Ny40Yy0wLjA1MyAzLjkgMy4xIDcuMSA3IDcuMSAzLjkgMCA3LjA2LTMuMTkgNy03LjF2LTU3LjRjMC0xNS44LTEzLTI4LjgtMjguOC0yOC44LTguNzMgMC0xNi41IDQuMDQtMjEuOCAxMC4yLTUuMy02LjItMTMuMS0xMC4yLTIxLjgtMTAuMnptNDc5LTM3LjRjLTE1LjcgMC0yOC41IDEyLjgtMjguNSAyOC41IDAgMTUuNyAxMi44IDI4LjUgMjguNSAyOC41czI4LjUtMTIuOCAyOC41LTI4LjVjMC0xNS43LTEyLjgtMjguNS0yOC41LTI4LjV6bTAgMTRjOC4xIDAgMTQuNSA2LjQxIDE0LjUgMTQuNSAwIDguMS02LjQxIDE0LjUtMTQuNSAxNC41cy0xNC41LTYuNDEtMTQuNS0xNC41YzAtOC4wOSA2LjQxLTE0LjUgMTQuNS0xNC41em0tMC4xMDUgNTFjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjUxLjdjLTAuMDU5IDMuOTEgMy4wOSA3LjExIDcgNy4xMSAzLjkxIDAgNy4wNi0zLjIgNy03LjExdi01MS43YzAuMDU2LTMuOTUtMy4xNi03LjE2LTcuMTEtNy4xem0xMzYtNjVjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjQzLjdjLTguNDItOC4yNy0xOS45LTEzLjQtMzIuNi0xMy40LTI1LjcgMC00Ni42IDIwLjktNDYuNiA0Ni42IDAgMjUuNyAyMC45IDQ2LjYgNDYuNiA0Ni42IDEyLjcgMCAyNC4yLTUuMTUgMzIuNi0xMy40djYuNDljLTAuMDYgMy45MSAzLjA5IDcuMTIgNyA3LjEyczcuMDYtMy4yIDctNy4xMnYtMTE3YzAuMDYtMy45NS0zLjE2LTcuMTYtNy4xMS03LjF6bS0zOS41IDUxLjRjMTguMSAwIDMyLjYgMTQuNSAzMi42IDMyLjYgMCAxOC4xLTE0LjUgMzIuNi0zMi42IDMyLjYtMTguMSA5ZS00IC0zMi42LTE0LjUtMzIuNi0zMi42IDAtMTguMSAxNC41LTMyLjYgMzIuNi0zMi42em0tMzAwLTE0Yy0yNS43IDAtNDYuNiAyMC45LTQ2LjYgNDYuNnYzOS42Yy0wLjA1NyAzLjkxIDMuMDkgNy4xIDcgNy4xIDMuOTEgMCA3LjA2LTMuMiA3LTcuMXYtMzkuNmMwLTE4LjEgMTQuNS0zMi42IDMyLjYtMzIuNiA5LjA0IDAgMTcuMSAzLjY0IDIzLjEgOS41NSAyLjcyIDIuODMgNy4yMyAyLjg4IDEwIDAuMTA2IDIuNzgtMi43OCAyLjczLTcuMjktMC4xMDctMTAtOC40My04LjQzLTIwLjEtMTMuNi0zMy0xMy42em0xMTIgMzguNmMtN2UtNCA1Ljk0IDQuODEgMTAuOCAxMC44IDEwLjggNS45NC0xZS00IDEwLjgtNC44MiAxMC44LTEwLjgtMmUtNCAtNS45NC00LjgyLTEwLjgtMTAuOC0xMC44LTUuOTQgMS43ZS00IC0xMC44IDQuODEtMTAuOCAxMC44em0tMjM2LTM4LjZjLTI1LjEgMC00NS43IDIwLjEtNDYuNSA0NS4xLTAuMjMgMS4wMi0wLjIzIDIuMDcgMCAzLjA5IDAuODM1IDI0LjkgMjEuNCA0NSA0Ni41IDQ1IDEyLjggMCAyNC41LTUuMjIgMzMtMTMuNiAyLjgtMi43MiAyLjgyLTcuMjEgMC4wNjUtOS45Ny0yLjc2LTIuNzYtNy4yNC0yLjczLTkuOTcgMC4wNjUtNS45MSA1LjkxLTE0IDkuNTUtMjMuMSA5LjU1LTE1LjcgMC0yOC42LTEwLjktMzEuOC0yNS42aDcxLjRjMy44Ny00ZS00IDctMy4xMyA3LTcgMC0yNS43LTIwLjktNDYuNi00Ni42LTQ2LjZ6bS0yNDggMC4wNDQ3Yy0xNi41LTAuNDEzLTMyLjggNy45OS00MS42IDIzLjMtMTIuOCAyMi4yLTUuMTYgNTAuOCAxNy4xIDYzLjcgMjIuMiAxMi44IDUwLjggNS4xNiA2My43LTE3LjEgMTIuOC0yMi4yIDUuMTYtNTAuOC0xNy4xLTYzLjctNi45NC00LjAxLTE0LjUtNi4wMi0yMi02LjJ6bTQ4MCAwYy03LjUyIDAuMTg3LTE1LjEgMi4xOS0yMiA2LjItMjIuMiAxMi44LTI5LjkgNDEuNC0xNy4xIDYzLjcgMTIuOCAyMi4yIDQxLjQgMjkuOSA2My43IDE3LjEgMjIuMi0xMi44IDI5LjktNDEuNCAxNy4xLTYzLjctOC44Mi0xNS4zLTI1LjEtMjMuNy00MS42LTIzLjN6bS0yMzIgMTRjMTUuNyAwIDI4LjYgMTAuOSAzMS44IDI1LjZoLTYzLjZjMy4xOS0xNC43IDE2LjEtMjUuNiAzMS44LTI1LjZ6bS0yNTIgMC4wNDM4YzYuMjYtMC40MzQgMTIuNyAwLjkzOSAxOC42IDQuMzMgMTUuNyA5LjA0IDIxIDI4LjkgMTEuOSA0NC41LTkuMDQgMTUuNy0yOC45IDIxLTQ0LjUgMTEuOS0xNS43LTkuMDQtMjEtMjguOS0xMS45LTQ0LjUgNS42NS05Ljc5IDE1LjUtMTUuNSAyNS45LTE2LjN6bTQ4NyAwYzEwLjQgMC43MjUgMjAuMyA2LjQ3IDI1LjkgMTYuMyA5LjA0IDE1LjcgMy43MyAzNS41LTExLjkgNDQuNS0xNS43IDkuMDQtMzUuNSAzLjczLTQ0LjUtMTEuOS05LjA0LTE1LjctMy43My0zNS41IDExLjktNDQuNSA1Ljg3LTMuMzkgMTIuMy00Ljc3IDE4LjYtNC4zM3oiLz4NCgkJPHBhdGggZD0ibTE0NCA5LjY1Yy0xMi4yLTAuMjgxLTI0LjYgMi42Ni0zNS45IDkuMTgtMzIuOSAxOS00NC4yIDYxLjItMjUuMiA5NC4xYTcgNyAwIDAgMCAwLjAxNjYgMC4wM2MxLjI4IDIuMTkgMi42OCA0LjI5IDQuMTkgNi4zMmwtMTYuNSA5LjU1YTcgNyAwIDEgMCA3IDEyLjFsMTI4LTczLjdhNyA3IDAgMCAwIDAuMDg0LTAuMDQ3M2wyMy44LTEzLjdhNyA3IDAgMSAwLTctMTIuMWwtMTYuNSA5LjU1Yy0xLTIuMzItMi4xMi00LjU5LTMuMzgtNi43OWE3IDcgMCAwIDAtMC4wMTctMC4wMzMzYy0xMi40LTIxLjYtMzQuOS0zMy44LTU4LjItMzQuNHptNzUuOSA2NS4yLTEyLjEgN2MxNC45IDI1LjkgNS44NyA1OS0yMC41IDc0LjItMjYuMyAxNS4yLTU5LjUgNi40OS03NC40LTE5LjRsLTEyLjEgN2MxOC44IDMyLjUgNjAuOCA0My40IDkzLjYgMjQuNSAzMi44LTE4LjkgNDQuMy02MC44IDI1LjYtOTMuM3ptLTI5IDE4LjNhMTAuOCAxMC44IDAgMCAwLTUuMTIgMS40NCAxMC44IDEwLjggMCAwIDAtMy45MyAxNC43IDEwLjggMTAuOCAwIDAgMCAxNC43IDMuOTQgMTAuOCAxMC44IDAgMCAwIDMuOTQtMTQuNyAxMC44IDEwLjggMCAwIDAtOS41Ny01LjM3eiIvPg0KCTwvZz4NCjwvc3ZnPg0K"},fP1Q:function(t,e,M){t.exports=M.p+"static/new-bisiness-0be52640d13e07728bff8e20fbb7cc80.png"}}]);
//# sourceMappingURL=component---src-pages-blogs-js-251df3e526cfcfa0431e.js.map