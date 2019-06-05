import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {ImageBrick} from './image-brick';
import {MatDialog} from '@angular/material';
import {ImageBrickDialogComponent} from './image-brick-dialog.component';

@Component({
  selector: 'mtx-image-brick',
  templateUrl: './image-brick.component.html',
  styleUrls: ['./image-brick.component.scss']
})
export class ImageBrickComponent extends BaseBrickComponent implements ImageBrick, OnInit {
  alt: string;
  kind: 'image';
  src: string;

  static empty(): ImageBrick {
    return {
      kind: 'image',
      src: 'https://placehold.it/450x200',
      alt: null
    };
  }

  constructor(private matDialog: MatDialog) {
    super();
  }

  ngOnInit() {
  }

  openDialog() {
    if (!this.editable) {
      return;
    }

    const dialogRef = this.matDialog.open(ImageBrickDialogComponent, {
      width: '400px',
      data: this.serialize()
    });

    dialogRef.afterClosed().subscribe((data: ImageBrick) => {
      this.assign(data);
    });
  }

  serialize() {
    return {
      kind: this.kind,
      src: this.src,
      alt: this.alt
    };
  }
}
