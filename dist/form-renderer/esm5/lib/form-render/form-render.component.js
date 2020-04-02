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
            console.log(this.formJson);
            this.formSrc = this.formJson;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1yZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLXJlbmRlci9mb3JtLXJlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRS9CO0lBQUE7UUFTTyxRQUFHLEdBQUcsSUFBSSxDQUFDO0lBYWxCLENBQUM7Ozs7SUFYRCxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEM7SUFDTCxDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxJQUFJO0lBRWYsQ0FBQzs7Z0JBcEJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw4dUJBQTJDOztpQkFFNUM7OzswQkFHQSxLQUFLOzJCQUNMLEtBQUs7O0lBY04sMEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSxtQkFBbUI7OztJQUVoQyxzQ0FBdUI7O0lBQ3ZCLHVDQUF1Qjs7SUFDdkIsa0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuLi9mb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1yZW5kZXJlci1mb3JtLXJlbmRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tcmVuZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mb3JtLXJlbmRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1SZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuQElucHV0KCkgZm9ybVNyYzogRm9ybTtcclxuQElucHV0KCkgZm9ybUpzb246IGFueTtcclxucHVibGljIGZybSA9IG51bGw7XHJcblxyXG5uZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1Kc29uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtSnNvbik7XHJcbiAgICAgICAgdGhpcy5mb3JtU3JjID0gdGhpcy5mb3JtSnNvbjtcclxuICAgIH1cclxufVxyXG5cclxub25Gb3JtTG9hZChmb3JtKSB7XHJcblxyXG59XHJcblxyXG59XHJcbiJdfQ==