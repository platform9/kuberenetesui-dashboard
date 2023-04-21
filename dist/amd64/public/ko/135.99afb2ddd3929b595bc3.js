"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[135],{5135:(P,s,i)=>{i.r(s),i.d(s,{RoleBingingModule:()=>j});var R=i(1121),g=i(5073),a=i(1504),u=i(3621),m=i(6931),d=i(1495),p=i(5387),_=i(7575),E=i(2245),f=i(9765),S=i(6782),e=i(4788),B=i(6048),I=i(958),N=i(7347),v=i(2057),C=i(8333),T=i(2257),O=i(7623);function M(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"a",12),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("routerLink",t.getRoleHref()),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.roleBinding.roleRef.name)}}function h(n,o){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"-"),e.\u0275\u0275elementEnd())}function A(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",6),e.\u0275\u0275elementStart(1,"kd-property"),e.\u0275\u0275elementStart(2,"div",7),e.\u0275\u0275i18n(3,8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",9),e.\u0275\u0275template(5,M,2,2,"a",10),e.\u0275\u0275template(6,h,2,0,"span",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",t.roleBinding.roleRef),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.roleBinding.roleRef)}}let L=(()=>{class n{constructor(t,r,l,b,G){this.roleBinding_=t,this.actionbar_=r,this.route_=l,this.notifications_=b,this.kdState_=G,this._unsubscribe=new f.xQ,this.endpoint_=_.wE.resource(_._z.roleBinding,!0),this.isInitialized=!1}ngOnInit(){const t=this.route_.snapshot.params.resourceName,r=this.route_.snapshot.params.resourceNamespace;this.roleBinding_.get(this.endpoint_.detail(),t,r).pipe((0,S.R)(this._unsubscribe)).subscribe(l=>{this.roleBinding=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new d.N("Role Binding",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete(),this.actionbar_.onDetailsLeave.emit()}getRoleHref(){return this.kdState_.href(this.roleBinding.roleRef.kind.toLowerCase(),this.roleBinding.roleRef.name,this.roleBinding.objectMeta.namespace)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(E.p),e.\u0275\u0275directiveInject(d.b),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(p.TF),e.\u0275\u0275directiveInject(B.b))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-role-detail"]],decls:6,vars:6,consts:function(){let o,t;return o="\uB9AC\uC18C\uC2A4 \uC815\uBCF4",t="\uB864 \uB808\uD37C\uB7F0\uC2A4",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],[3,"subjects","initialized"],["content","","fxLayout","row wrap"],["key",""],t,["value",""],["queryParamsHandling","preserve",3,"routerLink",4,"ngIf"],[4,"ngIf"],["queryParamsHandling","preserve",3,"routerLink"]]},template:function(t,r){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,A,7,2,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-subject-list",5)),2&t&&(e.\u0275\u0275property("initialized",r.isInitialized)("objectMeta",null==r.roleBinding?null:r.roleBinding.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",r.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",r.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("subjects",null==r.roleBinding?null:r.roleBinding.subjects)("initialized",r.isInitialized))},directives:[I.A,N.A,v.NgIf,C.E,T.xw,O.s,a.RouterLinkWithHref],encapsulation:2}),n})();var D=i(5813);const c={path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-role-binding-list-state"]],decls:1,vars:0,template:function(t,r){1&t&&e.\u0275\u0275element(0,"kd-role-binding-list")},directives:[D.T],encapsulation:2}),n})(),data:{breadcrumb:"Role Bindings",parent:m.a}},U={path:":resourceNamespace/:resourceName",component:L,data:{breadcrumb:"{{ resourceName }}",parent:c}};let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[a.RouterModule.forChild([c,U,u.aA])],a.RouterModule]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[g.m,R.K,y]]}),n})()}}]);