import {Component, QueryList, ViewChildren} from '@angular/core';
import {BaseBrickComponent, SilicateDirective, SilicateService} from '@mathrix-education/silicate-core';
import {ListBrick} from './list-brick';
import {first} from 'rxjs/operators';


@Component({
  selector: 'silicate-list-brick',
  templateUrl: './list-brick.component.html',
  styleUrls: ['./list-brick.component.scss']
})
export class ListBrickComponent extends BaseBrickComponent<ListBrick> {
  @ViewChildren(SilicateDirective) silicateListItems: QueryList<SilicateDirective>;

  constructor(public silicate: SilicateService) {
    super();
  }


  trackByFn(index: any, item: any) {
    return index;
  }


  onEnter($event: KeyboardEvent, emittedFromIndex: number) {
    $event.preventDefault();

    const clone = JSON.parse(JSON.stringify(this.data.items));
    clone.splice(emittedFromIndex + 1, 0, '');
    this.data.items = clone;

    this.silicateListItems.changes.pipe(first()).subscribe(() => {
      this.silicateListItems.toArray()[emittedFromIndex + 1].focus();
    });

  }

  focus(): void {
    this.silicateListItems.first.focus();
  }
}
