"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[783],{7783:(z,m,n)=>{n.r(m),n.d(m,{PersistentVolumeClaimModule:()=>K});var p=n(1121),c=n(5073),a=n(1504),R=n(3621),T=n(7176),O=n(9765),N=n(6782),E=n(1495),A=n(5387),C=n(7575),I=n(2245),M=n(6048),P=n(744),e=n(4788),U=n(958),f=n(7347),L=n(2057),S=n(2257),v=n(7623),g=n(1677);function V(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",8),e.\u0275\u0275i18n(2,9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.persistentVolumeClaim.status)}}function D(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",8),e.\u0275\u0275i18n(2,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.persistentVolumeClaim.storageClass)}}function y(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",8),e.\u0275\u0275i18n(2,12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275elementStart(4,"a",13),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("routerLink",t.getPersistentVolumeHref(t.persistentVolumeClaim.volume)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.persistentVolumeClaim.volume," ")}}function G(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property",14),e.\u0275\u0275elementStart(1,"div",8),e.\u0275\u0275i18n(2,15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275element(4,"kd-chips",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",t.persistentVolumeClaim.capacity)("displayAll",!0)}}function F(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property",14),e.\u0275\u0275elementStart(1,"div",8),e.\u0275\u0275i18n(2,17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275element(4,"kd-chips",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",t.persistentVolumeClaim.accessModes)}}function H(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"div",5),e.\u0275\u0275template(1,V,5,1,"kd-property",6),e.\u0275\u0275template(2,D,5,1,"kd-property",6),e.\u0275\u0275template(3,y,6,2,"kd-property",6),e.\u0275\u0275template(4,G,5,2,"kd-property",7),e.\u0275\u0275template(5,F,5,1,"kd-property",7),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.storageClass),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.volume),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.capacity),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.accessModes)}}let h=(()=>{class _{constructor(t,i,l,r){this.persistentVolumeClaim_=t,this.actionbar_=i,this.activatedRoute_=l,this.notifications_=r,this.endpoint_=C.wE.resource(C._z.persistentVolumeClaim,!0),this.unsubscribe_=new O.xQ,this.kdState_=P.F.injector.get(M.b),this.isInitialized=!1}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName,i=this.activatedRoute_.snapshot.params.resourceNamespace;this.persistentVolumeClaim_.get(this.endpoint_.detail(),t,i).pipe((0,N.R)(this.unsubscribe_)).subscribe(l=>{this.persistentVolumeClaim=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new E.N("Persistent Volume Claim",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}getPersistentVolumeHref(t){return this.kdState_.href("persistentvolume",t)}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(I.p),e.\u0275\u0275directiveInject(E.b),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(A.TF))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-persistent-volume-claim-detail"]],decls:5,vars:4,consts:function(){let o,t,i,l,r,u;return o="Ressourcen-Informationen",t="Status",i="Storage Class",l="Volume Name",r="Kapazit\xE4t",u="Access Modes",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],["content","","fxLayout","row wrap"],[4,"ngIf"],["fxFlex","100",4,"ngIf"],["key",""],t,["value",""],i,l,["queryParamsHandling","preserve",3,"routerLink"],["fxFlex","100"],r,[3,"map","displayAll"],u,[3,"map"]]},template:function(t,i){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,H,6,5,"div",4),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("initialized",i.isInitialized)("objectMeta",null==i.persistentVolumeClaim?null:i.persistentVolumeClaim.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",i.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.isInitialized))},directives:[U.A,f.A,L.NgIf,S.xw,v.s,a.RouterLinkWithHref,S.yH,g.k],encapsulation:2}),_})();var x=n(2732);const d={path:"",component:(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-persistent-volume-claim-list-state"]],decls:1,vars:0,template:function(t,i){1&t&&e.\u0275\u0275element(0,"kd-persistent-volume-claim-list")},directives:[x.u],encapsulation:2}),_})(),data:{breadcrumb:"Persistent Volume Claims",parent:T.M}},B={path:":resourceNamespace/:resourceName",component:h,data:{breadcrumb:"{{ resourceName }}",parent:d}};let $=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[a.RouterModule.forChild([d,B,R.aA])],a.RouterModule]}),_})(),K=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.m,p.K,$]]}),_})()}}]);