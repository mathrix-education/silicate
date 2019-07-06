import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent} from '@mathrix/silicate-core';
import {TableBrick} from './table-brick';
import {SilicateService} from '@mathrix/silicate-core';


@Component({
  selector: 'silicate-table-brick',
  templateUrl: './table-brick.component.html',
  styleUrls: ['./table-brick.component.scss']
})
export class TableBrickComponent extends BaseBrickComponent<TableBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }

  trackBy(index, item) {
    return index;
  }

  ngOnInit() {
  }
}
