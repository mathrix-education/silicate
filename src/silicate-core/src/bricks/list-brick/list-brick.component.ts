import {Component, QueryList, ViewChildren} from '@angular/core';
import {first} from 'rxjs/operators';
import {SilicateEditableComponent} from '../../components/silicate-editable/silicate-editable.component';
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

  @ViewChildren(SilicateEditableComponent) itemsEditableComponents: QueryList<SilicateEditableComponent>;

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

  get items(): string[] {
    return this.get('items');
  }

  set items(newItems: string[]) {
    this.set('items', newItems);
  }

  setItemContent(index: number, content: string) {
    this.items = this.items.splice(index, 1, content);
  }

  onEnter($event: KeyboardEvent, emittedFromIndex: number) {
    $event.preventDefault();

    this.itemsEditableComponents.changes
      .pipe(first())
      .subscribe((items: QueryList<SilicateEditableComponent>) => {
        setTimeout(() => items.toArray()[emittedFromIndex + 1].focus());
      });

    this.items = this.items.splice(emittedFromIndex + 1, 0, '');
  }

  onDeleteItem($event: KeyboardEvent, emittedFromIndex: number) {
    $event.preventDefault();

    this.itemsEditableComponents.changes
      .pipe(first())
      .subscribe((items: QueryList<SilicateEditableComponent>) => {
        setTimeout(() => items.toArray()[emittedFromIndex - 1].focus(), 100);
      });

    this.items = this.items.splice(emittedFromIndex, 1);
  }
}
