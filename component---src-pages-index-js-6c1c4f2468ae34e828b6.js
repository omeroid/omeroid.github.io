(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+kAY":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a("q1tI"),l=i(o),r=i(a("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,a,n;s(this,t);for(var o=arguments.length,l=Array(o),r=0;r<o;r++)l[r]=arguments[r];return a=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={fbLoaded:!1,shouldShowDialog:void 0},c(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.setFbAsyncInit(),this.reloadSDKAsynchronously()}},{key:"componentDidUpdate",value:function(e){e.pageId===this.props.pageId&&e.appId===this.props.appId&&e.shouldShowDialog===this.props.shouldShowDialog&&e.htmlRef===this.props.htmlRef&&e.minimized===this.props.minimized&&e.themeColor===this.props.themeColor&&e.loggedInGreeting===this.props.loggedInGreeting&&e.loggedOutGreeting===this.props.loggedOutGreeting&&e.greetingDialogDisplay===this.props.greetingDialogDisplay&&e.greetingDialogDelay===this.props.greetingDialogDelay&&e.autoLogAppEvents===this.props.autoLogAppEvents&&e.xfbml===this.props.xfbml&&e.version===this.props.version&&e.language===this.props.language||(this.setFbAsyncInit(),this.reloadSDKAsynchronously())}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,a=t.appId,n=t.autoLogAppEvents,o=t.xfbml,l=t.version;window.fbAsyncInit=function(){window.FB.init({appId:a,autoLogAppEvents:n,xfbml:o,version:"v"+l}),e.setState({fbLoaded:!0})}}},{key:"loadSDKAsynchronously",value:function(){var e,t,a,n,o,l=this.props.language;e=document,t="script",a="facebook-jssdk",o=e.getElementsByTagName(t)[0],e.getElementById(a)||((n=e.createElement(t)).id=a,n.src="https://connect.facebook.net/"+l+"/sdk/xfbml.customerchat.js",o.parentNode.insertBefore(n,o))}},{key:"removeFacebookSDK",value:function(){["facebook-jssdk","fb-root"].forEach((function(e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)})),delete window.FB}},{key:"reloadSDKAsynchronously",value:function(){this.removeFacebookSDK(),this.loadSDKAsynchronously()}},{key:"controlPlugin",value:function(){this.props.shouldShowDialog?window.FB.CustomerChat.showDialog():window.FB.CustomerChat.hideDialog()}},{key:"subscribeEvents",value:function(){var e=this.props,t=e.onCustomerChatDialogShow,a=e.onCustomerChatDialogHide;t&&window.FB.Event.subscribe("customerchat.dialogShow",t),a&&window.FB.Event.subscribe("customerchat.dialogHide",a)}},{key:"createMarkup",value:function(){var e=this.props,t=e.pageId,a=e.htmlRef,n=e.minimized,o=e.themeColor,l=e.loggedInGreeting,r=e.loggedOutGreeting,i=e.greetingDialogDisplay,s=e.greetingDialogDelay;return{__html:'<div\n        class="fb-customerchat"\n        page_id="'+t+'"\n        '+(void 0!==a?'ref="'+a+'"':"")+"\n        "+(void 0!==n?'minimized="'+n+'"':"")+"\n        "+(void 0!==o?'theme_color="'+o+'"':"")+"\n        "+(void 0!==l?'logged_in_greeting="'+l+'"':"")+"\n        "+(void 0!==r?'logged_out_greeting="'+r+'"':"")+"\n        "+(void 0!==i?'greeting_dialog_display="'+i+'"':"")+"\n        "+(void 0!==s?'greeting_dialog_delay="'+s+'"':"")+"\n      ></div>"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.fbLoaded,n=t.shouldShowDialog;return a&&n!==this.props.shouldShowDialog&&(document.addEventListener("DOMNodeInserted",(function(t){var a=t.target;a.className&&"string"==typeof a.className&&a.className.includes("fb_dialog")&&e.controlPlugin()}),!1),this.subscribeEvents()),l.default.createElement("div",{key:Date(),dangerouslySetInnerHTML:this.createMarkup()})}}]),t}(o.Component);u.propTypes={pageId:r.default.string.isRequired,appId:r.default.string.isRequired,shouldShowDialog:r.default.bool,htmlRef:r.default.string,minimized:r.default.bool,themeColor:r.default.string,loggedInGreeting:r.default.string,loggedOutGreeting:r.default.string,greetingDialogDisplay:r.default.oneOf(["show","hide","fade"]),greetingDialogDelay:r.default.number,autoLogAppEvents:r.default.bool,xfbml:r.default.bool,version:r.default.string,language:r.default.string,onCustomerChatDialogShow:r.default.func,onCustomerChatDialogHide:r.default.func},u.defaultProps={shouldShowDialog:!1,htmlRef:void 0,minimized:void 0,themeColor:void 0,loggedInGreeting:void 0,loggedOutGreeting:void 0,greetingDialogDisplay:void 0,greetingDialogDelay:void 0,autoLogAppEvents:!0,xfbml:!0,version:"2.11",language:"en_US",onCustomerChatDialogShow:void 0,onCustomerChatDialogHide:void 0},t.default=u},"0Wn5":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n);t.a=function(e){return o.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+e.image+")"}},o.a.createElement("div",{className:"inner"},o.a.createElement("header",{className:"major"},o.a.createElement("h1",null,e.title)),o.a.createElement("div",{className:"content"},o.a.createElement("p",null,e.content))))}},"5BQM":function(e,t,a){"use strict";var n,o=a("+kAY"),l=(n=o)&&n.__esModule?n:{default:n};e.exports=l.default},"7eBy":function(e,t,a){e.exports=a.p+"static/shop-49025a3d4644406baa0aaaf12a54ebe0.jpg"},Azxx:function(e,t,a){e.exports=a.p+"static/pic06-05653d205a36da91b3161519999f69c1.jpg"},"Eh/l":function(e,t,a){e.exports=a.p+"static/pic02-40a772a08cf02ce5a485b7290fa9d8dc.jpg"},F3dw:function(e,t,a){e.exports=a.p+"static/news-f14fd41e129a6ca260aef3e2707d9278.jpg"},ILy0:function(e,t,a){e.exports=a.p+"static/pic01-f7c500d0c7ce97f4fa08f6f797eaf142.jpg"},MBxz:function(e,t,a){e.exports=a.p+"static/banner-7834b5998f48cb0ec95e94be75eaee63.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),o=a("q1tI"),l=a.n(o),r=a("Wbzz"),i=a("TJpk"),s=a.n(i),c=a("5BQM"),u=a.n(c),d=a("Bl7J"),m=a("0Wn5"),g=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"inner"},l.a.createElement("section",null,l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.7566924725716!2d139.73111291895378!3d35.59283017027911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018602cc78d3ae9%3A0x5813ff4e337fdd46!2z44CSMTQwLTAwMTMg5p2x5Lqs6YO95ZOB5bed5Yy65Y2X5aSn5LqV77yW5LiB55uu77yU4oiS77yS77ySIOadseS6rOODjeOCquODsw!5e0!3m2!1sja!2sjp!4v1602571746495!5m2!1sja!2sjp",width:"100%",height:"100%",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})),l.a.createElement("section",{className:"split"},l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-envelope"}),l.a.createElement("h3",null,"Email"),l.a.createElement("a",{href:"#"},"inquiry@omeroid.com"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-home"}),l.a.createElement("h3",null,"Address"),l.a.createElement("div",null,l.a.createElement("b",null,"事務所")),l.a.createElement("span",null,"東京都品川区南大井6-4-22",l.a.createElement("br",null),"東京ネオンビル2F シェルパ・アンド・カンパニー"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,"登記住所")),l.a.createElement("span",null,"東京都大田区平和島6丁目1番1号",l.a.createElement("br",null),"東京流通センターB棟1階(W1-4~7)まつの内"))))))},p=a("MBxz"),f=a.n(p),h=a("iIfD"),E=a.n(h),b=a("F3dw"),y=a.n(b),D=a("mV/1"),M=a.n(D),I=a("cZqG"),v=a.n(I),N=(a("wE/l"),a("7eBy")),w=a.n(N),j=a("bdrn"),L=a.n(j),A=(a("ILy0"),a("Eh/l"),a("b3N1"),a("xZ3l"),a("mwdr"),a("Azxx"),["エンジニア・コンサルタントのプロ集団",l.a.createElement("br",null),"「Make it simple」をテーマに顧客のビジネスサポートや自社サービス開発を行っています"]),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{title:"omeroid（オメロイド）",meta:[{name:"description",content:"omeroid（オメロイド）"},{name:"keywords",content:"omeroid, オメロイド"}]}),l.a.createElement(m.a,{title:"omeroid",content:A,image:f.a}),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one",className:"tiles"},l.a.createElement("article",{style:{backgroundImage:"url("+y.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"News"),l.a.createElement("p",null,"ニュース")),l.a.createElement(r.Link,{to:"/news",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+E.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Service"),l.a.createElement("p",null,"事業内容")),l.a.createElement(r.Link,{to:"/service",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+M.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Member"),l.a.createElement("p",null,"メンバー")),l.a.createElement(r.Link,{to:"/member",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+v.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Recruit"),l.a.createElement("p",null,"採用")),l.a.createElement(r.Link,{to:"https://www.wantedly.com/companies/company_5409883",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+w.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Shop"),l.a.createElement("p",null,"ショップ")),l.a.createElement(r.Link,{to:"https://omeroid.booth.pm/",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+L.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"What is omeroid?"),l.a.createElement("p",null,"omeroidの由来")),l.a.createElement(r.Link,{to:"/",className:"link primary"})))),l.a.createElement(g,null),l.a.createElement(u.a,{pageId:"1970520546574914",appId:"1634817276825716"}))},t}(l.a.Component);t.default=C},b3N1:function(e,t,a){e.exports=a.p+"static/pic03-3677838948c068ce88d237eaea766a51.jpg"},bdrn:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA3OTQgNzk0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCgk8ZyBzdHlsZT0iZmlsbDojNDA0MDQwIj4NCgkJPHBhdGggZD0ibTM3MSAxOS40Yy01NC44LTEuMjYtMTExIDEyLTE2MSA0MS4zLTE0OCA4NS40LTE5OSAyNzUtMTEzIDQyM2EzMS41IDMxLjUgMCAwIDAgMC4wNzQgMC4xMzRjNS43NCA5Ljg0IDEyLjEgMTkuMyAxOC45IDI4LjRsLTc0LjQgNDNhMzEuNSAzMS41IDAgMSAwIDMxLjUgNTQuNWw1NzQtMzMyYTMxLjUgMzEuNSAwIDAgMCAwLjM3OC0wLjIxM2wxMDctNjEuN2EzMS41IDMxLjUgMCAxIDAtMzEuNS01NC41bC03NC40IDQzYy00LjUxLTEwLjQtOS41NC0yMC42LTE1LjItMzAuNWEzMS41IDMxLjUgMCAwIDAtMC4wNzUtMC4xNWMtNTYtOTctMTU3LTE1Mi0yNjItMTU1em0zNDIgMjk0LTU0LjUgMzEuNWM2Ny4yIDExNiAyNi40IDI2NS05MiAzMzQtMTE4IDY4LjQtMjY4IDI5LjItMzM1LTg3LjFsLTU0LjUgMzEuNWM4NC40IDE0NiAyNzMgMTk1IDQyMSAxMTAgMTQ4LTg1LjIgMTk5LTI3MyAxMTUtNDIwem0tMTMxIDgyLjFhNDguNCA0OC40IDAgMCAwLTIzIDYuNDYgNDguNCA0OC40IDAgMCAwLTE3LjcgNjYuMSA0OC40IDQ4LjQgMCAwIDAgNjYuMSAxNy43IDQ4LjQgNDguNCAwIDAgMCAxNy43LTY2LjEgNDguNCA0OC40IDAgMCAwLTQzLTI0LjJ6Ii8+DQoJPC9nPg0KPC9zdmc+DQo="},cZqG:function(e,t,a){e.exports=a.p+"static/recruit-a2d697bf5ffe404faf2b02b316ef3e61.jpg"},iIfD:function(e,t,a){e.exports=a.p+"static/service-84a410c2b9fb97bf4e3efb752f423602.jpg"},"mV/1":function(e,t,a){e.exports=a.p+"static/member-51ff8313e8fddebb5b0a503716dc785e.jpg"},mwdr:function(e,t,a){e.exports=a.p+"static/pic05-d82e61241e70622b517cab61e99a61ee.jpg"},"wE/l":function(e,t,a){e.exports=a.p+"static/blog-dfd7beb832598dcc3e07dd257ddab767.jpg"},xZ3l:function(e,t,a){e.exports=a.p+"static/pic04-e2db96cd5eec25ebe26cb0525e9589d6.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-6c1c4f2468ae34e828b6.js.map