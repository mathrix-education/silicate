import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit, Optional,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {Bricks} from "../../silicate-core.tokens";
import {Brick} from "../../interfaces/brick";


@Component({
  selector: 'silicate-proxy',
  templateUrl: './silicate-proxy.component.html',
  styleUrls: ['./silicate-proxy.component.scss']
})
export class SilicateProxyComponent<T extends BaseBrickComponent = BaseBrickComponent> implements OnInit, OnDestroy {
  @Input() data;
  @ViewChild('wrapper', {read: ViewContainerRef, static: true}) wrapper: ViewContainerRef;
  /** The brick reference. */
  brickRef: ComponentRef<T>;

  constructor(
    private injector: Injector,
    private componentFactory: ComponentFactoryResolver,
    @Inject(Bricks) public bricksDeclarations: Brick[],
  ) {
  }

  ngOnInit(): void {
    this.render();
  }

  /**
   * Clear the proxy content.
   */
  private clear(): void {
    if (this.wrapper instanceof ViewContainerRef) {
      this.wrapper.clear(); // Remove any content in the wrapper
    }

    if (this.brickRef instanceof ComponentRef) {
      this.brickRef.destroy(); // Destroy the Brick reference if it exists.
    }
  }


  /**
   * Render the Brick in the proxy.
   */
  private render(): void {
    // Inject the right brick in the wrapper
    const component = this.resolve(this.data.kind).component;
    const factory: ComponentFactory<T> = this.componentFactory.resolveComponentFactory<T>(component as Type<T>);
    this.brickRef = this.wrapper.createComponent(factory, undefined, this.injector);
  }

  ngOnDestroy(): void {
    this.clear();
  }

  /**
   * Resolve a brick by its kind.
   * @param kind The brick kind (e.g. 'text')
   */
  resolve(kind: string): Brick {
    const resolved = this.bricksDeclarations.find(b => b.kind === kind);

    if (resolved === undefined) {
      throw new Error(`Brick kind '${kind}' is not declared.`);
    }

    return resolved;
  }
}
