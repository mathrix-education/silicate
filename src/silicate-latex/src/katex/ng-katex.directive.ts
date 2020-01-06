import {
  Directive,
  ElementRef,
  EventEmitter,
  Input, OnChanges,
  Output,
} from '@angular/core';
import {KatexService} from './ng-katex.service';
import {KatexOptions} from './ng-katex.options';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[katex]',
})
export class KatexDirective implements OnChanges {

  @Input('equation') equation: string;
  @Input() options: KatexOptions;

  @Output() error = new EventEmitter<any>();

  constructor(private el: ElementRef,
              private katexService: KatexService) {}

  ngOnChanges() {
    try {
      this.katexService.render(this.equation, this.el, this.options);
    } catch (e) {
      this.error.emit(e);
    }
  }

}
