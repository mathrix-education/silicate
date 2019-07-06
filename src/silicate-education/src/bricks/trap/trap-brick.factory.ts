import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {TrapBrick} from './trap-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class TrapBrickFactory extends BaseBrickFactory<TrapBrick> {
  make(): TrapBrick {
    return this.withUuid({
      kind: 'trap',
      wall: [
        {
          kind: 'text',
          content: 'En trap...'
        }
      ]
    });
  }
}
