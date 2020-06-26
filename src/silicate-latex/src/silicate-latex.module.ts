import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Serializers, SilicateCoreModule} from '@mathrix-education/silicate-core';
import {EquationBrickComponent} from './bricks/equation-brick/equation-brick.component';
import {EquationDialogComponent} from './dialogs/equation-dialog/equation-dialog.component';
import {EquationBrickProvider} from './providers/bricks.providers';
import {KatexFilterProvider} from './providers/filters.providers';
import {ClickEquationHandlerProvider, KeydownEquationHandlerProvider} from './providers/handlers.providers';
import {KatexSerializer} from './serializers/katex-serializer';
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
    EquationDialogComponent,
    KatexComponent,
  ],
  entryComponents: [
    EquationBrickComponent,
    EquationDialogComponent
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
    MatTooltipModule,
  ]
})
export class SilicateLatexModule {
  static providers(): Provider[] {
    return [
      // Bricks
      EquationBrickProvider,
      // Filters
      KatexFilterProvider,
      // Handlers
      KeydownEquationHandlerProvider,
      ClickEquationHandlerProvider,
      // Serializers
      {provide: Serializers, multi: true, useClass: KatexSerializer}
    ];
  }
}
