(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7,8],{276:function(t,o,M){"use strict";M(58);o.a={methods:{scrollToSection:function(t){"#"===t[0]&&(t=t.slice(1));var o=document.querySelector("#"+t).offsetTop-80;window.scroll({top:o,left:0,behavior:"smooth"})}}}},280:function(t,o,M){t.exports=M.p+"img/logo.927a367.svg"},281:function(t,o,M){"use strict";M.r(o);var n={mixins:[M(276).a]},c=M(43),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o("NuxtLink",{staticClass:"logo nav-link",attrs:{to:"/"},nativeOn:{click:function(o){return t.scrollToSection("cover")}}},[o("img",{attrs:{src:M(280),alt:"logo"}})])}),[],!1,null,null,null);o.default=component.exports},289:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNTk0MzIgOC40NjczM0M4Ljg3NTU3IDUuMjY0MjEgMTguMjk3NCAxLjM1OSAxOS41OTg1IDAuODE4Mzc4QzIzLjAxIC0wLjU5NjIwNSAyNC4wNTY4IC0wLjMyNTM3MiAyMy41MzUgMi44MDc5NkMyMy4xNiA1LjA2MDA0IDIyLjA3ODcgMTIuNTE1MiAyMS4yMTYyIDE3LjE1NTlDMjAuNzA0NyAxOS45MDggMTkuNTU2OCAyMC4yMzQgMTcuNzUyNyAxOS4wNDM0QzE2Ljg4NSAxOC40NzA1IDEyLjUwNDcgMTUuNTczNiAxMS41NTM3IDE0Ljg5MzRDMTAuNjg2IDE0LjI3MzYgOS40ODkxMSAxMy41Mjc3IDEwLjk5MDIgMTIuMDU5QzExLjUyNDUgMTEuNTM2MSAxNS4wMjU2IDguMTkyMzMgMTcuNzUzNyA1LjU5MDI1QzE4LjExMSA1LjI0ODU4IDE3LjY2MiA0LjY4NzEzIDE3LjI0OTUgNC45NjEwOEMxMy41NzI0IDcuMzk5NjMgOC40NzQ1MyAxMC43ODQgNy44MjU1NyAxMS4yMjQ2QzYuODQ1MzYgMTEuODkwMiA1LjkwMzcgMTIuMTk1NSA0LjIxNDExIDExLjcxQzIuOTM3MDMgMTEuMzQzNCAxLjY5MDE2IDEwLjkwNTkgMS4yMDQ3NCAxMC43MzkyQy0wLjY2NTA1NCAxMC4wOTc1IC0wLjIyMTMwMyA5LjI2NjI5IDEuNTk0MzIgOC40NjczM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},290:function(t,o,M){t.exports=M.p+"img/twitter.29ed46b.svg"},291:function(t,o,M){t.exports=M.p+"img/discord.4d09899.svg"},294:function(t,o,M){"use strict";M.r(o);var n={data:function(){return{socials:[{href:"https://www.instagram.com",type:"telegram",img:M(289)},{href:"#",type:"twitter",img:M(290)},{href:"#",type:"discord",img:M(291)}]}}},c=M(43),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o("ul",{staticClass:"socials"},t._l(t.socials,(function(t){return o("li",{key:t.type,staticClass:"socials__item"},[o("a",{staticClass:"socials__link",class:"telegram"==t.type?"social__link--telegram":"",attrs:{href:t.href,target:"_blank"}},[o("img",{attrs:{src:t.img,alt:""}})])])})),0)}),[],!1,null,null,null);o.default=component.exports},312:function(t,o,M){"use strict";M.r(o);var n={data:function(){return{info:{copyright:"2022 Startup. All rights reserved."}}}},c=M(43),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o("footer",{staticClass:"footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"footer__inner"},[o("app-logo"),t._v(" "),o("p",{staticClass:"footer__copyright"},[o("span",{staticClass:"footer__copyright--roboted"},[t._v("\n          ©  \n        ")]),t._v("  \n        "+t._s(t.info.copyright)+"\n      ")]),t._v(" "),o("app-socials")],1)])])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{AppLogo:M(281).default,AppSocials:M(294).default})}}]);