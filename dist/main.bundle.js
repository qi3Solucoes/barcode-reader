webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [class.m2app-dark]=\"isDarkTheme\">\n  <mat-toolbar color=\"primary\">\n\n    {{title}}\n\n  </mat-toolbar>\n\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</mat-sidenav-container>\n<app-fab-menu [isDarkTheme]=\"isDarkTheme\"></app-fab-menu>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.isDarkTheme = false;
        this.title = 'Barcode component Obajá';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigateByUrl('/barcode');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_toolbar_toolbar_component__ = __webpack_require__("./src/app/shared/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sidenav_sidenav_component__ = __webpack_require__("./src/app/shared/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_fab_menu_fab_menu_component__ = __webpack_require__("./src/app/shared/fab-menu/fab-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_core_module__ = __webpack_require__("./src/app/modules/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__barcode_barcode_module__ = __webpack_require__("./src/app/barcode/barcode.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_fab_menu_fab_menu_component__["a" /* FabMenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__modules_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__barcode_barcode_module__["a" /* BarcodeModule */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__barcode_barcode_module__ = __webpack_require__("./src/app/barcode/barcode.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ROOT_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
        pathMatch: 'full',
    },
    {
        path: 'barcode',
        loadChildren: function () { return __WEBPACK_IMPORTED_MODULE_4__barcode_barcode_module__["a" /* BarcodeModule */]; },
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */],
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(ROOT_ROUTES),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */],
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/barcode/barcode.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/barcode/barcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BarcodeComponent = /** @class */ (function () {
    function BarcodeComponent() {
    }
    BarcodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barcode',
            template: "\n    <mat-card class=\"text-center\">\n      <h3 class=\"text-center\">Barcode Scanner</h3>\n      <button mat-fab [routerLink]=\"['media']\">\n        <mat-icon>camera</mat-icon>\n      </button>\n    </mat-card>\n    \n    <mat-card>\n      <router-outlet></router-outlet>\n    </mat-card>\n  ",
            styles: [__webpack_require__("./src/app/barcode/barcode.component.scss")],
        })
    ], BarcodeComponent);
    return BarcodeComponent;
}());



/***/ }),

/***/ "./src/app/barcode/barcode.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__ = __webpack_require__("./src/app/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode_route__ = __webpack_require__("./src/app/barcode/barcode.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__barcode_component__ = __webpack_require__("./src/app/barcode/barcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instant_search_instant_search_component__ = __webpack_require__("./src/app/barcode/instant-search/instant-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_field_input_field_component__ = __webpack_require__("./src/app/barcode/input-field/input-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_stream_media_stream_component__ = __webpack_require__("./src/app/barcode/media-stream/media-stream.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BarcodeModule = /** @class */ (function () {
    function BarcodeModule() {
    }
    BarcodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__barcode_route__["a" /* BarcodeRouteModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__barcode_component__["a" /* BarcodeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__instant_search_instant_search_component__["a" /* InstantSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_5__input_field_input_field_component__["a" /* InputFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_6__media_stream_media_stream_component__["a" /* MediaStreamComponent */],
            ],
        })
    ], BarcodeModule);
    return BarcodeModule;
}());



/***/ }),

/***/ "./src/app/barcode/barcode.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BARCODE_ROUTE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeRouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_stream_media_stream_component__ = __webpack_require__("./src/app/barcode/media-stream/media-stream.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_field_input_field_component__ = __webpack_require__("./src/app/barcode/input-field/input-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instant_search_instant_search_component__ = __webpack_require__("./src/app/barcode/instant-search/instant-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__barcode_component__ = __webpack_require__("./src/app/barcode/barcode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BARCODE_ROUTE = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__barcode_component__["a" /* BarcodeComponent */],
        children: [
            {
                path: '',
                redirectTo: '/barcode/upload',
                pathMatch: 'full',
            },
            {
                path: 'upload',
                component: __WEBPACK_IMPORTED_MODULE_4__instant_search_instant_search_component__["a" /* InstantSearchComponent */],
                pathMatch: 'full',
            },
            {
                path: 'media',
                component: __WEBPACK_IMPORTED_MODULE_2__media_stream_media_stream_component__["a" /* MediaStreamComponent */],
                pathMatch: 'full',
            },
            {
                path: 'field',
                component: __WEBPACK_IMPORTED_MODULE_3__input_field_input_field_component__["a" /* InputFieldComponent */],
                pathMatch: 'full',
            },
        ],
    },
];
var BarcodeRouteModule = /** @class */ (function () {
    function BarcodeRouteModule() {
    }
    BarcodeRouteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(BARCODE_ROUTE),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */],
            ],
        })
    ], BarcodeRouteModule);
    return BarcodeRouteModule;
}());



