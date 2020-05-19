import {Component} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {first} from 'rxjs/operators';
import {ImageDialogComponent} from '../../dialogs/image-dialog/image-dialog.component';
import {ImageBrick} from './image-brick';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'silicate-image-brick',
  templateUrl: './image-brick.component.html',
  styleUrls: ['./image-brick.component.scss']
})
export class ImageBrickComponent extends BaseBrickComponent<ImageBrick> {
  /** If the image is displayed in fullscreen. */
  fullscreen = false;

  constructor(
    private silicate: SilicateService,
    private matDialog: MatDialog) {
    super();
  }

  /**
   * Open the edit dialog or fullscreen according to the edit mode.
   */
  openDialogOrFullscreen() {
    if (!this.silicate.editable) {
      this.fullscreen = !this.fullscreen;
      return;
    }

    this.matDialog
      .open(ImageDialogComponent, {
        width: '500px',
        data: {...this.data}
      })
      .afterClosed()
      .pipe(first())
      .subscribe((data => {
        if (data) {
          this.data = data;
          super.ngDoCheck();
        }
      }));
  }

  focus(): void {
  }
}
