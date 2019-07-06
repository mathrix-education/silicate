import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {TheoremBrick} from './theorem-brick';


@Component({
  selector: 'edu-theorem-brick',
  templateUrl: './theorem-brick.component.html',
  styleUrls: ['./theorem-brick.component.scss']
})
export class TheoremBrickComponent extends BaseBrickComponent<TheoremBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
