import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface TheoremBrick extends BaseBrick {
  kind: 'theorem';
  wall: Wall;
}
