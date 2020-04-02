/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-render/form-render.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Form } from '../form';
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
        { type: Component, args: [{
                    selector: 'form-renderer-form-render',
                    template: "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>\n<link rel='stylesheet' href='https://unpkg.com/formiojs@latest/dist/formio.full.min.css'>\n<script src='https://unpkg.com/formiojs@latest/dist/formio.full.min.js'></script>\n\n<section>\n  <mat-card-title>Display Saved Form</mat-card-title>\n  <mat-card>\n    <mat-card-content>\n      <div *ngIf=\"formSrc\">\n        <formio [form]=\"formSrc\" (formLoad)=\"onFormLoad($event)\" [submission]='{\n  \"data\": {\n    \"firstName\": \"Joe\",\n    \"lastName\": \"Smith\",\n    \"email\": \"joe@example.com\"\n  }\n}'></formio>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</section>\n\n",
                    styles: [""]
                }] }
    ];
    FormRenderComponent.propDecorators = {
        formSrc: [{ type: Input }],
        formJson: [{ type: Input }]
    };
    return FormRenderComponent;
}());
export { FormRenderComponent };
if (false) {
    /** @type {?} */
    FormRenderComponent.prototype.formSrc;
    /** @type {?} */
    FormRenderComponent.prototype.formJson;
    /** @type {?} */
    FormRenderComponent.prototype.frm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1yZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLXJlbmRlci9mb3JtLXJlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRS9CO0lBQUE7UUFTTyxRQUFHLEdBQUcsSUFBSSxDQUFDO0lBWWxCLENBQUM7Ozs7SUFWRCxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBSTtJQUVmLENBQUM7O2dCQW5CQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsb3NCQUEyQzs7aUJBRTVDOzs7MEJBR0EsS0FBSzsyQkFDTCxLQUFLOztJQWFOLDBCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksbUJBQW1COzs7SUFFaEMsc0NBQXVCOztJQUN2Qix1Q0FBMEI7O0lBQzFCLGtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uL2Zvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLXJlbmRlcmVyLWZvcm0tcmVuZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tcmVuZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1yZW5kZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1SZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5ASW5wdXQoKSBmb3JtU3JjOiBGb3JtO1xuQElucHV0KCkgZm9ybUpzb246IHN0cmluZztcbnB1YmxpYyBmcm0gPSBudWxsO1xuXG5uZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtSnNvbikge1xuICAgICAgICB0aGlzLmZvcm1TcmMgPSBKU09OLnBhcnNlKHRoaXMuZm9ybUpzb24pO1xuICAgIH1cbn1cblxub25Gb3JtTG9hZChmb3JtKSB7XG5cbn1cblxufVxuIl19