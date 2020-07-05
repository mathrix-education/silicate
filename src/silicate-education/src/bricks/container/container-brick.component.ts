import {AfterViewInit, Component, HostBinding, Inject, OnInit} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {ContainerBrick} from './container-brick';
import {lcfirst, ucfirst} from '../../helpers/string.helper';
import {ContainerBrickVariants} from '../../silicate-education.tokens';
import {ContainerBrickVariant} from './container-brick.variant';


@Component({
  selector: 'edu-container-brick',
  templateUrl: './container-brick.component.html',
  styleUrls: ['./container-brick.component.scss']
})
export class ContainerBrickComponent extends BaseBrickComponent<ContainerBrick> implements OnInit, AfterViewInit {

  @HostBinding('class') get style() {
    return this.data.variant;
  }

  title: string;
  variant: ContainerBrickVariant;

  constructor(
    @Inject(ContainerBrickVariants) public containerBrickVariants: ContainerBrickVariant[]
  ) {
    super();
  }

  ngOnInit(): void {
    this.variant = this.containerBrickVariants.find((bv) => bv.variant === this.data.variant);
    this.computeTitle();
  }

  ngAfterViewInit() {
    this.data.variant = this.variant.variant;
    this.computeTitle();
  }


  computeTitle() {
    if (this.data.prefix === '') {
      this.title = ucfirst(this.variant.title);
    } else {
      this.title = lcfirst(this.variant.title);
    }
  }
}
