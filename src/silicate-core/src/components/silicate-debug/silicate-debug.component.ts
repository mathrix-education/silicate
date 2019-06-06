import {Component, Input} from '@angular/core';

@Component({
  selector: 'mtx-silicate-debug',
  templateUrl: './silicate-debug.component.html',
  styleUrls: ['./silicate-debug.component.scss']
})
export class SilicateDebugComponent {
  @Input() debug;
}
