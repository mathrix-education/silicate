import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {PropertyBrickComponent} from './property-brick.component';
import {PropertyBrickFactory} from './property-brick.factory';

export const PropertyBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'property',
    icon: 'functions',
    name: 'Property',
    component: PropertyBrickComponent,
    factory: PropertyBrickFactory
  }
};
