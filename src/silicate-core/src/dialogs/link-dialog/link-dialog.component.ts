import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Link} from '../../silicate.common';

@Component({
  selector: 'mtx-link-dialog',
  templateUrl: './link-dialog.component.html',
  styleUrls: ['./link-dialog.component.scss']
})
export class LinkDialogComponent implements OnInit {
  data: Link = {
    href: 'https://mathrix.fr',
    target: '_blank'
  };

  constructor(public dialogRef: MatDialogRef<LinkDialogComponent>) {
  }

  ngOnInit() {
  }

}
