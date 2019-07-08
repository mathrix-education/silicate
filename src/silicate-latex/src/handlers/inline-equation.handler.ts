import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SelectionService, SilicateCoreModule, SilicateEditableComponent} from '@mathrix/silicate-core';
import * as katex from 'katex';
import {first} from 'rxjs/operators';
import {EquationDialogComponent} from '../dialogs/equation-dialog/equation-dialog.component';


/** @dynamic */
@Injectable({
  providedIn: SilicateCoreModule
})
export class InlineEquationHandler {
  private renderer2: Renderer2;


  constructor(
    private dialog: MatDialog,
    private selection: SelectionService,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }


  private openEquationDialog(actualEquation, source: SilicateEditableComponent, equationElement) {
    return this.dialog
      .open(EquationDialogComponent, {
        width: '800px',
        data: {
          equation: actualEquation
        }
      })
      .afterClosed()
      .pipe(first())
      .subscribe((data) => {
        if (data === undefined && actualEquation === '') {
          this.renderer2.removeChild(equationElement.parentNode, equationElement);
        } else if (data !== undefined && data.equation) {
          const newEquation = data.equation;
          this.renderer2.setProperty(equationElement, 'outerHTML', katex.renderToString(newEquation));
        }

        source.sync();
      });
  }


  keydown($event: KeyboardEvent, source: SilicateEditableComponent) {
    if ($event.key === '$') {
      $event.preventDefault();

      this.document.execCommand('insertHTML', false, '<span id="katex-tmp"></span>');
      const katexTmpElement = this.document.querySelector('#katex-tmp');

      this.openEquationDialog('', source, katexTmpElement);
    }
  }


  click($event: any, source: SilicateEditableComponent) {
    const equationElement = $event.target.closest('span.katex');

    if (equationElement !== null) {
      const equation = equationElement.querySelector('annotation').textContent;
      this.openEquationDialog(equation, source, equationElement);
    }
  }
}
