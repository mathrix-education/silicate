import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {EquationBrickComponent} from './bricks/equation-brick/equation-brick.component';
import {KatexComponent} from './katex/katex.component';

@NgModule({
  declarations: [
    EquationBrickComponent,
    KatexComponent,
  ],
  imports: [
    CommonModule,
    SilicateCoreModule,
  ]
})
export class SilicateLatexModule {
}
