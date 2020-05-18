import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable} from '@angular/core';


/**
 * This service allow to manipulate the document.selection object.
 * @dynamic
 */
@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private savedSelection;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  /**
   * Safely interact with the selection.
   * @param callback The callback to execute on the selection.
   * @param returns The default return value of the callback, if document.selection() is not available.
   */
  selection(callback, returns = null) {
    const selection = this.document.getSelection();

    if (!selection) {
      return returns;
    } else {
      return callback(selection);
    }
  }

  /**
   * Save the current selection.
   */
  saveSelection() {
    this.selection((selection) => {
      if (selection.getRangeAt && selection.rangeCount) {
        this.savedSelection = selection.getRangeAt(0);
      }
    });
  }


  /**
   * Check whether there is a saved selection.
   */
  hasSavedSelection(): boolean {
    return this.savedSelection !== null;
  }


  /**
   * Restore the saved selection, if it exists.
   */
  restoreSelection(): void {
    if (this.hasSavedSelection()) {
      this.selection((selection) => {
        selection.removeAllRanges();
        selection.addRange(this.savedSelection);
        this.savedSelection = null;
      });
    }
  }


  /**
   * Check if the selection is inside a given element.
   * @param elementRef The element reference.
   */
  isSelectionInside(elementRef: ElementRef<HTMLElement> | any): boolean {
    return this.selection((selection) => {
      return elementRef.nativeElement.contains(selection.anchorNode)
        && elementRef.nativeElement.contains(selection.focusNode);
    }, false);
  }


  /**
   * Check if the selection is collapsed (has a zero-length).
   */
  isSelectionCollapsed(): boolean {
    return this.selection((selection) => {
      return selection.isCollapsed;
    }, false);
  }


  /**
   * Get the selection rectangle (absolute coordinates).
   */
  getSelectionRectangle(): ClientRect | DOMRect {
    return this.selection((selection) => {
      return selection.getRangeAt(0).getBoundingClientRect();
    }, false);
  }

  /**
   *
   * @param node The node.
   * @param offset The ofset inside the node.
   * @param collapse If collapse is enabled.
   */
  setAfter(node: Node, offset: number = 0, collapse = false) {
    const range = this.document.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset);

    this.selection((selection) => {
      selection.removeAllRanges();
      selection.addRange(range);
    });
  }
}
