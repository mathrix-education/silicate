import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {DefinitionBrick} from './definition-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class DefinitionBrickFactory extends BaseBrickFactory<DefinitionBrick> {
  make(): DefinitionBrick {
    return this.withUuid({
      kind: 'definition',
      wall: [
        {
          kind: 'text',
          content: 'En definition...'
        }
      ]
    });
  }
}
