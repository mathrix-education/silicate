import {Component, ElementRef, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SelectionService} from '../../services/selection/selection.service';

@Component({
  selector: 'mtx-link-dialog',
  templateUrl: './link-dialog.component.html',
  styleUrls: ['./link-dialog.component.scss']
})
export class LinkDialogComponent {
  elementRef: ElementRef<HTMLLinkElement> = null;
  href = 'https://mathrix.fr';
  target = '_blank';

  constructor(
    private selection: SelectionService,
    public dialogRef: MatDialogRef<LinkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    Object.keys(data).forEach(k => {
      this[k] = data[k];
    });
  }

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
      document.execCommand('createLink', false, tmpHref);
      const nativeLinkElement: HTMLLinkElement = document.querySelector(`a[href="${tmpHref}"]`);

      if (!nativeLinkElement) {
        throw new Error(`Unable to find the element with tmpHref ${tmpHref}`);
      }

      this.elementRef = new ElementRef<HTMLLinkElement>(nativeLinkElement);
    }

    this.elementRef.nativeElement.setAttribute('href', this.href);
    this.elementRef.nativeElement.setAttribute('target', this.target);
    this.dialogRef.close();
  }

  unlink() {
    const e = this.elementRef.nativeElement;
    e.outerHTML = e.innerHTML;
    this.dialogRef.close();
  }
}
