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
import {hasChanged} from '../../helpers/functions';
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
  providers: []
})
export class SilicateWrapperComponent implements OnInit, OnChanges {
  @Input() editable = false;
  @Input() bricks: (typeof BaseBrickComponent)[] = [];

  // [(data)]
  @Input() data: BaseBrick[] = [];
  @Output() dataChange = new EventEmitter<BaseBrick[]>();

  @ViewChild('wall', {read: ViewContainerRef, static: false}) wall: ViewContainerRef;
  @ViewChild('toolbar', {read: ViewContainerRef, static: false}) toolbar: ViewContainerRef;
  @ViewChildren(SilicateProxyComponent) proxies: QueryList<SilicateProxyComponent>;

  constructor(public silicate: SilicateService) {
  }

  /*
   * Lifecycle hooks
   * ===============
   */
  ngOnInit(): void {
    this.silicate.generateMappings(this.bricks);

    // [(data)]
    this.silicate.wall$.subscribe((newData: BaseBrick[]) => {
      this.dataChange.emit(newData);
    });
    this.silicate.wall$.next(this.data);

    this.silicate.editable = this.editable;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (hasChanged(changes, 'editable')) {
      this.silicate.editable = changes.editable.currentValue;
    }
    if (hasChanged(changes, 'data')) {
      this.silicate.wall$.next(changes.data.currentValue);
    }
  }

  /**
   * Material CDK Drag'n'Drop handler.
   */
  onDrag($event: CdkDragDrop<any>) {
    const wall = this.silicate.wall;
    moveItemInArray(wall, $event.previousIndex, $event.currentIndex);
    this.silicate.wall$.next(wall);
  }
}
