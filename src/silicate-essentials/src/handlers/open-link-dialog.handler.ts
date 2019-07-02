import {ElementRef, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SilicateEditableComponent} from '@mathrix/silicate-core';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {first} from 'rxjs/operators';
import {LinkDialogComponent} from '../dialogs/link-dialog/link-dialog.component';


@Injectable({
  providedIn: SilicateCoreModule
})
export class OpenLinkDialogHandler {
  constructor(private dialog: MatDialog) {
  }


  invoke($event: Event | any, source: SilicateEditableComponent) {
    const targetLink = $event.target.closest('a');
    if (targetLink !== null) {
      const link = {
        elementRef: new ElementRef(targetLink),
        href: targetLink.getAttribute('href'),
        target: targetLink.getAttribute('target')
      };

      this.dialog
        .open(LinkDialogComponent, {
          width: '400px',
          data: link
        })
        .afterClosed()
        .pipe(first())
        .subscribe(() => source.sync());
    }
  }
}
