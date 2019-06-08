import {Link} from '../silicate.common';

export class DomHelpers {
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
    const focusNode = document.getSelection().focusNode;

    // Create the link
    document.execCommand('createLink', false, link.href);

    // Apply the target attribute if needed.
    // Known bug: will probably fail if we try to add a target="blank" on multiple links with the same href in the same brick.
    const closestBrick = focusNode.parentElement.closest(`[contenteditable=true]`);
    const insertedLink = closestBrick.querySelector(`a[href="${link.href}"]`);
    insertedLink.setAttribute('target', link.target);
  }
}
