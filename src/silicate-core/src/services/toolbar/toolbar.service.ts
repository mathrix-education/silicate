import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SilicateService} from '../silicate/silicate.service';
import {SilicateDirective} from '../../directives/silicate.directive';


@Injectable()
export class ToolbarService {
  show$ = new BehaviorSubject<boolean>(false);
  component$ = new BehaviorSubject<SilicateDirective>(null);


  constructor(
    private injector: Injector,
    private silicate: SilicateService
  ) {
  }


  get component() {
    return this.component$.value;
  }


  show(component: SilicateDirective) {
    if (this.silicate.toolbars.length === 0) {
      return;
    }

    if (this.component$.value === null || this.component$.value !== component) {
      this.component$.next(component);
    }

    this.show$.next(true);
  }


  hide(component: SilicateDirective) {
    if (this.silicate.toolbars.length === 0) {
      return;
    }

    if (this.component$.value !== null && this.component$.value === component) {
      this.component$.next(null);
      this.show$.next(false);
    }
  }


  dispatch($event: MouseEvent, key: string) {
    const action = this.silicate.toolbars.find(ta => ta.key === key);
    const service = this.injector.get(action.service);
    const method = action.method ? action.method : 'invoke'; // Default method is invoke

    service[method]($event, this.component);
  }
}
