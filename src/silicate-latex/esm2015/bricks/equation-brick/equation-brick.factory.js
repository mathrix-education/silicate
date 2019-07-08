/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BaseBrickFactory, SilicateCoreModule } from '@mathrix/silicate-core';
import * as i0 from "@angular/core";
import * as i1 from "@mathrix/silicate-core";
export class EquationBrickFactory extends BaseBrickFactory {
    /**
     * @return {?}
     */
    make() {
        return this.withUuid({
            kind: 'equation',
            equation: 'f(x) = x^2',
            description: 'Fonction carrée'
        });
    }
}
EquationBrickFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: SilicateCoreModule
            },] }
];
/** @nocollapse */ EquationBrickFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EquationBrickFactory_Factory() { return new EquationBrickFactory(); }, token: EquationBrickFactory, providedIn: i1.SilicateCoreModule });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YXRpb24tYnJpY2suZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtYXRocml4L3NpbGljYXRlLWxhdGV4LyIsInNvdXJjZXMiOlsiYnJpY2tzL2VxdWF0aW9uLWJyaWNrL2VxdWF0aW9uLWJyaWNrLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQU81RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQStCOzs7O0lBQ3ZFLElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGtCQUFrQjthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VCcmlja0ZhY3RvcnksIFNpbGljYXRlQ29yZU1vZHVsZX0gZnJvbSAnQG1hdGhyaXgvc2lsaWNhdGUtY29yZSc7XG5pbXBvcnQge0VxdWF0aW9uQnJpY2t9IGZyb20gJy4vZXF1YXRpb24tYnJpY2snO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogU2lsaWNhdGVDb3JlTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEVxdWF0aW9uQnJpY2tGYWN0b3J5IGV4dGVuZHMgQmFzZUJyaWNrRmFjdG9yeTxFcXVhdGlvbkJyaWNrPiB7XG4gIG1ha2UoKTogRXF1YXRpb25CcmljayB7XG4gICAgcmV0dXJuIHRoaXMud2l0aFV1aWQoe1xuICAgICAga2luZDogJ2VxdWF0aW9uJyxcbiAgICAgIGVxdWF0aW9uOiAnZih4KSA9IHheMicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvbmN0aW9uIGNhcnLDqWUnXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==