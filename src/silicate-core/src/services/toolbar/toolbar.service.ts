import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {SilicateEditableComponent} from '../../components/silicate-editable/silicate-editable.component';
import {ContainerService} from '../container/container.service';
import {SelectionService} from '../selection/selection.service';

export interface ToolbarAction {
  id: string;
  icon: string;
  callback: (serviceRef: ToolbarService, $event: MouseEvent) => void;
}


@Injectable()
export class ToolbarService {
  private actions: { [key: string]: ToolbarAction } = {};

  show$ = new BehaviorSubject<boolean>(false);
  component$ = new BehaviorSubject<SilicateEditableComponent>(null);


  constructor(
    private container: ContainerService,
    public selection: SelectionService,
    public dialog: MatDialog
  ) {
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


  dispatch(id: string, $event: MouseEvent) {
    this.container.toolbarActions
      .filter(ta => ta.id === id)
      .forEach(ta => ta.callback(this, $event));
  }
}
