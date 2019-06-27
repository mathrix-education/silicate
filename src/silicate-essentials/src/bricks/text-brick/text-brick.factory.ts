import {Injectable} from '@angular/core';
import {BaseBrickFactory} from '@mathrix/silicate-core';
import {TextBrick} from './text-brick';


@Injectable()
export class TextBrickFactory extends BaseBrickFactory<TextBrick> {
  make(): TextBrick {
    return this.withUuid({
      kind: 'text',
      content: 'Texte à écrire...'
    });
  }
}
