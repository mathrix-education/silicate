import {BaseBrick} from '../../../../silicate-core/src/bricks/base-brick/base-brick';

export interface EquationBrick extends BaseBrick {
  kind: 'equation';
  content: string; // Pure latex equation
}
