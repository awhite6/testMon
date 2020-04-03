/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-render/form-render.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1yZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLXJlbmRlci9mb3JtLXJlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUd6RDtJQUFBO1FBU08sUUFBRyxHQUFHLElBQUksQ0FBQztJQWFsQixDQUFDOzs7O0lBWEQsc0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtJQUNQLENBQUM7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLElBQUk7SUFFZixDQUFDOztnQkFwQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLDh1QkFBMkM7O2lCQUU1Qzs7SUFrQkQsMEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSxtQkFBbUI7OztJQUVoQyxzQ0FBYzs7SUFDZCx1Q0FBYzs7SUFDZCxrQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uL2Zvcm0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLXJlbmRlcmVyLWZvcm0tcmVuZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1yZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tcmVuZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVJlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5mb3JtU3JjOiBGb3JtO1xyXG5mb3JtSnNvbjogYW55O1xyXG5wdWJsaWMgZnJtID0gbnVsbDtcclxuXHJcbm5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybUpzb24pIHtcclxuICAgICAgICB0aGlzLmZvcm1TcmMgPSBKU09OLnBhcnNlKHRoaXMuZm9ybUpzb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUpzb24pO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbm9uRm9ybUxvYWQoZm9ybSkge1xyXG5cclxufVxyXG5cclxufVxyXG4iXX0=