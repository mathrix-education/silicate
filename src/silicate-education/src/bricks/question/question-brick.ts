import {BaseBrick} from '@mathrix-education/silicate-core';

export interface QuestionBrick extends BaseBrick {
  kind: 'question';
  statement: BaseBrick[],
  children: QuestionBrick[],
  explanations: { points: number, content: Required<BaseBrick>[] },
  state: {
    correction: boolean
  }
}
