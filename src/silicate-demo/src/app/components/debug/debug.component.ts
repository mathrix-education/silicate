import {Component, OnInit} from '@angular/core';
import {DemoService} from '../../services/demo.service';


@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  buffer: string;

  constructor(public demo: DemoService) {
  }

  ngOnInit() {
    this.pull();
  }

  pull() {
    this.buffer = JSON.stringify(this.demo.data, undefined, 2);
  }

  push() {
    this.demo.data = [];
    setTimeout(() => this.demo.data = JSON.parse(this.buffer));
  }
}
