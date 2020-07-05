import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {SilicateEducationBricks} from './silicate-education.bricks';
import {SafePipeModule} from 'safe-pipe';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

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
    MatInputModule,
    MatExpansionModule
  ],
  declarations: [...SilicateEducationBricks],
})
export class SilicateEducationModule {
}
