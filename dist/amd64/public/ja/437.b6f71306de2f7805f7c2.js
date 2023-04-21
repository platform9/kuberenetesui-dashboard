"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[437],{2437:($,r,_)=>{_.r(r),_.d(r,{StatefulSetModule:()=>B});var p=_(1121),c=_(5073),S=_(1504),m=_(3621),f=_(5110),R=_(9765),T=_(6782),d=_(1495),A=_(5387),s=_(7575),O=_(2245),t=_(4788),C=_(958),I=_(7347),N=_(2057),v=_(8701),M=_(9791),U=_(2958),E=_(2257),L=_(7623),D=_(1677);function g(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property",10),t.\u0275\u0275elementStart(1,"div",11),t.\u0275\u0275i18n(2,12),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",13),t.\u0275\u0275element(4,"kd-chips",14),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275property("map",n.statefulSet.labelSelector)("displayAll",!0)}}function y(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property"),t.\u0275\u0275elementStart(1,"div",11),t.\u0275\u0275i18n(2,15),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",13),t.\u0275\u0275element(4,"kd-chips",14),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275property("map",n.statefulSet.containerImages)("displayAll",!0)}}function h(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property"),t.\u0275\u0275elementStart(1,"div",11),t.\u0275\u0275i18n(2,16),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",13),t.\u0275\u0275element(4,"kd-chips",14),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275property("map",n.statefulSet.initContainerImages)("displayAll",!0)}}function P(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"div",7),t.\u0275\u0275template(1,g,5,2,"kd-property",8),t.\u0275\u0275template(2,y,5,2,"kd-property",9),t.\u0275\u0275template(3,h,5,2,"kd-property",9),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.statefulSet?null:n.statefulSet.labelSelector),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.statefulSet?null:n.statefulSet.containerImages),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.statefulSet?null:n.statefulSet.initContainerImages)}}let F=(()=>{class e{constructor(n,o,i,l){this.statefulSet_=n,this.actionbar_=o,this.activatedRoute_=i,this.notifications_=l,this.endpoint_=s.wE.resource(s._z.statefulSet,!0),this.unsubscribe_=new R.xQ,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName,o=this.activatedRoute_.snapshot.params.resourceNamespace;this.podListEndpoint=this.endpoint_.child(n,s._z.pod,o),this.eventListEndpoint=this.endpoint_.child(n,s._z.event,o),this.statefulSet_.get(this.endpoint_.detail(),n,o).pipe((0,T.R)(this.unsubscribe_)).subscribe(i=>{this.statefulSet=i,this.notifications_.pushErrors(i.errors),this.actionbar_.onInit.emit(new d.N("Stateful Set",i.objectMeta,i.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(O.p),t.\u0275\u0275directiveInject(d.b),t.\u0275\u0275directiveInject(S.ActivatedRoute),t.\u0275\u0275directiveInject(A.TF))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-stateful-set-detail"]],decls:8,vars:8,consts:function(){let a,n,o,i;return a="\u30EA\u30BD\u30FC\u30B9\u60C5\u5831",n="\u30E9\u30D9\u30EB\u30BB\u30EC\u30AF\u30BF\u30FC",o="\u30A4\u30E1\u30FC\u30B8",i="\u521D\u671F\u30A4\u30E1\u30FC\u30B8",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],a,["content","","fxLayout","row wrap",4,"ngIf"],[3,"podInfo","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngIf"],["fxFlex","100"],["key",""],n,["value",""],[3,"map","displayAll"],o,i]},template:function(n,o){1&n&&(t.\u0275\u0275element(0,"kd-object-meta",0),t.\u0275\u0275elementStart(1,"kd-card",1),t.\u0275\u0275elementStart(2,"div",2),t.\u0275\u0275i18n(3,3),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(4,P,4,3,"div",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"kd-pod-status-card",5),t.\u0275\u0275element(6,"kd-pod-list",6),t.\u0275\u0275element(7,"kd-event-list",6)),2&n&&(t.\u0275\u0275property("initialized",o.isInitialized)("objectMeta",null==o.statefulSet?null:o.statefulSet.objectMeta),t.\u0275\u0275advance(1),t.\u0275\u0275property("initialized",o.isInitialized),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",o.isInitialized),t.\u0275\u0275advance(1),t.\u0275\u0275property("podInfo",null==o.statefulSet?null:o.statefulSet.podInfo)("initialized",o.isInitialized),t.\u0275\u0275advance(1),t.\u0275\u0275property("endpoint",o.podListEndpoint),t.\u0275\u0275advance(1),t.\u0275\u0275property("endpoint",o.eventListEndpoint))},directives:[C.A,I.A,N.NgIf,v.G,M.x,U.X,E.xw,L.s,E.yH,D.k],encapsulation:2}),e})();var H=_(2252);const u={path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-stateful-set-state"]],decls:1,vars:1,consts:[[3,"showMetrics"]],template:function(n,o){1&n&&t.\u0275\u0275element(0,"kd-stateful-set-list",0),2&n&&t.\u0275\u0275property("showMetrics",!0)},directives:[H.e],encapsulation:2}),e})(),data:{breadcrumb:"Stateful Sets",parent:f.t}},G={path:":resourceNamespace/:resourceName",component:F,data:{breadcrumb:"{{ resourceName }}",parent:u}};let K=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[S.RouterModule.forChild([u,G,m.YH])],S.RouterModule]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[c.m,p.K,K]]}),e})()}}]);