import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {
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
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {hasChanged} from '../../helpers/functions';
import {SilicateService} from '../../services/silicate/silicate.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';
import {SilicateProxyComponent} from '../silicate-proxy/silicate-proxy.component';

/**
 * Type explicit declared in Object literals:
 * @link https://stackoverflow.com/q/31816061
 */
@Component({
  selector: 'mtx-silicate-wrapper',
  templateUrl: './silicate-wrapper.component.html',
  styleUrls: ['./silicate-wrapper.component.scss'],
  providers: [
    SilicateService,
    ToolbarService
  ]
})
export class SilicateWrapperComponent implements OnInit, OnChanges {
  @Input() editable = false;
  @Input() bricks: BaseBrickComponent[] = [];
  @Input() data: BaseBrick[] = [];

  @Output() dataChange = new EventEmitter<BaseBrick[]>();

  @ViewChild('wall', {read: ViewContainerRef, static: false}) wall: ViewContainerRef;
  @ViewChild('toolbar', {read: ViewContainerRef, static: false}) toolbar: ViewContainerRef;
  @ViewChildren(SilicateProxyComponent) proxies: QueryList<SilicateProxyComponent>;

  constructor(
    public silicate: SilicateService,
  ) {
  }

  /*
   * Lifecycle hooks
   * ===============
   */
  ngOnInit(): void {
    this.silicate.bricks = this.bricks;

    // [(data)]
    this.silicate.data$.subscribe((newData: BaseBrick[]) => {
      this.dataChange.emit(newData);
    });
    this.silicate.data = this.data;

    this.silicate.editable = this.editable;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (hasChanged(changes, 'editable')) {
      this.silicate.editable = changes.editable.currentValue;
    }
    if (hasChanged(changes, 'data')) {
      this.silicate.data = changes.data.currentValue;
    }
  }

  /**
   * Append a new brick too the current content.
   */
  onNewBrick() {
    this.silicate.data.push(TextBrickComponent.empty());
  }

  /**
   * Material CDK Drag'n'Drop handler.
   */
  onDrag($event: CdkDragDrop<any>) {
    moveItemInArray(this.silicate.data, $event.previousIndex, $event.currentIndex);
  }
}
