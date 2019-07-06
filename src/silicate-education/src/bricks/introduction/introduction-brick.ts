import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface IntroductionBrick extends BaseBrick {
  kind: 'introduction';
  wall: Wall;
}
