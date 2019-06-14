import {Component, KeyValueDiffers} from '@angular/core';
import {MatDialog} from '@angular/material';
import {first} from 'rxjs/operators';
import {ImageBrickDialogComponent} from '../../dialogs/image-dialog/image-brick-dialog.component';
import {SilicateService} from '../../services/silicate/silicate.service';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {ImageBrick} from './image-brick';

@Component({
  selector: 'mtx-image-brick',
  templateUrl: './image-brick.component.html',
  styleUrls: ['./image-brick.component.scss']
})
export class ImageBrickComponent extends BaseBrickComponent<ImageBrick> {
  static readonly kind = 'image';
  static readonly icon = 'image';
  static readonly displayName = 'Image';

  constructor(
    protected differs: KeyValueDiffers,
    private silicate: SilicateService,
    private matDialog: MatDialog
  ) {
    super(differs);
  }

  static empty(): ImageBrick {
    return {
      kind: 'image',
      src: 'https://placehold.it/450x200',
      alt: 'Texte alternatif'
    };
  }

  openDialog() {
    if (!this.silicate.editable) {
      return;
    }

    this.matDialog
      .open(ImageBrickDialogComponent, {
        width: '400px',
        data: {...this.data}
      })
      .afterClosed()
      .pipe(first())
      .subscribe((data => {
        if (data) {
          this.data = data;
        }
      }));
  }
}