/***/ }),

/***/ "./src/app/barcode/input-field/input-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\" fxLayout=\"row\" fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center center\"\n     fxLayoutAlign.xs=\"start\">\n\n  <mat-card class=\"flex-item\" fxFlex=\"50\">\n\n    <div class=\"flex-container\" fxLayout=\"row\">\n      <div class=\"flex-item\" fxFlex=\"100\">\n        <form class=\"example-form\">\n          <mat-form-field>\n            <input matInput #isbn maxlength=\"256\" placeholder=\"Barcode Number\">\n            <mat-hint align=\"start\"><strong>Characters: </strong></mat-hint>\n            <mat-hint align=\"end\">{{isbn.characterCount}} / 50</mat-hint>\n          </mat-form-field>\n        </form>\n      </div>\n      <div class=\"flex-item\" fxFlex=\"10\">\n\n        <button (click)=\"onClick()\" mat-fab>\n          <mat-icon>file_upload</mat-icon>\n        </button>\n        <input type=\"file\" accept=\"image/*\" capture=\"camera\" #fileInputbox (cancel)=\"onCancel($event)\"\n               (change)=\"onChange($event)\"\n               [ngClass]=\"['none']\">\n      </div>\n\n    </div>\n\n\n    <div class=\"flex-container\" fxLayout=\"column\">\n      <div class=\"thumbnail flex-item show__sm\" *ngIf=\"resultCode\">\n        <div class=\"imgWrapper text-center\"><img class=\"responsive-img\" [src]=\"resultUrl\"></div>\n        <div class=\"caption text-center\"><h3 class=\"code\">{{resultCode}}</h3></div>\n        <mat-spinner class=\"smaller app-spinner\" *ngIf=\"!message\"></mat-spinner>\n        <div class=\"flex-item\" *ngIf=\"message\">\n          {{message}}\n        </div>\n      </div>\n\n      <mat-progress-bar *ngIf=\"startProgress\"\n                        class=\"app-progress flex-item\"\n                        mode=\"indeterminate\"\n                        aria-label=\"Indeterminate progress-bar example\"></mat-progress-bar>\n\n      <div class=\"flex-item\" *ngIf=\"error\">\n        {{error}}\n      </div>\n    </div>\n  </mat-card>\n\n  <mat-card class=\"flex-item app-input-section hidden__sm\" fxFlex=\"50\" *ngIf=\"resultCode\">\n\n    <div class=\"container\">\n      <div class=\"tab\"></div>\n      <div class=\"paid\"><p>Your Ticket Information</p></div>\n      <div class=\"receipt\">\n        <div class=\"paper\">\n          <div class=\"title\">Mr Blah Blahs</div>\n          <div class=\"date\">Date: 07/01/2016</div>\n          <table>\n            <tbody>\n            <tr>\n              <td>2 x Adult</td>\n              <td class=\"right\">$10</td>\n            </tr>\n            <tr>\n              <td>1 x Child</td>\n              <td class=\"right\">$30</td>\n            </tr>\n            </tbody>\n          </table>\n          <div class=\"sign center\">\n            <img class=\"small-img\" [src]=\"resultUrl\">\n            <br/>\n            {{resultCode}}\n            <br/>\n            <mat-spinner class=\"smaller app-spinner\" *ngIf=\"!message\"></mat-spinner>\n            <div class=\"flex-item\" *ngIf=\"message\">\n              {{message}}\n            </div>\n            <div class=\"thankyou\">\n              Thank you for your business\n            </div>\n          </div>\n        </div>\n\n        <div>\n        </div>\n      </div>\n\n    </div>\n\n  </mat-card>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/barcode/input-field/input-field.component.scss":
/***/ (function(module, exports) {

module.exports = ".none {\n  display: none; }\n\n.paid {\n  display: none;\n  width: 300px;\n  margin: 0 auto;\n  background-color: #fff;\n  text-align: center;\n  padding-top: 25px;\n  border-radius: 0px 0px 10px 10px;\n  padding-bottom: 25px;\n  color: #00773D;\n  line-height: 30px; }\n\n.paid p {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAFFQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////XBczUAAAABl0Uk5TABBvfzCfcJDQ30BQ77AgwIDwr1+/4GDPj0lrChwAAAABYktHRBp1Z+QyAAAACXBIWXMAAABIAAAASABGyWs+AAAA3ElEQVQ4y9XT3RqCIAwGYDDIVAqtrL77v9HEOeVnetRJO5rwPrKHDaV+GLo65WFSYSyEOIcdJrUkcNFKWTSk2um7K09XgQBuRlfgJhZJFbiw2cAfEKoL6I/IoHfNSuZ6RJMSNub+2CWLMQ6we4RMICsqCJknrVqZkBmxIoEsZw2MJMI1M4pIl9aTo0Be28XxHcZoPgiliVDRgC1llDYgSwmlDcjTGaUNoBjivhs/MtGRqfGWZkz1QMv5Dah0SXRDI0gxDb375E/QOppkrmGEFGOf/Lb3hfDlk/uv+AKrAiRKE2IeeAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMS0wMVQwNjo0OTowNyswMDowMD3rltsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMTEtMDFUMDY6NDk6MDcrMDA6MDBMti5nAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTYtMDUtMDkgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnAB+8nQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMzU0Ye/0AAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADM1Tj+t2gAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDc3OTgyOTQ3qzTZ2AAAABF0RVh0VGh1bWI6OlNpemUANTU1QkJHWEOtAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdXNyL2hvc3RpbmdfZmlsZXM5L21haW4vdG1wLzM3MTg2Nzg3MzFfMzIwMjI5ODAyODI0MjQ1NzBfdG1wLnBuZ1swXYXZSF0AAAAASUVORK5CYII=\") no-repeat left center;\n  padding-left: 30px;\n  width: 190px;\n  margin: 0 auto; }\n\n.container {\n  width: 350px;\n  margin: 50px auto; }\n\n.tab {\n  width: 350px;\n  margin: 0 auto;\n  height: 10px;\n  background-color: #2B2929;\n  border-radius: 50px; }\n\n.receipt {\n  background-color: #FAFAF9;\n  padding-top: 20px;\n  width: 300px;\n  height: 300px;\n  margin: -5px auto;\n  border-radius: 5px 5px 50px 50px;\n  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\n\n.paper {\n  border-top: 1px dashed #ccc;\n  width: 96%;\n  margin: 0 auto; }\n\n.title {\n  color: #00773D;\n  margin-top: 20px;\n  margin-left: 10px;\n  font-weight: bold;\n  float: left;\n  font-size: 16px;\n  line-height: 30px; }\n\n.date {\n  color: #00773D;\n  margin-top: 20px;\n  margin-right: 10px;\n  font-weight: lighter;\n  float: right;\n  font-size: 12px;\n  line-height: 30px; }\n\ntable {\n  clear: both;\n  width: 95%;\n  margin: 0 auto;\n  color: #5B5B5B;\n  font-size: 12px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  border-bottom: 1px dashed #ccc; }\n\n.right {\n  text-align: right; }\n\n.center {\n  text-align: center;\n  padding-top: 20px; }\n\ninput[type=button] {\n  outlie: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-weight: bold;\n  color: #fff;\n  padding: 10px 10px 10px 30px;\n  background: #00874C url(\"http://dc707.4shared.com/img/zr6_o80l/s3/13ffd4de138/cart.png\") no-repeat 5px center; }\n\ninput[type=button]:hover {\n  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  color: #f0f0f0; }\n\n.barcode {\n  height: 10px;\n  width: 0;\n  -webkit-box-shadow: 1px 0 0 1px #343434, 5px 0 0 1px #343434, 10px 0 0 1px #343434, 11px 0 0 1px #343434, 15px 0 0 1px #343434, 18px 0 0 1px #343434, 22px 0 0 1px #343434, 23px 0 0 1px #343434, 26px 0 0 1px #343434, 30px 0 0 1px #343434, 35px 0 0 1px #343434, 37px 0 0 1px #343434, 41px 0 0 1px #343434, 44px 0 0 1px #343434, 47px 0 0 1px #343434, 51px 0 0 1px #343434, 56px 0 0 1px #343434, 59px 0 0 1px #343434, 64px 0 0 1px #343434, 68px 0 0 1px #343434, 72px 0 0 1px #343434, 74px 0 0 1px #343434, 77px 0 0 1px #343434, 81px 0 0 1px #343434;\n          box-shadow: 1px 0 0 1px #343434, 5px 0 0 1px #343434, 10px 0 0 1px #343434, 11px 0 0 1px #343434, 15px 0 0 1px #343434, 18px 0 0 1px #343434, 22px 0 0 1px #343434, 23px 0 0 1px #343434, 26px 0 0 1px #343434, 30px 0 0 1px #343434, 35px 0 0 1px #343434, 37px 0 0 1px #343434, 41px 0 0 1px #343434, 44px 0 0 1px #343434, 47px 0 0 1px #343434, 51px 0 0 1px #343434, 56px 0 0 1px #343434, 59px 0 0 1px #343434, 64px 0 0 1px #343434, 68px 0 0 1px #343434, 72px 0 0 1px #343434, 74px 0 0 1px #343434, 77px 0 0 1px #343434, 81px 0 0 1px #343434;\n  display: inline-block;\n  margin-right: 85px; }\n\n.sign {\n  text-align: center; }\n\n.thankyou {\n  line-height: 14px;\n  font-size: 10px;\n  margin-top: 5px;\n  color: #5B5B5B;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/barcode/input-field/input-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_barcode_validator_service__ = __webpack_require__("./src/app/services/barcode-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_barcode_decoder_service__ = __webpack_require__("./src/app/services/barcode-decoder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputFieldComponent = /** @class */ (function () {
    function InputFieldComponent(sanitizer, barcodeValidator, decoderService) {
        this.sanitizer = sanitizer;
        this.barcodeValidator = barcodeValidator;
        this.decoderService = decoderService;
        this.startProgress = false;
        this.code$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
    }
    InputFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barcodeValidator.doSearchbyCode(this.code$)
            .subscribe(function (res) { return _this.message = res; }, function (err) {
            _this.message = "An Error! " + err.json().error;
        });
    };
    InputFieldComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    InputFieldComponent.prototype.setStartProgress = function () {
        this.startProgress = !this.startProgress;
    };
    InputFieldComponent.prototype.onChange = function (e) {
        var _this = this;
        var file = URL.createObjectURL(e.target.files[0]);
        this.decoderService
            .onDecodeSingle(file)
            .then(function (code) {
            _this.setStartProgress();
            _this.resultUrl = _this.sanitize(file);
            _this.isbn.value = code;
            _this.resultCode = code;
            _this.decoderService.onPlaySound();
            _this.code$.next(code);
        })
            .catch(function (e) {
            _this.resultUrl = '';
            _this.resultCode = '';
            _this.isbn.value = '';
            _this.setStartProgress();
            _this.error = "Something is wrong: " + e;
        });
    };
    InputFieldComponent.prototype.onCancel = function (e) {
        this.setStartProgress();
        this.error = "Something is wrong: Please Select An Image";
    };
    InputFieldComponent.prototype.onClick = function () {
        this.setStartProgress();
        this.fileInputbox.nativeElement.click();
        this.error = null;
    };
    InputFieldComponent.prototype.ngOnDestroy = function () {
        console.info('Stopped!');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('isbn'),
        __metadata("design:type", Object)
    ], InputFieldComponent.prototype, "isbn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInputbox'),
        __metadata("design:type", Object)
    ], InputFieldComponent.prototype, "fileInputbox", void 0);
    InputFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-field',
            template: __webpack_require__("./src/app/barcode/input-field/input-field.component.html"),
            styles: [__webpack_require__("./src/app/barcode/input-field/input-field.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__services_barcode_validator_service__["a" /* BarcodeValidatorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_barcode_decoder_service__["a" /* BarcodeDecoderService */]])
    ], InputFieldComponent);
    return InputFieldComponent;
}());



