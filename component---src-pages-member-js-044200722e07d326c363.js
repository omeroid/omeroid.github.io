(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0/00":function(e,t,n){e.exports=n.p+"static/member-ac702de278174bf0a2fc9bc97f4660fe.png"},"0Wn5":function(e,t,n){"use strict";var a=n("q1tI"),M=n.n(a),u=n("dTeP"),c=n.n(u),i=n("Wbzz");t.a=function(e){return M.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+e.image+")"}},M.a.createElement("div",{className:"inner"},M.a.createElement(i.Link,{to:"/"},M.a.createElement("img",{src:c.a,alt:"omeroid",to:"/"})),M.a.createElement("div",{className:"content"},M.a.createElement("p",null,e.content))))}},"3MWX":function(e,t,n){"use strict";var a=n("q1tI"),M=n.n(a),u=n("Wbzz");function c(e){var t=e.to,n=e.className,a=e.children;return t?M.a.createElement(u.Link,{to:t,className:n},a):M.a.createElement("div",{className:n},a)}function i(e){var t=e.image,n=e.imageAlt;return t?M.a.createElement(c,{to:e.to,className:"image fit"},M.a.createElement("img",{src:t,alt:n})):M.a.createElement("div",null)}t.a=function(e){return M.a.createElement("section",{key:e.key},M.a.createElement(i,{image:e.image,to:e.to}),M.a.createElement("div",{className:"content"},M.a.createElement("div",{className:"inner"},M.a.createElement("header",{className:"major"},M.a.createElement("h3",null,e.title)),M.a.createElement("p",null,e.content),e.children,e.to&&M.a.createElement("ul",{className:"actions"},M.a.createElement("li",null,M.a.createElement(u.Link,{to:e.to,className:"button"},"詳細を見る"))))))}},A1DE:function(e,t,n){"use strict";var a=n("q1tI"),M=n.n(a);function u(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function c(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:u(t[n])&&u(e[n])&&Object.keys(t[n]).length>0&&c(e[n],t[n])}))}var i={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};c("undefined"!=typeof document?document:{},i);var l="undefined"!=typeof window?window:{};c(l,{document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var L=n("3MWX");function g(e){var t=e.children;return e.show?M.a.createElement("div",null,t):M.a.createElement("div",null)}function r(e){var t=e.number,n=e.current;return M.a.createElement("li",null,M.a.createElement("a",{href:"?page="+t,className:t==n?"page active":"page"},t))}t.a=function(e){var t=function(){var e=l.location.search.substring(1),t={};return e.split("&").forEach((function(e){var n,a=e.split("=");t=Object.assign({},t,((n={})[a[0]]=a[1],n))})),t}(),n=parseInt(t.page)||1,a=function(e,t){if(!t)return[e];var n=Math.ceil(e.length/t);return new Array(n).fill().map((function(n,a){return e.slice(a*t,(a+1)*t)}))}(e.items,e.pageSize),u=a.length,c=a[(n=n>u?1:n)-1];return console.log("currentBlock",c),M.a.createElement("section",{id:"two",className:"spotlights"},c.map((function(t){return M.a.createElement(L.a,{key:t.title,image:t.image,imageAlt:t.imageAlt,to:t.to,title:t.title,content:t.content},e.children)})),M.a.createElement(g,{show:u>1},M.a.createElement("div",{className:"pagination-wrap"},M.a.createElement("ul",{className:"pagination"},M.a.createElement("li",null,M.a.createElement("a",{href:"?page="+(n-1),className:"button small "+(1==n?"disabled":"")},"Prev")),a.map((function(e,t){return M.a.createElement(r,{number:t+1,current:n})})),M.a.createElement("li",null,M.a.createElement("a",{href:"?page="+(n+1),className:"button small "+(n==u?"disabled":"")},"Next"))))))}},HOdS:function(e,t,n){e.exports=n.p+"static/wada-398ee2b6f542ec70ee160fa7bacae68b.jpg"},JCBB:function(e,t,n){e.exports=n.p+"static/kiyota-0576eba019ab3b52b440605d1b9a58da.jpg"},NxlC:function(e,t,n){e.exports=n.p+"static/kinoshita-dde2b64eaf9c3ddca73fefa6fbcf73b4.jpg"},TKPR:function(e,t,n){e.exports=n.p+"static/matsuno-634a3874360c19ad5a6c1fde2b4b774c.jpg"},TqpU:function(e,t,n){e.exports=n.p+"static/fujita-01aaab3c6380857737e11a6fef6449fe.jpg"},dTeP:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMTIzIDE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQoJPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+DQoJCTxwYXRoIGQ9Im00MzMgNjBjLTE1LjggMC0yOC44IDEzLTI4LjggMjguOHY1Ny40Yy0wLjA4MyAzLjkyIDMuMDggNy4xNSA3IDcuMTUgMy45MyAwIDcuMDgtMy4yMyA3LTcuMTV2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjggOC4yNSAwIDE0LjggNi41NCAxNC44IDE0Ljh2NTcuNGMtMC4wNTggMy45MSAzLjA5IDcuMTEgNyA3LjExIDMuOTEgMCA3LjA2LTMuMiA3LTcuMTF2LTU3LjRjMC04LjI2IDYuNTQtMTQuOCAxNC44LTE0LjhzMTQuOCA2LjU0IDE0LjggMTQuOHY1Ny40Yy0wLjA1MyAzLjkgMy4xIDcuMSA3IDcuMSAzLjkgMCA3LjA2LTMuMTkgNy03LjF2LTU3LjRjMC0xNS44LTEzLTI4LjgtMjguOC0yOC44LTguNzMgMC0xNi41IDQuMDQtMjEuOCAxMC4yLTUuMy02LjItMTMuMS0xMC4yLTIxLjgtMTAuMnptNDc5LTM3LjRjLTE1LjcgMC0yOC41IDEyLjgtMjguNSAyOC41IDAgMTUuNyAxMi44IDI4LjUgMjguNSAyOC41czI4LjUtMTIuOCAyOC41LTI4LjVjMC0xNS43LTEyLjgtMjguNS0yOC41LTI4LjV6bTAgMTRjOC4xIDAgMTQuNSA2LjQxIDE0LjUgMTQuNSAwIDguMS02LjQxIDE0LjUtMTQuNSAxNC41cy0xNC41LTYuNDEtMTQuNS0xNC41YzAtOC4wOSA2LjQxLTE0LjUgMTQuNS0xNC41em0tMC4xMDUgNTFjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjUxLjdjLTAuMDU5IDMuOTEgMy4wOSA3LjExIDcgNy4xMSAzLjkxIDAgNy4wNi0zLjIgNy03LjExdi01MS43YzAuMDU2LTMuOTUtMy4xNi03LjE2LTcuMTEtNy4xem0xMzYtNjVjLTMuODYgMC4wNTg3LTYuOTUgMy4yNC02LjkgNy4xdjQzLjdjLTguNDItOC4yNy0xOS45LTEzLjQtMzIuNi0xMy40LTI1LjcgMC00Ni42IDIwLjktNDYuNiA0Ni42IDAgMjUuNyAyMC45IDQ2LjYgNDYuNiA0Ni42IDEyLjcgMCAyNC4yLTUuMTUgMzIuNi0xMy40djYuNDljLTAuMDYgMy45MSAzLjA5IDcuMTIgNyA3LjEyczcuMDYtMy4yIDctNy4xMnYtMTE3YzAuMDYtMy45NS0zLjE2LTcuMTYtNy4xMS03LjF6bS0zOS41IDUxLjRjMTguMSAwIDMyLjYgMTQuNSAzMi42IDMyLjYgMCAxOC4xLTE0LjUgMzIuNi0zMi42IDMyLjYtMTguMSA5ZS00IC0zMi42LTE0LjUtMzIuNi0zMi42IDAtMTguMSAxNC41LTMyLjYgMzIuNi0zMi42em0tMzAwLTE0Yy0yNS43IDAtNDYuNiAyMC45LTQ2LjYgNDYuNnYzOS42Yy0wLjA1NyAzLjkxIDMuMDkgNy4xIDcgNy4xIDMuOTEgMCA3LjA2LTMuMiA3LTcuMXYtMzkuNmMwLTE4LjEgMTQuNS0zMi42IDMyLjYtMzIuNiA5LjA0IDAgMTcuMSAzLjY0IDIzLjEgOS41NSAyLjcyIDIuODMgNy4yMyAyLjg4IDEwIDAuMTA2IDIuNzgtMi43OCAyLjczLTcuMjktMC4xMDctMTAtOC40My04LjQzLTIwLjEtMTMuNi0zMy0xMy42em0xMTIgMzguNmMtN2UtNCA1Ljk0IDQuODEgMTAuOCAxMC44IDEwLjggNS45NC0xZS00IDEwLjgtNC44MiAxMC44LTEwLjgtMmUtNCAtNS45NC00LjgyLTEwLjgtMTAuOC0xMC44LTUuOTQgMS43ZS00IC0xMC44IDQuODEtMTAuOCAxMC44em0tMjM2LTM4LjZjLTI1LjEgMC00NS43IDIwLjEtNDYuNSA0NS4xLTAuMjMgMS4wMi0wLjIzIDIuMDcgMCAzLjA5IDAuODM1IDI0LjkgMjEuNCA0NSA0Ni41IDQ1IDEyLjggMCAyNC41LTUuMjIgMzMtMTMuNiAyLjgtMi43MiAyLjgyLTcuMjEgMC4wNjUtOS45Ny0yLjc2LTIuNzYtNy4yNC0yLjczLTkuOTcgMC4wNjUtNS45MSA1LjkxLTE0IDkuNTUtMjMuMSA5LjU1LTE1LjcgMC0yOC42LTEwLjktMzEuOC0yNS42aDcxLjRjMy44Ny00ZS00IDctMy4xMyA3LTcgMC0yNS43LTIwLjktNDYuNi00Ni42LTQ2LjZ6bS0yNDggMC4wNDQ3Yy0xNi41LTAuNDEzLTMyLjggNy45OS00MS42IDIzLjMtMTIuOCAyMi4yLTUuMTYgNTAuOCAxNy4xIDYzLjcgMjIuMiAxMi44IDUwLjggNS4xNiA2My43LTE3LjEgMTIuOC0yMi4yIDUuMTYtNTAuOC0xNy4xLTYzLjctNi45NC00LjAxLTE0LjUtNi4wMi0yMi02LjJ6bTQ4MCAwYy03LjUyIDAuMTg3LTE1LjEgMi4xOS0yMiA2LjItMjIuMiAxMi44LTI5LjkgNDEuNC0xNy4xIDYzLjcgMTIuOCAyMi4yIDQxLjQgMjkuOSA2My43IDE3LjEgMjIuMi0xMi44IDI5LjktNDEuNCAxNy4xLTYzLjctOC44Mi0xNS4zLTI1LjEtMjMuNy00MS42LTIzLjN6bS0yMzIgMTRjMTUuNyAwIDI4LjYgMTAuOSAzMS44IDI1LjZoLTYzLjZjMy4xOS0xNC43IDE2LjEtMjUuNiAzMS44LTI1LjZ6bS0yNTIgMC4wNDM4YzYuMjYtMC40MzQgMTIuNyAwLjkzOSAxOC42IDQuMzMgMTUuNyA5LjA0IDIxIDI4LjkgMTEuOSA0NC41LTkuMDQgMTUuNy0yOC45IDIxLTQ0LjUgMTEuOS0xNS43LTkuMDQtMjEtMjguOS0xMS45LTQ0LjUgNS42NS05Ljc5IDE1LjUtMTUuNSAyNS45LTE2LjN6bTQ4NyAwYzEwLjQgMC43MjUgMjAuMyA2LjQ3IDI1LjkgMTYuMyA5LjA0IDE1LjcgMy43MyAzNS41LTExLjkgNDQuNS0xNS43IDkuMDQtMzUuNSAzLjczLTQ0LjUtMTEuOS05LjA0LTE1LjctMy43My0zNS41IDExLjktNDQuNSA1Ljg3LTMuMzkgMTIuMy00Ljc3IDE4LjYtNC4zM3oiLz4NCgkJPHBhdGggZD0ibTE0NCA5LjY1Yy0xMi4yLTAuMjgxLTI0LjYgMi42Ni0zNS45IDkuMTgtMzIuOSAxOS00NC4yIDYxLjItMjUuMiA5NC4xYTcgNyAwIDAgMCAwLjAxNjYgMC4wM2MxLjI4IDIuMTkgMi42OCA0LjI5IDQuMTkgNi4zMmwtMTYuNSA5LjU1YTcgNyAwIDEgMCA3IDEyLjFsMTI4LTczLjdhNyA3IDAgMCAwIDAuMDg0LTAuMDQ3M2wyMy44LTEzLjdhNyA3IDAgMSAwLTctMTIuMWwtMTYuNSA5LjU1Yy0xLTIuMzItMi4xMi00LjU5LTMuMzgtNi43OWE3IDcgMCAwIDAtMC4wMTctMC4wMzMzYy0xMi40LTIxLjYtMzQuOS0zMy44LTU4LjItMzQuNHptNzUuOSA2NS4yLTEyLjEgN2MxNC45IDI1LjkgNS44NyA1OS0yMC41IDc0LjItMjYuMyAxNS4yLTU5LjUgNi40OS03NC40LTE5LjRsLTEyLjEgN2MxOC44IDMyLjUgNjAuOCA0My40IDkzLjYgMjQuNSAzMi44LTE4LjkgNDQuMy02MC44IDI1LjYtOTMuM3ptLTI5IDE4LjNhMTAuOCAxMC44IDAgMCAwLTUuMTIgMS40NCAxMC44IDEwLjggMCAwIDAtMy45MyAxNC43IDEwLjggMTAuOCAwIDAgMCAxNC43IDMuOTQgMTAuOCAxMC44IDAgMCAwIDMuOTQtMTQuNyAxMC44IDEwLjggMCAwIDAtOS41Ny01LjM3eiIvPg0KCTwvZz4NCjwvc3ZnPg0K"},e3hC:function(e,t,n){e.exports=n.p+"static/kagiwada-d2c15c9e4780aac4d1ce060a552ce7fd.jpg"},k6Nh:function(e,t,n){e.exports=n.p+"static/omeroid360-c148234fc801519ced7a52d2fff66b4f.jpg"},mHL4:function(e,t,n){e.exports=n.p+"static/nitsu-65a4a68cac66af15f88436205cda47bd.jpeg"},mMih:function(e,t,n){e.exports=n.p+"static/kobayashi-a5be64e5e262f9594500797bd163414b.jpg"},r4CG:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),M=n.n(a),u=(n("Wbzz"),n("TJpk")),c=n.n(u),i=n("Bl7J"),l=n("0Wn5"),L=n("A1DE"),g=n("0/00"),r=n.n(g),j=n("TKPR"),N=n.n(j),T=n("JCBB"),o=n.n(T),I=n("HOdS"),A=n.n(I),y=n("mMih"),m=n.n(y),E=n("TqpU"),D=n.n(E),C=n("NxlC"),s=n.n(C),x=n("mHL4"),S=n.n(x),z=n("e3hC"),f=n.n(z),d=n("k6Nh"),O=n.n(d),b=[{image:N.a,imageAlt:"松野貞之",to:null,title:"松野貞之 代表取締役社長 CEO",content:["ものごとをシンプルにしたいと思い起業",M.a.createElement("br",null),"CEOでありながら社内一のITスキルを有す",M.a.createElement("br",null)]},{image:o.a,imageAlt:"清田侑",to:null,title:"清田侑 取締役 COO",content:["なんでもこなすジェネラリスト",M.a.createElement("br",null),"グランドデザイン・要件定義・設計等のITコンサルティング業が得意",M.a.createElement("br",null)]},{image:A.a,imageAlt:"和田直也",to:null,title:"和田直也 取締役",content:["戦略・経営コンサルティング",M.a.createElement("br",null),"DX戦略のプロジェクト経験多数、得意ドメインは製造・医療/製薬・ITサービス・HR（人材サービス）等",M.a.createElement("br",null)]},{image:m.a,imageAlt:"小林泰宣",to:null,title:"小林泰宣 エンジニア",content:["文系出身エンジニア",M.a.createElement("br",null),"Rails/Vueの使い手",M.a.createElement("br",null)]},{image:D.a,imageAlt:"藤田峻平",to:null,title:"藤田峻平 コンサルタント",content:["製造業企業(精密機器・機械)からコンサルタントに転職",M.a.createElement("br",null),"SaaSやWebサービス企業の新事業検討・事業戦略検討支援を担当",M.a.createElement("br",null),"国内短期MBAプログラム(Columbia Venture for all)に参画し、短期ピッチプログラムでは優勝。提案したITサービ スを自らエンジニアとして開発・構築も試行",M.a.createElement("br",null)]},{image:s.a,imageAlt:"木下侑哉",to:null,title:"木下侑哉 エンジニア",content:["前職就業中にスクールと独学でプログラミングを学び、製造業から転職して入社",M.a.createElement("br",null),"AWS/Rails/React/JavaScriptが得意"]},{image:O.a,imageAlt:"Marcelo Higa",to:null,title:"Marcelo Higa エンジニア",content:["ブラジル出身、日本育ちのエンジニア",M.a.createElement("br",null),"日本語、英語、ポルトガル語が話せるトリリンガル",M.a.createElement("br",null),"Elixir/Rails/JavaScript/Rustが得意"]},{image:S.a,imageAlt:"新津奈央",to:null,title:"新津奈央 コーポレート",content:["番組制作会社出身のコーポレート",M.a.createElement("br",null),"番組制作会社からコーポレート職に転職",M.a.createElement("br",null),"幅広い仕事をしっかりこなす",M.a.createElement("br",null)]},{image:f.a,imageAlt:"鍵和田祐輔",to:null,title:"鍵和田祐輔 コンサルタント",content:["東京大学医学部卒業後、AIアプリケーション開発・販売企業を経て現職。",M.a.createElement("br",null),"大手卸売企業における新規市場参入に向けたマッチングプラットフォームビジネスの検討・構築支援等複数のPJTをメンバーとして推進。”新規事業検討・市場調査分析・プロダクト設計”を専門領域とする。",M.a.createElement("br",null)]},{image:O.a,imageAlt:"本間蒼士",to:null,title:"本間蒼士 エンジニア",content:["",M.a.createElement("br",null)]},{image:O.a,imageAlt:"坂平祥鎮",to:null,title:"坂平祥鎮 コンサルタント",content:["",M.a.createElement("br",null)]},{image:O.a,imageAlt:"西村拓馬",to:null,title:"西村拓馬 エンジニア",content:["",M.a.createElement("br",null)]},{image:O.a,imageAlt:"和田皓翔",to:null,title:"和田皓翔 エンジニア",content:["",M.a.createElement("br",null)]}];t.default=function(e){return M.a.createElement(i.a,null,M.a.createElement(c.a,null,M.a.createElement("title",null,"Member"),M.a.createElement("meta",{name:"description",content:"Member Page"})),M.a.createElement(l.a,{title:"Member",content:"omeroidのメンバーを紹介します",image:r.a}),M.a.createElement("div",{id:"main"},M.a.createElement(L.a,{items:b})))}}}]);
//# sourceMappingURL=component---src-pages-member-js-044200722e07d326c363.js.map