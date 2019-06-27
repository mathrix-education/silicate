import {Injectable} from '@angular/core';
import {BaseBrickFactory} from '@mathrix/silicate-core';
import {ListBrick} from './list-brick';


@Injectable()
export class ListBrickFactory extends BaseBrickFactory<ListBrick> {
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
