"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[760],{5760:(H,l,o)=>{o.r(l),o.d(l,{StorageClassModule:()=>P});var m=o(1121),p=o(5073),i=o(1504),E=o(3621),g=o(7176),R=o(9765),u=o(6782),d=o(1495),O=o(5387),r=o(7575),A=o(2245),t=o(4788),T=o(958),f=o(7347),S=o(2057),v=o(4789),c=o(2257),N=o(7623),I=o(9356),M=o(4855);function h(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property",9),t.\u0275\u0275elementStart(1,"div",10),t.\u0275\u0275i18n(2,11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",12),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(null==n.storageClass?null:n.storageClass.provisioner)}}function L(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property"),t.\u0275\u0275elementStart(1,"div",13),t.\u0275\u0275text(2),t.\u0275\u0275elementStart(3,"mat-icon",14),t.\u0275\u0275text(4,"tune"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"div",12),t.\u0275\u0275text(6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&e){const n=a.$implicit,s=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",n," "),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(null==s.storageClass?null:s.storageClass.parameters[n])}}function U(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"div",6),t.\u0275\u0275template(1,h,5,1,"kd-property",7),t.\u0275\u0275template(2,L,7,2,"kd-property",8),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.storageClass?null:n.storageClass.provisioner),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",n.getParameterNames())}}let y=(()=>{class e{constructor(n,s,_,F){this.storageClass_=n,this.actionbar_=s,this.activatedRoute_=_,this.notifications_=F,this.endpoint_=r.wE.resource(r._z.storageClass),this.unsubscribe_=new R.xQ,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName;this.pvListEndpoint=this.endpoint_.child(n,r._z.persistentVolume),this.storageClass_.get(this.endpoint_.detail(),n).pipe((0,u.R)(this.unsubscribe_)).subscribe(s=>{this.storageClass=s,this.notifications_.pushErrors(s.errors),this.actionbar_.onInit.emit(new d.N("Storage Class",s.objectMeta,s.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}getParameterNames(){return this.storageClass.parameters?Object.keys(this.storageClass.parameters):[]}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(A.z),t.\u0275\u0275directiveInject(d.b),t.\u0275\u0275directiveInject(i.ActivatedRoute),t.\u0275\u0275directiveInject(O.TF))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-storage-class-detail"]],decls:6,vars:5,consts:function(){let a,n,s;return a="\uB9AC\uC18C\uC2A4 \uC815\uBCF4",n="\uC81C\uACF5\uC790",s="\uD30C\uB77C\uBBF8\uD130",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],a,["content","","fxLayout","row wrap",4,"ngIf"],[3,"endpoint"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngFor","ngForOf"],["fxFlex","100"],["key",""],n,["value",""],["key","","fxLayout",""],["matTooltip",s,1,"kd-storage-class-parameter-icon"]]},template:function(n,s){1&n&&(t.\u0275\u0275element(0,"kd-object-meta",0),t.\u0275\u0275elementStart(1,"kd-card",1),t.\u0275\u0275elementStart(2,"div",2),t.\u0275\u0275i18n(3,3),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(4,U,3,2,"div",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"kd-persistent-volume-list",5)),2&n&&(t.\u0275\u0275property("initialized",s.isInitialized)("objectMeta",null==s.storageClass?null:s.storageClass.objectMeta),t.\u0275\u0275advance(1),t.\u0275\u0275property("initialized",s.isInitialized),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",s.isInitialized),t.\u0275\u0275advance(1),t.\u0275\u0275property("endpoint",s.pvListEndpoint))},directives:[T.A,f.A,S.NgIf,v.p,c.xw,S.NgForOf,N.s,c.yH,I.Hw,M.gM],styles:[".kd-storage-class-parameter-icon[_ngcontent-%COMP%]{font-size:12px;height:12px;max-height:12px;max-width:12px;width:12px;align-self:center;margin-left:4px}"]}),e})();var D=o(3660);const C={path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-storage-class-list-state"]],decls:1,vars:0,template:function(n,s){1&n&&t.\u0275\u0275element(0,"kd-storage-class-list")},directives:[D.c],encapsulation:2}),e})(),data:{breadcrumb:"Storage Classes",parent:g.M}},x={path:":resourceName",component:y,data:{breadcrumb:"{{ resourceName }}",parent:C}};let G=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[i.RouterModule.forChild([C,x,E.aA])],i.RouterModule]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[p.m,m.K,G]]}),e})()}}]);