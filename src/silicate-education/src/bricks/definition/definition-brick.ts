import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface DefinitionBrick extends BaseBrick {
  kind: 'definition';
  wall: Wall;
}
