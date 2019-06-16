import {Component} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {TitleBrick} from './title-brick';

@Component({
  selector: 'mtx-title-brick',
  templateUrl: './title-brick.component.html',
  styleUrls: ['./title-brick.component.scss']
})
export class TitleBrickComponent extends BaseBrickComponent<TitleBrick> {
  static readonly kind = 'title';
  static readonly icon = 'title';
  static readonly displayName = 'Titre';

  static empty(): TitleBrick {
    return {
      uuid: uuid(),
      kind: 'title',
      content: 'Nouveau titre'
    };
  }
}
