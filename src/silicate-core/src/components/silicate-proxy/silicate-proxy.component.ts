import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {bricksDeclarations} from '../../silicate.types';
import {SilicateHelpers} from '../../silicate.helpers';

@Component({
  selector: 'mtx-silicate-proxy',
  templateUrl: './silicate-proxy.component.html',
  styleUrls: ['./silicate-proxy.component.scss']
})
export class SilicateProxyComponent<T extends BaseBrickComponent = BaseBrickComponent> implements OnInit, OnChanges {
  @Input() editable: boolean;
  @Output() brickChange = new EventEmitter<BaseBrick>();
  @Output() delete = new EventEmitter();

  @ViewChild('wrapper', {read: ViewContainerRef, static: true}) wrapper: ViewContainerRef;

  icon = 'settings';

  brickValue: BaseBrick;
  brickRef: ComponentRef<T>;
  brickDeclarations = Object.values(bricksDeclarations);

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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editable !== undefined) {
      this.editable = changes.editable.currentValue;

      if (this.brickRef !== undefined) {
        this.brickRef.instance.editable = changes.editable.currentValue;
      }
    }
  }

  /**
   * Properly clean the wrapper before destroy the brick procy.
   */
  onDelete() {
    this.wrapper.clear();
    this.delete.emit();

    SilicateHelpers.debug('[proxy] deleted');
  }

  render() {
    this.wrapper.clear();

    if (this.brickRef) {
      this.brickRef.destroy();
    }

    if (!bricksDeclarations.hasOwnProperty(this.brick.kind)) {
      throw new Error(`${this.brick.kind} is not a valid brick type`);
    }

    const brickComponent = bricksDeclarations[this.brick.kind].component;
    const factory: ComponentFactory<T> = this.componentFactory.resolveComponentFactory<T>(brickComponent);

    this.brickRef = this.wrapper.createComponent(factory);
    this.brickRef.instance.assign(this.brick);
    this.brickRef.instance.editable = this.editable;
    this.brickRef.instance.brickChange.subscribe((brick) => {
      this.brick = brick;
    });

    this.icon = bricksDeclarations[this.brick.kind].icon;

    SilicateHelpers.debug('[proxy] render');
  }
}