/***/ }),

/***/ "./src/app/barcode/instant-search/instant-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstantSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_barcode_validator_service__ = __webpack_require__("./src/app/services/barcode-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstantSearchComponent = /** @class */ (function () {
    function InstantSearchComponent(barcodeValidator) {
        this.barcodeValidator = barcodeValidator;
        this.code$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    InstantSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barcodeValidator
            .doSearchbyCode(this.code$)
            .subscribe(function (res) {
            _this.spinner = false;
            _this.message = res;
        }, function (err) {
            _this.spinner = false;
            _this.message = "An Error! " + err.json().error;
        });
    };
    InstantSearchComponent.prototype.onChange = function () {
        this.spinner = true;
    };
    InstantSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-instant-search',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_barcode_validator_service__["a" /* BarcodeValidatorService */]])
    ], InstantSearchComponent);
    return InstantSearchComponent;
}());



/***/ }),

/***/ "./src/app/barcode/media-stream/media-stream.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"app-input-section hidden__sm\" *ngIf=\"lastResult\">\n  <div class=\"ticket\">\n    <div class=\"datas\">\n      <a class=\"link\">\n        <div class=\"ribbon\">\n          <div class=\"label\">LIMITED</div>\n        </div>\n        <span>Your Code is</span>\n        <strong>{{ lastResult || async }}'</strong>\n        <em *ngIf=\"!message\">Searching...</em>\n        <em *ngIf=\"message\">{{message}}</em>\n      </a>\n    </div>\n  </div>\n</mat-card>\n\n<mat-card>\n  <div class=\"show__sm\" *ngIf=\"lastResult\">\n    <p>Your Code is</p>\n    <p>{{ lastResult || async }}'</p>\n    <p *ngIf=\"!message\">Searching...</p>\n    <p *ngIf=\"message\">{{message}}</p>\n  </div>\n\n  <div id=\"interactive\" class=\"viewport\" #interactive></div>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/barcode/media-stream/media-stream.component.scss":
/***/ (function(module, exports) {

module.exports = "#interactive {\n  max-width: 50rem; }\n\n.link {\n  display: block;\n  padding: 33px 0 0 0;\n  color: #313131;\n  text-decoration: none;\n  cursor: pointer; }\n\n/*  ================================================\n            TICKET STYLING & COUPON EFFECT\n    ================================================  */\n\n.ticket {\n  position: relative;\n  display: table;\n  width: 100%;\n  height: 228px;\n  margin: 50px auto 0 auto;\n  padding-bottom: 57px;\n  background: #F4F4F4;\n  text-align: center; }\n\n.ticket::before {\n    content: \"\";\n    position: absolute;\n    top: 54.5%;\n    left: 0;\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n    border-left: 20px solid #a52958; }\n\n.ticket::after {\n    content: \"\";\n    position: absolute;\n    top: 54.5%;\n    right: 0;\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n    border-right: 20px solid #185661; }\n\n/*  ================================================\n                    RIBBON EFFECT\n    ================================================  */\n\n.ribbon {\n  position: absolute;\n  display: block;\n  top: -4px;\n  right: -4px;\n  width: 110px;\n  height: 110px;\n  overflow: hidden; }\n\n.ribbon .label {\n    position: relative;\n    display: block;\n    left: -10px;\n    top: 23px;\n    width: 158px;\n    padding: 10px 0;\n    font-size: 15px;\n    text-align: center;\n    color: #fff;\n    background-color: #e85e68;\n    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n    -webkit-transform: rotate(45deg) translate3d(0, 0, 0);\n            transform: rotate(45deg) translate3d(0, 0, 0); }\n\n.ribbon .label:before, .ribbon .label:after {\n      content: '';\n      position: absolute;\n      bottom: -4px;\n      border-top: 4px solid #a71c26;\n      border-left: 4px solid transparent;\n      border-right: 4px solid transparent; }\n\n.ribbon .label:before {\n      left: 0; }\n\n.ribbon .label:after {\n      right: 0; }\n\n/*  ================================================\n                        CONTENT\n    ================================================  */\n\nspan {\n  display: block;\n  font-size: 29px;\n  color: #540c5d; }\n\nstrong {\n  display: block;\n  font-size: 45px;\n  color: #a52958;\n  margin: 0 0 10px 0; }\n\nem {\n  display: block;\n  font-size: 29px;\n  font-style: normal;\n  color: #86db78;\n  border-top: 2px dashed rgba(0, 0, 0, 0.1);\n  padding: 10px 0; }\n\n/*  ================================================\n              ACTION CALL & ARROW UP EFFECT\n    ================================================  */\n\n.button {\n  display: block;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 57px;\n  padding: 0;\n  line-height: 58px;\n  text-align: center;\n  border-radius: 0;\n  background-color: #86db78; }\n\n.button::before {\n    content: \"\";\n    position: absolute;\n    top: -10px;\n    left: calc(50% - 20px);\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-bottom: 10px solid #86db78; }\n"

/***/ }),

