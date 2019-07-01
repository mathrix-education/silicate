import {EditableFilter} from '@mathrix/silicate-core';

export const KatexFilter: EditableFilter = {
  selector: 'span.katex, span.katex *',
  allowedAttributes: ['id', 'class', 'style', 'data-equation']
};
