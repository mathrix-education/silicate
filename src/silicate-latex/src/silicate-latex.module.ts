import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule} from '@angular/material';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {KatexModule} from 'ng-katex';
import {EquationBrickComponent} from './components/equation-brick/equation-brick.component';
import {EquationDialogComponent} from './dialogs/equation-dialog/equation-dialog.component';


@NgModule({
  entryComponents: [
    EquationBrickComponent,
    EquationDialogComponent
  ],
  declarations: [
    EquationBrickComponent,
    EquationDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexModule,
    SilicateCoreModule,
    ContenteditableModule,
    KatexModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [EquationBrickComponent]
})
export class SilicateLatexModule {
  static bricks() {
    return [EquationBrickComponent];
  }
}
