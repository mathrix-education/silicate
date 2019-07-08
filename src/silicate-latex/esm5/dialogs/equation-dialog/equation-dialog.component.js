/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { LATEX_SYMBOLS } from './equation-dialog.symbols';
import { LATEX_SNIPPETS } from './equation-dialog.snippets';
/**
 * \@dynamic
 */
var EquationDialogComponent = /** @class */ (function () {
    function EquationDialogComponent(renderer2, dialogRef, document, data) {
        this.renderer2 = renderer2;
        this.dialogRef = dialogRef;
        this.document = document;
        this.data = data;
        this.elementRef = null;
        this.equationFormFieldFocused = false;
        this.symbols = LATEX_SYMBOLS;
        this.snippets = LATEX_SNIPPETS;
    }
    /**
     * @param {?} $event
     * @param {?} latexSnippet
     * @return {?}
     */
    EquationDialogComponent.prototype.applySnippet = /**
     * @param {?} $event
     * @param {?} latexSnippet
     * @return {?}
     */
    function ($event, latexSnippet) {
        if (this.equationFormFieldFocused) {
            $event.preventDefault();
            this.document.execCommand('insertText', false, latexSnippet);
        }
        // TODO: Insert the snippet at the end
    };
    /**
     * @return {?}
     */
    EquationDialogComponent.prototype.delete = /**
     * @return {?}
     */
    function () {
        this.renderer2.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
        this.dialogRef.close();
    };
    EquationDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'silicate-equation-dialog',
                    template: "<h1 mat-dialog-title>\u00C9diteur d'\u00E9quation</h1>\n<div mat-dialog-content>\n  <div fxLayout=\"column\" fxLayoutGap=\"16px\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Symboles et sigles\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-grid-list cols=\"9\">\n          <mat-grid-tile\n            *ngFor=\"let s of symbols\">\n            <button\n              mat-raised-button\n              (mousedown)=\"applySnippet($event, s)\">\n              <ng-katex [equation]=\"s\" [options]=\"{displayMode: true}\"></ng-katex>\n            </button>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n\n\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Expressions\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-grid-list cols=\"7\">\n          <mat-grid-tile\n            *ngFor=\"let s of snippets\">\n            <button\n              mat-raised-button\n              (mousedown)=\"applySnippet($event, s)\">\n              <ng-katex [equation]=\"s\" [options]=\"{displayMode: true}\"></ng-katex>\n            </button>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-form-field>\n      <mat-label>\u00C9quation</mat-label>\n      <label>\n        <textarea cdkAutosizeMinRows=\"1\"\n                  cdkTextareaAutosize\n                  matInput\n                  placeholder=\"f(x) = x^2\"\n                  (focus)=\"equationFormFieldFocused = true\"\n                  (blur)=\"equationFormFieldFocused = false\"\n                  [(ngModel)]=\"data.equation\">\n        </textarea>\n      </label>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"data.enableDescription\">\n      <mat-label>Description</mat-label>\n      <label>\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"data.description\">\n      </label>\n    </mat-form-field>\n\n    <figure>\n      <ng-katex [equation]=\"data.equation\" [options]=\"{displayMode: true}\"></ng-katex>\n      <figcaption>\n        {{ data.description }}\n      </figcaption>\n    </figure>\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"{equation: 'delete'}\">Supprimer</button>\n  <button mat-button (click)=\"dialogRef.close()\">Annuler</button>\n  <button mat-button [mat-dialog-close]=\"data\">Sauvegarder</button>\n</div>\n",
                    styles: ["textarea{line-height:1.4}figcaption{text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    EquationDialogComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: MatDialogRef },
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return EquationDialogComponent;
}());
export { EquationDialogComponent };
if (false) {
    /** @type {?} */
    EquationDialogComponent.prototype.elementRef;
    /** @type {?} */
    EquationDialogComponent.prototype.equationFormFieldFocused;
    /** @type {?} */
    EquationDialogComponent.prototype.symbols;
    /** @type {?} */
    EquationDialogComponent.prototype.snippets;
    /**
     * @type {?}
     * @private
     */
    EquationDialogComponent.prototype.renderer2;
    /** @type {?} */
    EquationDialogComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    EquationDialogComponent.prototype.document;
    /** @type {?} */
    EquationDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YXRpb24tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtYXRocml4L3NpbGljYXRlLWxhdGV4LyIsInNvdXJjZXMiOlsiZGlhbG9ncy9lcXVhdGlvbi1kaWFsb2cvZXF1YXRpb24tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFJMUQ7SUFXRSxpQ0FDVSxTQUFvQixFQUNyQixTQUFnRCxFQUM3QixRQUFrQixFQUNaLElBQVM7UUFIakMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUF1QztRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBSztRQVQzQyxlQUFVLEdBQTRCLElBQUksQ0FBQztRQUMzQyw2QkFBd0IsR0FBRyxLQUFLLENBQUM7UUFDakMsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQUN4QixhQUFRLEdBQUcsY0FBYyxDQUFDO0lBUTFCLENBQUM7Ozs7OztJQUVELDhDQUFZOzs7OztJQUFaLFVBQWEsTUFBa0IsRUFBRSxZQUFvQjtRQUNuRCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNqQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM5RDtRQUNELHNDQUFzQztJQUN4QyxDQUFDOzs7O0lBRUQsd0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLDBoRkFBK0M7O2lCQUVoRDs7OztnQkFac0MsU0FBUztnQkFDdkIsWUFBWTtnQkFxQkcsUUFBUSx1QkFBM0MsTUFBTSxTQUFDLFFBQVE7Z0RBQ2YsTUFBTSxTQUFDLGVBQWU7O0lBZ0IzQiw4QkFBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLHVCQUF1Qjs7O0lBQ2xDLDZDQUEyQzs7SUFDM0MsMkRBQWlDOztJQUNqQywwQ0FBd0I7O0lBQ3hCLDJDQUEwQjs7Ozs7SUFHeEIsNENBQTRCOztJQUM1Qiw0Q0FBdUQ7Ozs7O0lBQ3ZELDJDQUE0Qzs7SUFDNUMsdUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0xBVEVYX1NZTUJPTFN9IGZyb20gJy4vZXF1YXRpb24tZGlhbG9nLnN5bWJvbHMnO1xuaW1wb3J0IHtMQVRFWF9TTklQUEVUU30gZnJvbSAnLi9lcXVhdGlvbi1kaWFsb2cuc25pcHBldHMnO1xuXG5cbi8qKiBAZHluYW1pYyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lsaWNhdGUtZXF1YXRpb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VxdWF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VxdWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWF0aW9uRGlhbG9nQ29tcG9uZW50IHtcbiAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSBudWxsO1xuICBlcXVhdGlvbkZvcm1GaWVsZEZvY3VzZWQgPSBmYWxzZTtcbiAgc3ltYm9scyA9IExBVEVYX1NZTUJPTFM7XG4gIHNuaXBwZXRzID0gTEFURVhfU05JUFBFVFM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RXF1YXRpb25EaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55XG4gICkge1xuICB9XG5cbiAgYXBwbHlTbmlwcGV0KCRldmVudDogTW91c2VFdmVudCwgbGF0ZXhTbmlwcGV0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lcXVhdGlvbkZvcm1GaWVsZEZvY3VzZWQpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCBsYXRleFNuaXBwZXQpO1xuICAgIH1cbiAgICAvLyBUT0RPOiBJbnNlcnQgdGhlIHNuaXBwZXQgYXQgdGhlIGVuZFxuICB9XG5cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=