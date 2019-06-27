import {Injectable} from '@angular/core';
import {BaseBrick, BaseBrickFactory} from '@mathrix/silicate-core';


export interface TitleBrick extends BaseBrick {
  kind: 'title';
  content: string;
}


@Injectable()
export class TitleBrickFactory extends BaseBrickFactory<TitleBrick> {
  make(): TitleBrick {
    return this.withUuid({
      kind: 'title',
      content: 'Titre à définir...'
    });
  }
}
