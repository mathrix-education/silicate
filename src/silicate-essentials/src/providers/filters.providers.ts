import {Filter, Filters, TypedValueProvider} from '@mathrix/silicate-core';

export const BoldFilterProvider: TypedValueProvider<Filter> = {
  provide: Filters,
  multi: true,
  useValue: {
    selector: 'b',
    allowedAttributes: []
  }
};
export const ItalicFilterProvider: TypedValueProvider<Filter> = {
  provide: Filters,
  multi: true,
  useValue: {
    selector: 'i',
    allowedAttributes: []
  }
};
export const LinkFilterProvider: TypedValueProvider<Filter> = {
  provide: Filters,
  multi: true,
  useValue: {
    selector: 'a',
    allowedAttributes: ['href', 'target', 'title']
  }
};
