import {Component, Input} from '@angular/core';
import {Wall} from '@mathrix/silicate-core';


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
