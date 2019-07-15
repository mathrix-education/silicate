import {Component} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {TableBrick} from './table-brick';


@Component({
  selector: 'silicate-table-brick',
  templateUrl: './table-brick.component.html',
  styleUrls: ['./table-brick.component.scss']
})
export class TableBrickComponent extends BaseBrickComponent<TableBrick> {
  constructor(public silicate: SilicateService) {
    super();
  }

  trackBy(index, item) {
    return index;
  }

  focus(): void {
    return;
  }
}
