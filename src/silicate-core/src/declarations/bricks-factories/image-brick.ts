import {Injectable} from '@angular/core';
import {ImageBrickComponent} from '../../bricks/image-brick/image-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';


export interface ImageBrick extends BaseBrick {
  kind: 'image';
  src: string;
  alt: string;
}


@Injectable({
  providedIn: 'root'
})
export class ImageBrickFactory extends BaseBrickFactory<ImageBrick> {
  readonly kind = 'image';
  readonly icon = 'image';
  readonly displayName = 'Image';
  readonly component = ImageBrickComponent;


  make(): ImageBrick {
    return this.withUuid({
      kind: 'image',
      src: 'https://placehold.it/300x120',
      alt: 'Texte alternatif'
    });
  }
}
