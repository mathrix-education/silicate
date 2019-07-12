import {Injectable} from '@angular/core';
import {BaseBrickFactory} from '@mathrix/silicate-core';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {ListBrick} from './list-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class ListBrickFactory extends BaseBrickFactory<ListBrick> {
  make(): ListBrick {
    return this.withUuid({
      kind: 'list',
      type: 'ul',
      items: [
        'Un premier item...',
        'Un second...'
      ]
    });
  }
}
