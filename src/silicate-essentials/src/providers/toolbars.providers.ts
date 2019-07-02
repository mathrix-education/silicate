import {ValueProvider} from '@angular/core';
import {Toolbars} from '@mathrix/silicate-core';
import {FormatToolbar} from '../toolbar/format.toolbar';

export const BoldToolbarProvider: ValueProvider = {
  provide: Toolbars,
  multi: true,
  useValue: {
    key: 'bold',
    icon: 'format_bold',
    service: FormatToolbar,
    method: 'bold'
  }
};
export const ItalicToolbarProvider: ValueProvider = {
  provide: Toolbars,
  multi: true,
  useValue: {
    key: 'italic',
    icon: 'format_italic',
    service: FormatToolbar,
    method: 'italic'
  }
};
export const LinkToolbarProvider: ValueProvider = {
  provide: Toolbars,
  multi: true,
  useValue: {
    key: 'link',
    icon: 'link',
    service: FormatToolbar,
    method: 'link'
  }
};
