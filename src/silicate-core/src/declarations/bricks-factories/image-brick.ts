import {ImageBrickComponent} from '../../bricks/image-brick/image-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';


export interface ImageBrick extends BaseBrick {
  kind: 'image';
  src: string;
  alt: string;
}


export class ImageBrickFactory extends BaseBrickFactory {
  static readonly kind = 'image';
  static readonly icon = 'image';
  static readonly displayName = 'Image';
  static readonly component = ImageBrickComponent;


  static make(): ImageBrick {
    return ImageBrickFactory.withUuid({
      kind: 'image',
      src: 'https://placehold.it/300x120',
      alt: 'Texte alternatif'
    });
  }
}
