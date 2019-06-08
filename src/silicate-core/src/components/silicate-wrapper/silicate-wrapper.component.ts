import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {BaseBrickToolbarComponent} from '../../toolbars/base-brick-toolbar/base-brick-toolbar.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SilicateProxyComponent} from '../silicate-proxy/silicate-proxy.component';
import {Subscription} from 'rxjs';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';

/**
 * Type explicit declared in Object literals:
 * @link https://stackoverflow.com/q/31816061
 */
@Component({
  selector: 'mtx-silicate-wrapper',
  templateUrl: './silicate-wrapper.component.html',
  styleUrls: ['./silicate-wrapper.component.scss']
})
export class SilicateWrapperComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() debug = false;
  @Input() canEdit = false;
  @Input() additionalBricks: any[] = [];

  @Output() editableChange = new EventEmitter<boolean>();
  @Output() dataChange = new EventEmitter<BaseBrick[]>();

  @ViewChild('wall', {read: ViewContainerRef, static: false}) wall: ViewContainerRef;
  @ViewChild('toolbar', {read: ViewContainerRef, static: false}) toolbar: ViewContainerRef;
  @ViewChildren(SilicateProxyComponent) proxies: QueryList<SilicateProxyComponent>;

  model: {
    editable: boolean,
    data: BaseBrick[]
  } = {
    editable: false,
    data: []
  };

  toolbarRef: ComponentRef<BaseBrickToolbarComponent>;
  toolbarSubscriptions: Subscription[] = [];
  brickChangesSubscriptions: Subscription[] = [];

  constructor(private componentFactory: ComponentFactoryResolver) {
  }

  /*
   * [(editable)]
   * ============
   */
  @Input()
  get editable() {
    return this.model.editable;
  }

  set editable(editable: boolean) {
    this.model.editable = editable;
    this.editableChange.emit(editable);
  }

  /*
   * [(data)]
   * ========
   */
  @Input()
  get data() {
    return this.model.data;
  }

  set data(data: BaseBrick[]) {
    this.model.data = data;
    this.dataChange.emit(data);
  }

  /*
   * Lifecycle hooks
   * ===============
   */
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.editable) {
      this.subscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('editable')) {
      if (changes.editable.currentValue === false) {
        this.toolbar.clear();
        this.unsubscribe();
      }
    }

    if (changes.hasOwnProperty('data')) {
      if (this.proxies !== undefined) {
        this.subscribe();
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  /**
   * Reset toolbar and brick changes subscriptions.
   */
  subscribe() {
    this.unsubscribe();

    this.proxies.map((proxy, proxyIndex) => {
      this.toolbarSubscriptions.push(
        proxy.brickRef.instance.toolbar.subscribe((toolbarComponent) => {

          const factory = this.componentFactory.resolveComponentFactory<BaseBrickToolbarComponent>(toolbarComponent);
          this.toolbar.clear();
          this.toolbarRef = this.toolbar.createComponent(factory);
          this.toolbarRef.instance.componentRef = proxy.brickRef;
        })
      );

      this.brickChangesSubscriptions.push(
        proxy.brickRef.instance.brickChange.subscribe((brick: BaseBrick) => {
          // proxy.brickRef.instance.assign(brick);
          this.model.data[proxyIndex] = brick;
          this.dataChange.emit(this.model.data);
        })
      );
    });

    return this;
  }

  /**
   * Destroy toolbar and brick changes subscriptions.
   */
  unsubscribe() {
    this.toolbarSubscriptions.forEach(s => s.unsubscribe());
    this.brickChangesSubscriptions.forEach(s => s.unsubscribe());

    return this;
  }

  /**
   * Append a new brick too the current content
   */
  onNewBrick() {
    this.data.push(TextBrickComponent.empty());
    setTimeout(() => this.subscribe()); // We need to wait a tick
  }

  /**
   * Material CDK Drag'n'Drop handler
   */
  onDrag($event: CdkDragDrop<any>) {
    moveItemInArray(this.data, $event.previousIndex, $event.currentIndex);
    setTimeout(() => this.subscribe());
  }

  onDelete(index: number) {
    this.data.splice(index, 1);
    console.log(this.data);
    setTimeout(() => this.subscribe());
  }
}
