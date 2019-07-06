import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {ExampleBrick} from './example-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class ExampleBrickFactory extends BaseBrickFactory<ExampleBrick> {
  make(): ExampleBrick {
    return this.withUuid({
      kind: 'example',
      wall: [
        {
          kind: 'text',
          content: 'En example...'
        }
      ]
    });
  }
}
