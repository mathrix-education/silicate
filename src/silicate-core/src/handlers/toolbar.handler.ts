import {Injectable} from '@angular/core';
import {SilicateEditableComponent} from '../components/silicate-editable/silicate-editable.component';
import {SelectionService} from '../services/selection/selection.service';
import {ToolbarService} from '../services/toolbar/toolbar.service';


@Injectable()
export class ToolbarHandler {
  constructor(
    private selection: SelectionService,
    private toolbar: ToolbarService
  ) {
  }


  invoke($event, source: SilicateEditableComponent) {
    if (!source.silicate.editable) {
      return;
    }

    if (!this.selection.isSelectionCollapsed() && this.selection.isSelectionInside(source.wrapper)) {
      this.toolbar.show(source);
    } else {
      this.toolbar.hide(source);
    }
  }
}
