import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix-education/silicate-core';
import {QuestionBrick} from './question-brick';

@Injectable({
  providedIn: SilicateCoreModule
})
export class QuestionBrickFactory extends BaseBrickFactory<QuestionBrick> {
  make(): QuestionBrick {
    return this.withUuid({
      kind: 'question',
      statement: [],
      children: [],
      explanations: {points: 0, content: []},
      state: {correction: false}
    });
  }
}
