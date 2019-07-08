import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {BlockBrick} from './block-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class BlockBrickFactory extends BaseBrickFactory<BlockBrick> {
  make(): BlockBrick {
    return this.withUuid({
      kind: 'block',
      variant: 'reminder',
      wall: [
        {
          kind: 'text',
          content: 'Texte...'
        }
      ]
    });
  }
}
