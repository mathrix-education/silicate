import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {DefinitionBrick} from './definition-brick';


@Component({
  selector: 'edu-definition-brick',
  templateUrl: './definition-brick.component.html',
  styleUrls: ['./definition-brick.component.scss']
})
export class DefinitionBrickComponent extends BaseBrickComponent<DefinitionBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
