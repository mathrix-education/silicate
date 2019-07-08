import {Handler, Handlers, TypedValueProvider} from '@mathrix/silicate-core';
import {InlineEquationHandler} from '../handlers/inline-equation.handler';

export const KeydownEquationHandlerProvider: TypedValueProvider<Handler> = {
  provide: Handlers,
  multi: true,
  useValue: {
    eventName: 'keydown',
    service: InlineEquationHandler,
    method: 'keydown'
  }
};
export const ClickEquationHandlerProvider: TypedValueProvider<Handler> = {
  provide: Handlers,
  multi: true,
  useValue: {
    eventName: 'click',
    service: InlineEquationHandler,
    method: 'click'
  }
};
