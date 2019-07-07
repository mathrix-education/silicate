import {AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as katex from 'katex';
import {DOCUMENT} from '@angular/common';


/** @dynamic */
@Component({
  selector: 'silicate-equation-dialog',
  templateUrl: './equation-dialog.component.html',
  styleUrls: ['./equation-dialog.component.scss']
})
export class EquationDialogComponent {
  elementRef: ElementRef<HTMLElement> = null;
  property: 'outerHTML' | 'innerHTML' = 'outerHTML';

  snippetsActive = false;
  /** The LaTeX snippets */
  snippets: string[] = [
    '\\frac{a}{b}',
    '\\sum',
    '\\int',
    '\\begin{bmatrix}\n' +
      '  a & b \\\\\n' +
      '  c & d \n' +
      '\\end{bmatrix}'
  ];

  equation: string;
  displayMode = false;

  constructor(
    private renderer2: Renderer2,
    public dialogRef: MatDialogRef<EquationDialogComponent>,
    @Inject(DOCUMENT) private document: Document,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    Object.keys(data).forEach(k => {
      this[k] = data[k];
    });
  }

  applySnippet($event: MouseEvent, latexSnippet: string) {
    $event.preventDefault();
    this.document.execCommand('insertText', false, latexSnippet);
  }

  apply() {
    const compiledEquation = katex.renderToString(this.equation, {displayMode: this.displayMode});
    this.renderer2.setProperty(this.elementRef.nativeElement, this.property, compiledEquation);
    this.dialogRef.close();
  }

  delete() {
    this.renderer2.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
    this.dialogRef.close();
  }
}
