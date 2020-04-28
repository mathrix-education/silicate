import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {
  PlatformService,
  SelectionService,
  SilicateCoreModule,
  SilicateDirective
} from '@mathrix-education/silicate-core';
import * as katex from 'katex';
import {first} from 'rxjs/operators';
import {EquationDialogComponent} from '../dialogs/equation-dialog/equation-dialog.component';
import {MatDialog} from '@angular/material/dialog';


/** @dynamic */
@Injectable({
  providedIn: SilicateCoreModule
})
export class InlineEquationHandler {
  private renderer2: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    private dialog: MatDialog,
    private platform: PlatformService,
    private selection: SelectionService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }

  /**
   * Open the equation.
   * @param actualEquation The actual equation.
   * @param source  The source directive.
   * @param equationElement The equation element.
   */
  private openEquationDialog(actualEquation, source: SilicateDirective, equationElement) {
    const caretPosition = this.selection.caretPosition(source.elementRef.nativeElement);
    const nativeElement = source.elementRef.nativeElement;
    return this.dialog.open(EquationDialogComponent,
      {
        width: '800px',
        data: {
          equation: actualEquation
        }
      }).afterClosed().pipe(first())
      .subscribe((data) => {
        if (data !== undefined && data.equation !== '') {
          const newEquation = data.equation;
          const renderedEquation = katex.renderToString(newEquation).replace('class="katex"', 'class="katex" contenteditable="false"');
          this.renderer2.setProperty(
            equationElement,
            'outerHTML',
            renderedEquation
          );
        }
        source.data = source.serialize();
        console.log(source.data);
        source.data = source.data.replace('<span id="katex-tmp"></span>', ''); // TODO: replace with a  removeChild...
        source.data = `${source.data} `;
        source.render(source.data);


        const afterNode = nativeElement.childNodes[nativeElement.childNodes.length - 1]
        this.selection.setAfter(afterNode, 0);

      });
  }

  /**
   * On "dollar" ('$') keydown, we will create a temporary element which will be later replaced by the equation.
   * @param $event The keyboard event.
   * @param source The source SilicateDirective.
   */
  keydown($event: KeyboardEvent, source: SilicateDirective) {
    if ($event.key === '$') {
      $event.preventDefault();

      this.platform.browser(() => {
        this.document.execCommand('insertHTML', false, '<span id="katex-tmp"></span>');
        const katexTmpElement = this.document.querySelector('#katex-tmp');

        this.openEquationDialog('', source, katexTmpElement);
      });
    }
  }

  /**
   * On click on a equation element, we will open the equation editor.
   * @param $event The mouse event.
   * @param source The source SilicateDirective.
   */
  click($event: any & MouseEvent, source: SilicateDirective) {
    const equationElement = $event.target.closest('span.katex');

    if (equationElement !== null && this.platform.isBrowser) {
      const equation = equationElement.querySelector('annotation').textContent;
      this.openEquationDialog(equation, source, equationElement);
    }
  }

}
