/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-render/form-render.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Form } from '../form';
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
FormRenderComponent.propDecorators = {
    formSrc: [{ type: Input }],
    formJson: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormRenderComponent.prototype.formSrc;
    /** @type {?} */
    FormRenderComponent.prototype.formJson;
    /** @type {?} */
    FormRenderComponent.prototype.frm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1yZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLXJlbmRlci9mb3JtLXJlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTy9CLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFZTyxRQUFHLEdBQUcsSUFBSSxDQUFDO0lBYWxCLENBQUM7Ozs7SUFYRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtJQUNQLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUk7SUFFZixDQUFDOzs7WUF2QkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLDh1QkFBMkM7O2FBRTVDOzs7c0JBR0EsS0FBSzt1QkFFTCxLQUFLOzs7O0lBRk4sc0NBQ2M7O0lBQ2QsdUNBQ2M7O0lBRWQsa0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuLi9mb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1yZW5kZXJlci1mb3JtLXJlbmRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tcmVuZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mb3JtLXJlbmRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1SZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuQElucHV0KClcclxuZm9ybVNyYzogRm9ybTtcclxuQElucHV0KClcclxuZm9ybUpzb246IGFueTtcclxuXHJcbnB1YmxpYyBmcm0gPSBudWxsO1xyXG5cclxubmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtSnNvbikge1xyXG4gICAgICAgIHRoaXMuZm9ybVNyYyA9IEpTT04ucGFyc2UodGhpcy5mb3JtSnNvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtSnNvbik7XHJcbiAgICAgIH1cclxufVxyXG5cclxub25Gb3JtTG9hZChmb3JtKSB7XHJcblxyXG59XHJcblxyXG59XHJcbiJdfQ==