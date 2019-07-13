import {Inject, Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {TitleBrick} from './title-brick';
import {Heading, TitleBrickAllowedHeadings} from '../../silicate-essentials.tokens';


@Injectable({
  providedIn: SilicateCoreModule
})
export class TitleBrickFactory extends BaseBrickFactory<TitleBrick> {

  constructor(@Inject(TitleBrickAllowedHeadings) private allowedHeadings: Heading[]) {
    super();
  }

  make(): TitleBrick {
    return this.withUuid({
      kind: 'title',
      heading: this.allowedHeadings[0],
      text: 'Titre à définir...'
    });
  }
}
