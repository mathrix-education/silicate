/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectionService, SilicateCoreModule } from '@mathrix/silicate-core';
import * as katex from 'katex';
import { first } from 'rxjs/operators';
import { EquationDialogComponent } from '../dialogs/equation-dialog/equation-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@mathrix/silicate-core";
import * as i3 from "@angular/common";
/**
 * \@dynamic
 */
export class InlineEquationHandler {
    /**
     * @param {?} dialog
     * @param {?} selection
     * @param {?} rendererFactory
     * @param {?} document
     */
    constructor(dialog, selection, rendererFactory, document) {
        this.dialog = dialog;
        this.selection = selection;
        this.document = document;
        this.renderer2 = rendererFactory.createRenderer(null, null);
    }
    /**
     * @private
     * @param {?} actualEquation
     * @param {?} source
     * @param {?} equationElement
     * @return {?}
     */
    openEquationDialog(actualEquation, source, equationElement) {
        return this.dialog
            .open(EquationDialogComponent, {
            width: '800px',
            data: {
                equation: actualEquation
            }
        })
            .afterClosed()
            .pipe(first())
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data === undefined && actualEquation === '') {
                this.renderer2.removeChild(equationElement.parentNode, equationElement);
            }
            else if (data !== undefined && data.equation) {
                /** @type {?} */
                const newEquation = data.equation;
                this.renderer2.setProperty(equationElement, 'outerHTML', katex.renderToString(newEquation));
            }
            source.sync();
        }));
    }
    /**
     * @param {?} $event
     * @param {?} source
     * @return {?}
     */
    keydown($event, source) {
        if ($event.key === '$') {
            $event.preventDefault();
            this.document.execCommand('insertHTML', false, '<span id="katex-tmp"></span>');
            /** @type {?} */
            const katexTmpElement = this.document.querySelector('#katex-tmp');
            this.openEquationDialog('', source, katexTmpElement);
        }
    }
    /**
     * @param {?} $event
     * @param {?} source
     * @return {?}
     */
    click($event, source) {
        /** @type {?} */
        const equationElement = $event.target.closest('span.katex');
        if (equationElement !== null) {
            /** @type {?} */
            const equation = equationElement.querySelector('annotation').textContent;
            this.openEquationDialog(equation, source, equationElement);
        }
    }
}
InlineEquationHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: SilicateCoreModule
            },] }
];
/** @nocollapse */
InlineEquationHandler.ctorParameters = () => [
    { type: MatDialog },
    { type: SelectionService },
    { type: RendererFactory2 },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ InlineEquationHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function InlineEquationHandler_Factory() { return new InlineEquationHandler(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(i2.SelectionService), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i3.DOCUMENT)); }, token: InlineEquationHandler, providedIn: i2.SilicateCoreModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    InlineEquationHandler.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    InlineEquationHandler.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    InlineEquationHandler.prototype.selection;
    /**
     * @type {?}
     * @private
     */
    InlineEquationHandler.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWVxdWF0aW9uLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWF0aHJpeC9zaWxpY2F0ZS1sYXRleC8iLCJzb3VyY2VzIjpbImhhbmRsZXJzL2lubGluZS1lcXVhdGlvbi5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQWEsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7O0FBTzdGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFJaEMsWUFDVSxNQUFpQixFQUNqQixTQUEyQixFQUNuQyxlQUFpQyxFQUNQLFFBQWtCO1FBSHBDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFFVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRTVDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7Ozs7SUFHTyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsTUFBaUMsRUFBRSxlQUFlO1FBQzNGLE9BQU8sSUFBSSxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLGNBQWM7YUFDekI7U0FDRixDQUFDO2FBQ0QsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLGNBQWMsS0FBSyxFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDekU7aUJBQU0sSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O3NCQUN4QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzdGO1lBRUQsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBR0QsT0FBTyxDQUFDLE1BQXFCLEVBQUUsTUFBaUM7UUFDOUQsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUN0QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxDQUFDOztrQkFDekUsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUVqRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7Ozs7OztJQUdELEtBQUssQ0FBQyxNQUFXLEVBQUUsTUFBaUM7O2NBQzVDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFFM0QsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFOztrQkFDdEIsUUFBUSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVztZQUN4RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7OztZQTNERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGtCQUFrQjthQUMvQjs7OztZQVZPLFNBQVM7WUFDVCxnQkFBZ0I7WUFGZSxnQkFBZ0I7WUFvQmYsUUFBUSx1QkFBM0MsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBUGxCLDBDQUE2Qjs7Ozs7SUFJM0IsdUNBQXlCOzs7OztJQUN6QiwwQ0FBbUM7Ozs7O0lBRW5DLHlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge1NlbGVjdGlvblNlcnZpY2UsIFNpbGljYXRlQ29yZU1vZHVsZSwgU2lsaWNhdGVFZGl0YWJsZUNvbXBvbmVudH0gZnJvbSAnQG1hdGhyaXgvc2lsaWNhdGUtY29yZSc7XG5pbXBvcnQgKiBhcyBrYXRleCBmcm9tICdrYXRleCc7XG5pbXBvcnQge2ZpcnN0fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0VxdWF0aW9uRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuLi9kaWFsb2dzL2VxdWF0aW9uLWRpYWxvZy9lcXVhdGlvbi1kaWFsb2cuY29tcG9uZW50JztcblxuXG4vKiogQGR5bmFtaWMgKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogU2lsaWNhdGVDb3JlTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIElubGluZUVxdWF0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjI7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgc2VsZWN0aW9uOiBTZWxlY3Rpb25TZXJ2aWNlLFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudFxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyMiA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBvcGVuRXF1YXRpb25EaWFsb2coYWN0dWFsRXF1YXRpb24sIHNvdXJjZTogU2lsaWNhdGVFZGl0YWJsZUNvbXBvbmVudCwgZXF1YXRpb25FbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nXG4gICAgICAub3BlbihFcXVhdGlvbkRpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgICB3aWR0aDogJzgwMHB4JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGVxdWF0aW9uOiBhY3R1YWxFcXVhdGlvblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmFmdGVyQ2xvc2VkKClcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgJiYgYWN0dWFsRXF1YXRpb24gPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2hpbGQoZXF1YXRpb25FbGVtZW50LnBhcmVudE5vZGUsIGVxdWF0aW9uRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEuZXF1YXRpb24pIHtcbiAgICAgICAgICBjb25zdCBuZXdFcXVhdGlvbiA9IGRhdGEuZXF1YXRpb247XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0UHJvcGVydHkoZXF1YXRpb25FbGVtZW50LCAnb3V0ZXJIVE1MJywga2F0ZXgucmVuZGVyVG9TdHJpbmcobmV3RXF1YXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvdXJjZS5zeW5jKCk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAga2V5ZG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHNvdXJjZTogU2lsaWNhdGVFZGl0YWJsZUNvbXBvbmVudCkge1xuICAgIGlmICgkZXZlbnQua2V5ID09PSAnJCcpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLmRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsICc8c3BhbiBpZD1cImthdGV4LXRtcFwiPjwvc3Bhbj4nKTtcbiAgICAgIGNvbnN0IGthdGV4VG1wRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2thdGV4LXRtcCcpO1xuXG4gICAgICB0aGlzLm9wZW5FcXVhdGlvbkRpYWxvZygnJywgc291cmNlLCBrYXRleFRtcEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG5cbiAgY2xpY2soJGV2ZW50OiBhbnksIHNvdXJjZTogU2lsaWNhdGVFZGl0YWJsZUNvbXBvbmVudCkge1xuICAgIGNvbnN0IGVxdWF0aW9uRWxlbWVudCA9ICRldmVudC50YXJnZXQuY2xvc2VzdCgnc3Bhbi5rYXRleCcpO1xuXG4gICAgaWYgKGVxdWF0aW9uRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXF1YXRpb24gPSBlcXVhdGlvbkVsZW1lbnQucXVlcnlTZWxlY3RvcignYW5ub3RhdGlvbicpLnRleHRDb250ZW50O1xuICAgICAgdGhpcy5vcGVuRXF1YXRpb25EaWFsb2coZXF1YXRpb24sIHNvdXJjZSwgZXF1YXRpb25FbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==