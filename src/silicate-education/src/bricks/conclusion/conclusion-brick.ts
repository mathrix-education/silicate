import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface ConclusionBrick extends BaseBrick {
  kind: 'conclusion';
  wall: Wall;
}
