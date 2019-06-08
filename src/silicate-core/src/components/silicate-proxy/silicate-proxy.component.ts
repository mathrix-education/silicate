import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {ImageBrickComponent} from '../../bricks/image-brick/image-brick.component';
import {BrickDeclaration} from '../../bricks/base-brick/brick-declaration';

@Component({
  selector: 'mtx-silicate-proxy',
  templateUrl: './silicate-proxy.component.html',
  styleUrls: ['./silicate-proxy.component.scss']
})
export class SilicateProxyComponent<T extends BaseBrickComponent = BaseBrickComponent> implements OnInit, OnChanges, OnDestroy {
  @Input() editable: boolean;
  @Input() additionalBricks: any[];

  @Output() brickChange = new EventEmitter<BaseBrick>();
  @Output() delete = new EventEmitter();

  @ViewChild('wrapper', {read: ViewContainerRef, static: true}) wrapper: ViewContainerRef;

  initialized = false;
  /**
   * The components registered in the proxy.
   */
  bricks: any[] = [
    TextBrickComponent,
    ImageBrickComponent,
  ];
  brickDeclarations: BrickDeclaration[] = [];

  icon = 'settings';

  brickValue: BaseBrick;
  brickRef: ComponentRef<T>;

  constructor(private componentFactory: ComponentFactoryResolver) {
  }

  @Input()
  get brick() {
    return this.brickValue;
  }

  set brick(brick) {
    const reRender = this.brickValue === undefined || this.brickValue.kind !== brick.kind;
    this.brickValue = brick;
    this.brickChange.emit(brick);

    if (reRender) {
      this.render();
    }
  }

  ngOnInit() {
    this.initialized = true;
    this.bricks = [...this.bricks, ...this.additionalBricks];
    this.brickDeclarations = this.bricks.map(b => b.declaration);
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editable !== undefined) {
      this.editable = changes.editable.currentValue;

      if (this.brickRef !== undefined) {
        this.brickRef.instance.editable = changes.editable.currentValue;
      }
    }
  }

  ngOnDestroy(): void {
    this.clear();
  }

  /**
   * Clear the proxy content.
   */
  clear() {
    this.wrapper.clear(); // Remove any content in the wrapper
    this.brickRef.destroy(); // Destroy the Brick reference if it exists.
  }

  /**
   * Render the Brick in the proxy.
   */
  render() {
    if (!this.initialized) {
      return; // Do not render if not initialized
    }

    if (this.brickRef) {
      this.clear(); // Clear before rendering
    }

    // Find the matching BrickDeclaration by comparing the 'kind' key.
    const brickDeclaration = this.brickDeclarations.find((d: BrickDeclaration) => d.kind === this.brick.kind);

    if (!brickDeclaration) {
      throw new Error(`${this.brick.kind} is not a valid brick type`);
    }

    // Inject the right brick in the wrapper
    const factory: ComponentFactory<T> = this.componentFactory.resolveComponentFactory<T>(brickDeclaration.component);

    this.brickRef = this.wrapper.createComponent(factory);
    this.brickRef.instance.assign(this.brick);
    this.brickRef.instance.editable = this.editable;
    this.brickRef.instance.brickChange.subscribe((brick) => {
      this.brick = brick;
    });

    this.icon = brickDeclaration.icon;
  }

  onDelete() {
    this.clear();
    this.delete.emit();
  }
}
