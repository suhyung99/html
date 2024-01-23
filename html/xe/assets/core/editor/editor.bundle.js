!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=48)}({0:function(t,e,n){t.exports=n(1)(0)},1:function(t,e){t.exports=_xe_dll_common},11:function(t,e,n){t.exports=n(1)(1)},12:function(t,e,n){t.exports=n(1)(72)},14:function(t,e,n){t.exports=n(1)(2)},15:function(t,e,n){t.exports=n(1)(139)},16:function(t,e,n){t.exports=n(1)(13)},17:function(t,e,n){t.exports=n(1)(4)},28:function(t,e,n){t.exports=n(1)(115)},29:function(t,e,n){t.exports=n(1)(14)},30:function(t,e,n){t.exports=n(1)(7)},39:function(t,e,n){t.exports=n(1)(22)},4:function(t,e,n){t.exports=n(1)(6)},40:function(t,e,n){t.exports=n(1)(31)},48:function(t,e,n){n(81),t.exports=n(49)},49:function(t,e,n){"use strict";n.r(e);n(15);var o=n(0),i=n.n(o);n(5).default.app("Editor",(function(t){t.define({editorSettings:{name:"XEtextarea",configs:{}},interfaces:{initialize:function(t,e){e=i.a.extend(!0,{fileUpload:{},suggestion:{},names:{file:{image:{}},tag:{},mention:{}},extensions:[],fontFamily:[],perms:{},files:[]},e);var n=i()("#"+t),o=e.height,r=e.fontFamily,s=e.fontSize;this.addProps({editor:n,selector:t,options:e}),o&&n.css("height",o+"px"),(r||s)&&(r&&r.length>0&&n.css("font-family",r.join(",")),s&&n.css("font-size",s)),n.parents("form").on("submit",(function(){var t=e.names.file.input,o=e.files,r=i()();if(n.nextAll(".paramWrap").remove(),n.after("<div class='paramWrap'>"),r=n.nextAll(".paramWrap"),o.length>0)for(var s=0,a=o.length;s<a;s+=1){var u=o[s];r.append("<input type='hidden'name='"+t+"[]' value='"+u.id+"' />")}}))},getContents:function(){return this.props.editor.val()},setContents:function(t){this.props.editor.val(t)},addContents:function(t){var e=this.props.editor.val();this.props.editor.val(e)},on:function(t,e){this.props.editor.on(t,e)},getContentDom:function(){return!1},reset:function(){this.props.editor.val("").focus(),this.props.editor.nextAll(".paramWrap").remove()}}})}))},5:function(t,e,n){t.exports=n(1)(465)},6:function(t,e,n){t.exports=n(1)(8)},81:function(t,e,n){"use strict";n.r(e);var o=n(11),i=n.n(o),r=n(4),s=n.n(r),a=n(6),u=n.n(a),l=n(39),c=n.n(l),f=n(16),d=n.n(f),p=n(29),h=n.n(p),v=n(17),y=n.n(v),g=(n(12),n(14)),m=n.n(g),w=n(0),E=n.n(w),x=n(40),S=n(28);function O(t){var e=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(i()(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y()(t);if(e){var r=y()(this).constructor;n=i()(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}var k=function(t){d()(n,t);var e=O(n);function n(t){return s()(this,n),e.call(this,t)}return n}(S.default),P=function(t){d()(n,t);var e=O(n);function n(t){return s()(this,n),e.call(this,t)}return n}(S.default),C=function(t){d()(n,t);var e=O(n);function n(t){return s()(this,n),e.call(this,t)}return n}(S.default),b=function(t){d()(n,t);var e=O(n);function n(t){return s()(this,n),e.call(this,t)}return n}(S.default),T={editorSettings:["name"],interfaces:["initialize","addContents","getContents","setContents","getContentDom"],tools:{property:["id","events"],events:["iconClick","elementDoubleClick"]}},X=function(){function t(){s()(this,t)}return u()(t,null,[{key:"isValidBeforeCreateInstance",value:function(t,e,n){if(!t)throw new b("Editor가 사용할 field를 지정해야 합니다.");if(n.editorList.length>0){for(var o=!0,i=0,r=n.editorList.length;i<r;i+=1)if(n.editorList[i]===t)throw o=!1,new C("Editor가 이미 사용 중입니다: ".concat(t));if(!o)return!1}return!0}},{key:"isValidEditorOptions",value:function(t,e){var n=!0;for(var o in T.editorSettings)if(!t.hasOwnProperty(T.editorSettings[o]))throw n=!1,new k("Editor 규격이 맞지 않음 (구현 필요 [editorSettings: ".concat(T.editorSettings[o],"])"));for(var i in T.interfaces)if(!e.hasOwnProperty(T.interfaces[i]))throw n=!1,new k("Editor 규격이 맞지 않음 (구현 필요 [interface: ".concat(T.interfaces[i],"])"));if(t.hasOwnProperty("plugins")&&t.plugins instanceof Array&&t.plugins.length>0&&!t.hasOwnProperty("addPlugins"))throw n=!1,new k("Editor 규격이 맞지 않음 (구현 필요 [fn:addPlugins])");if(window.XEeditor.editorSet.hasOwnProperty(t.name))throw n=!1,new k("이미 같은 이름의 에디터가 등록되어 있음: ".concat(t.name));return!!n}},{key:"isValidToolsObject",value:function(t){for(var e=!0,n=0,o=T.tools.property.length;n<o;n+=1)if(!t.hasOwnProperty(T.tools.property[n]))throw e=!1,new P("EditorTool 규격이 맞지 않음 (속성이 없음: ".concat(T.tools.property[n],")"));for(var i=0,r=T.tools.events.length;i<r;i+=1)if(!t.events.hasOwnProperty(T.tools.events[i]))throw e=!1,new P("EditorTool 규격이 맞지 않음 (이벤트가 정의되지 않음: ".concat(T.tools.events[i],")"));return e}}]),t}(),j=n(30),D=function(){function t(e,n,o,i){s()(this,t);var r={editorOptions:o,toolInfoList:i};Object(j.eventify)(this),this.editorName=e,this.selector=n,this.props={},this.getOptions=function(){return r}}return u()(t,[{key:"getInstance",value:function(){return this}},{key:"getContents",value:function(){return XEeditor.editorSet[this.editorName].getContents.call(this)}},{key:"setContents",value:function(t){XEeditor.editorSet[this.editorName].setContents.call(this,t)}},{key:"addContents",value:function(t){XEeditor.editorSet[this.editorName].addContents.call(this,t)}},{key:"addProps",value:function(t){for(var e in t)this.props[e]=t[e]}},{key:"addTools",value:function(t){XEeditor.editorSet[this.editorName].addTools.call(this,this.getOptions().toolInfoList,t)}},{key:"on",value:function(t,e){XEeditor.editorSet[this.editorName].on.call(this,t,e)}},{key:"renderFileUploader",value:function(t){XEeditor.editorSet[this.editorName].renderFileUploader.call(this,t)}},{key:"getContentDom",value:function(){return"function"==typeof XEeditor.editorSet[this.editorName].getContentDom&&XEeditor.editorSet[this.editorName].getContentDom.call(this)}},{key:"reset",value:function(){XEeditor.editorSet[this.editorName].reset.call(this)}}]),t}(),L=function(){function t(e,n){for(var o in s()(this,t),this.name=e.name,this.configs=e.configs,this.editorList=[],this.interfaces={},Object(j.eventify)(this),e.hasOwnProperty("plugins")&&e.plugins instanceof Array&&e.plugins.length>0&&e.hasOwnProperty("addPlugins")&&e.addPlugins(e.plugins),n)this[o]=n[o]}return u()(t,[{key:"create",value:function(t,e,n,o){if(o=o||[],n=E.a.extend(this.configs||{},n||{}),X.isValidBeforeCreateInstance(t,o,this)){var i=new D(this.name,t,n,o);if(i._editor=this,this.editorList[t]=i,this.initialize.call(this.editorList[t],t,e,n),o&&o.length>0){for(var r={},s=[],a=0,u=o.length;a<u;a+=1)window.XEeditor.getTool(o[a].id)?(r[o[a].id]=window.XEeditor.getTool(o[a].id),s.push(o[a])):console.error("define된 tool이 존재하지 않음. ["+o[a].id+"]");this.addTools&&"function"==typeof this.addTools&&this.addTools.call(this.editorList[t],r,s)}return this.$$emit("editor.created",this.editorList[t]),this.editorList[t]}}}]),t}(),N=function t(e){for(var n in s()(this,t),e)this[n]=e[n]},_=n(5);function A(t){var e=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(i()(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y()(t);if(e){var r=y()(this).constructor;n=i()(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}var F=function(t){d()(n,t);var e=A(n);function n(){var t;return s()(this,n),(t=e.call(this)).toolsSet={},t.editorSet={},t.editorOptionSet={},t.tools={define:function(e){E.a.isFunction(console.warn)&&E.a.isFunction(console.trace)&&(console.warn("DEPRECATED: XEeditor.tools.define() is deprecated. use XEeditor.defineTool"),console.trace()),t.defineTool(e)},get:function(e){return E.a.isFunction(console.warn)&&E.a.isFunction(console.trace)&&(console.warn("DEPRECATED: XEeditor.tools.get() is deprecated. use XEeditor.getTool"),console.trace()),t.getTool(e)}},t}return u()(n,[{key:"boot",value:function(t){var e=this;return this.booted()?m.a.resolve(this):new m.a((function(o){c()(y()(n.prototype),"boot",e).call(e,t),o(e)}))}},{key:"define",value:function(t){var e=t.editorSettings,n=t.interfaces;try{if(X.isValidEditorOptions(e,n)){var o=new L(e,n);this.editorSet[e.name]=o,this.editorOptionSet[e.name]=e,this.$$emit("editor.define",o)}}catch(t){}}},{key:"getEditor",value:function(t){var e=this;return this.editorSet[t]?m.a.resolve(this.editorSet[t]):new m.a((function(t){e.$$on("editor.define",(function(e,n){t(n)}))}))}},{key:"defineTool",value:function(t){try{X.isValidToolsObject(t)&&(this.toolsSet[t.id]=new N(t))}catch(t){console.error(t)}}},{key:"getTool",value:function(t){return this.toolsSet[t]}},{key:"attachDomId",value:function(t,e){return E()(t).attr("xe-tool-id",e).clone().wrapAll("<div/>").parent().html()}},{key:"getDomSelector",value:function(t){return'[xe-tool-id="'+t+'"]'}}],[{key:"appName",value:function(){return"Editor"}}]),n}(x.default),B=(e.default=F,new F);window.XEeditor||(window.XEeditor=B),_.default.registerApp("Editor",B)}});