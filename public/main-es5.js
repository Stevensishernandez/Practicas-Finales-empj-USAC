function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/components/layout/content-layout/content-layout.component */
    "./src/app/shared/components/layout/content-layout/content-layout.component.ts"); // Layout
    // Guards
    // import { AdminGuard } from './core/guards/auth/admin.guard';
    // import { UserGuard } from './core/guards/auth/user.guard';


    var routes = [{
      path: 'admin',
      component: _shared_components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_2__["ContentLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-admin-pages-module */
        "pages-admin-pages-module").then(__webpack_require__.bind(null,
        /*! ./pages/admin/pages.module */
        "./src/app/pages/admin/pages.module.ts")).then(function (m) {
          return m.PagesModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | account-account-module */
        [__webpack_require__.e("default~account-account-module~branchs-components-branches-module~business-components-business-modul~5755f5df"), __webpack_require__.e("common"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null,
        /*! ./account/account.module */
        "./src/app/account/account.module.ts")).then(function (m) {
          return m.AccountModule;
        });
      }
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Dashboard';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var primeng_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/editor */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-editor.js");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angular-dual-listbox */
    "./node_modules/angular-dual-listbox/__ivy_ngcc__/fesm2015/angular-dual-listbox.js"); // Firebase
    // Libs
    // Config


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[angular_dual_listbox__WEBPACK_IMPORTED_MODULE_17__["AngularDualListBoxModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), primeng_editor__WEBPACK_IMPORTED_MODULE_14__["EditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__["NgxDropzoneModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [angular_dual_listbox__WEBPACK_IMPORTED_MODULE_17__["AngularDualListBoxModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], primeng_editor__WEBPACK_IMPORTED_MODULE_14__["EditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__["NgxDropzoneModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [angular_dual_listbox__WEBPACK_IMPORTED_MODULE_17__["AngularDualListBoxModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), primeng_editor__WEBPACK_IMPORTED_MODULE_14__["EditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__["NgxDropzoneModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.??fac = function BreadcrumbComponent_Factory(t) {
      return new (t || BreadcrumbComponent)();
    };

    BreadcrumbComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "space-div"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: [".ProfileCard-realName[_ngcontent-%COMP%]   .realname[_ngcontent-%COMP%] {\n  color: #949598 !important;\n}\n\n.offcanvas-bookmark.page-wrapper[_ngcontent-%COMP%]   .page-body-wrapper[_ngcontent-%COMP%]   .page-body[_ngcontent-%COMP%]   .bookmark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.bookmark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #313131;\n}\n\ni.fa.fa-star-o.f-18.mt-1.starred[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.space-div[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXNhcnJvbGxvL0Rlc2t0b3AvbWFya2V0aW4vbWFya2V0aW4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtBQ0M3Qjs7QURFQTtFQUNJLHFCQUFxQjtBQ0N6Qjs7QURFQTtFQUNJLGNBQWU7QUNDbkI7O0FERUE7RUFDSSxhQUFhO0FDQ2pCOztBREVBO0VBQ0ksb0JBQW9CO0FDQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlByb2ZpbGVDYXJkLXJlYWxOYW1lIC5yZWFsbmFtZSB7XHJcbiAgICBjb2xvcjogIzk0OTU5OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub2ZmY2FudmFzLWJvb2ttYXJrLnBhZ2Utd3JhcHBlciAucGFnZS1ib2R5LXdyYXBwZXIgLnBhZ2UtYm9keSAuYm9va21hcmsgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5ib29rbWFyayB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiAjMzEzMTMxIDtcclxufVxyXG5cclxuaS5mYS5mYS1zdGFyLW8uZi0xOC5tdC0xLnN0YXJyZWQge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLnNwYWNlLWRpdntcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsIi5Qcm9maWxlQ2FyZC1yZWFsTmFtZSAucmVhbG5hbWUge1xuICBjb2xvcjogIzk0OTU5OCAhaW1wb3J0YW50O1xufVxuXG4ub2ZmY2FudmFzLWJvb2ttYXJrLnBhZ2Utd3JhcHBlciAucGFnZS1ib2R5LXdyYXBwZXIgLnBhZ2UtYm9keSAuYm9va21hcmsgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJvb2ttYXJrIHVsIGxpIGEge1xuICBjb2xvcjogIzMxMzEzMTtcbn1cblxuaS5mYS5mYS1zdGFyLW8uZi0xOC5tdC0xLnN0YXJyZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3BhY2UtZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './breadcrumb.component.html',
          styleUrls: ['./breadcrumb.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/feather-icons/feather-icons.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FeatherIconsComponent */

  /***/
  function srcAppSharedComponentsFeatherIconsFeatherIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatherIconsComponent", function () {
      return FeatherIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! feather-icons */
    "./node_modules/feather-icons/dist/feather.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_1__);

    var FeatherIconsComponent = /*#__PURE__*/function () {
      function FeatherIconsComponent() {
        _classCallCheck(this, FeatherIconsComponent);
      }

      _createClass(FeatherIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function () {
            feather_icons__WEBPACK_IMPORTED_MODULE_1__["replace"]();
          });
        }
      }]);

      return FeatherIconsComponent;
    }();

    FeatherIconsComponent.??fac = function FeatherIconsComponent_Factory(t) {
      return new (t || FeatherIconsComponent)();
    };

    FeatherIconsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FeatherIconsComponent,
      selectors: [["app-feather-icons"]],
      inputs: {
        icon: "icon"
      },
      decls: 1,
      vars: 1,
      template: function FeatherIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-feather", ctx.icon);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZlYXRoZXItaWNvbnMvZmVhdGhlci1pY29ucy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FeatherIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feather-icons',
          templateUrl: './feather-icons.component.html',
          styleUrls: ['./feather-icons.component.scss']
        }]
      }], function () {
        return [];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['icon']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-6", "footer-copyright"], [1, "mb-0"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Copyright 2020 \xA9 System Todos los Derechos Reservados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/nav.service */
    "./src/app/shared/services/nav.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Services
    // import { AuthService } from 'src/app/core/services/auth/auth.service';
    // Libs


    var _c0 = function _c0(a0) {
      return {
        "open": a0
      };
    };

    var body = document.getElementsByTagName("body")[0];

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(navServices, router, // private authService: AuthService,
      cookieService) {
        _classCallCheck(this, HeaderComponent);

        this.navServices = navServices;
        this.router = router;
        this.cookieService = cookieService;
        this.openNav = false;
        this.right_sidebar = false;
        this.rightSidebarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.navServices.items.subscribe(function (menuItems) {
            _this.items = menuItems;
          });
        }
      }, {
        key: "collapseSidebar",
        value: function collapseSidebar() {
          this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
        }
      }, {
        key: "logout",
        value: function logout() {}
      }, {
        key: "goNotifications",
        value: function goNotifications() {
          this.router.navigate(['./admin/notifications']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.??fac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]));
    };

    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        rightSidebarEvent: "rightSidebarEvent"
      },
      decls: 7,
      vars: 3,
      consts: [["id", "page-main-header", 1, "page-main-header", 3, "ngClass"], [1, "main-header-right", "row"], [1, "main-header-left", "d-lg-none"], [1, "mobile-sidebar"], [1, "nav-right", "col"], [1, "btn", "boton-red"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "CERRAR SESI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, ctx.navServices.collapseSidebar));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".boton[_ngcontent-%COMP%] {\n  background: #414042;\n  height: 35px;\n  width: 200px;\n  color: white;\n  border-radius: 8px;\n  font-family: Roboto;\n  font-size: 13px;\n}\n\n.boton-red[_ngcontent-%COMP%] {\n  background: #C90E2D;\n  height: 35px;\n  width: 200px;\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXNhcnJvbGxvL0Rlc2t0b3AvbWFya2V0aW4vbWFya2V0aW4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQ0NuQjs7QURFQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQ0N2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b257XG4gICAgYmFja2dyb3VuZDogIzQxNDA0MjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5ib3Rvbi1yZWR7XG4gICAgYmFja2dyb3VuZDogI0M5MEUyRDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59IiwiLmJvdG9uIHtcbiAgYmFja2dyb3VuZDogIzQxNDA0MjtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5ib3Rvbi1yZWQge1xuICBiYWNrZ3JvdW5kOiAjQzkwRTJEO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }];
      }, {
        rightSidebarEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/layout/content-layout/content-layout.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/components/layout/content-layout/content-layout.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ContentLayoutComponent */

  /***/
  function srcAppSharedComponentsLayoutContentLayoutContentLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function () {
      return ContentLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/nav.service */
    "./src/app/shared/services/nav.service.ts");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! feather-icons */
    "./node_modules/feather-icons/dist/feather.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/customizer.service */
    "./src/app/shared/services/customizer.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../breadcrumb/breadcrumb.component */
    "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContentLayoutComponent = /*#__PURE__*/function () {
      function ContentLayoutComponent(navServices, customizer) {
        _classCallCheck(this, ContentLayoutComponent);

        this.navServices = navServices;
        this.customizer = customizer;
      }

      _createClass(ContentLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          setTimeout(function () {
            feather_icons__WEBPACK_IMPORTED_MODULE_2__["replace"]();
          });
        }
      }]);

      return ContentLayoutComponent;
    }();

    ContentLayoutComponent.??fac = function ContentLayoutComponent_Factory(t) {
      return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"]));
    };

    ContentLayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContentLayoutComponent,
      selectors: [["app-content-layout"]],
      decls: 10,
      vars: 6,
      consts: [[1, "dark-body-only"], ["id", "canvas-bookmark", 1, "page-wrapper", 3, "ngClass"], [1, "page-body-wrapper", 3, "ngClass"], ["id", "pages-sidebar", 1, "page-sidebar", 3, "ngClass"], [1, "page-body"]],
      template: function ContentLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.customizer.data.settings.sidebar.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.customizer.data.settings.sidebar.body_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("open", ctx.navServices.collapseSidebar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.customizer.data.settings.sidebar_backround);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("sidebar-layout", ctx.customizer.data.settings.sidebar_setting);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9jb250ZW50LWxheW91dC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContentLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content-layout',
          templateUrl: './content-layout.component.html',
          styleUrls: ['./content-layout.component.scss']
        }]
      }], function () {
        return [{
          type: _services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]
        }, {
          type: _services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/nav.service */
    "./src/app/shared/services/nav.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Services
    // import { AuthService } from 'src/app/core/services/auth/auth.service';
    // Libs


    function SidebarComponent_li_4_a_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", menuItem_r3.badgeType, " ml-3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.badgeValue);
      }
    }

    function SidebarComponent_li_4_a_1_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 14);
      }
    }

    function SidebarComponent_li_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_li_4_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

          var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r12.toggletNavActive(menuItem_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_a_1_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_a_1_i_4_Template, 1, 0, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.children);
      }
    }

    function SidebarComponent_li_4_a_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", menuItem_r3.badgeType, " ml-3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.badgeValue);
      }
    }

    function SidebarComponent_li_4_a_2_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 14);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function SidebarComponent_li_4_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_a_2_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_a_2_i_4_Template, 1, 0, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", !menuItem_r3.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, menuItem_r3.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.children);
      }
    }

    function SidebarComponent_li_4_a_3_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", menuItem_r3.badgeType, " ml-3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.badgeValue);
      }
    }

    function SidebarComponent_li_4_a_3_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 14);
      }
    }

    function SidebarComponent_li_4_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_a_3_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_a_3_i_4_Template, 1, 0, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", !menuItem_r3.type ? null : menuItem_r3.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.children);
      }
    }

    function SidebarComponent_li_4_a_4_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", menuItem_r3.badgeType, " ml-3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.badgeValue);
      }
    }

    function SidebarComponent_li_4_a_4_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 14);
      }
    }

    function SidebarComponent_li_4_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_a_4_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_a_4_i_4_Template, 1, 0, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", !menuItem_r3.type ? null : menuItem_r3.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](menuItem_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.children);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](childrenItem_r29.badgeValue);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_1_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 27);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_li_4_ul_5_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r40);

          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r38.toggletNavActive(childrenItem_r29);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_a_1_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_ul_5_li_1_a_1_i_4_Template, 1, 0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", childrenItem_r29.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.children);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](childrenItem_r29.badgeValue);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_2_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 27);
      }
    }

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    function SidebarComponent_li_4_ul_5_li_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_a_2_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_ul_5_li_1_a_2_i_4_Template, 1, 0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", !childrenItem_r29.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, childrenItem_r29.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", childrenItem_r29.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.children);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_3_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](childrenItem_r29.badgeValue);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_3_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 27);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_a_3_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_ul_5_li_1_a_3_i_4_Template, 1, 0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", !childrenItem_r29.type ? null : childrenItem_r29.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", childrenItem_r29.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.children);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_4_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](childrenItem_r29.badgeValue);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_4_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 27);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_a_4_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_ul_5_li_1_a_4_i_4_Template, 1, 0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", !childrenItem_r29.type ? null : childrenItem_r29.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", childrenItem_r29.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.badgeType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.children);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", childrenSubItem_r55.badgeType, " pull-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](childrenSubItem_r55.badgeValue);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_1_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", !childrenSubItem_r55.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, childrenSubItem_r55.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", childrenSubItem_r55.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenSubItem_r55.badgeType);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", childrenSubItem_r55.badgeType, " pull-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](childrenSubItem_r55.badgeValue);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_2_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", !childrenSubItem_r55.type ? null : childrenSubItem_r55.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", childrenSubItem_r55.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenSubItem_r55.badgeType);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_3_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-", childrenSubItem_r55.badgeType, " pull-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](childrenSubItem_r55.badgeValue);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_3_span_3_Template, 2, 4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", !childrenSubItem_r55.type ? null : childrenSubItem_r55.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", childrenSubItem_r55.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenSubItem_r55.badgeType);
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_1_Template, 4, 7, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_2_Template, 4, 5, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_a_3_Template, 4, 3, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenSubItem_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenSubItem_r55.type === "link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenSubItem_r55.type === "extLink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenSubItem_r55.type === "extTabLink");
      }
    }

    function SidebarComponent_li_4_ul_5_li_1_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_4_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", childrenItem_r29.children);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        active: a0
      };
    };

    function SidebarComponent_li_4_ul_5_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_4_ul_5_li_1_a_1_Template, 5, 3, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_li_4_ul_5_li_1_a_2_Template, 5, 8, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_ul_5_li_1_a_3_Template, 5, 6, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_ul_5_li_1_a_4_Template, 5, 4, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, SidebarComponent_li_4_ul_5_li_1_ul_5_Template, 2, 1, "ul", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var childrenItem_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c2, childrenItem_r29.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.type === "sub");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.type === "link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.type === "extLink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.type === "extTabLink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", childrenItem_r29.children);
      }
    }

    var _c3 = function _c3(a0, a1) {
      return {
        "menu-open": a0,
        "menu-close": a1
      };
    };

    function SidebarComponent_li_4_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_4_ul_5_li_1_Template, 6, 8, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](2, _c3, menuItem_r3.active, !menuItem_r3.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", menuItem_r3.children);
      }
    }

    function SidebarComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_li_4_a_1_Template, 5, 3, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_li_4_a_2_Template, 5, 6, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_li_4_a_3_Template, 5, 4, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_a_4_Template, 5, 4, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, SidebarComponent_li_4_ul_5_Template, 2, 5, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c2, menuItem_r3.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.type === "sub");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.type === "link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.type === "extLink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.type === "extTabLink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", menuItem_r3.children);
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(router, navServices, // private authService: AuthService, 
      cookieService) {
        var _this2 = this;

        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.navServices = navServices;
        this.cookieService = cookieService;
        this.userName = this.cookieService.get('name');
        this.roleName = this.cookieService.get('role');
        var roleType = this.cookieService.get('roleType');
        this.getMenus('2');
        this.navServices.items.subscribe(function (menuItems) {
          _this2.menuItems = _this2.menuList;

          _this2.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              menuItems.filter(function (items) {
                if (items.path === event.url) _this2.setNavActive(items);
                if (!items.children) return false;
                items.children.filter(function (subItems) {
                  if (subItems.path === event.url) _this2.setNavActive(subItems);
                  if (!subItems.children) return false;
                  subItems.children.filter(function (subSubItems) {
                    if (subSubItems.path === event.url) _this2.setNavActive(subSubItems);
                  });
                });
              });
            }
          });
        });
      }

      _createClass(SidebarComponent, [{
        key: "getMenus",
        value: function getMenus(role) {
          if (role === '2') {
            this.menuList = [{
              path: '/admin',
              title: 'INICIO',
              type: 'link'
            }, {
              path: './users',
              title: 'USUARIOS',
              type: 'link'
            }, {
              path: './business',
              title: 'GESTOR DE EMPRESAS',
              type: 'link'
            }, {
              path: './branchs',
              title: 'GESTOR DE SUCURSALES',
              type: 'link'
            }, {
              path: './proyects',
              title: 'GESTOR DE PROYECTOS',
              type: 'link'
            }, {
              path: './proyects-assign',
              title: 'ASIGNACI??N DE PROYECTOS',
              type: 'link'
            }, {
              path: '',
              title: 'CERRAR SESI??N',
              type: 'link'
            }];
          }
        }
      }, {
        key: "logout",
        value: function logout() {} // Active Nave state

      }, {
        key: "setNavActive",
        value: function setNavActive(item) {
          this.menuItems.filter(function (menuItem) {
            if (menuItem != item) menuItem.active = false;
            if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

            if (menuItem.children) {
              menuItem.children.filter(function (submenuItems) {
                if (submenuItems.children && submenuItems.children.includes(item)) {
                  menuItem.active = true;
                  submenuItems.active = true;
                }
              });
            }
          });
        } // Click Toggle menu

      }, {
        key: "toggletNavActive",
        value: function toggletNavActive(item) {
          var _this3 = this;

          if (!item.active) {
            this.menuItems.forEach(function (a) {
              if (_this3.menuItems.includes(item)) a.active = false;
              if (!a.children) return false;
              a.children.forEach(function (b) {
                if (a.children.includes(item)) {
                  b.active = false;
                }
              });
            });
          }

          item.active = !item.active;
        } //Fileupload

      }, {
        key: "readUrl",
        value: function readUrl(event) {
          var _this4 = this;

          if (event.target.files.length === 0) return; //Image upload validation

          var mimeType = event.target.files[0].type;

          if (mimeType.match(/image\/*/) == null) {
            return;
          } // Image upload


          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);

          reader.onload = function (_event) {
            _this4.url = reader.result;
          };
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.??fac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]));
    };

    SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 5,
      vars: 1,
      consts: [[1, "sidebar", "custom-scrollbar"], [1, "text-center"], ["src", "assets/img/marketin.png", "alt", "", 1, "logo_dash"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["href", "javascript:void(0)", "class", "sidebar-header", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-header", 3, "routerLink", 4, "ngIf"], ["class", "sidebar-header", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "sidebar-header", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", 4, "ngIf"], ["href", "javascript:void(0)", 1, "sidebar-header", 3, "click"], [3, "class", 4, "ngIf"], ["class", "fa fa-angle-right pull-right", 4, "ngIf"], [1, "fa", "fa-angle-right", "pull-right"], ["routerLinkActive", "active", 1, "sidebar-header", 3, "routerLink"], [1, "sidebar-header", 3, "href"], ["target", "_blank", 1, "sidebar-header", 3, "href"], [1, "sidebar-submenu", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-circle"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SidebarComponent_li_4_Template, 6, 8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.menuItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".logout {\n  margin-top: 10%;\n}\n\n.logo_dash {\n  width: 135px;\n  z-index: 2;\n  margin-top: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXNhcnJvbGxvL0Rlc2t0b3AvbWFya2V0aW4vbWFya2V0aW4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7QUNDbkI7O0FERUE7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7QUNDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0IHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5sb2dvX2Rhc2h7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufSIsIi5sb2dvdXQge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5sb2dvX2Rhc2gge1xuICB3aWR0aDogMTM1cHg7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/config/config.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/config/config.ts ***!
    \*****************************************/

  /*! exports provided: ConfigDB */

  /***/
  function srcAppSharedConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigDB", function () {
      return ConfigDB;
    });

    var ConfigDB = function ConfigDB() {
      _classCallCheck(this, ConfigDB);
    };

    ConfigDB.data = {
      "settings": {
        "layout_type": "ltr",
        "sidebar": {
          "type": "default",
          "body_type": "default"
        },
        "sidebar_setting": "default-sidebar",
        "sidebar_backround": "#fff"
      },
      "color": {
        "layout_version": "light",
        "color": "color-1",
        "primary_color": "#4466f2",
        "secondary_color": "#1ea6ec",
        "mix_layout": "default"
      },
      "router_animation": "fadeIn"
    };
    /***/
  },

  /***/
  "./src/app/shared/directives/fullscreen.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/directives/fullscreen.directive.ts ***!
    \***********************************************************/

  /*! exports provided: ToggleFullscreenDirective */

  /***/
  function srcAppSharedDirectivesFullscreenDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function () {
      return ToggleFullscreenDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var screenfull = __webpack_require__(
    /*! screenfull */
    "./node_modules/screenfull/dist/screenfull.js");

    var ToggleFullscreenDirective = /*#__PURE__*/function () {
      function ToggleFullscreenDirective() {
        _classCallCheck(this, ToggleFullscreenDirective);
      }

      _createClass(ToggleFullscreenDirective, [{
        key: "onClick",
        value: function onClick() {
          if (screenfull.enabled) {
            screenfull.toggle();
          }
        }
      }]);

      return ToggleFullscreenDirective;
    }();

    ToggleFullscreenDirective.??fac = function ToggleFullscreenDirective_Factory(t) {
      return new (t || ToggleFullscreenDirective)();
    };

    ToggleFullscreenDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
      type: ToggleFullscreenDirective,
      selectors: [["", "toggleFullscreen", ""]],
      hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToggleFullscreenDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[toggleFullscreen]'
        }]
      }], null, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/customizer.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/customizer.service.ts ***!
    \*******************************************************/

  /*! exports provided: CustomizerService */

  /***/
  function srcAppSharedServicesCustomizerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomizerService", function () {
      return CustomizerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/config/config */
    "./src/app/shared/config/config.ts");

    var CustomizerService = /*#__PURE__*/function () {
      function CustomizerService() {
        _classCallCheck(this, CustomizerService);

        // Configration Layout
        this.data = _shared_config_config__WEBPACK_IMPORTED_MODULE_1__["ConfigDB"].data;
        document.body.className = this.data.color.mix_layout;
        document.body.setAttribute("main-theme-layout", this.data.settings.layout_type);
        document.getElementsByTagName('html')[0].setAttribute('dir', this.data.settings.layout_type);
        var color = this.data.color.color;
        var layoutVersion = this.data.color.layout_version;

        if (color) {
          this.createStyle(color);
          if (layoutVersion) document.body.className = layoutVersion;
        }
      } // Create style sheet append in head


      _createClass(CustomizerService, [{
        key: "createStyle",
        value: function createStyle(color) {
          var head = document.head;
          var link = document.createElement("link");
          link.type = "text/css";
          link.rel = "stylesheet";
          link.href = window.location.origin + "assets/css/" + color + ".css";
          head.appendChild(link);
        }
      }]);

      return CustomizerService;
    }();

    CustomizerService.??fac = function CustomizerService_Factory(t) {
      return new (t || CustomizerService)();
    };

    CustomizerService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: CustomizerService,
      factory: CustomizerService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomizerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/nav.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/services/nav.service.ts ***!
    \************************************************/

  /*! exports provided: NavService */

  /***/
  function srcAppSharedServicesNavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavService", function () {
      return NavService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js"); // Libs


    var NavService = /*#__PURE__*/function () {
      function NavService(cookieService) {
        _classCallCheck(this, NavService);

        this.cookieService = cookieService;
        this.collapseSidebar = false;
        this.MENUITEMS = [{
          path: '/root',
          title: 'Inicio',
          icon: 'home',
          type: 'link'
        }, {
          path: './users',
          title: 'Usuarios',
          icon: 'users',
          type: 'link'
        }];
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.MENUITEMS);
        this.onResize();

        if (this.screenWidth < 991) {
          this.collapseSidebar = true;
        }
      } // Windows width


      _createClass(NavService, [{
        key: "onResize",
        value: function onResize(event) {
          this.screenWidth = window.innerWidth;
        }
      }]);

      return NavService;
    }();

    NavService.??fac = function NavService_Factory(t) {
      return new (t || NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
    };

    NavService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: NavService,
      factory: NavService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/layout/content-layout/content-layout.component */
    "./src/app/shared/components/layout/content-layout/content-layout.component.ts");
    /* harmony import */


    var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/feather-icons/feather-icons.component */
    "./src/app/shared/components/feather-icons/feather-icons.component.ts");
    /* harmony import */


    var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/breadcrumb/breadcrumb.component */
    "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _services_nav_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/nav.service */
    "./src/app/shared/services/nav.service.ts");
    /* harmony import */


    var _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives/fullscreen.directive */
    "./src/app/shared/directives/fullscreen.directive.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js"); // services
    // Directives
    // Libs


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: SharedModule
    });
    SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_10__["NavService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, {
        declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__["ContentLayoutComponent"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__["FeatherIconsComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"], _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]],
        exports: [_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__["FeatherIconsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__["ContentLayoutComponent"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__["FeatherIconsComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"], _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]],
          exports: [_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_8__["FeatherIconsComponent"]],
          providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_10__["NavService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyB5RVsSA5mJUCFyt5J4_-o1UOxLtKArepA",
        authDomain: "marketin-ad2fa.firebaseapp.com",
        projectId: "marketin-ad2fa",
        storageBucket: "marketin-ad2fa.appspot.com",
        messagingSenderId: "510785601983",
        appId: "1:510785601983:web:d729b5883ba070ecea610a",
        measurementId: "G-85RM3YKCGJ"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/desarrollo/Desktop/marketin/marketin/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map