import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {TrapBrick} from './trap-brick';


@Component({
  selector: 'edu-trap-brick',
  templateUrl: './trap-brick.component.html',
  styleUrls: ['./trap-brick.component.scss']
})
export class TrapBrickComponent extends BaseBrickComponent<TrapBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
