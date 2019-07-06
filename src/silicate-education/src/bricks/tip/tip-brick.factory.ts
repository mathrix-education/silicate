import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {TipBrick} from './tip-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class TipBrickFactory extends BaseBrickFactory<TipBrick> {
  make(): TipBrick {
    return this.withUuid({
      kind: 'tip',
      wall: [
        {
          kind: 'text',
          content: 'En tip...'
        }
      ]
    });
  }
}
