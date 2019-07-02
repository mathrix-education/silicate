import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {BrickResolverService} from '../../services/brick-resolver/brick-resolver.service';
import {PurifierService} from '../../services/purifier/purifier.service';
import {SilicateService} from '../../services/silicate/silicate.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';
import {WallService} from '../../services/wall/wall.service';


@Component({
  selector: 'silicate-wrapper',
  templateUrl: './silicate-wrapper.component.html',
  styleUrls: ['./silicate-wrapper.component.scss'],
  providers: [
    BrickResolverService,
    PurifierService,
    SilicateService,
    ToolbarService,
    WallService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SilicateWrapperComponent implements OnInit, OnChanges, AfterViewInit {
  /** If the wrapper is the root one. Should be false for bricks which hold a wrapper. */
  @Input() root = true;
  /** If the edition is enabled. */
  @Input() editable = false;

  // [(data)] two-way binding
  @Input() data: BaseBrick[] = [];
  @Output() dataChange = new EventEmitter<BaseBrick[]>();


  constructor(
    private injector: Injector,
    private cd: ChangeDetectorRef,
    public silicate: SilicateService,
    public wall: WallService
  ) {
  }


  /**
   * Initialize everything
   */
  ngOnInit(): void {
    this.silicate.editable = this.editable;

    // Add missing uuid if necessary
    this.data = this.data.map((brick) => {
      if (!brick.hasOwnProperty('uuid')) {
        brick.uuid = uuid();
      }

      return brick;
    });

    // Push initial data to the Silicate Service
    this.wall.wall$.next(this.data);

    // (data) Output
    this.wall.wall$.subscribe((newData: BaseBrick[]) => {
      this.dataChange.emit(newData);
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editable) {
      /*
       * Push to the Silicate Service the modification of the edition mode, which is then propagated all over the
       * silicate components.
       */
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
    const wall = this.wall.wall;
    moveItemInArray(wall, $event.previousIndex, $event.currentIndex);
    this.wall.wall$.next(wall);
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
}
