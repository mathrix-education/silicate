/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseBrickComponent, SilicateService } from '@mathrix/silicate-core';
import { first } from 'rxjs/operators';
import { EquationDialogComponent } from '../../dialogs/equation-dialog/equation-dialog.component';
export class EquationBrickComponent extends BaseBrickComponent {
    /**
     * @param {?} dialog
     * @param {?} silicate
     */
    constructor(dialog, silicate) {
        super();
        this.dialog = dialog;
        this.silicate = silicate;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openEquationDialog() {
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
        (data) => {
            if (data !== undefined && data.equation !== '') {
                this.data.equation = data.equation;
                this.data.description = data.description;
                this.ngDoCheck();
            }
        }));
    }
}
EquationBrickComponent.decorators = [
    { type: Component, args: [{
                selector: 'silicate-equation-brick',
                template: "<figure fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\n  <ng-katex [equation]=\"data.equation\" [options]=\"{displayMode: true}\"></ng-katex>\n\n  <figcaption *ngIf=\"data.description\">\n    {{ data.description }}\n  </figcaption>\n</figure>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
EquationBrickComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: SilicateService }
];
EquationBrickComponent.propDecorators = {
    openEquationDialog: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YXRpb24tYnJpY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhyaXgvc2lsaWNhdGUtbGF0ZXgvIiwic291cmNlcyI6WyJicmlja3MvZXF1YXRpb24tYnJpY2svZXF1YXRpb24tYnJpY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQVNoRyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWlDOzs7OztJQUMzRSxZQUNVLE1BQWlCLEVBQ2pCLFFBQXlCO1FBRWpDLEtBQUssRUFBRSxDQUFDO1FBSEEsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUduQyxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFHRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNO2FBQ1IsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzdCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xDLGlCQUFpQixFQUFFLElBQUk7YUFDeEI7U0FDRixDQUFDO2FBQ0QsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsMlJBQThDOzthQUUvQzs7OztZQVhPLFNBQVM7WUFDVyxlQUFlOzs7aUNBc0J4QyxZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQVRuQix3Q0FBeUI7Ozs7O0lBQ3pCLDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtCYXNlQnJpY2tDb21wb25lbnQsIFNpbGljYXRlU2VydmljZX0gZnJvbSAnQG1hdGhyaXgvc2lsaWNhdGUtY29yZSc7XG5pbXBvcnQge2ZpcnN0fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0VxdWF0aW9uRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuLi8uLi9kaWFsb2dzL2VxdWF0aW9uLWRpYWxvZy9lcXVhdGlvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7RXF1YXRpb25Ccmlja30gZnJvbSAnLi9lcXVhdGlvbi1icmljayc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lsaWNhdGUtZXF1YXRpb24tYnJpY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vZXF1YXRpb24tYnJpY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcXVhdGlvbi1icmljay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWF0aW9uQnJpY2tDb21wb25lbnQgZXh0ZW5kcyBCYXNlQnJpY2tDb21wb25lbnQ8RXF1YXRpb25Ccmljaz4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgc2lsaWNhdGU6IFNpbGljYXRlU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9wZW5FcXVhdGlvbkRpYWxvZygpIHtcbiAgICBpZiAoIXRoaXMuc2lsaWNhdGUuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpYWxvZ1xuICAgICAgLm9wZW4oRXF1YXRpb25EaWFsb2dDb21wb25lbnQsIHtcbiAgICAgICAgd2lkdGg6ICc4MDBweCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlcXVhdGlvbjogdGhpcy5kYXRhLmVxdWF0aW9uLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgZW5hYmxlRGVzY3JpcHRpb246IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hZnRlckNsb3NlZCgpXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEuZXF1YXRpb24gIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5kYXRhLmVxdWF0aW9uID0gZGF0YS5lcXVhdGlvbjtcbiAgICAgICAgICB0aGlzLmRhdGEuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHRoaXMubmdEb0NoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=