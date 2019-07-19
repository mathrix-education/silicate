import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {Serializers, SilicateCoreModule} from '@mathrix/silicate-core';
import {KatexModule} from 'ng-katex';
import {EquationBrickComponent} from './bricks/equation-brick/equation-brick.component';
import {EquationDialogComponent} from './dialogs/equation-dialog/equation-dialog.component';
import {EquationBrickProvider} from './providers/bricks.providers';
import {KatexFilterProvider} from './providers/filters.providers';
import {ClickEquationHandlerProvider, KeydownEquationHandlerProvider} from './providers/handlers.providers';
import {KatexSerializer} from './serializers/katex-serializer';


@NgModule({
  declarations: [
    EquationBrickComponent,
    EquationDialogComponent
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
    KatexModule,
    SilicateCoreModule
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
