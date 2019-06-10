import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ImageBrickDialogComponent} from '../../dialogs/image-dialog/image-brick-dialog.component';
import {SilicateService} from '../../services/silicate/silicate.service';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {BrickDeclaration} from '../base-brick/brick-declaration';
import {ImageBrick} from './image-brick';

@Component({
  selector: 'mtx-image-brick',
  templateUrl: './image-brick.component.html',
  styleUrls: ['./image-brick.component.scss']
})
export class ImageBrickComponent extends BaseBrickComponent<ImageBrick> {
  static declaration: BrickDeclaration = {
    kind: 'image',
    name: 'Image',
    icon: 'image',
    component: ImageBrickComponent,
    toolbar: null
  };

  constructor(
    public silicate: SilicateService,
    private matDialog: MatDialog
  ) {
    super();
  }

  static empty(): ImageBrick {
    return {
      kind: 'image',
      src: 'https://placehold.it/450x200',
      alt: 'Texte alternatif'
    };
  }

  openDialog() {
    const dialogRef = this.matDialog.open(ImageBrickDialogComponent, {
      width: '400px',
      data: this.serialize()
    });

    dialogRef.afterClosed().subscribe((data: ImageBrick) => {
      if (this.dirty) {
        this.assign(data);
        this.brickChange.emit(this.serialize());
      }
    });
  }

  serialize() {
    return this.model;
  }
}
