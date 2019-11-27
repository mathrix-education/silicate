import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from 'rxjs';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {Brick} from '../../interfaces/brick';
import {SilicateService} from '../../services/silicate/silicate.service';
import {WallService} from '../../services/wall/wall.service';


@Component({
  selector: 'silicate-proxy',
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
    private injector: Injector,
    private componentFactory: ComponentFactoryResolver,
    public silicate: SilicateService,
    public wall: WallService
  ) {
  }

  get kind() {
    return this.wall.get(this.index).kind;
  }

  get icon() {
    try {
      return this.silicate.resolve(this.kind).icon;
    } catch (e) {
      return 'settings';
    }
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
    if (this.dataChangeSubscription instanceof Subscription) {
      this.dataChangeSubscription.unsubscribe();
    }

    if (this.wrapper instanceof ViewContainerRef) {
      this.wrapper.clear(); // Remove any content in the wrapper
    }

    if (this.brickRef instanceof ComponentRef) {
      this.brickRef.destroy(); // Destroy the Brick reference if it exists.
    }
  }


  /**
   * Append a new brick to this one.
   * @param brickDeclaration The new brick declaration.
   */
  append(brickDeclaration: Brick) {
    const empty = this.injector.get(brickDeclaration.factory).make();
    this.wall.insert(this.index + 1, empty);
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
    const kind = this.wall.get(this.index).kind;
    const component = this.silicate.resolve(kind).component;
    const factory: ComponentFactory<T> = this.componentFactory.resolveComponentFactory<T>(component as Type<T>);
    this.brickRef = this.wrapper.createComponent(factory, undefined, this.injector);
    this.wall.setBrickReference(this.index, this.brickRef);

    // [(data)] "artificial" two-way binding
    this.brickRef.instance.data = this.wall.get(this.index);
    this.dataChangeSubscription = this.brickRef.instance.dataChange
      .subscribe((data) => {
        this.wall.patch(this.index, data);
      });
  }
}
