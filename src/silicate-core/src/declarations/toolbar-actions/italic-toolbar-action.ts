import {ToolbarAction, ToolbarService} from '../../services/toolbar/toolbar.service';


export const ItalicToolbarAction: ToolbarAction = {
  id: 'italic',
  icon: 'format_italic',
  callback: (service: ToolbarService) => {
    service.selection.saveSelection();
    document.execCommand('italic', false);
    service.component.sync();
    service.selection.restoreSelection();
  }
};
