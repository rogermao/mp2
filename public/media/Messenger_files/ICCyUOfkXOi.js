/*!CK:48028660!*//*1455911406,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["yiard"]); }

__d('P2PSendMoneyNUXListItems.react',['Image.react','P2PListRow.react','P2PText.react','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'P2PSendMoneyNUXListItems',propTypes:{offset:n.oneOf(['small','medium'])},getDefaultProps:function(){return {size:'small'};},renderRow:function(p,q){return (k.createElement(i,{offset:this.props.size},k.createElement(h,p),k.createElement(j,{type:'primary'},q)));},render:function(){var p=this.props.size;return (k.createElement('div',null,this.renderRow(p==='small'?{height:18,src:m('/images/p2p/nux/nux_checkmark_small.png'),width:18}:{height:36,src:m('/images/p2p/nux/nux_checkmark_medium.png'),width:36},l._("It's FREE to send and receive money.")),this.renderRow(p==='small'?{height:27,src:m('/images/p2p/nux/nux_lock_small.png'),width:18}:{height:54,src:m('/images/p2p/nux/nux_lock_medium.png'),width:36},l._("Industry-leading security \u2014 password protection, anti-fraud team and more.")),this.renderRow(p==='small'?{height:13,src:m('/images/p2p/nux/nux_debitcard_small.png'),width:18}:{height:26,src:m('/images/p2p/nux/nux_debitcard_medium.png'),width:36},l._("Send money from your debit card to theirs."))));}});f.exports=o;},null);