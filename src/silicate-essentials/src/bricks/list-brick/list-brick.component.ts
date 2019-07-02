import {Component, QueryList, ViewChildren} from '@angular/core';
import {BaseBrickComponent, SilicateEditableComponent} from '@mathrix/silicate-core';
import {first} from 'rxjs/operators';
import {ListBrick} from './list-brick';


@Component({
  selector: 'silicate-list-brick',
  templateUrl: './list-brick.component.html',
  styleUrls: ['./list-brick.component.scss']
})
export class ListBrickComponent extends BaseBrickComponent<ListBrick> {
  @ViewChildren(SilicateEditableComponent) itemsEditableComponents: QueryList<SilicateEditableComponent>;


  trackByFn(index: any, item: any) {
    return index;
  }


  onEnter($event: KeyboardEvent, emittedFromIndex: number) {
    $event.preventDefault();

    this.itemsEditableComponents.changes
      .pipe(first())
      .subscribe((items: QueryList<SilicateEditableComponent>) => {
        setTimeout(() => items.toArray()[emittedFromIndex + 1].focus());
      });

    this.data.items = this.data.items.splice(emittedFromIndex + 1, 0, '');
  }
}
