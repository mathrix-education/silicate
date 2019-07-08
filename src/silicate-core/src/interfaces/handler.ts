import {Type} from '@angular/core';


export interface Handler {
  service: Type<any>;
  method?: string;
  eventName: string;
  target?: 'self' | 'document' | 'window';
}
