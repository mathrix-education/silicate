import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, Renderer2, Inject, HostListener, Injectable, ɵɵdefineInjectable, RendererFactory2, ɵɵinject, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatGridListModule, MatExpansionModule } from '@angular/material';
import { BaseBrickComponent, SilicateService, BaseBrickFactory, SilicateCoreModule, BrickDeclarations, Filters, SelectionService, Handlers, Serializers } from '@mathrix/silicate-core';
import { KatexModule } from 'ng-katex';
import { first } from 'rxjs/operators';
import { renderToString } from 'katex';
import { MatDialog as MatDialog$1 } from '@angular/material/dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LATEX_SYMBOLS = [
    '\\mathbb{N}',
    '\\mathbb{Z}',
    '\\mathbb{Q}',
    '\\mathbb{R}',
    '\\mathbb{C}',
    '\\mathcal{P}',
    '\\in',
    '\\leq',
    '\\geq',
    '\\cup',
    '\\cap',
    '\\neq',
    '\\infty',
    '\\times',
    '\\div',
    '\\approx',
    '\\Longleftrightarrow',
    '\\Longrightarrow',
    '\\Longleftarrow',
    '\\longrightarrow',
    '\\longleftarrow',
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LATEX_SNIPPETS = [
    'u_{n}',
    'x^2',
    '\\sqrt{x}',
    'e^{x}',
    '\\ln{x}',
    '\\frac{a}{b}',
    '\\int_{a}^{b}',
    '\\sum_{i=0}^n',
    '\\begin{bmatrix}\n'
        + '  a & b \\\\\n'
        + '  c & d \n'
        + '\\end{bmatrix}',
    '\\begin{cases}\n'
        + '  3x\\\\\n'
        + '  7y\n'
        + '\\end{cases}',
    '\\lim\\limits_{x\\to\\infty}'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@dynamic
 */
class EquationDialogComponent {
    /**
     * @param {?} renderer2
     * @param {?} dialogRef
     * @param {?} document
     * @param {?} data
     */
    constructor(renderer2, dialogRef, document, data) {
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
    applySnippet($event, latexSnippet) {
        if (this.equationFormFieldFocused) {
            $event.preventDefault();
            this.document.execCommand('insertText', false, latexSnippet);
        }
        // TODO: Insert the snippet at the end
    }
    /**
     * @return {?}
     */
    delete() {
        this.renderer2.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
        this.dialogRef.close();
    }
}
EquationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'silicate-equation-dialog',
                template: "<h1 mat-dialog-title>\u00C9diteur d'\u00E9quation</h1>\n<div mat-dialog-content>\n  <div fxLayout=\"column\" fxLayoutGap=\"16px\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Symboles et sigles\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-grid-list cols=\"9\">\n          <mat-grid-tile\n            *ngFor=\"let s of symbols\">\n            <button\n              mat-raised-button\n              (mousedown)=\"applySnippet($event, s)\">\n              <ng-katex [equation]=\"s\" [options]=\"{displayMode: true}\"></ng-katex>\n            </button>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n\n\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Expressions\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-grid-list cols=\"7\">\n          <mat-grid-tile\n            *ngFor=\"let s of snippets\">\n            <button\n              mat-raised-button\n              (mousedown)=\"applySnippet($event, s)\">\n              <ng-katex [equation]=\"s\" [options]=\"{displayMode: true}\"></ng-katex>\n            </button>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-form-field>\n      <mat-label>\u00C9quation</mat-label>\n      <label>\n        <textarea cdkAutosizeMinRows=\"1\"\n                  cdkTextareaAutosize\n                  matInput\n                  placeholder=\"f(x) = x^2\"\n                  (focus)=\"equationFormFieldFocused = true\"\n                  (blur)=\"equationFormFieldFocused = false\"\n                  [(ngModel)]=\"data.equation\">\n        </textarea>\n      </label>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"data.enableDescription\">\n      <mat-label>Description</mat-label>\n      <label>\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"data.description\">\n      </label>\n    </mat-form-field>\n\n    <figure>\n      <ng-katex [equation]=\"data.equation\" [options]=\"{displayMode: true}\"></ng-katex>\n      <figcaption>\n        {{ data.description }}\n      </figcaption>\n    </figure>\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"{equation: 'delete'}\">Supprimer</button>\n  <button mat-button (click)=\"dialogRef.close()\">Annuler</button>\n  <button mat-button [mat-dialog-close]=\"data\">Sauvegarder</button>\n</div>\n",
                styles: ["textarea{line-height:1.4}figcaption{text-align:center}"]
            }] }
];
/** @nocollapse */
EquationDialogComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: MatDialogRef },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EquationBrickComponent extends BaseBrickComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EquationBrickFactory extends BaseBrickFactory {
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
/** @nocollapse */ EquationBrickFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function EquationBrickFactory_Factory() { return new EquationBrickFactory(); }, token: EquationBrickFactory, providedIn: SilicateCoreModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {
    kind: 'equation',
    icon: 'functions',
    name: 'Équation',
    component: EquationBrickComponent,
    factory: EquationBrickFactory
};
/** @type {?} */
const EquationBrickProvider = {
    provide: BrickDeclarations,
    multi: true,
    useValue: ɵ0
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = {
    selector: 'span.katex, span.katex *',
    allowedAttributes: ['id', 'class', 'style']
};
/** @type {?} */
const KatexFilterProvider = {
    provide: Filters,
    multi: true,
    useValue: ɵ0$1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@dynamic
 */
class InlineEquationHandler {
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
                this.renderer2.setProperty(equationElement, 'outerHTML', renderToString(newEquation));
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
/** @nocollapse */ InlineEquationHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function InlineEquationHandler_Factory() { return new InlineEquationHandler(ɵɵinject(MatDialog$1), ɵɵinject(SelectionService), ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT)); }, token: InlineEquationHandler, providedIn: SilicateCoreModule });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$2 = {
    eventName: 'keydown',
    service: InlineEquationHandler,
    method: 'keydown'
};
/** @type {?} */
const KeydownEquationHandlerProvider = {
    provide: Handlers,
    multi: true,
    useValue: ɵ0$2
};
const ɵ1 = {
    eventName: 'click',
    service: InlineEquationHandler,
    method: 'click'
};
/** @type {?} */
const ClickEquationHandlerProvider = {
    provide: Handlers,
    multi: true,
    useValue: ɵ1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KatexSerializer {
    /**
     * @param {?} rendererFactory
     */
    constructor(rendererFactory) {
        this.renderer2 = rendererFactory.createRenderer(null, null);
    }
    /**
     * Render the KaTeX equations.
     * @param {?} str The brick content.
     * @return {?}
     */
    render(str) {
        /** @type {?} */
        const segments = str.split('$');
        /** @type {?} */
        let output = '';
        segments.forEach((/**
         * @param {?} segment
         * @param {?} index
         * @return {?}
         */
        (segment, index) => {
            if (index % 2 === 0) {
                output += segment;
            }
            else {
                output += renderToString(segment, { displayMode: true });
            }
        }));
        /** @type {?} */
        const sandbox = this.renderer2.createElement('div');
        this.renderer2.setProperty(sandbox, 'innerHTML', output);
        sandbox.querySelectorAll('.katex-display').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        katexElement => {
            this.renderer2.setProperty(katexElement, 'outerHTML', katexElement.innerHTML);
        }));
        sandbox.querySelectorAll('.katex').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        katexElement => {
            // Required to not interfere with the contenteditable of attribute of the wrapper
            this.renderer2.setAttribute(katexElement, 'contenteditable', 'false');
        }));
        output = sandbox.innerHTML;
        this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
        return output;
    }
    /**
     * Serialize Katex-rendered equations
     * @param {?} str The raw HTML
     * @return {?}
     */
    serialize(str) {
        // We do not even need to analyse non-katex content
        if (str.indexOf('katex') === -1) {
            return str;
        }
        /** @type {?} */
        const sandbox = this.renderer2.createElement('div');
        this.renderer2.setProperty(sandbox, 'innerHTML', str);
        // Now, we revert every katex HTML to their inline latex equation form ($equation$)
        sandbox.querySelectorAll('.katex').forEach((/**
         * @param {?} katexElement
         * @return {?}
         */
        (katexElement) => {
            /** @type {?} */
            const annotation = katexElement.querySelector('.katex-mathml annotation');
            /** @type {?} */
            const equation = annotation.textContent;
            this.renderer2.setProperty(katexElement, 'outerHTML', `$${equation}$`);
        }));
        /** @type {?} */
        const output = sandbox.innerHTML;
        this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
        return output;
    }
}
KatexSerializer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
KatexSerializer.ctorParameters = () => [
    { type: RendererFactory2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SilicateLatexModule {
    /**
     * @return {?}
     */
    static providers() {
        return [
            // Bricks
            EquationBrickProvider,
            // Filters
            KatexFilterProvider,
            // Handlers
            KeydownEquationHandlerProvider,
            ClickEquationHandlerProvider,
            // Serializers
            { provide: Serializers, multi: true, useClass: KatexSerializer }
        ];
    }
}
SilicateLatexModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EquationBrickComponent,
                    EquationDialogComponent
                ],
                entryComponents: [
                    EquationBrickComponent,
                    EquationDialogComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    FlexModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                    MatDialogModule,
                    KatexModule,
                    SilicateCoreModule,
                    MatGridListModule,
                    MatExpansionModule
                ]
            },] }
];

export { SilicateLatexModule, EquationBrickComponent as ɵa, EquationDialogComponent as ɵb, EquationBrickProvider as ɵc, EquationBrickFactory as ɵd, KatexFilterProvider as ɵe, KeydownEquationHandlerProvider as ɵf, ClickEquationHandlerProvider as ɵg, InlineEquationHandler as ɵh, KatexSerializer as ɵi };
//# sourceMappingURL=mathrix-silicate-latex.js.map
