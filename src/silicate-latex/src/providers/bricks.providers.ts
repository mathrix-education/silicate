import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {EquationBrickComponent} from '../bricks/equation-brick/equation-brick.component';

export const EquationBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'equation',
    component: EquationBrickComponent,
  }
};
