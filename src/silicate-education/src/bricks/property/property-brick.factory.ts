import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {PropertyBrick} from './property-brick';
import {TextBrick} from '@mathrix/silicate-essentials';

@Injectable({
  providedIn: SilicateCoreModule
})
export class PropertyBrickFactory extends BaseBrickFactory<PropertyBrick> {
  make(): PropertyBrick {
    return this.withUuid({
      kind: 'property',
      wall: [
        {
          kind: 'text',
          content: 'En property...'
        } as TextBrick
      ]
    });
  }
}
