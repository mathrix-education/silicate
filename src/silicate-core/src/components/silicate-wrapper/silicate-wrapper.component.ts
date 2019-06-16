import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {
  AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {SilicateService} from '../../services/silicate/silicate.service';
import {SilicateProxyComponent} from '../silicate-proxy/silicate-proxy.component';


/**
 * Type explicit declared in Object literals:
 * @link https://stackoverflow.com/q/31816061
 */
@Component({
  selector: 'mtx-silicate-wrapper',
  templateUrl: './silicate-wrapper.component.html',
  styleUrls: ['./silicate-wrapper.component.scss'],
  providers: [SilicateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SilicateWrapperComponent implements OnInit, OnChanges, AfterViewInit {
  /** If the wrapper is the root one. Should be false for bricks which hold a wrapper. */
  @Input() root = true;
  /** If the edition is enabled. */
  @Input() editable = false;
  /** The enabled brick components. */
  @Input() bricks: (typeof BaseBrickComponent)[] = [];

  // [(data)] two-way binding
  @Input() data: BaseBrick[] = [];
  @Output() dataChange = new EventEmitter<BaseBrick[]>();

  /** The #wall ViewContainerRef */
  @ViewChild('wall', {read: ViewContainerRef, static: false}) wall: ViewContainerRef;
  /** The SilicateProxyComponent QueryList */
  @ViewChildren(SilicateProxyComponent) proxies: QueryList<SilicateProxyComponent>;


  constructor(public silicate: SilicateService, private cd: ChangeDetectorRef) {
  }


  /**
   * We need to track brick changes using their UUID for two main reasons:
   * 1. A change in the n-th brick should only trigger the re-render of the n-th ngFor item
   * 2. We avoid a lost focus issue.
   *
   * @see https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5
   *
   * @param index The brick index [0 -> n-1].
   * @param brick The brick data.
   */
  trackByFn(index: any, brick: BaseBrick) {
    return brick.uuid;
  }


  /**
   * ngOnInit hook
   */
  ngOnInit(): void {
    this.silicate.generateMappings(this.bricks);
    this.silicate.editable = this.editable;


    // Add missing uuid if necessary
    this.data = this.data.map((brick) => {
      if (!brick.hasOwnProperty('uuid')) {
        brick.uuid = uuid();
      }

      return brick;
    });

    // Push initial data to the Silicate Service
    this.silicate.wall$.next(this.data);

    // (data) Output
    this.silicate.wall$.subscribe((newData: BaseBrick[]) => {
      // Since the use of the brick uuid are only used internally, there is no reason to emit them outside the wrapper.
      // this.dataChange.emit(newData.map(d => {
      //   delete d.uuid;
      //   return d;
      // }));
      this.dataChange.emit(newData);
    });
  }


  /**
   * ngOnChanges hook
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editable) {
      // Push to the Silicate Service the modification of the edition mode, which is then propagated all over the silicate components.
      this.silicate.editable = changes.editable.currentValue;
    }
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }


  /**
   * Material CDK Drag'n'Drop handler.
   * @see https://material.angular.io/cdk/drag-drop/overview
   */
  onDrag($event: CdkDragDrop<any>) {
    /**
     * We need a copy of the current brick array, because the BehaviorSubject is immutable.
     * @see https://stackoverflow.com/q/56574381
     */
    const wall = this.silicate.wall;
    moveItemInArray(wall, $event.previousIndex, $event.currentIndex);
    this.silicate.wall$.next(wall);
  }
}
