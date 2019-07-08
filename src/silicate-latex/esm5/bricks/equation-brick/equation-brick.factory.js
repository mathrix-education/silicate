/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseBrickFactory, SilicateCoreModule } from '@mathrix/silicate-core';
import * as i0 from "@angular/core";
import * as i1 from "@mathrix/silicate-core";
var EquationBrickFactory = /** @class */ (function (_super) {
    tslib_1.__extends(EquationBrickFactory, _super);
    function EquationBrickFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    EquationBrickFactory.prototype.make = /**
     * @return {?}
     */
    function () {
        return this.withUuid({
            kind: 'equation',
            equation: 'f(x) = x^2',
            description: 'Fonction carrée'
        });
    };
    EquationBrickFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: SilicateCoreModule
                },] }
    ];
    /** @nocollapse */ EquationBrickFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EquationBrickFactory_Factory() { return new EquationBrickFactory(); }, token: EquationBrickFactory, providedIn: i1.SilicateCoreModule });
    return EquationBrickFactory;
}(BaseBrickFactory));
export { EquationBrickFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YXRpb24tYnJpY2suZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtYXRocml4L3NpbGljYXRlLWxhdGV4LyIsInNvdXJjZXMiOlsiYnJpY2tzL2VxdWF0aW9uLWJyaWNrL2VxdWF0aW9uLWJyaWNrLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFJNUU7SUFHMEMsZ0RBQStCO0lBSHpFOztLQVdDOzs7O0lBUEMsbUNBQUk7OztJQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25CLElBQUksRUFBRSxVQUFVO1lBQ2hCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxpQkFBaUI7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBVkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxrQkFBa0I7aUJBQy9COzs7K0JBUEQ7Q0FnQkMsQUFYRCxDQUcwQyxnQkFBZ0IsR0FRekQ7U0FSWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQnJpY2tGYWN0b3J5LCBTaWxpY2F0ZUNvcmVNb2R1bGV9IGZyb20gJ0BtYXRocml4L3NpbGljYXRlLWNvcmUnO1xuaW1wb3J0IHtFcXVhdGlvbkJyaWNrfSBmcm9tICcuL2VxdWF0aW9uLWJyaWNrJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFNpbGljYXRlQ29yZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBFcXVhdGlvbkJyaWNrRmFjdG9yeSBleHRlbmRzIEJhc2VCcmlja0ZhY3Rvcnk8RXF1YXRpb25Ccmljaz4ge1xuICBtYWtlKCk6IEVxdWF0aW9uQnJpY2sge1xuICAgIHJldHVybiB0aGlzLndpdGhVdWlkKHtcbiAgICAgIGtpbmQ6ICdlcXVhdGlvbicsXG4gICAgICBlcXVhdGlvbjogJ2YoeCkgPSB4XjInLFxuICAgICAgZGVzY3JpcHRpb246ICdGb25jdGlvbiBjYXJyw6llJ1xuICAgIH0pO1xuICB9XG59XG4iXX0=