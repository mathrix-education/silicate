import {Component} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {TextBrick} from './text-brick';

@Component({
  selector: 'mtx-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> {
  static readonly kind = 'text';
  static readonly icon = 'notes';
  static readonly displayName = 'Texte';

  static empty(): TextBrick {
    return {
      uuid: uuid(),
      kind: 'text',
      content: 'Texte...'
    };
  }

  onEnter($event: KeyboardEvent) {
    $event.preventDefault();
  }
}
