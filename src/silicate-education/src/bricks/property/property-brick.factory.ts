import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {PropertyBrick} from './property-brick';


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
        }
      ]
    });
  }
}
