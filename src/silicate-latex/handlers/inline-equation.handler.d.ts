import { RendererFactory2 } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectionService, SilicateEditableComponent } from '@mathrix/silicate-core';
/** @dynamic */
export declare class InlineEquationHandler {
    private dialog;
    private selection;
    private document;
    private renderer2;
    constructor(dialog: MatDialog, selection: SelectionService, rendererFactory: RendererFactory2, document: Document);
    private openEquationDialog;
    keydown($event: KeyboardEvent, source: SilicateEditableComponent): void;
    click($event: any, source: SilicateEditableComponent): void;
}
