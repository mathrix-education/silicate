import {Type} from '@angular/core';


export interface Handler {
  whenEditable: boolean;
  whenFocused: boolean;
  eventName: string;
  target: 'self' | 'document' | 'window';
  service: Type<any>;
  method: string;
}
