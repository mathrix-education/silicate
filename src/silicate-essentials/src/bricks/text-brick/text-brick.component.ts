import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix/silicate-core';
import {TextBrick} from './text-brick';


@Component({
  selector: 'silicate-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> {
  onOutput($event: { eventName: string, event: any }) {
    if ($event.eventName === 'keydown') {
      const keyboardEvent: KeyboardEvent = $event.event;
      if (keyboardEvent.key === 'Enter') {
        console.log('Append text!');
      }
    }
  }
}
