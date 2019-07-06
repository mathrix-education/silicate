import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {ConclusionBrickComponent} from './conclusion-brick.component';
import {ConclusionBrickFactory} from './conclusion-brick.factory';

export const ConclusionBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'conclusion',
    icon: 'functions',
    name: 'Conclusion',
    component: ConclusionBrickComponent,
    factory: ConclusionBrickFactory
  }
};
