import {
  Directive,
  ElementRef,
  EventEmitter,
  Input, OnChanges,
  Output,
} from '@angular/core';
import {KatexOptions, render} from 'katex';


@Directive({
  selector: '[silicateKatex]',
})
export class KatexDirective implements OnChanges {

  @Input() equation: string;
  @Input() options: KatexOptions;

  @Output() error = new EventEmitter<any>();

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    try {
      render(this.equation, this.el.nativeElement, this.options);
    } catch (e) {
      this.error.emit(e);
    }
  }

}
