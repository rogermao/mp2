/*!CK:2926088385!*//*1456170532,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["AEXzC"]); }

__d('NonBlockingIFrame',['Promise','DOM','TimeSlice'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l,m;function n(){var q=arguments.length<=0||arguments[0]===undefined?k:arguments[0],r=arguments.length<=1||arguments[1]===undefined?document.body:arguments[1],s,t={className:'nonBlockingIframe',width:0,height:0,frameborder:0,scrolling:'no','aria-hidden':'true'};if(q!==k)t.src=q;s=i.create('iframe',t);s.style.left='-1000px';s.style.position='absolute';i.appendContent(r,s);if(q===k){s.contentDocument.open();s.contentDocument.close();}return s;}function o(){return new h(function(q){if(!l)l=n();if(l.contentDocument.readyState==='complete'){q(l);}else{if(!m)m=new h(function(r){l.contentWindow.onload=j.guard(function(){r(l);},'NonBlockingIFrame window.onload');});q(m);}});}var p={loadImage:function(q){return o().then(function(r){return new h(function(s,t){var u=r.contentWindow.Image,v=new u();v.onload=j.guard(function(){s(v);},'NonBlockingIFrame image.onload');v.onerror=j.guard(function(){t(v);},'NonBlockingIFrame image.onerror');v.onabort=j.guard(function(){t(v);},'NonBlockingIFrame image.onabort');v.src=q;});});},loadIFrame:function(){var q=arguments.length<=0||arguments[0]===undefined?k:arguments[0];return o().then(function(r){var s=r.contentDocument.body;return n(q,s);});}};f.exports=p;},null);
__d('isAtlassolutionsDotComURI',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new RegExp('(^|\\.)atlassolutions\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return true;return (i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain()));}f.exports=j;},null);
__d('isWitDotAiURI',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new RegExp('(^|\\.)wit\\.ai$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return true;return (i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain()));}f.exports=j;},null);
__d('AsyncSignal',['Promise','ErrorUtils','NonBlockingIFrame','Run','QueryString','TrackingConfig','URI','WebSpeedExperiments','isAtlassolutionsDotComURI','isFacebookURI','isMessengerDotComURI','isWitDotAiURI','getAsyncParams','memoize'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v;function w(x,y){this.data=y||{};this.uri=x.toString();if(m.domain&&this.uri.charAt(0)=='/')this.uri=m.domain+this.uri;}w.prototype.setHandler=function(x){this.handler=x;return this;};w.prototype.setTimeout=function(x){this.timeout=x;return this;};w.prototype.send=function(){var x=this.handler,y=this.data;y.asyncSignal=(Math.random()*10000|0)+1;var z=new n(this.uri),aa=q(z)||r(z)||p(z)||s(z);if(aa){Object.assign(y,t('POST'));}else throw new Error("'"+this.uri+"' "+"is an external URL, you should not send async signals to offsite links.");var ba=l.appendToUrl(this.uri,y),ca;if(o.non_blocking_logger){ca=j.loadImage(ba);}else{if(!v)v=new h(function(fa){k.onAfterLoad(fa);});ca=v.then(function(){return new h(function(fa,ga){var ha=new Image();ha.onload=fa;ha.onerror=ha.onabort=ga;ha.src=ba;});});}if(x){var da=false,ea=u(function(){i.applyWithGuard(x,null,[da]);});ca.then(function(){da=true;ea();},ea).done();if(this.timeout)setTimeout(ea,this.timeout);}return this;};f.exports=w;},null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={addTrackingToken:function(n,o){n.setAttribute('data-xt',o.token);},setupWithTrackingTokenReference:function(n,o){var p='xt='+o.token,q=n.href.split('#'),r=q[0].indexOf('?')!==-1,s=r?q[0].replace(/([\?|&]xt=[^&]*)/,'')+'&'+p+(q[1]||''):n.href+='?'+p;n.href=s;var t=n.onmousedown;n.onmousedown=function(u){m.swap(this,s);n.href=n.href.replace(/([\?|&]sig=[^&]*)/,'')+'&sig='+Math.floor(Math.random()*65535+65536);if(typeof t==='function')t();};},swap:function(n,o){var p=k.ie()<=8;if(p){var q=j.create('wbr',{},null);j.appendContent(n,q);}n.href=o;if(p)j.remove(q);},referrer_log:function(n,o,p){var q=h('meta_referrer');q.content=l.switched_meta_referrer_policy;m.swap(n,o);setTimeout(function(){q.content=l.default_meta_referrer_policy;new i(p,{}).send();},100);}};f.exports=m;},null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');},3);
__d('MessengerLoginScrollListener',['CSS','Event','Run','cx','getScrollPosition','getViewportDimensions'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=767,o=170,p=90;function q(s){var t=l(window).y,u=m().width;if(u>n&&t>o||u<=n&&t>p){h.removeClass(s,"_54kd");h.removeClass(s,"_5do8");}else h.addClass(s,"_5do8");}function r(s){q(s);var t=i.listen(window,'scroll',function(){return q(s);});j.onLeave(function(){t&&t.remove();t=null;});}f.exports={setup:r};},null);
__d('MessengerMarketingStickyHeader',['CSS','Event','Run','Style','cx','getScrollPosition'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();'use strict';var n=60;function o(p,q,r){'use strict';this.$MessengerMarketingStickyHeader1=p;this.$MessengerMarketingStickyHeader2=q;this.$MessengerMarketingStickyHeader3=r;this.$MessengerMarketingStickyHeader4=false;this.$MessengerMarketingStickyHeader5=false;this.$MessengerMarketingStickyHeader6();this.$MessengerMarketingStickyHeader7=i.listen(window,'scroll',function(){return this.$MessengerMarketingStickyHeader6();}.bind(this));j.onLeave(function(){return this.destroy();}.bind(this));}o.prototype.$MessengerMarketingStickyHeader6=function(){'use strict';var p=m(window).y;if(p<this.$MessengerMarketingStickyHeader3){if(this.$MessengerMarketingStickyHeader4){this.$MessengerMarketingStickyHeader4=false;h.removeClass(this.$MessengerMarketingStickyHeader1,"_31rc");k.set(this.$MessengerMarketingStickyHeader1,'top',this.$MessengerMarketingStickyHeader3+'px');}this.$MessengerMarketingStickyHeader5=false;k.set(this.$MessengerMarketingStickyHeader2,'opacity',0);}else{if(!this.$MessengerMarketingStickyHeader4){this.$MessengerMarketingStickyHeader4=true;h.addClass(this.$MessengerMarketingStickyHeader1,"_31rc");k.set(this.$MessengerMarketingStickyHeader1,'top',0);}if(p-this.$MessengerMarketingStickyHeader3<n){this.$MessengerMarketingStickyHeader5=false;k.set(this.$MessengerMarketingStickyHeader2,'opacity',(p-this.$MessengerMarketingStickyHeader3)/n);}else if(!this.$MessengerMarketingStickyHeader5){this.$MessengerMarketingStickyHeader5=true;k.set(this.$MessengerMarketingStickyHeader2,'opacity',1);}}};o.prototype.destroy=function(){'use strict';this.$MessengerMarketingStickyHeader7&&this.$MessengerMarketingStickyHeader7.remove();this.$MessengerMarketingStickyHeader7=null;};f.exports=o;},null);