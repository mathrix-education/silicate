import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {RemarkBrickComponent} from './remark-brick.component';
import {RemarkBrickFactory} from './remark-brick.factory';

export const RemarkBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'remark',
    icon: 'functions',
    name: 'Remarque',
    component: RemarkBrickComponent,
    factory: RemarkBrickFactory
  }
};
