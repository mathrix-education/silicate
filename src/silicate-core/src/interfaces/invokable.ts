import {Type} from '@angular/core';


export interface Invokable {
  service: Type<any>;
  method?: string;
}
