import {Component, QueryList, ViewChildren} from '@angular/core';
import {BaseBrickComponent} from '@mathrix/silicate-core';
import {ListBrick} from './list-brick';
import {SilicateDirective} from '@mathrix/silicate-core';


@Component({
  selector: 'silicate-list-brick',
  templateUrl: './list-brick.component.html',
  styleUrls: ['./list-brick.component.scss']
})
export class ListBrickComponent extends BaseBrickComponent<ListBrick> {
  @ViewChildren(SilicateDirective) itemsEditableComponents: QueryList<SilicateDirective>;


  trackByFn(index: any, item: any) {
    return index;
  }


  onEnter($event: KeyboardEvent, emittedFromIndex: number) {
    $event.preventDefault();

    // this.itemsEditableComponents.changes
    //   .pipe(first())
    //   .subscribe((items: QueryList<SilicateDirective>) => {
    //     setTimeout(() => items.toArray()[emittedFromIndex + 1].focus());
    //   });

    this.data.items = this.data.items.splice(emittedFromIndex + 1, 0, '');
  }
}
