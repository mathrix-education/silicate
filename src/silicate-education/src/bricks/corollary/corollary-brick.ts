import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface CorollaryBrick extends BaseBrick {
  kind: 'corollary';
  wall: Wall;
}
