import {Type} from '@angular/core';


export interface Toolbar {
  service: Type<any>;
  method?: string;
  key: string;
  icon: string;
}
