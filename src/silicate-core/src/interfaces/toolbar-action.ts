import {Type} from '@angular/core';


export interface ToolbarAction {
  service: Type<any>;
  method?: string;
  key: string;
  icon: string;
}
