import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {TitleBrick} from './title-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class TitleBrickFactory extends BaseBrickFactory<TitleBrick> {
  make(): TitleBrick {
    return this.withUuid({
      kind: 'text',
      content: 'Titre à définir...'
    });
  }
}
