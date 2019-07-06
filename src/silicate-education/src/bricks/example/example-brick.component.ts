import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {ExampleBrick} from './example-brick';


@Component({
  selector: 'edu-example-brick',
  templateUrl: './example-brick.component.html',
  styleUrls: ['./example-brick.component.scss']
})
export class ExampleBrickComponent extends BaseBrickComponent<ExampleBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
