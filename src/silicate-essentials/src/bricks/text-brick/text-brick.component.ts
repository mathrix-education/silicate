import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {TextBrick} from './text-brick';


@Component({
  selector: 'silicate-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> {
}
