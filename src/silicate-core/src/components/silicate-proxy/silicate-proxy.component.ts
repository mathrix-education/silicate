import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from 'rxjs';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {Brick} from '../../interfaces/brick';
import {SilicateService} from '../../services/silicate/silicate.service';
import {WallService} from '../../services/wall/wall.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {recursiveReplace} from '../../helper/recursive-replace';


@Component({
  selector: 'silicate-proxy',
  templateUrl: './silicate-proxy.component.html',
  styleUrls: ['./silicate-proxy.component.scss']
})
export class SilicateProxyComponent<T extends BaseBrickComponent = BaseBrickComponent> implements OnInit, OnDestroy {

  /** A prefix used for copy paste. */
  private readonly prefix = '*SILICATE*';

  constructor(private injector: Injector,
              private componentFactory: ComponentFactoryResolver,
              private renderer2: Renderer2,
              public silicate: SilicateService,
              private snackBar: MatSnackBar,
              public wall: WallService) {
  }

  /**
   * Return the brick kind.
   */
  get kind(): string {
    return this.wall.get(this.index).kind;
  }

  /**
   * Return the brick icon.
   */
  get icon(): string {
    try {
      return this.silicate.resolve(this.kind).icon;
    } catch (e) {
      return 'settings';
    }
  }

  /** A whitelist of bricks. */
  @Input() whitelist: string[];
  /** The index of the silicate wrapper */
  @Input() index: number;
  @ViewChild('wrapper', {read: ViewContainerRef, static: true}) wrapper: ViewContainerRef;

  initialized = false;
  brickRef: ComponentRef<T>;
  dataChangeSubscription: Subscription;

  brickPasted = false;


  ngOnInit(): void {
    this.initialized = true;
    this.render();
  }

  /**
   * Clear the proxy content.
   */
  private clear(): void {
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

    // useful to identify wall items
    if (this.silicate.editable) {
      this.renderer2.addClass(this.brickRef.location.nativeElement, 'silicate-wall-item');
    }
  }

  /**
   * Cut the current brick.
   */
  copy(): void {
    const wall = this.wall.get(this.index);
    navigator.clipboard.writeText(`${this.prefix}${JSON.stringify(wall)}`).then(
      () => {
        this.brickPasted = true;
        this.snackBar.open('Brique copiée dans le presse papier', null, {duration: 2000});
      }
    );
  }

  /**
   * Paste bellow.
   */
  pasteBellow(): void {
    navigator.clipboard.readText().then((clipText) => {
      let brick;
      try {
        clipText = clipText.replace(this.prefix, '');
        brick = JSON.parse(clipText);
        brick = recursiveReplace(brick);
      } catch (e) {
        return;
      }

      navigator.clipboard.writeText('').then(() => {
        this.wall.insert(this.index + 1, brick);
      });
    });
  }

  /**
   * Check the clipboard.
   */
  checkClipboard(): void {
    navigator.clipboard.readText().then((clipText) => {
      this.brickPasted = clipText.includes(this.prefix);
    });
  }

  ngOnDestroy(): void {
    this.clear();
  }
}
