import {Component} from '@angular/core';
import {TitleBrick} from '../../declarations/bricks-factories/title-brick';
import {BaseBrickComponent} from '../base-brick/base-brick.component';


@Component({
  selector: 'mtx-title-brick',
  templateUrl: './title-brick.component.html',
  styleUrls: ['./title-brick.component.scss']
})
export class TitleBrickComponent extends BaseBrickComponent<TitleBrick> {
}