/***/ "./src/app/barcode/media-stream/media-stream.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaStreamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_barcode_decoder_service__ = __webpack_require__("./src/app/services/barcode-decoder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_barcode_validator_service__ = __webpack_require__("./src/app/services/barcode-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MediaStreamComponent = /** @class */ (function () {
    function MediaStreamComponent(decoderService, barcodeValidator) {
        this.decoderService = decoderService;
        this.barcodeValidator = barcodeValidator;
        this.code$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    ;
    MediaStreamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.decoderService.onLiveStreamInit();
        this.decoderService.onDecodeProcessed();
        this.decoderService
            .onDecodeDetected()
            .then(function (code) {
            _this.lastResult = code;
            _this.decoderService.onPlaySound();
            _this.code$.next(code);
            window.location.href = 'https://home.obaja.com.br/search?q=' + _this.lastResult;
        })
            .catch(function (err) { return _this.error = "Something Wrong: " + err; });
        this.barcodeValidator
            .doSearchbyCode(this.code$)
            .subscribe(function (res) { return _this.message = res; }, function (err) {
            _this.message = "An Error! " + err.json().error;
        });
    };
    MediaStreamComponent.prototype.ngAfterContentInit = function () {
        this.interactive.nativeElement.children[0].style.position = 'absolute';
    };
    MediaStreamComponent.prototype.ngOnDestroy = function () {
        this.decoderService.onDecodeStop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('interactive'),
        __metadata("design:type", Object)
    ], MediaStreamComponent.prototype, "interactive", void 0);
    MediaStreamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-media-stream',
            template: __webpack_require__("./src/app/barcode/media-stream/media-stream.component.html"),
            styles: [__webpack_require__("./src/app/barcode/media-stream/media-stream.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_barcode_decoder_service__["a" /* BarcodeDecoderService */], __WEBPACK_IMPORTED_MODULE_2__services_barcode_validator_service__["a" /* BarcodeValidatorService */]])
    ], MediaStreamComponent);
    return MediaStreamComponent;
}());



