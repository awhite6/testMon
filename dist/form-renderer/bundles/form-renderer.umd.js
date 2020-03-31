(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('form-renderer', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['form-renderer'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
                        declarations: [],
                        imports: [],
                        exports: []
                    },] }
        ];
        return FormRendererModule;
    }());

    exports.FormRendererModule = FormRendererModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=form-renderer.umd.js.map
