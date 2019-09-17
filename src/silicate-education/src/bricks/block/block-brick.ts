import {BaseBrick, Wall} from '@mathrix-education/silicate-core';

export interface BlockBrick extends BaseBrick {
  kind: 'block';
  variant: string;
  wall: Wall;
}
