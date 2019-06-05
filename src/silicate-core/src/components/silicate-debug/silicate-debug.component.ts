import {Component, Input, OnInit} from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'mtx-silicate-debug',
  templateUrl: './silicate-debug.component.html',
  styleUrls: ['./silicate-debug.component.scss']
})
export class SilicateDebugComponent implements OnInit {
  @Input() debug;

  constructor(private json: JsonPipe) {
  }

  ngOnInit() {
    this.debug = this.json.transform(this.debug)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
