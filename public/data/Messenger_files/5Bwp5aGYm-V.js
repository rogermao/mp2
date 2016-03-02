/*!CK:13749730!*//*1456170533,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ihDtu"]); }

__d('FBPaymentsFormField.react',['React','ReactDOM','ReactInputSelection','XUITextInput.react','cloneWithProps_DEPRECATED','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p=49,q=h.createClass({displayName:'FBPaymentsFormField',propTypes:{autoCompleteName:o.string,cursorPositionUpdater:o.func,disabled:o.bool,errorMessage:o.string,formatValue:o.func,icon:o.shape({normal:o.object,focused:o.object}),initiallyFocused:o.bool,getSecondaryIcon:o.func,hideSecondaryIconOnBlur:o.bool,label:o.string,name:o.string.isRequired,placeholder:o.string,onChange:o.func.isRequired,required:o.bool,saveError:o.string,showFocusOutline:o.bool,showPlaceholderOnFocus:o.bool,showSecondaryIconAlways:o.bool,useGutter:o.bool,validate:o.func,value:o.string,width:o.number},getDefaultProps:function(){return {hideSecondaryIconOnBlur:false,required:false,saveError:'',showFocusOutline:true,showPlaceholderOnFocus:false,showSecondaryIconAlways:false,useGutter:false,width:100};},getInitialState:function(){return {cursorPosition:0,isValid:false,focused:false,value:this.props.value||''};},_isModified:false,_lastKeyCode:p,componentDidUpdate:function(r,s){if(s.cursorPosition!==this.state.cursorPosition)j.setSelection(this.getInputElement(),{start:this.state.cursorPosition});if(this.props.saveError!==r.saveError)this.triggerChange(this.state.value);},componentDidMount:function(){var r=this.state.value;if(r)this.triggerChange(r);if(this.props.initiallyFocused)setTimeout(function(){if(this.isMounted())this.focusInput();}.bind(this),100);},getInputElement:function(){return this.refs.input.refs.textInput.getTextFieldDOM();},getCursorPosition:function(){return (j.getSelection(this.getInputElement()).start);},handleBlur:function(r){var s=this.getInputElement().value;if(s&&s!==this.state.value)this.triggerChange(s);this.setState({focused:false});},handlePaste:function(r){this._lastKeyCode=p;},handleChange:function(r){this.triggerChange(r.target.value);},handleOnKeyDown:function(r){var s=r.keyCode;if(s>=96&&s<=105)s-=48;this._lastKeyCode=s;},handleFocus:function(r){this.setState({focused:true});},focusInput:function(){i.findDOMNode(this.refs.input).focus();},renderIcon:function(){var r,s=this.props.icon;if(!s)return null;r=this.state.focused?s.focused:s.normal;return (h.createElement('div',{className:"_2_97"},r));},renderSecondaryIcon:function(){var r;if(!this.state.focused&&!this.props.showSecondaryIconAlways&&(this.props.hideSecondaryIconOnBlur||!this._isModified))return null;if(this.props.getSecondaryIcon)r=this.props.getSecondaryIcon(this.state.value);if(!r)return null;return l(r,{className:n(r,"_2_98")});},shouldShowIsValidError:function(){if(!this.state.isValid&&this._isModified)return !this.state.focused||!!this.state.isValAtLimit;return false;},triggerChange:function(r){this._isModified=true;var s=this.props.cursorPositionUpdater,t=this.state.cursorPosition,u=r,v=true,w=false,x=this.props.limit;if(this.props.formatValue&&!this.props.disabled)u=this.props.formatValue(r,this.state.value,this._lastKeyCode);if(x){if(typeof x==='function')x=x(u);u=u.slice(0,x);w=x===u.length;}if(!this.props.disabled)if(this.props.validate){v=this.props.validate(u);}else if(x){v=w;}else if(this.props.required)v=!!u;if(s&&r!==u)t=s(u,r,this.getCursorPosition(),' ');this.setState({cursorPosition:t,isValAtLimit:w,isValid:v,value:u});this.props.onChange(this.props.name,u,v,w);},renderLabel:function(){if(!this.props.label)return null;return (h.createElement('label',{className:"_2_99"},this.props.label));},render:function(){var r=this.shouldShowIsValidError()||this.props.saveError||this.props.errorMessage,s,t=this.props.placeholder,u=this.renderSecondaryIcon();if(this.props.width)s={width:this.props.width+'%'};if(this.props.showPlaceholderOnFocus&&!this.state.focused)t=null;return (h.createElement('div',{style:s,className:"_2_9a"+(r?' '+"_2_9b":'')+(this.props.showFocusOutline&&!r&&this.state.focused?' '+"_2_9c":'')+(!!u?' '+"_2_9d":'')},h.createElement('div',{className:this.props.useGutter?"_2_9e":''},this.renderLabel(),h.createElement('div',{className:"_2_9f"},this.renderIcon(),h.createElement(k,{autoComplete:this.props.autoCompleteName,ref:'input',value:this.state.value,onChange:this.handleChange,onPaste:this.handlePaste,onKeyDown:this.handleOnKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,placeholder:t,disabled:this.props.disabled,className:"_2_9g"+(!this.props.icon?' '+"_2_9h":''),xuiError:this.props.errorMessage}),u,h.createElement('div',{className:"_2_9i"})))));}});f.exports=q;},null);