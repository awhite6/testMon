import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component'

var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TestComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TestComponent
                    ],
                    providers: [
                    ],
                    entryComponents: [
                        TestComponent
                    ]
                },] },
    ];
    return TestModule;
}());
export { TestModule };
