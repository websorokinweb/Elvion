(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{276:function(e,t,l){"use strict";l(58);t.a={methods:{scrollToSection:function(e){"#"===e[0]&&(e=e.slice(1));var t=document.querySelector("#"+e).offsetTop-80;window.scroll({top:t,left:0,behavior:"smooth"})}}}},292:function(e,t,l){"use strict";l.r(t);var n={data:function(){return{links:[{label:"About",href:"about"},{label:"Development",href:"development"},{label:"NFT",href:"collection"},{label:"Roadmap",href:"roadmap"}]}},mixins:[l(276).a]},o=l(43),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"header__nav"},[t("ul",{staticClass:"header__nav-list"},e._l(e.links,(function(l){return t("li",{key:l.label,staticClass:"header__nav-item"},[t("a",{staticClass:"header__nav-link nav-link",attrs:{href:"#"+l.href},on:{click:function(t){return t.preventDefault(),e.scrollToSection(l.href)}}},[e._v("\n        "+e._s(l.label)+"\n      ")])])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);