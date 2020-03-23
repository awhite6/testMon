import { Component, NgModule } from '@angular/core';

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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [FooterComponent],
                    imports: [],
                    exports: [FooterComponent]
                },] }
    ];
    return TestLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: test-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FooterComponent, TestLibModule };
//# sourceMappingURL=test-lib.js.map
