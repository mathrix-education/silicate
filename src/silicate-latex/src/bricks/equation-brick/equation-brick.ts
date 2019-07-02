import {BaseBrick} from '@mathrix/silicate-core';


export interface EquationBrick extends BaseBrick {
  kind: 'equation';
  content: string; // Pure latex equation
}
