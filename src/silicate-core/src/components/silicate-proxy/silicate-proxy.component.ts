import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from 'rxjs';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {SilicateService} from '../../services/silicate/silicate.service';
import {BrickDeclaration} from '../../silicate-core.types';

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
  dataChangeSubscription: Subscription;

  constructor(
    public silicate: SilicateService,
    private componentFactory: ComponentFactoryResolver
  ) {
  }

  get icon() {
    try {
      return this.silicate.resolve(this.silicate.get(this.index).kind).icon;
    } catch (e) {
      return 'settings';
    }
  }

  get declarations(): BrickDeclaration[] {
    return Object.values(this.silicate.mappings);
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
    this.dataChangeSubscription.unsubscribe();
    this.wrapper.clear(); // Remove any content in the wrapper
    this.brickRef.destroy(); // Destroy the Brick reference if it exists.
  }

  /**
   * Swap the current brick with another
   * @param declaration The new brick declaration.
   */
  swap(declaration: BrickDeclaration) {
    const old = this.silicate.get(this.index);
    const empty = declaration.component.empty();

    // UX: copy the old properties to the new brick instance if they exist
    Object.keys(old).forEach(k => {
      if (k !== 'kind' && empty.hasOwnProperty(k)) {
        empty[k] = old[k];
      }
    });

    this.silicate.patch(this.index, empty);
    this.render();
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
    if (this.index === 0) {
      console.log(this.index, this.silicate.get(this.index));
    }

    const kind = this.silicate.get(this.index).kind;
    const component = this.silicate.resolve(kind).component;
    const factory: ComponentFactory<T> = this.componentFactory.resolveComponentFactory<T>(component as Type<T>);
    this.brickRef = this.wrapper.createComponent(factory);

    // [(data)] "artificial" two-way binding
    this.brickRef.instance.data = this.silicate.get(this.index);
    this.dataChangeSubscription = this.brickRef.instance.dataChanged.subscribe((data) => {
      this.silicate.patch(this.index, data);
    });
  }
}
