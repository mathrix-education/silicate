import {Filter, Filters, TypedValueProvider} from '@mathrix/silicate-core';

export const KatexFilterProvider: TypedValueProvider<Filter> = {
  provide: Filters,
  multi: true,
  useValue: {
    selector: 'span.katex, span.katex *',
    allowedAttributes: ['id', 'class', 'style']
  }
};
