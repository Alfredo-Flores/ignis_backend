"use strict";(self.webpackChunkvendure_admin_ui=self.webpackChunkvendure_admin_ui||[]).push([[672],{83672:function(t,e,n){n.r(e),n.d(e,{DEFAULT_DASHBOARD_WIDGET_LAYOUT:function(){return V},DEFAULT_WIDGETS:function(){return K},DashboardComponent:function(){return P},DashboardModule:function(){return tt},DashboardWidgetComponent:function(){return U},LatestOrdersWidgetComponent:function(){return j},LatestOrdersWidgetModule:function(){return F},OrderSummaryWidgetComponent:function(){return R},OrderSummaryWidgetModule:function(){return N},TestWidgetComponent:function(){return B},TestWidgetModule:function(){return Q},WelcomeWidgetComponent:function(){return Y},WelcomeWidgetModule:function(){return H},dashboardRoutes:function(){return J},"\u02750":function(){return E},"\u02751":function(){return X},"\u02752":function(){return z},"\u02753":function(){return G}});var o=n(51694),r=n(60474),i=n(48304),a=n(37097),d=n(9219),s=n(90380),c=n(56971),l=n(86184),g=n(3189),u=n(41460),p=n(24791),h=n(10116),m=n.n(h),f=n(14416),y=n(29581),v=n(70942),Z=n(3292),w=n(53198);function b(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",7),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().addWidget(e)}),o._uU(1),o.qZA()}if(2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t," ")}}const A=function(t){return{width:t}};function x(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",22),o.NdJ("click",function(){const e=o.CHM(t).$implicit,n=o.oxw(2).$implicit;return o.oxw(2).setWidgetWidth(n,e)}),o._uU(1),o.ALo(2,"translate"),o.qZA()}if(2&t){const t=e.$implicit,n=o.oxw(2).$implicit;o.Q6J("disabled",t===n.width),o.xp6(1),o.hij(" ",o.xi3(2,2,"dashboard.widget-width",o.VKq(5,A,t))," ")}}function C(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"vdr-dashboard-widget",12),o.TgZ(1,"div",13),o.TgZ(2,"div",14),o._UZ(3,"clr-icon",15),o.qZA(),o.TgZ(4,"vdr-dropdown"),o.TgZ(5,"button",16),o._UZ(6,"clr-icon",17),o.qZA(),o.TgZ(7,"vdr-dropdown-menu",3),o.TgZ(8,"h4",18),o._uU(9),o.ALo(10,"translate"),o.qZA(),o.YNc(11,x,3,7,"button",19),o._UZ(12,"div",20),o.TgZ(13,"button",7),o.NdJ("click",function(){o.CHM(t);const e=o.oxw().$implicit;return o.oxw(2).removeWidget(e)}),o._UZ(14,"clr-icon",21),o._uU(15),o.ALo(16,"translate"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=o.oxw().$implicit,e=o.oxw(2);o.Q6J("widgetConfig",t.config),o.xp6(9),o.Oqu(o.lcZ(10,4,"dashboard.widget-resize")),o.xp6(2),o.Q6J("ngForOf",e.getSupportedWidths(t.config)),o.xp6(4),o.hij(" ",o.lcZ(16,6,"dashboard.remove-widget")," ")}}function O(t,e){if(1&t&&(o.TgZ(0,"div",10),o.YNc(1,C,17,8,"vdr-dashboard-widget",11),o.qZA()),2&t){const t=e.$implicit,n=o.oxw(2);o.Q6J("ngClass",n.getClassForWidth(t.width))("cdkDragData",t),o.xp6(1),o.Q6J("vdrIfPermissions",t.config.requiresPermissions||null)}}const _=function(t){return{index:t}};function L(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",8),o.NdJ("cdkDropListDropped",function(e){return o.CHM(t),o.oxw().drop(e)}),o.YNc(1,O,2,3,"div",9),o.qZA()}if(2&t){const t=e.$implicit,n=e.index,r=o.oxw();o.Q6J("cdkDropListData",o.VKq(3,_,n)),o.xp6(1),o.Q6J("ngForOf",t)("ngForTrackBy",r.trackRowItem)}}const D=["portal"];function k(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.ALo(2,"translate"),o.BQk()),2&t){const t=e.ngIf;o.xp6(1),o.Oqu(o.lcZ(2,1,t))}}function q(t,e){}const T=function(t){return["/orders/",t]};function W(t,e){if(1&t&&(o.TgZ(0,"td",1),o._uU(1),o._UZ(2,"vdr-order-state-label",2),o.qZA(),o.TgZ(3,"td",1),o._UZ(4,"vdr-customer-label",3),o.qZA(),o.TgZ(5,"td",1),o._uU(6),o.ALo(7,"localeCurrency"),o.qZA(),o.TgZ(8,"td",1),o._uU(9),o.ALo(10,"timeAgo"),o.qZA(),o.TgZ(11,"td",4),o._UZ(12,"vdr-table-row-action",5),o.ALo(13,"translate"),o.qZA()),2&t){const t=e.item;o.xp6(1),o.hij(" ",t.code," "),o.xp6(1),o.Q6J("state",t.state),o.xp6(2),o.Q6J("customer",t.customer),o.xp6(2),o.Oqu(o.xi3(7,7,t.total,t.currencyCode)),o.xp6(3),o.Oqu(o.lcZ(10,10,t.orderPlacedAt)),o.xp6(3),o.Q6J("label",o.lcZ(13,12,"common.open"))("linkTo",o.VKq(14,T,t.id))}}function M(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",7),o.TgZ(1,"button",8),o.NdJ("click",function(){o.CHM(t);const e=o.oxw();return e.selection$.next({timeframe:"day",date:e.today})}),o._uU(2),o.ALo(3,"translate"),o.qZA(),o.TgZ(4,"button",8),o.NdJ("click",function(){o.CHM(t);const e=o.oxw();return e.selection$.next({timeframe:"day",date:e.yesterday})}),o._uU(5),o.ALo(6,"translate"),o.qZA(),o.TgZ(7,"button",8),o.NdJ("click",function(){return o.CHM(t),o.oxw().selection$.next({timeframe:"week"})}),o._uU(8),o.ALo(9,"translate"),o.qZA(),o.TgZ(10,"button",8),o.NdJ("click",function(){return o.CHM(t),o.oxw().selection$.next({timeframe:"month"})}),o._uU(11),o.ALo(12,"translate"),o.qZA(),o.qZA()}if(2&t){const t=e.ngIf,n=o.oxw();o.xp6(1),o.ekj("btn-primary",t.date===n.today),o.xp6(1),o.hij(" ",o.lcZ(3,12,"dashboard.today")," "),o.xp6(2),o.ekj("btn-primary",t.date===n.yesterday),o.xp6(1),o.hij(" ",o.lcZ(6,14,"dashboard.yesterday")," "),o.xp6(2),o.ekj("btn-primary","week"===t.timeframe),o.xp6(1),o.hij(" ",o.lcZ(9,16,"dashboard.thisWeek")," "),o.xp6(2),o.ekj("btn-primary","month"===t.timeframe),o.xp6(1),o.hij(" ",o.lcZ(12,18,"dashboard.thisMonth")," ")}}function S(t,e){if(1&t&&(o.TgZ(0,"div",9),o._uU(1),o.ALo(2,"localeDate"),o.ALo(3,"localeDate"),o.qZA()),2&t){const t=e.ngIf;o.xp6(1),o.AsE(" ",o.lcZ(2,2,t.start)," - ",o.lcZ(3,4,t.end)," ")}}function $(t,e){if(1&t&&(o.TgZ(0,"p",4),o._uU(1),o.qZA()),2&t){const t=o.oxw(2);o.xp6(1),o.AsE(" ",t.hideVendureBranding?"":"Vendure"," ",t.hideVersion?"":"Admin UI v"+t.version," ")}}function I(t,e){if(1&t&&(o.TgZ(0,"div"),o.TgZ(1,"h4",3),o._uU(2),o._UZ(3,"br"),o.TgZ(4,"small",4),o._uU(5),o.ALo(6,"timeAgo"),o.qZA(),o.qZA(),o.YNc(7,$,2,2,"p",5),o.qZA()),2&t){const t=e.ngIf,n=o.oxw();o.xp6(2),o.AsE(" Welcome, ",t.firstName," ",t.lastName,""),o.xp6(3),o.hij("Last login: ",o.lcZ(6,4,t.user.lastLogin),""),o.xp6(2),o.Q6J("ngIf",!n.hideVendureBranding||!n.hideVersion)}}class P{constructor(t,e,n,o){this.dashboardWidgetService=t,this.localStorageService=e,this.changedDetectorRef=n,this.dataService=o,this.deletionMarker="__delete__"}ngOnInit(){this.availableWidgetIds$=this.dataService.client.userStatus().stream$.pipe((0,a.U)(({userStatus:t})=>t.permissions),(0,a.U)(t=>this.dashboardWidgetService.getAvailableIds(t)),(0,d.b)(t=>this.widgetLayout=this.initLayout(t)))}getClassForWidth(t){switch(t){case 3:return"clr-col-12 clr-col-sm-6 clr-col-lg-3";case 4:return"clr-col-12 clr-col-sm-6 clr-col-lg-4";case 6:return"clr-col-12 clr-col-lg-6";case 8:return"clr-col-12 clr-col-lg-8";case 12:return"clr-col-12";default:(0,i.assertNever)(t)}}getSupportedWidths(t){return t.supportedWidths||[3,4,6,8,12]}setWidgetWidth(t,e){t.width=e,this.recalculateLayout()}trackRow(t,e){return e.map(t=>`${t.id}:${t.width}`).join("|")}trackRowItem(t,e){return e.config}addWidget(t){var e;const n=this.dashboardWidgetService.getWidgetById(t);if(n){const o={id:t,config:n,width:this.getSupportedWidths(n)[0]};let r;this.widgetLayout&&this.widgetLayout.length?r=this.widgetLayout[this.widgetLayout.length-1]:(r=[],null===(e=this.widgetLayout)||void 0===e||e.push(r)),r.push(o),this.recalculateLayout()}}removeWidget(t){t.id=this.deletionMarker,this.recalculateLayout()}drop(t){const{currentIndex:e,previousIndex:n,previousContainer:o,container:r}=t;if((n!==e||o.data.index!==r.data.index)&&this.widgetLayout){const i=this.widgetLayout[o.data.index],a=this.widgetLayout[r.data.index];i.splice(n,1),a.splice(e,0,t.item.data),this.recalculateLayout()}}initLayout(t){const e=this.localStorageService.get("dashboardWidgetLayout");let n;return e&&(n=e.filter(e=>t.includes(e.id))),this.dashboardWidgetService.getWidgetLayout(n)}recalculateLayout(){if(this.widgetLayout){const t=this.widgetLayout.reduce((t,e)=>[...t,...e],[]).filter(t=>t.id!==this.deletionMarker).map(t=>({id:t.id,width:t.width}));this.widgetLayout=this.dashboardWidgetService.getWidgetLayout(t),this.localStorageService.set("dashboardWidgetLayout",t),setTimeout(()=>this.changedDetectorRef.markForCheck())}}}P.\u0275fac=function(t){return new(t||P)(o.Y36(r.ayj),o.Y36(r.n2A),o.Y36(o.sBO),o.Y36(r.DoR))},P.\u0275cmp=o.Xpm({type:P,selectors:[["vdr-dashboard"]],decls:11,vars:8,consts:[[1,"widget-header"],["vdrDropdownTrigger","",1,"btn","btn-secondary","btn-sm"],["shape","plus"],["vdrPosition","bottom-right"],["class","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["cdkDropListGroup",""],["class","clr-row dashboard-row","cdkDropList","","cdkDropListOrientation","horizontal",3,"cdkDropListData","cdkDropListDropped",4,"ngFor","ngForOf","ngForTrackBy"],["vdrDropdownItem","",1,"button",3,"click"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"clr-row","dashboard-row",3,"cdkDropListData","cdkDropListDropped"],["class","dashboard-item","cdkDrag","",3,"ngClass","cdkDragData",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"dashboard-item",3,"ngClass","cdkDragData"],[3,"widgetConfig",4,"vdrIfPermissions"],[3,"widgetConfig"],[1,"flex"],["cdkDragHandle","",1,"drag-handle"],["shape","drag-handle","size","24"],["vdrDropdownTrigger","",1,"icon-button"],["shape","ellipsis-vertical"],[1,"dropdown-header"],["class","button","vdrDropdownItem","",3,"disabled","click",4,"ngFor","ngForOf"],["role","separator",1,"dropdown-divider"],["shape","trash",1,"is-danger"],["vdrDropdownItem","",1,"button",3,"disabled","click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"vdr-dropdown"),o.TgZ(2,"button",1),o._UZ(3,"clr-icon",2),o._uU(4),o.ALo(5,"translate"),o.qZA(),o.TgZ(6,"vdr-dropdown-menu",3),o.YNc(7,b,2,1,"button",4),o.ALo(8,"async"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",5),o.YNc(10,L,2,5,"div",6),o.qZA()),2&t&&(o.xp6(4),o.hij(" ",o.lcZ(5,4,"dashboard.add-widget")," "),o.xp6(3),o.Q6J("ngForOf",o.lcZ(8,6,e.availableWidgetIds$)),o.xp6(3),o.Q6J("ngForOf",e.widgetLayout)("ngForTrackBy",e.trackRow))},directives:function(){return[r.JOL,r.UaT,y.qvL,r.N9E,v.sg,Z.Fd,y.q0d,r.HH4,Z.Wj,Z.Zt,v.mk,r.HAh,U,Z.Bh]},pipes:function(){return[w.X$,v.Ov]},styles:["[_nghost-%COMP%]{display:block;max-width:1200px;margin:auto}.widget-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-300);text-align:center}.placeholder[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{font-size:3em;margin:24px;line-height:1em}.placeholder[_ngcontent-%COMP%]     .clr-i-outline{fill:var(--color-grey-200)}vdr-dashboard-widget[_ngcontent-%COMP%]{margin-bottom:24px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dashboard-row[_ngcontent-%COMP%]{padding:0;border-width:1;margin-bottom:6px;transition:padding .2s,margin .2s}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%], .dashboard-row.cdk-drop-list-receiving[_ngcontent-%COMP%]{border:1px dashed var(--color-component-border-200);padding:6px}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dashboard-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0}),P.ctorParameters=()=>[{type:r.ayj},{type:r.n2A},{type:o.sBO},{type:r.DoR}];class U{constructor(t){this.componentFactoryResolver=t}ngAfterViewInit(){this.loadWidget()}loadWidget(){return(0,g.mG)(this,void 0,void 0,function*(){const t=this.widgetConfig.loadComponent(),e=t instanceof Promise?yield t:t;this.componentRef=this.portal.createComponent(this.componentFactoryResolver.resolveComponentFactory(e)),this.componentRef.changeDetectorRef.detectChanges()})}ngOnDestroy(){this.componentRef&&this.componentRef.destroy()}}U.\u0275fac=function(t){return new(t||U)(o.Y36(o._Vd))},U.\u0275cmp=o.Xpm({type:U,selectors:[["vdr-dashboard-widget"]],viewQuery:function(t,e){if(1&t&&o.Gf(D,5,o.s_b),2&t){let t;o.iGM(t=o.CRH())&&(e.portal=t.first)}},inputs:{widgetConfig:"widgetConfig"},ngContentSelectors:["*"],decls:9,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"title"],[4,"ngIf"],[1,"controls"],[1,"card-block"],["portal",""]],template:function(t,e){1&t&&(o.F$t(),o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.YNc(3,k,3,3,"ng-container",3),o.qZA(),o.TgZ(4,"div",4),o.Hsn(5),o.qZA(),o.qZA(),o.TgZ(6,"div",5),o.YNc(7,q,0,0,"ng-template",null,6,o.W1O),o.qZA(),o.qZA()),2&t&&(o.xp6(3),o.Q6J("ngIf",e.widgetConfig.title))},directives:[v.O5],pipes:[w.X$],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{margin-top:0;min-height:200px}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),U.ctorParameters=()=>[{type:o._Vd}],U.propDecorators={widgetConfig:[{type:o.IIB}],portal:[{type:o.i9L,args:["portal",{read:o.s_b}]}]};const J=[{path:"",component:P,pathMatch:"full"}];class j{constructor(t){this.dataService=t}ngOnInit(){this.latestOrders$=this.dataService.order.getOrders({take:10,filter:{active:{eq:!1},state:{notEq:"Cancelled"}},sort:{orderPlacedAt:r.Asd.DESC}}).refetchOnChannelChange().mapStream(t=>t.orders.items)}}j.\u0275fac=function(t){return new(t||j)(o.Y36(r.DoR))},j.\u0275cmp=o.Xpm({type:j,selectors:[["vdr-latest-orders-widget"]],decls:3,vars:3,consts:[[3,"items"],[1,"left","align-middle"],[3,"state"],[3,"customer"],[1,"right","align-middle"],["iconShape","shopping-cart",3,"label","linkTo"]],template:function(t,e){1&t&&(o.TgZ(0,"vdr-data-table",0),o.ALo(1,"async"),o.YNc(2,W,14,16,"ng-template"),o.qZA()),2&t&&o.Q6J("items",o.lcZ(1,1,e.latestOrders$))},directives:[r.Qj_,r.GXt,r.d$,r.v_8],pipes:[v.Ov,r.kgx,r.eGd,w.X$],styles:["vdr-data-table[_ngcontent-%COMP%]     table{margin-top:0}"],changeDetection:0}),j.ctorParameters=()=>[{type:r.DoR}];class F{}F.\u0275fac=function(t){return new(t||F)},F.\u0275mod=o.oAB({type:F}),F.\u0275inj=o.cJS({imports:[[r.IR2,r.m81]]});class R{constructor(t){this.dataService=t,this.today=new Date,this.yesterday=new Date((new Date).setDate(this.today.getDate()-1)),this.selection$=new f.X({timeframe:"day",date:this.today})}ngOnInit(){this.dateRange$=this.selection$.pipe((0,s.x)(),(0,a.U)(t=>({start:m()(t.date).startOf(t.timeframe).toDate(),end:m()(t.date).endOf(t.timeframe).toDate()})),(0,c.d)(1));const t=this.dateRange$.pipe((0,l.w)(({start:t,end:e})=>this.dataService.order.getOrderSummary(t,e).refetchOnChannelChange().mapStream(t=>t.orders)),(0,c.d)(1));this.totalOrderCount$=t.pipe((0,a.U)(t=>t.totalItems)),this.totalOrderValue$=t.pipe((0,a.U)(t=>t.items.reduce((t,e)=>t+e.total,0)/100)),this.currencyCode$=this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream(t=>t.activeChannel.currencyCode||void 0)}}R.\u0275fac=function(t){return new(t||R)(o.Y36(r.DoR))},R.\u0275cmp=o.Xpm({type:R,selectors:[["vdr-order-summary-widget"]],decls:22,vars:23,consts:[[1,"stats"],[1,"stat"],[1,"stat-figure"],[1,"stat-label"],[1,"footer"],["class","btn-group btn-outline-primary btn-sm",4,"ngIf"],["class","date-range p5",4,"ngIf"],[1,"btn-group","btn-outline-primary","btn-sm"],[1,"btn",3,"click"],[1,"date-range","p5"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o._uU(3),o.ALo(4,"async"),o.qZA(),o.TgZ(5,"div",3),o._uU(6),o.ALo(7,"translate"),o.qZA(),o.qZA(),o.TgZ(8,"div",1),o.TgZ(9,"div",2),o._uU(10),o.ALo(11,"currency"),o.ALo(12,"async"),o.ALo(13,"async"),o.qZA(),o.TgZ(14,"div",3),o._uU(15),o.ALo(16,"translate"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",4),o.YNc(18,M,13,20,"div",5),o.ALo(19,"async"),o.YNc(20,S,4,6,"div",6),o.ALo(21,"async"),o.qZA()),2&t&&(o.xp6(3),o.Oqu(o.lcZ(4,6,e.totalOrderCount$)),o.xp6(3),o.Oqu(o.lcZ(7,8,"dashboard.total-orders")),o.xp6(4),o.hij(" ",o.xi3(11,10,o.lcZ(12,13,e.totalOrderValue$),o.lcZ(13,15,e.currencyCode$)||void 0)," "),o.xp6(5),o.Oqu(o.lcZ(16,17,"dashboard.total-order-value")),o.xp6(3),o.Q6J("ngIf",o.lcZ(19,19,e.selection$)),o.xp6(2),o.Q6J("ngIf",o.lcZ(21,21,e.dateRange$)))},directives:[v.O5],pipes:[v.Ov,w.X$,v.H9,r.HbD],styles:[".stats[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.stat[_ngcontent-%COMP%]{text-align:center}.stat-figure[_ngcontent-%COMP%]{font-size:2rem;line-height:3rem}.stat-label[_ngcontent-%COMP%]{text-transform:uppercase}.date-range[_ngcontent-%COMP%]{margin-top:0}.footer[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;justify-content:space-between}"],changeDetection:0}),R.ctorParameters=()=>[{type:r.DoR}];class N{}N.\u0275fac=function(t){return new(t||N)},N.\u0275mod=o.oAB({type:N}),N.\u0275inj=o.cJS({imports:[[r.IR2]]});class B{}B.\u0275fac=function(t){return new(t||B)},B.\u0275cmp=o.Xpm({type:B,selectors:[["vdr-test-widget"]],decls:2,vars:0,template:function(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"This is a test widget!"),o.qZA())},styles:[""],changeDetection:0});class Q{}Q.\u0275fac=function(t){return new(t||Q)},Q.\u0275mod=o.oAB({type:Q}),Q.\u0275inj=o.cJS({});class Y{constructor(t){this.dataService=t,this.version=r.s5M,this.brand=(0,r.hq7)().brand,this.hideVendureBranding=(0,r.hq7)().hideVendureBranding,this.hideVersion=(0,r.hq7)().hideVersion}ngOnInit(){this.administrator$=this.dataService.administrator.getActiveAdministrator().mapStream(t=>t.activeAdministrator||null)}}Y.\u0275fac=function(t){return new(t||Y)(o.Y36(r.DoR))},Y.\u0275cmp=o.Xpm({type:Y,selectors:[["vdr-welcome-widget"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"placeholder"],["shape","line-chart","size","128"],[1,"h4"],[1,"p5"],["class","p5",4,"ngIf"]],template:function(t,e){1&t&&(o.YNc(0,I,8,6,"div",0),o.ALo(1,"async"),o.TgZ(2,"div",1),o._UZ(3,"clr-icon",2),o.qZA()),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.administrator$))},directives:[v.O5,y.qvL],pipes:[v.Ov,r.eGd],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-200)}"],changeDetection:0}),Y.ctorParameters=()=>[{type:r.DoR}];class H{}H.\u0275fac=function(t){return new(t||H)},H.\u0275mod=o.oAB({type:H}),H.\u0275inj=o.cJS({imports:[[r.IR2]]});const V=[{id:"welcome",width:12},{id:"orderSummary",width:6},{id:"latestOrders",width:6}],E=()=>Y,X=()=>R,z=()=>j,G=()=>B,K={welcome:{loadComponent:E},orderSummary:{title:(0,p.J)("dashboard.orders-summary"),loadComponent:X,requiresPermissions:[r.y3$.ReadOrder]},latestOrders:{title:(0,p.J)("dashboard.latest-orders"),loadComponent:z,supportedWidths:[6,8,12],requiresPermissions:[r.y3$.ReadOrder]},testWidget:{title:"Test Widget",loadComponent:G}};class tt{constructor(t){Object.entries(K).map(([e,n])=>t.registerWidget(e,n)),0===t.getDefaultLayout().length&&t.setDefaultLayout(V)}}tt.\u0275fac=function(t){return new(t||tt)(o.LFG(r.ayj))},tt.\u0275mod=o.oAB({type:tt}),tt.\u0275inj=o.cJS({imports:[[r.m81,u.Bz.forChild(J)]]}),tt.ctorParameters=()=>[{type:r.ayj}]}}]);
//# sourceMappingURL=672-es2015.e01789e2a1d2606d7118.js.map