import {Handler, Handlers, TypedValueProvider} from '@mathrix/silicate-core';
import {OpenLinkDialogHandler} from '../handlers/open-link-dialog.handler';

/**
 * Handlers
 */
export const OpenLinkDialogHandlerProvider: TypedValueProvider<Handler> = {
  provide: Handlers,
  multi: true,
  useValue: {
    eventName: 'click',
    service: OpenLinkDialogHandler,
    method: 'invoke'
  }
};
