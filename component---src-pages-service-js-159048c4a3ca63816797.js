(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0Wn5":function(t,e,M){"use strict";var n=M("q1tI"),u=M.n(n),L=M("dTeP"),a=M.n(L),c=M("Wbzz");e.a=function(t){return u.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+t.image+")"}},u.a.createElement("div",{className:"inner"},u.a.createElement(c.Link,{to:"/"},u.a.createElement("img",{src:a.a,alt:"omeroid",to:"/"})),u.a.createElement("div",{className:"content"},u.a.createElement("p",null,t.content))))}},"3MWX":function(t,e,M){"use strict";var n=M("q1tI"),u=M.n(n),L=M("Wbzz");function a(t){var e=t.to,M=t.className,n=t.children;return e?u.a.createElement(L.Link,{to:e,className:M},n):u.a.createElement("div",{className:M},n)}function c(t){var e=t.image,M=t.imageAlt;return e?u.a.createElement(a,{to:t.to,className:"image fit"},u.a.createElement("img",{src:e,alt:M})):u.a.createElement("div",null)}e.a=function(t){return u.a.createElement("section",{key:t.key},u.a.createElement(c,{image:t.image,to:t.to}),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"inner"},t.title&&u.a.createElement("header",{className:"major"},u.a.createElement("h3",null,t.title)),u.a.createElement("p",null,t.content),t.children,t.to&&u.a.createElement("ul",{className:"actions"},u.a.createElement("li",null,u.a.createElement(L.Link,{to:t.to,className:"button"},"詳細を見る"))))))}},A1DE:function(t,e,M){"use strict";var n=M("q1tI"),u=M.n(n);function L(t){return null!==t&&"object"==typeof t&&"constructor"in t&&t.constructor===Object}function a(t,e){void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(e).forEach((function(M){void 0===t[M]?t[M]=e[M]:L(e[M])&&L(t[M])&&Object.keys(e[M]).length>0&&a(t[M],e[M])}))}var c={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};a("undefined"!=typeof document?document:{},c);var i="undefined"!=typeof window?window:{};a(i,{document:c,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var j=M("3MWX");function N(t){var e=t.children;return t.show?u.a.createElement("div",null,e):u.a.createElement("div",null)}function g(t){var e=t.number,M=t.current;return u.a.createElement("li",null,u.a.createElement("a",{href:"?page="+e,className:e==M?"page active":"page"},e))}e.a=function(t){var e=function(){var t=i.location.search.substring(1),e={};return t.split("&").forEach((function(t){var M,n=t.split("=");e=Object.assign({},e,((M={})[n[0]]=n[1],M))})),e}(),M=parseInt(e.page)||1,n=function(t,e){if(!e)return[t];var M=Math.ceil(t.length/e);return new Array(M).fill().map((function(M,n){return t.slice(n*e,(n+1)*e)}))}(t.items,t.pageSize),L=n.length,a=n[(M=M>L?1:M)-1];return console.log("currentBlock",a),u.a.createElement("section",{id:"two",className:"spotlights"},a.map((function(e){return u.a.createElement(j.a,{key:e.title,image:e.image,imageAlt:e.imageAlt,to:e.to,title:e.title,content:e.content},t.children)})),u.a.createElement(N,{show:L>1},u.a.createElement("div",{className:"pagination-wrap"},u.a.createElement("ul",{className:"pagination"},u.a.createElement("li",null,u.a.createElement("a",{href:"?page="+(M-1),className:"button small "+(1==M?"disabled":"")},"Prev")),n.map((function(t,e){return u.a.createElement(g,{number:e+1,current:M})})),u.a.createElement("li",null,u.a.createElement("a",{href:"?page="+(M+1),className:"button small "+(M==L?"disabled":"")},"Next"))))))}},abFe:function(t,e,M){"use strict";M.r(e);var n=M("q1tI"),u=M.n(n),L=(M("Wbzz"),M("TJpk")),a=M.n(L),c=M("Bl7J"),i=M("0Wn5"),j=M("A1DE"),N=M("iIfD"),g=M.n(N),I=M("jN53"),T=M.n(I),r=M("u8W6"),A=M.n(r),y=[{image:T.a,imageAlt:"エンジニア",to:"./it",title:"ITコンサルティングサービス",content:["要件定義・設計・開発・テスト・運用等のシステム開発の全フェーズをサポートいたします",u.a.createElement("br",null)]},{image:A.a,imageAlt:"コンサルタント",to:"./consulting",title:"経営・業務コンサルティングサービス",content:["事業戦略・経営戦略策定に伴走・サポートいたします。",u.a.createElement("br",null),"また、豊富なデジタル化・DX推進の経験をもとに、戦略策定からロードマップ策定、システム・データアーキテクチャの設計等をご支援いたします。",u.a.createElement("br",null)]},{image:g.a,imageAlt:"プロダクト",to:"./product",title:"プロダクト",content:["世の中を便利にする自社プロダクトを作成しています",u.a.createElement("br",null)]}];e.default=function(t){return u.a.createElement(c.a,null,u.a.createElement(a.a,null,u.a.createElement("title",null,"Service"),u.a.createElement("meta",{name:"description",content:"Service Page"})),u.a.createElement(i.a,{title:"Service",content:"omeroidの事業内容を紹介します",image:g.a}),u.a.createElement("div",{id:"main"},u.a.createElement(j.a,{items:y})))}},dTeP:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMTIzIDE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQoJPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+DQoJCTxwYXRoIGQ9Im00MzMgNjBjLTE1LjggMC0yOC44IDEzLTI4LjggMjguOHY1Ny40Yy0wLjA4MyAzLjkyIDMuMDggNy4xNSA3IDcuMTUgMy45MyAwIDcuMDgtMy4yMyA3LTcuMTV2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjggOC4yNSAwIDE0LjggNi41NCAxNC44IDE0Ljh2NTcuNGMtMC4wNTggMy45MSAzLjA5IDcuMTEgNyA3LjExIDMuOTEgMCA3LjA2LTMuMiA3LTcuMTF2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjhzMTQuOCA2LjU0IDE0LjggMTQuOHY1Ny40Yy0wLjA1MyAzLjkgMy4xIDcuMSA3IDcuMSAzLjkgMCA3LjA2LTMuMTkgNy03LjF2LTU3LjRjMC0xNS44LTEzLTI4LjgtMjguOC0yOC44LTguNzMgMC0xNi41IDQuMDQtMjEuOCAxMC4yLTUuMy02LjItMTMuMS0xMC4yLTIxLjgtMTAuMnptNDc5LTM3LjRjLTE1LjcgMC0yOC41IDEyLjgtMjguNSAyOC41IDAgMTUuNyAxMi44IDI4LjUgMjguNSAyOC41czI4LjUtMTIuOCAyOC41LTI4LjVjMC0xNS43LTEyLjgtMjguNS0yOC41LTI4LjV6bTAgMTRjOC4xIDAgMTQuNSA2LjQxIDE0LjUgMTQuNSAwIDguMS02LjQxIDE0LjUtMTQuNSAxNC41cy0xNC41LTYuNDEtMTQuNS0xNC41YzAtOC4wOSA2LjQxLTE0LjUgMTQuNS0xNC41em0tMC4xMDUgNTFjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjUxLjdjLTAuMDU5IDMuOTEgMy4wOSA3LjExIDcgNy4xMSAzLjkxIDAgNy4wNi0zLjIgNy03LjExdi01MS43YzAuMDU2LTMuOTUtMy4xNi03LjE2LTcuMTEtNy4xem0xMzYtNjVjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjQzLjdjLTguNDItOC4yNy0xOS45LTEzLjQtMzIuNi0xMy40LTI1LjcgMC00Ni42IDIwLjktNDYuNiA0Ni42IDAgMjUuNyAyMC45IDQ2LjYgNDYuNiA0Ni42IDEyLjcgMCAyNC4yLTUuMTUgMzIuNi0xMy40djYuNDljLTAuMDYgMy45MSAzLjA5IDcuMTIgNyA3LjEyczcuMDYtMy4yIDctNy4xMnYtMTE3YzAuMDYtMy45NS0zLjE2LTcuMTYtNy4xMS03LjF6bS0zOS41IDUxLjRjMTguMSAwIDMyLjYgMTQuNSAzMi42IDMyLjYgMCAxOC4xLTE0LjUgMzIuNi0zMi42IDMyLjYtMTguMSA5ZS00IC0zMi42LTE0LjUtMzIuNi0zMi42IDAtMTguMSAxNC41LTMyLjYgMzIuNi0zMi42em0tMzAwLTE0Yy0yNS43IDAtNDYuNiAyMC45LTQ2LjYgNDYuNnYzOS42Yy0wLjA1NyAzLjkxIDMuMDkgNy4xIDcgNy4xIDMuOTEgMCA3LjA2LTMuMiA3LTcuMXYtMzkuNmMwLTE4LjEgMTQuNS0zMi42IDMyLjYtMzIuNiA5LjA0IDAgMTcuMSAzLjY0IDIzLjEgOS41NSAyLjcyIDIuODMgNy4yMyAyLjg4IDEwIDAuMTA2IDIuNzgtMi43OCAyLjczLTcuMjktMC4xMDctMTAtOC40My04LjQzLTIwLjEtMTMuNi0zMy0xMy42em0xMTIgMzguNmMtN2UtNCA1Ljk0IDQuODEgMTAuOCAxMC44IDEwLjggNS45NC0xZS00IDEwLjgtNC44MiAxMC44LTEwLjgtMmUtNCAtNS45NC00LjgyLTEwLjgtMTAuOC0xMC44LTUuOTQgMS43ZS00IC0xMC44IDQuODEtMTAuOCAxMC44em0tMjM2LTM4LjZjLTI1LjEgMC00NS43IDIwLjEtNDYuNSA0NS4xLTAuMjMgMS4wMi0wLjIzIDIuMDcgMCAzLjA5IDAuODM1IDI0LjkgMjEuNCA0NSA0Ni41IDQ1IDEyLjggMCAyNC41LTUuMjIgMzMtMTMuNiAyLjgtMi43MiAyLjgyLTcuMjEgMC4wNjUtOS45Ny0yLjc2LTIuNzYtNy4yNC0yLjczLTkuOTcgMC4wNjUtNS45MSA1LjkxLTE0IDkuNTUtMjMuMSA5LjU1LTE1LjcgMC0yOC42LTEwLjktMzEuOC0yNS42aDcxLjRjMy44Ny00ZS00IDctMy4xMyA3LTcgMC0yNS43LTIwLjktNDYuNi00Ni42LTQ2LjZ6bS0yNDggMC4wNDQ3Yy0xNi41LTAuNDEzLTMyLjggNy45OS00MS42IDIzLjMtMTIuOCAyMi4yLTUuMTYgNTAuOCAxNy4xIDYzLjcgMjIuMiAxMi44IDUwLjggNS4xNiA2My43LTE3LjEgMTIuOC0yMi4yIDUuMTYtNTAuOC0xNy4xLTYzLjctNi45NC00LjAxLTE0LjUtNi4wMi0yMi02LjJ6bTQ4MCAwYy03LjUyIDAuMTg3LTE1LjEgMi4xOS0yMiA2LjItMjIuMiAxMi44LTI5LjkgNDEuNC0xNy4xIDYzLjcgMTIuOCAyMi4yIDQxLjQgMjkuOSA2My43IDE3LjEgMjIuMi0xMi44IDI5LjktNDEuNCAxNy4xLTYzLjctOC44Mi0xNS4zLTI1LjEtMjMuNy00MS42LTIzLjN6bS0yMzIgMTRjMTUuNyAwIDI4LjYgMTAuOSAzMS44IDI1LjZoLTYzLjZjMy4xOS0xNC43IDE2LjEtMjUuNiAzMS44LTI1LjZ6bS0yNTIgMC4wNDM4YzYuMjYtMC40MzQgMTIuNyAwLjkzOSAxOC42IDQuMzMgMTUuNyA5LjA0IDIxIDI4LjkgMTEuOSA0NC41LTkuMDQgMTUuNy0yOC45IDIxLTQ0LjUgMTEuOS0xNS43LTkuMDQtMjEtMjguOS0xMS45LTQ0LjUgNS42NS05Ljc5IDE1LjUtMTUuNSAyNS45LTE2LjN6bTQ4NyAwYzEwLjQgMC43MjUgMjAuMyA2LjQ3IDI1LjkgMTYuMyA5LjA0IDE1LjcgMy43MyAzNS41LTExLjkgNDQuNS0xNS43IDkuMDQtMzUuNSAzLjczLTQ0LjUtMTEuOS05LjA0LTE1LjctMy43My0zNS41IDExLjktNDQuNSA1Ljg3LTMuMzkgMTIuMy00Ljc3IDE4LjYtNC4zM3oiLz4NCgkJPHBhdGggZD0ibTE0NCA5LjY1Yy0xMi4yLTAuMjgxLTI0LjYgMi42Ni0zNS45IDkuMTgtMzIuOSAxOS00NC4yIDYxLjItMjUuMiA5NC4xYTcgNyAwIDAgMCAwLjAxNjYgMC4wM2MxLjI4IDIuMTkgMi42OCA0LjI5IDQuMTkgNi4zMmwtMTYuNSA5LjU1YTcgNyAwIDEgMCA3IDEyLjFsMTI4LTczLjdhNyA3IDAgMCAwIDAuMDg0LTAuMDQ3M2wyMy44LTEzLjdhNyA3IDAgMSAwLTctMTIuMWwtMTYuNSA5LjU1Yy0xLTIuMzItMi4xMi00LjU5LTMuMzgtNi43OWE3IDcgMCAwIDAtMC4wMTctMC4wMzMzYy0xMi40LTIxLjYtMzQuOS0zMy44LTU4LjItMzQuNHptNzUuOSA2NS4yLTEyLjEgN2MxNC45IDI1LjkgNS44NyA1OS0yMC41IDc0LjItMjYuMyAxNS4yLTU5LjUgNi40OS03NC40LTE5LjRsLTEyLjEgN2MxOC44IDMyLjUgNjAuOCA0My40IDkzLjYgMjQuNSAzMi44LTE4LjkgNDQuMy02MC44IDI1LjYtOTMuM3ptLTI5IDE4LjNhMTAuOCAxMC44IDAgMCAwLTUuMTIgMS40NCAxMC44IDEwLjggMCAwIDAtMy45MyAxNC43IDEwLjggMTAuOCAwIDAgMCAxNC43IDMuOTQgMTAuOCAxMC44IDAgMCAwIDMuOTQtMTQuNyAxMC44IDEwLjggMCAwIDAtOS41Ny01LjM3eiIvPg0KCTwvZz4NCjwvc3ZnPg0K"},iIfD:function(t,e,M){t.exports=M.p+"static/service-84a410c2b9fb97bf4e3efb752f423602.jpg"},jN53:function(t,e,M){t.exports=M.p+"static/engineer-50cea208a8e48d97c312563e62265cc1.jpg"},u8W6:function(t,e,M){t.exports=M.p+"static/consultant-f19f5e7be5bd53cca0aa810d87015699.jpg"}}]);
//# sourceMappingURL=component---src-pages-service-js-159048c4a3ca63816797.js.map