import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface BlockBrick extends BaseBrick {
  kind: 'block';
  variant: string;
  wall: Wall;
}
