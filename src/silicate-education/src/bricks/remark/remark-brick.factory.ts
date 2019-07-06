import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {RemarkBrick} from './remark-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class RemarkBrickFactory extends BaseBrickFactory<RemarkBrick> {
  make(): RemarkBrick {
    return this.withUuid({
      kind: 'remark',
      wall: [
        {
          kind: 'text',
          content: 'En remark...'
        }
      ]
    });
  }
}
