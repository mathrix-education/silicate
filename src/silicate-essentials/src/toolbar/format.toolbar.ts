import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SelectionService, SilicateCoreModule, SilicateEditableComponent} from '@mathrix/silicate-core';
import {LinkDialogComponent} from '../dialogs/link-dialog/link-dialog.component';


/** @dynamic */
@Injectable({
  providedIn: SilicateCoreModule
})
export class FormatToolbar {
  constructor(
    private dialog: MatDialog,
    private selection: SelectionService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  bold($event, component: SilicateEditableComponent) {
    this.selection.saveSelection();
    this.document.execCommand('bold', false);
    component.sync();
    this.selection.restoreSelection();
  }


  italic($event, component: SilicateEditableComponent) {
    this.selection.saveSelection();
    document.execCommand('italic', false);
    component.sync();
    this.selection.restoreSelection();
  }


  link($event, component: SilicateEditableComponent) {
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
