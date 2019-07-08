import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface ContainerBrick extends BaseBrick {
  kind: 'container';
  variant: string;
  prefix: string;
  suffix: string;
  wall: Wall;
}
