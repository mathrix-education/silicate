import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {first} from 'rxjs/operators';
import {EquationDialogComponent} from '../../dialogs/equation-dialog/equation-dialog.component';
import {EquationBrick} from './equation-brick';


@Component({
  selector: 'silicate-equation-brick',
  templateUrl: './equation-brick.component.html',
  styleUrls: ['./equation-brick.component.scss']
})
export class EquationBrickComponent extends BaseBrickComponent<EquationBrick> implements OnInit {
  constructor(
    private dialog: MatDialog,
    private silicate: SilicateService
  ) {
    super();
  }

  ngOnInit() {
  }

  @HostListener('click')
  openEquationDialog() {
    if (!this.silicate.editable) {
      return;
    }

    this.dialog
      .open(EquationDialogComponent, {
        width: '800px',
        data: {
          equation: this.data.equation,
          description: this.data.description,
          enableDescription: true
        }
      })
      .afterClosed()
      .pipe(first())
      .subscribe((data) => {
        if (data !== undefined && data.equation !== '') {
          this.data.equation = data.equation;
          this.data.description = data.description;
          this.ngDoCheck();
        }
      });
  }
}
