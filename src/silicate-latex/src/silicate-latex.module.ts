import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatIconModule, MatInputModule} from '@angular/material';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {KatexModule} from 'ng-katex';
import {EquationBrickComponent} from './components/equation-brick/equation-brick.component';

@NgModule({
  entryComponents: [EquationBrickComponent],
  declarations: [EquationBrickComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexModule,
    ContenteditableModule,
    KatexModule,
    MatInputModule,
    MatIconModule,
    FlexModule
  ],
  exports: [EquationBrickComponent]
})
export class SilicateLatexModule {
}
