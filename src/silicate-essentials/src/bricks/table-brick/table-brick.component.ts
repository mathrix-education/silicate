import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {TableBrick} from './table-brick';


@Component({
  selector: 'silicate-table-brick',
  templateUrl: './table-brick.component.html',
  styleUrls: ['./table-brick.component.scss']
})
export class TableBrickComponent extends BaseBrickComponent<TableBrick> {
}
