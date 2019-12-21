import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import * as ko from './ng-katex.options';
import {KatexOptions} from 'katex';

@Component({
  selector: 'ng-katex',
  template: `
    <span [katex]="equation"
          [katex-options]="options"
          (someEvent)="hasError($event)">
    </span>
  `,
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: KatexOptions;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }
}
