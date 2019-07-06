import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface TrapBrick extends BaseBrick {
  kind: 'trap';
  wall: Wall;
}
