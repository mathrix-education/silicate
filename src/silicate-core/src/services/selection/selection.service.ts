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
  private selection(callback, returns = null) {
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
  hasSavedSelection() {
    return this.savedSelection !== null;
  }


  /**
   * Restore the saved selection, if it exists.
   */
  restoreSelection() {
    if (this.savedSelection !== null) {
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
  isSelectionInside(elementRef: ElementRef<HTMLDivElement> | any) {
    return this.selection((selection) => {
      return elementRef.contains(selection.anchorNode) && elementRef.contains(selection.focusNode);
    }, false);
  }


  /**
   * Check if the selection is collapsed (has a zero-length).
   */
  isSelectionCollapsed() {
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
}
