import {ListBrickComponent} from '../../bricks/list-brick/list-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';
import {Injectable} from '@angular/core';


export interface ListBrick extends BaseBrick {
  kind: 'list';
  items: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ListBrickFactory extends BaseBrickFactory<ListBrick> {
  readonly kind = 'list';
  readonly icon = 'format_list_bulleted';
  readonly displayName = 'Liste';
  readonly component = ListBrickComponent;


  make(): ListBrick {
    return this.withUuid({
      kind: 'list',
      items: [
        'Un premier item...',
        'Un second...'
      ]
    });
  }
}

