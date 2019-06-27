import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {SelectionService, SilicateEditableComponent, ToolbarAction} from '@mathrix/silicate-core';


/** @dynamic */
@Injectable()
export class BoldToolbarActionService {
  constructor(
    private selection: SelectionService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  invoke($event, component: SilicateEditableComponent) {
    this.selection.saveSelection();
    this.document.execCommand('bold', false);
    component.sync();
    this.selection.restoreSelection();
  }
}


export const BoldToolbarAction: ToolbarAction = {
  key: 'bold',
  icon: 'format_bold',
  service: BoldToolbarActionService,
  method: 'bold'
};
