(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,4,5,6,7,8,9,10,11,12,13,14,16],{274:function(t,e,n){var r=n(3),l=n(23),o=n(13),c=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var f=o(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(o(r),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},275:function(t,e,n){var r=n(4);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},276:function(t,e,n){"use strict";n(58);e.a={methods:{scrollToSection:function(t){"#"===t[0]&&(t=t.slice(1));var e=document.querySelector("#"+t).offsetTop-80;window.scroll({top:e,left:0,behavior:"smooth"})}}}},277:function(t,e,n){"use strict";n.r(e);n(278),n(279);var r={props:{title:{type:String,required:!0},pagesLink:{type:Boolean,default:!1},link:{type:Boolean,default:!1},href:{type:String,default:""},custom:{type:Object,default:null},view:{type:String,default:"pink"},big:{type:Boolean,default:!1},btnType:{type:String,default:"button"}},computed:{useStyle:function(){return"btn--"+this.view}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.link||t.pagesLink?t.pagesLink?e("router-link",{staticClass:"btn",class:[t.useStyle,this.big?"btn--big":""],attrs:{to:null===t.custom?t.href:t.custom}},[t._t("default"),t._v("\n  "+t._s(t.title)+"\n")],2):t.link?e("a",{staticClass:"btn",class:[t.useStyle,this.big?"btn--big":""],attrs:{href:t.href,target:"_blank"}},[t._t("default"),t._v("\n  "+t._s(t.title)+"\n")],2):t._e():e("button",{staticClass:"btn",class:[t.useStyle,this.big?"btn--big":""],attrs:{type:t.btnType}},[t._t("default"),t._v("\n  "+t._s(t.title)+"\n")],2)}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";var r=n(2),l=n(274);r({target:"String",proto:!0,forced:n(275)("link")},{link:function(t){return l(this,"a","href",t)}})},279:function(t,e,n){"use strict";var r=n(2),l=n(274);r({target:"String",proto:!0,forced:n(275)("big")},{big:function(){return l(this,"big","","")}})},280:function(t,e,n){t.exports=n.p+"img/logo.927a367.svg"},281:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(276).a]},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("NuxtLink",{staticClass:"logo nav-link",attrs:{to:"/"},nativeOn:{click:function(e){return t.scrollToSection("cover")}}},[e("img",{attrs:{src:n(280),alt:"logo"}})])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";var r=n(11),l=n(5),o=n(3),c=n(104),d=n(16),f=n(12),v=n(183),_=n(33),h=n(75),m=n(182),y=n(4),x=n(76).f,C=n(26).f,w=n(15).f,M=n(283),k=n(284).trim,N="Number",j=l.Number,T=j.prototype,I=l.TypeError,A=o("".slice),S=o("".charCodeAt),O=function(t){var e=m(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,r,l,o,c,d,code,f=m(t,"number");if(h(f))throw I("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=S(f,0))||45===e){if(88===(n=S(f,2))||120===n)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+f}for(c=(o=A(f,2)).length,d=0;d<c;d++)if((code=S(o,d))<48||code>l)return NaN;return parseInt(o,r)}return+f};if(c(N,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var L,E=function(t){var e=arguments.length<1?0:j(O(t)),n=this;return _(T,n)&&y((function(){M(n)}))?v(Object(e),n,E):e},z=r?x(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;z.length>V;V++)f(j,L=z[V])&&!f(E,L)&&w(E,L,C(j,L));E.prototype=T,T.constructor=E,d(l,N,E,{constructor:!0})}},283:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},284:function(t,e,n){var r=n(3),l=n(23),o=n(13),c=n(285),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),_=RegExp(f+f+"*$"),h=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,_,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},285:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},286:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNTk0MzIgOC40NjczM0M4Ljg3NTU3IDUuMjY0MjEgMTguMjk3NCAxLjM1OSAxOS41OTg1IDAuODE4Mzc4QzIzLjAxIC0wLjU5NjIwNSAyNC4wNTY4IC0wLjMyNTM3MiAyMy41MzUgMi44MDc5NkMyMy4xNiA1LjA2MDA0IDIyLjA3ODcgMTIuNTE1MiAyMS4yMTYyIDE3LjE1NTlDMjAuNzA0NyAxOS45MDggMTkuNTU2OCAyMC4yMzQgMTcuNzUyNyAxOS4wNDM0QzE2Ljg4NSAxOC40NzA1IDEyLjUwNDcgMTUuNTczNiAxMS41NTM3IDE0Ljg5MzRDMTAuNjg2IDE0LjI3MzYgOS40ODkxMSAxMy41Mjc3IDEwLjk5MDIgMTIuMDU5QzExLjUyNDUgMTEuNTM2MSAxNS4wMjU2IDguMTkyMzMgMTcuNzUzNyA1LjU5MDI1QzE4LjExMSA1LjI0ODU4IDE3LjY2MiA0LjY4NzEzIDE3LjI0OTUgNC45NjEwOEMxMy41NzI0IDcuMzk5NjMgOC40NzQ1MyAxMC43ODQgNy44MjU1NyAxMS4yMjQ2QzYuODQ1MzYgMTEuODkwMiA1LjkwMzcgMTIuMTk1NSA0LjIxNDExIDExLjcxQzIuOTM3MDMgMTEuMzQzNCAxLjY5MDE2IDEwLjkwNTkgMS4yMDQ3NCAxMC43MzkyQy0wLjY2NTA1NCAxMC4wOTc1IC0wLjIyMTMwMyA5LjI2NjI5IDEuNTk0MzIgOC40NjczM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},287:function(t,e,n){t.exports=n.p+"img/twitter.29ed46b.svg"},288:function(t,e,n){t.exports=n.p+"img/discord.4d09899.svg"},289:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{links:[{label:"About",href:"about"},{label:"Development",href:"development"},{label:"NFT",href:"collection"},{label:"Roadmap",href:"roadmap"}]}},mixins:[n(276).a]},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"header__nav"},[e("ul",{staticClass:"header__nav-list"},t._l(t.links,(function(n){return e("li",{key:n.label,staticClass:"header__nav-item"},[e("a",{staticClass:"header__nav-link nav-link",attrs:{href:"#"+n.href},on:{click:function(e){return e.preventDefault(),t.scrollToSection(n.href)}}},[t._v("\n        "+t._s(n.label)+"\n      ")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var r=n(27),l=(n(105),n(58),n(282),{props:{value:{type:String,required:!0},rows:{type:Number,default:5},inputRequired:{type:Boolean,default:!1},descr:{type:String,required:!1},placeholderText:{type:String,required:!1},view:{type:String,required:!1},type:{type:String,default:"text"},radio:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1},textarea:{type:Boolean,default:!1},checkboxValue:{type:String,required:!1},checkboxName:{type:String,required:!1},checkboxChecked:{type:Boolean,default:!1},verified:{type:Boolean,required:!1},isReadonly:{type:Boolean,default:!1}},data:function(){return{inputValue:""}},mounted:function(){this.radio&this.checkboxChecked&&(this.inputValue=this.checkboxValue,this.$emit("choosed",this.inputValue))},methods:{typedText:function(t){this.$emit("update:modelValue",t.target.value)},toggledCheckbox:function(){this.$emit("choosed",this.checkboxValue)}},computed:{viewStyle:function(){return"input--"+this.view},verifiedView:function(){return this.verified?"label--verified":""}},emits:["choosed","update:modelValue"]}),o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return t.radio?e("label",{staticClass:"label",class:t.verifiedView},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"checkbox",attrs:{type:"radio",name:t.checkboxName,required:t.inputRequired},domProps:Object(r.a)({value:t.checkboxValue,checked:t.checkboxChecked},"checked",t._q(t.inputValue,t.checkboxValue)),on:{change:[function(e){t.inputValue=t.checkboxValue},function(e){return t.toggledCheckbox()}]}}),t._v(" "),t._t("default"),t._v(" "),e("span",{staticClass:"label-text"},[t._v("\n    "+t._s(t.descr)+"\n    "),t._t("verified")],2)],2):t.checkbox?e("label",{staticClass:"label",class:t.verifiedView},[e("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:t.checkboxValue},on:{change:function(e){return t.toggledCheckbox()}}}),t._v(" "),t._t("default"),t._v(" "),e("span",{staticClass:"label-text"},[t._v("\n    "+t._s(t.descr)+"\n    "),t._t("verified")],2)],2):t.textarea?e("label",{staticClass:"label"},[t.descr?e("p",{staticClass:"label-text"},[t._v("\n    "+t._s(t.descr)+"\n  ")]):t._e(),t._v(" "),e("textarea",{ref:"input",staticClass:"input textarea",class:t.view?t.viewStyle:"",attrs:{placeholder:t.placeholderText,rows:t.rows},domProps:{value:t.modelValue},on:{input:function(e){return t.typedText()}}})]):e("label",{staticClass:"label",class:t.inputRequired?"label--required":""},[t.descr?e("p",{staticClass:"label-text"},[t._v("\n    "+t._s(t.descr)+" \n  ")]):t._e(),t._v(" "),t._t("default"),t._v(" "),"checkbox"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"input",staticClass:"input",class:t.view?t.viewStyle:"",attrs:{placeholder:t.placeholderText,required:t.inputRequired,readonly:t.isReadonly,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{input:t.typedText,change:function(e){var n=t.value,r=e.target,l=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&(t.value=n.concat([null])):o>-1&&(t.value=n.slice(0,o).concat(n.slice(o+1)))}else t.value=l}}}):"radio"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"input",staticClass:"input",class:t.view?t.viewStyle:"",attrs:{placeholder:t.placeholderText,required:t.inputRequired,readonly:t.isReadonly,type:"radio"},domProps:{checked:t._q(t.value,null)},on:{input:t.typedText,change:function(e){t.value=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"input",staticClass:"input",class:t.view?t.viewStyle:"",attrs:{placeholder:t.placeholderText,required:t.inputRequired,readonly:t.isReadonly,type:t.type},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.typedText]}})],2)}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{socials:[{href:"https://www.instagram.com",type:"telegram",img:n(286)},{href:"#",type:"twitter",img:n(287)},{href:"#",type:"discord",img:n(288)}]}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"socials"},t._l(t.socials,(function(t){return e("li",{key:t.type,staticClass:"socials__item"},[e("a",{staticClass:"socials__link",class:"telegram"==t.type?"social__link--telegram":"",attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.img,alt:""}})])])})),0)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){t.exports=n.p+"img/cover-graphic.ccfba62.png"},293:function(t,e,n){t.exports=n.p+"img/about-graphic.303c30f.png"},294:function(t,e,n){t.exports=n.p+"img/character-graphic.e65b9cc.png"},295:function(t,e,n){t.exports=n.p+"img/collection-1.0e88afe.jpg"},296:function(t,e,n){t.exports=n.p+"img/collection-2.fdc02f2.jpg"},297:function(t,e,n){t.exports=n.p+"img/collection-3.d940d7b.jpg"},298:function(t,e,n){t.exports=n.p+"img/collection-4.2bc975e.jpg"},299:function(t,e,n){t.exports=n.p+"img/collection-5.d00f6a6.jpg"},300:function(t,e,n){t.exports=n.p+"img/collection-6.0df07df.jpg"},301:function(t,e,n){t.exports=n.p+"img/collection-7.cd650f4.jpg"},302:function(t,e,n){t.exports=n.p+"img/collection-8.1d53a9f.jpg"},303:function(t,e,n){t.exports=n.p+"img/roadmap-1.9750ad9.png"},304:function(t,e,n){t.exports=n.p+"img/roadmap-2.54f9a8f.png"},305:function(t,e,n){t.exports=n.p+"img/roadmap-3.c2c9287.png"},306:function(t,e,n){t.exports=n.p+"img/roadmap-4.149a003.png"},308:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{menuOpened:!1}},computed:{menuIsOpen:function(){return this.menuOpened?"header__menu--active":""}},methods:{toggleMenu:function(){this.menuOpened=!this.menuOpened}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__inner"},[e("app-logo"),t._v(" "),e("header-nav"),t._v(" "),e("app-button",{attrs:{title:"Donate project"}}),t._v(" "),e("button",{staticClass:"header__menu-btn btn-clear",on:{click:function(e){return t.toggleMenu()}}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")])],1)]),t._v(" "),e("div",{staticClass:"header__menu",class:[t.menuIsOpen],on:{click:function(e){return t.toggleMenu()}}},[e("header-nav"),t._v(" "),e("app-button",{attrs:{title:"Donate project"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLogo:n(281).default,HeaderNav:n(289).default,AppButton:n(277).default})},309:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"cover__graphic"},[e("div",{staticClass:"cover__graphic-top"},[e("img",{attrs:{src:n(181),alt:"corner graphic"}}),t._v(" "),e("img",{attrs:{src:n(181),alt:"corner graphic"}})]),t._v(" "),e("div",{staticClass:"cover__graphic-bottom"},[e("img",{attrs:{src:n(181),alt:"corner graphic"}}),t._v(" "),e("img",{attrs:{src:n(181),alt:"corner graphic"}})])])}],l={data:function(){return{info:{title:"Buy NFT and get Bonuses in the future.",descr:"Buy NFT and get priority in the game x2, x5, x10 depending on the rarity of NFT.",btnTitle:"Coming Soon",img:n(292)}}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"cover",attrs:{id:"cover"}},[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"cover__inner"},[e("div",{staticClass:"cover__info"},[e("p",{staticClass:"cover__title title title--main"},[t._v("\n          "+t._s(t.info.title)+"\n        ")]),t._v(" "),e("p",{staticClass:"cover__descr"},[t._v("\n          "+t._s(t.info.descr)+"\n        ")]),t._v(" "),e("app-button",{attrs:{big:"",title:t.info.btnTitle}})],1),t._v(" "),e("div",{staticClass:"cover__imgwrapper"},[e("img",{attrs:{src:t.info.img,alt:""}})])])])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:n(277).default})},310:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{info:{title:"A little bit about our startup",descr:["We are a team of creative people who want to create a modern, high-quality and interesting project.",'Our goal is to develop a full-fledged video game called "Legend of Elvion". The game will be in the genre of action-adventure with an open world and RPG elements.',"We also plan to link our game with the crypto world in order to remove the boundaries of virtual reality."],img:n(293)}}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"about",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"about__inner"},[e("div",{staticClass:"about__info"},[e("h6",{staticClass:"about__title title"},[t._v("\n          "+t._s(t.info.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"about__descr"},t._l(t.info.descr,(function(n){return e("p",{key:n,staticClass:"about__descr-paragraph"},[t._v("\n            "+t._s(" "+n)+"\n          ")])})),0)]),t._v(" "),e("div",{staticClass:"about__imgwrapper"},[e("img",{attrs:{src:t.info.img,alt:""}})])])])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{info:{title:"Character development",descr:["We are a team of creative people who want to create a modern, high-quality and interesting project.",'Our goal is to develop a full-fledged video game called "Legend of Elvion". The game will be in the genre of action-adventure with an open world and RPG elements.',"We also plan to link our game with the crypto world in order to remove the boundaries of virtual reality."],img:n(294)}}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"character",attrs:{id:"development"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"character__inner"},[e("div",{staticClass:"character__info"},[e("h6",{staticClass:"character__title title"},[t._v("\n          "+t._s(t.info.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"character__descr"},t._l(t.info.descr,(function(n){return e("p",{key:n,staticClass:"character__descr-paragraph"},[t._v("\n            "+t._s(" "+n)+"\n          ")])})),0)]),t._v(" "),e("div",{staticClass:"character__imgwrapper"},[e("img",{attrs:{src:t.info.img,alt:""}})])])])])}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(59),{data:function(){return{isError:!1,info:{title:"Support our project",btnTitle:"Copy",wallet:"2qPiTAMwqzboSFn8GfWsedK5B5UFn8GfWsedK5Af"}}},methods:{copyWallet:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t.info.wallet);case 3:t.$refs.walletInput.$el.children[0].focus(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),t.isError=!0,t.$refs.walletInput.$el.children[0].focus();case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"support"},[e("div",{staticClass:"container"},[e("div",{staticClass:"support__inner"},[e("h6",{staticClass:"support__title title"},[t._v("\n        "+t._s(t.info.title)+"\n      ")]),t._v(" "),e("form",{staticClass:"support__form",on:{submit:function(e){return e.preventDefault(),t.copyWallet.apply(null,arguments)}}},[e("app-input",{ref:"walletInput",attrs:{value:t.info.wallet,isReadonly:"",view:t.isError?"error":""}}),t._v(" "),e("app-button",{attrs:{title:t.info.btnTitle,view:"copy",btnType:"submit"}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16.909 0L3.81805 0C2.61805 0 1.63623 0.981818 1.63623 2.18182L1.63623 17.4545H3.81805L3.81805 2.18182H16.909V0ZM20.1817 4.36364H8.18168C6.98168 4.36364 5.99987 5.34545 5.99987 6.54545V21.8182C5.99987 23.0182 6.98168 24 8.18168 24H20.1817C21.3817 24 22.3635 23.0182 22.3635 21.8182V6.54545C22.3635 5.34545 21.3817 4.36364 20.1817 4.36364ZM20.1817 21.8182H8.18168V6.54545H20.1817V21.8182Z",fill:"white"}})])])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppInput:n(290).default,AppButton:n(277).default})},313:function(t,e,n){"use strict";n.r(e);var r=n(27),l=n(316),o=(n(307),{mounted:function(){var t;new l.a(this.$refs.swiper,(t={loop:!0,slidesPerView:4,slidesPerGroup:1,spaceBetween:30},Object(r.a)(t,"loop",!0),Object(r.a)(t,"pagination",{el:".swiper-pagination",clickable:!0}),Object(r.a)(t,"breakpoints",{320:{slidesPerView:1},460:{slidesPerView:2},768:{slidesPerView:3,spaceBetween:20},1100:{slidesPerView:4,spaceBetween:30}}),t))},data:function(){return{info:{title:"NFT Collection",descr:" We are a team of creative people who want to create a modern, high-quality and interesting project.",items:[{id:1,img:n(295)},{id:2,img:n(296)},{id:3,img:n(297)},{id:4,img:n(298)},{id:5,img:n(299)},{id:6,img:n(300)},{id:7,img:n(301)},{id:8,img:n(302)}]}}},components:{Swiper:l.a}}),c=n(43),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"collection",attrs:{id:"collection"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"collection__inner"},[e("h6",{staticClass:"collection__title title title--wreath"},[t._v("\n        "+t._s(t.info.title)+"        \n      ")]),t._v(" "),e("p",{staticClass:"collection__descr"},[t._v("\n        "+t._s(t.info.descr)+"        \n      ")])])]),t._v(" "),e("div",{staticClass:"collection__swiper-overwrapper"},[e("div",{ref:"swiper",staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.info.items,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.img,alt:""}})])})),0),t._v(" "),e("div",{staticClass:"swiper-pagination"})])])])}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{info:{title:"Roadmap",descr:"We are a team of creative people who want to create a modern, high-quality and interesting project.",items:[{id:0,title:"The first point",img:n(303),list:["Discussion of the idea","Team formation.","Distribution of tasks and their execution"]},{id:1,title:"Second point",img:n(304),list:["Development of the NFT collection","Game scenario development."]},{id:2,title:"The third point",img:n(305),list:["Launching social media","Launching a website.","Publication of 8000 NFT on Solana"]},{id:3,title:"The fourth point",img:n(306),list:["Sale of the NFT collection","The beginning of game development."]}]}}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"roadmap",attrs:{id:"roadmap"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"roadmap__inner"},[e("h6",{staticClass:"roadmap__title title title--wreath"},[t._v("\n        "+t._s(t.info.title)+"        \n      ")]),t._v(" "),e("p",{staticClass:"roadmap__descr"},[t._v("\n        "+t._s(t.info.descr)+"        \n      ")]),t._v(" "),e("ul",{staticClass:"roadmap__list"},t._l(t.info.items,(function(n){return e("li",{key:n.id,staticClass:"roadmap__item"},[e("div",{staticClass:"roadmap__list-img"},[e("img",{attrs:{src:n.img,alt:""}})]),t._v(" "),e("p",{staticClass:"roadmap__item-title"},[t._v("\n            "+t._s(n.title)+"\n            "),e("span",[t._v("\n              "+t._s(n.title)+"\n            ")])]),t._v(" "),e("ul",{staticClass:"roadmap__points"},t._l(n.list,(function(n){return e("li",{key:n,staticClass:"roadmap__point",domProps:{innerHTML:t._s(n)}})})),0)])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{info:{copyright:"2022 Startup. All rights reserved."}}}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__inner"},[e("app-logo"),t._v(" "),e("p",{staticClass:"footer__copyright"},[e("span",{staticClass:"footer__copyright--roboted"},[t._v("\n          ©  \n        ")]),t._v("  \n        "+t._s(t.info.copyright)+"\n      ")]),t._v(" "),e("app-socials")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLogo:n(281).default,AppSocials:n(291).default})},318:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage",data:function(){return{headerFloats:!1}},methods:{handleScrollHeader:function(){var t=window.pageYOffset;this.headerFloats=t>=80}},beforeMount:function(){window.addEventListener("scroll",this.handleScrollHeader)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScrollHeader)}},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("app-header",{class:t.headerFloats?"header--floats":""}),t._v(" "),e("index-cover"),t._v(" "),e("index-about"),t._v(" "),e("index-character"),t._v(" "),e("index-support"),t._v(" "),e("index-collection"),t._v(" "),e("index-roadmap"),t._v(" "),e("app-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHeader:n(308).default,IndexCover:n(309).default,IndexAbout:n(310).default,IndexCharacter:n(311).default,IndexSupport:n(312).default,IndexCollection:n(313).default,IndexRoadmap:n(314).default,AppFooter:n(315).default})}}]);