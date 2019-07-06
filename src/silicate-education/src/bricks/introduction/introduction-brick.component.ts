import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {IntroductionBrick} from './introduction-brick';


@Component({
  selector: 'edu-introduction-brick',
  templateUrl: './introduction-brick.component.html',
  styleUrls: ['./introduction-brick.component.scss']
})
export class IntroductionBrickComponent extends BaseBrickComponent<IntroductionBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
