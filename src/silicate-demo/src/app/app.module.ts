import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {SilicateEssentialsModule} from '@mathrix-education/silicate-essentials';
import {AppComponent} from './app.component';
import {DebugComponent} from './components/debug/debug.component';
import {ViewComponent} from './components/view/view.component';
import {SilicateLatexModule} from '@mathrix-education/silicate-latex';
import {SilicateVideosModule} from '@mathrix-education/silicate-videos';
import {SilicateEducationModule} from '@mathrix-education/silicate-education';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'silicate'}),
    BrowserAnimationsModule,
    FormsModule,
    // Flex Layouts
    FlexLayoutModule,
    // Angular Material
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // Silicate
    SilicateCoreModule.withProviders([
      ...SilicateEducationModule.providers(),
      ...SilicateEssentialsModule.providers(),
      ...SilicateLatexModule.providers(),
      ...SilicateVideosModule.providers()
    ]),
    SilicateEducationModule,
    SilicateEssentialsModule,
    SilicateLatexModule,
    SilicateVideosModule,
    SilicateCoreModule
  ],
  declarations: [
    AppComponent,
    DebugComponent,
    ViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
