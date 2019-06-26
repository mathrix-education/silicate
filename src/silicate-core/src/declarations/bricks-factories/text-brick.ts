import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';
import {Injectable} from '@angular/core';


export interface TextBrick extends BaseBrick {
  kind: 'text';
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class TextBrickFactory extends BaseBrickFactory<TextBrick> {
  readonly kind = 'text';
  readonly icon = 'notes';
  readonly displayName = 'Texte';
  readonly component = TextBrickComponent;


  make(): TextBrick {
    return this.withUuid({
      kind: 'text',
      content: 'Texte à écrire...'
    });
  }
}
