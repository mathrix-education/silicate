import {Component} from '@angular/core';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {BaseBrickToolbarComponent} from '../base-brick-toolbar/base-brick-toolbar.component';
import {MatDialog} from '@angular/material';
import {LinkDialogComponent} from '../../dialogs/link-dialog/link-dialog.component';
import {Link} from '../../silicate.common';
import {DomHelpers} from '../../helpers/dom-helpers';

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
    const dialogRef = this.dialog.open(LinkDialogComponent);
    dialogRef.afterClosed().subscribe((data: Link) => {
      console.log(Object.keys(data));
      DomHelpers.insertLink(data);
    });
  }
}
