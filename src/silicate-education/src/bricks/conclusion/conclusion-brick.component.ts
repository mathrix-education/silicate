import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {ConclusionBrick} from './conclusion-brick';


@Component({
  selector: 'edu-conclusion-brick',
  templateUrl: './conclusion-brick.component.html',
  styleUrls: ['./conclusion-brick.component.scss']
})
export class ConclusionBrickComponent extends BaseBrickComponent<ConclusionBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
