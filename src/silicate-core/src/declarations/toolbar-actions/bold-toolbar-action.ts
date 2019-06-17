import {ToolbarAction, ToolbarService} from '../../services/toolbar/toolbar.service';

export const BoldToolbarAction: ToolbarAction = {
  id: 'bold',
  icon: 'format_bold',
  callback: (service: ToolbarService) => {
    service.selection.saveSelection();
    document.execCommand('bold', false);
    service.component.sync();
    service.selection.restoreSelection();
  }
};
