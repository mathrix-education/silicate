import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {EquationBrickComponent} from './bricks/equation-brick/equation-brick.component';
import {EquationBrickProvider} from './providers/bricks.providers';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {KatexComponent} from './katex/katex.component';

@NgModule({
  declarations: [
    EquationBrickComponent,
    KatexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    SilicateCoreModule,
  ]
})
export class SilicateLatexModule {
  static providers(): Provider[] {
    return [
      EquationBrickProvider,
    ];
  }
}
