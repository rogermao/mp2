/*!CK:1814898496!*//*1456170533,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6\/Y5J"]); }

__d('FBPaymentsCreditCardZipCodeFormField.react',['Image.react','FBPaymentsFormField.react','FBPaymentsFormFieldUtils','React','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'FBPaymentsCreditCardZipCodeFormField',propTypes:{onChange:n.func.isRequired,name:n.string.isRequired,showIcon:n.bool,showPlaceholder:n.bool},getDefaultProps:function(){return {showIcon:true,showPlaceholder:true};},getLimit:function(){return 5;},render:function(){var p=l._("Billing ZIP Code"),q,r,s;if(this.props.showLabel){s=p;q='00000';}else if(this.props.showPlaceholder)q=p;if(this.props.showIcon)r={normal:k.createElement(h,{height:12,src:m('/images/p2p/place-grey_s.png'),width:12}),focused:k.createElement(h,{height:12,src:m('/images/p2p/place-blue_s.png'),width:12})};return (k.createElement(i,babelHelpers['extends']({autoCompleteName:'postal-code',formatValue:j.stripNonDigits,icon:r,label:s,limit:this.getLimit(),placeholder:q,ref:'input'},this.props)));}});f.exports=o;},null);