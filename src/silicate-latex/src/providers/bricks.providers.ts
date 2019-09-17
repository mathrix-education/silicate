import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {EquationBrickComponent} from '../bricks/equation-brick/equation-brick.component';
import {EquationBrickFactory} from '../bricks/equation-brick/equation-brick.factory';

export const EquationBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'equation',
    icon: 'functions',
    name: 'Équation',
    component: EquationBrickComponent,
    factory: EquationBrickFactory
  }
};
