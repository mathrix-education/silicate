import {Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {BlockBrickVariant} from './block-brick.variant';
import {BlockBrickVariants} from '../../silicate-education.tokens';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {BlockBrick} from './block-brick';

@Component({
  selector: 'edu-block-brick',
  templateUrl: './block-brick.component.html',
  styleUrls: ['./block-brick.component.scss']
})
export class BlockBrickComponent extends BaseBrickComponent<BlockBrick> implements OnInit {
  variant: BlockBrickVariant;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef<HTMLElement>,
    public silicate: SilicateService,
    @Inject(BlockBrickVariants) public blockBrickVariants: BlockBrickVariant[]
  ) {
    super();
  }

  ngOnInit() {
    this.applyVariant();
  }

  applyVariant() {
    this.variant = this.blockBrickVariants.find((bv) => this.data.variant === bv.variant);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', this.variant.color);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.variant.background);
  }

  onVariantChange(variant: BlockBrickVariant) {
    this.data.variant = variant.variant;
    this.applyVariant();
  }

  focus(): void {
    return;
  }
}
