(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0Wn5":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){return r.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+e.image+")"}},r.a.createElement("div",{className:"inner"},r.a.createElement("header",{className:"major"},r.a.createElement("h1",null,e.title)),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,e.content))))}},A1DE:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);function c(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function l(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:c(t[n])&&c(e[n])&&Object.keys(t[n]).length>0&&l(e[n],t[n])}))}var i={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};l("undefined"!=typeof document?document:{},i);var o="undefined"!=typeof window?window:{};l(o,{document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var u=n("Wbzz");function m(e){var t=e.to,n=e.className,a=e.children;return t?r.a.createElement(u.Link,{to:t,className:n},a):r.a.createElement("div",{className:n},a)}function s(e){var t=e.image,n=e.imageAlt;return t?r.a.createElement(m,{to:e.to,className:"image fit"},r.a.createElement("img",{src:t,alt:n})):r.a.createElement("div",null)}var f=function(e){return r.a.createElement("section",null,r.a.createElement(s,{image:e.image,to:e.to}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"inner"},r.a.createElement("header",{className:"major"},r.a.createElement("h3",null,e.title)),r.a.createElement("p",null,e.content),e.children,e.to&&r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement(u.Link,{to:e.to,className:"button"},"詳細を見る"))))))};function E(e){var t=e.children;return e.show?r.a.createElement("div",null,t):r.a.createElement("div",null)}function d(e){var t=e.number,n=e.current;return r.a.createElement("li",null,r.a.createElement("a",{href:"?page="+t,className:t==n?"page active":"page"},t))}t.a=function(e){var t=function(){var e=o.location.search.substring(1),t={};return e.split("&").forEach((function(e){var n,a=e.split("=");t=Object.assign({},t,((n={})[a[0]]=a[1],n))})),t}(),n=parseInt(t.page)||1,a=function(e,t){console.log("array",e),console.log("number",t);var n=Math.ceil(e.length/t);return new Array(n).fill().map((function(n,a){return e.slice(a*t,(a+1)*t)}))}(e.items,10),c=a.length,l=a[(n=n>c?1:n)-1];return r.a.createElement("section",{id:"two",className:"spotlights"},l.map((function(t){return console.log("i",t),r.a.createElement(f,{image:t.image,imageAlt:t.imageAlt,to:t.to,title:t.title,content:t.content},e.children)})),r.a.createElement(E,{show:c>1},r.a.createElement("div",{className:"pagination-wrap"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",null,r.a.createElement("span",{className:"button small "+(1==n?"disabled":"")},"Prev")),a.map((function(e,t){return r.a.createElement(d,{number:t+1,current:n})})),r.a.createElement("li",null,r.a.createElement("a",{href:"?page="+(n+1),className:"button small "+(n==c?"disabled":"")},"Next"))))))}},abFe:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=(n("Wbzz"),n("TJpk")),l=n.n(c),i=n("Bl7J"),o=n("0Wn5"),u=n("A1DE"),m=n("iIfD"),s=n.n(m),f=n("jN53"),E=n.n(f),d=n("u8W6"),g=n.n(d),p=[{image:E.a,imageAlt:"エンジニア",to:null,title:"ITコンサルティング業務",content:["要件定義・設計・開発・テスト・運用等のシステム開発の全フェーズをサポートいたします",r.a.createElement("br",null)]},{image:g.a,imageAlt:"コンサルタント",to:null,title:"業務コンサルティング業務",content:["戦略・経営のサポートをいたします",r.a.createElement("br",null),"特に新規事業創出領域における経験が豊富です",r.a.createElement("br",null)]},{image:s.a,imageAlt:"プロダクト",to:"./product",title:"プロダクト",content:["世の中を便利にする自社プロダクトを作成しています",r.a.createElement("br",null)]}];t.default=function(e){return r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement("title",null,"Service"),r.a.createElement("meta",{name:"description",content:"Service Page"})),r.a.createElement(o.a,{title:"Service",content:"omeroidの事業内容を紹介します",image:s.a}),r.a.createElement("div",{id:"main"},r.a.createElement(u.a,{items:p})))}},iIfD:function(e,t,n){e.exports=n.p+"static/service-84a410c2b9fb97bf4e3efb752f423602.jpg"},jN53:function(e,t,n){e.exports=n.p+"static/engineer-50cea208a8e48d97c312563e62265cc1.jpg"},u8W6:function(e,t,n){e.exports=n.p+"static/consultant-f19f5e7be5bd53cca0aa810d87015699.jpg"}}]);
//# sourceMappingURL=component---src-pages-service-js-20bc84465d2294eeeb3d.js.map