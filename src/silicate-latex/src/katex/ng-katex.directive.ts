import {
  Directive,
  ElementRef,
  EventEmitter,
  Input, OnChanges,
  Output,
} from '@angular/core';
import * as ko from './ng-katex.options';
import {KatexService} from './ng-katex.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[katex]',
})
export class KatexDirective implements OnChanges {

  @Input('katex') equation: string;
  @Input('katex-options') options: ko.KatexOptions;

  @Output() onError = new EventEmitter<any>();

  constructor(private el: ElementRef,
              private katexService: KatexService) {}

  ngOnChanges() {
    try {
      this.katexService.render(this.equation, this.el, this.options);
    } catch (e) {
      this.onError.emit(e);
    }
  }

}
