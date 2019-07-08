import {BaseBrick} from '@mathrix/silicate-core';


export interface EquationBrick extends BaseBrick {
  kind: 'equation';
  equation: string; // Pure latex equation
  description: string;
}
