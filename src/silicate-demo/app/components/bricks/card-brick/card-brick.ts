import {BaseBrick} from '@mathrix/silicate-core';
import {Wall} from '@mathrix/silicate-core';


export interface CardBrick extends BaseBrick {
  kind: 'cart';
  title: string;
  data: Wall;
}
