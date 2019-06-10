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
  brickRef: ComponentRef<T>;

  constructor(
    public silicate: SilicateService,
    private componentFactory: ComponentFactoryResolver
  ) {
  }

  get icon() {
    try {
      return this.silicate.getIcon(this.silicate.data[this.index].kind);
    } catch (e) {
      return 'settings';
    }
  }

  get bricks() {
    return Object.values(this.silicate.bricksMappings);
  }

  ngOnInit() {
    this.initialized = true;
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

    // Inject the right brick in the wrapper
    const factory: ComponentFactory<T> = this.componentFactory
      .resolveComponentFactory<T>(
        this.silicate.getBrickComponent(this.silicate.data[this.index].kind)
      );

    this.brickRef = this.wrapper.createComponent(factory);
    this.brickRef.instance.assign(this.silicate.data[this.index]);
    this.brickRef.instance.brickChange.subscribe((brick) => {
      this.silicate.data[this.index] = brick;
    });
  }
}
