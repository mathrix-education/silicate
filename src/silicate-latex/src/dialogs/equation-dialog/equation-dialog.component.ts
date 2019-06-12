import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'mtx-equation-dialog',
  templateUrl: './equation-dialog.component.html',
  styleUrls: ['./equation-dialog.component.scss']
})
export class EquationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EquationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public equation: string
  ) {
  }
}
