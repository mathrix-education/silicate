import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule} from '@angular/material';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {KatexModule} from 'ng-katex';
import {EquationBrickComponent} from './bricks/equation-brick/equation-brick.component';
import {EquationBrickFactory} from './bricks/equation-brick/equation-brick.factory';
import {EquationDialogComponent} from './dialogs/equation-dialog/equation-dialog.component';
import {InlineEquationHandler} from './handlers/inline-equation.handler';
import {
  ClickEquationHandlerProvider,
  EquationBrickProvider, KatexFilterProvider,
  KeydownEquationHandlerProvider
} from './silicate-latex.providers';


@NgModule({
  entryComponents: [
    EquationBrickComponent,
    EquationDialogComponent
  ],
  declarations: [
    EquationBrickComponent,
    EquationDialogComponent
  ],
  providers: [
    EquationBrickFactory,
    InlineEquationHandler
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
  ]
})
export class SilicateLatexModule {
  static providers() {
    return [
      EquationBrickProvider,
      KatexFilterProvider,
      KeydownEquationHandlerProvider,
      ClickEquationHandlerProvider
    ];
  }
}
