import { ElementRef, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material';
/** @dynamic */
export declare class EquationDialogComponent {
    private renderer2;
    dialogRef: MatDialogRef<EquationDialogComponent>;
    private document;
    data: any;
    elementRef: ElementRef<HTMLElement>;
    equationFormFieldFocused: boolean;
    symbols: string[];
    snippets: string[];
    constructor(renderer2: Renderer2, dialogRef: MatDialogRef<EquationDialogComponent>, document: Document, data: any);
    applySnippet($event: MouseEvent, latexSnippet: string): void;
    delete(): void;
}
