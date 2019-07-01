import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {first} from 'rxjs/operators';
import {EquationDialogComponent} from '../../dialogs/equation-dialog/equation-dialog.component';
import {EquationBrick} from './equation-brick';


@Component({
  selector: 'mtx-equation-brick',
  templateUrl: './equation-brick.component.html',
  styleUrls: ['./equation-brick.component.scss']
})
export class EquationBrickComponent extends BaseBrickComponent<EquationBrick> {
  constructor(
    private dialog: MatDialog,
    private silicate: SilicateService
  ) {
    super();
  }


  openEquationDialog() {
    if (!this.silicate.editable) {
      return;
    }

    this.dialog
      .open(EquationDialogComponent, {
        width: '800px',
        data: this.data.content
      })
      .afterClosed()
      .pipe(first())
      .subscribe((equation: string) => {
        if (equation) {
          this.data.content = equation;
        }
      });
  }
}
