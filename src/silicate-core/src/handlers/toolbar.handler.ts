import {Injectable} from '@angular/core';
import {SilicateEditableComponent} from '../components/silicate-editable/silicate-editable.component';
import {SelectionService} from '../services/selection/selection.service';
import {SilicateService} from '../services/silicate/silicate.service';
import {ToolbarService} from '../services/toolbar/toolbar.service';


@Injectable()
export class ToolbarHandler {
  constructor(
    private silicate: SilicateService,
    private selection: SelectionService,
    private toolbar: ToolbarService
  ) {
  }


  invoke($event, source: SilicateEditableComponent) {
    if (!this.silicate.editable) {
      return;
    }

    if (!this.selection.isSelectionCollapsed() && this.selection.isSelectionInside(source.wrapper)) {
      this.toolbar.show(source);
    } else {
      this.toolbar.hide(source);
    }
  }
}
