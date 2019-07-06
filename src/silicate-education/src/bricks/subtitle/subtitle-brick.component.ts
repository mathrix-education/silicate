import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {SubTitleBrick} from './subtitle-brick';


@Component({
  selector: 'edu-subtitle-brick',
  templateUrl: './subtitle-brick.component.html',
  styleUrls: ['./subtitle-brick.component.scss']
})
export class SubtitleBrickComponent extends BaseBrickComponent<SubTitleBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
