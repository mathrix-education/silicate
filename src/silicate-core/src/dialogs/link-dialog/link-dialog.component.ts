import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Link} from '../../silicate.common';
import {DomHelpers} from '../../helpers/dom-helpers';

@Component({
  selector: 'mtx-link-dialog',
  templateUrl: './link-dialog.component.html',
  styleUrls: ['./link-dialog.component.scss']
})
export class LinkDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LinkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Link
  ) {
    console.log(this.data.elementRef);
  }

  ngOnInit() {
    if (
      !this.data
      || this.data === null
      || this.data === undefined
      || Object.keys(this.data).includes('href')
    ) {

    }
  }

  process() {
    console.log(this.data.elementRef);
    DomHelpers.insertLink(this.data);
    this.dialogRef.close();
  }
}
