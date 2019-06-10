import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent} from '../../../../silicate-core/src/bricks/base-brick/base-brick.component';
import {SilicateService} from '../../../../silicate-core/src/services/silicate/silicate.service';
import {EquationBrick} from './equation-brick';

@Component({
  selector: 'mtx-equation-brick',
  templateUrl: './equation-brick.component.html',
  styleUrls: ['./equation-brick.component.scss']
})
export class EquationBrickComponent extends BaseBrickComponent<EquationBrick> implements OnInit {
  static readonly kind = 'equation';
  static readonly icon = 'functions';
  static readonly displayName = 'Équation';

  constructor(public silicate: SilicateService) {
    super();
  }

  /**
   * Default equation.
   */
  static empty() {
    return {
      kind: 'equation',
      content: 'f(x) = x^2'
    };
  }

  ngOnInit() {
  }

  get content() {
    return this.model.content;
  }

  set content(content: string) {
    this.model.content = content;
    this.brickChange.emit(this.model);
  }
}