/***/ }),

/***/ "./src/app/config/decoder-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DECODER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECODER_LIVE_CONFIG; });
var DECODER_CONFIG;
DECODER_CONFIG = {
    inputStream: {
        size: 800,
    },
    locator: {
        patchSize: 'medium',
        halfSample: false,
    },
    numOfWorkers: 1,
    decoder: {
        // readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
        //   'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'],
        readers: ['ean_reader'],
    },
    locate: true,
    src: null,
};
var DECODER_LIVE_CONFIG;
DECODER_LIVE_CONFIG = {
    locator: {
        patchSize: 'medium',
        halfSample: false,
    },
    numOfWorkers: 1,
    decoder: {
        // readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
        //   'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'],
        readers: ['ean_reader'],
    },
    locate: true,
};


/***/ }),

/***/ "./src/app/modules/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_barcode_decoder_service__ = __webpack_require__("./src/app/services/barcode-decoder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_barcode_validator_service__ = __webpack_require__("./src/app/services/barcode-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("./src/app/modules/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_barcode_validator_service__["a" /* BarcodeValidatorService */],
                __WEBPACK_IMPORTED_MODULE_1__services_barcode_decoder_service__["a" /* BarcodeDecoderService */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/modules/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// modules
var SHARED_COMPONENTS = [];
var SHARED_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCommonModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
];
var PROVIDERS = [];
/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: SHARED_MODULES.slice(),
            declarations: SHARED_COMPONENTS.slice(),
            exports: SHARED_MODULES.concat(SHARED_COMPONENTS),
            providers: PROVIDERS.slice(),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: "<h1>NOT FOUND!</h1>",
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/barcode-decoder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeDecoderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__ = __webpack_require__("./src/app/config/decoder-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Quagga__ = __webpack_require__("./node_modules/Quagga/dist/quagga.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Quagga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Quagga__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarcodeDecoderService = /** @class */ (function () {
    function BarcodeDecoderService() {
        this.sound = new Audio('assets/barcode.wav');
    }
    BarcodeDecoderService.prototype.onDecodeSingle = function (src) {
        __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["a" /* DECODER_CONFIG */].src = src;
        // Promisify DecodeSingle method from Quagga
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_Quagga__["decodeSingle"](__WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["a" /* DECODER_CONFIG */], function (result) {
                if (!result || typeof result.codeResult === 'undefined') {
                    reject('File Cannot be Decode, Please Try a Valid Barcode;');
                }
                resolve(result.codeResult.code);
            });
        });
    };
    BarcodeDecoderService.prototype.setLiveStreamConfig = function () {
        __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["b" /* DECODER_LIVE_CONFIG */].inputStream = {
            type: 'LiveStream',
            constraints: {
                width: { min: 640 },
                height: { min: 480 },
                facingMode: 'environment',
                aspectRatio: {
                    min: 1,
                    max: 2,
                },
            },
        };
        return __WEBPACK_IMPORTED_MODULE_1__config_decoder_config__["b" /* DECODER_LIVE_CONFIG */];
    };
    BarcodeDecoderService.prototype.onLiveStreamInit = function () {
        var state = this.setLiveStreamConfig();
        __WEBPACK_IMPORTED_MODULE_2_Quagga__["init"](state, function (err) {
            if (err) {
                return console.error(err);
            }
            __WEBPACK_IMPORTED_MODULE_2_Quagga__["start"]();
        });
    };
    BarcodeDecoderService.prototype.onProcessed = function (result) {
        var drawingCtx = __WEBPACK_IMPORTED_MODULE_2_Quagga__["canvas"].ctx.overlay, drawingCanvas = __WEBPACK_IMPORTED_MODULE_2_Quagga__["canvas"].dom.overlay;
        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    __WEBPACK_IMPORTED_MODULE_2_Quagga__["ImageDebug"].drawPath(box, {
                        x: 0,
                        y: 1,
                    }, drawingCtx, {
                        color: 'green',
                        lineWidth: 2,
                    });
                });
            }
            if (result.box) {
                __WEBPACK_IMPORTED_MODULE_2_Quagga__["ImageDebug"].drawPath(result.box, {
                    x: 0,
                    y: 1,
                }, drawingCtx, {
                    color: '#00F',
                    lineWidth: 2,
                });
            }
            if (result.codeResult && result.codeResult.code) {
                __WEBPACK_IMPORTED_MODULE_2_Quagga__["ImageDebug"].drawPath(result.line, {
                    x: 'x',
                    y: 'y',
                }, drawingCtx, {
                    color: 'red',
                    lineWidth: 3,
                });
            }
        }
    };
    BarcodeDecoderService.prototype.onDecodeProcessed = function () {
        __WEBPACK_IMPORTED_MODULE_2_Quagga__["onProcessed"](this.onProcessed);
    };
    BarcodeDecoderService.prototype.onDecodeDetected = function () {
        // Promisify OnDetected method from Quagga
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_Quagga__["onDetected"](function (result) {
                if (!result || typeof result.codeResult === 'undefined') {
                    reject('Cannot be Detected, Please Try again!');
                }
                resolve(result.codeResult.code);
            });
        });
    };
    BarcodeDecoderService.prototype.onDecodeStop = function () {
        __WEBPACK_IMPORTED_MODULE_2_Quagga__["stop"]();
        console.info('Camera Stopped Working!');
    };
    BarcodeDecoderService.prototype.onPlaySound = function () {
        this.sound.play();
    };
    BarcodeDecoderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BarcodeDecoderService);
    return BarcodeDecoderService;
}());



