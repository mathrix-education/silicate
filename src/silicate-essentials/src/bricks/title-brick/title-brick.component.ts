import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix/silicate-core';
import {TitleBrick} from './title-brick';


@Component({
  selector: 'silicate-title-brick',
  templateUrl: './title-brick.component.html',
  styleUrls: ['./title-brick.component.scss']
})
export class TitleBrickComponent extends BaseBrickComponent<TitleBrick> {
}
