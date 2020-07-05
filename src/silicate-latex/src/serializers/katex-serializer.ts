import {Serializer} from '@mathrix-education/silicate-core';
import * as katex from 'katex';
import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()
export class KatexSerializer implements Serializer {
  private renderer2: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }

  /**
   * Render the KaTeX equations.
   * @param str The brick content.
   */
  render(str: string): string {
    if (!str) {
      return '';
    }

    let output = '';
    const segments = str.split('$');

    segments.forEach((segment: string, index: number) => {
      if (index % 2 === 0) {
        output += segment;
      } else {
        // Unescape the '<' and '>' and '&' chars since the were escape by the DOM parser and may be math symbols
        segment = segment.replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        output += katex.renderToString(segment, {
          displayMode: this.platform.isBrowser,
        });
      }
    });

    this.platform.browser(() => {
      /*
       * We can only do our .katex-display => .katex trick if we are in a browser, since we highly rely on the
       * sandbox.querySelectorAll method. A workaround might be possible with the help of some regex, but for now it is
       * not really worth it.
       */
      const sandbox: HTMLDivElement = this.renderer2.createElement('div');
      this.renderer2.setProperty(sandbox, 'innerHTML', output);

      sandbox.querySelectorAll('.katex-display').forEach(katexElement => {
        this.renderer2.setProperty(katexElement, 'outerHTML', katexElement.innerHTML);
      });

      sandbox.querySelectorAll('.katex').forEach(katexElement => {
      });

      output = sandbox.innerHTML;
      this.renderer2.removeChild(this.renderer2.parentNode(sandbox), sandbox);
    });

    return output;
  }
}