/***/ }),

/***/ "./src/app/services/barcode-validator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarcodeValidatorService = /** @class */ (function () {
    function BarcodeValidatorService(_http) {
        this._http = _http;
        this.endpoints = {
            search: 'https://exmpale-barcode-service.com',
        };
    }
    BarcodeValidatorService.prototype.doSearchbyCode = function (codes, debounceMs) {
        var _this = this;
        if (debounceMs === void 0) { debounceMs = 400; }
        return codes
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* debounceTime */])(debounceMs), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* switchMap */])(function (code) { return _this.rawSearchByCode(code); }));
    };
    BarcodeValidatorService.prototype.rawSearchByCode = function (code) {
        /** Uncomment if you have you want to active your barcode service to be validated from a URL
         return this._http
         .get(`${this.endpoints.search}${code}`)
         .pipe(
         catchError(this.handleError),
         )
         */
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])('Your Barcode Service Provider Sample Message');
    };
    BarcodeValidatorService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    BarcodeValidatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BarcodeValidatorService);
    return BarcodeValidatorService;
}());



/***/ }),

/***/ "./src/app/shared/fab-menu/fab-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"app-action\" [class.m2app-dark]=\"isDarkTheme\">\n   <div class=\"flex-container\" fxLayout=\"column\">\n     <div class=\"flex-item\" [@list1] *ngIf=\"active\" [routerLink]=\"['barcode']\"><button mat-fab><mat-icon>home</mat-icon></button></div>\n     <div class=\"flex-item\" [@list2] *ngIf=\"active\" [routerLink]=\"['barcode/field']\"><button mat-fab><mat-icon>file_upload</mat-icon></button></div>\n     <div class=\"flex-item\" [@list3] *ngIf=\"active\" [routerLink]=\"['barcode/media']\"><button mat-fab><mat-icon>camera</mat-icon></button></div>\n     <div class=\"flex-item\"><button mat-fab (click)=\"onClick()\"><mat-icon>menu</mat-icon></button></div>\n   </div>\n</span>\n"

