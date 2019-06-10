import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {SilicateEditableComponent} from '../../components/silicate-editable/silicate-editable.component';

@Injectable()
export class SilicateService {
  id: string;
  data$ = new BehaviorSubject<BaseBrick[]>([]);
  editable$ = new BehaviorSubject<boolean>(false);
  bricks: BaseBrickComponent[] = [];
  editableComponent$ = new BehaviorSubject<SilicateEditableComponent>(null);

  constructor() {
  }

  get data(): BaseBrick[] {
    return this.data$.value;
  }

  set data(newData: BaseBrick[]) {
    this.data$.next(newData);
  }

  get editable() {
    return this.editable$.value;
  }

  set editable(newEditable: boolean) {
    this.editable$.next(newEditable);
  }

  get editableComponent() {
    return this.editableComponent$.value;
  }

  set editableComponent(newRichTextComponent: SilicateEditableComponent) {
    if (!this.editableComponent || this.editableComponent.id !== newRichTextComponent.id) {
      this.editableComponent$.next(newRichTextComponent);
    }
  }

  insert(index: number, data: BaseBrick) {
    this.data.splice(index, 0, data);
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }
}
