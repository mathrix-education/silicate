import {Injectable} from '@angular/core';
import {SilicateEditableComponent} from '@mathrix/silicate-core/src/components/silicate-editable/silicate-editable.component';
import * as katex from 'katex';


@Injectable()
export class InlineEquationSerializer {
  private readonly LATEX_REGEXP = /[a-zA-Z0-9]/;


  constructor(private editableComponentRef: SilicateEditableComponent) {
  }


  display() {
    const content = this.editableComponentRef.content;
    katex.renderToString('f(x) = x^2');
  }
}
