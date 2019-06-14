import {Component} from '@angular/core';
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
    public silicate: SilicateService,
    private matDialog: MatDialog
  ) {
    super(silicate);
  }

  static empty(): ImageBrick {
    return {
      kind: 'image',
      src: 'https://placehold.it/450x200',
      alt: 'Texte alternatif'
    };
  }

  openDialog() {
    this.matDialog
      .open(ImageBrickDialogComponent, {
        width: '400px',
        data: this.get()
      })
      .afterClosed()
      .pipe(first())
      .subscribe((data => {
        if (data) {
          this.silicate.patch(this.index, data);
        }
      }));
  }
}
