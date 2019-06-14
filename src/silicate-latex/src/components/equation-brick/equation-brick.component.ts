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
  static readonly kind = 'equation';
  static readonly icon = 'functions';
  static readonly displayName = 'Équation';

  constructor(
    private dialog: MatDialog,
    public silicate: SilicateService
  ) {
    super(silicate);
  }

  /**
   * Default equation.
   */
  static empty() {
    return {
      kind: 'equation',
      content: 'f(x) = x^2'
    };
  }

  openEquationDialog() {
    if (!this.silicate.editable) {
      return;
    }

    this.dialog
      .open(EquationDialogComponent, {
        width: '800px',
        data: this.get('content')
      })
      .afterClosed()
      .pipe(first())
      .subscribe((equation: string) => {
        if (equation) {
          this.set('content', equation);
        }
      });
  }
}
