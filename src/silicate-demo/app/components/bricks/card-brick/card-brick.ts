import {BaseBrick} from '@mathrix/silicate-core/src/bricks/base-brick/base-brick';
import {Wall} from '@mathrix/silicate-core/src/silicate-core.types';

export interface CardBrick extends BaseBrick {
  kind: 'cart';
  title: string;
  data: Wall;
}
