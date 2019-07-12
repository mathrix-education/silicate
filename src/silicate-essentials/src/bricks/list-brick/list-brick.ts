import {BaseBrick} from '@mathrix/silicate-core';


export interface ListBrick extends BaseBrick {
  kind: 'list';
  type: string;
  items: string[];
}
