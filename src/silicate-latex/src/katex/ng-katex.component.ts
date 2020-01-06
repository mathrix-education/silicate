import {Component, Input,} from '@angular/core';
import {KatexOptions} from 'katex';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-katex',
  template: `
    <span [equation]="equation"
          [options]="options">
    </span>
  `,
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: KatexOptions;


}
