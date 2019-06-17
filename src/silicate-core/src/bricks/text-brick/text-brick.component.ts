import {Component} from '@angular/core';
import {TextBrick} from '../../declarations/bricks-factories/text-brick';
import {BaseBrickComponent} from '../base-brick/base-brick.component';


@Component({
  selector: 'mtx-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> {
}
