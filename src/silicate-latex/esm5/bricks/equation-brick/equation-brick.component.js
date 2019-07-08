/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseBrickComponent, SilicateService } from '@mathrix/silicate-core';
import { first } from 'rxjs/operators';
import { EquationDialogComponent } from '../../dialogs/equation-dialog/equation-dialog.component';
var EquationBrickComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EquationBrickComponent, _super);
    function EquationBrickComponent(dialog, silicate) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this.silicate = silicate;
        return _this;
    }
    /**
     * @return {?}
     */
    EquationBrickComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    EquationBrickComponent.prototype.openEquationDialog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.silicate.editable) {
            return;
        }
        this.dialog
            .open(EquationDialogComponent, {
            width: '800px',
            data: {
                equation: this.data.equation,
                description: this.data.description,
                enableDescription: true
            }
        })
            .afterClosed()
            .pipe(first())
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data !== undefined && data.equation !== '') {
                _this.data.equation = data.equation;
                _this.data.description = data.description;
                _this.ngDoCheck();
            }
        }));
    };
    EquationBrickComponent.decorators = [
        { type: Component, args: [{
                    selector: 'silicate-equation-brick',
                    template: "<figure fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\n  <ng-katex [equation]=\"data.equation\" [options]=\"{displayMode: true}\"></ng-katex>\n\n  <figcaption *ngIf=\"data.description\">\n    {{ data.description }}\n  </figcaption>\n</figure>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    EquationBrickComponent.ctorParameters = function () { return [
        { type: MatDialog },
        { type: SilicateService }
    ]; };
    EquationBrickComponent.propDecorators = {
        openEquationDialog: [{ type: HostListener, args: ['click',] }]
    };
    return EquationBrickComponent;
}(BaseBrickComponent));
export { EquationBrickComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EquationBrickComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    EquationBrickComponent.prototype.silicate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YXRpb24tYnJpY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhyaXgvc2lsaWNhdGUtbGF0ZXgvIiwic291cmNlcyI6WyJicmlja3MvZXF1YXRpb24tYnJpY2svZXF1YXRpb24tYnJpY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0seURBQXlELENBQUM7QUFJaEc7SUFLNEMsa0RBQWlDO0lBQzNFLGdDQUNVLE1BQWlCLEVBQ2pCLFFBQXlCO1FBRm5DLFlBSUUsaUJBQU8sU0FDUjtRQUpTLFlBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsY0FBUSxHQUFSLFFBQVEsQ0FBaUI7O0lBR25DLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBR0QsbURBQWtCOzs7SUFEbEI7UUFBQSxpQkF3QkM7UUF0QkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNO2FBQ1IsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzdCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xDLGlCQUFpQixFQUFFLElBQUk7YUFDeEI7U0FDRixDQUFDO2FBQ0QsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLFVBQUMsSUFBSTtZQUNkLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsRUFBRTtnQkFDOUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDekMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDJSQUE4Qzs7aUJBRS9DOzs7O2dCQVhPLFNBQVM7Z0JBQ1csZUFBZTs7O3FDQXNCeEMsWUFBWSxTQUFDLE9BQU87O0lBeUJ2Qiw2QkFBQztDQUFBLEFBekNELENBSzRDLGtCQUFrQixHQW9DN0Q7U0FwQ1ksc0JBQXNCOzs7Ozs7SUFFL0Isd0NBQXlCOzs7OztJQUN6QiwwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7QmFzZUJyaWNrQ29tcG9uZW50LCBTaWxpY2F0ZVNlcnZpY2V9IGZyb20gJ0BtYXRocml4L3NpbGljYXRlLWNvcmUnO1xuaW1wb3J0IHtmaXJzdH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtFcXVhdGlvbkRpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9lcXVhdGlvbi1kaWFsb2cvZXF1YXRpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQge0VxdWF0aW9uQnJpY2t9IGZyb20gJy4vZXF1YXRpb24tYnJpY2snO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpbGljYXRlLWVxdWF0aW9uLWJyaWNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VxdWF0aW9uLWJyaWNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXF1YXRpb24tYnJpY2suY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVhdGlvbkJyaWNrQ29tcG9uZW50IGV4dGVuZHMgQmFzZUJyaWNrQ29tcG9uZW50PEVxdWF0aW9uQnJpY2s+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIHNpbGljYXRlOiBTaWxpY2F0ZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvcGVuRXF1YXRpb25EaWFsb2coKSB7XG4gICAgaWYgKCF0aGlzLnNpbGljYXRlLmVkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kaWFsb2dcbiAgICAgIC5vcGVuKEVxdWF0aW9uRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICAgIHdpZHRoOiAnODAwcHgnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZXF1YXRpb246IHRoaXMuZGF0YS5lcXVhdGlvbixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVuYWJsZURlc2NyaXB0aW9uOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYWZ0ZXJDbG9zZWQoKVxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhLmVxdWF0aW9uICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuZGF0YS5lcXVhdGlvbiA9IGRhdGEuZXF1YXRpb247XG4gICAgICAgICAgdGhpcy5kYXRhLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICB0aGlzLm5nRG9DaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl19