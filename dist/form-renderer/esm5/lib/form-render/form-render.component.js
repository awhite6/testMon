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
        { type: Component, args: [{
                    selector: 'form-renderer-form-render',
                    template: "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>\r\n<link rel='stylesheet' href='https://unpkg.com/formiojs@latest/dist/formio.full.min.css'>\r\n<script src='https://unpkg.com/formiojs@latest/dist/formio.full.min.js'></script>\r\n\r\n<section>\r\n  <mat-card-title>Display Saved Form</mat-card-title>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div *ngIf=\"formSrc\">\r\n        <formio [form]=\"formSrc\" (formLoad)=\"onFormLoad($event)\" [submission]='{\r\n  \"data\": {\r\n    \"firstName\": \"Joe\",\r\n    \"lastName\": \"Smith\",\r\n    \"email\": \"joe@example.com\"\r\n  }\r\n}'></formio>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1yZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLXJlbmRlci9mb3JtLXJlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRS9CO0lBQUE7UUFZTyxRQUFHLEdBQUcsSUFBSSxDQUFDO0lBYWxCLENBQUM7Ozs7SUFYRCxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO0lBQ1AsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBSTtJQUVmLENBQUM7O2dCQXZCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsOHVCQUEyQzs7aUJBRTVDOzs7MEJBR0EsS0FBSzsyQkFFTCxLQUFLOztJQWdCTiwwQkFBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLG1CQUFtQjs7O0lBRWhDLHNDQUNjOztJQUNkLHVDQUNjOztJQUVkLGtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi4vZm9ybSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tcmVuZGVyZXItZm9ybS1yZW5kZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLXJlbmRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1yZW5kZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtUmVuZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbkBJbnB1dCgpXHJcbmZvcm1TcmM6IEZvcm07XHJcbkBJbnB1dCgpXHJcbmZvcm1Kc29uOiBhbnk7XHJcblxyXG5wdWJsaWMgZnJtID0gbnVsbDtcclxuXHJcbm5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybUpzb24pIHtcclxuICAgICAgICB0aGlzLmZvcm1TcmMgPSBKU09OLnBhcnNlKHRoaXMuZm9ybUpzb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUpzb24pO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbm9uRm9ybUxvYWQoZm9ybSkge1xyXG5cclxufVxyXG5cclxufVxyXG4iXX0=