/*!CK:3672016212!*//*1456240400,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["N0l6\/"]); }

__d("ArtilleryCategory",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNKNOWN:0,SERVER:1,SERVER_WAIT:2,NETWORK:3,CLIENT:4,CLIENT_WAIT:6,RESOURCE_WAIT:7,NETWORK_WAIT:8};},null);
__d("ArtillerySequenceType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEQUENCE_UNKNOWN:0,SEQUENCE_SERVER:1,SEQUENCE_CLIENT:2};},null);
__d("NavigationMetricsEnumJS",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};},null);
__d("PerfXClientMetricsConfig",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LOGGER_CONFIG:"PerfXClientMetricsLoggerConfig"};},null);
__d("ResourceTimingMetricsEnumJS",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"};},null);
__d('ImageTimingHelper',['Arbiter','BigPipe','URI'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l={};h.subscribe(i.Events.init,function(m,n){if(n.lid&&n.lid!=='0')n.arbiter.subscribe('images_displayed',function(o,p){var q=k[p.lid];if(!q)q=k[p.lid]=[];p.images.forEach(function(r){var s=new j(r);r=s.setFragment('').toString();if(l[r])return;l[r]=true;q.push({pagelet:p.pagelet,timeslice:p.timeslice,ts:p.ts,uri:r});});});});f.exports.getImageTimings=function(m){return k[m]||[];};},null);
__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(m,n){var o={};i(h,function(p){var q=n[p];if(q)o[p]=q+m;});return o;}var l={getAsyncRequestTimings:function(m){if(!m||!j.timing||!j.getEntriesByName)return undefined;var n=j.getEntriesByName(m);if(n.length===0)return undefined;return k(j.timing.navigationStart,n[0]);},getNavTimings:function(){if(!j.timing)return undefined;return k(0,j.timing);}};f.exports=l;},null);
__d('PageletEventsHelper',['Arbiter','PageletEventConstsJS'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='BigPipe/init',k='pagelet_event',l='phase_begin',m={},n=false;function o(){return {pagelets:{},categories:{},phase_start:{}};}function p(s,t,u,v){if(m[v].pagelets[t]==undefined)m[v].pagelets[t]={};m[v].pagelets[t][s]=u;}function q(s){s.subscribe(k,function(t,u){var event=u.event,v=u.ts,w=u.id,x=u.lid,y=u.phase,z=u.categories;p(event,w,v,x);var aa=m[x],ba=aa.pagelets[w];if(event===i.ARRIVE_END)ba.phase=y;if((event===i.ONLOAD_END||event===i.DISPLAY_END)&&z)z.forEach(function(ca){if(aa.categories[ca]==undefined)aa.categories[ca]={};aa.categories[ca][event]=v;});});s.subscribe(l,function(event,t){m[t.lid].phase_start[t.phase]=t.ts;});}var r={init:function(){if(n)return;h.subscribe(j,function(event,s){var t=s.lid,u=s.arbiter;m[t]=o();q(u);});n=true;},getMetrics:function(s){if(m[s])return JSON.parse(JSON.stringify(m[s]));return null;}};f.exports=r;},null);
__d('PerfXFlusher',['BanzaiLogger','PerfXClientMetricsConfig','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.LOGGER_CONFIG,l=['perfx_page','perfx_page_type','tti','e2e'];function m(o){l.forEach(function(p){!(p in o)?j(0):undefined;});}var n={flush:function(o,p){m(p);p.lid=o;if(p.fbtrace_id){h.log(k,p,{delay:10*1000});}else h.log(k,p);}};f.exports=n;},null);
__d('PerfXLogger',['Arbiter','LogBuffer','PageEvents','PerfXFlusher','NavigationMetrics','Set','performance'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={},p=['e2e','tti','all_pagelets_displayed','all_pagelets_loaded'],q={},r,s={_listenersSetUp:false,_setupListeners:function(){if(this.listenersSetUp)return;this._subscribeToNavigationDoneEvent();this.listenersSetUp=true;},_init:function(t,u,v){o[t]={perfx_page:u,perfx_page_type:v,tags:new m()};this._setupListeners();},initForPageLoad:function(t,u,v){r=t;this._init(t,u,v);},initForQuickling:function(t,u,v,w){this._init(t,u,v);q[t]=w;},updateProperties:function(t,u,v){var w=o[t];if(w){w.perfx_page=u;w.perfx_page_type=v;}},addTag:function(t,u){var v=o[t];if(v)v.tags.add(u);},_subscribeToNavigationDoneEvent:function(){l.addListener(l.Events.NAVIGATION_DONE,function(t,u){var v=u.serverLID;if(!(v in o))return;o[v].tti=u.tti;o[v].e2e=u.e2e;o[v].all_pagelets_displayed=u.extras.all_pagelets_displayed;o[v].all_pagelets_loaded=u.extras.all_pagelets_loaded;var w=u.pageType;if(this._validateValues(v))if(w==='normal'){this._finishPageload(v);}else if(w==='quickling')this._finishQuickling(v);}.bind(this));},_generatePayload:function(t,u){var v=o[t];if(v.fbtrace_id){v.js_tti=this._getJSTime(u,v.tti);v.js_e2e=this._getJSTime(u,v.e2e);}var w=Object.assign({},v),x=document.querySelector('[id^="hyperfeed_story_id"]');if(x){var y=JSON.parse(x.getAttribute('data-ft'));if(y)w.mf_query_id=y.qid;}w.tags=Array.from(v.tags);this._adjustValues(w,u);return w;},_getPageloadPayload:function(t){if(!(t in o))return;if(!n.timing){delete o[t];return;}var u=n.timing.navigationStart;return this._generatePayload(t,u);},_getQuicklingPayload:function(t){if(!(t in q)||!(t in o))return;if(!n.timing||!n.getEntriesByName){delete q[t];delete o[t];return;}var u=q[t],v=n.getEntriesByName(u);if(v.length===0)return;var w=v[0],x=n.timing.navigationStart+w.startTime;return this._generatePayload(t,x);},_finishPageload:function(t){var u=this._getPageloadPayload(t);if(u)this._log(t,u);},_finishQuickling:function(t){var u=this._getQuicklingPayload(t);if(u)this._log(t,u);},_log:function(t,u){k.flush(t,u);},_adjustValues:function(t,u){for(var v=0;v<p.length;v++){var w=p[v],x=t[w];t[w]=x-u;}},_validateValues:function(t){if(!(t in o))return false;var u=o[t];for(var v=0;v<p.length;v++){var w=p[v];if(!u[w])return false;}return true;},getPayload:function(t){if(!(t in o))return;var u=o[t].perfx_page_type;if(u==="normal"){return this._getPageloadPayload(t);}else if(u==="quickling")return this._getQuicklingPayload(t);},setFBTraceID:function(t,u){if(t in o)o[t].fbtrace_id=u;},_getJSTime:function(t,u){if(t>u)return 0;var v=0;i.read('time_slice').forEach(function(w){var x=w.begin,y=w.end;if(x>y)return;if(t<=x&&y<=u){v+=y-x;}else if(x<=t&&u<=y){v+=u-t;}else if(x<=t&&t<=y){v+=y-t;}else if(x<=u&&u<=y)v+=u-x;});return v;}};f.exports=s;},null);
__d('ResourceTimingBootloaderHelper',['BigPipeExperiments','Bootloader','ResourceTimingMetricsEnumJS','ImageTimingHelper','Set','URI','forEachObject','isEmpty','performance'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q={},r={};function s(y,z,aa){if(!p.timing||!p.getEntriesByType)return;var ba={};if(h.link_images_to_pagelets)ba=k.getImageTimings(aa).sort(function(sa,ta){return sa.ts-ta.ts;}).reduce(function(sa,ta){if(sa[ta.uri])return sa;sa[ta.uri]=ta.pagelet;return sa;},{});var ca=p.getEntriesByType('resource'),da=0,ea=0,fa=0;for(var ga=0;ga<ca.length;ga++){var ha=ca[ga];if(ha.duration<=0||ha.startTime<z)continue;var ia='',ja='',ka='',la='',ma='',na=ha.initiatorType;switch(na){case 'css':case 'link':case 'script':var oa=w(ha.name);ja=oa[0];ia=oa[1];if(!ja||!ia)continue;if(ia==='css'||ia==='js'){la=ia;var pa=r[ha.name]||ea++;ka=pa+'_'+ja;}else{var qa=v(ha.name);ma=qa[0];la=qa[1];ka=da+++'_'+ma;}break;case 'img':ka=da+++'_'+t(ha.name);la='img';break;case 'iframe':ka=fa+++'_'+t(ha.name)+u(ha.name);la='iframe';break;default:continue;}if(y[ha.name]==undefined)y[ha.name]=[];var ra={};n(j,function(sa){var ta=ha[sa];if(ta)ra[sa]=ta+p.timing.navigationStart;});ra.type=la;ra.desc=ka;if(la=='img'&&ba.hasOwnProperty(ha.name))ra.pagelet=ba[ha.name];y[ha.name].push(ra);}}function t(y){var z=new m(y).getDomain();return z;}function u(y){var z=new m(y).getPath();return z;}function v(y){return [t(y),'img'];}function w(y){var z=y.match(/\/rsrc\.php\/.*\/([^\?]+)/);if(!z)return [];var aa=z[1],ba='',ca=aa.match(/\.(\w+)$/);if(ca)ba=ca[1];return [aa,ba];}var x={addBootloaderMetricsToResourceTimings:function(){var y=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],z=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],aa=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(o(r))r=i.getURLToHashMap();var ba={};n(r,function(ea,fa){ba[ea]=fa;});var ca=new l(['bootload','js_exec','start_bootload','tag_bootload']),da=[];n(z,function(ea,fa){var ga=fa.indexOf('/');if(ga===-1)return;var ha=fa.substring(0,ga);if(!ca.has(ha))return;da.push(fa);var ia=fa.substring(ga+1),ja=ba[ia];if(!ja)return;if(y[ja]==null)y[ja]=[{}];y[ja].forEach(function(ka){ka.bootloader_hash=ia;ka[ha]=ea;});});if(!aa)da.forEach(function(ea){delete z[ea];});return y;},getLastTTIAndE2EImageResponseEnds:function(y,z,aa){var ba={TTI:y,E2E:z};if(!p.timing)return ba;var ca=aa.filter(function(fa){return fa.ts<=y;}).map(function(fa){return fa.uri;}).reduce(function(fa,ga){fa[ga]=true;return fa;},{}),da=aa.map(function(fa){return fa.uri;}).reduce(function(fa,ga){fa[ga]=true;return fa;},{});for(var ea in q)q[ea].forEach(function(fa){if(fa.type==='img'){if(ca[ea])ba.TTI=Math.max(ba.TTI,fa.responseEnd);if(da[ea])ba.E2E=Math.max(ba.E2E,fa.responseEnd);}});return ba;},getMetrics:function(y,z){q={};if(o(r))r=i.getURLToHashMap();s(q,y,z);return q;}};f.exports=x;},null);
__d('sourceMetaToString',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k;if(i.name){k=i.name;if(i.module)k=i.module+'.'+k;}else if(i.module)k=i.module+'.<anonymous>';if(j&&i.line){k=(k?k:'<anonymous>')+':'+i.line;if(i.column)k+=':'+i.column;}return k;}f.exports=h;},null);
__d('TimeSliceHelper',['ArtilleryExperiments','LogBuffer','sourceMetaToString'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={getMetrics:function(l,m,n,o){var p=i.read('time_slice'),q,r=[],s=function(t){var u;if(t.guard){var v=j(t),w=t.guard.toString();u=v?w+' at '+v:w;}else u='JS['+t.count+']';if(h.artillery_timeslice_edges){r.push({begin:t.begin,end:t.end,name:u,id:t.id,parentID:t.parentID});}else r.push({begin:t.begin,end:t.end,name:u});};p.forEach(function(t){if(l&&t.end<l||m&&t.begin>m)return;if(t.end-t.begin<n){if(q&&t.begin-q.end<o){q.end=t.end;q.count++;}else{if(q)s(q.count==1?q.first:q);q={begin:t.begin,end:t.end,count:1,first:t,guard:false,id:undefined,parentID:undefined};}}else s(t);});if(q)s(q.count==1?q.first:q);return r;}};f.exports=k;},null);
__d('ArtilleryLogger',['Arbiter','Banzai','BigPipe','ImageTimingHelper','Map','NavigationMetrics','NavigationTimingHelper','PageletEventsHelper','PerfXLogger','ResourceTimingBootloaderHelper','TimeSliceHelper','forEachObject','performance','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v='__user_annotations',w=new l(),x=new l(),y=false,z=new l();function aa(na){if(!w.has(na))w.set(na,{});}function ba(na){na.subscribe(j.Events.tti,function(oa,pa){var qa=pa.ts,ra=pa.lid,sa=pa.metrics;aa(ra);var ta=w.get(ra);ta.t_bigpipe_tti=qa;s(sa,function(ua,va){ta[va]=ua;});});}function ca(na){na.subscribe(j.Events.displayed,function(oa,pa){var qa=pa.ts,ra=pa.lid;aa(ra);w.get(ra).t_marker_all_pagelets_displayed=qa;});}function da(na){na.subscribe(j.Events.loaded,function(oa,pa){var qa=pa.ts,ra=pa.lid;aa(ra);w.get(ra).t_marker_bigpipe_e2e=qa;});}function ea(na,oa,pa){var qa=pa;if(!x.has(qa)||!w.has(qa))return null;var ra=w.get(qa);ia(ra);if(na==='normal'){ra.navigation_timing=n.getNavTimings();ra.resource_timing_bootloader=q.getMetrics(0,qa);ra.time_slice=r.getMetrics(t.timing.navigationStart,ra.t_onload,1,1);}else if(na==='quickling'&&t.getEntriesByName){var sa=t.getEntriesByName(oa);if(sa.length){var ta=sa[0].startTime;ra.navigation_timing=n.getAsyncRequestTimings(oa);ra.resource_timing_bootloader=q.getMetrics(ta,qa);ra.time_slice=r.getMetrics(t.timing.navigationStart+ta,ra.t_onload,1,1);}}if(t&&t.navigation)ma.recordUserAnnotation('nav_type',fa(t.navigation.type));ra.pagelet_events=o.getMetrics(qa);la(qa);ka(ra);var ua=babelHelpers['extends']({},ra,x.get(qa));if(z.size){ua[v]={};z.forEach(function(va,wa){ua[v][wa]=va;});}x['delete'](qa);w['delete'](qa);return ua;}function fa(na){switch(na){case 0:return 'TYPE_NAVIGATE';case 1:return 'TYPE_RELOAD';case 2:return 'TYPE_BACK_FORWARD';case 255:return 'TYPE_RESERVED';default:return 'unknown navigation type';}}function ga(na){i.post('artillery_logger_data',na,i.VITAL);}function ha(){m.addListener(m.Events.NAVIGATION_DONE,function(na,oa){var pa=oa.pageType,qa=oa.pageURI,ra=oa.serverLID,sa=ea(pa,qa,ra);u(function(){if(sa!=null){ja(ra,sa);ga(sa);}});});}function ia(na){if(window.CavalryLogger)(function(){var oa=window.CavalryLogger.getInstance(),pa=['t_domcontent','t_tti','t_onload'];pa.forEach(function(qa){if(oa.values.hasOwnProperty(qa))na[qa]=oa.values[qa];});})();}function ja(na,oa){var pa=p.getPayload(na);if(pa)oa.perfx={page:pa.perfx_page,page_type:pa.perfx_page_type,tti:pa.tti,e2e:pa.e2e};}function ka(na){if(window.CavalryLogger)q.addBootloaderMetricsToResourceTimings(na.resource_timing_bootloader,window.CavalryLogger.getInstance().bootloader_metrics,true);}function la(na){var oa=w.get(na),pa=t.timing.navigationStart,qa=oa.t_bigpipe_tti,ra=oa.t_marker_bigpipe_e2e,sa=k.getImageTimings(na),ta=q.getLastTTIAndE2EImageResponseEnds(qa,ra,sa),ua=ta.TTI,va=ta.E2E;if(!isNaN(ua)&&ua!==pa)oa.t_tti_with_images=ua;if(!isNaN(va)&&va!==pa)oa.t_marker_bigpipe_e2e_with_images=va;}var ma={enableProfilingWithClientData:function(na,oa){aa(na);if(y)return;y=true;o.init();h.subscribe(j.Events.init,function(pa,qa){var ra=qa.arbiter;if(ra){ba(ra);ca(ra);da(ra);}});ha();x.set(na,oa);},recordUserAnnotation:function(na,oa){var pa=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(!pa&&z.has(na))return false;z.set(na,oa);return true;}};f.exports=ma;},null);
__d('ArtillerySegment',['ImmutableObject','invariant','performanceAbsoluteNow'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=0;function l(m){'use strict';!m?i(0):undefined;!('category' in m&&'description' in m)?i(0):undefined;this.$ArtillerySegment1=false;this.$ArtillerySegment2=Object.assign({},m,{id:(k++).toString(36)});this.$ArtillerySegment3=[];}l.prototype.getID=function(){'use strict';return this.$ArtillerySegment2.id;};l.prototype.begin=function(){'use strict';this.$ArtillerySegment2.begin=j();return this;};l.prototype.end=function(){'use strict';this.$ArtillerySegment2.end=j();return this;};l.prototype.appendChild=function(){'use strict';!!this.$ArtillerySegment1?i(0):undefined;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];n.forEach(function(p){this.$ArtillerySegment3.push(p.getID());}.bind(this));return this;};l.prototype.setPosted=function(){'use strict';this.$ArtillerySegment1=true;return this;};l.prototype.getPostData=function(){'use strict';return new h(this.$ArtillerySegment2,{children:this.$ArtillerySegment3.slice()});};f.exports=l;},null);
__d('ArtillerySequence',['ImmutableObject','invariant'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=0;function k(l){'use strict';!l?i(0):undefined;!('description' in l)?i(0):undefined;this.$ArtillerySequence1=false;this.$ArtillerySequence2=Object.assign({},l,{id:(j++).toString(36)});this.$ArtillerySequence3=[];}k.prototype.getID=function(){'use strict';return this.$ArtillerySequence2.id;};k.prototype.addSegment=function(){'use strict';!!this.$ArtillerySequence1?i(0):undefined;for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];m.forEach(function(o){this.$ArtillerySequence3.push(o.getID());}.bind(this));return this;};k.prototype.setPosted=function(){'use strict';this.$ArtillerySequence1=true;return this;};k.prototype.getPostData=function(){'use strict';return new h(this.$ArtillerySequence2,{segments:this.$ArtillerySequence3.slice()});};f.exports=k;},null);
__d('ArtilleryTrace',['ArtillerySegment','ArtillerySequence','ImmutableObject','invariant','mixInEventEmitter'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(){'use strict';this.$ArtilleryTrace1=false;this.$ArtilleryTrace2=undefined;this.$ArtilleryTrace3=undefined;this.$ArtilleryTrace4={};this.$ArtilleryTrace5=[];this.$ArtilleryTrace6=[];this.$ArtilleryTrace7={};this.$ArtilleryTrace8=[];}m.prototype.createSequence=function(n){'use strict';!!this.$ArtilleryTrace1?k(0):undefined;var o=new i(n);this.$ArtilleryTrace5.push(o);return o;};m.prototype.createSegment=function(n){'use strict';!!this.$ArtilleryTrace1?k(0):undefined;var o=new h(n);this.$ArtilleryTrace6.push(o);return o;};m.prototype.markSegment=function(n,o){'use strict';!!this.$ArtilleryTrace1?k(0):undefined;this.$ArtilleryTrace7[o]=n.getID();return this;};m.prototype.connectTrace=function(n,o){'use strict';!!this.$ArtilleryTrace1?k(0):undefined;o=o||this.$ArtilleryTrace9;!o?k(0):undefined;this.$ArtilleryTrace8.push({segment:n.getID(),trace:o});return this;};m.prototype.setID=function(n,o){'use strict';!(!this.$ArtilleryTrace9&&!this.$ArtilleryTrace3)?k(0):undefined;this.$ArtilleryTrace9=n;this.$ArtilleryTrace3=o;return this;};m.prototype.getID=function(){'use strict';return this.$ArtilleryTrace9;};m.prototype.getArtillery2ID=function(){'use strict';return this.$ArtilleryTrace3;};m.prototype.addProperty=function(n,o){'use strict';this.$ArtilleryTrace4[n]=o;};m.prototype.post=function(){'use strict';!!this.$ArtilleryTrace1?k(0):undefined;this.$ArtilleryTrace1=true;var n=new j({id:this.$ArtilleryTrace9,artillery2Id:this.$ArtilleryTrace3,properties:this.$ArtilleryTrace4,sequences:this.$ArtilleryTrace5.map(function(o){return o.setPosted().getPostData();}),segments:this.$ArtilleryTrace6.map(function(o){return o.setPosted().getPostData();}),marks:Object.assign({},this.$ArtilleryTrace7),connections:this.$ArtilleryTrace8.slice()});this.emitAndHold('post',n);};m.prototype.isPosted=function(){'use strict';return this.$ArtilleryTrace1;};l(m,{post:true});f.exports=m;},null);
__d("ClientServiceWorkerMessage",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){"use strict";this.$ClientServiceWorkerMessage1=i;this.$ClientServiceWorkerMessage2=j;this.$ClientServiceWorkerMessage3=k;}h.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var i=new self.MessageChannel();if(this.$ClientServiceWorkerMessage3)i.port1.onmessage=this.$ClientServiceWorkerMessage3;navigator.serviceWorker.controller.postMessage({command:this.$ClientServiceWorkerMessage1,data:this.$ClientServiceWorkerMessage2},[i.port2]);};f.exports=h;},null);
__d('ServiceWorkerRegistration',['Promise'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='serviceWorker' in navigator;function j(){var l=navigator.serviceWorker;if(!i||!l)throw new Error('serviceWorker is not supported in this browser');return l;}var k={isSupported:function(){return i;},registerWorkerIfUnregistered:function(l){var m=j();return new h(function(n,o){this.getWorkerRegistration(l).then(function(p){if(!p){m.register(l).then(function(){m.ready.then(n);});}else n(p);});}.bind(this));},getWorkerRegistration:function(l){var m=j();return m.getRegistration(l);}};f.exports=k;},null);
__d('Artillery',['ArtilleryTrace','Banzai','ClientServiceWorkerMessage','ServiceWorkerRegistration','forEachObject','invariant','mixInEventEmitter'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=false,p=false,q=[],r,s,t,u,v=false;function w(){if(o)return;o=true;i.subscribe(i.SHUTDOWN,function(){x.postAll();});}var x={isEnabled:function(){return p;},createTrace:function(){w();var y=new h();q.push(y);y.addListener('post',x.emitAndHold.bind(x,'posttrace'));return y;},getPageTrace:function(){!r?m(0):undefined;if(t)return t;t=x.createTrace().setID(r,s);l(u,function(y,z,aa){t.addProperty(z,y);});return t;},postAll:function(){q.forEach(function(y){return !y.isPosted()&&y.post();});},enable:function(){p=true;},setPageTraceID:function(y,z){!(!r&&!s)?m(0):undefined;r=y;s=z;if(v){var aa=new j('asw-sendStartupData',{traceID:s,windowStart:performance.timing.navigationStart},null);aa.sendViaController();}},setPageProperties:function(y){u=y;},enableLogServiceWorker:function(){if(k.isSupported())v=true;},getPageProperty:function(y){return u[y];},addPiggyback:function(y,z){if(window.CavalryLogger)window.CavalryLogger.getInstance().addPiggyback(y,z);}};n(x,{posttrace:true});f.exports=x;},null);
__d('TimingSegmentBuilder',['ArtilleryCategory','invariant','performance'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=j.timing&&j.timing.navigationStart,l={ABSOLUTE_TIME:'ABSOLUTE_TIME',RELATIVE_TIME:'RELATIVE_TIME',NEAREST_TIMING:'NEAREST_TIMING',PREVIOUS_SEGMENT:'PREVIOUS_SEGMENT'};function m(n){return typeof n==='number'&&n>0;}l.build=function(n,o,p){!o?i(0):undefined;!p.valueType?i(0):undefined;!p.timingMap?i(0):undefined;!(p.valueType!==l.RELATIVE_TIME||k)?i(0):undefined;var q=p.valueType===l.RELATIVE_TIME?k:0,r={},s={},t={},u={},v={},w={list:[],map:{}};if(p.timingOrder){var x=p.timingOrder.reduce(function(ba,ca){switch(typeof ca){case 'string':if(m(o[ca]))ba.push(ca);break;case 'object':if(Array.isArray(ca)){var da=ca.filter(function(ea){return m(o[ea]);});da.sort(function(ea,fa){return o[ea]-o[fa];});ba.push.apply(ba,da);}break;}return ba;},[]);for(var y=1;y<x.length;y++){var z=x[y-1],aa=x[y];r[aa]=z;s[z]=aa;}}p.timingMap.forEach(function(ba){!ba.description?i(0):undefined;!!t[ba.description]?i(0):undefined;if(ba.begin===l.NEAREST_TIMING){if(!m(o[ba.end]))return;ba.begin=r[ba.end];!ba.begin?i(0):undefined;}else if(ba.end===l.NEAREST_TIMING){if(!m(o[ba.begin]))return;ba.end=s[ba.begin];!ba.end?i(0):undefined;}var ca=o[ba.begin],da=o[ba.end];if(ca>0&&da>0&&(da-ca>0||ba.allowZeroLength)){var ea=n.createSegment({description:ba.description,category:ba.category||h.UNKNOWN,begin:ca+q,end:da+q});t[ba.description]=u[ba.end]=v[ba.begin]=ea;w.list.push(ea);w.map[ba.description]=ea;}});p.timingMap.forEach(function(ba){var ca=t[ba.description],da=ba.parent;if(ca&&da)if(da===l.PREVIOUS_SEGMENT){var ea=ba.begin;while(!u[ea]&&r[ea])ea=r[ea];var fa=u[ea];if(fa)fa.appendChild(ca);}else{!(da in t)?i(0):undefined;t[da].appendChild(ca);}});return w;};f.exports=l;},null);
__d('NavigationConfiguration',['ArtilleryCategory','TimingSegmentBuilder'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();f.exports={valueType:i.ABSOLUTE_TIME,timingOrder:['navigationStart','redirectStart','redirectEnd','fetchStart','domainLookupStart','domainLookupEnd','connectStart','secureConnectionStart','connectEnd','requestStart','responseStart','responseEnd'],timingMap:[{description:'navigation',begin:'navigationStart',end:'navigationStart',category:h.CLIENT,allowZeroLength:true},{description:'wait_for_redirect',begin:i.NEAREST_TIMING,end:'redirectStart',parent:i.PREVIOUS_SEGMENT,category:h.CLIENT_WAIT},{description:'redirect',begin:'redirectStart',end:i.NEAREST_TIMING,parent:i.PREVIOUS_SEGMENT,category:h.NETWORK},{description:'wait_for_fetch',begin:i.NEAREST_TIMING,end:'fetchStart',parent:i.PREVIOUS_SEGMENT,category:h.CLIENT_WAIT},{description:'app_cache',begin:'fetchStart',end:i.NEAREST_TIMING,parent:i.PREVIOUS_SEGMENT,category:h.CLIENT},{description:'domain_lookup',begin:'domainLookupStart',end:'domainLookupEnd',parent:i.PREVIOUS_SEGMENT,category:h.NETWORK},{description:'wait_for_connect',begin:i.NEAREST_TIMING,end:'connectStart',parent:i.PREVIOUS_SEGMENT,category:h.CLIENT_WAIT},{description:'connect',begin:'connectStart',end:i.NEAREST_TIMING,parent:i.PREVIOUS_SEGMENT,category:h.NETWORK},{description:'secure_connection',begin:'secureConnectionStart',end:i.NEAREST_TIMING,parent:i.PREVIOUS_SEGMENT,category:h.NETWORK},{description:'wait_for_request',begin:i.NEAREST_TIMING,end:'requestStart',parent:i.PREVIOUS_SEGMENT,category:h.CLIENT_WAIT},{description:'request',begin:'requestStart',end:i.NEAREST_TIMING,parent:i.PREVIOUS_SEGMENT,category:h.NETWORK},{description:'response',begin:'responseStart',end:'responseEnd',parent:i.PREVIOUS_SEGMENT,category:h.NETWORK}]};},null);
__d('MessengerArtilleryClient',['Promise','Artillery','ArtilleryCategory','ArtillerySequenceType','Banzai','MessengerPage','NavigationConfiguration','TimingSegmentBuilder','performance'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q={start:function(){if(!i.isEnabled()||!p.timing||!window._cstart)return;var u=i.getPageTrace();r(u);s(m.Events.JS_LOADED,m.Events.DATA_INITIALIZED,m.Events.APP_MOUNTED).then(function(v){var w=v[0],x=v[1],y=v[2],z=u.createSegment({category:j.CLIENT,description:'requiring_modules',begin:window._cstart,end:w}),aa=u.createSegment({category:j.CLIENT,description:'initializing_data',begin:w,end:x}),ba=u.createSegment({category:j.CLIENT,description:'mounting_app',begin:x,end:y}),ca=u.createSequence({description:'initialization',category:k.SEQUENCE_CLIENT});ca.addSegment(z,aa,ba);u.markSegment(ba,'e2e');u.post();});l.subscribe(l.SHUTDOWN,function(){return i.postAll();});}};function r(u){var v=o.build(u,p.timing,n),w=u.createSequence({description:'browser_navigation',category:k.SEQUENCE_CLIENT});v.list.forEach(function(x){return w.addSegment(x);});}function s(){for(var u=arguments.length,v=Array(u),w=0;w<u;w++)v[w]=arguments[w];return h.all(v.map(t));}function t(u){return new h(function(v){m.addRetroactiveListener(u,function(w){m.removeCurrentListener();v(w);});});}f.exports=q;},null);