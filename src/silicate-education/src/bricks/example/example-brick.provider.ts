import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {ExampleBrickComponent} from './example-brick.component';
import {ExampleBrickFactory} from './example-brick.factory';

export const ExampleBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'example',
    icon: 'functions',
    name: 'Exemple',
    component: ExampleBrickComponent,
    factory: ExampleBrickFactory
  }
};
