import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {CorollaryBrickComponent} from './corollary-brick.component';
import {CorollaryBrickFactory} from './corollary-brick.factory';

export const CorollaryBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'corollary',
    icon: 'functions',
    name: 'Corollaire',
    component: CorollaryBrickComponent,
    factory: CorollaryBrickFactory
  }
};
