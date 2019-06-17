import {TitleBrickComponent} from '../../bricks/title-brick/title-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';


export interface TitleBrick extends BaseBrick {
  kind: 'title';
  content: string;
}


export class TitleBrickFactory extends BaseBrickFactory {
  static readonly kind = 'title';
  static readonly icon = 'title';
  static readonly displayName = 'Titre';
  static readonly component = TitleBrickComponent;


  static make(): TitleBrick {
    return TitleBrickFactory.withUuid({
      kind: 'title',
      content: 'Titre à définir...'
    });
  }
}
