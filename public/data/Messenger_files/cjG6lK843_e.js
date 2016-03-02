/*!CK:1466656803!*//*1456572438,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["J7lEz"]); }

__d('ArtilleryReporting',['Artillery','Banzai'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='artillery_javascript_trace',k=false;f.exports.init=function(){if(k)return;k=true;h.addRetroactiveListener('posttrace',function(l){i.post(j,l,{retry:true,delay:30*1000});});};},null);