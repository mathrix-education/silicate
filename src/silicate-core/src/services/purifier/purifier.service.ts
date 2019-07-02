import {Inject, Injectable, Optional, Renderer2} from '@angular/core';
import {Filter} from '../../interfaces/filter';
import {Filters} from '../../silicate-core.tokens';


@Injectable()
export class PurifierService {
  constructor(
    private renderer2: Renderer2,
    @Optional() @Inject(Filters) private readonly filters: Filter[]
  ) {
    if (!this.filters) {
      this.filters = [];
    }
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
    if (this.filters.length === 0) {
      return dirtyHTML;
    }

    const sandbox: HTMLDivElement = this.renderer2.createElement('div');
    this.renderer2.setProperty(sandbox, 'innerHTML', dirtyHTML);

    // First, we remove all elements which does not match with our selectors.
    /**
     * Since there are limitation oif the :not() CSS pseudo selector, we have to walk around: firstly, we get all
     * elements in the wrapper, then we find the whitelisted elements. Finally we convert both of them to array to
     * differenciate them.
     */
    const allElements = Array.from(sandbox.querySelectorAll('*'));
    const whitelistSelector = this.filters.map(rule => rule.selector).join(',');
    const whitelistedElements = Array.from(sandbox.querySelectorAll(whitelistSelector));
    const blacklistedElements = allElements.filter(e => !whitelistedElements.includes(e));

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
