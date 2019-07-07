import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {TrapBrickComponent} from './trap-brick.component';
import {TrapBrickFactory} from './trap-brick.factory';

export const TrapBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'trap',
    icon: 'functions',
    name: 'Piège',
    component: TrapBrickComponent,
    factory: TrapBrickFactory
  }
};
