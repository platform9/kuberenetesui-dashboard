"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[636],{6636:(H_,U,i)=>{i.r(U),i.d(U,{SettingsModule:()=>v_});var Q=i(1121),Z=i(5073),q=i(3815),h=i.n(q),f=i(9765),_=i(4788);let M=(()=>{class t{constructor(){this.onSettingsChange=new f.xQ,this.settings_={}}get settings(){return this.settings_}set settings(e){this.settings_=h().extend(this.settings_,e),this.onSettingsChange.next(this.settings_)}reset(){this.settings_={},this.onSettingsChange.next(this.settings_)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=_.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var D=i(1504),__=i(5917),g=i(6782),e_=i(8307),t_=i(5304),u=i(5257),n_=i(5595),s_=i(7537),P=i(2245),E=i(592),O=i(2895);let o_=(()=>{class t{constructor(e){this.dialogRef=e}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(E.so))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-settings-save-anyway-dialog"]],decls:9,vars:2,consts:function(){let s,e,n,o;return s="\u6700\u5F8C\u306E\u30EA\u30ED\u30FC\u30C9\u4EE5\u964D\u306B\u8A2D\u5B9A\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059",e="\u3068\u3082\u3042\u308C\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F",n="\u4FDD\u5B58",o="\u66F4\u65B0",[["mat-dialog-title",""],s,e,["mat-button","","color","primary",3,"mat-dialog-close"],n,o]},template:function(e,n){1&e&&(_.\u0275\u0275elementStart(0,"h2",0),_.\u0275\u0275i18n(1,1),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(2,"mat-dialog-content"),_.\u0275\u0275i18n(3,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(4,"mat-dialog-actions"),_.\u0275\u0275elementStart(5,"button",3),_.\u0275\u0275i18n(6,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(7,"button",3),_.\u0275\u0275i18n(8,5),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd()),2&e&&(_.\u0275\u0275advance(5),_.\u0275\u0275property("mat-dialog-close",!0),_.\u0275\u0275advance(2),_.\u0275\u0275property("mat-dialog-close",!1))},directives:[E.uh,E.xY,E.H8,O.lW,E.ZT],encapsulation:2}),t})();var r=i(4751),T=i(2057),B=i(7347),d=i(2257);const i_=["*"];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-settings-entry"]],inputs:{key:"key",desc:"desc"},ngContentSelectors:i_,decls:6,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center none","fxFlex",""],[1,"kd-muted"]],template:function(e,n){1&e&&(_.\u0275\u0275projectionDef(),_.\u0275\u0275elementStart(0,"div",0),_.\u0275\u0275elementStart(1,"div"),_.\u0275\u0275text(2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"div",1),_.\u0275\u0275text(4),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275projection(5,0,["class","kd-settings-entry-form","fxFlex",""])),2&e&&(_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(n.key),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(n.desc))},directives:[d.xw,d.Wh,d.yH],encapsulation:2}),t})();var C=i(6833),I=i(4372),N=i(568),a_=i(8002),v=i(7575),p=i(296),G=i(7935),H=i(8167);function l_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",14),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e," ")}}let S_=(()=>{class t{constructor(e){this.data=e}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(E.WI))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-namespace-settings-add-dialog"]],decls:18,vars:7,consts:function(){let s,e,n,o,a;return s="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u306E\u8FFD\u52A0",e="\u7121\u6761\u4EF6\u8868\u793A\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7\u306B\u8FFD\u52A0\u3059\u308B\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",n="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9",o="\u8FFD\u52A0 ",a="\u30AD\u30E3\u30F3\u30BB\u30EB ",[["fxFlex","","fxLayout","column"],["mat-dialog-title",""],s,["fxLayout","column",1,"kd-dialog-text"],e,["fxFlex",""],["name","defaultNamespace","placeholder",n,"type","text","matInput","",3,"matAutocomplete"],["namespaceInput",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close"],o,["mat-button","","color","primary",3,"mat-dialog-close"],a,[3,"value"]]},template:function(e,n){if(1&e&&(_.\u0275\u0275elementStart(0,"div",0),_.\u0275\u0275elementStart(1,"h2",1),_.\u0275\u0275i18n(2,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"mat-dialog-content",3),_.\u0275\u0275elementStart(4,"div"),_.\u0275\u0275i18n(5,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(6,"mat-form-field",5),_.\u0275\u0275element(7,"input",6,7),_.\u0275\u0275elementStart(9,"mat-autocomplete",null,8),_.\u0275\u0275template(11,l_,2,2,"mat-option",9),_.\u0275\u0275pipe(12,"kdFilterBy"),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(13,"mat-dialog-actions"),_.\u0275\u0275elementStart(14,"button",10),_.\u0275\u0275i18n(15,11),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(16,"button",12),_.\u0275\u0275i18n(17,13),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd()),2&e){const o=_.\u0275\u0275reference(8),a=_.\u0275\u0275reference(10);_.\u0275\u0275advance(7),_.\u0275\u0275property("matAutocomplete",a),_.\u0275\u0275advance(4),_.\u0275\u0275property("ngForOf",_.\u0275\u0275pipeBind2(12,4,n.data.namespaces,o.value)),_.\u0275\u0275advance(3),_.\u0275\u0275property("disabled",0===(null==o||null==o.value?null:o.value.length))("mat-dialog-close",o.value)}},directives:[d.yH,d.xw,E.uh,E.xY,C.KE,I.Nt,p.ZL,p.XC,T.NgForOf,E.H8,O.lW,E.ZT,G.ey],pipes:[H.R],encapsulation:2}),t})();var F=i(5363),y=i(9356),r_=i(591);function E_(t,s){if(1&t){const e=_.\u0275\u0275getCurrentView();_.\u0275\u0275elementStart(0,"mat-list-item"),_.\u0275\u0275elementStart(1,"div",12),_.\u0275\u0275text(2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"button",13),_.\u0275\u0275listener("click",function(){const a=_.\u0275\u0275restoreView(e).$implicit;return _.\u0275\u0275nextContext().remove(a)})("focus",function(o){return o.stopPropagation()}),_.\u0275\u0275elementStart(4,"mat-icon"),_.\u0275\u0275text(5,"close"),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275element(6,"mat-divider"),_.\u0275\u0275elementEnd()}if(2&t){const e=s.$implicit;_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(e)}}function A_(t,s){1&t&&(_.\u0275\u0275elementStart(0,"mat-list-item"),_.\u0275\u0275i18n(1,14),_.\u0275\u0275elementEnd())}let c_=(()=>{class t{constructor(e){this.data=e,this.namespaces=[],this.namespaces=Array.from(e.namespaces)}remove(e){this.namespaces.splice(this.namespaces.indexOf(e),1)}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(E.WI))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-namespace-settings-edit-dialog"]],decls:14,vars:3,consts:function(){let s,e,n,o,a;return s="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7\u306E\u7DE8\u96C6",e="\u4E00\u89A7\u304B\u3089\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u3092\u524A\u9664\u3057\u3001\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u78BA\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",n="\u5B8C\u4E86 ",o="\u30AD\u30E3\u30F3\u30BB\u30EB ",a="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u305B\u3093",[["fxFlex","","fxLayout","column"],["mat-dialog-title",""],s,["fxLayout","column",1,"kd-dialog-text"],e,[4,"ngFor","ngForOf"],[4,"ngIf"],["fxLayoutAlign","space-between center",2,"padding","16px 0"],["mat-raised-button","","color","primary",3,"mat-dialog-close"],n,["mat-button","","color","primary",3,"mat-dialog-close"],o,["fxFlex","100"],["mat-icon-button","",3,"click","focus"],a]},template:function(e,n){1&e&&(_.\u0275\u0275elementStart(0,"div",0),_.\u0275\u0275elementStart(1,"h2",1),_.\u0275\u0275i18n(2,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"mat-dialog-content",3),_.\u0275\u0275elementStart(4,"div"),_.\u0275\u0275i18n(5,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(6,"mat-list"),_.\u0275\u0275template(7,E_,7,1,"mat-list-item",5),_.\u0275\u0275template(8,A_,2,0,"mat-list-item",6),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(9,"mat-dialog-actions",7),_.\u0275\u0275elementStart(10,"button",8),_.\u0275\u0275i18n(11,9),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(12,"button",10),_.\u0275\u0275i18n(13,11),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd()),2&e&&(_.\u0275\u0275advance(7),_.\u0275\u0275property("ngForOf",n.namespaces),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngIf",0===n.namespaces.length),_.\u0275\u0275advance(2),_.\u0275\u0275property("mat-dialog-close",n.namespaces))},directives:[d.yH,d.xw,E.uh,E.xY,F.i$,T.NgForOf,T.NgIf,E.H8,d.Wh,O.lW,E.ZT,F.Tg,y.Hw,r_.d],encapsulation:2}),t})();var b=i(3202),d_=i(4855);function m_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",17),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e," ")}}function T_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-chip",18),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("matTooltip",e)("selectable",!1)("removable",!1),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e," ")}}function N_(t,s){1&t&&(_.\u0275\u0275elementStart(0,"mat-chip",19),_.\u0275\u0275i18n(1,20),_.\u0275\u0275elementEnd()),2&t&&_.\u0275\u0275property("disabled",!0)}function g_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-chip",21),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=_.\u0275\u0275nextContext();_.\u0275\u0275property("disabled",!0),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1("+ ",e.invisibleCount,"")}}var R=(()=>{return(t=R||(R={}))[t.XLarge=5]="XLarge",t[t.Large=3]="Large",t[t.Medium=2]="Medium",t[t.Small=2]="Small",R;var t})(),m=(()=>{return(t=m||(m={})).DefaultNamespace="defaultNamespace",t.FallbackList="fallbackList",m;var t})();let R_=(()=>{class t{constructor(e,n,o,a,l){this.namespaceService_=e,this.settingsHelperService_=n,this.dialog_=o,this.breakpointObserver_=a,this.builder_=l,this.Controls=m,this.namespaces=[],this.visibleNamespaces=0,this.endpoint_=v.wE.resource(v._z.namespace).list(),this.unsubscribe_=new f.xQ,this.visibleNamespacesMap=[[N.u3.XLarge,R.XLarge],[N.u3.Large,R.Large],[N.u3.Medium,R.Medium],[N.u3.Small,R.Small]]}get namespaceFallbackList_(){return this.settings_.namespaceFallbackList?this.settings_.namespaceFallbackList.filter(e=>e):[]}get formArrayNamespaceFallbackList_(){const e=this.form.get(m.FallbackList).value;return e?e.filter(n=>n):[]}get invisibleCount(){return this.settings_.namespaceFallbackList?this.settings_.namespaceFallbackList.length-this.visibleNamespaces:0}ngOnInit(){this.settings_=this.settingsHelperService_.settings,this.form=this.builder_.group({[m.DefaultNamespace]:this.builder_.control(""),[m.FallbackList]:this.builder_.array([])}),this.namespaceService_.get(this.endpoint_).pipe((0,a_.U)(e=>e.namespaces.map(n=>n.objectMeta.name))).pipe((0,g.R)(this.unsubscribe_)).subscribe(e=>this.namespaces=e),this.breakpointObserver_.observe([N.u3.Small,N.u3.Medium,N.u3.Large,N.u3.XLarge]).pipe((0,g.R)(this.unsubscribe_)).subscribe(e=>{const n=this.visibleNamespacesMap.find(o=>e.breakpoints[o[0]]);this.visibleNamespaces=n?n[1]:R.Small}),this.form.valueChanges.pipe((0,g.R)(this.unsubscribe_)).subscribe(this.onFormChange_.bind(this)),this.settingsHelperService_.onSettingsChange.pipe((0,g.R)(this.unsubscribe_)).subscribe(this.onSettingsChange_.bind(this))}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}add(){const e={data:{namespaces:this.namespaces.filter(n=>!this.settingsHelperService_.settings.namespaceFallbackList.includes(n))}};this.dialog_.open(S_,e).afterClosed().pipe((0,u.q)(1)).subscribe(n=>this.containsNamespace_(n)?null:this.addNamespace_(n))}edit(){this.dialog_.open(c_,{data:{namespaces:this.namespaceFallbackList_}}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{n&&(this.settingsHelperService_.settings={namespaceFallbackList:n})})}writeValue(e){!e||this.form.setValue(e)}registerOnChange(e){this.form.valueChanges.pipe((0,g.R)(this.unsubscribe_)).subscribe(e)}registerOnTouched(e){this.form.statusChanges.pipe((0,g.R)(this.unsubscribe_)).subscribe(e)}addNamespace_(e){this.form.get(m.FallbackList).push(this.builder_.control(e))}containsNamespace_(e){return!e||this.form.get(m.FallbackList).controls.map(n=>n.value).indexOf(e)>-1}onFormChange_(){this.settingsHelperService_.settings={defaultNamespace:this.form.get(m.DefaultNamespace).value,namespaceFallbackList:this.formArrayNamespaceFallbackList_}}onSettingsChange_(e){this.settings_=e,this.form.get(m.DefaultNamespace).setValue(this.settings_.defaultNamespace,{emitEvent:!1}),this.form.get(m.FallbackList).controls=this.namespaceFallbackList_.map(n=>this.builder_.control("")),this.form.get(m.FallbackList).reset(this.namespaceFallbackList_,{emitEvent:!1})}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(P.z),_.\u0275\u0275directiveInject(M),_.\u0275\u0275directiveInject(E.uw),_.\u0275\u0275directiveInject(N.Yg),_.\u0275\u0275directiveInject(r.FormBuilder))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-namespace-settings"]],features:[_.\u0275\u0275ProvidersFeature([{provide:r.NG_VALUE_ACCESSOR,useExisting:(0,_.forwardRef)(()=>t),multi:!0}])],decls:24,vars:14,consts:function(){let s,e,n,o,a,l;return s="\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9",e="\u30ED\u30B0\u30A4\u30F3\u5F8C\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u6307\u5B9A\u3055\u308C\u308B\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u3002",n="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9",o="\u7121\u6761\u4EF6\u8868\u793A\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7",a="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7\u8868\u793A\u6A29\u9650\u304C\u306A\u3044\u30E6\u30FC\u30B6\u30FC\u306B\u8868\u793A\u3055\u308C\u308B\u3079\u304D\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u306E\u4E00\u89A7\u3067\u3059\u3002",l="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u306E\u8FFD\u52A0...",[[3,"formGroup"],["key",s,"desc",e],["fxFlex",""],["formControlName","defaultNamespace","name","defaultNamespace","placeholder",n,"type","text","matInput","",3,"matAutocomplete"],["namespaceInput",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["key",o,"desc",a],["fxFlex","100","fxLayout","row"],["fxFlex","80","fxLayoutAlign"," center",1,"kd-namespace-chip-list",3,"formArrayName"],["style","max-width: 100px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block",3,"matTooltip","selectable","removable",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["fxFlex","","fxLayoutAlign"," center",3,"disabled",4,"ngIf"],["fxFlex","20","fxLayoutAlign","end"],["mat-icon-button","",2,"margin-right","0",3,"click"],[2,"font-size","20px"],["mat-icon-button","",3,"click"],[3,"value"],[2,"max-width","100px","text-overflow","ellipsis","white-space","nowrap","overflow","hidden","display","block",3,"matTooltip","selectable","removable"],[3,"disabled"],l,["fxFlex","","fxLayoutAlign"," center",3,"disabled"]]},template:function(e,n){if(1&e&&(_.\u0275\u0275elementStart(0,"form",0),_.\u0275\u0275elementStart(1,"kd-settings-entry",1),_.\u0275\u0275elementStart(2,"mat-form-field",2),_.\u0275\u0275element(3,"input",3,4),_.\u0275\u0275elementStart(5,"mat-autocomplete",null,5),_.\u0275\u0275template(7,m_,2,2,"mat-option",6),_.\u0275\u0275pipe(8,"kdFilterBy"),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(9,"kd-settings-entry",7),_.\u0275\u0275elementStart(10,"mat-form-field",2),_.\u0275\u0275elementStart(11,"div",8),_.\u0275\u0275elementStart(12,"mat-chip-list",9),_.\u0275\u0275template(13,T_,2,4,"mat-chip",10),_.\u0275\u0275pipe(14,"slice"),_.\u0275\u0275template(15,N_,2,1,"mat-chip",11),_.\u0275\u0275template(16,g_,2,2,"mat-chip",12),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(17,"div",13),_.\u0275\u0275elementStart(18,"button",14),_.\u0275\u0275listener("click",function(){return n.edit()}),_.\u0275\u0275elementStart(19,"mat-icon",15),_.\u0275\u0275text(20,"edit"),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(21,"button",16),_.\u0275\u0275listener("click",function(){return n.add()}),_.\u0275\u0275elementStart(22,"mat-icon"),_.\u0275\u0275text(23,"add"),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd()),2&e){const o=_.\u0275\u0275reference(4),a=_.\u0275\u0275reference(6);_.\u0275\u0275property("formGroup",n.form),_.\u0275\u0275advance(3),_.\u0275\u0275property("matAutocomplete",a),_.\u0275\u0275advance(4),_.\u0275\u0275property("ngForOf",_.\u0275\u0275pipeBind2(8,7,n.namespaces,o.value)),_.\u0275\u0275advance(5),_.\u0275\u0275property("formArrayName",n.Controls.FallbackList),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngForOf",_.\u0275\u0275pipeBind3(14,10,n.form.get(n.Controls.FallbackList).value,0,n.visibleNamespaces)),_.\u0275\u0275advance(2),_.\u0275\u0275property("ngIf",0===n.form.get(n.Controls.FallbackList).value.length),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngIf",n.invisibleCount>0)}},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,L,C.KE,d.yH,r.DefaultValueAccessor,I.Nt,p.ZL,r.NgControlStatus,r.FormControlName,p.XC,T.NgForOf,d.xw,b.qn,d.Wh,r.FormArrayName,T.NgIf,O.lW,y.Hw,G.ey,b.HS,d_.gM],pipes:[H.R,T.SlicePipe],styles:["kd-settings-entry[_ngcontent-%COMP%]{min-height:56px}"]}),t})();var O_=i(8956),u_=i(3624);function C_(t,s){if(1&t){const e=_.\u0275\u0275getCurrentView();_.\u0275\u0275elementStart(0,"kd-card",1),_.\u0275\u0275elementStart(1,"div",2),_.\u0275\u0275i18n(2,3),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"div",4),_.\u0275\u0275elementStart(4,"p"),_.\u0275\u0275i18n(5,5),_.\u0275\u0275elementEnd(),_.\u0275\u0275element(6,"br"),_.\u0275\u0275elementStart(7,"form",6),_.\u0275\u0275elementStart(8,"kd-settings-entry",7),_.\u0275\u0275elementStart(9,"mat-form-field",8),_.\u0275\u0275element(10,"input",9),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275element(11,"kd-namespace-settings",10),_.\u0275\u0275elementStart(12,"kd-settings-entry",11),_.\u0275\u0275elementStart(13,"div",8),_.\u0275\u0275element(14,"mat-slider",12),_.\u0275\u0275elementStart(15,"div",13),_.\u0275\u0275text(16),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(17,"kd-settings-entry",14),_.\u0275\u0275elementStart(18,"div",8),_.\u0275\u0275element(19,"mat-slider",15),_.\u0275\u0275elementStart(20,"div",13),_.\u0275\u0275text(21),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(22,"kd-settings-entry",16),_.\u0275\u0275elementStart(23,"div",8),_.\u0275\u0275element(24,"mat-slider",15),_.\u0275\u0275elementStart(25,"span",13),_.\u0275\u0275text(26),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(27,"kd-settings-entry",17),_.\u0275\u0275elementStart(28,"div",8),_.\u0275\u0275element(29,"mat-slider",18),_.\u0275\u0275elementStart(30,"span",13),_.\u0275\u0275text(31),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(32,"kd-settings-entry",19),_.\u0275\u0275elementStart(33,"div",20),_.\u0275\u0275element(34,"mat-slide-toggle",21),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275element(35,"br"),_.\u0275\u0275element(36,"br"),_.\u0275\u0275elementStart(37,"button",22),_.\u0275\u0275listener("click",function(){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().save()}),_.\u0275\u0275i18n(38,23),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(39,"button",24),_.\u0275\u0275listener("click",function(){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().reload()}),_.\u0275\u0275i18n(40,25),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd()}if(2&t){const e=_.\u0275\u0275nextContext();_.\u0275\u0275property("initialized",e.isInitialized())("expandable",!0),_.\u0275\u0275advance(7),_.\u0275\u0275property("formGroup",e.form),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.ClusterName),_.\u0275\u0275advance(1),_.\u0275\u0275property("formControlName",e.Controls.NamespaceSettings),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.ItemsPerPage),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate1(" ",e.settings.itemsPerPage," "),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.LabelsLimit),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate1(" ",e.settings.labelsLimit," "),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.LogsAutorefreshInterval),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate1(" ",e.settings.logsAutoRefreshTimeInterval," "),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.ResourceAutorefreshInterval),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate1(" ",e.settings.resourceAutoRefreshTimeInterval," "),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.DisableAccessDeniedNotification),_.\u0275\u0275advance(3),_.\u0275\u0275property("disabled",!e.canSave())}}var S=(()=>{return(t=S||(S={})).ClusterName="clusterName",t.ItemsPerPage="itemsPerPage",t.LabelsLimit="labelsLimit",t.LogsAutorefreshInterval="logsAutorefreshInterval",t.ResourceAutorefreshInterval="resourceAutorefreshInterval",t.DisableAccessDeniedNotification="disableAccessDeniedNotification",t.NamespaceSettings="namespaceSettings",S;var t})();let p_=(()=>{class t{constructor(e,n,o,a,l,A){this.settingsService_=e,this.settingsHelperService_=n,this.namespaceService_=o,this.dialog_=a,this.title_=l,this.builder_=A,this.Controls=S,this.settings={},this.hasLoadError=!1,this.concurrentChangeErr_="settings changed since last reload",this.unsubscribe_=new f.xQ}get externalSettings_(){const e={};return e.itemsPerPage=this.settingsService_.getItemsPerPage(),e.labelsLimit=this.settingsService_.getLabelsLimit(),e.clusterName=this.settingsService_.getClusterName(),e.logsAutoRefreshTimeInterval=this.settingsService_.getLogsAutoRefreshTimeInterval(),e.resourceAutoRefreshTimeInterval=this.settingsService_.getResourceAutoRefreshTimeInterval(),e.disableAccessDeniedNotifications=this.settingsService_.getDisableAccessDeniedNotifications(),e.defaultNamespace=this.settingsService_.getDefaultNamespace(),e.namespaceFallbackList=this.settingsService_.getNamespaceFallbackList(),e}ngOnInit(){this.form=this.builder_.group({[S.ClusterName]:this.builder_.control(""),[S.ItemsPerPage]:this.builder_.control(0),[S.LabelsLimit]:this.builder_.control(0),[S.LogsAutorefreshInterval]:this.builder_.control(0),[S.ResourceAutorefreshInterval]:this.builder_.control(0),[S.DisableAccessDeniedNotification]:this.builder_.control(!1),[S.NamespaceSettings]:this.builder_.control("")}),this.load_(),this.form.valueChanges.pipe((0,g.R)(this.unsubscribe_)).subscribe(this.onFormChange_.bind(this)),this.settingsHelperService_.onSettingsChange.pipe((0,g.R)(this.unsubscribe_)).subscribe(e=>this.settings=e)}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}isInitialized(){return this.settingsService_.isInitialized()}reload(){this.form.reset(),this.settingsHelperService_.reset(),this.load_()}canSave(){return!h().isEqual(this.settings,this.externalSettings_)}save(){this.settingsService_.save(this.settings).pipe((0,e_.b)(e=>{this.load_(),this.title_.update(),this.settingsService_.onSettingsUpdate.next()})).pipe((0,t_.K)(this.onSaveError_.bind(this))).pipe((0,u.q)(1)).subscribe(this.onSave_.bind(this))}onSave_(e){!0===e&&this.save(),this.reload()}onSaveError_(e){return e&&-1!==e.error.indexOf(this.concurrentChangeErr_)?this.dialog_.open(o_,{width:"420px"}).afterClosed():(0,__.of)(!1)}load_(){this.settingsService_.canI().pipe((0,u.q)(1)).subscribe(e=>this.hasLoadError=!e),this.settingsService_.load(this.onLoad_.bind(this),this.onLoadError_.bind(this))}onLoad_(){this.settings=this.externalSettings_,this.settingsHelperService_.settings=this.settings,this.form.get(S.ItemsPerPage).setValue(this.settings.itemsPerPage,{emitEvent:!1}),this.form.get(S.LabelsLimit).setValue(this.settings.labelsLimit,{emitEvent:!1}),this.form.get(S.ClusterName).setValue(this.settings.clusterName,{emitEvent:!1}),this.form.get(S.LogsAutorefreshInterval).setValue(this.settings.logsAutoRefreshTimeInterval,{emitEvent:!1}),this.form.get(S.ResourceAutorefreshInterval).setValue(this.settings.resourceAutoRefreshTimeInterval,{emitEvent:!1}),this.form.get(S.DisableAccessDeniedNotification).setValue(this.settings.disableAccessDeniedNotifications,{emitEvent:!1})}onLoadError_(){this.hasLoadError=!0}onFormChange_(){this.settingsHelperService_.settings={itemsPerPage:this.form.get(S.ItemsPerPage).value,clusterName:this.form.get(S.ClusterName).value,disableAccessDeniedNotifications:this.form.get(S.DisableAccessDeniedNotification).value,labelsLimit:this.form.get(S.LabelsLimit).value,logsAutoRefreshTimeInterval:this.form.get(S.LogsAutorefreshInterval).value,resourceAutoRefreshTimeInterval:this.form.get(S.ResourceAutorefreshInterval).value}}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(n_.o),_.\u0275\u0275directiveInject(M),_.\u0275\u0275directiveInject(P.z),_.\u0275\u0275directiveInject(E.uw),_.\u0275\u0275directiveInject(s_.y),_.\u0275\u0275directiveInject(r.FormBuilder))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-global-settings"]],decls:1,vars:1,consts:function(){let s,e,n,o,a,l,A,x,X,k,J,z,w,V,j,Y,W;return s="\u30B0\u30ED\u30FC\u30D0\u30EB\u8A2D\u5B9A ",e=" \u30B0\u30ED\u30FC\u30D0\u30EB\u8A2D\u5B9A\u306F\u30B3\u30F3\u30D5\u30A3\u30B0\u30DE\u30C3\u30D7\u306B\u4FDD\u5B58\u3055\u308C\u308B\u305F\u3081\u3001\u3053\u308C\u3089\u306E\u8A2D\u5B9A\u3059\u3079\u3066\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u305D\u308C\u305E\u308C\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002 ",n="\u30AF\u30E9\u30B9\u30BF\u30FC\u540D",o="\u30AF\u30E9\u30B9\u30BF\u30FC\u540D\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3068\u3001\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u30BF\u30A4\u30C8\u30EB\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002",a="\u30AF\u30E9\u30B9\u30BF\u30FC\u540D",l="\u30DA\u30FC\u30B8\u6BCE\u306E\u9805\u76EE\u6570",A="\u4E00\u89A7\u8868\u793A\u306E\u30D3\u30E5\u30FC\u3067\u8868\u793A\u3059\u308B\u9805\u76EE\u306E\u6700\u5927\u6570\u3067\u3059\u3002",x="\u30E9\u30D9\u30EB\u6570\u4E0A\u9650",X="\u307B\u3068\u3093\u3069\u306E\u30D3\u30E5\u30FC\u3067\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8868\u793A\u3059\u308B\u30E9\u30D9\u30EB\u306E\u6700\u5927\u6570\u3067\u3059\u3002",k="\u30ED\u30B0\u306E\u81EA\u52D5\u66F4\u65B0\u9593\u9694",J="\u30ED\u30B0\u306E\u81EA\u52D5\u66F4\u65B0\u9593\u9694\u306E\u79D2\u6570\u3002",z="\u30EA\u30BD\u30FC\u30B9\u306E\u81EA\u52D5\u66F4\u65B0\u9593\u9694",w="\u30EA\u30BD\u30FC\u30B9\u306E\u81EA\u52D5\u66F4\u65B0\u9593\u9694\u306E\u79D2\u6570\u3002\u7121\u52B9\u306B\u3059\u308B\u306B\u306F 0 \u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",V="\u30A2\u30AF\u30BB\u30B9\u62D2\u5426\u901A\u77E5\u306E\u7121\u52B9\u5316",j="\u901A\u77E5\u30D1\u30CD\u30EB\u306E\u3059\u3079\u3066\u306E\u30A2\u30AF\u30BB\u30B9\u62D2\u5426\u8B66\u544A\u3092\u96A0\u3059\u3002",Y=" \u4FDD\u5B58 ",W=" \u30EA\u30ED\u30FC\u30C9 ",[[3,"initialized","expandable",4,"ngIf"],[3,"initialized","expandable"],["title",""],s,["content",""],e,[3,"formGroup"],["key",n,"desc",o],["fxFlex",""],["name","clusterName","placeholder",a,"type","text","matInput","",3,"formControlName"],[3,"formControlName"],["key",l,"desc",A],["color","primary","min","5","max","50","step","5","fxFlex","",3,"formControlName"],["fxFlexAlign"," center",1,"kd-slider-value","kd-muted"],["key",x,"desc",X],["color","primary","min","1","max","10","step","1","fxFlex","",3,"formControlName"],["key",k,"desc",J],["key",z,"desc",w],["color","primary","min","0","max","60","step","5","fxFlex","",3,"formControlName"],["key",V,"desc",j],["fxFlex","","fxLayoutAlign"," center"],["color","primary","name","disableAccessDeniedNotifications",3,"formControlName"],["color","primary","mat-raised-button","",3,"disabled","click"],Y,["type","button","color","primary","mat-raised-button","",3,"click"],W]},template:function(e,n){1&e&&_.\u0275\u0275template(0,C_,41,15,"kd-card",0),2&e&&_.\u0275\u0275property("ngIf",!n.hasLoadError)},directives:[T.NgIf,B.A,r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,L,C.KE,d.yH,I.Nt,r.DefaultValueAccessor,r.NgControlStatus,r.FormControlName,R_,O_.pH,d.XD,d.Wh,u_.Rr,O.lW],styles:["kd-settings-entry[_ngcontent-%COMP%]{min-height:56px}"]}),t})();var $=i(1260),K=i(1324),f_=i(3733),M_=i(833),L_=i(4774),I_=i(5261);function G_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",8),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e.name),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e.displayName," ")}}function U_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",8),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e.value),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e.label," ")}}function h_(t,s){if(1&t){const e=_.\u0275\u0275getCurrentView();_.\u0275\u0275elementStart(0,"kd-settings-entry",11),_.\u0275\u0275elementStart(1,"mat-form-field",6),_.\u0275\u0275elementStart(2,"mat-select",12),_.\u0275\u0275listener("ngModelChange",function(o){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().onLanguageSelected(o)})("ngModelChange",function(o){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().selectedLanguage=o}),_.\u0275\u0275template(3,U_,2,2,"mat-option",9),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd()}if(2&t){const e=_.\u0275\u0275nextContext();_.\u0275\u0275advance(2),_.\u0275\u0275property("ngModel",e.selectedLanguage),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngForOf",e.languages)}}let D_=(()=>{class t{constructor(e,n,o,a,l){this.settings_=e,this.theme_=n,this.cookies_=o,this.document_=a,this.appConfig_=l,this.settings={},this.languages=[]}ngOnInit(){this.settings=this.settings_.get(),this.languages=this.appConfig_.supportedLanguages,this.selectedLanguage=this.cookies_.get(this.appConfig_.languageCookieName)||this.appConfig_.defaultLanguage,this.themes=this.theme_.themes,this.selectedTheme=this.theme_.theme,this.systemTheme=K.f.SystemTheme}onThemeChange(){this.settings.theme=this.selectedTheme,this.settings_.handleThemeChange(this.settings.theme)}onLanguageSelected(e){this.cookies_.set(this.appConfig_.languageCookieName,e),this.document_.location.reload()}isProdMode(){return f_.N.production}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(L_.G),_.\u0275\u0275directiveInject(K.f),_.\u0275\u0275directiveInject(I_.N),_.\u0275\u0275directiveInject(T.DOCUMENT),_.\u0275\u0275directiveInject(M_.ED))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-local-settings"]],viewQuery:function(e,n){if(1&e&&_.\u0275\u0275viewQuery($.gD,7),2&e){let o;_.\u0275\u0275queryRefresh(o=_.\u0275\u0275loadQuery())&&(n.select_=o.first)}},decls:14,vars:5,consts:function(){let s,e,n,o,a,l;return s="\u30ED\u30FC\u30AB\u30EB\u8A2D\u5B9A ",e=" \u30ED\u30FC\u30AB\u30EB\u8A2D\u5B9A\u306F\u30D6\u30E9\u30A6\u30B6\u306E\u30AF\u30C3\u30AD\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u3001\u8907\u6570\u306E\u30C7\u30D0\u30A4\u30B9\u9593\u3067\u540C\u671F\u3055\u308C\u307E\u305B\u3093\u3002\u5909\u66F4\u306F\u81EA\u52D5\u7684\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002 ",n="\u30C6\u30FC\u30DE",o="\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u306E\u30AB\u30E9\u30FC\u30C6\u30FC\u30DE\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",a="\u8A00\u8A9E",l="\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u306E\u8A00\u8A9E\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",[[3,"expandable"],["title",""],s,["content",""],e,["key",n,"desc",o],["fxFlex",""],["fxFlex","",3,"value","valueChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["key",a,"desc",l,4,"ngIf"],["key",a,"desc",l],[3,"ngModel","ngModelChange"]]},template:function(e,n){1&e&&(_.\u0275\u0275elementStart(0,"kd-card",0),_.\u0275\u0275elementStart(1,"div",1),_.\u0275\u0275i18n(2,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"div",3),_.\u0275\u0275elementStart(4,"p"),_.\u0275\u0275i18n(5,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275element(6,"br"),_.\u0275\u0275elementStart(7,"kd-settings-entry",5),_.\u0275\u0275elementStart(8,"mat-form-field",6),_.\u0275\u0275elementStart(9,"mat-select",7),_.\u0275\u0275listener("valueChange",function(a){return n.selectedTheme=a})("valueChange",function(){return n.onThemeChange()}),_.\u0275\u0275elementStart(10,"mat-option",8),_.\u0275\u0275text(11,"System"),_.\u0275\u0275elementEnd(),_.\u0275\u0275template(12,G_,2,2,"mat-option",9),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd(),_.\u0275\u0275template(13,h_,4,2,"kd-settings-entry",10),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementEnd()),2&e&&(_.\u0275\u0275property("expandable",!0),_.\u0275\u0275advance(9),_.\u0275\u0275property("value",n.selectedTheme),_.\u0275\u0275advance(1),_.\u0275\u0275property("value",n.systemTheme),_.\u0275\u0275advance(2),_.\u0275\u0275property("ngForOf",n.themes),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngIf",n.isProdMode()))},directives:[B.A,L,C.KE,d.yH,$.gD,G.ey,T.NgForOf,T.NgIf,r.NgControlStatus,r.NgModel],styles:[".mat-button-toggle-group[_ngcontent-%COMP%]{border:0}.mat-button-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]{border-radius:4px;margin-right:8px}"]}),t})();const P_={path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-settings"]],decls:2,vars:0,template:function(e,n){1&e&&(_.\u0275\u0275element(0,"kd-global-settings"),_.\u0275\u0275element(1,"kd-local-settings"))},directives:[p_,D_],encapsulation:2}),t})(),data:{breadcrumb:"Settings"}};let B_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=_.\u0275\u0275defineInjector({imports:[[D.RouterModule.forChild([P_])],D.RouterModule]}),t})(),v_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=_.\u0275\u0275defineInjector({providers:[M],imports:[[Z.m,Q.K,B_]]}),t})()}}]);