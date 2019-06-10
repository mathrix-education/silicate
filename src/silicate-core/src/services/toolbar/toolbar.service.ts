import {EventEmitter, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {SilicateEditableComponent} from '../../components/silicate-editable/silicate-editable.component';
import {LinkDialogComponent} from '../../dialogs/link-dialog/link-dialog.component';
import {SelectionService} from '../selection/selection.service';

@Injectable()
export class ToolbarService {
  show$ = new BehaviorSubject<boolean>(false);
  component$ = new BehaviorSubject<SilicateEditableComponent>(null);
  format = new EventEmitter<string>();

  constructor(
    private selection: SelectionService,
    private dialog: MatDialog
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

  dispatch(key: string, $event: MouseEvent) {
    if (typeof this[key] === 'function') {
      this[key]($event);
    }
  }

  bold(): void {
    this.selection.saveSelection();
    document.execCommand('bold', false);
    this.component.refresh();
    this.selection.restoreSelection();
  }

  italic(): void {
    this.selection.saveSelection();
    document.execCommand('italic', false);
    this.component.refresh();
    this.selection.restoreSelection();
  }

  link(): void {
    this.selection.saveSelection();
    this.dialog
      .open(LinkDialogComponent, {
        width: '400px',
        data: {
          href: 'https://mathrix.fr'
        }
      })
      .afterClosed()
      .subscribe(() => this.component.refresh());
  }
}
