import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {DefinitionBrickComponent} from './definition-brick.component';
import {DefinitionBrickFactory} from './definition-brick.factory';

export const DefinitionBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'definition',
    icon: 'functions',
    name: 'Definition',
    component: DefinitionBrickComponent,
    factory: DefinitionBrickFactory
  }
};
