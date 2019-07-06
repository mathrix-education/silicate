import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {TipBrickComponent} from './tip-brick.component';
import {TipBrickFactory} from './tip-brick.factory';

export const TipBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'tip',
    icon: 'functions',
    name: 'Tip',
    component: TipBrickComponent,
    factory: TipBrickFactory
  }
};
