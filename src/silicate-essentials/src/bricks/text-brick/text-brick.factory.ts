import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {TextBrick} from './text-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class TextBrickFactory extends BaseBrickFactory<TextBrick> {
  make(): TextBrick {
    return this.withUuid({
      kind: 'text',
      text: ''
    });
  }
}
