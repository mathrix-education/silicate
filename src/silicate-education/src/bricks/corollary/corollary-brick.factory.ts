import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {CorollaryBrick} from './corollary-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class CorollaryBrickFactory extends BaseBrickFactory<CorollaryBrick> {
  make(): CorollaryBrick {
    return this.withUuid({
      kind: 'corollary',
      wall: [
        {
          kind: 'text',
          content: 'En corollary...'
        }
      ]
    });
  }
}
