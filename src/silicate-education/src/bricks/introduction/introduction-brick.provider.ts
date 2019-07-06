import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {IntroductionBrickComponent} from './introduction-brick.component';
import {IntroductionBrickFactory} from './introduction-brick.factory';

export const IntroductionBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'introduction',
    icon: 'functions',
    name: 'Introduction',
    component: IntroductionBrickComponent,
    factory: IntroductionBrickFactory
  }
};
