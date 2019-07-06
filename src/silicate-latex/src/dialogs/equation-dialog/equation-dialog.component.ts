import {Component, ElementRef, Inject, Renderer2} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as katex from 'katex';


@Component({
  selector: 'silicate-equation-dialog',
  templateUrl: './equation-dialog.component.html',
  styleUrls: ['./equation-dialog.component.scss']
})
export class EquationDialogComponent {
  elementRef: ElementRef<HTMLElement> = null;
  property: 'outerHTML' | 'innerHTML' = 'outerHTML';
  equation: string;
  displayMode = false;

  constructor(
    private renderer2: Renderer2,
    public dialogRef: MatDialogRef<EquationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    Object.keys(data).forEach(k => {
      this[k] = data[k];
    });
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
