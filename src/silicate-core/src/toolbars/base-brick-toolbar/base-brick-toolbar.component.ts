import {ComponentRef, OnInit} from '@angular/core';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';

export class BaseBrickToolbarComponent<T extends BaseBrickComponent = BaseBrickComponent> implements OnInit {
  componentRef: ComponentRef<T>;

  constructor() {
  }

  ngOnInit() {
  }

}
