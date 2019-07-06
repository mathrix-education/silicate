import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {TheoremBrick} from './theorem-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class TheoremBrickFactory extends BaseBrickFactory<TheoremBrick> {
  make(): TheoremBrick {
    return this.withUuid({
      kind: 'theorem',
      wall: [
        {
          kind: 'text',
          content: 'En theorem...'
        }
      ]
    });
  }
}
