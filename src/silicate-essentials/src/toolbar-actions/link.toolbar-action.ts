import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SelectionService, SilicateEditableComponent, ToolbarAction} from '@mathrix/silicate-core';
import {LinkDialogComponent} from '../dialogs/link-dialog/link-dialog.component';


/** @dynamic */
@Injectable()
export class LinkToolbarActionService {
  constructor(
    private dialog: MatDialog,
    private selection: SelectionService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  invoke($event, component: SilicateEditableComponent) {
    this.selection.saveSelection();
    this.dialog
      .open(LinkDialogComponent, {
        width: '400px',
        data: {
          href: 'https://mathrix.fr'
        }
      })
      .afterClosed()
      .subscribe(() => component.sync());
  }
}


export const LinkToolbarAction: ToolbarAction = {
  key: 'link',
  icon: 'link',
  service: LinkToolbarActionService,
  method: 'italic'
};
