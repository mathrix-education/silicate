import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {BrickDeclaration} from '../../bricks/base-brick/brick-declaration';
import {ImageBrickComponent} from '../../bricks/image-brick/image-brick.component';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {SilicateService} from '../../services/silicate/silicate.service';

@Component({
  selector: 'mtx-silicate-proxy',
  templateUrl: './silicate-proxy.component.html',
  styleUrls: ['./silicate-proxy.component.scss']
})
export class SilicateProxyComponent<T extends BaseBrickComponent = BaseBrickComponent> implements OnInit, OnDestroy {
  @Input() index: number;
  @ViewChild('wrapper', {read: ViewContainerRef, static: true}) wrapper: ViewContainerRef;

  initialized = false;
  /**
   * The components registered in the proxy.
   */
  bricks: any[] = [
    TextBrickComponent,
    ImageBrickComponent
  ];
  brickDeclarations: BrickDeclaration[] = [];
  icon = 'settings';
  brickRef: ComponentRef<T>;

  constructor(
    public silicate: SilicateService,
    private componentFactory: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    this.initialized = true;
    // @ts-ignore
    this.brickDeclarations = this.silicate.bricks.map(b => b.declaration);
    this.render();
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
    const brickDeclaration = this.brickDeclarations.find((d: BrickDeclaration) => {
      return d.kind === this.silicate.data[this.index].kind;
    });

    if (!brickDeclaration) {
      throw new Error(`${this.silicate.data[this.index].kind} is not a valid brick type`);
    }

    // Inject the right brick in the wrapper
    const factory: ComponentFactory<T> = this.componentFactory.resolveComponentFactory<T>(brickDeclaration.component);

    this.brickRef = this.wrapper.createComponent(factory);
    this.brickRef.instance.assign(this.silicate.data[this.index]);
    this.brickRef.instance.brickChange.subscribe((brick) => {
      this.silicate.data[this.index] = brick;
    });

    this.icon = brickDeclaration.icon;
  }
}
