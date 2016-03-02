/*!CK:2883309219!*//*1456240360,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6SSHe"]); }

__d("P2PPasswordProtectionStatusTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NOT_SET:0,DISABLED:1,ENABLED:2};},null);
__d('KappaWrapper',['AsyncSignal','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=false;f.exports={forceStart:function(k,l,m){var n=0,o=function(){new h('/si/kappa/',{Ko:"a"}).send();if(++n<k)i(o,l*1000);};i(o,(l+m)*1000);},start:function(k,l,m){if(!j){j=true;this.forceStart(k,l,m);}}};},null);
__d('P2PCreditCardForm.react',['CreditCardFormParam','FBPaymentsCreditCardForm.react','MessengerPaymentProductType','P2PAPIUtils','P2PAPI','React','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p=m.createClass({displayName:'P2PCreditCardForm',propTypes:{asyncRequestState:o.object,onValidation:o.func.isRequired,productType:o.oneOf(n(j))},getDefaultProps:function(){return {asyncRequestState:{},productType:j.P2P};},getInitialState:function(){return {binError:'',previousBINNumber:'',validateBINRequestID:''};},componentWillReceiveProps:function(q){var r=q.asyncRequestState,s=r?r[this.state.validateBINRequestID]:null;if(s){this.setState({validateBINRequestID:''});if(s.error){this.handleValidateBINNumberError(s.error);}else this.handleValidateBINNumberSuccess();}},handleValidateBINNumberSuccess:function(){this.setState({binError:''});},handleValidateBINNumberError:function(q){var r=q.message;this.setState({binError:r});},validateBIN:function(q){var r,s;q=q.replace(/ /g,'');r=q.substr(0,6);if(r!==this.state.previousBINNumber&&r.length>=6){s=k.genRequestID();this.setState({validateBINRequestID:s});l.validateBINNumber({binNumber:r,requestID:s});}else if(r.length<6)this.setState({binError:'',validateBINRequestID:''});this.setState({previousBINNumber:r});},handleValidation:function(q,r){var s=r[h.CARD_NUMBER];if(!this.props.editMode&&this.props.productType===j.P2P&&s)this.validateBIN(s);this.props.onValidation(q,r);},render:function(){return (m.createElement(i,babelHelpers['extends']({},this.props,{allowCredit:this.props.productType===j.MESSENGER_COMMERCE,binError:this.state.binError,onValidation:this.handleValidation})));}});f.exports=p;},null);
__d('P2PConfirmationDialog.react',['CurrentEnvironment','LayerFadeOnHide','LeftRight.react','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PText.react','P2PDialogTitle.react','React','cx','emptyFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){'use strict';if(c.__markCompiled)c.__markCompiled();var u=q.PropTypes,v=q.createClass({displayName:'P2PConfirmationDialog',propTypes:{allowBack:u.bool,buttonLabel:u.node.isRequired,buttonUse:u.string.isRequired,centered:u.bool,image:u.object.isRequired,onBackClick:u.func,onOKClick:u.func,onSecondaryClick:u.func,showCloseButton:u.bool,showSecondaryButton:u.bool,secondaryButtonLabel:u.node,secondaryButtonUse:u.string,title:u.string.isRequired},getDefaultProps:function(){return {buttonLabel:t._("OK"),buttonUse:'default',centered:false,onBackClick:s,onSecondaryClick:s,showCloseButton:false,showSecondaryButton:false,onOKClick:s,width:h.messengerdotcom?350:300};},getBackButton:function(){if(!this.props.allowBack)return null;return (q.createElement(k,{label:t._("Back"),onClick:this.props.onBackClick,use:'default'}));},getSecondaryButton:function(){if(!this.props.showSecondaryButton)return null;return (q.createElement(k,{label:this.props.secondaryButtonLabel,onClick:this.props.onSecondaryClick,use:this.props.secondaryButtonUse}));},render:function(){var w=h.messengerdotcom,x=[q.createElement('div',{className:"_465t",key:'confirmation_icon'},this.props.image),q.createElement(o,{className:"_465u"+(this.props.centered?' '+"_465v":''),key:'confirmation_text',type:'primary'},this.props.children)];if(w)x=q.createElement(j,{direction:'left'},x);return (q.createElement(l,{behaviors:babelHelpers['extends']({LayerFadeOnShow:false,LayerFadeOnHide:i},this.props.behaviors),className:"_465w"+(w?' '+"_465x":''),layerHideOnBlur:false,ref:'dialog',repositionOnUpdate:true,shown:true,width:this.props.width},q.createElement('div',{className:"_465y"},q.createElement(p,{className:"_465z",showCloseButton:this.props.showCloseButton},this.props.title),q.createElement(m,null,x),q.createElement(n,null,this.getBackButton(),this.getSecondaryButton(),q.createElement(k,{label:this.props.buttonLabel,onClick:this.props.onOKClick,use:this.props.buttonUse})))));}});f.exports=v;},null);
__d('P2PErrorDialog.react',['CurrentEnvironment','Image.react','P2PConfirmationDialog.react','P2PText.react','React','emptyFunction','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=l.PropTypes,q=l.createClass({displayName:'P2PErrorDialog',propTypes:{allowBack:p.bool,onBackClick:p.func,onOKClick:p.func,error:p.object,title:p.string},getDefaultProps:function(){return {allowBack:false,onBackClick:m,onOKClick:m,error:null,title:n._("Problem")};},renderErrorContent:function(){var r=this.props.error;if(r.message.__html){return (l.createElement(k,{dangerouslySetInnerHTML:r.message,type:'primary'}));}else return l.createElement(k,{type:'primary'},r.message);},getImage:function(){if(h.messengerdotcom){return (l.createElement(i,{height:62,width:62,src:o('/images/p2p/confirmation-error-messengerdotcom.png')}));}else return (l.createElement(i,{height:55,width:55,src:o('/images/p2p/confirmation-error.png')}));},render:function(){var r=this.getImage();return (l.createElement(j,{allowBack:this.props.allowBack,behaviors:babelHelpers['extends']({},this.props.behaviors),centered:this.props.centered,image:r,onBackClick:this.props.onBackClick,onOKClick:this.props.onOKClick,title:this.props.title,width:this.props.width},this.renderErrorContent()));}});f.exports=q;},null);
__d('LayerSlowlyFadeOnShow',['LayerFadeOnShow'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=500,j=h.forDuration(i);f.exports=j;},null);
__d('P2PSuccessDialog.react',['CurrentEnvironment','Image.react','LayerSlowlyFadeOnShow','P2PConfirmationDialog.react','React','emptyFunction','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=l.PropTypes,q=l.createClass({displayName:'P2PSuccessDialog',propTypes:{buttonLabel:p.node,buttonUse:p.string,onOKClick:p.func,onSecondaryClick:p.func,showCloseButton:p.bool,showSecondaryButton:p.bool,secondaryButtonLabel:p.node,secondaryButtonUse:p.string,title:p.string.isRequired},getDefaultProps:function(){return {allowBack:false,buttonLabel:n._("OK"),buttonUse:'default',onOKClick:m,showCloseButton:false,width:h.messengerdotcom?350:300};},getImage:function(){if(h.messengerdotcom){return (l.createElement(i,{height:62,width:62,src:o('/images/p2p/checkmark-messenger.png')}));}else return (l.createElement(i,{height:56,width:56,src:o('/images/p2p/check_mark-sm.png')}));},render:function(){var r=this.getImage();return (l.createElement(k,{behaviors:babelHelpers['extends']({LayerSlowlyFadeOnShow:j},this.props.behaviors),allowBack:this.props.allowBack,buttonLabel:this.props.buttonLabel,buttonUse:this.props.buttonUse,centered:this.props.centered,image:r,onOKClick:this.props.onOKClick,onSecondaryClick:this.props.onSecondaryClick,showCloseButton:this.props.showCloseButton,showSecondaryButton:this.props.showSecondaryButton,secondaryButtonLabel:this.props.secondaryButtonLabel,secondaryButtonUse:this.props.secondaryButtonUse,title:this.props.title,width:this.props.width},this.props.children));}});f.exports=q;},null);
__d('P2PAddCardForIncentivesSuccessDialog.react',['React','P2PSuccessDialog.react','P2PText.react','XUIText.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=h.PropTypes,o=h.createClass({displayName:'P2PAddCardForIncentivesSuccessDialog',propTypes:{amount:n.string.isRequired,onClose:n.func.isRequired,onOKClick:n.func.isRequired},renderBoldAmountText:function(){return (h.createElement(k,{weight:'bold'},m._("We sent {Amount user will receive} to your bank account.",[m.param('Amount user will receive',this.props.amount)])));},render:function(){return (h.createElement(i,{buttonLabel:m._("Send to a Friend"),buttonUse:'confirm',onOKClick:this.props.onOKClick,onSecondaryClick:this.props.onClose,showCloseButton:true,showSecondaryButton:true,secondaryButtonLabel:m._("Keep It"),title:'Card Added'},h.createElement(j,{type:'primary'},m._("{Reminder we sent money to the user's bank account} Your bank might take 2-3 days to make it available.",[m.param('Reminder we sent money to the user\'s bank account',this.renderBoldAmountText())])),h.createElement(j,{className:"_j_9",type:'primary'},m._("What will you do with your {Amount user will receive}?",[m.param('Amount user will receive',this.props.amount)]))));}});f.exports=o;},null);
__d('P2PAddCreditCardDialog.react',['CurrentEnvironment','Link.react','MessengerPaymentProductType','P2PAPI','P2PAPIUtils','P2PCreditCardStore','P2PCreditCardForm.react','P2PLoadingMask.react','P2PLogger','P2PPaymentLoggerEvent','P2PLinkConstants','React','P2PButton.react','P2PDialog.react','P2PDialogTitle.react','P2PDialogBody.react','P2PDialogFooter.react','P2PText.react','cx','emptyFunction','fbt','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){'use strict';if(c.__markCompiled)c.__markCompiled();var da=s.PropTypes,ea='fbP2PAddCreditCardDialog_learnMoreSentenceID',fa=s.createClass({displayName:'P2PAddCreditCardDialog',propTypes:{cancelButtonText:da.string,eventFlow:da.string.isRequired,loggingData:da.object,loggingObjectID:da.string,onCancel:da.func,onSuccess:da.func,productType:da.oneOf(ca(j)),saveButtonText:da.string,showCancelButton:da.bool,text:da.string,title:da.string},getDefaultProps:function(){var ga;if(h.messengerdotcom){ga=480;}else ga=430;return {cancelButtonText:ba._("Cancel"),loggingData:{},onCancel:aa,onSuccess:aa,productType:j.P2P,saveButtonText:ba._("Save"),showCancelButton:true,text:ba._("Please enter a debit card. Credit cards can't be used."),title:ba._("Add Debit Card"),width:ga};},getInitialState:function(){return {isValid:false,formData:{},loading:false,requestID:'',saveErrors:null};},onCreditCardStoreChange:function(){var ga=m.getAsyncRequestState(),ha=ga[this.state.requestID];this.setState({asyncRequestState:ga});if(ha){this.setState({requestID:''});if(ha.error){this.handleOnSaveError(ha.error);}else this.handleOnSaveSuccess(ha);}},componentDidMount:function(){this.log(q.UI_ACTN_INITIATE_ADD_CARD);this.creditCardStoreSub=m.addListener('change',this.onCreditCardStoreChange);},componentWillUnmount:function(){if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null;}},log:function(ga,ha){p.log(ga,babelHelpers['extends']({www_event_flow:this.props.eventFlow,object_id:this.props.loggingObjectID},this.props.loggingData,ha));},onSaveClick:function(){var ga=l.genRequestID();this.setState({loading:true,requestID:ga,saveErrors:null});this.log(q.UI_ACTN_CONFIRM_CARD_DETAILS);k.addCreditCard(babelHelpers['extends']({requestID:ga,product_type:this.props.productType},this.state.formData));},handleOnSaveSuccess:function(ga){this.props.onSuccess(ga);this.log(q.UI_ACTN_ADD_CARD_SUCCESS);},handleOnSaveError:function(ga){this.setState({loading:false,saveErrors:ga});this.log(q.UI_ACTN_ADD_CARD_FAIL,{message:ga&&ga.general?ga.general.message:''});},handleValidation:function(ga,ha){this.setState({isValid:ga,formData:ha});},isSaveButtonDisabled:function(){return this.state.loading||!this.state.isValid;},onToggle:function(ga){if(!ga){this.props.onCancel();this.log(q.UI_ACTN_CANCEL_ADD_CARD);}},onCancelClicked:function(){this.onToggle(false);},renderAddCardForm:function(){var ga,ha=this.props.title;if(this.props.showCancelButton)ga=s.createElement(t,{use:'default',size:'medium',label:this.props.cancelButtonText,disabled:this.state.loading,onClick:this.onCancelClicked});return (s.createElement('div',null,s.createElement(v,null,ha),s.createElement(w,null,s.createElement(y,{type:'primary',className:"_3-96"},this.props.text),s.createElement(n,{asyncRequestState:this.state.asyncRequestState,compactMode:true,onValidation:this.handleValidation,productType:this.props.productType,saveErrors:this.state.saveErrors,showIcons:false,showLabels:true,showPlaceholderOnFocus:true,showSecondaryIcons:true,useGutters:true}),s.createElement(y,{className:"_3-8y",id:ea,type:'secondary'},ba._("Your payment info is stored securely."),s.createElement('div',null,s.createElement(i,{'aria-describedby':ea,href:r.addDebitCardHelpURI,target:'_blank'},ba._("Learn More"))))),s.createElement(x,{leftContent:this.props.leftContent},ga,s.createElement(t,{use:'confirm',size:'medium',label:this.props.saveButtonText,disabled:this.isSaveButtonDisabled(),onClick:this.onSaveClick}))));},render:function(){return (s.createElement(u,{behaviors:this.props.behaviors,layerHideOnBlur:false,ref:'dialog',onToggle:this.onToggle,repositionOnUpdate:true,shown:true,width:this.props.width},this.renderAddCardForm(),s.createElement(o,{visible:this.state.loading})));}});f.exports=fa;},null);
__d('P2PFriendPickerDialog.react',['P2PActions','P2PDialog.react','P2PDialogBody.react','P2PDialogTitle.react','P2PFriendPicker.react','P2PSendMoneyNUXDialog.react','P2PTransferStore','React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){'use strict';if(c.__markCompiled)c.__markCompiled();var r=o.PropTypes,s=o.createClass({displayName:'P2PFriendPickerDialog',propTypes:{amount:r.string,buttonLabel:r.node,eventFlow:r.string.isRequired,onClose:r.func.isRequired,referrer:r.string,subTitle:r.node,title:r.node},getDefaultProps:function(){return {amount:'',title:q._("Select Friend"),subTitle:q._("These are your friends who are able to receive money.")};},getInitialState:function(){return {sendMoneyNUXDismissed:false};},handleToggle:function(t){if(!t)this.props.onClose();},handleNUXNextClick:function(){this.setState({sendMoneyNUXDismissed:true});},render:function(){var t=445;if(!this.state.sendMoneyNUXDismissed&&n.shouldShowSenderNUX())return (o.createElement(m,{eventFlow:this.props.eventFlow,onToggle:this.handleToggle,onNextClick:this.handleNUXNextClick,width:t}));return (o.createElement(i,{onToggle:this.handleToggle,width:t},o.createElement(k,null,o.createElement('div',{className:"_4ia-"},this.props.title)),o.createElement(j,{className:"_4ib0"},o.createElement(l,{amount:this.props.amount,buttonLabel:this.props.buttonLabel,eventFlow:this.props.eventFlow,onFriendSelected:this.props.onClose,referrer:this.props.referrer,sendMoneyNUXDismissed:this.state.sendMoneyNUXDismissed,subTitle:this.props.subTitle}))));}});f.exports={module:s,render:function(t){h.showDialog(s,babelHelpers['extends']({title:q._("Send Money to Friends")},t,{onClose:h.hideDialog}));}};},null);
__d('P2PPasswordProtectionNUXDialog.react',['CurrentEnvironment','Link.react','P2PAPI','P2PErrorDialog.react','P2PLinkConstants','P2PLoadingMask.react','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPasswordProtectionParam','P2PPasswordProtectionStatusTypes','React','P2PButton.react','P2PDialog.react','P2PDialogTitle.react','P2PDialogBody.react','P2PDialogFooter.react','P2PText.react','cx','emptyFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){'use strict';if(c.__markCompiled)c.__markCompiled();var ca=s.PropTypes,da=s.createClass({displayName:'P2PPasswordProtectionNUXDialog',propTypes:{onComplete:ca.func},getDefaultProps:function(){return {onComplete:aa,width:h.messengerdotcom?320:300};},getInitialState:function(){return {saveErrorObject:null,loading:false};},componentWillMount:function(){this.log(o.UI_ACTN_INITIATE_PASSWORD_PROTECTION_NUX);},log:function(ea,fa){n.log(ea,babelHelpers['extends']({www_event_flow:p.UI_FLOW_P2P_SETTINGS},fa));},onSaveClick:function(){this.setState({loading:true,saveErrorObject:null});this.setPasswordProtection(r.ENABLED);this.log(o.UI_ACTN_OPT_IN_PASSWORD_PROTECTION_NUX);},setPasswordProtection:function(ea){var fa={};fa[q.STATUS]=ea;j.setPasswordProtectionSetting({formData:fa,success:this.handleOnSaveSuccess,error:this.handleOnSaveError});},handleOnSaveSuccess:function(){this.setState({loading:false});this.props.onComplete();},handleOnSaveError:function(ea){this.setState({loading:false,saveErrorObject:ea});},isSaveButtonDisabled:function(){return this.state.loading;},isCancelButtonDisabled:function(){return this.state.loading;},onCancelClick:function(){this.setState({loading:true,saveErrorObject:null});this.setPasswordProtection(r.DISABLED);this.log(o.UI_ACTN_OPT_OUT_PASSWORD_PROTECTION_NUX);},handleErrorBackClick:function(){this.setState({saveErrorObject:null});},handleErrorOKClick:function(){this.setState({saveErrorObject:null});this.props.onComplete();},render:function(){if(this.state.saveErrorObject)return (s.createElement(k,{allowBack:true,title:ba._("Problem Saving"),onBackClick:this.handleErrorBackClick,onOKClick:this.handleErrorOKClick,error:this.state.saveErrorObject}));return (s.createElement(u,{className:h.messengerdotcom?"_-el":'',behaviors:{LayerFadeOnShow:false},layerHideOnBlur:false,shown:true,width:this.props.width},s.createElement(v,{showCloseButton:false},ba._("Use Password?")),s.createElement(w,null,s.createElement(y,{className:"_5sor",type:'primary'},ba._("For additional security, you can enter your Facebook password to send money. You can always update this in {link}.",[ba.param('link',s.createElement(i,{href:l.settingsWWWURI,target:'_blank'},ba._("Settings")))]))),s.createElement(x,null,s.createElement(t,{className:"_5sov",disabled:this.isCancelButtonDisabled(),label:ba._("Not Now"),onClick:this.onCancelClick,size:'medium',use:'default'}),s.createElement(t,{className:"_5sox",disabled:this.isSaveButtonDisabled(),label:ba._("Use Password"),onClick:this.onSaveClick,size:'medium',use:'confirm'})),s.createElement(m,{visible:this.state.loading})));}});f.exports=da;},null);
__d('P2PAddCardForIncentivesDialog.react',['P2PAddCardForIncentivesSuccessDialog.react','P2PAddCreditCardDialog.react','P2PAPI','P2PLogger','P2PPasswordProtectionNUXDialog.react','P2PPasswordProtectionStatusTypes','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','React','emptyFunction','fbt','P2PFriendPickerDialog.react'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';if(c.__markCompiled)c.__markCompiled();var s=c('P2PFriendPickerDialog.react').module,t=p.PropTypes,u=p.createClass({displayName:'P2PAddCardForIncentivesDialog',propTypes:{amount:t.string.isRequired,eventFlow:t.string,onClose:t.func.isRequired,onCancel:t.func.isRequired,onSuccess:t.func},getDefaultProps:function(){return {eventFlow:o.UI_FLOW_FINANCIAL_INCENTIVES,onCancel:q,onSuccess:q};},getInitialState:function(){return {passwordProtectionNUXDialogShown:false,showConfirmation:false,showFriendPicker:false};},log:function(v,w){k.log(v,babelHelpers['extends']({www_event_flow:this.props.eventFlow},w));},handleAddCardSuccess:function(v){if(this.props.onSuccess)this.props.onSuccess();v.success=this.handleIncentivesTransferSuccess;v.error=this.handleIncentivesTransferFailure;j.createFinancialIncentivesTransfer(v);this.setState({showConfirmation:true,passwordProtectionNUXDialogShown:v.passwordProtection===m.NOT_SET});},handleIncentivesTransferSuccess:function(){this.log(n.UI_ACTN_INCENTIVE_TRANSFER_SUCCESS);},handleIncentivesTransferFailure:function(v){this.log(n.UI_ACTN_INCENTIVE_TRANSFER_FAILURE,v.message);},handleAddCardCancelled:function(){this.props.onCancel();},handleConfirmationClosed:function(){this.handleClose();this.log(n.UI_ACTN_FI_CANCEL);},handleConfirmationNext:function(){this.log(n.UI_ACTN_FI_SUCCESS_DIALOG_NEXT);this.setState({showConfirmation:false,showFriendPicker:true});},handleClose:function(){this.props.onClose();},handlePasswordProtectionNUXComplete:function(){this.setState({passwordProtectionNUXDialogShown:false,showConfirmation:true});},render:function(){if(this.state.passwordProtectionNUXDialogShown){return (p.createElement(l,{onComplete:this.handlePasswordProtectionNUXComplete}));}else if(this.state.showConfirmation){return (p.createElement(h,{amount:this.props.amount,onClose:this.handleConfirmationClosed,onOKClick:this.handleConfirmationNext}));}else if(this.state.showFriendPicker){return (p.createElement(s,{amount:this.props.amount,eventFlow:this.props.eventFlow,onClose:this.handleClose}));}else return (p.createElement(i,{eventFlow:this.props.eventFlow,onCancel:this.handleAddCardCancelled,onSuccess:this.handleAddCardSuccess,text:r._("We'll send {Amount you will receive} to your bank account when you add a debit card. Credit cards can't be used.",[r.param('Amount you will receive',this.props.amount)])}));}});f.exports=u;},null);