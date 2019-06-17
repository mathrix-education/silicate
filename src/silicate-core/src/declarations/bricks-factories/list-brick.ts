import {ListBrickComponent} from '../../bricks/list-brick/list-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';


export interface ListBrick extends BaseBrick {
  kind: 'list';
  items: string[];
}


export class ListBrickFactory extends BaseBrickFactory {
  static readonly kind = 'list';
  static readonly icon = 'format_list_bulleted';
  static readonly displayName = 'Liste';
  static readonly component = ListBrickComponent;


  static make(): ListBrick {
    return ListBrickFactory.withUuid({
      kind: 'list',
      items: [
        'Un premier item...',
        'Un second...'
      ]
    });
  }
}

