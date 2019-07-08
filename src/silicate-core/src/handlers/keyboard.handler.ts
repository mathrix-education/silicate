import {Injectable} from '@angular/core';
import {SilicateEditableComponent} from '../components/silicate-editable/silicate-editable.component';

@Injectable()
export class KeyboardHandler {
  keydown($event: KeyboardEvent, source: SilicateEditableComponent) {
    if ($event.key === 'Enter') {
      source.output.emit({
        eventName: 'keydown',
        event: $event
      });
    }
  }
}
