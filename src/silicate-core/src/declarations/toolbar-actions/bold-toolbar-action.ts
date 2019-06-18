import {Injectable} from '@angular/core';
import {SelectionService} from '../../services/selection/selection.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';


@Injectable()
export class BoldToolbarAction {
  readonly id = 'bold';
  readonly icon = 'format_bold';


  constructor(private selection: SelectionService, private toolbar: ToolbarService) {
  }


  callback() {
    this.selection.saveSelection();
    document.execCommand('bold', false);
    this.toolbar.component.sync();
    this.selection.restoreSelection();
  }
}
