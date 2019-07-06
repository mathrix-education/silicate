import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface TipBrick extends BaseBrick {
  kind: 'tip';
  wall: Wall;
}
