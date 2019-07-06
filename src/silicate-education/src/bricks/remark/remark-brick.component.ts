import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {RemarkBrick} from './remark-brick';


@Component({
  selector: 'edu-remark-brick',
  templateUrl: './remark-brick.component.html',
  styleUrls: ['./remark-brick.component.scss']
})
export class RemarkBrickComponent extends BaseBrickComponent<RemarkBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
