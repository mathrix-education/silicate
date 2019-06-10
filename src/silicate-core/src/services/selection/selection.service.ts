import {isPlatformBrowser} from '@angular/common';
import {ElementRef, Inject, Injectable, PLATFORM_ID} from '@angular/core';

@Injectable()
export class SelectionService {
  private savedSelection;

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  private getSelection(): Selection {
    if (isPlatformBrowser(this.platformId)) {
      return window.getSelection();
    } else {
      return null;
    }
  }

  private selection(callback, returns = null) {
    const selection = this.getSelection();

    if (!selection) {
      return returns;
    } else {
      return callback(selection);
    }
  }

  hasSavedSelection() {
    return this.savedSelection !== null;
  }

  saveSelection() {
    this.selection((selection) => {
      if (selection.getRangeAt && selection.rangeCount) {
        this.savedSelection = selection.getRangeAt(0);
      }
    });
  }

  restoreSelection() {
    this.selection((selection) => {
      if (this.savedSelection !== null) {
        selection.removeAllRanges();
        selection.addRange(this.savedSelection);
        this.savedSelection = null;
      }
    });
  }

  isSelectionInside(element: ElementRef<HTMLDivElement> | any) {
    return this.selection((selection) => {
      return element.contains(selection.anchorNode) && element.contains(selection.focusNode);
    }, false);
  }

  isSelectionCollapsed() {
    return this.selection((selection) => {
      return selection.isCollapsed;
    }, false);
  }

  getSelectionRectangle(): ClientRect | DOMRect {
    return this.selection((selection) => {
      return selection.getRangeAt(0).getBoundingClientRect();
    }, false);
  }
}
