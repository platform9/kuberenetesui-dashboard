"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[117],{4117:(W,E,o)=>{o.r(E),o.d(E,{JobModule:()=>X});var c=o(1121),A=o(5073),r=o(1504),T=o(3621),C=o(5110),S=o(1495),u=o(5387),s=o(7575),N=o(2245),I=o(9765),M=o(6782),e=o(4788),U=o(958),D=o(7347),f=o(2057),v=o(581),g=o(8701),L=o(9791),b=o(2958),p=o(2257),P=o(7623),B=o(1677);function y(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div",10),e.\u0275\u0275elementStart(1,"span",11),e.\u0275\u0275i18n(2,12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"span"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.job.completions)}}function J(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div",10),e.\u0275\u0275elementStart(1,"span",11),e.\u0275\u0275i18n(2,13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"span"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.job.parallelism)}}function j(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",17),e.\u0275\u0275i18n(2,18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",19),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.job.completions)}}function h(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",17),e.\u0275\u0275i18n(2,20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",19),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.job.parallelism)}}function G(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property",21),e.\u0275\u0275elementStart(1,"div",17),e.\u0275\u0275i18n(2,22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",19),e.\u0275\u0275element(4,"kd-chips",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",t.job.containerImages)("displayAll",!0)}}function H(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property"),e.\u0275\u0275elementStart(1,"div",17),e.\u0275\u0275i18n(2,24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",19),e.\u0275\u0275element(4,"kd-chips",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",t.job.initContainerImages)("displayAll",!0)}}function K(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275template(1,j,5,1,"kd-property",15),e.\u0275\u0275template(2,h,5,1,"kd-property",15),e.\u0275\u0275template(3,G,5,2,"kd-property",16),e.\u0275\u0275template(4,H,5,2,"kd-property",15),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.job?null:t.job.completions),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.job?null:t.job.parallelism),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.job?null:t.job.containerImages),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.job?null:t.job.initContainerImages)}}let F=(()=>{class _{constructor(t,n,l,d){this.job_=t,this.actionbar_=n,this.activatedRoute_=l,this.notifications_=d,this.endpoint_=s.wE.resource(s._z.job,!0),this.unsubscribe_=new I.xQ,this.isInitialized=!1}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName,n=this.activatedRoute_.snapshot.params.resourceNamespace;this.eventListEndpoint=this.endpoint_.child(t,s._z.event,n),this.podListEndpoint=this.endpoint_.child(t,s._z.pod,n),this.job_.get(this.endpoint_.detail(),t,n).pipe((0,M.R)(this.unsubscribe_)).subscribe(l=>{this.job=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new S.N("Job",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(N.p),e.\u0275\u0275directiveInject(S.b),e.\u0275\u0275directiveInject(r.ActivatedRoute),e.\u0275\u0275directiveInject(u.TF))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-job-detail"]],decls:12,vars:12,consts:function(){let i,t,n,l,d,O,m;return i="Informations sur la ressource",t="Achev\xE9s :\xA0",n="Parall\xE9lisme :\xA0",l="Achev\xE9s",d="Parall\xE9lisme",O="Images",m="Images d'Init",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],i,["description",""],["class","kd-inline-property",4,"ngIf"],["content","","fxLayout","row wrap",4,"ngIf"],[3,"conditions","initialized"],[3,"podInfo","initialized"],[3,"endpoint"],[1,"kd-inline-property"],[1,"kd-muted-light"],t,n,["content","","fxLayout","row wrap"],[4,"ngIf"],["fxFlex","100",4,"ngIf"],["key",""],l,["value",""],d,["fxFlex","100"],O,[3,"map","displayAll"],m]},template:function(t,n){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",4),e.\u0275\u0275template(5,y,5,1,"div",5),e.\u0275\u0275template(6,J,5,1,"div",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(7,K,5,4,"div",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(8,"kd-condition-list",7),e.\u0275\u0275element(9,"kd-pod-status-card",8),e.\u0275\u0275element(10,"kd-pod-list",9),e.\u0275\u0275element(11,"kd-event-list",9)),2&t&&(e.\u0275\u0275property("initialized",n.isInitialized)("objectMeta",null==n.job?null:n.job.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",n.isInitialized),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",null==n.job?null:n.job.completions),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.job?null:n.job.parallelism),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("conditions",null==n.job||null==n.job.jobStatus?null:n.job.jobStatus.conditions)("initialized",n.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("podInfo",null==n.job?null:n.job.podInfo)("initialized",n.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",n.podListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",n.eventListEndpoint))},directives:[U.A,D.A,f.NgIf,v.x,g.G,L.x,b.X,p.xw,P.s,p.yH,B.k],encapsulation:2}),_})();var $=o(5526);const R={path:"",component:(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-job-list-state"]],decls:1,vars:1,consts:[[3,"showMetrics"]],template:function(t,n){1&t&&e.\u0275\u0275element(0,"kd-job-list",0),2&t&&e.\u0275\u0275property("showMetrics",!0)},directives:[$.Q],encapsulation:2}),_})(),data:{breadcrumb:"Jobs",parent:C.t}},x={path:":resourceNamespace/:resourceName",component:F,data:{breadcrumb:"{{ resourceName }}",parent:R}};let z=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[r.RouterModule.forChild([R,x,T._Q])],r.RouterModule]}),_})(),X=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[A.m,c.K,z]]}),_})()}}]);