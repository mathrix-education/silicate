import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface PropertyBrick extends BaseBrick {
  kind: 'property';
  wall: Wall;
}
