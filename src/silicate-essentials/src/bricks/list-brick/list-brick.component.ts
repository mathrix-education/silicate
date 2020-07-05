import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {ListBrick} from './list-brick';


@Component({
  selector: 'silicate-list-brick',
  templateUrl: './list-brick.component.html',
  styleUrls: ['./list-brick.component.scss']
})
export class ListBrickComponent extends BaseBrickComponent<ListBrick> {
}
