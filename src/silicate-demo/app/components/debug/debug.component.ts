import {Component, Input} from '@angular/core';
import {Wall} from '@mathrix/silicate-core/src/silicate-core.types';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent {
  @Input() data: Wall;

  strip(data: string) {
    return data
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}
