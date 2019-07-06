import {BaseBrick} from '@mathrix/silicate-core';


export interface TitleBrick extends BaseBrick {
  kind: 'title';
  text: string;
}
