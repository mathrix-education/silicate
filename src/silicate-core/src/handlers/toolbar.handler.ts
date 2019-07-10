import {Injectable} from '@angular/core';
import {SelectionService} from '../services/selection/selection.service';
import {ToolbarService} from '../services/toolbar/toolbar.service';
import {SilicateDirective} from '../directives/silicate.directive';


@Injectable()
export class ToolbarHandler {
  constructor(
    private selection: SelectionService,
    private toolbar: ToolbarService
  ) {
  }


  invoke($event, source: SilicateDirective) {
    if (!source.silicate.editable) {
      return;
    }

    if (!this.selection.isSelectionCollapsed() && this.selection.isSelectionInside(source.elementRef)) {
      this.toolbar.show(source);
    } else {
      this.toolbar.hide(source);
    }
  }
}
