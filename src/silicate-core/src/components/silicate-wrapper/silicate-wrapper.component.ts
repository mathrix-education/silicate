import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
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
}
