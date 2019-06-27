import {Inject, Injectable, Renderer2} from '@angular/core';
import {EditableFilter} from '../../interfaces/editable-filter';
import {EditableFilters} from '../../silicate-core.tokens';


@Injectable()
export class PurifierService {
  constructor(
    private renderer2: Renderer2,
    @Inject(EditableFilters) private filters: EditableFilter[]
  ) {
  }


  /**
   * Purify HTML using a custom rules set.
   * @param dirtyHTML The dirty HTML.
   *
   * Example of rules:
   * [
   *   {
   *     selector: 'p',
   *     allowedAttributes: ['class']
   *   }
   * ]
   *
   * Will only allow <p> tags and will only keep 'class' attribute on those <p> tags.
   * @see SilicateCoreFilters
   */
  purify(dirtyHTML: string) {
    const sandbox: HTMLDivElement = this.renderer2.createElement('div');
    this.renderer2.setProperty(sandbox, 'innerHTML', dirtyHTML);

    // First, we remove all elements which does not match with our selectors.
    const blacklistSelector = this.filters.map(rule => `:not(${rule.selector})`).join('');
    const blacklistedElements = sandbox.querySelectorAll(blacklistSelector);
    blacklistedElements.forEach((blacklistedElement) => {
      /**
       * outerHTML = innerHTML is equivalent to removing the HTML tag
       * Example: <p>test</p> => test
       */
      this.renderer2.setProperty(blacklistedElement, 'outerHTML', blacklistedElement.innerHTML);
    });


    // Then, we remove unwanted attributes (those which are not explicitly whitelisted in the rule set)
    this.filters.forEach(rule => {
      const nodes = sandbox.querySelectorAll(rule.selector);

      nodes.forEach((element: Element) => {
        /**
         * We need to convert element.attributes since it is not an implementation of Array.
         * @see https://www.w3schools.com/jsref/prop_node_attributes.asp
         * @see NamedNodeMap
         */
        const blacklistedAttributes = Array.from(element.attributes)
          .map(attribute => attribute.name)
          .filter(attributeName => !rule.allowedAttributes.includes(attributeName));
        blacklistedAttributes.forEach(blacklistedAttributeName => {
          element.removeAttribute(blacklistedAttributeName);
        });
      });
    });

    // Finally, we get the clean HTML and destroy the sandbox
    const cleanHTML = sandbox.innerHTML;
    this.renderer2.destroyNode(sandbox);

    return cleanHTML;
  }
}
