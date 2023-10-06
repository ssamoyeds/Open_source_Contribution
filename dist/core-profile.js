/*! For license information please see core-profile.js.LICENSE.txt */
!function(){"use strict";var n,e,a,r={43650:function(n,e,a){var r,i=a(20144),o=a(77958),A=a(31352),l=a(2324),s=a(17499),c=null===(r=(0,o.ts)())?(0,s.IY)().setApp("core").build():(0,s.IY)().setApp("core").setUid(r.uid).build();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){C(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function C(t,n,e){return(n=function(t){var n=function(t,n){if("object"!==d(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var a=e.call(t,"string");if("object"!==d(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f=a(69183),g=a(43554),v=a(79753),_=a(64024),m=a(18519),h=a(3349),b=a(74176),x={name:"MapMarkerIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=a(51900),w=(0,y.Z)(x,(function(){var t=this,n=t._self._c;return n("span",t._b({staticClass:"material-design-icon map-marker-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(n){return t.$emit("click",n)}}},"span",t.$attrs,!1),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"}},[t.title?n("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,k=a(73229),B={name:"AccountIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},I=(0,y.Z)(B,(function(){var t=this,n=t._self._c;return n("span",t._b({staticClass:"material-design-icon account-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(n){return t.$emit("click",n)}}},"span",t.$attrs,!1),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}},[t.title?n("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,S={name:"PrimaryActionButton",props:{disabled:{type:Boolean,default:!1},href:{type:String,required:!0},icon:{type:String,required:!0},target:{type:String,required:!0,validator:function(t){return["_self","_blank","_parent","_top"].includes(t)}}},computed:{colorPrimaryText:function(){return getComputedStyle(document.body).getPropertyValue("--color-primary-element-text").trim()}}},j=a(93379),M=a.n(j),D=a(7795),Z=a.n(D),P=a(90569),E=a.n(P),O=a(3565),z=a.n(O),L=a(19216),N=a.n(L),T=a(44589),G=a.n(T),Y=a(34949),U={};U.styleTagTransform=G(),U.setAttributes=z(),U.insert=E().bind(null,"head"),U.domAPI=Z(),U.insertStyleElement=N(),M()(Y.Z,U),Y.Z&&Y.Z.locals&&Y.Z.locals;var W=(0,y.Z)(S,(function(){var t=this,n=t._self._c;return n("a",t._g({staticClass:"profile__primary-action-button",class:{disabled:t.disabled},attrs:{href:t.href,target:t.target,rel:"noopener noreferrer nofollow"}},t.$listeners),[n("img",{staticClass:"icon",class:[t.icon,{"icon-invert":"#ffffff"===t.colorPrimaryText}],attrs:{src:t.icon}}),t._v(" "),t._t("default")],2)}),[],!1,null,"5b5fe9f6",null).exports,R=(0,g.j)("core","status",{}),H=(0,g.j)("core","profileParameters",{userId:null,displayname:null,address:null,organisation:null,role:null,headline:null,biography:null,actions:[],isUserAvatarVisible:!1}),F=H.userId,$=H.displayname,q=H.address,Q=H.organisation,V=H.role,X=H.headline,J=H.biography,K=H.actions,tt=H.isUserAvatarVisible,nt={name:"Profile",components:{AccountIcon:I,NcActionLink:b.Z,NcActions:h.Z,NcAvatar:m.Z,MapMarkerIcon:w,PencilIcon:k.default,PrimaryActionButton:W},data:function(){return{status:R,userId:F,displayname:$,address:q,organisation:Q,role:V,headline:X,biography:J,actions:K,isUserAvatarVisible:tt,sections:OCA.Core.ProfileSections.getSections()}},computed:{isCurrentUser:function(){var t;return(null===(t=(0,o.ts)())||void 0===t?void 0:t.uid)===this.userId},allActions:function(){return this.actions},primaryAction:function(){return this.allActions.length?this.allActions[0]:null},middleActions:function(){return this.allActions.slice(1,4).length?this.allActions.slice(1,4):null},otherActions:function(){return this.allActions.slice(4).length?this.allActions.slice(4):null},settingsUrl:function(){return(0,v.generateUrl)("/settings/user")},colorMainBackground:function(){return getComputedStyle(document.body).getPropertyValue("--color-main-background").trim()},emptyProfileMessage:function(){return this.isCurrentUser?t("core","You have not added any info yet"):t("core","{user} has not added any info yet",{user:this.displayname||this.userId})}},mounted:function(){document.title="".concat(this.displayname||this.userId," - ").concat(document.title),(0,f.Ld)("user_status:status.updated",this.handleStatusUpdate)},beforeDestroy:function(){(0,f.r1)("user_status:status.updated",this.handleStatusUpdate)},methods:{handleStatusUpdate:function(t){this.isCurrentUser&&t.userId===this.userId&&(this.status=t)},openStatusModal:function(){var n=document.querySelector(".user-status-menu-item__toggle");this.isCurrentUser&&(n?n.click():(0,_.x2)(t("core","Error opening the user status modal, try hard refreshing the page")))}}},et=a(41724),at={};at.styleTagTransform=G(),at.setAttributes=z(),at.insert=E().bind(null,"head"),at.domAPI=Z(),at.insertStyleElement=N(),M()(et.Z,at),et.Z&&et.Z.locals&&et.Z.locals;var rt=a(31487),it={};it.styleTagTransform=G(),it.setAttributes=z(),it.insert=E().bind(null,"head"),it.domAPI=Z(),it.insertStyleElement=N(),M()(rt.Z,it),rt.Z&&rt.Z.locals&&rt.Z.locals;var ot=(0,y.Z)(nt,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"profile"},[n("div",{staticClass:"profile__header"},[n("div",{staticClass:"profile__header__container"},[n("div",{staticClass:"profile__header__container__placeholder"}),t._v(" "),n("h2",{staticClass:"profile__header__container__displayname"},[t._v("\n\t\t\t\t"+t._s(t.displayname||t.userId)+"\n\t\t\t\t"),t.isCurrentUser?n("a",{staticClass:"primary profile__header__container__edit-button",attrs:{href:t.settingsUrl}},[n("PencilIcon",{staticClass:"pencil-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t"+t._s(t.t("core","Edit Profile"))+"\n\t\t\t\t")],1):t._e()]),t._v(" "),t.status.icon||t.status.message?n("div",{staticClass:"profile__header__container__status-text",class:{interactive:t.isCurrentUser},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.openStatusModal.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.status.icon)+" "+t._s(t.status.message)+"\n\t\t\t")]):t._e()])]),t._v(" "),n("div",{staticClass:"profile__wrapper"},[n("div",{staticClass:"profile__content"},[n("div",{staticClass:"profile__sidebar"},[n("NcAvatar",{staticClass:"avatar",class:{interactive:t.isCurrentUser},attrs:{user:t.userId,size:180,"show-user-status":!0,"show-user-status-compact":!1,"disable-menu":!0,"disable-tooltip":!0,"is-no-user":!t.isUserAvatarVisible},nativeOn:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.openStatusModal.apply(null,arguments)}}}),t._v(" "),n("div",{staticClass:"user-actions"},[t.primaryAction?n("PrimaryActionButton",{staticClass:"user-actions__primary",attrs:{href:t.primaryAction.target,icon:t.primaryAction.icon,target:"phone"===t.primaryAction.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.primaryAction.title)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),n("div",{staticClass:"user-actions__other"},[t._l(t.middleActions,(function(e){return n("NcActions",{key:e.id,staticStyle:{"background-position":"14px center","background-size":"16px","background-repeat":"no-repeat"},style:u({backgroundImage:"url(".concat(e.icon,")")},"#181818"===t.colorMainBackground&&{filter:"invert(1)"}),attrs:{"default-icon":e.icon}},[n("NcActionLink",{attrs:{"close-after-click":!0,icon:e.icon,href:e.target,target:"phone"===e.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t")])],1)})),t._v(" "),t.otherActions?[n("NcActions",{attrs:{"force-menu":!0}},t._l(t.otherActions,(function(e){return n("NcActionLink",{key:e.id,class:{"icon-invert":"#181818"===t.colorMainBackground},attrs:{"close-after-click":!0,icon:e.icon,href:e.target,target:"phone"===e.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])})),1)]:t._e()],2)],1)],1),t._v(" "),n("div",{staticClass:"profile__blocks"},[t.organisation||t.role||t.address?n("div",{staticClass:"profile__blocks-details"},[t.organisation||t.role?n("div",{staticClass:"detail"},[n("p",[t._v(t._s(t.organisation)+" "),t.organisation&&t.role?n("span",[t._v("•")]):t._e(),t._v(" "+t._s(t.role))])]):t._e(),t._v(" "),t.address?n("div",{staticClass:"detail"},[n("p",[n("MapMarkerIcon",{staticClass:"map-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t\t\t")],1)]):t._e()]):t._e(),t._v(" "),t.headline||t.biography||t.sections.length>0?[t.headline?n("div",{staticClass:"profile__blocks-headline"},[n("h3",[t._v(t._s(t.headline))])]):t._e(),t._v(" "),t.biography?n("div",{staticClass:"profile__blocks-biography"},[n("p",[t._v(t._s(t.biography))])]):t._e(),t._v(" "),t._l(t.sections,(function(e,a){return n("div",{key:a,ref:"section-"+a,refInFor:!0,staticClass:"profile__additionalContent"},[n(e(t.$refs["section-"+a],t.userId),{tag:"component",attrs:{userId:t.userId}})],1)}))]:[n("div",{staticClass:"profile__blocks-empty-info"},[n("AccountIcon",{attrs:{size:60,"fill-color":"var(--color-text-maxcontrast)"}}),t._v(" "),n("h3",[t._v(t._s(t.emptyProfileMessage))]),t._v(" "),n("p",[t._v(t._s(t.t("core","The headline and about sections will show up here")))])],1)]],2)])])])}),[],!1,null,"aa059862",null),At=ot.exports;function lt(t){return lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(t)}function st(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,ct(a.key),a)}}function ct(t){var n=function(t,n){if("object"!==lt(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var a=e.call(t,"string");if("object"!==lt(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===lt(n)?n:String(n)}var dt=function(){function t(){var n,e,a;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=void 0,(e=ct(e="_sections"))in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,this._sections=[]}var n,e;return n=t,(e=[{key:"registerSection",value:function(t){this._sections.push(t)}},{key:"getSections",value:function(){return this._sections}}])&&st(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();a.nc=btoa((0,o.IH)()),window.OCA||(window.OCA={}),window.OCA.Core||(window.OCA.Core={}),Object.assign(window.OCA.Core,{ProfileSections:new dt}),i.default.use(l.ZP),i.default.mixin({props:{logger:c},methods:{t:A.Iu}});var pt=i.default.extend(At);window.addEventListener("DOMContentLoaded",(function(){(new pt).$mount("#vue-profile")}))},34949:function(t,n,e){var a=e(87537),r=e.n(a),i=e(23645),o=e.n(i)()(r());o.push([t.id,".profile__primary-action-button[data-v-5b5fe9f6]{font-size:var(--default-font-size);font-weight:bold;width:188px;height:44px;padding:0 16px;line-height:44px;text-align:center;border-radius:var(--border-radius-pill);color:var(--color-primary-element-text);background-color:var(--color-primary-element);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.profile__primary-action-button .icon[data-v-5b5fe9f6]{display:inline-block;vertical-align:middle;margin-bottom:2px;margin-right:4px}.profile__primary-action-button .icon.icon-invert[data-v-5b5fe9f6]{filter:invert(1)}.profile__primary-action-button[data-v-5b5fe9f6]:hover,.profile__primary-action-button[data-v-5b5fe9f6]:focus,.profile__primary-action-button[data-v-5b5fe9f6]:active{background-color:var(--color-primary-element-light)}","",{version:3,sources:["webpack://./core/src/components/Profile/PrimaryActionButton.vue"],names:[],mappings:"AACA,iDACC,kCAAA,CACA,gBAAA,CACA,WAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,uCAAA,CACA,uCAAA,CACA,6CAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,uDACC,oBAAA,CACA,qBAAA,CACA,iBAAA,CACA,gBAAA,CAEA,mEACC,gBAAA,CAIF,sKAGC,mDAAA",sourcesContent:["\n.profile__primary-action-button {\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\twidth: 188px;\n\theight: 44px;\n\tpadding: 0 16px;\n\tline-height: 44px;\n\ttext-align: center;\n\tborder-radius: var(--border-radius-pill);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-primary-element);\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tmargin-bottom: 2px;\n\t\tmargin-right: 4px;\n\n\t\t&.icon-invert {\n\t\t\tfilter: invert(1);\n\t\t}\n\t}\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n}\n"],sourceRoot:""}]),n.Z=o},41724:function(t,n,e){var a=e(87537),r=e.n(a),i=e(23645),o=e.n(i)()(r());o.push([t.id,"#header{background-color:rgba(0,0,0,0) !important;background-image:none !important}#content{padding-top:0px}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAEA,QACC,yCAAA,CACA,gCAAA,CAGD,SACC,eAAA",sourcesContent:["\n// Override header styles\n#header {\n\tbackground-color: transparent !important;\n\tbackground-image: none !important;\n}\n\n#content {\n\tpadding-top: 0px;\n}\n"],sourceRoot:""}]),n.Z=o},31487:function(t,n,e){var a=e(87537),r=e.n(a),i=e(23645),o=e.n(i)()(r());o.push([t.id,".profile[data-v-aa059862]{width:100%;overflow-y:auto}.profile__header[data-v-aa059862]{position:sticky;height:190px;top:-40px;background-color:var(--color-main-background-blur);backdrop-filter:var(--filter-background-blur);-webkit-backdrop-filter:var(--filter-background-blur)}.profile__header__container[data-v-aa059862]{align-self:flex-end;width:100%;max-width:1024px;margin:0 auto;display:grid;grid-template-rows:max-content max-content;grid-template-columns:240px 1fr;justify-content:center}.profile__header__container__placeholder[data-v-aa059862]{grid-row:1/3}.profile__header__container__displayname[data-v-aa059862],.profile__header__container__status-text[data-v-aa059862]{color:var(--color-main-text)}.profile__header__container__displayname[data-v-aa059862]{width:640px;height:45px;margin-top:128px;margin-bottom:0;font-size:30px;display:flex;align-items:center;cursor:text}.profile__header__container__displayname[data-v-aa059862]:not(:last-child){margin-top:100px;margin-bottom:4px}.profile__header__container__edit-button[data-v-aa059862]{border:none;margin-left:18px;margin-top:2px;color:var(--color-primary-element-text);background-color:var(--color-primary-element);box-shadow:0 0 0 2px var(--color-primary-element);border-radius:var(--border-radius-pill);padding:0 18px;font-size:var(--default-font-size);height:44px;line-height:44px;font-weight:bold}.profile__header__container__edit-button[data-v-aa059862]:hover,.profile__header__container__edit-button[data-v-aa059862]:focus,.profile__header__container__edit-button[data-v-aa059862]:active{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.profile__header__container__edit-button .pencil-icon[data-v-aa059862]{display:inline-block;vertical-align:middle;margin-top:2px}.profile__header__container__status-text[data-v-aa059862]{width:max-content;max-width:640px;padding:5px 10px;margin-left:-12px;margin-top:2px}.profile__header__container__status-text.interactive[data-v-aa059862]{cursor:pointer}.profile__header__container__status-text.interactive[data-v-aa059862]:hover,.profile__header__container__status-text.interactive[data-v-aa059862]:focus,.profile__header__container__status-text.interactive[data-v-aa059862]:active{background-color:var(--color-main-background);color:var(--color-main-text);border-radius:var(--border-radius-pill);font-weight:bold;box-shadow:0 3px 6px var(--color-box-shadow)}.profile__sidebar[data-v-aa059862]{position:sticky;top:var(--header-height);align-self:flex-start;padding-top:20px;min-width:220px;margin:-150px 20px 0 0}.profile__sidebar[data-v-aa059862] .avatar.avatardiv,.profile__sidebar h2[data-v-aa059862]{text-align:center;margin:auto;display:block;padding:8px}.profile__sidebar[data-v-aa059862] .avatar.avatardiv:not(.avatardiv--unknown){background-color:var(--color-main-background) !important;box-shadow:none}.profile__sidebar[data-v-aa059862] .avatar.avatardiv .avatardiv__user-status{right:14px;bottom:14px;width:34px;height:34px;background-size:28px;border:none;background-color:var(--color-main-background);line-height:34px;font-size:20px}.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status{cursor:pointer}.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status:hover,.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status:focus,.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status:active{box-shadow:0 3px 6px var(--color-box-shadow)}.profile__wrapper[data-v-aa059862]{background-color:var(--color-main-background);min-height:100%}.profile__content[data-v-aa059862]{max-width:1024px;margin:0 auto;display:flex;width:100%}.profile__blocks[data-v-aa059862]{margin:18px 0 80px 0;display:grid;gap:16px 0;width:640px}.profile__blocks p[data-v-aa059862],.profile__blocks h3[data-v-aa059862]{overflow-wrap:anywhere}.profile__blocks-details[data-v-aa059862]{display:flex;flex-direction:column;gap:2px 0}.profile__blocks-details .detail[data-v-aa059862]{display:inline-block;color:var(--color-text-maxcontrast)}.profile__blocks-details .detail p .map-icon[data-v-aa059862]{display:inline-block;vertical-align:middle}.profile__blocks-headline[data-v-aa059862]{margin-top:10px}.profile__blocks-headline h3[data-v-aa059862]{font-weight:bold;font-size:20px;margin:0}.profile__blocks-biography[data-v-aa059862]{white-space:pre-line}.profile__blocks h3[data-v-aa059862],.profile__blocks p[data-v-aa059862]{cursor:text}.profile__blocks-empty-info[data-v-aa059862]{margin-top:80px;margin-right:100px;display:flex;flex-direction:column;text-align:center}.profile__blocks-empty-info h3[data-v-aa059862]{font-weight:bold;font-size:18px;margin:8px 0}@media only screen and (max-width: 1024px){.profile__header[data-v-aa059862]{height:250px;position:unset}.profile__header__container[data-v-aa059862]{grid-template-columns:unset}.profile__header__container__displayname[data-v-aa059862]{margin:80px 20px 0px !important;height:1em;width:unset;display:unset;text-align:center}.profile__header__container__edit-button[data-v-aa059862]{width:fit-content;display:block;margin:60px auto}.profile__header__container__status-text[data-v-aa059862]{margin:4px auto}.profile__content[data-v-aa059862]{display:block}.profile__blocks[data-v-aa059862]{width:unset;max-width:600px;margin:0 auto;padding:20px 50px 50px 50px}.profile__blocks-empty-info[data-v-aa059862]{margin:0}.profile__sidebar[data-v-aa059862]{margin:unset;position:unset}}.user-actions[data-v-aa059862]{display:flex;flex-direction:column;gap:8px 0;margin-top:20px}.user-actions__primary[data-v-aa059862]{margin:0 auto}.user-actions__other[data-v-aa059862]{display:flex;justify-content:center;gap:0 4px}.user-actions__other a[data-v-aa059862]{filter:var(--background-invert-if-dark)}.icon-invert[data-v-aa059862] .action-link__icon{filter:invert(1)}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAIA,0BACC,UAAA,CACA,eAAA,CAEA,kCACC,eAAA,CACA,YAAA,CACA,SAAA,CACA,kDAAA,CACA,6CAAA,CACA,qDAAA,CAEA,6CACC,mBAAA,CACA,UAAA,CACA,gBAlBiB,CAmBjB,aAAA,CACA,YAAA,CACA,0CAAA,CACA,+BAAA,CACA,sBAAA,CAEA,0DACC,YAAA,CAGD,oHACC,4BAAA,CAGD,0DACC,WAjCgB,CAkChB,WAAA,CACA,gBAAA,CAEA,eAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,2EACC,gBAAA,CACA,iBAAA,CAIF,0DACC,WAAA,CACA,gBAAA,CACA,cAAA,CACA,uCAAA,CACA,6CAAA,CACA,iDAAA,CACA,uCAAA,CACA,cAAA,CACA,kCAAA,CACA,WAAA,CACA,gBAAA,CACA,gBAAA,CAEA,iMAGC,6CAAA,CACA,mDAAA,CAGD,uEACC,oBAAA,CACA,qBAAA,CACA,cAAA,CAIF,0DACC,iBAAA,CACA,eA/EgB,CAgFhB,gBAAA,CACA,iBAAA,CACA,cAAA,CAEA,sEACC,cAAA,CAEA,qOAGC,6CAAA,CACA,4BAAA,CACA,uCAAA,CACA,gBAAA,CACA,4CAAA,CAOL,mCACC,eAAA,CACA,wBAAA,CACA,qBAAA,CACA,gBAAA,CACA,eAAA,CACA,sBAAA,CAGA,2FACC,iBAAA,CACA,WAAA,CACA,aAAA,CACA,WAAA,CAGD,8EACC,wDAAA,CACA,eAAA,CAIA,6EACC,UAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,WAAA,CAEA,6CAAA,CACA,gBAAA,CACA,cAAA,CAKD,yFACC,cAAA,CAEA,8RAGC,4CAAA,CAMJ,mCACC,6CAAA,CACA,eAAA,CAGD,mCACC,gBA7JkB,CA8JlB,aAAA,CACA,YAAA,CACA,UAAA,CAGD,kCACC,oBAAA,CACA,YAAA,CACA,UAAA,CACA,WAtKkB,CAwKlB,yEACC,sBAAA,CAGD,0CACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,kDACC,oBAAA,CACA,mCAAA,CAEA,8DACC,oBAAA,CACA,qBAAA,CAKH,2CACC,eAAA,CAEA,8CACC,gBAAA,CACA,cAAA,CACA,QAAA,CAIF,4CACC,oBAAA,CAGD,yEACC,WAAA,CAGD,6CACC,eAAA,CACA,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,gDACC,gBAAA,CACA,cAAA,CACA,YAAA,CAMJ,2CAEE,kCACC,YAAA,CACA,cAAA,CAEA,6CACC,2BAAA,CAEA,0DACC,+BAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CAGD,0DACC,iBAAA,CACA,aAAA,CACA,gBAAA,CAGD,0DACC,eAAA,CAKH,mCACC,aAAA,CAGD,kCACC,WAAA,CACA,eAAA,CACA,aAAA,CACA,2BAAA,CAEA,6CACC,QAAA,CAIF,mCACC,YAAA,CACA,cAAA,CAAA,CAKH,+BACC,YAAA,CACA,qBAAA,CACA,SAAA,CACA,eAAA,CAEA,wCACC,aAAA,CAGD,sCACC,YAAA,CACA,sBAAA,CACA,SAAA,CACA,wCACC,uCAAA,CAMF,iDACC,gBAAA",sourcesContent:["\n$profile-max-width: 1024px;\n$content-max-width: 640px;\n\n.profile {\n\twidth: 100%;\n\toverflow-y: auto;\n\n\t&__header {\n\t\tposition: sticky;\n\t\theight: 190px;\n\t\ttop: -40px;\n\t\tbackground-color: var(--color-main-background-blur);\n\t\tbackdrop-filter: var(--filter-background-blur);\n\t\t-webkit-backdrop-filter: var(--filter-background-blur);\n\n\t\t&__container {\n\t\t\talign-self: flex-end;\n\t\t\twidth: 100%;\n\t\t\tmax-width: $profile-max-width;\n\t\t\tmargin: 0 auto;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-rows: max-content max-content;\n\t\t\tgrid-template-columns: 240px 1fr;\n\t\t\tjustify-content: center;\n\n\t\t\t&__placeholder {\n\t\t\t\tgrid-row: 1 / 3;\n\t\t\t}\n\n\t\t\t&__displayname, &__status-text {\n\t\t\t\tcolor: var(--color-main-text);\n\t\t\t}\n\n\t\t\t&__displayname {\n\t\t\t\twidth: $content-max-width;\n\t\t\t\theight: 45px;\n\t\t\t\tmargin-top: 128px;\n\t\t\t\t// Override the global style declaration\n\t\t\t\tmargin-bottom: 0;\n\t\t\t\tfont-size: 30px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tcursor: text;\n\n\t\t\t\t&:not(:last-child) {\n\t\t\t\t\tmargin-top: 100px;\n\t\t\t\t\tmargin-bottom: 4px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__edit-button {\n\t\t\t\tborder: none;\n\t\t\t\tmargin-left: 18px;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tcolor: var(--color-primary-element-text);\n\t\t\t\tbackground-color: var(--color-primary-element);\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-primary-element);\n\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\tpadding: 0 18px;\n\t\t\t\tfont-size: var(--default-font-size);\n\t\t\t\theight: 44px;\n\t\t\t\tline-height: 44px;\n\t\t\t\tfont-weight: bold;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\t\t\tbackground-color: var(--color-primary-element-light);\n\t\t\t\t}\n\n\t\t\t\t.pencil-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\tmargin-top: 2px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__status-text {\n\t\t\t\twidth: max-content;\n\t\t\t\tmax-width: $content-max-width;\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tmargin-left: -12px;\n\t\t\t\tmargin-top: 2px;\n\n\t\t\t\t&.interactive {\n\t\t\t\t\tcursor: pointer;\n\n\t\t\t\t\t&:hover,\n\t\t\t\t\t&:focus,\n\t\t\t\t\t&:active {\n\t\t\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\t\t\tcolor: var(--color-main-text);\n\t\t\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__sidebar {\n\t\tposition: sticky;\n\t\ttop: var(--header-height);\n\t\talign-self: flex-start;\n\t\tpadding-top: 20px;\n\t\tmin-width: 220px;\n\t\tmargin: -150px 20px 0 0;\n\n\t\t// Specificity hack is needed to override Avatar component styles\n\t\t&::v-deep .avatar.avatardiv, h2 {\n\t\t\ttext-align: center;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t\tpadding: 8px;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv:not(.avatardiv--unknown) {\n\t\t\tbackground-color: var(--color-main-background) !important;\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tright: 14px;\n\t\t\t\tbottom: 14px;\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tbackground-size: 28px;\n\t\t\t\tborder: none;\n\t\t\t\t// Styles when custom status icon and status text are set\n\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\tline-height: 34px;\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\t\t}\n\n\t\t&::v-deep .avatar.interactive.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tcursor: pointer;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__wrapper {\n\t\tbackground-color: var(--color-main-background);\n\t\tmin-height: 100%;\n\t}\n\n\t&__content {\n\t\tmax-width: $profile-max-width;\n\t\tmargin: 0 auto;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\t&__blocks {\n\t\tmargin: 18px 0 80px 0;\n\t\tdisplay: grid;\n\t\tgap: 16px 0;\n\t\twidth: $content-max-width;\n\n\t\tp, h3 {\n\t\t\toverflow-wrap: anywhere;\n\t\t}\n\n\t\t&-details {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 2px 0;\n\n\t\t\t.detail {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcolor: var(--color-text-maxcontrast);\n\n\t\t\t\tp .map-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&-headline {\n\t\t\tmargin-top: 10px;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&-biography {\n\t\t\twhite-space: pre-line;\n\t\t}\n\n\t\th3, p {\n\t\t\tcursor: text;\n\t\t}\n\n\t\t&-empty-info {\n\t\t\tmargin-top: 80px;\n\t\t\tmargin-right: 100px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttext-align: center;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tmargin: 8px 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media only screen and (max-width: 1024px) {\n\t.profile {\n\t\t&__header {\n\t\t\theight: 250px;\n\t\t\tposition: unset;\n\n\t\t\t&__container {\n\t\t\t\tgrid-template-columns: unset;\n\n\t\t\t\t&__displayname {\n\t\t\t\t\tmargin: 80px 20px 0px!important;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\twidth: unset;\n\t\t\t\t\tdisplay: unset;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t&__edit-button {\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 60px auto;\n\t\t\t\t}\n\n\t\t\t\t&__status-text {\n\t\t\t\t\tmargin: 4px auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t&__blocks {\n\t\t\twidth: unset;\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 20px 50px 50px 50px;\n\n\t\t\t&-empty-info {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__sidebar {\n\t\t\tmargin: unset;\n\t\t\tposition: unset;\n\t\t}\n\t}\n}\n\n.user-actions {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px 0;\n\tmargin-top: 20px;\n\n\t&__primary {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__other {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 0 4px;\n\t\ta {\n\t\t\tfilter: var(--background-invert-if-dark);\n\t\t}\n\t}\n}\n\n.icon-invert {\n\t&::v-deep .action-link__icon {\n\t\tfilter: invert(1);\n\t}\n}\n"],sourceRoot:""}]),n.Z=o},42761:function(t){t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:function(t){t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:function(t){t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="}},i={};function o(t){var n=i[t];if(void 0!==n)return n.exports;var e=i[t]={id:t,loaded:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}o.m=r,n=[],o.O=function(t,e,a,r){if(!e){var i=1/0;for(c=0;c<n.length;c++){e=n[c][0],a=n[c][1],r=n[c][2];for(var A=!0,l=0;l<e.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](e[l])}))?e.splice(l--,1):(A=!1,r<i&&(i=r));if(A){n.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=n.length;c>0&&n[c-1][2]>r;c--)n[c]=n[c-1];n[c]=[e,a,r]},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,{a:n}),n},o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(n,e){return o.f[e](t,n),n}),[]))},o.u=function(t){return t+"-"+t+".js?v=9712b63e6d8aa316e55f"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e={},a="nextcloud:",o.l=function(t,n,r,i){if(e[t])e[t].push(n);else{var A,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==a+r){A=d;break}}A||(l=!0,(A=document.createElement("script")).charset="utf-8",A.timeout=120,o.nc&&A.setAttribute("nonce",o.nc),A.setAttribute("data-webpack",a+r),A.src=t),e[t]=[n];var p=function(n,a){A.onerror=A.onload=null,clearTimeout(u);var r=e[t];if(delete e[t],A.parentNode&&A.parentNode.removeChild(A),r&&r.forEach((function(t){return t(a)})),n)return n(a)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:A}),12e4);A.onerror=p.bind(null,A.onerror),A.onload=p.bind(null,A.onload),l&&document.head.appendChild(A)}},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},o.j=9651,function(){var t;o.g.importScripts&&(t=o.g.location+"");var n=o.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");if(e.length)for(var a=e.length-1;a>-1&&!t;)t=e[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),function(){o.b=document.baseURI||self.location.href;var t={9651:0};o.f.j=function(n,e){var a=o.o(t,n)?t[n]:void 0;if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=t[n]=[e,r]}));e.push(a[2]=r);var i=o.p+o.u(n),A=new Error;o.l(i,(function(e){if(o.o(t,n)&&(0!==(a=t[n])&&(t[n]=void 0),a)){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;A.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",A.name="ChunkLoadError",A.type=r,A.request=i,a[1](A)}}),"chunk-"+n,n)}},o.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,r,i=e[0],A=e[1],l=e[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(a in A)o.o(A,a)&&(o.m[a]=A[a]);if(l)var c=l(o)}for(n&&n(e);s<i.length;s++)r=i[s],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}(),o.nc=void 0;var A=o.O(void 0,[7874],(function(){return o(43650)}));A=o.O(A)}();
//# sourceMappingURL=core-profile.js.map?v=c25edd6945a14ee0650c