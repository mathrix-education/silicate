import {Injectable} from '@angular/core';
import {BaseBrickFactory} from '@mathrix/silicate-core';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {ImageBrick} from './image-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class ImageBrickFactory extends BaseBrickFactory<ImageBrick> {
  make(): ImageBrick {
    return this.withUuid({
      kind: 'image',
      src: 'https://placehold.it/300x120',
      alt: 'Texte alternatif'
    });
  }
}
