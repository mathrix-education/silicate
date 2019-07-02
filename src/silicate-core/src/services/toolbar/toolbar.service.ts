import {Inject, Injectable, Injector, Optional} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SilicateEditableComponent} from '../../components/silicate-editable/silicate-editable.component';
import {ToolbarAction} from '../../interfaces/toolbar-action';
import {ToolbarActions} from '../../silicate-core.tokens';


@Injectable()
export class ToolbarService {
  show$ = new BehaviorSubject<boolean>(false);
  component$ = new BehaviorSubject<SilicateEditableComponent>(null);


  constructor(
    private injector: Injector,
    @Optional() @Inject(ToolbarActions) private readonly toolbarActions: ToolbarAction[]
  ) {
    if (!this.toolbarActions) {
      this.toolbarActions = [];
    }
  }


  get component() {
    return this.component$.value;
  }


  show(component: SilicateEditableComponent) {
    if (this.component$.value === null || this.component$.value.id !== component.id) {
      this.component$.next(component);
    }

    this.show$.next(true);
  }


  hide(component: SilicateEditableComponent) {
    if (this.component$.value !== null && this.component$.value.id === component.id) {
      this.component$.next(null);
      this.show$.next(false);
    }
  }


  dispatch(key: string, $event: MouseEvent) {
    const action = this.toolbarActions.find(ta => ta.key === key);
    const service = this.injector.get(action.service);
    const method = action.method ? action.method : 'invoke'; // Default method is invoke

    service[method]($event, this.component);
  }
}
