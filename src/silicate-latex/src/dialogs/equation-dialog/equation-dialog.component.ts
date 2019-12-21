import {Component, ElementRef, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {LATEX_SYMBOLS} from './equation-dialog.symbols';
import {LATEX_SNIPPETS} from './equation-dialog.snippets';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


/** @dynamic */
@Component({
  selector: 'silicate-equation-dialog',
  templateUrl: './equation-dialog.component.html',
  styleUrls: ['./equation-dialog.component.scss']
})
export class EquationDialogComponent {
  elementRef: ElementRef<HTMLElement> = null;
  equationFormFieldFocused = false;
  symbols = LATEX_SYMBOLS;
  snippets = LATEX_SNIPPETS;

  constructor(
    private renderer2: Renderer2,
    public dialogRef: MatDialogRef<EquationDialogComponent>,
    @Inject(DOCUMENT) private document: Document,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  applySnippet($event: MouseEvent, latexSnippet: string) {
    if (this.equationFormFieldFocused) {
      $event.preventDefault();
      this.document.execCommand('insertText', false, latexSnippet);
    }
    // TODO: Insert the snippet at the end
  }

  delete() {
    this.renderer2.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
    this.dialogRef.close();
  }
}
