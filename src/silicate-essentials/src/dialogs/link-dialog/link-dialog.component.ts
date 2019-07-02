import {DOCUMENT} from '@angular/common';
import {Component, ElementRef, Inject, Renderer2} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SelectionService} from '@mathrix/silicate-core';


/** @dynamic */
@Component({
  selector: 'silicate-link-dialog',
  templateUrl: './link-dialog.component.html',
  styleUrls: ['./link-dialog.component.scss']
})
export class LinkDialogComponent {
  elementRef: ElementRef<HTMLLinkElement> = null;
  href = 'https://mathrix.fr';
  target = '_blank';


  constructor(
    private renderer2: Renderer2,
    private selection: SelectionService,
    public dialogRef: MatDialogRef<LinkDialogComponent>,
    @Inject(DOCUMENT) private document: Document,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    Object.keys(data).forEach(k => {
      this[k] = data[k];
    });
  }


  /**
   * Create or update a link.
   */
  link() {
    if (this.selection.hasSavedSelection()) {
      this.selection.restoreSelection();
    }

    if (!this.elementRef) {
      /**
       * If the elementRef is not set (we are creating a link), we will first create a link with an improbable, identifiable href
       * then we will update it with the right href and target. Thus, we avoid collision problems.
       */
      const tmpHref = 'silicate://nolink';

      // We create link with the tmpHref with an improbable href.
      this.document.execCommand('createLink', false, tmpHref);
      const nativeLinkElement: HTMLLinkElement = this.document.querySelector(`a[href="${tmpHref}"]`);

      if (!nativeLinkElement) {
        throw new Error(`Unable to find the element with tmpHref ${tmpHref}`);
      }

      this.elementRef = new ElementRef<HTMLLinkElement>(nativeLinkElement);
    }

    this.renderer2.setAttribute(this.elementRef.nativeElement, 'href', this.href);
    this.renderer2.setAttribute(this.elementRef.nativeElement, 'target', this.target);

    this.dialogRef.close();
  }


  /**
   * Remove a link by using the outerHTML = innerHTML technique.
   */
  unlink() {
    this.renderer2.setProperty(
      this.elementRef.nativeElement,
      'outerHTML',
      this.elementRef.nativeElement.innerHTML
    );

    this.dialogRef.close();
  }
}
