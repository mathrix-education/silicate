import {EditableFilter} from '../../silicate-core.types';

export const LinkEditableFilter: EditableFilter = {
  selector: 'a',
  allowedAttributes: ['href', 'title', 'target']
};
