(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+nw6":function(e,t,n){e.exports=n.p+"static/travel2020-78ee6d7cdfae7dfed8159d458d79e684.jpg"},"/pVW":function(e,t,n){e.exports=n.p+"static/vuls-logo-large-4f25ed997a36c1a3a64c832834d583ec.png"},"0Wn5":function(e,t,n){"use strict";var M=n("q1tI"),a=n.n(M),u=n("dTeP"),c=n.n(u),L=n("Wbzz");t.a=function(e){return a.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+e.image+")"}},a.a.createElement("div",{className:"inner"},a.a.createElement(L.Link,{to:"/"},a.a.createElement("img",{src:c.a,alt:"omeroid",to:"/"})),a.a.createElement("div",{className:"content"},a.a.createElement("p",null,e.content))))}},"3MWX":function(e,t,n){"use strict";var M=n("q1tI"),a=n.n(M),u=n("Wbzz");function c(e){var t=e.to,n=e.className,M=e.children;return t?a.a.createElement(u.Link,{to:t,className:n},M):a.a.createElement("div",{className:n},M)}function L(e){var t=e.image,n=e.imageAlt;return t?a.a.createElement(c,{to:e.to,className:"image fit"},a.a.createElement("img",{src:t,alt:n})):a.a.createElement("div",null)}t.a=function(e){return a.a.createElement("section",null,a.a.createElement(L,{image:e.image,to:e.to}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"inner"},a.a.createElement("header",{className:"major"},a.a.createElement("h3",null,e.title)),a.a.createElement("p",null,e.content),e.children,e.to&&a.a.createElement("ul",{className:"actions"},a.a.createElement("li",null,a.a.createElement(u.Link,{to:e.to,className:"button"},"詳細を見る"))))))}},A1DE:function(e,t,n){"use strict";var M=n("q1tI"),a=n.n(M);function u(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function c(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:u(t[n])&&u(e[n])&&Object.keys(t[n]).length>0&&c(e[n],t[n])}))}var L={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};c("undefined"!=typeof document?document:{},L);var i="undefined"!=typeof window?window:{};c(i,{document:L,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var l=n("3MWX");function j(e){var t=e.children;return e.show?a.a.createElement("div",null,t):a.a.createElement("div",null)}function r(e){var t=e.number,n=e.current;return a.a.createElement("li",null,a.a.createElement("a",{href:"?page="+t,className:t==n?"page active":"page"},t))}t.a=function(e){var t=function(){var e=i.location.search.substring(1),t={};return e.split("&").forEach((function(e){var n,M=e.split("=");t=Object.assign({},t,((n={})[M[0]]=M[1],n))})),t}(),n=parseInt(t.page)||1,M=function(e,t){console.log("array",e),console.log("number",t);var n=Math.ceil(e.length/t);return new Array(n).fill().map((function(n,M){return e.slice(M*t,(M+1)*t)}))}(e.items,10),u=M.length,c=M[(n=n>u?1:n)-1];return a.a.createElement("section",{id:"two",className:"spotlights"},c.map((function(t){return a.a.createElement(l.a,{image:t.image,imageAlt:t.imageAlt,to:t.to,title:t.title,content:t.content},e.children)})),a.a.createElement(j,{show:u>1},a.a.createElement("div",{className:"pagination-wrap"},a.a.createElement("ul",{className:"pagination"},a.a.createElement("li",null,a.a.createElement("span",{className:"button small "+(1==n?"disabled":"")},"Prev")),M.map((function(e,t){return a.a.createElement(r,{number:t+1,current:n})})),a.a.createElement("li",null,a.a.createElement("a",{href:"?page="+(n+1),className:"button small "+(n==u?"disabled":"")},"Next"))))))}},F3dw:function(e,t,n){e.exports=n.p+"static/news-f14fd41e129a6ca260aef3e2707d9278.jpg"},FJi0:function(e,t,n){"use strict";n.r(t);var M=n("q1tI"),a=n.n(M),u=(n("Wbzz"),n("TJpk")),c=n.n(u),L=n("Bl7J"),i=n("0Wn5"),l=n("A1DE"),j=n("F3dw"),r=n.n(j),g=(n("IGeV"),n("PyUb"),n("aXTj"),n("heOc")),N=n.n(g),T=n("/pVW"),I=n.n(T),o=n("+nw6"),A=n.n(o),y=n("fP1Q"),m=n.n(y),E=n("jPEV"),D=n.n(E),s=n("Lhib"),C=[{image:n.n(s).a,imageAlt:"シェアダイン株式会社のコードリニューアル支援インタビュー掲載",to:"https://note.com/sharedine/n/n56f6934334ad",title:[a.a.createElement("small",null,"2021/05"),a.a.createElement("br",null),"[エンジニアリング]シェアダイン株式会社のコードリニューアル支援インタビュー掲載"],content:["弊社代表松野がシェアダイン株式会社でのコードリニューアル支援のインタビューを受けました",a.a.createElement("br",null),"omeroid株式会社としてどのような思いでコードリニューアルのレビューワーをしているのかという思いが語られています",a.a.createElement("br",null)]},{image:D.a,imageAlt:"「リモート化でのOJTを助ける進捗報告ツールdac」をリリースしました",to:"https://www.dac-work.com",title:[a.a.createElement("small",null,"2021/01"),a.a.createElement("br",null),"[プロダクト]「進捗報告ツールdac」をリリースしました"],content:["リモート化でのOJTを助ける進捗報告サービスを提供",a.a.createElement("br",null),"リモートで部下の状況がつかめてない、上司に報告がうまくいっていないという状況におすすめです。",a.a.createElement("br",null)]},{image:m.a,imageAlt:"新規事業への取り組みを始めました",to:"https://note.com/omeroid/n/n0e0cb1249d0e",title:[a.a.createElement("small",null,"2020/11"),a.a.createElement("br",null),"[ブログ]新規事業への取り組み"],content:["メンバーからアイデアを募り、仮説検証スプリントを回して、新規事業を創造するプログラムをはじました",a.a.createElement("br",null)]},{image:A.a,imageAlt:"社員旅行2020",to:"https://note.com/omeroid/n/nf7d1e62fc1b2",title:[a.a.createElement("small",null,"2020/10"),a.a.createElement("br",null),"[ブログ]社員旅行2020"],content:["メンバー8名で社員旅行に行ったきた様子をお届けします",a.a.createElement("br",null)]},{image:N.a,imageAlt:"ラベルプリント",to:"https://www.gen-ome.io/label/",title:[a.a.createElement("small",null,"2019/12/10"),a.a.createElement("br",null),"[プロダクト]ラベルプリントシステムをリリースしました"],content:["市販のAndroid端末とラベルプリンタを使用してラベルプリントを行えるサービスを提供",a.a.createElement("br",null),"データはエクセルで記述して登録できるので、お手軽に、複雑な知識も必要ありません。",a.a.createElement("br",null),"ラベルのテンプレートも作成できるため、ご自身で好きなようにラベルを作成できます。"]},{image:I.a,imageAlt:"vlus",to:null,title:[a.a.createElement("small",null,"2019/02/01"),a.a.createElement("br",null),"[メンバー]CEO松野がVlusのコミッターに登録"],content:["弊社CEOの松野貞之がOSS脆弱性検知ツールのVulsのメインコミッターの一員となりました",a.a.createElement("br",null),"コミッターとは、特定のリポジトリに対して、Write権限(Push権限)を持つことを意味しています",a.a.createElement("br",null),"VulsはFuture株式会社の神戸康多氏が開発公開したOSSであり、Golangで書かれた脆弱性検知ツールです",a.a.createElement("br",null),"現在のGithubスター数は6000を超え、国産OSSソフトウェアでは最大級のリポジトリとなっています",a.a.createElement("br",null)]}];t.default=function(e){return a.a.createElement(L.a,null,a.a.createElement(c.a,null,a.a.createElement("title",null,"News"),a.a.createElement("meta",{name:"description",content:"News Page"})),a.a.createElement(i.a,{title:"News",content:"会社やメンバーに関わる最新ニュースをお届けします",image:r.a}),a.a.createElement("div",{id:"main"},a.a.createElement(l.a,{items:C})))}},IGeV:function(e,t,n){e.exports=n.p+"static/pic08-4c3ce95d53bcf4f4e5c3079df9c3e543.jpg"},Lhib:function(e,t,n){e.exports=n.p+"static/sharedine-7e48339d893d974416fe181c843b8763.png"},PyUb:function(e,t,n){e.exports=n.p+"static/pic09-d59e4b49832baeb9c62a7a9d6c070f8c.jpg"},aXTj:function(e,t,n){e.exports=n.p+"static/pic10-fc2217a3259dbe4bf90380771114f39c.jpg"},dTeP:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMTIzIDE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQoJPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+DQoJCTxwYXRoIGQ9Im00MzMgNjBjLTE1LjggMC0yOC44IDEzLTI4LjggMjguOHY1Ny40Yy0wLjA4MyAzLjkyIDMuMDggNy4xNSA3IDcuMTUgMy45MyAwIDcuMDgtMy4yMyA3LTcuMTV2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjggOC4yNSAwIDE0LjggNi41NCAxNC44IDE0Ljh2NTcuNGMtMC4wNTggMy45MSAzLjA5IDcuMTEgNyA3LjExIDMuOTEgMCA3LjA2LTMuMiA3LTcuMTF2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjhzMTQuOCA2LjU0IDE0LjggMTQuOHY1Ny40Yy0wLjA1MyAzLjkgMy4xIDcuMSA3IDcuMSAzLjkgMCA3LjA2LTMuMTkgNy03LjF2LTU3LjRjMC0xNS44LTEzLTI4LjgtMjguOC0yOC44LTguNzMgMC0xNi41IDQuMDQtMjEuOCAxMC4yLTUuMy02LjItMTMuMS0xMC4yLTIxLjgtMTAuMnptNDc5LTM3LjRjLTE1LjcgMC0yOC41IDEyLjgtMjguNSAyOC41IDAgMTUuNyAxMi44IDI4LjUgMjguNSAyOC41czI4LjUtMTIuOCAyOC41LTI4LjVjMC0xNS43LTEyLjgtMjguNS0yOC41LTI4LjV6bTAgMTRjOC4xIDAgMTQuNSA2LjQxIDE0LjUgMTQuNSAwIDguMS02LjQxIDE0LjUtMTQuNSAxNC41cy0xNC41LTYuNDEtMTQuNS0xNC41YzAtOC4wOSA2LjQxLTE0LjUgMTQuNS0xNC41em0tMC4xMDUgNTFjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjUxLjdjLTAuMDU5IDMuOTEgMy4wOSA3LjExIDcgNy4xMSAzLjkxIDAgNy4wNi0zLjIgNy03LjExdi01MS43YzAuMDU2LTMuOTUtMy4xNi03LjE2LTcuMTEtNy4xem0xMzYtNjVjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjQzLjdjLTguNDItOC4yNy0xOS45LTEzLjQtMzIuNi0xMy40LTI1LjcgMC00Ni42IDIwLjktNDYuNiA0Ni42IDAgMjUuNyAyMC45IDQ2LjYgNDYuNiA0Ni42IDEyLjcgMCAyNC4yLTUuMTUgMzIuNi0xMy40djYuNDljLTAuMDYgMy45MSAzLjA5IDcuMTIgNyA3LjEyczcuMDYtMy4yIDctNy4xMnYtMTE3YzAuMDYtMy45NS0zLjE2LTcuMTYtNy4xMS03LjF6bS0zOS41IDUxLjRjMTguMSAwIDMyLjYgMTQuNSAzMi42IDMyLjYgMCAxOC4xLTE0LjUgMzIuNi0zMi42IDMyLjYtMTguMSA5ZS00IC0zMi42LTE0LjUtMzIuNi0zMi42IDAtMTguMSAxNC41LTMyLjYgMzIuNi0zMi42em0tMzAwLTE0Yy0yNS43IDAtNDYuNiAyMC45LTQ2LjYgNDYuNnYzOS42Yy0wLjA1NyAzLjkxIDMuMDkgNy4xIDcgNy4xIDMuOTEgMCA3LjA2LTMuMiA3LTcuMXYtMzkuNmMwLTE4LjEgMTQuNS0zMi42IDMyLjYtMzIuNiA5LjA0IDAgMTcuMSAzLjY0IDIzLjEgOS41NSAyLjcyIDIuODMgNy4yMyAyLjg4IDEwIDAuMTA2IDIuNzgtMi43OCAyLjczLTcuMjktMC4xMDctMTAtOC40My04LjQzLTIwLjEtMTMuNi0zMy0xMy42em0xMTIgMzguNmMtN2UtNCA1Ljk0IDQuODEgMTAuOCAxMC44IDEwLjggNS45NC0xZS00IDEwLjgtNC44MiAxMC44LTEwLjgtMmUtNCAtNS45NC00LjgyLTEwLjgtMTAuOC0xMC44LTUuOTQgMS43ZS00IC0xMC44IDQuODEtMTAuOCAxMC44em0tMjM2LTM4LjZjLTI1LjEgMC00NS43IDIwLjEtNDYuNSA0NS4xLTAuMjMgMS4wMi0wLjIzIDIuMDcgMCAzLjA5IDAuODM1IDI0LjkgMjEuNCA0NSA0Ni41IDQ1IDEyLjggMCAyNC41LTUuMjIgMzMtMTMuNiAyLjgtMi43MiAyLjgyLTcuMjEgMC4wNjUtOS45Ny0yLjc2LTIuNzYtNy4yNC0yLjczLTkuOTcgMC4wNjUtNS45MSA1LjkxLTE0IDkuNTUtMjMuMSA5LjU1LTE1LjcgMC0yOC42LTEwLjktMzEuOC0yNS42aDcxLjRjMy44Ny00ZS00IDctMy4xMyA3LTcgMC0yNS43LTIwLjktNDYuNi00Ni42LTQ2LjZ6bS0yNDggMC4wNDQ3Yy0xNi41LTAuNDEzLTMyLjggNy45OS00MS42IDIzLjMtMTIuOCAyMi4yLTUuMTYgNTAuOCAxNy4xIDYzLjcgMjIuMiAxMi44IDUwLjggNS4xNiA2My43LTE3LjEgMTIuOC0yMi4yIDUuMTYtNTAuOC0xNy4xLTYzLjctNi45NC00LjAxLTE0LjUtNi4wMi0yMi02LjJ6bTQ4MCAwYy03LjUyIDAuMTg3LTE1LjEgMi4xOS0yMiA2LjItMjIuMiAxMi44LTI5LjkgNDEuNC0xNy4xIDYzLjcgMTIuOCAyMi4yIDQxLjQgMjkuOSA2My43IDE3LjEgMjIuMi0xMi44IDI5LjktNDEuNCAxNy4xLTYzLjctOC44Mi0xNS4zLTI1LjEtMjMuNy00MS42LTIzLjN6bS0yMzIgMTRjMTUuNyAwIDI4LjYgMTAuOSAzMS44IDI1LjZoLTYzLjZjMy4xOS0xNC43IDE2LjEtMjUuNiAzMS44LTI1LjZ6bS0yNTIgMC4wNDM4YzYuMjYtMC40MzQgMTIuNyAwLjkzOSAxOC42IDQuMzMgMTUuNyA5LjA0IDIxIDI4LjkgMTEuOSA0NC41LTkuMDQgMTUuNy0yOC45IDIxLTQ0LjUgMTEuOS0xNS43LTkuMDQtMjEtMjguOS0xMS45LTQ0LjUgNS42NS05Ljc5IDE1LjUtMTUuNSAyNS45LTE2LjN6bTQ4NyAwYzEwLjQgMC43MjUgMjAuMyA2LjQ3IDI1LjkgMTYuMyA5LjA0IDE1LjcgMy43MyAzNS41LTExLjkgNDQuNS0xNS43IDkuMDQtMzUuNSAzLjczLTQ0LjUtMTEuOS05LjA0LTE1LjctMy43My0zNS41IDExLjktNDQuNSA1Ljg3LTMuMzkgMTIuMy00Ljc3IDE4LjYtNC4zM3oiLz4NCgkJPHBhdGggZD0ibTE0NCA5LjY1Yy0xMi4yLTAuMjgxLTI0LjYgMi42Ni0zNS45IDkuMTgtMzIuOSAxOS00NC4yIDYxLjItMjUuMiA5NC4xYTcgNyAwIDAgMCAwLjAxNjYgMC4wM2MxLjI4IDIuMTkgMi42OCA0LjI5IDQuMTkgNi4zMmwtMTYuNSA5LjU1YTcgNyAwIDEgMCA3IDEyLjFsMTI4LTczLjdhNyA3IDAgMCAwIDAuMDg0LTAuMDQ3M2wyMy44LTEzLjdhNyA3IDAgMSAwLTctMTIuMWwtMTYuNSA5LjU1Yy0xLTIuMzItMi4xMi00LjU5LTMuMzgtNi43OWE3IDcgMCAwIDAtMC4wMTctMC4wMzMzYy0xMi40LTIxLjYtMzQuOS0zMy44LTU4LjItMzQuNHptNzUuOSA2NS4yLTEyLjEgN2MxNC45IDI1LjkgNS44NyA1OS0yMC41IDc0LjItMjYuMyAxNS4yLTU5LjUgNi40OS03NC40LTE5LjRsLTEyLjEgN2MxOC44IDMyLjUgNjAuOCA0My40IDkzLjYgMjQuNSAzMi44LTE4LjkgNDQuMy02MC44IDI1LjYtOTMuM3ptLTI5IDE4LjNhMTAuOCAxMC44IDAgMCAwLTUuMTIgMS40NCAxMC44IDEwLjggMCAwIDAtMy45MyAxNC43IDEwLjggMTAuOCAwIDAgMCAxNC43IDMuOTQgMTAuOCAxMC44IDAgMCAwIDMuOTQtMTQuNyAxMC44IDEwLjggMCAwIDAtOS41Ny01LjM3eiIvPg0KCTwvZz4NCjwvc3ZnPg0K"},fP1Q:function(e,t,n){e.exports=n.p+"static/new-bisiness-0be52640d13e07728bff8e20fbb7cc80.png"},heOc:function(e,t,n){e.exports=n.p+"static/label-main-dc6a8a17e1b331f0d854abfb4057b5e5.png"},jPEV:function(e,t,n){e.exports=n.p+"static/dac-1b5cef3857ac7a2c8443ae97face7251.png"}}]);
//# sourceMappingURL=component---src-pages-news-js-12420469b10d1b4e23ae.js.map