import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {EquationBrickComponent} from '../bricks/equation-brick/equation-brick.component';
import {EquationBrickFactory} from '../bricks/equation-brick/equation-brick.factory';

export const EquationBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'equation',
    icon: 'functions',
    name: 'Équation',
    component: EquationBrickComponent,
    factory: EquationBrickFactory
  }
};
