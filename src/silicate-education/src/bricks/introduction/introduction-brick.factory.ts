import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {IntroductionBrick} from './introduction-brick';
import {TextBrick} from '@mathrix/silicate-essentials';

@Injectable({
  providedIn: SilicateCoreModule
})
export class IntroductionBrickFactory extends BaseBrickFactory<IntroductionBrick> {
  make(): IntroductionBrick {
    return this.withUuid({
      kind: 'introduction',
      wall: [
        {
          kind: 'text',
          content: 'En introduction...'
        } as TextBrick
      ]
    });
  }
}
