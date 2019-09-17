import {Handler, Handlers, TypedValueProvider} from '@mathrix-education/silicate-core';
import {OpenLinkDialogHandler} from '../handlers/open-link-dialog.handler';

/**
 * Handlers
 */
export const OpenLinkDialogHandlerProvider: TypedValueProvider<Handler> = {
  provide: Handlers,
  multi: true,
  useValue: {
    whenFocused: true,
    whenEditable: true,
    target: 'self',
    eventName: 'click',
    service: OpenLinkDialogHandler,
    method: 'invoke'
  }
};
