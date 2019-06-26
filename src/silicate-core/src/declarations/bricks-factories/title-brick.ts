import {TitleBrickComponent} from '../../bricks/title-brick/title-brick.component';
import {BaseBrick, BaseBrickFactory} from './base-brick';
import {Injectable} from '@angular/core';


export interface TitleBrick extends BaseBrick {
  kind: 'title';
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class TitleBrickFactory extends BaseBrickFactory<TitleBrick> {
  readonly kind = 'title';
  readonly icon = 'title';
  readonly displayName = 'Titre';
  readonly component = TitleBrickComponent;


  make(): TitleBrick {
    return this.withUuid({
      kind: 'title',
      content: 'Titre à définir...'
    });
  }
}
