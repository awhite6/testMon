(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@test/lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.test = global.test || {}, global.test.lib = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/footer/footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        FooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-footer',
                        template: "<p>footer works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/test-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibModule = /** @class */ (function () {
        function TestLibModule() {
        }
        TestLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FooterComponent],
                        imports: [],
                        exports: [FooterComponent]
                    },] }
        ];
        return TestLibModule;
    }());

    exports.FooterComponent = FooterComponent;
    exports.TestLibModule = TestLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-lib.umd.js.map
