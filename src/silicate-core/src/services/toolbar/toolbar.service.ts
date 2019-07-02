import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SilicateEditableComponent} from '../../components/silicate-editable/silicate-editable.component';
import {SilicateService} from '../silicate/silicate.service';


@Injectable()
export class ToolbarService {
  show$ = new BehaviorSubject<boolean>(false);
  component$ = new BehaviorSubject<SilicateEditableComponent>(null);


  constructor(
    private injector: Injector,
    private silicate: SilicateService
  ) {
  }


  get component() {
    return this.component$.value;
  }


  show(component: SilicateEditableComponent) {
    if (this.silicate.toolbars.length === 0) {
      return;
    }

    if (this.component$.value === null || this.component$.value.id !== component.id) {
      this.component$.next(component);
    }

    this.show$.next(true);
  }


  hide(component: SilicateEditableComponent) {
    if (this.silicate.toolbars.length === 0) {
      return;
    }

    if (this.component$.value !== null && this.component$.value.id === component.id) {
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
