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
var InlineEquationHandler = /** @class */ (function () {
    function InlineEquationHandler(dialog, selection, rendererFactory, document) {
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
    InlineEquationHandler.prototype.openEquationDialog = /**
     * @private
     * @param {?} actualEquation
     * @param {?} source
     * @param {?} equationElement
     * @return {?}
     */
    function (actualEquation, source, equationElement) {
        var _this = this;
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
        function (data) {
            if (data === undefined && actualEquation === '') {
                _this.renderer2.removeChild(equationElement.parentNode, equationElement);
            }
            else if (data !== undefined && data.equation) {
                /** @type {?} */
                var newEquation = data.equation;
                _this.renderer2.setProperty(equationElement, 'outerHTML', katex.renderToString(newEquation));
            }
            source.sync();
        }));
    };
    /**
     * @param {?} $event
     * @param {?} source
     * @return {?}
     */
    InlineEquationHandler.prototype.keydown = /**
     * @param {?} $event
     * @param {?} source
     * @return {?}
     */
    function ($event, source) {
        if ($event.key === '$') {
            $event.preventDefault();
            this.document.execCommand('insertHTML', false, '<span id="katex-tmp"></span>');
            /** @type {?} */
            var katexTmpElement = this.document.querySelector('#katex-tmp');
            this.openEquationDialog('', source, katexTmpElement);
        }
    };
    /**
     * @param {?} $event
     * @param {?} source
     * @return {?}
     */
    InlineEquationHandler.prototype.click = /**
     * @param {?} $event
     * @param {?} source
     * @return {?}
     */
    function ($event, source) {
        /** @type {?} */
        var equationElement = $event.target.closest('span.katex');
        if (equationElement !== null) {
            /** @type {?} */
            var equation = equationElement.querySelector('annotation').textContent;
            this.openEquationDialog(equation, source, equationElement);
        }
    };
    InlineEquationHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: SilicateCoreModule
                },] }
    ];
    /** @nocollapse */
    InlineEquationHandler.ctorParameters = function () { return [
        { type: MatDialog },
        { type: SelectionService },
        { type: RendererFactory2 },
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ InlineEquationHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function InlineEquationHandler_Factory() { return new InlineEquationHandler(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(i2.SelectionService), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i3.DOCUMENT)); }, token: InlineEquationHandler, providedIn: i2.SilicateCoreModule });
    return InlineEquationHandler;
}());
export { InlineEquationHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWVxdWF0aW9uLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWF0aHJpeC9zaWxpY2F0ZS1sYXRleC8iLCJzb3VyY2VzIjpbImhhbmRsZXJzL2lubGluZS1lcXVhdGlvbi5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQWEsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7O0FBSTdGO0lBT0UsK0JBQ1UsTUFBaUIsRUFDakIsU0FBMkIsRUFDbkMsZUFBaUMsRUFDUCxRQUFrQjtRQUhwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRVQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUU1QyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7Ozs7O0lBR08sa0RBQWtCOzs7Ozs7O0lBQTFCLFVBQTJCLGNBQWMsRUFBRSxNQUFpQyxFQUFFLGVBQWU7UUFBN0YsaUJBb0JDO1FBbkJDLE9BQU8sSUFBSSxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLGNBQWM7YUFDekI7U0FDRixDQUFDO2FBQ0QsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLFVBQUMsSUFBSTtZQUNkLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFO2dCQUMvQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztvQkFDeEMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRO2dCQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUM3RjtZQUVELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUdELHVDQUFPOzs7OztJQUFQLFVBQVEsTUFBcUIsRUFBRSxNQUFpQztRQUM5RCxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV4QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixDQUFDLENBQUM7O2dCQUN6RSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1lBRWpFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QscUNBQUs7Ozs7O0lBQUwsVUFBTSxNQUFXLEVBQUUsTUFBaUM7O1lBQzVDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFFM0QsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFOztnQkFDdEIsUUFBUSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVztZQUN4RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2dCQTNERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLGtCQUFrQjtpQkFDL0I7Ozs7Z0JBVk8sU0FBUztnQkFDVCxnQkFBZ0I7Z0JBRmUsZ0JBQWdCO2dCQW9CZixRQUFRLHVCQUEzQyxNQUFNLFNBQUMsUUFBUTs7O2dDQXJCcEI7Q0FzRUMsQUE1REQsSUE0REM7U0F6RFkscUJBQXFCOzs7Ozs7SUFDaEMsMENBQTZCOzs7OztJQUkzQix1Q0FBeUI7Ozs7O0lBQ3pCLDBDQUFtQzs7Ozs7SUFFbkMseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7U2VsZWN0aW9uU2VydmljZSwgU2lsaWNhdGVDb3JlTW9kdWxlLCBTaWxpY2F0ZUVkaXRhYmxlQ29tcG9uZW50fSBmcm9tICdAbWF0aHJpeC9zaWxpY2F0ZS1jb3JlJztcbmltcG9ydCAqIGFzIGthdGV4IGZyb20gJ2thdGV4JztcbmltcG9ydCB7Zmlyc3R9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RXF1YXRpb25EaWFsb2dDb21wb25lbnR9IGZyb20gJy4uL2RpYWxvZ3MvZXF1YXRpb24tZGlhbG9nL2VxdWF0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cbi8qKiBAZHluYW1pYyAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBTaWxpY2F0ZUNvcmVNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgSW5saW5lRXF1YXRpb25IYW5kbGVyIHtcbiAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMjtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb246IFNlbGVjdGlvblNlcnZpY2UsXG4gICAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50XG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cblxuICBwcml2YXRlIG9wZW5FcXVhdGlvbkRpYWxvZyhhY3R1YWxFcXVhdGlvbiwgc291cmNlOiBTaWxpY2F0ZUVkaXRhYmxlQ29tcG9uZW50LCBlcXVhdGlvbkVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2dcbiAgICAgIC5vcGVuKEVxdWF0aW9uRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICAgIHdpZHRoOiAnODAwcHgnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZXF1YXRpb246IGFjdHVhbEVxdWF0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYWZ0ZXJDbG9zZWQoKVxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCAmJiBhY3R1YWxFcXVhdGlvbiA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDaGlsZChlcXVhdGlvbkVsZW1lbnQucGFyZW50Tm9kZSwgZXF1YXRpb25FbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YS5lcXVhdGlvbikge1xuICAgICAgICAgIGNvbnN0IG5ld0VxdWF0aW9uID0gZGF0YS5lcXVhdGlvbjtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRQcm9wZXJ0eShlcXVhdGlvbkVsZW1lbnQsICdvdXRlckhUTUwnLCBrYXRleC5yZW5kZXJUb1N0cmluZyhuZXdFcXVhdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc291cmNlLnN5bmMoKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBrZXlkb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCwgc291cmNlOiBTaWxpY2F0ZUVkaXRhYmxlQ29tcG9uZW50KSB7XG4gICAgaWYgKCRldmVudC5rZXkgPT09ICckJykge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgJzxzcGFuIGlkPVwia2F0ZXgtdG1wXCI+PC9zcGFuPicpO1xuICAgICAgY29uc3Qga2F0ZXhUbXBFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja2F0ZXgtdG1wJyk7XG5cbiAgICAgIHRoaXMub3BlbkVxdWF0aW9uRGlhbG9nKCcnLCBzb3VyY2UsIGthdGV4VG1wRWxlbWVudCk7XG4gICAgfVxuICB9XG5cblxuICBjbGljaygkZXZlbnQ6IGFueSwgc291cmNlOiBTaWxpY2F0ZUVkaXRhYmxlQ29tcG9uZW50KSB7XG4gICAgY29uc3QgZXF1YXRpb25FbGVtZW50ID0gJGV2ZW50LnRhcmdldC5jbG9zZXN0KCdzcGFuLmthdGV4Jyk7XG5cbiAgICBpZiAoZXF1YXRpb25FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlcXVhdGlvbiA9IGVxdWF0aW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhbm5vdGF0aW9uJykudGV4dENvbnRlbnQ7XG4gICAgICB0aGlzLm9wZW5FcXVhdGlvbkRpYWxvZyhlcXVhdGlvbiwgc291cmNlLCBlcXVhdGlvbkVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIl19