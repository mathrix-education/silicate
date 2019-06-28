import {ElementRef, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditableEvent, SilicateEditableComponent, SilicateService} from '@mathrix/silicate-core';
import {first} from 'rxjs/operators';
import {LinkDialogComponent} from '../dialogs/link-dialog/link-dialog.component';


@Injectable()
export class OpenLinkDialogService {
  constructor(
    private silicate: SilicateService,
    private dialog: MatDialog
  ) {

  }


  invoke($event: Event | any, source: SilicateEditableComponent) {
    if (!this.silicate.editable) {
      return;
    }

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
