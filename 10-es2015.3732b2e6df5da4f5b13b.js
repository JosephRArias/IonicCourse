(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{uMfO:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab1PageModule",(function(){return u}));var i=n("TEn/"),o=n("ofXK"),s=n("3Pt+"),r=n("tyNb"),a=n("fXoL"),c=n("Ado8"),b=n("kVNm");const l=[{path:"",component:(()=>{class t{constructor(t){this.newsService=t,this.news=[]}ngOnInit(){this.newsService.getTopHeadlines().subscribe(t=>{this.news.push(...t.articles)})}loadData(t){this.loadArticles(t)}loadArticles(t){this.newsService.getTopHeadlines().subscribe(e=>{this.news.push(...e.articles),t&&t.target.complete(),0!=e.articles.length||(t.target.disabled=!0)})}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(c.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-tab1"]],decls:8,vars:1,consts:[["no-border",""],["color","dark"],[3,"news"],["threshold","150px","position","bottom",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data...","color","white"]],template:function(t,e){1&t&&(a.Kb(0,"ion-header",0),a.Kb(1,"ion-toolbar",1),a.Kb(2,"ion-title"),a.cc(3," News App "),a.Jb(),a.Jb(),a.Jb(),a.Kb(4,"ion-content",1),a.Ib(5,"app-noticias",2),a.Kb(6,"ion-infinite-scroll",3),a.Rb("ionInfinite",(function(t){return e.loadData(t)})),a.Ib(7,"ion-infinite-scroll-content",4),a.Jb(),a.Jb()),2&t&&(a.xb(5),a.Wb("news",e.news))},directives:[i.j,i.A,i.z,i.h,b.a,i.m,i.n],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(l)],r.i]}),t})();var d=n("j1ZV");let u=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[i.B,o.b,s.a,p,d.a]]}),t})()}}]);