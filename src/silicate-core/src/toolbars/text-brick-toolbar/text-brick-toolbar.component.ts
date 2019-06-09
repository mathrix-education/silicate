import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {LinkDialogComponent} from '../../dialogs/link-dialog/link-dialog.component';
import {DomHelpers} from '../../helpers/dom-helpers';
import {BaseBrickToolbarComponent} from '../base-brick-toolbar/base-brick-toolbar.component';

@Component({
  selector: 'mtx-text-brick-toolbar',
  templateUrl: './text-brick-toolbar.component.html',
  styleUrls: ['./text-brick-toolbar.component.scss']
})
export class TextBrickToolbarComponent extends BaseBrickToolbarComponent<TextBrickComponent> {
  constructor(private dialog: MatDialog) {
    super();
  }

  openLinkDialog() {
    DomHelpers.saveSelection();

    this.dialog.open(LinkDialogComponent, {
      width: '400px',
      data: {
        href: 'https://mathrix.fr',
        target: '_blank'
      }
    });
  }
}
