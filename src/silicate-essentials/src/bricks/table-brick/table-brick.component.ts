import {Component} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {TableBrick} from './table-brick';
import {moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'silicate-table-brick',
  templateUrl: './table-brick.component.html',
  styleUrls: ['./table-brick.component.scss']
})
export class TableBrickComponent extends BaseBrickComponent<TableBrick> {
  constructor(public silicate: SilicateService) {
    super();
  }

  trackBy(index, item) {
    return index;
  }

  focus(): void {
    return;
  }

  /**
   * Add a column at the given index.
   *
   * @param columnIndex The column index.
   */
  addColumn(columnIndex: number) {
    this.data.matrix.forEach((row) => {
      row.splice(columnIndex, 0, []);
    });
  }

  moveColumn(fromIndex: number, toIndex: number) {
    this.data.matrix.forEach((row) => {
      moveItemInArray(row, fromIndex, toIndex);
    });
  }

  /**
   * Delete a column.
   *
   * @param columnIndex The column index.
   */
  deleteColumn(columnIndex: number) {
    this.data.matrix.forEach((row) => {
      row.splice(columnIndex, 1);
    });
  }

  moveRow(fromIndex: number, toIndex: number) {
    moveItemInArray(this.data.matrix, fromIndex, toIndex);
  }

  /**
   * Add a row.
   *
   * @param rowIndex The row index.
   */
  addRow(rowIndex: number) {
    const row = Array(this.data.matrix[0].length).fill([]);
    this.data.matrix.splice(rowIndex, 0, row);
  }

  /**
   * Delete a rowIndex.
   *
   * @param rowIndex The rowIndex index.
   */
  deleteRow(rowIndex: number) {
    this.data.matrix.splice(rowIndex, 1);
  }
}