/***/ }),

/***/ "./src/app/shared/fab-menu/fab-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FabMenuComponent = /** @class */ (function () {
    function FabMenuComponent() {
        this.active = false;
        this.state = 'in';
    }
    FabMenuComponent.prototype.onClick = function () {
        this.active = !this.active;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FabMenuComponent.prototype, "isDarkTheme", void 0);
    FabMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fab-menu',
            template: __webpack_require__("./src/app/shared/fab-menu/fab-menu.component.html"),
            styles: [],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* trigger */])('list1', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                        opacity: 1,
                        transform: 'translateY(0px)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(400, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0,
                                transform: 'translateY(-100px)',
                                offset: 0,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0.5,
                                transform: 'translateY(-50px)',
                                offset: 0.3,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 1,
                                transform: 'translateY(-20px)',
                                offset: 0.8,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 1,
                                transform: 'translateY(0px)',
                                offset: 1,
                            }),
                        ]))]),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* trigger */])('list2', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                        opacity: 1,
                        transform: 'translateY(0px)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(700, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0,
                                transform: 'translateY(-100px)',
                                offset: 0,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0.5,
                                transform: 'translateY(-50px)',
                                offset: 0.3,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 1,
                                transform: 'translateY(-20px)',
                                offset: 0.8,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 1,
                                transform: 'translateY(0px)',
                                offset: 1,
                            }),
                        ]))]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(400), Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0.5,
                                transform: 'translateX(50px)',
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(500), Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0,
                                transform: 'translateX(100px)',
                            }),
                        ])
                    ]),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* trigger */])('list3', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                        opacity: 1,
                        transform: 'translateY(0px)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0,
                                transform: 'translateY(-100px)',
                                offset: 0,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0.5,
                                transform: 'translateY(-50px)',
                                offset: 0.3,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 1,
                                transform: 'translateY(-20px)',
                                offset: 0.8,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 1,
                                transform: 'translateY(0px)',
                                offset: 1,
                            }),
                        ]))]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(600), Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0.5,
                                transform: 'translateX(50px)',
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(700), Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({
                                opacity: 0,
                                transform: 'translateX(100px)',
                            }),
                        ])
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], FabMenuComponent);
    return FabMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav #sidenav mode=\"side\">\n  <div class=\"flex-container\"\n       fxLayout=\"column\">\n    <button class=\"flex-item\" mat-button\n            [routerLinkActive]=\"['active']\"\n            [routerLink]=\"['barcode']\">Homepage\n    </button>\n    <div class=\"flex-item\">\n      <hr>\n    </div>\n    <button class=\"flex-item\" mat-button\n            [routerLinkActive]=\"['active']\"\n            [routerLink]=\"['barcode/media']\">Media Stream\n    </button>\n    <div class=\"flex-item\">\n      <hr>\n    </div>\n    <button class=\"flex-item\" mat-button\n            [routerLinkActive]=\"['active']\"\n            [routerLink]=\"['barcode/field']\">Input File\n    </button>\n  </div>\n</mat-sidenav>\n\n"

/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("./src/app/shared/sidenav/sidenav.component.html"),
            styles: [],
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/shared/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/shared/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "title", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("./src/app/shared/toolbar/toolbar.component.html"),
            styles: [],
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .then(function (r) { return 'Will add Service Worker here'; })
    .catch(function (e) { return console.error(e); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map