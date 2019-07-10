import {Injectable} from '@angular/core';
import {SilicateDirective} from '../directives/silicate.directive';

@Injectable()
export class KeyboardHandler {
  keydown($event: KeyboardEvent, source: SilicateDirective) {
    if ($event.key === 'Enter') {
      source.output.emit({
        eventName: 'keydown',
        event: $event
      });
    }
  }
}
