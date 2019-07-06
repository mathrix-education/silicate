import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface ReminderBrick extends BaseBrick {
  kind: 'reminder';
  wall: Wall;
}
