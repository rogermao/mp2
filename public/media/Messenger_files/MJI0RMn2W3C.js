/*!CK:1214476356!*//*1452214199,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["gGarz"]); }

__d('P2PUserEligibilityContainer.react',['immutable','P2PUserEligibilityStore','React','StoreAndPropBasedStateMixin'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.PropTypes,m=j.createClass({displayName:'P2PUserEligibilityContainer',propTypes:{participants:l.instanceOf(h.List)},mixins:[k(i)],statics:{calculateState:function(n){var o=n.participants,p,q;if(o){q=o.map(function(r){return r.userID;}).toArray();p=i.getEligibilityByUserIDs(q);}return {p2pEligibilities:p};}},render:function(){var n=j.Children.only(this.props.children);return j.cloneElement(n,{p2pEligibilities:this.state.p2pEligibilities});}});f.exports=m;},null);