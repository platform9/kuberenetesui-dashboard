"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[43],{3043:(K,E,n)=>{n.r(E),n.d(E,{ServiceModule:()=>V});var R=n(1121),v=n(5073),c=n(1504),m=n(3621),C=n(5966),d=n(1495),u=n(5387),l=n(7575),T=n(2245),I=n(9765),O=n(6782),e=n(4788),A=n(958),N=n(7347),f=n(2057),M=n(7274),U=n(9791),D=n(2958),S=n(2257),y=n(7623),g=n(1677);function L(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",10),e.\u0275\u0275i18n(2,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.service?null:t.service.type)}}function P(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",10),e.\u0275\u0275i18n(2,13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.service?null:t.service.clusterIP)}}function h(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",10),e.\u0275\u0275i18n(2,14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.service?null:t.service.sessionAffinity)}}function H(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property",15),e.\u0275\u0275elementStart(1,"div",10),e.\u0275\u0275i18n(2,16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275element(4,"kd-chips",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",null==t.service?null:t.service.selector)("displayAll",!0)}}function B(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275template(1,L,5,1,"kd-property",8),e.\u0275\u0275template(2,P,5,1,"kd-property",8),e.\u0275\u0275template(3,h,5,1,"kd-property",8),e.\u0275\u0275template(4,H,5,2,"kd-property",9),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.type),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.clusterIP),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.sessionAffinity),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.selector)}}let G=(()=>{class _{constructor(t,i,r,s){this.service_=t,this.actionbar_=i,this.activatedRoute_=r,this.notifications_=s,this.isInitialized=!1,this.endpoint_=l.wE.resource(l._z.service,!0),this.unsubscribe_=new I.xQ}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName,i=this.activatedRoute_.snapshot.params.resourceNamespace;this.podListEndpoint=this.endpoint_.child(t,l._z.pod,i),this.eventListEndpoint=this.endpoint_.child(t,l._z.event,i),this.service_.get(this.endpoint_.detail(),t,i).pipe((0,O.R)(this.unsubscribe_)).subscribe(r=>{this.service=r,this.notifications_.pushErrors(r.errors),this.actionbar_.onInit.emit(new d.N("Service",r.objectMeta,r.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(T.p),e.\u0275\u0275directiveInject(d.b),e.\u0275\u0275directiveInject(c.ActivatedRoute),e.\u0275\u0275directiveInject(u.TF))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-service-detail"]],decls:8,vars:8,consts:function(){let o,t,i,r,s;return o="\u30EA\u30BD\u30FC\u30B9\u60C5\u5831",t="\u7A2E\u5225",i="\u30AF\u30E9\u30B9\u30BF\u30FC IP",r="\u30BB\u30C3\u30B7\u30E7\u30F3\u30A2\u30D5\u30A3\u30CB\u30C6\u30A3\u30FC",s="\u30BB\u30EC\u30AF\u30BF\u30FC",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],[3,"endpoints","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],[4,"ngIf"],["fxFlex","100",4,"ngIf"],["key",""],t,["value",""],i,r,["fxFlex","100"],s,[3,"map","displayAll"]]},template:function(t,i){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,B,5,4,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-endpoint-card-list",5),e.\u0275\u0275element(6,"kd-pod-list",6),e.\u0275\u0275element(7,"kd-event-list",6)),2&t&&(e.\u0275\u0275property("initialized",i.isInitialized)("objectMeta",null==i.service?null:i.service.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",i.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoints",null==i.service||null==i.service.endpointList?null:i.service.endpointList.endpoints)("initialized",i.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",i.podListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",i.eventListEndpoint))},directives:[A.A,N.A,f.NgIf,M.T,U.x,D.X,S.xw,y.s,S.yH,g.k],encapsulation:2}),_})();var x=n(8190);const p={path:"",component:(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-service-list-state"]],decls:1,vars:0,template:function(t,i){1&t&&e.\u0275\u0275element(0,"kd-service-list")},directives:[x.$],encapsulation:2}),_})(),data:{breadcrumb:"Services",parent:C.X}},F={path:":resourceNamespace/:resourceName",component:G,data:{breadcrumb:"{{ resourceName }}",parent:p}};let $=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.RouterModule.forChild([p,F,m.aA])],c.RouterModule]}),_})(),V=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[v.m,R.K,$]]}),_})()}}]);