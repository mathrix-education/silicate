(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/flex-layout'), require('@angular/forms'), require('@angular/material'), require('@mathrix/silicate-core'), require('ng-katex'), require('rxjs/operators'), require('katex'), require('@angular/material/dialog')) :
    typeof define === 'function' && define.amd ? define('@mathrix/silicate-latex', ['exports', '@angular/common', '@angular/core', '@angular/flex-layout', '@angular/forms', '@angular/material', '@mathrix/silicate-core', 'ng-katex', 'rxjs/operators', 'katex', '@angular/material/dialog'], factory) :
    (global = global || self, factory((global.mathrix = global.mathrix || {}, global.mathrix['silicate-latex'] = {}), global.ng.common, global.ng.core, global.ng['flex-layout'], global.ng.forms, global.ng.material, global.silicateCore, global.ngKatex, global.rxjs.operators, global.katex, global.ng.material.dialog));
}(this, function (exports, common, core, flexLayout, forms, material, silicateCore, ngKatex, operators, katex, dialog) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LATEX_SYMBOLS = [
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
    var LATEX_SNIPPETS = [
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
            { type: core.Component, args: [{
                        selector: 'silicate-equation-dialog',
                        template: "<h1 mat-dialog-title>\u00C9diteur d'\u00E9quation</h1>\n<div mat-dialog-content>\n  <div fxLayout=\"column\" fxLayoutGap=\"16px\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Symboles et sigles\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-grid-list cols=\"9\">\n          <mat-grid-tile\n            *ngFor=\"let s of symbols\">\n            <button\n              mat-raised-button\n              (mousedown)=\"applySnippet($event, s)\">\n              <ng-katex [equation]=\"s\" [options]=\"{displayMode: true}\"></ng-katex>\n            </button>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n\n\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Expressions\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-grid-list cols=\"7\">\n          <mat-grid-tile\n            *ngFor=\"let s of snippets\">\n            <button\n              mat-raised-button\n              (mousedown)=\"applySnippet($event, s)\">\n              <ng-katex [equation]=\"s\" [options]=\"{displayMode: true}\"></ng-katex>\n            </button>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-form-field>\n      <mat-label>\u00C9quation</mat-label>\n      <label>\n        <textarea cdkAutosizeMinRows=\"1\"\n                  cdkTextareaAutosize\n                  matInput\n                  placeholder=\"f(x) = x^2\"\n                  (focus)=\"equationFormFieldFocused = true\"\n                  (blur)=\"equationFormFieldFocused = false\"\n                  [(ngModel)]=\"data.equation\">\n        </textarea>\n      </label>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"data.enableDescription\">\n      <mat-label>Description</mat-label>\n      <label>\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"data.description\">\n      </label>\n    </mat-form-field>\n\n    <figure>\n      <ng-katex [equation]=\"data.equation\" [options]=\"{displayMode: true}\"></ng-katex>\n      <figcaption>\n        {{ data.description }}\n      </figcaption>\n    </figure>\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"{equation: 'delete'}\">Supprimer</button>\n  <button mat-button (click)=\"dialogRef.close()\">Annuler</button>\n  <button mat-button [mat-dialog-close]=\"data\">Sauvegarder</button>\n</div>\n",
                        styles: ["textarea{line-height:1.4}figcaption{text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        EquationDialogComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: material.MatDialogRef },
            { type: Document, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return EquationDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EquationBrickComponent = /** @class */ (function (_super) {
        __extends(EquationBrickComponent, _super);
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
                .pipe(operators.first())
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
            { type: core.Component, args: [{
                        selector: 'silicate-equation-brick',
                        template: "<figure fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\n  <ng-katex [equation]=\"data.equation\" [options]=\"{displayMode: true}\"></ng-katex>\n\n  <figcaption *ngIf=\"data.description\">\n    {{ data.description }}\n  </figcaption>\n</figure>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        EquationBrickComponent.ctorParameters = function () { return [
            { type: material.MatDialog },
            { type: silicateCore.SilicateService }
        ]; };
        EquationBrickComponent.propDecorators = {
            openEquationDialog: [{ type: core.HostListener, args: ['click',] }]
        };
        return EquationBrickComponent;
    }(silicateCore.BaseBrickComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EquationBrickFactory = /** @class */ (function (_super) {
        __extends(EquationBrickFactory, _super);
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
            { type: core.Injectable, args: [{
                        providedIn: silicateCore.SilicateCoreModule
                    },] }
        ];
        /** @nocollapse */ EquationBrickFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EquationBrickFactory_Factory() { return new EquationBrickFactory(); }, token: EquationBrickFactory, providedIn: silicateCore.SilicateCoreModule });
        return EquationBrickFactory;
    }(silicateCore.BaseBrickFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {
        kind: 'equation',
        icon: 'functions',
        name: 'Équation',
        component: EquationBrickComponent,
        factory: EquationBrickFactory
    };
    /** @type {?} */
    var EquationBrickProvider = {
        provide: silicateCore.BrickDeclarations,
        multi: true,
        useValue: ɵ0
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$1 = {
        selector: 'span.katex, span.katex *',
        allowedAttributes: ['id', 'class', 'style']
    };
    /** @type {?} */
    var KatexFilterProvider = {
        provide: silicateCore.Filters,
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
                .pipe(operators.first())
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
            { type: core.Injectable, args: [{
                        providedIn: silicateCore.SilicateCoreModule
                    },] }
        ];
        /** @nocollapse */
        InlineEquationHandler.ctorParameters = function () { return [
            { type: material.MatDialog },
            { type: silicateCore.SelectionService },
            { type: core.RendererFactory2 },
            { type: Document, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        /** @nocollapse */ InlineEquationHandler.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function InlineEquationHandler_Factory() { return new InlineEquationHandler(core.ɵɵinject(dialog.MatDialog), core.ɵɵinject(silicateCore.SelectionService), core.ɵɵinject(core.RendererFactory2), core.ɵɵinject(common.DOCUMENT)); }, token: InlineEquationHandler, providedIn: silicateCore.SilicateCoreModule });
        return InlineEquationHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$2 = {
        eventName: 'keydown',
        service: InlineEquationHandler,
        method: 'keydown'
    };
    /** @type {?} */
    var KeydownEquationHandlerProvider = {
        provide: silicateCore.Handlers,
        multi: true,
        useValue: ɵ0$2
    };
    var ɵ1 = {
        eventName: 'click',
        service: InlineEquationHandler,
        method: 'click'
    };
    /** @type {?} */
    var ClickEquationHandlerProvider = {
        provide: silicateCore.Handlers,
        multi: true,
        useValue: ɵ1
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KatexSerializer = /** @class */ (function () {
        function KatexSerializer(rendererFactory) {
            this.renderer2 = rendererFactory.createRenderer(null, null);
        }
        /**
         * Render the KaTeX equations.
         * @param str The brick content.
         */
        /**
         * Render the KaTeX equations.
         * @param {?} str The brick content.
         * @return {?}
         */
        KatexSerializer.prototype.render = /**
         * Render the KaTeX equations.
         * @param {?} str The brick content.
         * @return {?}
         */
        function (str) {
            var _this = this;
            /** @type {?} */
            var segments = str.split('$');
            /** @type {?} */
            var output = '';
            segments.forEach((/**
             * @param {?} segment
             * @param {?} index
             * @return {?}
             */
            function (segment, index) {
                if (index % 2 === 0) {
                    output += segment;
                }
                else {
                    output += katex.renderToString(segment, { displayMode: true });
                }
            }));
            /** @type {?} */
            var sandbox = this.renderer2.createElement('div');
            this.renderer2.setProperty(sandbox, 'innerHTML', output);
            sandbox.querySelectorAll('.katex-display').forEach((/**
             * @param {?} katexElement
             * @return {?}
             */
            function (katexElement) {
                _this.renderer2.setProperty(katexElement, 'outerHTML', katexElement.innerHTML);
            }));
            sandbox.querySelectorAll('.katex').forEach((/**
             * @param {?} katexElement
             * @return {?}
             */
            function (katexElement) {
                // Required to not interfere with the contenteditable of attribute of the wrapper
                _this.renderer2.setAttribute(katexElement, 'contenteditable', 'false');
            }));
            output = sandbox.innerHTML;
            this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
            return output;
        };
        /**
         * Serialize Katex-rendered equations
         * @param str The raw HTML
         */
        /**
         * Serialize Katex-rendered equations
         * @param {?} str The raw HTML
         * @return {?}
         */
        KatexSerializer.prototype.serialize = /**
         * Serialize Katex-rendered equations
         * @param {?} str The raw HTML
         * @return {?}
         */
        function (str) {
            var _this = this;
            // We do not even need to analyse non-katex content
            if (str.indexOf('katex') === -1) {
                return str;
            }
            /** @type {?} */
            var sandbox = this.renderer2.createElement('div');
            this.renderer2.setProperty(sandbox, 'innerHTML', str);
            // Now, we revert every katex HTML to their inline latex equation form ($equation$)
            sandbox.querySelectorAll('.katex').forEach((/**
             * @param {?} katexElement
             * @return {?}
             */
            function (katexElement) {
                /** @type {?} */
                var annotation = katexElement.querySelector('.katex-mathml annotation');
                /** @type {?} */
                var equation = annotation.textContent;
                _this.renderer2.setProperty(katexElement, 'outerHTML', "$" + equation + "$");
            }));
            /** @type {?} */
            var output = sandbox.innerHTML;
            this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
            return output;
        };
        KatexSerializer.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        KatexSerializer.ctorParameters = function () { return [
            { type: core.RendererFactory2 }
        ]; };
        return KatexSerializer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SilicateLatexModule = /** @class */ (function () {
        function SilicateLatexModule() {
        }
        /**
         * @return {?}
         */
        SilicateLatexModule.providers = /**
         * @return {?}
         */
        function () {
            return [
                // Bricks
                EquationBrickProvider,
                // Filters
                KatexFilterProvider,
                // Handlers
                KeydownEquationHandlerProvider,
                ClickEquationHandlerProvider,
                // Serializers
                { provide: silicateCore.Serializers, multi: true, useClass: KatexSerializer }
            ];
        };
        SilicateLatexModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            EquationBrickComponent,
                            EquationDialogComponent
                        ],
                        entryComponents: [
                            EquationBrickComponent,
                            EquationDialogComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            flexLayout.FlexModule,
                            material.MatInputModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatDialogModule,
                            ngKatex.KatexModule,
                            silicateCore.SilicateCoreModule,
                            material.MatGridListModule,
                            material.MatExpansionModule
                        ]
                    },] }
        ];
        return SilicateLatexModule;
    }());

    exports.SilicateLatexModule = SilicateLatexModule;
    exports.ɵa = EquationBrickComponent;
    exports.ɵb = EquationDialogComponent;
    exports.ɵc = EquationBrickProvider;
    exports.ɵd = EquationBrickFactory;
    exports.ɵe = KatexFilterProvider;
    exports.ɵf = KeydownEquationHandlerProvider;
    exports.ɵg = ClickEquationHandlerProvider;
    exports.ɵh = InlineEquationHandler;
    exports.ɵi = KatexSerializer;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mathrix-silicate-latex.umd.js.map
