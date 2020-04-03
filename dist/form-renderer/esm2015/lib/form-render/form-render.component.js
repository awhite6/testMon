/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-render/form-render.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class FormRenderComponent {
    constructor() {
        this.frm = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.formJson) {
            this.formSrc = JSON.parse(this.formJson);
            console.log(this.formJson);
        }
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onFormLoad(form) {
    }
}
FormRenderComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-renderer-form-render',
                template: "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>\r\n<link rel='stylesheet' href='https://unpkg.com/formiojs@latest/dist/formio.full.min.css'>\r\n<script src='https://unpkg.com/formiojs@latest/dist/formio.full.min.js'></script>\r\n\r\n<section>\r\n  <mat-card-title>Display Saved Form</mat-card-title>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div *ngIf=\"formSrc\">\r\n        <formio [form]=\"formSrc\" (formLoad)=\"onFormLoad($event)\" [submission]='{\r\n  \"data\": {\r\n    \"firstName\": \"Joe\",\r\n    \"lastName\": \"Smith\",\r\n    \"email\": \"joe@example.com\"\r\n  }\r\n}'></formio>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n\r\n",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    FormRenderComponent.prototype.formSrc;
    /** @type {?} */
    FormRenderComponent.prototype.formJson;
    /** @type {?} */
    FormRenderComponent.prototype.frm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1yZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLXJlbmRlci9mb3JtLXJlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQVF6RCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBU08sUUFBRyxHQUFHLElBQUksQ0FBQztJQWFsQixDQUFDOzs7O0lBWEQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7SUFDUCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFJO0lBRWYsQ0FBQzs7O1lBcEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyw4dUJBQTJDOzthQUU1Qzs7OztJQUdELHNDQUFjOztJQUNkLHVDQUFjOztJQUNkLGtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi4vZm9ybSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tcmVuZGVyZXItZm9ybS1yZW5kZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLXJlbmRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1yZW5kZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtUmVuZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbmZvcm1TcmM6IEZvcm07XHJcbmZvcm1Kc29uOiBhbnk7XHJcbnB1YmxpYyBmcm0gPSBudWxsO1xyXG5cclxubmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtSnNvbikge1xyXG4gICAgICAgIHRoaXMuZm9ybVNyYyA9IEpTT04ucGFyc2UodGhpcy5mb3JtSnNvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtSnNvbik7XHJcbiAgICAgIH1cclxufVxyXG5cclxub25Gb3JtTG9hZChmb3JtKSB7XHJcblxyXG59XHJcblxyXG59XHJcbiJdfQ==