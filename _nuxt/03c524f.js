(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,6],{289:function(e,t,l){var n=l(3),r=l(27),o=l(15),c=/"/g,d=n("".replace);e.exports=function(e,t,l,n){var f=o(r(e)),v="<"+t;return""!==l&&(v+=" "+l+'="'+d(o(n),c,"&quot;")+'"'),v+">"+f+"</"+t+">"}},290:function(e,t,l){var n=l(4);e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},292:function(e,t,l){"use strict";l.r(t);l(293),l(294);var n={props:{title:{type:String,required:!0},pagesLink:{type:Boolean,default:!1},link:{type:Boolean,default:!1},href:{type:String,default:""},custom:{type:Object,default:null},view:{type:String,default:"pink"},big:{type:Boolean,default:!1},btnType:{type:String,default:"button"}},computed:{useStyle:function(){return"btn--"+this.view}}},r=l(36),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return e.link||e.pagesLink?e.pagesLink?t("router-link",{staticClass:"btn",class:[e.useStyle,this.big?"btn--big":""],attrs:{to:null===e.custom?e.href:e.custom}},[e._t("default"),e._v("\n  "+e._s(e.title)+"\n")],2):e.link?t("a",{staticClass:"btn",class:[e.useStyle,this.big?"btn--big":""],attrs:{href:e.href,target:"_blank"}},[e._t("default"),e._v("\n  "+e._s(e.title)+"\n")],2):e._e():t("button",{staticClass:"btn",class:[e.useStyle,this.big?"btn--big":""],attrs:{type:e.btnType}},[e._t("default"),e._v("\n  "+e._s(e.title)+"\n")],2)}),[],!1,null,null,null);t.default=component.exports},293:function(e,t,l){"use strict";var n=l(2),r=l(289);n({target:"String",proto:!0,forced:l(290)("link")},{link:function(e){return r(this,"a","href",e)}})},294:function(e,t,l){"use strict";var n=l(2),r=l(289);n({target:"String",proto:!0,forced:l(290)("big")},{big:function(){return r(this,"big","","")}})},301:function(e,t,l){"use strict";l.r(t);var n=l(10),r=(l(43),l(48),l(144),{props:{value:{type:String,required:!0},rows:{type:Number,default:5},inputRequired:{type:Boolean,default:!1},descr:{type:String,required:!1},placeholderText:{type:String,required:!1},view:{type:String,required:!1},type:{type:String,default:"text"},radio:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1},textarea:{type:Boolean,default:!1},checkboxValue:{type:String,required:!1},checkboxName:{type:String,required:!1},checkboxChecked:{type:Boolean,default:!1},verified:{type:Boolean,required:!1},isReadonly:{type:Boolean,default:!1}},data:function(){return{inputValue:""}},mounted:function(){this.radio&this.checkboxChecked&&(this.inputValue=this.checkboxValue,this.$emit("choosed",this.inputValue))},methods:{typedText:function(e){this.$emit("update:modelValue",e.target.value)},toggledCheckbox:function(){this.$emit("choosed",this.checkboxValue)}},computed:{viewStyle:function(){return"input--"+this.view},verifiedView:function(){return this.verified?"label--verified":""}},emits:["choosed","update:modelValue"]}),o=l(36),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.radio?t("label",{staticClass:"label",class:e.verifiedView},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"checkbox",attrs:{type:"radio",name:e.checkboxName,required:e.inputRequired},domProps:Object(n.a)({value:e.checkboxValue,checked:e.checkboxChecked},"checked",e._q(e.inputValue,e.checkboxValue)),on:{change:[function(t){e.inputValue=e.checkboxValue},function(t){return e.toggledCheckbox()}]}}),e._v(" "),e._t("default"),e._v(" "),t("span",{staticClass:"label-text"},[e._v("\n    "+e._s(e.descr)+"\n    "),e._t("verified")],2)],2):e.checkbox?t("label",{staticClass:"label",class:e.verifiedView},[t("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:e.checkboxValue},on:{change:function(t){return e.toggledCheckbox()}}}),e._v(" "),e._t("default"),e._v(" "),t("span",{staticClass:"label-text"},[e._v("\n    "+e._s(e.descr)+"\n    "),e._t("verified")],2)],2):e.textarea?t("label",{staticClass:"label"},[e.descr?t("p",{staticClass:"label-text"},[e._v("\n    "+e._s(e.descr)+"\n  ")]):e._e(),e._v(" "),t("textarea",{ref:"input",staticClass:"input textarea",class:e.view?e.viewStyle:"",attrs:{placeholder:e.placeholderText,rows:e.rows},domProps:{value:e.modelValue},on:{input:function(t){return e.typedText()}}})]):t("label",{staticClass:"label",class:e.inputRequired?"label--required":""},[e.descr?t("p",{staticClass:"label-text"},[e._v("\n    "+e._s(e.descr)+" \n  ")]):e._e(),e._v(" "),e._t("default"),e._v(" "),"checkbox"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"input",staticClass:"input",class:e.view?e.viewStyle:"",attrs:{placeholder:e.placeholderText,required:e.inputRequired,readonly:e.isReadonly,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{input:e.typedText,change:function(t){var l=e.value,n=t.target,r=!!n.checked;if(Array.isArray(l)){var o=e._i(l,null);n.checked?o<0&&(e.value=l.concat([null])):o>-1&&(e.value=l.slice(0,o).concat(l.slice(o+1)))}else e.value=r}}}):"radio"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"input",staticClass:"input",class:e.view?e.viewStyle:"",attrs:{placeholder:e.placeholderText,required:e.inputRequired,readonly:e.isReadonly,type:"radio"},domProps:{checked:e._q(e.value,null)},on:{input:e.typedText,change:function(t){e.value=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"input",staticClass:"input",class:e.view?e.viewStyle:"",attrs:{placeholder:e.placeholderText,required:e.inputRequired,readonly:e.isReadonly,type:e.type},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.typedText]}})],2)}),[],!1,null,null,null);t.default=component.exports},308:function(e,t,l){"use strict";l.r(t);var n=l(8),r=(l(49),{data:function(){return{isError:!1,info:{title:"Support our project",btnTitle:"Copy",wallet:"2qPiTAMwqzboSFn8GfWsedK5B5UFn8GfWsedK5Af"}}},methods:{copyWallet:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e.info.wallet);case 3:e.$refs.walletInput.$el.children[0].focus(),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),e.isError=!0,e.$refs.walletInput.$el.children[0].focus();case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}}),o=l(36),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"support"},[t("div",{staticClass:"container"},[t("div",{staticClass:"support__inner"},[t("h6",{staticClass:"support__title title"},[e._v("\n        "+e._s(e.info.title)+"\n      ")]),e._v(" "),t("form",{staticClass:"support__form",on:{submit:function(t){return t.preventDefault(),e.copyWallet.apply(null,arguments)}}},[t("app-input",{ref:"walletInput",attrs:{value:e.info.wallet,isReadonly:"",view:e.isError?"error":""}}),e._v(" "),t("app-button",{attrs:{title:e.info.btnTitle,view:"copy",btnType:"submit"}},[t("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M16.909 0L3.81805 0C2.61805 0 1.63623 0.981818 1.63623 2.18182L1.63623 17.4545H3.81805L3.81805 2.18182H16.909V0ZM20.1817 4.36364H8.18168C6.98168 4.36364 5.99987 5.34545 5.99987 6.54545V21.8182C5.99987 23.0182 6.98168 24 8.18168 24H20.1817C21.3817 24 22.3635 23.0182 22.3635 21.8182V6.54545C22.3635 5.34545 21.3817 4.36364 20.1817 4.36364ZM20.1817 21.8182H8.18168V6.54545H20.1817V21.8182Z",fill:"white"}})])])],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppInput:l(301).default,AppButton:l(292).default})}}]);