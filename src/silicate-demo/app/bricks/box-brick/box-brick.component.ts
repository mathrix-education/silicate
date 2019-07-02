import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {BoxBrick} from './box-brick';


@Component({
  selector: 'app-box-brick',
  templateUrl: './box-brick.component.html',
  styleUrls: ['./box-brick.component.scss']
})
export class BoxBrickComponent extends BaseBrickComponent<BoxBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
