(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/material'), require('angular-formio')) :
    typeof define === 'function' && define.amd ? define('form-renderer', ['exports', '@angular/core', '@angular/platform-browser', '@angular/material', 'angular-formio'], factory) :
    (global = global || self, factory(global['form-renderer'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.material, global.angularFormio));
}(this, (function (exports, core, platformBrowser, material, angularFormio) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/form-render/form-render.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormRenderComponent = /** @class */ (function () {
        function FormRenderComponent() {
            this.frm = null;
        }
        /**
         * @return {?}
         */
        FormRenderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.formJson) {
                this.formSrc = JSON.parse(this.formJson);
                console.log(this.formJson);
            }
        };
        /**
         * @param {?} form
         * @return {?}
         */
        FormRenderComponent.prototype.onFormLoad = /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
        };
        FormRenderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-renderer-form-render',
                        template: "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>\r\n<link rel='stylesheet' href='https://unpkg.com/formiojs@latest/dist/formio.full.min.css'>\r\n<script src='https://unpkg.com/formiojs@latest/dist/formio.full.min.js'></script>\r\n\r\n<section>\r\n  <mat-card-title>Display Saved Form</mat-card-title>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div *ngIf=\"formSrc\">\r\n        <formio [form]=\"formSrc\" (formLoad)=\"onFormLoad($event)\" [submission]='{\r\n  \"data\": {\r\n    \"firstName\": \"Joe\",\r\n    \"lastName\": \"Smith\",\r\n    \"email\": \"joe@example.com\"\r\n  }\r\n}'></formio>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n\r\n",
                        styles: [""]
                    }] }
        ];
        return FormRenderComponent;
    }());
    if (false) {
        /** @type {?} */
        FormRenderComponent.prototype.formSrc;
        /** @type {?} */
        FormRenderComponent.prototype.formJson;
        /** @type {?} */
        FormRenderComponent.prototype.frm;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/form-renderer.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormRendererModule = /** @class */ (function () {
        function FormRendererModule() {
        }
        FormRendererModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            FormRenderComponent,
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            material.MatCardModule,
                            angularFormio.FormioModule,
                        ],
                        exports: [FormRenderComponent]
                    },] }
        ];
        return FormRendererModule;
    }());

    exports.FormRendererModule = FormRendererModule;
    exports.ɵa = FormRenderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=form-renderer.umd.js.map
