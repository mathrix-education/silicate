import {AfterViewInit, Component, ElementRef, HostBinding, Inject, OnInit, ViewChild} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
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
  @ViewChild('wrapper') wrapperElementRef: ElementRef<HTMLDivElement>;

  @HostBinding('class') get style() { return this.data.variant; }
  title: string;
  variant: ContainerBrickVariant;

  constructor(
    public silicate: SilicateService,
    @Inject(ContainerBrickVariants) public containerBrickVariants: ContainerBrickVariant[]
  ) {
    super();
  }

  ngOnInit(): void {
    this.variant = this.containerBrickVariants.find((bv) => bv.variant === this.data.variant);
    this.computeTitle();
  }

  ngAfterViewInit() {
    this.applyVariant();
  }



  computeTitle() {
    if (this.data.prefix === '') {
      this.title = ucfirst(this.variant.title);
    } else {
      this.title = lcfirst(this.variant.title);
    }
  }

  onVariantChange(variant: ContainerBrickVariant) {
    this.variant = variant;
    this.data.variant = this.variant.variant;
    this.applyVariant();
  }

  applyVariant() {
    this.data.variant = this.variant.variant;
    this.computeTitle();
  }
}
