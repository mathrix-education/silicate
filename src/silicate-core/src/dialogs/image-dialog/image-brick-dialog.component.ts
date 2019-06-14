import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ImageBrick} from '../../bricks/image-brick/image-brick';
import {ImageBrickComponent} from '../../bricks/image-brick/image-brick.component';

@Component({
  selector: 'mtx-image-brick-dialog',
  templateUrl: './image-brick-dialog.component.html',
  styleUrls: ['./image-brick-dialog.component.scss']
})
export class ImageBrickDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ImageBrickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageBrick
  ) {
  }
}
