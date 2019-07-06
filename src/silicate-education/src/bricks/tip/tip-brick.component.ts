import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {TipBrick} from './tip-brick';


@Component({
  selector: 'edu-tip-brick',
  templateUrl: './tip-brick.component.html',
  styleUrls: ['./tip-brick.component.scss']
})
export class TipBrickComponent extends BaseBrickComponent<TipBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
