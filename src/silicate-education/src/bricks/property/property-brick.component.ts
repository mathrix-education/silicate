import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {PropertyBrick} from './property-brick';


@Component({
  selector: 'edu-property-brick',
  templateUrl: './property-brick.component.html',
  styleUrls: ['./property-brick.component.scss']
})
export class PropertyBrickComponent extends BaseBrickComponent<PropertyBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
