import {LinkDialogComponent} from '../../dialogs/link-dialog/link-dialog.component';
import {ToolbarAction, ToolbarService} from '../../services/toolbar/toolbar.service';


export const LinkToolbarAction: ToolbarAction = {
  id: 'italic',
  icon: 'link',
  callback: (service: ToolbarService) => {
    service.selection.saveSelection();
    service.dialog
      .open(LinkDialogComponent, {
        width: '400px',
        data: {
          href: 'https://mathrix.fr'
        }
      })
      .afterClosed()
      .subscribe(() => service.component.sync());
  }
};
