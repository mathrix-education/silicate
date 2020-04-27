import {Component, ElementRef, HostListener, Inject, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('equation') equation;
  elementRef: ElementRef<HTMLElement> = null;
  equationFormFieldFocused = false;
  symbols = LATEX_SYMBOLS;
  snippets = LATEX_SNIPPETS;
  /** The last key pressed. */
  private KeyPressed: string;

  constructor(
    private renderer2: Renderer2,
    public dialogRef: MatDialogRef<EquationDialogComponent>,
    @Inject(DOCUMENT) private document: Document,
    @Inject(MatDialogRef) private matDialogRef,
    @Inject(MAT_DIALOG_DATA) public data: { equation: string, description: string, enableDescription: boolean }
  ) {
  }

  /**
   * listen to keydown event, if the Shift key is currently pressed, do nothing, else, close the dialog on Enter.
   * @param event The keyboard event
   */
  @HostListener('keydown', ['$event'])
  keydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && (this.KeyPressed !== 'Shift')) {
      event.preventDefault();
      this.matDialogRef.close(this.data);
    }
    this.KeyPressed = event.key;
  }

  /**
   * Clear the keyPressed variable if shit is not pressed anymore.
   */
  @HostListener('keyup', ['$event'])
  keyup(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      this.KeyPressed = null;
    }
  }


  applySnippet($event: MouseEvent, latexSnippet: string) {
    if (this.equationFormFieldFocused) {
      $event.preventDefault();
      this.document.execCommand('insertText', false, latexSnippet);
    }
    // TODO: Insert the snippet at the end
  }

  focusEquation() {
    this.equation.nativeElement.focus();
  }

  delete() {
    this.renderer2.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
    this.dialogRef.close();
  }
}
