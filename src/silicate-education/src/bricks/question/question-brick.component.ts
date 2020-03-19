import {Component} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {QuestionBrick} from './question-brick';


@Component({
  selector: 'edu-question-brick',
  templateUrl: './question-brick.component.html',
  styleUrls: ['./question-brick.component.scss']
})
export class QuestionBrickComponent extends BaseBrickComponent<QuestionBrick> {

  constructor(public silicate: SilicateService) {
    super();
  }

  focus(): void {
    return;
  }
}
