import {Component, HostBinding} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {ColumnsBrick} from './columns-brick';

/**
 * Displays a banner that highlights content
 */
@Component({
  selector: 'silicate-column',
  templateUrl: './columns-brick.component.html',
  styleUrls: ['./columns-brick.component.scss']
})
export class ColumnsBrickComponent extends BaseBrickComponent<ColumnsBrick> {
  @HostBinding('attr.class') get classes() {
    return `columns-${this.data.columns}`;
  }
}
