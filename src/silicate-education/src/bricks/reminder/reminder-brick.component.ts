import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {ReminderBrick} from './reminder-brick';


@Component({
  selector: 'edu-reminder-brick',
  templateUrl: './reminder-brick.component.html',
  styleUrls: ['./reminder-brick.component.scss']
})
export class ReminderBrickComponent extends BaseBrickComponent<ReminderBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
