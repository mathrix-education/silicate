import {Component, Input,} from '@angular/core';
import {KatexOptions} from 'katex';

@Component({
  selector: 'ng-katex',
  template: `
    <span [katex]="equation"
          [katex-options]="options">
    </span>
  `,
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: KatexOptions;


}
