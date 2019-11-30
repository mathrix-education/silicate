import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {first} from 'rxjs/operators';
import {ImageDialogComponent} from '../../dialogs/image-dialog/image-dialog.component';
import {ImageBrick} from './image-brick';


@Component({
  selector: 'silicate-image-brick',
  templateUrl: './image-brick.component.html',
  styleUrls: ['./image-brick.component.scss']
})
export class ImageBrickComponent extends BaseBrickComponent<ImageBrick> {
  constructor(
    private silicate: SilicateService,
    private matDialog: MatDialog) {
    super();
  }


  openDialog() {
    if (!this.silicate.editable) {
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
