import {BaseBrick} from '@mathrix-education/silicate-core';


export interface TextBrick extends BaseBrick {
  kind: 'text';
  text: string;
}
