import {Component, HostListener, Inject, Renderer2, ViewChild} from '@angular/core';
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
  equationFormFieldFocused = false;
  readonly symbols = LATEX_SYMBOLS;
  readonly snippets = LATEX_SNIPPETS;
  /** The last key pressed. */
  private KeyPressed: string;
  /** The original equation, used with close without saving. */
  private readonly originalData = JSON.parse(JSON.stringify(this.data));

  constructor(
    private readonly renderer2: Renderer2,
    public readonly dialogRef: MatDialogRef<EquationDialogComponent>,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(MAT_DIALOG_DATA) public data: { equation: string, description: string, enableDescription: boolean }
  ) {
  }

  /**
   * listen to keydown event, if the Shift key is currently pressed, do nothing, else, close the dialog on Enter.
   * If Escape, prevent default, (material default escape close without data).
   * @param event The keyboard event
   */
  @HostListener('keydown', ['$event'])
  keydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.KeyPressed !== 'Shift') {
      event.preventDefault();
      event.stopPropagation();
      this.dialogRef.close(this.data);
    } else if (event.key === 'Escape') {
      this.closeWithoutSaving();
    }
    this.KeyPressed = event.key;
  }

  /**
   * Clear the keyPressed variable if shit is not pressed anymore.
   */
  @HostListener('keyup', ['$event'])
  keyup(event: KeyboardEvent): void {
    if (event.key === 'Shift') {
      this.KeyPressed = null;
    }
  }

  applySnippet($event: MouseEvent, latexSnippet: string): void {
    if (this.equationFormFieldFocused) {
      $event.preventDefault();
      this.document.execCommand('insertText', false, latexSnippet);
    }
    // TODO: Insert the snippet at the end
  }

  focusEquation(): void {
    this.equation.nativeElement.focus();
  }

  /**
   * Close without saving.
   */
  closeWithoutSaving(): void {
    this.dialogRef.close(this.originalData);
  }
}
