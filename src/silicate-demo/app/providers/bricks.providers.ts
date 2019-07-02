import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {BoxBrickComponent} from '../bricks/box-brick/box-brick.component';
import {BoxBrickFactory} from '../bricks/box-brick/box-brick.factory';

export const BoxBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'box',
    icon: 'dashboard',
    name: 'Conteneur',
    component: BoxBrickComponent,
    factory: BoxBrickFactory
  }
};
