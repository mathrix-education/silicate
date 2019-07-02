import {BaseBrick} from '@mathrix/silicate-core';


export interface TextBrick extends BaseBrick {
  kind: 'text';
  content: string;
}
