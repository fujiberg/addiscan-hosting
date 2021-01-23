!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"723k":function(i,t,o){"use strict";o.r(t),o.d(t,"ProfilePageModule",(function(){return w}));var r=o("ofXK"),a=o("3Pt+"),b=o("TEn/"),c=o("tyNb"),l=o("mrSG"),u=o("fXoL"),s=o("o0su"),g=o("p6Hd"),f=o("sYmb");function p(n,e){if(1&n&&u.Ib(0,"img",15),2&n){var i=u.Wb().ngIf;u.bc("src",i.avatarUrl,u.jc)}}function d(n,e){if(1&n){var i=u.Nb();u.Kb(0),u.Mb(1,"ion-list"),u.Mb(2,"ion-list-header"),u.Mb(3,"ion-label",2),u.nc(4,"profile.account-management.title"),u.Lb(),u.Lb(),u.Mb(5,"ion-item"),u.Mb(6,"ion-avatar",0),u.lc(7,p,1,1,"img",6),u.Lb(),u.Mb(8,"ion-label"),u.Mb(9,"h3"),u.nc(10),u.Lb(),u.Mb(11,"p"),u.nc(12),u.Lb(),u.Lb(),u.Lb(),u.Mb(13,"ion-item",7),u.Ub("click",(function(){return u.hc(i),u.Wb().logout()})),u.Ib(14,"ion-icon",8),u.Mb(15,"ion-label",2),u.nc(16,"profile.account-management.sign-out"),u.Lb(),u.Lb(),u.Lb(),u.Mb(17,"ion-list"),u.Mb(18,"ion-list-header"),u.Mb(19,"ion-label",2),u.nc(20,"profile.language.title"),u.Lb(),u.Lb(),u.Mb(21,"ion-radio-group",9),u.Mb(22,"ion-item",10),u.Ub("click",(function(){u.hc(i);var n=e.ngIf;return u.Wb().setSettings("en",n.region)})),u.Mb(23,"ion-label",2),u.nc(24,"profile.language.en"),u.Lb(),u.Ib(25,"ion-radio",11),u.Lb(),u.Mb(26,"ion-item",10),u.Ub("click",(function(){u.hc(i);var n=e.ngIf;return u.Wb().setSettings("ja",n.region)})),u.Mb(27,"ion-label",2),u.nc(28,"profile.language.ja"),u.Lb(),u.Ib(29,"ion-radio",12),u.Lb(),u.Mb(30,"ion-item",10),u.Ub("click",(function(){u.hc(i);var n=e.ngIf;return u.Wb().setSettings("nl",n.region)})),u.Mb(31,"ion-label",2),u.nc(32,"profile.language.nl"),u.Lb(),u.Ib(33,"ion-radio",13),u.Lb(),u.Lb(),u.Lb(),u.Mb(34,"ion-list"),u.Mb(35,"ion-list-header"),u.Mb(36,"ion-label",2),u.nc(37,"profile.region.title"),u.Lb(),u.Lb(),u.Mb(38,"ion-radio-group",9),u.Mb(39,"ion-item",10),u.Ub("click",(function(){u.hc(i);var n=e.ngIf;return u.Wb().setSettings(n.language,"jp")})),u.Mb(40,"ion-label",2),u.nc(41,"profile.region.jp"),u.Lb(),u.Ib(42,"ion-radio",14),u.Lb(),u.Mb(43,"ion-item",10),u.Ub("click",(function(){u.hc(i);var n=e.ngIf;return u.Wb().setSettings(n.language,"nl")})),u.Mb(44,"ion-label",2),u.nc(45,"profile.region.nl"),u.Lb(),u.Ib(46,"ion-radio",13),u.Lb(),u.Lb(),u.Lb(),u.Jb()}if(2&n){var t=e.ngIf;u.xb(7),u.bc("ngIf",t.avatarUrl),u.xb(3),u.oc(t.name),u.xb(2),u.oc(t.email),u.xb(9),u.bc("ngModel",t.language),u.xb(17),u.bc("ngModel",t.region)}}function h(n,e){1&n&&u.Ib(0,"ion-spinner")}var v,m,M,L=[{path:"",component:(v=function(){function i(e,t,o){n(this,i),this.authenticationService=e,this.languageService=t,this.userApiService=o,this.userInfo$=e.userInfo$}var t,o,r;return t=i,(o=[{key:"logout",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.authenticationService.logout();case 2:case"end":return n.stop()}}),n,this)})))}},{key:"setSettings",value:function(n,e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return this.languageService.language=n,i.next=3,this.userApiService.userUpdateSettings({body:{language:n,region:e}}).toPromise();case 3:return i.next=5,this.authenticationService.refreshToken();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"ngOnInit",value:function(){}}])&&e(t.prototype,o),r&&e(t,r),i}(),v.\u0275fac=function(n){return new(n||v)(u.Hb(s.b),u.Hb(s.c),u.Hb(g.d))},v.\u0275cmp=u.Bb({type:v,selectors:[["app-profile"]],decls:12,vars:4,consts:[["slot","start"],["defaultHref","/"],["translate",""],["fixed",""],[4,"ngIf","ngIfElse"],["loading",""],[3,"src",4,"ngIf"],["button","",3,"click"],["name","log-out-outline","slot","start"],[3,"ngModel"],[3,"click"],["slot","start","value","en"],["slot","start","value","ja"],["slot","start","value","nl"],["slot","start","value","jp"],[3,"src"]],template:function(n,e){if(1&n&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-buttons",0),u.Ib(3,"ion-back-button",1),u.Lb(),u.Mb(4,"ion-title",2),u.nc(5,"profile.page-title"),u.Lb(),u.Lb(),u.Lb(),u.Mb(6,"ion-content"),u.Mb(7,"ion-grid",3),u.lc(8,d,47,5,"ng-container",4),u.Xb(9,"async"),u.lc(10,h,1,0,"ng-template",null,5,u.mc),u.Lb(),u.Lb()),2&n){var i=u.gc(11);u.xb(8),u.bc("ngIf",u.Yb(9,2,e.userInfo$))("ngIfElse",i)}},directives:[b.l,b.E,b.f,b.c,b.d,b.D,f.a,b.h,b.k,r.k,b.v,b.w,b.u,b.r,b.b,b.m,b.y,b.K,a.d,a.e,b.x,b.I,b.C],pipes:[r.b],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-width-xs:100%;--ion-grid-width-sm:540px;--ion-grid-width-md:720px;--ion-grid-width-lg:720px;--ion-grid-width-xl:720px}"]}),v)}],I=((M=function e(){n(this,e)}).\u0275mod=u.Fb({type:M}),M.\u0275inj=u.Eb({factory:function(n){return new(n||M)},imports:[[c.i.forChild(L)],c.i]}),M),w=((m=function e(){n(this,e)}).\u0275mod=u.Fb({type:m}),m.\u0275inj=u.Eb({factory:function(n){return new(n||m)},imports:[[r.c,a.a,b.F,I,f.c]]}),m)}}])}();