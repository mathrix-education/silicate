import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {SilicateEducationBricks} from './silicate-education.bricks';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BlockBrickProvider, ContainerBrickProvider, PDFViewerBrickProvider} from './providers/bricks.providers';
import {BlockBrickVariantsProvider, ContainerBrickVariantsProvider} from './providers/variants.providers';
import {SafePipeModule} from 'safe-pipe';
import {FormsModule} from '@angular/forms';

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
    MatInputModule
  ],
  declarations: [...SilicateEducationBricks],
  entryComponents: [...SilicateEducationBricks]
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
