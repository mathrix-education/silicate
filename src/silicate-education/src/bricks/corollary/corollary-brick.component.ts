import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {CorollaryBrick} from './corollary-brick';


@Component({
  selector: 'edu-corollary-brick',
  templateUrl: './corollary-brick.component.html',
  styleUrls: ['./corollary-brick.component.scss']
})
export class CorollaryBrickComponent extends BaseBrickComponent<CorollaryBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
