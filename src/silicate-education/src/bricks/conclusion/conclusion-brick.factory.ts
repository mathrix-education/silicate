import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {ConclusionBrick} from './conclusion-brick';
import {TextBrick} from '@mathrix/silicate-essentials';

@Injectable({
  providedIn: SilicateCoreModule
})
export class ConclusionBrickFactory extends BaseBrickFactory<ConclusionBrick> {
  make(): ConclusionBrick {
    return this.withUuid({
      kind: 'conclusion',
      wall: [
        {
          kind: 'text',
          content: 'En conclusion...'
        } as TextBrick
      ]
    });
  }
}
