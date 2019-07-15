import {TypedValueProvider} from '../interfaces/typed-value-provider';
import {Handlers} from '../silicate-core.tokens';
import {Handler} from '../interfaces/handler';
import {ToolbarHandler} from '../handlers/toolbar.handler';

export const ToolbarHandlerProvider: TypedValueProvider<Handler> = {
  provide: Handlers,
  multi: true,
  useValue: {
    whenFocused: true,
    whenEditable: true,
    target: 'document',
    eventName: 'selectionchange',
    service: ToolbarHandler,
    method: 'invoke'
  }
};
