import {Component, QueryList, ViewChildren} from '@angular/core';
import {BaseBrickComponent, SilicateDirective, SilicateService} from '@mathrix/silicate-core';
import {ListBrick} from './list-brick';


@Component({
  selector: 'silicate-list-brick',
  templateUrl: './list-brick.component.html',
  styleUrls: ['./list-brick.component.scss']
})
export class ListBrickComponent extends BaseBrickComponent<ListBrick> {
  @ViewChildren(SilicateDirective) itemsEditableComponents: QueryList<SilicateDirective>;

  constructor(public silicate: SilicateService) {
    super();
  }


  trackByFn(index: any, item: any) {
    return index;
  }


  onOutput($event, eventName: string, ...args) {
    if (eventName === 'keydown.Enter') {
      this.onEnter($event, args[0]);
    }
  }


  onEnter($event: KeyboardEvent, emittedFromIndex: number) {
    console.log('lol');

    const clone = JSON.parse(JSON.stringify(this.data.items));
    clone.splice(emittedFromIndex + 1, 0, 'Entrez du texte');
    this.data.items = clone;
  }
}
