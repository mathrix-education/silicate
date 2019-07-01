import {ValueProvider} from '@angular/core';
import {BrickDeclarations, EditableEvents, EditableFilters} from '@mathrix/silicate-core';
import {EquationBrickComponent} from './bricks/equation-brick/equation-brick.component';
import {EquationBrickFactory} from './bricks/equation-brick/equation-brick.factory';
import {KatexFilter} from './filters/katex.filter';
import {InlineEquationHandler} from './handlers/inline-equation.handler';

export const EquationBrickProvider: ValueProvider = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'equation',
    icon: 'functions',
    name: 'Équation',
    component: EquationBrickComponent,
    factory: EquationBrickFactory
  }
};

export const KatexFilterProvider: ValueProvider = {
  provide: EditableFilters,
  multi: true,
  useValue: KatexFilter
};

export const KeydownEquationHandlerProvider: ValueProvider = {
  provide: EditableEvents,
  multi: true,
  useValue: {
    eventName: 'keydown',
    focusOnly: true,
    service: InlineEquationHandler,
    method: 'keydown'
  }
};
export const ClickEquationHandlerProvider: ValueProvider = {
  provide: EditableEvents,
  multi: true,
  useValue: {
    eventName: 'click',
    focusOnly: true,
    service: InlineEquationHandler,
    method: 'click'
  }
};
