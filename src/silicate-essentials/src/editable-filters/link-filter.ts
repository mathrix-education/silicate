import {EditableFilter} from '@mathrix/silicate-core';

export const LinkFilter: EditableFilter = {
  selector: 'a',
  allowedAttributes: ['href', 'target', 'title']
};
