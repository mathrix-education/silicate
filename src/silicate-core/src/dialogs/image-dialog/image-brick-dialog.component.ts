import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ImageBrick} from '../../declarations/bricks-factories/image-brick';


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
