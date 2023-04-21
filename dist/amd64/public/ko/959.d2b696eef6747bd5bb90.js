"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[959],{7959:(M,a,o)=>{o.r(a),o.d(a,{AboutModule:()=>C});var A=o(1121),E=o(5073),l=o(1504),i=o(4541),e=o(4788),s=o(2257),S=o(2895),c=o(4855),d=o(9356);let T=(()=>{class _{constructor(t){this.versionInfo=t.getVersionInfo()}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(i.E))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["ng-component"]],decls:9,vars:0,consts:function(){let n,t;return n="\uBB38\uC11C \uC77D\uAE30",t="\uD53C\uB4DC\uBC31\uD558\uAE30",[["fxLayout","row"],["href","https://github.com/kubernetes/dashboard/tree/master/docs","target","_blank"],["mat-icon-button","","color","accent","matTooltip",n,1,"kd-toolbar-action"],["href","https://github.com/kubernetes/dashboard/issues/new/choose","target","_blank"],["mat-icon-button","","color","accent","matTooltip",t,1,"kd-toolbar-action"]]},template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"a",1),e.\u0275\u0275elementStart(2,"button",2),e.\u0275\u0275elementStart(3,"mat-icon"),e.\u0275\u0275text(4,"description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"a",3),e.\u0275\u0275elementStart(6,"button",4),e.\u0275\u0275elementStart(7,"mat-icon"),e.\u0275\u0275text(8,"feedback"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())},directives:[s.xw,S.lW,c.gM,d.Hw],encapsulation:2}),_})();var R=o(2112),m=o(7347);const O={path:"",component:(()=>{class _{constructor(t,r){this.assets=t,this.versionInfo=r.getVersionInfo(),this.latestCopyrightYear=(new Date).getFullYear()}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(R.z),e.\u0275\u0275directiveInject(i.E))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-about"]],decls:18,vars:4,consts:function(){let n,t,r;return n="\uC54C\uC544\uBCF4\uAE30",t="\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD074\uB7EC\uC2A4\uD130\uB97C \uC704\uD55C \uBC94\uC6A9 \uC6F9 UI",r="\n      \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uB300\uC2DC\uBCF4\uB4DC\uB294 \uB300\uC2DC\uBCF4\uB4DC\n      " + "\ufffd#16\ufffd" + "\uCEE4\uBBA4\uB2C8\uD2F0" + "[\ufffd/#16\ufffd|\ufffd/#17\ufffd]" + "\uC5D0 \uC758\uD574\uC11C\n      " + "\ufffd#17\ufffd" + "\uC624\uD508 \uC18C\uC2A4 \uD504\uB85C\uC81D\uD2B8" + "[\ufffd/#16\ufffd|\ufffd/#17\ufffd]" + "\uB85C \uAD6C\uD604\uB418\uC5C8\uC2B5\uB2C8\uB2E4.\n    ",r=e.\u0275\u0275i18nPostprocess(r),[[3,"withFooter"],["title",""],n,["content","","fxLayout","row"],[1,"kd-about-logo-icon",3,"svgIcon"],["fxFlexAlign","center"],[1,"kd-h1"],[1,"kd-h3"],t,["footer","",1,"kd-muted"],r,["href","https://github.com/kubernetes/dashboard/graphs/contributors"],["href","https://github.com/kubernetes/dashboard"]]},template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"kd-card",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275i18n(2,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275element(4,"mat-icon",4),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275elementStart(6,"div",6),e.\u0275\u0275elementStart(7,"span"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",7),e.\u0275\u0275i18n(10,8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",9),e.\u0275\u0275elementStart(12,"div"),e.\u0275\u0275text(13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div"),e.\u0275\u0275i18nStart(15,10),e.\u0275\u0275element(16,"a",11),e.\u0275\u0275element(17,"a",12),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("withFooter",!0),e.\u0275\u0275advance(4),e.\u0275\u0275property("svgIcon",r.assets.getAppLogo()),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1("Dashboard v",r.versionInfo.semverString,""),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("Copyright 2015 - ",r.latestCopyrightYear," The Kubernetes Authors."))},directives:[m.A,s.xw,d.Hw,s.XD],styles:[".kd-about-logo-icon[_ngcontent-%COMP%]{font-size:64px;height:64px;max-height:64px;max-width:64px;width:64px;margin:0 16px 0 0}"]}),_})(),data:{breadcrumb:"About"}},F={path:"",component:T,outlet:"actionbar"};let N=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[l.RouterModule.forChild([O,F])],l.RouterModule]}),_})(),C=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.m,A.K,N]]}),_})()}}]);