!function(e){var a={};function t(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)t.d(n,s,function(a){return e[a]}.bind(null,s));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=59)}([function(e,a,t){e.exports=t(1)(0)},function(e,a){e.exports=_xe_dll_common},function(e,a,t){e.exports=t(1)(5)},function(e,a,t){e.exports=t(1)(143)},function(e,a,t){e.exports=t(1)(6)},function(e,a,t){e.exports=t(1)(465)},function(e,a,t){e.exports=t(1)(8)},,function(e,a,t){e.exports=t(1)(97)},function(e,a,t){e.exports=t(1)(423)},function(e,a,t){e.exports=t(20)},,function(e,a,t){e.exports=t(1)(72)},function(e,a,t){e.exports=t(1)(60)},,function(e,a,t){e.exports=t(1)(139)},,,,,function(e,a,t){var n=t(21);e.exports=n},function(e,a,t){t(22);var n=t(26);n.JSON||(n.JSON={stringify:JSON.stringify}),e.exports=function(e,a,t){return n.JSON.stringify.apply(null,arguments)}},function(e,a,t){var n=t(23),s=t(24),r=t(25),l=s("JSON","stringify"),c=/[\uD800-\uDFFF]/g,i=/^[\uD800-\uDBFF]$/,o=/^[\uDC00-\uDFFF]$/,u=function(e,a,t){var n=t.charAt(a-1),s=t.charAt(a+1);return i.test(e)&&!o.test(s)||o.test(e)&&!i.test(n)?"\\u"+e.charCodeAt(0).toString(16):e},p=r((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:p},{stringify:function(e,a,t){var n=l.apply(null,arguments);return"string"==typeof n?n.replace(c,u):n}})},function(e,a,t){e.exports=t(1)(10)},function(e,a,t){e.exports=t(1)(44)},function(e,a,t){e.exports=t(1)(20)},function(e,a,t){e.exports=t(1)(18)},function(e,a,t){e.exports=t(1)(73)},,,,function(e,a,t){e.exports=t(1)(177)},function(e,a,t){e.exports=t(1)(37)},function(e,a,t){e.exports=t(1)(83)},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(4),s=t.n(n),r=t(6),l=t.n(r),c=(t(13),t(15),t(12),t(32),t(33),t(60),t(31),t(2)),i=t.n(c),o=t(8),u=t.n(o),p=t(9),d=t.n(p),g=t(3),f=t.n(g),v=t(27),h=t.n(v),m=t(10),_=t.n(m),x=t(0),y=t.n(x),b=t(5),R={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40,ESCAPE:27},T=function(){function e(a){var t=a.$wrapper,n=a.key,r=a.userSearchUrl,l=a.groupSearchUrl,c=a.permission,i=a.type,o=a.vgroupAll;s()(this,e),this.$wrapper=t,this.key=n,this.userSearchUrl=r,this.groupSearchUrl=l,this.permission=c,this.type=i,this.vgroupAll=o,this.query="",this.suggestion=[],this.placeholder=b.default.Lang.trans("xe::explainIncludeUserOrGroup"),this.selectedIndex="",this.includeSelectedIndex=-1,this.excludeSelectedIndex=-1,this.MIN_QUERY_LENGTH=2}return l()(e,[{key:"bindEvents",value:function(){var e,a,t=this;this.$wrapper.on("change",".chkModeAble",(function(e){var a,n;y()(e.target).is(":checked")?i()(a=t.$wrapper).call(a,"input:not(.chkModeAble)").prop("disabled",!0):i()(n=t.$wrapper).call(n,"input:not(.chkModeAble)").prop("disabled",!1)})),this.$wrapper.on("keydown",".inputUserGroup",(function(e){var a,n,s=u()(a=e.target.value).call(a),r=y()(this),l=e.keyCode,c=i()(n=r.parent()).call(n,".ReactTags__suggestions ul"),o=r.data("input");if(s.length>=t.MIN_QUERY_LENGTH){if(c.length>0){var p=parseInt(r.data("index"),10),g=0;switch(l){case R.UP_ARROW:g=0==p?i()(c).call(c,"li").length-1:p-1,r.data("index",g),i()(c).call(c,"li").eq(g).addClass("active").siblings().removeClass("active");break;case R.DOWN_ARROW:g=p==i()(c).call(c,"li").length-1?0:p+1,r.data("index",g),i()(c).call(c,"li").eq(g).addClass("active").siblings().removeClass("active");break;case R.ENTER:case R.TAB:if(e.preventDefault(),i()(c).call(c,"li.active").length>0){var v,h=i()(c).call(c,"li.active").data("tag"),m="",_="",x="";"user"===c.data("target")?"include"===o?(m=t.type+"User",_="user",x="@"):(m=t.type+"Except",_="except",x="@"):(m=t.type+"Group",_="group",x="%");var b=t.permission[_],T=!1;b.length>0?(b.forEach((function(e,a){e.id===h.id&&(T=!0)})),T||t.permission[_].push(h)):t.permission[_].push(h);var k,E,U,A,S=d()(v=t.permission[_]).call(v,(function(e){return e.id}));if(!T)i()(k=c.closest(".ReactTags__tags")).call(k,"[name="+m+"]").val(u()(E=S.join()).call(E)),i()(U=c.closest(".ReactTags__tags")).call(U,"."+_+"Wrap").append(f()(A='<span class="ReactTags__tag">'.concat(x+(h.display_name||h.name),'<a class="ReactTags__remove btnRemoveTag" data-id="')).call(A,h.id,'">x</a></span>'));c.remove(),r.val("").data("index",-1).focus()}e.preventDefault();break;case R.ESCAPE:t[o+"SelectedIndex"]=0,c.parent().empty(),r.focus()}}}else if(R.BACKSPACE===l){var O,w=i()(O=r.closest(".ReactTags__tags")).call(O,".ReactTags__selected span");!s&&w.length>0&&t.removeTag(w.eq(w.length-1))}})),i()(e=this.$wrapper).call(e,".ReactTags__suggestions").on("mouseenter","li",(function(){y()(this).addClass("active").siblings().removeClass("active")})),i()(a=this.$wrapper).call(a,".ReactTags__suggestions").on("click","li",(function(){var e,a,n=y()(this),s=n.data("tag"),r=n.closest("ul"),l=i()(e=n.closest(".ReactTags__tagInput")).call(e,"input:text"),c=l.data("input"),o="",p="",g="";"user"===r.data("target")?"include"===c?(o=t.type+"User",p="user",g="@"):(o=t.type+"Except",p="except",g="@"):(o=t.type+"Group",p="group",g="%");var v=t.permission[p],h=!1;v.length>0?(v.forEach((function(e,a){e.id===s.id&&(h=!0)})),h||t.permission[p].push(s)):t.permission[p].push(s);var m,_,x,b,R=d()(a=t.permission[p]).call(a,(function(e){return e.id}));h||(i()(m=r.closest(".ReactTags__tags")).call(m,"[name="+o+"]").val(u()(_=R.join()).call(_)),i()(x=r.closest(".ReactTags__tags")).call(x,"."+p+"Wrap").append(f()(b='<span class="ReactTags__tag">'.concat(g+(s.display_name||s.name),'<a class="ReactTags__remove btnRemoveTag" data-id="')).call(b,s.id,'">x</a></span>')));r.remove(),l.val("").data("index",-1).focus()})),this.$wrapper.on("keyup",".inputUserGroup",(function(e){var a,n,s=u()(a=e.target.value).call(a),r=y()(this),l=e.keyCode;if(s.length>=t.MIN_QUERY_LENGTH){if(-1==[R.ENTER,R.TAB,R.UP_ARROW,R.DOWN_ARROW,R.ESCAPE,37,39].indexOf(l)){var c;switch("<ul>",'<li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li>',"</ul>",i()(c=r.parent()).call(c,".ReactTags__suggestions").html('<ul><li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li></ul>'),s.substr(0,1)){case"@":s=s.substr(1,s.length),t.searchUser(r,s);break;case"%":s=s.substr(1,s.length),t.searchGroup(r,s)}}}else i()(n=r.parent()).call(n,".ReactTags__suggestions").empty()})),this.$wrapper.on("click",".btnRemoveTag",(function(e){e.preventDefault(),t.removeTag(y()(this).closest("span"))}))}},{key:"makeIt",value:function(e,a){var t=u()(a).call(a).replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),n=RegExp(t,"gi");return(e.display_name||e.name).replace(n,"<mark>$&</mark>")}},{key:"removeTag",value:function(e){var a,t,n,s=this,r=e.closest(".ReactTags__selected").data("ptype"),l=e.data("id"),c="";switch(r){case"user":c=s.type+"User";break;case"except":c=s.type+"Except";break;case"group":c=s.type+"Group"}s.permission[r].forEach((function(e,a){var t;e.id!==l&&h()(t=s.permission[r]).call(t,a,1)}));var o=d()(a=s.permission[r]).call(a,(function(e){return e.id}));i()(t=e.closest(".ReactTags__tags")).call(t,"[name="+c+"]").val(u()(n=o.join()).call(n)),e.remove()}},{key:"searchUser",value:function(e,a){var t=this,n=t.userSearchUrl;b.default.ajax({url:n+"/"+a,method:"get",dataType:"json",cache:!1,success:function(n){if(n.length>0){var s,r="";r+='<ul data-target="user">',n.forEach((function(e,n){r+='<li class="" data-tag=\''.concat(_()(e),"'>"),r+="<span>".concat(t.makeIt(e,a),"</span>"),r+="</li>"})),r+="</ul>",i()(s=e.parent()).call(s,".ReactTags__suggestions").html(r)}else{var l;i()(l=e.parent()).call(l,".ReactTags__suggestions").empty()}},error:function(e,a,t){}})}},{key:"searchGroup",value:function(e,a){var t=this,n=t.groupSearchUrl;b.default.ajax({url:n+"/"+a,method:"get",dataType:"json",cache:!1,success:function(n){if(n.length>0){var s,r="";r+='<ul data-target="group">',n.forEach((function(e,n){r+="<li data-tag='".concat(_()(e),"'>"),r+="<span>".concat(t.makeIt(e,a),"</span>"),r+="</li>"})),r+="</ul>",i()(s=e.parent()).call(s,".ReactTags__suggestions").html(r)}else{var l;i()(l=e.parent()).call(l,".ReactTags__suggestions").empty()}},error:function(e,a,t){}})}},{key:"render",value:function(){var e,a,t,n,s,r,l,c,i,o,p,g=this,v=this.permission.mode,h=this.permission.rating,m=!1,_=[{value:"super",name:b.default.Lang.trans("xe::userRatingAdministrator")},{value:"manager",name:b.default.Lang.trans("xe::userRatingManager")},{value:"user",name:b.default.Lang.trans("xe::user")},{value:"guest",name:b.default.Lang.trans("xe::guest")}],x=!1;"manual"!==v&&"inherit"!==v||(m=!0,"manual"!==v&&(x=!0));var y,R=d()(e=this.permission.group).call(e,(function(e){return e.id})),T=d()(a=this.permission.user).call(a,(function(e){return e.id})),k=d()(t=this.permission.except).call(t,(function(e){return e.id})),E="";if(E+="<div>",m){var U,A,S="inherit"===v?'checked="checked"':"";E+='<div class="form-group">',E+='<div class="checkbox">',E+=f()(U=f()(A='<label><input type="checkbox" name="'.concat(this.type+"Mode",'" class="chkModeAble" value="inherit" ')).call(A,S," /> ")).call(U,b.default.Lang.trans("xe::inheritMode"),"</label>"),E+="</div>",E+="</div>"}(E+='<div class="form-group">',E+="<label>회원 등급</label>",E+='<div class="radio">',_.forEach((function(e){var a,t,n,s,r=e.value==h?"checked":"";E+=f()(a=f()(t=f()(n=f()(s='<label><input type="radio" '.concat(x?'disabled="disabled"':"",' name="')).call(s,g.type+"Rating",'" value="')).call(n,e.value,'" ')).call(t,r?'checked="checked"':""," /> ")).call(a,e.name," &nbsp;</label>")})),E+="</div>",E+="</div>",E+='<div class="form-group">',E+="<label>".concat(b.default.Lang.trans("xe::includeUserOrGroup"),"</label>"),E+='<div class="ReactTags__tags">',E+='<div class="ReactTags__selected groupWrap" data-ptype="group">',this.permission.group.forEach((function(e){var a,t=e,n="%"+(t.display_name||t.name);E+=f()(a='<span class="ReactTags__tag">'.concat(n,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,t.id,'">x</a></span>')})),E+="</div>",E+='<div class="ReactTags__selected userWrap" data-ptype="user">',this.permission.user.forEach((function(e){var a,t="@"+(e.display_name||e.name);E+=f()(a='<span class="ReactTags__tag">'.concat(t,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,e.id,'|">x</a></span>')})),E+="</div>",E+='<div class="ReactTags__tagInput">',E+=f()(n=f()(s='<input type="text" placeholder="'.concat(this.placeholder,'" class="form-control inputUserGroup" data-input="include" ')).call(s,x?'disabled="disabled"':"",' value="')).call(n,this.query,'" data-index="-1" />'),E+='<div class="ReactTags__suggestions" data-input="include"></div>',E+="</div>",E+=f()(r='<input type="hidden" name="'.concat(this.type+"Group",'" class="form-control includeGroups" value="')).call(r,u()(l=R.join()).call(l),'" />'),E+=f()(c='<input type="hidden" name="'.concat(this.type+"User",'" class="form-control includeUsers" value="')).call(c,u()(i=T.join()).call(i),'" />'),E+="</div>",E+="</div>",this.vgroupAll.length>=1)&&(E+='<div class="form-group">',E+="<label>".concat(b.default.Lang.trans("xe::includeVGroup"),"</label>"),E+=d()(y=g.vgroupAll).call(y,(function(e){var a,t,n,s,r=!1;return-1!=function(e,a){for(var t=0;t<a.length;t++)if(a[t]==e)return t;return-1}(e.id,this.permission.vgroup)&&(r=!0),f()(a=f()(t=f()(n=f()(s='<label><input type="checkbox" '.concat(x?'disabled="disabled"':"",' name="')).call(s,g.type+"VGroup[]",'" value="')).call(n,e.id,'" ')).call(t,r?'checked="checked"':""," /> ")).call(a,e.title," &nbsp;</label>")})),E+="</div>");E+='<div class="form-group">',E+="<label>".concat(b.default.Lang.trans("xe::excludeUser"),"</label>"),E+='<div class="ReactTags__tags">',E+='<div class="ReactTags__selected exceptWrap" data-ptype="except">',this.permission.except.forEach((function(e){var a,t=e.display_name||e.name;t="@"+t,E+=f()(a='<span class="ReactTags__tag">'.concat(t,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,e.id,'">x</a></span>')})),E+="</div>",E+='<div class="ReactTags__tagInput">',E+=f()(o='<input type="text" placeholder="'.concat(b.default.Lang.trans("xe::explainExcludeUser"),'" class="form-control inputUserGroup" data-input="exclude" ')).call(o,x?'disabled="disabled"':"",' data-index="-1" />'),E+='<div class="ReactTags__suggestions" data-input="exclude"></div>',E+="</div>",E+=f()(p='<input type="hidden" name="'.concat(this.type+"Except",'" class="form-control excludeUsers" value="')).call(p,k,'" />'),E+="</div>",E+="</div>",E+="</div>",this.$wrapper.html(E)}}]),e}();y()(".__xe__uiobject_permission").each((function(e){var a=y()(this),t=a.data("data"),n=a.data("key"),s=a.data("type"),r=a.data("userUrl"),l=a.data("groupUrl"),c=a.data("vgroupAll"),i=new T({$wrapper:a,key:n,userSearchUrl:r,groupSearchUrl:l,permission:t,type:s,vgroupAll:c});i.render(),i.bindEvents()}))},function(e,a,t){e.exports=t(1)(276)}]);