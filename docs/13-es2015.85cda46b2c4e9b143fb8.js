(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"723k":function(n,i,t){"use strict";t.r(i),t.d(i,"ProfilePageModule",(function(){return L}));var e=t("ofXK"),o=t("3Pt+"),b=t("TEn/"),c=t("tyNb"),r=t("mrSG"),l=t("fXoL"),a=t("o0su"),s=t("p6Hd"),g=t("sYmb");function u(n,i){if(1&n&&l.Ib(0,"img",15),2&n){const n=l.Wb().ngIf;l.bc("src",n.avatarUrl,l.jc)}}function f(n,i){if(1&n){const n=l.Nb();l.Kb(0),l.Mb(1,"ion-list"),l.Mb(2,"ion-list-header"),l.Mb(3,"ion-label",2),l.nc(4,"profile.account-management.title"),l.Lb(),l.Lb(),l.Mb(5,"ion-item"),l.Mb(6,"ion-avatar",0),l.lc(7,u,1,1,"img",6),l.Lb(),l.Mb(8,"ion-label"),l.Mb(9,"h3"),l.nc(10),l.Lb(),l.Mb(11,"p"),l.nc(12),l.Lb(),l.Lb(),l.Lb(),l.Mb(13,"ion-item",7),l.Ub("click",(function(){return l.hc(n),l.Wb().logout()})),l.Ib(14,"ion-icon",8),l.Mb(15,"ion-label",2),l.nc(16,"profile.account-management.sign-out"),l.Lb(),l.Lb(),l.Lb(),l.Mb(17,"ion-list"),l.Mb(18,"ion-list-header"),l.Mb(19,"ion-label",2),l.nc(20,"profile.language.title"),l.Lb(),l.Lb(),l.Mb(21,"ion-radio-group",9),l.Mb(22,"ion-item",10),l.Ub("click",(function(){l.hc(n);const t=i.ngIf;return l.Wb().setSettings("en",t.region)})),l.Mb(23,"ion-label",2),l.nc(24,"profile.language.en"),l.Lb(),l.Ib(25,"ion-radio",11),l.Lb(),l.Mb(26,"ion-item",10),l.Ub("click",(function(){l.hc(n);const t=i.ngIf;return l.Wb().setSettings("ja",t.region)})),l.Mb(27,"ion-label",2),l.nc(28,"profile.language.ja"),l.Lb(),l.Ib(29,"ion-radio",12),l.Lb(),l.Mb(30,"ion-item",10),l.Ub("click",(function(){l.hc(n);const t=i.ngIf;return l.Wb().setSettings("nl",t.region)})),l.Mb(31,"ion-label",2),l.nc(32,"profile.language.nl"),l.Lb(),l.Ib(33,"ion-radio",13),l.Lb(),l.Lb(),l.Lb(),l.Mb(34,"ion-list"),l.Mb(35,"ion-list-header"),l.Mb(36,"ion-label",2),l.nc(37,"profile.region.title"),l.Lb(),l.Lb(),l.Mb(38,"ion-radio-group",9),l.Mb(39,"ion-item",10),l.Ub("click",(function(){l.hc(n);const t=i.ngIf;return l.Wb().setSettings(t.language,"jp")})),l.Mb(40,"ion-label",2),l.nc(41,"profile.region.jp"),l.Lb(),l.Ib(42,"ion-radio",14),l.Lb(),l.Mb(43,"ion-item",10),l.Ub("click",(function(){l.hc(n);const t=i.ngIf;return l.Wb().setSettings(t.language,"nl")})),l.Mb(44,"ion-label",2),l.nc(45,"profile.region.nl"),l.Lb(),l.Ib(46,"ion-radio",13),l.Lb(),l.Lb(),l.Lb(),l.Jb()}if(2&n){const n=i.ngIf;l.xb(7),l.bc("ngIf",n.avatarUrl),l.xb(3),l.oc(n.name),l.xb(2),l.oc(n.email),l.xb(9),l.bc("ngModel",n.language),l.xb(17),l.bc("ngModel",n.region)}}function d(n,i){1&n&&l.Ib(0,"ion-spinner")}const p=[{path:"",component:(()=>{class n{constructor(n,i,t){this.authenticationService=n,this.languageService=i,this.userApiService=t,this.userInfo$=n.userInfo$}logout(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.authenticationService.logout()}))}setSettings(n,i){return Object(r.a)(this,void 0,void 0,(function*(){this.languageService.language=n,yield this.userApiService.userUpdateSettings({body:{language:n,region:i}}).toPromise(),yield this.authenticationService.refreshToken()}))}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)(l.Hb(a.b),l.Hb(a.c),l.Hb(s.d))},n.\u0275cmp=l.Bb({type:n,selectors:[["app-profile"]],decls:12,vars:4,consts:[["slot","start"],["defaultHref","/"],["translate",""],["fixed",""],[4,"ngIf","ngIfElse"],["loading",""],[3,"src",4,"ngIf"],["button","",3,"click"],["name","log-out-outline","slot","start"],[3,"ngModel"],[3,"click"],["slot","start","value","en"],["slot","start","value","ja"],["slot","start","value","nl"],["slot","start","value","jp"],[3,"src"]],template:function(n,i){if(1&n&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-buttons",0),l.Ib(3,"ion-back-button",1),l.Lb(),l.Mb(4,"ion-title",2),l.nc(5,"profile.page-title"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content"),l.Mb(7,"ion-grid",3),l.lc(8,f,47,5,"ng-container",4),l.Xb(9,"async"),l.lc(10,d,1,0,"ng-template",null,5,l.mc),l.Lb(),l.Lb()),2&n){const n=l.gc(11);l.xb(8),l.bc("ngIf",l.Yb(9,2,i.userInfo$))("ngIfElse",n)}},directives:[b.l,b.E,b.f,b.c,b.d,b.D,g.a,b.h,b.k,e.k,b.v,b.w,b.u,b.r,b.b,b.m,b.y,b.K,o.d,o.e,b.x,b.I,b.C],pipes:[e.b],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-width-xs:100%;--ion-grid-width-sm:540px;--ion-grid-width-md:720px;--ion-grid-width-lg:720px;--ion-grid-width-xl:720px}"]}),n})()}];let M=(()=>{class n{}return n.\u0275mod=l.Fb({type:n}),n.\u0275inj=l.Eb({factory:function(i){return new(i||n)},imports:[[c.i.forChild(p)],c.i]}),n})(),L=(()=>{class n{}return n.\u0275mod=l.Fb({type:n}),n.\u0275inj=l.Eb({factory:function(i){return new(i||n)},imports:[[e.c,o.a,b.F,M,g.c]]}),n})()}}]);