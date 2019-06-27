import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {SelectionService, SilicateEditableComponent, ToolbarAction} from '@mathrix/silicate-core';


/** @dynamic */
@Injectable()
export class ItalicToolbarActionService {
  constructor(
    private selection: SelectionService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  invoke($event, component: SilicateEditableComponent) {
    this.selection.saveSelection();
    document.execCommand('italic', false);
    component.sync();
    this.selection.restoreSelection();
  }
}


export const ItalicToolbarAction: ToolbarAction = {
  key: 'italic',
  icon: 'format_italic',
  service: ItalicToolbarActionService,
  method: 'italic'
};
