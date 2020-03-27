import {Component, Input} from '@angular/core';
import {KatexOptions} from 'katex';

@Component({
  selector: 'silicate-katex',
  template: `
    <span silicateKatex [equation]="equation"
          [options]="options">
    </span>
  `,
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: KatexOptions;

}
