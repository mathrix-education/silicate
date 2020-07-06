import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {SilicateEducationBricks} from './silicate-education.bricks';
import {SafePipeModule} from 'safe-pipe';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BlockBrickProvider, ContainerBrickProvider, PDFViewerBrickProvider} from './providers/bricks.providers';
import {BlockBrickVariantsProvider, ContainerBrickVariantsProvider} from './providers/variants.provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SafePipeModule,
    // FlexLayouts
    // Angular Material
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    // Silicate
    SilicateCoreModule,
  ],
  declarations: [...SilicateEducationBricks],
})
export class SilicateEducationModule {
  static providers(): Provider[] {
    return [
      // Bricks
      BlockBrickProvider,
      ContainerBrickProvider,
      PDFViewerBrickProvider,
      // Variants
      BlockBrickVariantsProvider,
      ContainerBrickVariantsProvider
    ];
  }
}
