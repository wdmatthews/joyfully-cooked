(window.webpackJsonp=window.webpackJsonp||[]).push([[23,13],{361:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("63c9496b",content,!0,{sourceMap:!1})},362:function(t,e,n){var r=n(26)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat+Alternates:300,400,700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Fredoka+One&display=swap);"]),r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:1rem}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:6rem 1rem}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},363:function(t,e,n){"use strict";n.r(e);var r={data:function(t){return{isVisible:!1,message:"",color:"",icon:""}},methods:{show:function(t,e,n){this.message=t,this.color=e,this.icon=n,this.isVisible=!0}}},o=n(56),c=n(64),l=n.n(c),d=n(344),f=n(366),v=n(178),h=n(352),m=n(2),k=(n(35),n(50),n(58),n(361),n(85)),_=n(57),x=n(38),y=n(70),w=n(84),O=n(16),j=n(1),C=n(7),S=Object(O.a)(k.a,_.a,y.a,Object(w.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:x.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(j.g)(n+footer+r),paddingLeft:this.app?Object(j.g)(o):void 0,paddingRight:this.app?Object(j.g)(c):void 0,paddingTop:Object(j.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(C.e)("auto-height",this),0==this.timeout&&Object(C.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(j.r)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(m.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(j.r)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:k.a.options.computed.classes.call(this),style:k.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{"content-class":"pa-2",color:t.color},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({staticClass:"text-button",attrs:{outlined:"",text:""},on:{click:function(e){t.isVisible=!1}}},"v-btn",r,!1),[n("v-icon",{attrs:{left:""}},[t._v("\n        fas fa-times\n      ")]),t._v("\n      Close\n    ")],1)]}}]),model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-icon",[t._v("\n      fas fa-"+t._s(t.icon)+"\n    ")]),t._v(" "),n("v-col",{staticClass:"pl-2"},[n("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(t.message))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:f.a,VIcon:v.a,VRow:h.a,VSnackbar:S})},366:function(t,e,n){"use strict";n(9),n(13),n(18),n(19);var r=n(2),o=(n(35),n(14),n(28),n(53),n(234),n(15),n(45),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(51),n(50),n(12),n(79),n(248),n(0)),c=n(109),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),k=v.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(k)};function x(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var y=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=y.get(l);return f||function(){var t,e;for(e in f=[],_)_[e].forEach((function(t){var r=n[t],o=x(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},397:function(t,e,n){"use strict";n.r(e);var r={props:{value:{type:String,default:""}},data:function(t){return{rules:[function(t){return!t||t.length<=32||"Max 32 characters"}]}}},o=n(56),c=n(64),l=n.n(c),d=n(481),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",{attrs:{label:"Password",outlined:"",dense:"","prepend-icon":"fas fa-key",hint:"8-32 characters",type:"password",rules:t.rules,value:t.value},on:{input:function(e){return t.$emit("input",e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("enter")}}})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VTextField:d.a})},406:function(t,e,n){"use strict";n.r(e);var r={props:{value:{type:String,default:""}}},o=n(56),c=n(64),l=n.n(c),d=n(481),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",{attrs:{label:"Email",outlined:"",dense:"","prepend-icon":"fas fa-envelope",value:t.value},on:{input:function(e){return t.$emit("input",e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("enter")}}})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VTextField:d.a})},493:function(t,e,n){"use strict";n.r(e);var r={data:function(t){return{email:"",password:""}},head:function(t){return{title:"Sign Up"}},computed:{formIsValid:function(){var t=this.password.length;return this.email&&t>=8&&t<=32}},mounted:function(){this.$store.state.userId&&this.$router.push("/menu")},methods:{signUp:function(){this.formIsValid&&(this.$store.commit("setUserId","1"),this.$store.commit("setUserRole","customer"),this.$router.push("/menu"))}}},o=n(56),c=n(64),l=n.n(c),d=n(344),f=n(414),v=n(359),h=n(178),m=n(352),k=n(354),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"pa-4",staticStyle:{height:"100%"},attrs:{"no-gutters":"",justify:"center",align:"center"}},[n("v-card",{staticClass:"blue-grey darken-4"},[n("v-card-title",{staticClass:"text-h5 blue-grey darken-3"},[n("span",{staticClass:"mx-auto"},[t._v("Sign Up")])]),t._v(" "),n("v-card-text",{staticClass:"px-4 pt-4 pb-0"},[n("email-field",{staticClass:"mb-n1",on:{enter:t.signUp},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("password-field",{staticClass:"mb-n1",on:{enter:t.signUp},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("v-card-actions",{staticClass:"px-4 pt-0 pb-4"},[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"text-button",attrs:{color:"primary",outlined:"",disabled:!t.formIsValid},on:{click:t.signUp}},[n("v-icon",{attrs:{left:""}},[t._v("\n          fas fa-user-plus\n        ")]),t._v("\n        Sign Up\n      ")],1),t._v(" "),n("v-spacer")],1)],1),t._v(" "),n("response-snackbar",{ref:"responseSnackbar"})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{EmailField:n(406).default,PasswordField:n(397).default,ResponseSnackbar:n(363).default}),l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VIcon:h.a,VRow:m.a,VSpacer:k.a})}}]);