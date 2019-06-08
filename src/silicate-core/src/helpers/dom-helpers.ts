import {Link} from '../silicate.common';
import {ElementRef} from '@angular/core';

export class DomHelpers {
  static rangeBuffer: Range = null;

  static hasSavedSelection(): boolean {
    return DomHelpers.rangeBuffer !== null;
  }

  /**
   * Save the current selection into the rangeBuffer.
   * @link https://gist.github.com/dantaex/543e721be845c18d2f92652c0ebe06aa
   */
  static saveSelection() {
    if (window.getSelection) {
      const sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        DomHelpers.rangeBuffer = sel.getRangeAt(0);
      }
    }
  }

  /**
   * Restore the saved selection from the rangeBuffer.
   * @link https://gist.github.com/dantaex/543e721be845c18d2f92652c0ebe06aa
   */
  static restoreSelection() {
    if (DomHelpers.rangeBuffer) {
      if (window.getSelection) {
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(DomHelpers.rangeBuffer);
      }
    }

    DomHelpers.rangeBuffer = null;
  }

  /**
   * @link https://stackoverflow.com/a/31259386/3728261
   */
  static stripHtml(rawHtml: string, allowedTags: string) {
    allowedTags = (((allowedTags || '') + '')
      .toLowerCase()
      .match(/<[a-z][a-z0-9]*>/g) || [])
      .join('');

    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    const comments = /<!--[\s\S]*?-->/gi;

    return rawHtml.replace(comments, '')
      .replace(tags, ($0, $1) => allowedTags.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '')
      .replace(/&nbsp;/g, ' ')
      .trim();
  }

  /**
   * Insert a link in a brick
   */
  static insertLink(link: Link) {
    if (DomHelpers.hasSavedSelection()) {
      DomHelpers.restoreSelection();
    }

    if (!link.elementRef) {
      /**
       * If the elementRef is not set (we are creating a link), we will first create a link with an improbable, identifiable href
       * then we will update it with the right href and target. Thus, we avoid collision problems.
       */
      const tmpHref = 'http://nolink';
      // We create link with the tmpHref with an improbable href.
      document.execCommand('createLink', false, tmpHref);
      const nativeLinkElement = document.querySelector(`a[href="${tmpHref}"]`);

      if (!nativeLinkElement) {
        throw new Error(`Unable to find the element with tmpHref ${tmpHref}`);
      }

      link.elementRef = new ElementRef<Element>(nativeLinkElement);
    }

    link.elementRef.nativeElement.setAttribute('href', link.href);
    link.elementRef.nativeElement.setAttribute('target', link.target);
  }
}
