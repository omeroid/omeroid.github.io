(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0Wn5":function(e,t,M){"use strict";var n=M("q1tI"),u=M.n(n),a=M("dTeP"),L=M.n(a),c=M("Wbzz");t.a=function(e){return u.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+e.image+")"}},u.a.createElement("div",{className:"inner"},u.a.createElement(c.Link,{to:"/"},u.a.createElement("img",{src:L.a,alt:"omeroid",to:"/"})),u.a.createElement("div",{className:"content"},u.a.createElement("p",null,e.content))))}},"3MWX":function(e,t,M){"use strict";var n=M("q1tI"),u=M.n(n),a=M("Wbzz");function L(e){var t=e.to,M=e.className,n=e.children;return t?u.a.createElement(a.Link,{to:t,className:M},n):u.a.createElement("div",{className:M},n)}function c(e){console.log("props",e);var t=e.image,M=e.imageAlt;return t?u.a.createElement(L,{to:e.to,className:"image fit"},u.a.createElement("img",{src:t,alt:M})):u.a.createElement("div",null)}t.a=function(e){return u.a.createElement("section",{key:e.key},u.a.createElement(c,{image:e.image,to:e.to}),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"inner"},u.a.createElement("header",{className:"major"},u.a.createElement("h3",null,e.title)),u.a.createElement("p",null,e.content),e.children,e.to&&u.a.createElement("ul",{className:"actions"},u.a.createElement("li",null,u.a.createElement(a.Link,{to:e.to,className:"button"},"詳細を見る"))))))}},A1DE:function(e,t,M){"use strict";var n=M("q1tI"),u=M.n(n);function a(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function L(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(M){void 0===e[M]?e[M]=t[M]:a(t[M])&&a(e[M])&&Object.keys(t[M]).length>0&&L(e[M],t[M])}))}var c={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};L("undefined"!=typeof document?document:{},c);var i="undefined"!=typeof window?window:{};L(i,{document:c,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var j=M("3MWX");function g(e){var t=e.children;return e.show?u.a.createElement("div",null,t):u.a.createElement("div",null)}function N(e){var t=e.number,M=e.current;return u.a.createElement("li",null,u.a.createElement("a",{href:"?page="+t,className:t==M?"page active":"page"},t))}t.a=function(e){var t=function(){var e=i.location.search.substring(1),t={};return e.split("&").forEach((function(e){var M,n=e.split("=");t=Object.assign({},t,((M={})[n[0]]=n[1],M))})),t}();console.log("params",t);var M=parseInt(t.page)||1,n=function(e,t){if(!t)return[e];var M=Math.ceil(e.length/t);return new Array(M).fill().map((function(M,n){return e.slice(n*t,(n+1)*t)}))}(e.items,e.pageSize),a=n.length,L=n[(M=M>a?1:M)-1];return console.log("currentBlock",L),u.a.createElement("section",{id:"two",className:"spotlights"},L.map((function(t){return u.a.createElement(j.a,{key:t.title,image:t.image,imageAlt:t.imageAlt,to:t.to,title:t.title,content:t.content},e.children)})),u.a.createElement(g,{show:a>1},u.a.createElement("div",{className:"pagination-wrap"},u.a.createElement("ul",{className:"pagination"},u.a.createElement("li",null,u.a.createElement("a",{href:"?page="+(M-1),className:"button small "+(1==M?"disabled":"")},"Prev")),n.map((function(e,t){return u.a.createElement(N,{number:t+1,current:M})})),u.a.createElement("li",null,u.a.createElement("a",{href:"?page="+(M+1),className:"button small "+(M==a?"disabled":"")},"Next"))))))}},Ljax:function(e,t,M){"use strict";M.r(t);var n=M("q1tI"),u=M.n(n),a=(M("Wbzz"),M("TJpk")),L=M.n(a),c=M("Bl7J"),i=M("0Wn5"),j=M("A1DE"),g=M("iIfD"),N=M.n(g),r=M("heOc"),I=M.n(r),T=M("jPEV"),o=M.n(T),A=M("VXHB"),l=M.n(A),y=M("VApd"),D=M.n(y),E=[{image:o.a,imageAlt:"リモート化でのOJTを助ける進捗報告ツールdac",to:"https://www.dac-work.com/",title:"リモート化でのOJTを助ける進捗報告ツールdac",content:["リモート化でのOJTを助ける進捗報告サービスを提供",u.a.createElement("br",null),"リモートで部下の状況がつかめてない、上司に報告がうまくいっていないという状況におすすめです。",u.a.createElement("br",null)]},{image:I.a,imageAlt:"ラベルプリントシステム",to:"https://www.gen-ome.io/label/",title:"ラベルプリントシステム",content:["市販のAndroid端末とラベルプリンタを使用してラベルプリントを行えるサービスを提供",u.a.createElement("br",null),"データはエクセルで記述して登録できるので、お手軽に、複雑な知識も必要ありません。",u.a.createElement("br",null),"ラベルのテンプレートも作成できるため、ご自身で好きなようにラベルを作成できます。"]},{image:D.a,imageAlt:"Shopify",to:"https://omeroid-shopify.studio.site/",title:"自社商品専用ECサイトの構築支援",content:["Shopifyを利用した自社商品専用ECサイトの構築を支援"]},{image:l.a,imageAlt:"PokerReview",to:"https://omeroid-poker-review.studio.site/",title:"PokerReview(開発中)",content:["ポーカーのハンドをみんなで共有しよう",u.a.createElement("br",null),"ポーカーハンド共有アプリ"]}];t.default=function(e){return u.a.createElement(c.a,null,u.a.createElement(L.a,null,u.a.createElement("title",null,"Service"),u.a.createElement("meta",{name:"description",content:"Service Page"})),u.a.createElement(i.a,{title:"Product",content:"omeroidの自社プロダクトを紹介します",image:N.a}),u.a.createElement("div",{id:"main"},u.a.createElement(j.a,{items:E})))}},VApd:function(e,t,M){e.exports=M.p+"static/shopify-62ecbba52c3a5b9ac19aa171cd26f9fe.png"},VXHB:function(e,t,M){e.exports=M.p+"static/poker-review-696d108d5a3502c7b01f5de82932b69e.jpg"},dTeP:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMTIzIDE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQoJPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+DQoJCTxwYXRoIGQ9Im00MzMgNjBjLTE1LjggMC0yOC44IDEzLTI4LjggMjguOHY1Ny40Yy0wLjA4MyAzLjkyIDMuMDggNy4xNSA3IDcuMTUgMy45MyAwIDcuMDgtMy4yMyA3LTcuMTV2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjggOC4yNSAwIDE0LjggNi41NCAxNC44IDE0Ljh2NTcuNGMtMC4wNTggMy45MSAzLjA5IDcuMTEgNyA3LjExIDMuOTEgMCA3LjA2LTMuMiA3LTcuMTF2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjhzMTQuOCA2LjU0IDE0LjggMTQuOHY1Ny40Yy0wLjA1MyAzLjkgMy4xIDcuMSA3IDcuMSAzLjkgMCA3LjA2LTMuMTkgNy03LjF2LTU3LjRjMC0xNS44LTEzLTI4LjgtMjguOC0yOC44LTguNzMgMC0xNi41IDQuMDQtMjEuOCAxMC4yLTUuMy02LjItMTMuMS0xMC4yLTIxLjgtMTAuMnptNDc5LTM3LjRjLTE1LjcgMC0yOC41IDEyLjgtMjguNSAyOC41IDAgMTUuNyAxMi44IDI4LjUgMjguNSAyOC41czI4LjUtMTIuOCAyOC41LTI4LjVjMC0xNS43LTEyLjgtMjguNS0yOC41LTI4LjV6bTAgMTRjOC4xIDAgMTQuNSA2LjQxIDE0LjUgMTQuNSAwIDguMS02LjQxIDE0LjUtMTQuNSAxNC41cy0xNC41LTYuNDEtMTQuNS0xNC41YzAtOC4wOSA2LjQxLTE0LjUgMTQuNS0xNC41em0tMC4xMDUgNTFjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjUxLjdjLTAuMDU5IDMuOTEgMy4wOSA3LjExIDcgNy4xMSAzLjkxIDAgNy4wNi0zLjIgNy03LjExdi01MS43YzAuMDU2LTMuOTUtMy4xNi03LjE2LTcuMTEtNy4xem0xMzYtNjVjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjQzLjdjLTguNDItOC4yNy0xOS45LTEzLjQtMzIuNi0xMy40LTI1LjcgMC00Ni42IDIwLjktNDYuNiA0Ni42IDAgMjUuNyAyMC45IDQ2LjYgNDYuNiA0Ni42IDEyLjcgMCAyNC4yLTUuMTUgMzIuNi0xMy40djYuNDljLTAuMDYgMy45MSAzLjA5IDcuMTIgNyA3LjEyczcuMDYtMy4yIDctNy4xMnYtMTE3YzAuMDYtMy45NS0zLjE2LTcuMTYtNy4xMS03LjF6bS0zOS41IDUxLjRjMTguMSAwIDMyLjYgMTQuNSAzMi42IDMyLjYgMCAxOC4xLTE0LjUgMzIuNi0zMi42IDMyLjYtMTguMSA5ZS00IC0zMi42LTE0LjUtMzIuNi0zMi42IDAtMTguMSAxNC41LTMyLjYgMzIuNi0zMi42em0tMzAwLTE0Yy0yNS43IDAtNDYuNiAyMC45LTQ2LjYgNDYuNnYzOS42Yy0wLjA1NyAzLjkxIDMuMDkgNy4xIDcgNy4xIDMuOTEgMCA3LjA2LTMuMiA3LTcuMXYtMzkuNmMwLTE4LjEgMTQuNS0zMi42IDMyLjYtMzIuNiA5LjA0IDAgMTcuMSAzLjY0IDIzLjEgOS41NSAyLjcyIDIuODMgNy4yMyAyLjg4IDEwIDAuMTA2IDIuNzgtMi43OCAyLjczLTcuMjktMC4xMDctMTAtOC40My04LjQzLTIwLjEtMTMuNi0zMy0xMy42em0xMTIgMzguNmMtN2UtNCA1Ljk0IDQuODEgMTAuOCAxMC44IDEwLjggNS45NC0xZS00IDEwLjgtNC44MiAxMC44LTEwLjgtMmUtNCAtNS45NC00LjgyLTEwLjgtMTAuOC0xMC44LTUuOTQgMS43ZS00IC0xMC44IDQuODEtMTAuOCAxMC44em0tMjM2LTM4LjZjLTI1LjEgMC00NS43IDIwLjEtNDYuNSA0NS4xLTAuMjMgMS4wMi0wLjIzIDIuMDcgMCAzLjA5IDAuODM1IDI0LjkgMjEuNCA0NSA0Ni41IDQ1IDEyLjggMCAyNC41LTUuMjIgMzMtMTMuNiAyLjgtMi43MiAyLjgyLTcuMjEgMC4wNjUtOS45Ny0yLjc2LTIuNzYtNy4yNC0yLjczLTkuOTcgMC4wNjUtNS45MSA1LjkxLTE0IDkuNTUtMjMuMSA5LjU1LTE1LjcgMC0yOC42LTEwLjktMzEuOC0yNS42aDcxLjRjMy44Ny00ZS00IDctMy4xMyA3LTcgMC0yNS43LTIwLjktNDYuNi00Ni42LTQ2LjZ6bS0yNDggMC4wNDQ3Yy0xNi41LTAuNDEzLTMyLjggNy45OS00MS42IDIzLjMtMTIuOCAyMi4yLTUuMTYgNTAuOCAxNy4xIDYzLjcgMjIuMiAxMi44IDUwLjggNS4xNiA2My43LTE3LjEgMTIuOC0yMi4yIDUuMTYtNTAuOC0xNy4xLTYzLjctNi45NC00LjAxLTE0LjUtNi4wMi0yMi02LjJ6bTQ4MCAwYy03LjUyIDAuMTg3LTE1LjEgMi4xOS0yMiA2LjItMjIuMiAxMi44LTI5LjkgNDEuNC0xNy4xIDYzLjcgMTIuOCAyMi4yIDQxLjQgMjkuOSA2My43IDE3LjEgMjIuMi0xMi44IDI5LjktNDEuNCAxNy4xLTYzLjctOC44Mi0xNS4zLTI1LjEtMjMuNy00MS42LTIzLjN6bS0yMzIgMTRjMTUuNyAwIDI4LjYgMTAuOSAzMS44IDI1LjZoLTYzLjZjMy4xOS0xNC43IDE2LjEtMjUuNiAzMS44LTI1LjZ6bS0yNTIgMC4wNDM4YzYuMjYtMC40MzQgMTIuNyAwLjkzOSAxOC42IDQuMzMgMTUuNyA5LjA0IDIxIDI4LjkgMTEuOSA0NC41LTkuMDQgMTUuNy0yOC45IDIxLTQ0LjUgMTEuOS0xNS43LTkuMDQtMjEtMjguOS0xMS45LTQ0LjUgNS42NS05Ljc5IDE1LjUtMTUuNSAyNS45LTE2LjN6bTQ4NyAwYzEwLjQgMC43MjUgMjAuMyA2LjQ3IDI1LjkgMTYuMyA5LjA0IDE1LjcgMy43MyAzNS41LTExLjkgNDQuNS0xNS43IDkuMDQtMzUuNSAzLjczLTQ0LjUtMTEuOS05LjA0LTE1LjctMy43My0zNS41IDExLjktNDQuNSA1Ljg3LTMuMzkgMTIuMy00Ljc3IDE4LjYtNC4zM3oiLz4NCgkJPHBhdGggZD0ibTE0NCA5LjY1Yy0xMi4yLTAuMjgxLTI0LjYgMi42Ni0zNS45IDkuMTgtMzIuOSAxOS00NC4yIDYxLjItMjUuMiA5NC4xYTcgNyAwIDAgMCAwLjAxNjYgMC4wM2MxLjI4IDIuMTkgMi42OCA0LjI5IDQuMTkgNi4zMmwtMTYuNSA5LjU1YTcgNyAwIDEgMCA3IDEyLjFsMTI4LTczLjdhNyA3IDAgMCAwIDAuMDg0LTAuMDQ3M2wyMy44LTEzLjdhNyA3IDAgMSAwLTctMTIuMWwtMTYuNSA5LjU1Yy0xLTIuMzItMi4xMi00LjU5LTMuMzgtNi43OWE3IDcgMCAwIDAtMC4wMTctMC4wMzMzYy0xMi40LTIxLjYtMzQuOS0zMy44LTU4LjItMzQuNHptNzUuOSA2NS4yLTEyLjEgN2MxNC45IDI1LjkgNS44NyA1OS0yMC41IDc0LjItMjYuMyAxNS4yLTU5LjUgNi40OS03NC40LTE5LjRsLTEyLjEgN2MxOC44IDMyLjUgNjAuOCA0My40IDkzLjYgMjQuNSAzMi44LTE4LjkgNDQuMy02MC44IDI1LjYtOTMuM3ptLTI5IDE4LjNhMTAuOCAxMC44IDAgMCAwLTUuMTIgMS40NCAxMC44IDEwLjggMCAwIDAtMy45MyAxNC43IDEwLjggMTAuOCAwIDAgMCAxNC43IDMuOTQgMTAuOCAxMC44IDAgMCAwIDMuOTQtMTQuNyAxMC44IDEwLjggMCAwIDAtOS41Ny01LjM3eiIvPg0KCTwvZz4NCjwvc3ZnPg0K"},heOc:function(e,t,M){e.exports=M.p+"static/label-main-dc6a8a17e1b331f0d854abfb4057b5e5.png"},iIfD:function(e,t,M){e.exports=M.p+"static/service-84a410c2b9fb97bf4e3efb752f423602.jpg"},jPEV:function(e,t,M){e.exports=M.p+"static/dac-1b5cef3857ac7a2c8443ae97face7251.png"}}]);
//# sourceMappingURL=component---src-pages-service-product-js-881ff3bb7afac43fbf78.js.map