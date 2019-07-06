import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {TheoremBrickComponent} from './theorem-brick.component';
import {TheoremBrickFactory} from './theorem-brick.factory';

export const TheoremBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'theorem',
    icon: 'functions',
    name: 'Theorem',
    component: TheoremBrickComponent,
    factory: TheoremBrickFactory
  }
};
