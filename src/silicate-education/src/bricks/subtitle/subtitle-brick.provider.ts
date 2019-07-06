import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {SubtitleBrickComponent} from './subtitle-brick.component';
import {SubtitleBrickFactory} from './subtitle-brick.factory';

export const SubtitleBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'subtitle',
    icon: 'functions',
    name: 'Sous-titre',
    component: SubtitleBrickComponent,
    factory: SubtitleBrickFactory
  }
};
