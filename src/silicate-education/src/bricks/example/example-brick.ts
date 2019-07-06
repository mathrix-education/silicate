import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface ExampleBrick extends BaseBrick {
  kind: 'example';
  wall: Wall;
}
