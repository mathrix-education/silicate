import {ValueProvider} from '@angular/core';


export interface TypedValueProvider<T> extends ValueProvider {
  provide: any;
  multi?: boolean;
  useValue: T;
}
