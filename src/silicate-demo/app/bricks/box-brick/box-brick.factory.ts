import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {BoxBrick} from './box-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class BoxBrickFactory extends BaseBrickFactory<BoxBrick> {
  make(): BoxBrick {
    return this.withUuid({
      kind: 'box',
      title: 'Définition',
      data: [
        this.withUuid({
          kind: 'text',
          content: 'Texte à entrer....'
        })
      ]
    });
  }
}
