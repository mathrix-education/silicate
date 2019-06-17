import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';


export interface TextBrick extends BaseBrick {
  kind: 'text';
  content: string;
}


export class TextBrickFactory extends BaseBrickFactory {
  static readonly kind = 'text';
  static readonly icon = 'notes';
  static readonly displayName = 'Texte';
  static readonly component = TextBrickComponent;


  static make(): TextBrick {
    return TextBrickFactory.withUuid({
      kind: 'text',
      content: 'Texte à écrire...'
    });
  }
}
