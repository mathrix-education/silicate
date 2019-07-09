import {Serializer} from '@mathrix/silicate-core';
import * as katex from 'katex';
import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()
export class KatexSerializer implements Serializer {
  private renderer2: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }

  /**
   * Render the KaTeX equations.
   * @param str The brick content.
   */
  render(str: string): string {
    // Reference: https://stackoverflow.com/a/34064434
    str = new DOMParser().parseFromString(str, 'text/html').documentElement.textContent;

    const segments = str.split('$');
    let output = '';

    segments.forEach((segment: string, index: number) => {
      if (index % 2 === 0) {
        output += segment;
      } else {
        output += katex.renderToString(segment, {displayMode: true});
      }
    });

    const sandbox: HTMLDivElement = this.renderer2.createElement('div');
    this.renderer2.setProperty(sandbox, 'innerHTML', output);
    sandbox.querySelectorAll('.katex-display').forEach(katexElement => {
      this.renderer2.setProperty(katexElement, 'outerHTML', katexElement.innerHTML);
    });
    sandbox.querySelectorAll('.katex').forEach(katexElement => {
      // Required to not interfere with the contenteditable of attribute of the wrapper
      this.renderer2.setAttribute(katexElement, 'contenteditable', 'false');
    });

    output = sandbox.innerHTML;
    this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);

    return output;
  }

  /**
   * Serialize Katex-rendered equations
   * @param str The raw HTML
   */
  serialize(str: string): string {
    // We do not even need to analyse non-katex content
    if (str.indexOf('katex') === -1) {
      return str;
    }

    const sandbox: HTMLDivElement = this.renderer2.createElement('div');
    this.renderer2.setProperty(sandbox, 'innerHTML', str);

    // Now, we revert every katex HTML to their inline latex equation form ($equation$)
    sandbox.querySelectorAll('.katex').forEach((katexElement: HTMLElement) => {
      const annotation: HTMLElement = katexElement.querySelector('.katex-mathml annotation');
      const equation = annotation.textContent;
      this.renderer2.setProperty(katexElement, 'outerHTML', `$${equation}$`);
    });

    const output = sandbox.innerHTML;
    this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);

    return output;
  }
}
