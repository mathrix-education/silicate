import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {ReminderBrickComponent} from './reminder-brick.component';
import {ReminderBrickFactory} from './reminder-brick.factory';

export const ReminderBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'reminder',
    icon: 'functions',
    name: 'À retenir',
    component: ReminderBrickComponent,
    factory: ReminderBrickFactory
  }
};
