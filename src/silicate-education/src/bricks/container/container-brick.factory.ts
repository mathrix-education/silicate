import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {ContainerBrick} from './container-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class ContainerBrickFactory extends BaseBrickFactory<ContainerBrick> {
  make(): ContainerBrick {
    return this.withUuid({
      kind: 'container',
      variant: 'theorem',
      prefix: '',
      suffix: '',
      wall: [
        {
          kind: 'silicate',
          content: 'Texte...'
        }
      ]
    });
  }
}
