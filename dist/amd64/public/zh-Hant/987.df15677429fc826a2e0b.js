(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[987],{9457:function($,F){var o,v;void 0!==(v="function"==typeof(o=function(){"use strict";function T(r,s,E){var a=new XMLHttpRequest;a.open("GET",r),a.responseType="blob",a.onload=function(){C(a.response,s,E)},a.onerror=function(){console.error("could not download file")},a.send()}function P(r){var s=new XMLHttpRequest;s.open("HEAD",r,!1);try{s.send()}catch(E){}return 200<=s.status&&299>=s.status}function O(r){try{r.dispatchEvent(new MouseEvent("click"))}catch(E){var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(s)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,B=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),C=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!B?function(r,s,E){var a=c.URL||c.webkitURL,d=document.createElement("a");d.download=s=s||r.name||"download",d.rel="noopener","string"==typeof r?(d.href=r,d.origin===location.origin?O(d):P(d.href)?T(r,s,E):O(d,d.target="_blank")):(d.href=a.createObjectURL(r),setTimeout(function(){a.revokeObjectURL(d.href)},4e4),setTimeout(function(){O(d)},0))}:"msSaveOrOpenBlob"in navigator?function(r,s,E){if(s=s||r.name||"download","string"!=typeof r)navigator.msSaveOrOpenBlob(function(r,s){return void 0===s?s={autoBom:!1}:"object"!=typeof s&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\ufeff",r],{type:r.type}):r}(r,E),s);else if(P(r))T(r,s,E);else{var a=document.createElement("a");a.href=r,a.target="_blank",setTimeout(function(){O(a)})}}:function(r,s,E,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof r)return T(r,s,E);var d="application/octet-stream"===r.type,h=/constructor/i.test(c.HTMLElement)||c.safari,R=/CriOS\/[\d]+/.test(navigator.userAgent);if((R||d&&h||B)&&"undefined"!=typeof FileReader){var U=new FileReader;U.onloadend=function(){var M=U.result;M=R?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=M:location=M,a=null},U.readAsDataURL(r)}else{var e=c.URL||c.webkitURL,L=e.createObjectURL(r);a?a.location=L:location.href=L,a=null,setTimeout(function(){e.revokeObjectURL(L)},4e4)}});c.saveAs=C.saveAs=C,$.exports=C})?o.apply(F,[]):o)&&($.exports=v)},5987:($,F,o)=>{"use strict";o.r(F),o.d(F,{LogsModule:()=>Oe});var N=o(2057),v=o(1121),G=o(5073),T=o(1504),P=o(126),O=o(8497),c=(()=>{return(n=c||(c={})).LoadStart="beginning",n.LoadEnd="end",n.TimestampOldest="oldest",n.TimestampNewest="newest",c;var n})(),B=o(5595),C=o(5387),r=o(9765),s=o(6682),E=o(5917),a=o(6797),d=o(3190),h=o(6782),R=o(592),U=o(9457),e=o(4788),L=o(290),M=o(3985),b=o(2895),K=o(3205);function k(n,i){1&n&&(e.\u0275\u0275elementStart(0,"h2",3),e.\u0275\u0275i18n(1,4),e.\u0275\u0275elementEnd())}function X(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275i18n(1,7),e.\u0275\u0275elementEnd())}function J(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275i18n(1,8),e.\u0275\u0275elementEnd())}function z(n,i){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div"),e.\u0275\u0275i18n(2,5),e.\u0275\u0275pipe(3,"kdMemory"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"mat-progress-bar",6),e.\u0275\u0275template(5,X,2,0,"div",2),e.\u0275\u0275template(6,J,2,0,"div",2),e.\u0275\u0275elementContainerEnd()),2&n){const _=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(3,4,_.loaded)),e.\u0275\u0275i18nApply(2),e.\u0275\u0275advance(1),e.\u0275\u0275property("mode",_.getDownloadMode()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!_.finished),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",_.finished)}}function W(n,i){1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",9),e.\u0275\u0275elementStart(2,"h3"),e.\u0275\u0275i18n(3,10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"span"),e.\u0275\u0275i18n(5,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd())}function j(n,i){if(1&n){const _=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"button",12),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(_),e.\u0275\u0275nextContext().save()}),e.\u0275\u0275i18n(2,13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",14),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(_),e.\u0275\u0275nextContext().abort()}),e.\u0275\u0275i18n(4,15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&n){const _=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",!_.finished)}}function V(n,i){if(1&n){const _=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",16),e.\u0275\u0275elementStart(2,"button",14),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(_),e.\u0275\u0275nextContext().abort()}),e.\u0275\u0275i18n(3,17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}}let Q=(()=>{class n{constructor(_,t,l,m){this._dialogRef=_,this.data=t,this.logService=l,this.http_=m,this.loaded=0,this.finished=!1,this._unsubscribe=new r.xQ,this.http_.request(new O.aW("GET",`api/v1/log/file/${t.namespace}/${t.pod}/${t.container}`,{},{reportProgress:!0,responseType:"blob",params:new O.LE({fromObject:this._logOptions})})).pipe((0,h.R)(this._unsubscribe)).subscribe(S=>{S.type===O.dt.DownloadProgress?this.loaded=S.loaded:S instanceof O.Zn&&(this.finished=!0,this._result=new Blob([S.body],{type:"text/plan"}))},S=>this._error=S.status)}get _logOptions(){return{previous:this.logService.getPrevious(),timestamps:this.logService.getShowTimestamp()}}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete()}hasForbiddenError(){return void 0!==this._error&&403===this._error}save(){(0,U.saveAs)(this._result,this.logService.getLogFileName(this.data.pod,this.data.container)),this._dialogRef.close()}abort(){this._dialogRef.close()}getDownloadMode(){return this.finished?"determinate":"indeterminate"}}return n.\u0275fac=function(_){return new(_||n)(e.\u0275\u0275directiveInject(R.so),e.\u0275\u0275directiveInject(R.WI),e.\u0275\u0275directiveInject(L.$),e.\u0275\u0275directiveInject(O.eN))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-logs-download-dialog"]],decls:7,vars:5,consts:function(){let i,_,t,l,m,p,S,A,f;return i="\n  \u4E0B\u8F09\u65E5\u8A8C\u6587\u4EF6\n",_="\u5C3A\u5BF8\uFF1A " + "\ufffd0\ufffd" + " B",t="\n      \u6E96\u5099\u8981\u4E0B\u8F09\u7684\u6587\u4EF6...\n    ",l="\n      \u6587\u4EF6\u5DF2\u6E96\u5099\u597D\u4E0B\u8F09\uFF01\n    ",m="\u7981\u6B62 (403)",p="\u60A8\u6C92\u6709\u8A2A\u554F\u6B64\u8CC7\u6E90\u9700\u8981\u7684\u6B0A\u9650\u3002",S="\u4FDD\u5B58",A="\u4E2D\u6B62",f="\u95DC\u9589",[["mat-dialog-title","",4,"ngIf"],[1,"kd-dialog-text"],[4,"ngIf"],["mat-dialog-title",""],i,_,["value","100",1,"kd-download-progress-bar",3,"mode"],t,l,[1,"kd-download-info"],m,p,["mat-button","","color","primary",3,"disabled","click"],S,["mat-button","","color","primary",3,"click"],A,[1,"kd-download-error-button"],f]},template:function(_,t){1&_&&(e.\u0275\u0275template(0,k,2,0,"h2",0),e.\u0275\u0275elementStart(1,"mat-dialog-content",1),e.\u0275\u0275template(2,z,7,6,"ng-container",2),e.\u0275\u0275template(3,W,6,0,"ng-container",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-dialog-actions"),e.\u0275\u0275template(5,j,5,1,"ng-container",2),e.\u0275\u0275template(6,V,4,0,"ng-container",2),e.\u0275\u0275elementEnd()),2&_&&(e.\u0275\u0275property("ngIf",!t.hasForbiddenError()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!t.hasForbiddenError()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.hasForbiddenError()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!t.hasForbiddenError()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.hasForbiddenError()))},directives:[N.NgIf,R.xY,R.H8,R.uh,M.pW,b.lW],pipes:[K.F],styles:[".kd-download-progress-bar[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px}mat-dialog-actions[_ngcontent-%COMP%]{margin-top:8px}"]}),n})();var Y=o(7347),I=o(2257),Z=o(6833),q=o(1260),y=o(4751),ee=o(4855),_e=o(9356),H=o(3021),te=o(8743),ne=o(6907),w=o(7935),oe=o(1576);const ie=["logViewContainer"];function le(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-option",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const _=i.$implicit;e.\u0275\u0275property("value",_),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",_," ")}}function re(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-optgroup",26),e.\u0275\u0275template(1,le,2,2,"mat-option",7),e.\u0275\u0275elementEnd()),2&n){const _=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==_.logSources?null:_.logSources.containerNames)}}function se(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-option",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const _=i.$implicit;e.\u0275\u0275property("value",_),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",_," ")}}function ae(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-optgroup",28),e.\u0275\u0275template(1,se,2,2,"mat-option",7),e.\u0275\u0275elementEnd()),2&n){const _=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==_.logSources?null:_.logSources.initContainerNames)}}function ce(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-option",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const _=i.$implicit;e.\u0275\u0275property("value",_),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",_," ")}}const Se=function(n,i){return{"kd-logs-element-compact":n,"kd-logs-element":i}};function de(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275elementStart(1,"span"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const _=i.$implicit,t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(2,Se,t.logService.getCompact(),!t.logService.getCompact())),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(_)}}function ge(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275i18nStart(1,30),e.\u0275\u0275element(2,"kd-date",31),e.\u0275\u0275element(3,"kd-date",31),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd()),2&n){const _=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("date",null==_.podLogs?null:_.podLogs.info.fromDate),e.\u0275\u0275advance(1),e.\u0275\u0275property("date",null==_.podLogs?null:_.podLogs.info.toDate)}}const me=function(n,i){return{"kd-logs-text-color-invert":n,"kd-logs-text-color":i}},ue={path:":resourceNamespace/:resourceName/:resourceType",component:(()=>{class n{constructor(_,t,l,m,p,S){this.logService=_,this.activatedRoute_=t,this.settingsService_=l,this.dialog_=m,this.notifications_=p,this._router=S,this.totalItems=0,this.itemsPerPage=10,this.refreshUnsubscribe_=new r.xQ,this.unsubscribe_=new r.xQ,this.logsPerView=100,this.maxLogSize=2e9,this.isLoading=!0,this.refreshInterval=this.settingsService_.getLogsAutoRefreshTimeInterval();const A=this.activatedRoute_.snapshot.params.resourceNamespace,D=this.activatedRoute_.snapshot.queryParams.container;_.getResource(`source/${A}/${this.activatedRoute_.snapshot.params.resourceName}/${this.activatedRoute_.snapshot.params.resourceType}`).pipe((0,d.w)(g=>(this.logSources=g,this.pod=g.podNames[0],this.container=D||g.containerNames[0],this.appendContainerParam_(),this.logService.getResource(`${A}/${this.pod}/${this.container}`)))).pipe((0,h.R)(this.unsubscribe_)).subscribe(g=>{this.updateUiModel_(g),this.isLoading=!1})}ngOnDestroy(){this._router.navigate([],{queryParams:{container:null},queryParamsHandling:"merge"}),this.unsubscribe_.next(),this.unsubscribe_.complete(),this.refreshUnsubscribe_.next(),this.refreshUnsubscribe_.complete()}onContainerChange(){this.appendContainerParam_(),this.loadNewest()}loadOldest(){this.loadView_(c.LoadStart,c.TimestampOldest,0,-this.maxLogSize-this.logsPerView,-this.maxLogSize,this.scrollToTop_.bind(this))}loadNewest(){this.loadView_(c.LoadEnd,c.TimestampNewest,0,this.maxLogSize,this.maxLogSize+this.logsPerView,this.scrollToBottom_.bind(this))}loadOlder(){this.loadView_(this.currentSelection.logFilePosition,this.currentSelection.referencePoint.timestamp,this.currentSelection.referencePoint.lineNum,this.currentSelection.offsetFrom-this.logsPerView,this.currentSelection.offsetFrom,this.scrollToBottom_.bind(this))}loadNewer(){this.loadView_(this.currentSelection.logFilePosition,this.currentSelection.referencePoint.timestamp,this.currentSelection.referencePoint.lineNum,this.currentSelection.offsetTo,this.currentSelection.offsetTo+this.logsPerView,this.scrollToTop_.bind(this))}onTextColorChange(){this.logService.toggleInverted()}onFontSizeChange(){this.logService.toggleCompact()}onShowTimestamp(){this.logService.toggleShowTimestamp(),this.logsSet=this.formatAllLogs_(this.podLogs.logs)}onPreviousChange(){this.logService.togglePrevious(),this.loadNewest()}toggleLogAutoRefresh(){this.logService.toggleAutoRefresh(),this.toggleIntervalFunction_()}downloadLog(){const _={data:{pod:this.pod,container:this.container,namespace:this.activatedRoute_.snapshot.paramMap.get("resourceNamespace")}};this.dialog_.open(Q,_)}onLogsScroll(){this.logService.setFollowing(this.isScrolledBottom_())}updateUiModel_(_){this.podLogs=_,this.currentSelection=_.selection,this.logsSet=this.formatAllLogs_(_.logs),_.info.truncated&&this.notifications_.push("The middle part of the log file cannot be loaded, because it is too big.",C.qf.error),this.logService.getFollowing()&&setTimeout(()=>{this.scrollToBottom_()})}formatAllLogs_(_){return 0===_.length&&(_=[{timestamp:"0",content:"The selected container has not logged any messages yet."}]),_.map(t=>this.formatLine_(t))}formatLine_(_){return this.logService.getShowTimestamp()?`${new Date(_.timestamp).toISOString()} | ${_.content}`:_.content}appendContainerParam_(){this._router.navigate([],{queryParams:{container:this.container},queryParamsHandling:"merge"})}loadView_(_,t,l,m,p,S){const A=this.activatedRoute_.snapshot.params.resourceNamespace,f=(new O.LE).set("logFilePosition",_).set("referenceTimestamp",t).set("referenceLineNum",`${l}`).set("offsetFrom",`${m}`).set("offsetTo",`${p}`).set("previous",`${this.logService.getPrevious()}`);this.logService.getResource(`${A}/${this.pod}/${this.container}`,f).pipe((0,h.R)(this.unsubscribe_)).subscribe(u=>{this.updateUiModel_(u),S&&S()})}toggleIntervalFunction_(){this.logService.getAutoRefresh()?(0,s.T)(this.settingsService_.onSettingsUpdate,(0,E.of)(!0)).pipe((0,d.w)(_=>{this.refreshInterval=this.settingsService_.getLogsAutoRefreshTimeInterval();const t=1e3*this.refreshInterval;return(0,a.H)(0,0===t?void 0:t)})).pipe((0,h.R)(this.refreshUnsubscribe_)).subscribe(_=>this.loadView_(c.LoadEnd,c.TimestampNewest,0,this.maxLogSize,this.maxLogSize+this.logsPerView)):this.refreshUnsubscribe_.next()}scrollToBottom_(){this.scrollTo_("BOTTOM")}scrollToTop_(){this.scrollTo_("TOP")}isScrolledBottom_(){const{nativeElement:_}=this.logViewContainer_;return _.scrollHeight<=_.scrollTop+_.clientHeight}scrollTo_(_){const{nativeElement:t}=this.logViewContainer_;if(!t)return;let l;switch(_){case"TOP":l=0;break;case"BOTTOM":l=t.scrollHeight;break;default:return}t.scrollTo({top:l,left:0,behavior:"smooth"})}}return n.\u0275fac=function(_){return new(_||n)(e.\u0275\u0275directiveInject(L.$),e.\u0275\u0275directiveInject(T.ActivatedRoute),e.\u0275\u0275directiveInject(B.o),e.\u0275\u0275directiveInject(R.uw),e.\u0275\u0275directiveInject(C.TF),e.\u0275\u0275directiveInject(T.Router))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-logs"]],viewQuery:function(_,t){if(1&_&&e.\u0275\u0275viewQuery(ie,7),2&_){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(t.logViewContainer_=l.first)}},decls:68,vars:20,consts:function(){let i,_,t,l,m,p,S,A,f,u,D;return i="\u65E5\u8A8C",_="\u5BB9\u5668",t="\u521D\u59CB\u5316\u5BB9\u5668",l="in",m="\u4E0B\u8F09\u65E5\u8A8C",p="\u53CD\u8F49\u9854\u8272",S="\u6E1B\u5C0F\u5B57\u9AD4\u5927\u5C0F",A="\u986F\u793A\u6642\u9593\u6233",f="Auto-refresh (every " + "\ufffd0\ufffd" + " s.)",u="\u986F\u793A\u4EE5\u524D\u7684\u65E5\u8A8C",D=" Logs from " + "\ufffd#2\ufffd" + "" + "[\ufffd/#2\ufffd|\ufffd/#3\ufffd]" + " to " + "\ufffd#3\ufffd" + "" + "[\ufffd/#2\ufffd|\ufffd/#3\ufffd]" + " UTC ",D=e.\u0275\u0275i18nPostprocess(D),[["role","inner-content",3,"expandable"],["title","","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxFlex","100"],i,[3,"ngModel","ngModelChange","selectionChange"],["label",_,4,"ngIf"],["label",t,4,"ngIf"],l,[3,"value",4,"ngFor","ngForOf"],["fxFlex",""],["fxFlexAlign","center end","mat-icon-button","","matTooltip",m,3,"click"],["fxLayoutAlign","center end","mat-icon-button","",3,"matMenuTriggerFor"],["content","",1,"kd-log-line-container",3,"ngClass","scroll"],["logViewContainer",""],["kdLoadingSpinner","",3,"isLoading"],["fxFlex","","fxLayout","column","fxLayoutGap","2px"],[3,"ngClass",4,"ngFor","ngForOf"],["footer","","fxFlex","","fxLayoutAlign","start center","fxLayout","row",1,"footer"],[4,"ngIf"],["mat-icon-button","",3,"click"],["kdMenu","matMenu"],["mat-menu-item","",3,"click"],p,S,A,f,u,["label",_],[3,"value"],["label",t],[3,"ngClass"],D,["format","short",3,"date"]]},template:function(_,t){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-card",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"span"),e.\u0275\u0275i18n(3,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-form-field"),e.\u0275\u0275elementStart(5,"mat-select",3),e.\u0275\u0275listener("ngModelChange",function(m){return t.container=m})("selectionChange",function(){return t.onContainerChange()}),e.\u0275\u0275template(6,re,2,1,"mat-optgroup",4),e.\u0275\u0275template(7,ae,2,1,"mat-optgroup",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"span"),e.\u0275\u0275i18n(9,6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"mat-form-field"),e.\u0275\u0275elementStart(11,"mat-select",3),e.\u0275\u0275listener("ngModelChange",function(m){return t.pod=m})("selectionChange",function(){return t.loadNewest()}),e.\u0275\u0275template(12,ce,2,2,"mat-option",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(13,"div",8),e.\u0275\u0275elementStart(14,"button",9),e.\u0275\u0275listener("click",function(){return t.downloadLog()}),e.\u0275\u0275elementStart(15,"mat-icon"),e.\u0275\u0275text(16,"file_download"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"button",10),e.\u0275\u0275elementStart(18,"mat-icon"),e.\u0275\u0275text(19,"more_vert"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"div",11,12),e.\u0275\u0275listener("scroll",function(){return t.onLogsScroll()}),e.\u0275\u0275element(22,"div",13),e.\u0275\u0275elementStart(23,"div",14),e.\u0275\u0275template(24,de,3,5,"div",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",16),e.\u0275\u0275template(26,ge,4,2,"div",17),e.\u0275\u0275element(27,"div",8),e.\u0275\u0275elementStart(28,"div"),e.\u0275\u0275elementStart(29,"button",18),e.\u0275\u0275listener("click",function(){return t.loadOldest()}),e.\u0275\u0275elementStart(30,"mat-icon"),e.\u0275\u0275text(31,"first_page"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"button",18),e.\u0275\u0275listener("click",function(){return t.loadOlder()}),e.\u0275\u0275elementStart(33,"mat-icon"),e.\u0275\u0275text(34,"chevron_left"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"button",18),e.\u0275\u0275listener("click",function(){return t.loadNewer()}),e.\u0275\u0275elementStart(36,"mat-icon"),e.\u0275\u0275text(37,"chevron_right"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"button",18),e.\u0275\u0275listener("click",function(){return t.loadNewest()}),e.\u0275\u0275elementStart(39,"mat-icon"),e.\u0275\u0275text(40,"last_page"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"mat-menu",null,19),e.\u0275\u0275elementStart(43,"button",20),e.\u0275\u0275listener("click",function(){return t.onTextColorChange()}),e.\u0275\u0275elementStart(44,"mat-icon"),e.\u0275\u0275text(45),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(46,"span"),e.\u0275\u0275i18n(47,21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(48,"button",20),e.\u0275\u0275listener("click",function(){return t.onFontSizeChange()}),e.\u0275\u0275elementStart(49,"mat-icon"),e.\u0275\u0275text(50),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(51,"span"),e.\u0275\u0275i18n(52,22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(53,"button",20),e.\u0275\u0275listener("click",function(){return t.onShowTimestamp()}),e.\u0275\u0275elementStart(54,"mat-icon"),e.\u0275\u0275text(55),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"span"),e.\u0275\u0275i18n(57,23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"button",20),e.\u0275\u0275listener("click",function(){return t.toggleLogAutoRefresh()}),e.\u0275\u0275elementStart(59,"mat-icon"),e.\u0275\u0275text(60),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(61,"span"),e.\u0275\u0275i18n(62,24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(63,"button",20),e.\u0275\u0275listener("click",function(){return t.onPreviousChange()}),e.\u0275\u0275elementStart(64,"mat-icon"),e.\u0275\u0275text(65),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(66,"span"),e.\u0275\u0275i18n(67,25),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const l=e.\u0275\u0275reference(42);e.\u0275\u0275property("expandable",!1),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",t.container),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.logSources||null==t.logSources.containerNames?null:t.logSources.containerNames.length)>0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.logSources||null==t.logSources.initContainerNames?null:t.logSources.initContainerNames.length)>0),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",t.pod),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==t.logSources?null:t.logSources.podNames),e.\u0275\u0275advance(5),e.\u0275\u0275property("matMenuTriggerFor",l),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(17,me,null==t.logService?null:t.logService.getInverted(),!(null!=t.logService&&t.logService.getInverted()))),e.\u0275\u0275advance(2),e.\u0275\u0275property("isLoading",t.isLoading),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.logsSet),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",(null==t.logsSet?null:t.logsSet.length)>1),e.\u0275\u0275advance(19),e.\u0275\u0275textInterpolate(null!=t.logService&&t.logService.getInverted()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(t.logService.getCompact()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(t.logService.getShowTimestamp()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(t.logService.getAutoRefresh()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(t.refreshInterval),e.\u0275\u0275i18nApply(62),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.logService.getPrevious()?"check_box":"check_box_outline_blank")}},directives:[Y.A,I.xw,I.Wh,I.SQ,I.yH,Z.KE,q.gD,y.NgControlStatus,y.NgModel,N.NgIf,N.NgForOf,b.lW,I.XD,ee.gM,_e.Hw,H.p6,N.NgClass,te.oO,ne.T,H.VK,H.OP,w.Nv,w.ey,oe.I],styles:['.kd-logs-element-compact[_ngcontent-%COMP%], .kd-logs-element[_ngcontent-%COMP%]{font-family:"Roboto Mono Regular",monospace;padding:0 16px;word-wrap:break-word}.kd-logs-element[_ngcontent-%COMP%]{font-size:14px}.kd-logs-element-compact[_ngcontent-%COMP%]{font-size:12px}.kd-log-line-container[_ngcontent-%COMP%]{height:100%;overflow-y:auto}.kd-log-line-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}kd-card[_ngcontent-%COMP%]{display:flex;max-height:100%;min-height:max(100%,550px)}.footer[_ngcontent-%COMP%]{font-size:14px;padding:0 16px}']}),n})(),data:{breadcrumb:"Logs",parent:P.WX}};let Ee=(()=>{class n{}return n.\u0275fac=function(_){return new(_||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[T.RouterModule.forChild([ue])],T.RouterModule]}),n})(),Oe=(()=>{class n{}return n.\u0275fac=function(_){return new(_||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[N.CommonModule,G.m,v.K,Ee]]}),n})()}}]);