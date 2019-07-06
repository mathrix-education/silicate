import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {SubTitleBrick} from './subtitle-brick';

@Injectable({
  providedIn: SilicateCoreModule
})
export class SubtitleBrickFactory extends BaseBrickFactory<SubTitleBrick> {
  make(): SubTitleBrick {
    return this.withUuid({
      kind: 'subtitle',
      text: 'Sous-titre'
    });
  }
}
