import {Wall} from '@mathrix/silicate-core/src/silicate-core.types';

export interface CardBrick {
  kind: 'cart';
  title: string;
  data: Wall;
}
