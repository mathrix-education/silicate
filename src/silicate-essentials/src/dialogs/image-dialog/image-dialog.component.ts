import {Component, Inject} from '@angular/core';
import {ImageBrick} from '../../bricks/image-brick/image-brick';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'silicate-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageBrick) {
  }

  /**
   * Return the resize options
   */
  get resizeOptions(): number[] {
    const array = [];
    for (let i = 6; i <= 18; i++) {
      array.push(50 * i);
    }
    return array;
  }

  deleteMaxWidth(): void {
    delete this.data.maxWidth;
  }
}
