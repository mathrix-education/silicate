import {AfterViewInit, Component, ElementRef, HostBinding, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
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
  @ViewChild('titleContainer') titleContainerElementRef: ElementRef<HTMLHeadingElement>;
  @ViewChild('prefix') prefixElementRef: ElementRef<HTMLElement>;
  @ViewChild('title') titleElementRef: ElementRef<HTMLSpanElement>;
  @ViewChild('suffix') suffixElementRef: ElementRef<HTMLElement>;

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

  onPrefixChange($event: string) {
    this.data.prefix = $event;
    this.computeTitle();
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

  focus(): void {
    return;
  }
}
