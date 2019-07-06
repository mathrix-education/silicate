import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {ReminderBrick} from './reminder-brick';
import {TextBrick} from '@mathrix/silicate-essentials';

@Injectable({
  providedIn: SilicateCoreModule
})
export class ReminderBrickFactory extends BaseBrickFactory<ReminderBrick> {
  make(): ReminderBrick {
    return this.withUuid({
      kind: 'reminder',
      wall: [
        {
          kind: 'text',
          content: 'En reminder...'
        } as TextBrick
      ]
    });
  }
}
