import {BaseBrick} from '@mathrix-education/silicate-core';


export interface ListBrick extends BaseBrick {
  kind: 'list';
  type: 'ul' | 'ol';
  items: string[];
}
