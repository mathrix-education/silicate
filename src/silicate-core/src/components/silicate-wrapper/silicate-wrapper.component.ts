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
import {TextBrick} from '../../bricks/text-brick/text-brick';
import {BaseBrickToolbarComponent} from '../../toolbars/base-brick-toolbar/base-brick-toolbar.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SilicateProxyComponent} from '../silicate-proxy/silicate-proxy.component';
import {Subscription} from 'rxjs';
import {SilicateHelpers} from '../../silicate.helpers';

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
  @Output() editableChange = new EventEmitter<boolean>();
  @Output() dataChange = new EventEmitter<BaseBrick[]>();

  @ViewChild('wall', {read: ViewContainerRef, static: false}) wall;
  @ViewChild('toolbar', {read: ViewContainerRef, static: true}) toolbar;
  @ViewChildren(SilicateProxyComponent) proxies: QueryList<SilicateProxyComponent>;

  private model: {
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

  trackByFn(index: any, item: any) {
    return index;
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
    if (changes.editable !== undefined) {
      if (changes.editable.currentValue === false) {
        this.toolbar.clear();
        this.unsubscribe();
      } else {
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
          const factory = this.componentFactory.resolveComponentFactory(toolbarComponent);
          this.toolbar.clear();
          this.toolbarRef = this.toolbar.createComponent(factory);
          this.toolbarRef.instance.componentRef = proxy.brickRef;
        })
      );

      this.brickChangesSubscriptions.push(
        proxy.brickRef.instance.brickChange.subscribe((brick: BaseBrick) => {
          this.data[proxyIndex] = brick;
        })
      );
    });

    SilicateHelpers.debug('[wrapper] subscriptions updated');
    return this;
  }

  /**
   * Destroy toolbar and brick changes subscriptions.
   */
  unsubscribe() {
    this.toolbarSubscriptions.forEach(s => s.unsubscribe());
    this.brickChangesSubscriptions.forEach(s => s.unsubscribe());

    SilicateHelpers.debug('[wrapper] subscriptions destroyed');
    return this;
  }

  /**
   * Append a new brick too the current content
   */
  onNewBrick() {
    this.data.push({
      kind: 'text',
      style: 'normal',
      content: 'Texte...'
    } as TextBrick);

    setTimeout(() => this.subscribe()); // We need to wait a tick
  }

  /**
   * Material CDK Drag'n'Drop handler
   */
  onDrag($event: CdkDragDrop<any>) {
    moveItemInArray(this.data, $event.previousIndex, $event.currentIndex);
    this.subscribe();
  }

  onDelete(index: number) {
    this.data.splice(index, 1);
  }
}
