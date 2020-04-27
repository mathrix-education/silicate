import {Component, HostBinding} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {ColumnsBrick, ColumnType} from './columns-brick';

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

  constructor(public silicate: SilicateService) {
    super();
  }

  /**
   * Change the number of columns.
   * @param columnType The column type.
   */
  changeColumnNumbers(columnType: ColumnType) {
    this.data.columns = columnType;
    super.ngDoCheck();
  }

  focus() {
  }

}