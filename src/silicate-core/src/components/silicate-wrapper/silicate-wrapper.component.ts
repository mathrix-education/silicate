import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {Wall} from '../../interfaces/wall';


@Component({
  selector: 'silicate-wrapper',
  templateUrl: './silicate-wrapper.component.html',
  styleUrls: ['./silicate-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SilicateWrapperComponent {
  /** Two-way binding data. */
  @Input() data: Wall = [];
  @Output() dataChange = new EventEmitter<BaseBrick[]>();

  /** If the wrapper is the root one. Should be false for bricks which hold a wrapper. */
  @HostBinding('attr.data-silicate-root') @Input() root = true;
}
