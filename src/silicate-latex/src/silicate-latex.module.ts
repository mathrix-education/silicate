import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {Renderers, SilicateCoreModule} from '@mathrix-education/silicate-core';
import {EquationBrickComponent} from './bricks/equation-brick/equation-brick.component';
import {KatexComponent} from './katex/katex.component';
import {EquationBrickProvider} from './providers/bricks.providers';
import {KatexRenderer} from './serializers/katex-renderer.service';

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
  static providers(): Provider[] {
    return [
      // Bricks
      EquationBrickProvider,
      {provide: Renderers, multi: true, useClass: KatexRenderer},
    ];
  }
}
