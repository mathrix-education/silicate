import {Component, ElementRef, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {KatexOptions, render} from 'katex';

@Component({
  selector: 'silicate-katex[equation]',
  template: ``,
})
export class KatexComponent implements OnChanges {
  /** The latex equation. */
  @Input() equation: string;
  /** The katex options. */
  @Input() options?: KatexOptions;
  /** Emit when equation is not valid. */
  @Output() error = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngOnChanges(): void {
    try {
      render(this.equation, this.el.nativeElement, this.options);
    } catch (e) {
      console.error(e);
      this.error.emit();
    }
  }
}
