import {Component} from '@angular/core';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {ListBrick} from './list-brick';

@Component({
  selector: 'mtx-list-brick',
  templateUrl: './list-brick.component.html',
  styleUrls: ['./list-brick.component.scss']
})
export class ListBrickComponent extends BaseBrickComponent<ListBrick> {
  static readonly kind = 'list';
  static readonly icon = 'format_list_bulleted';
  static readonly displayName = 'Liste';

  static empty(): ListBrick {
    return {
      kind: 'list',
      items: [
        'Texte...'
      ]
    };
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  onEnter($event: KeyboardEvent, emittedFromIndex: number) {
    $event.preventDefault();
    this.model.items.splice(emittedFromIndex + 1, 0, 'Texte...');
  }
}
