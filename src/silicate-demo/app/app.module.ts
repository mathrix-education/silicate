import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatExpansionModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {SilicateEssentialsModule} from '@mathrix/silicate-essentials';
import {SilicateLatexModule} from '@mathrix/silicate-latex';
import {SilicateVideosModule} from '@mathrix/silicate-videos';
import {AppComponent} from './app.component';
import {BoxBrickComponent} from './bricks/box-brick/box-brick.component';
import {DebugComponent} from './components/debug/debug.component';
import {BoxBrickProvider} from './providers/bricks.providers';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // Flex Layouts
    FlexLayoutModule,
    // Angular Material
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    // Silicate
    SilicateCoreModule.withProviders([
      ...SilicateEssentialsModule.providers(),
      ...SilicateLatexModule.providers(),
      ...SilicateVideosModule.providers(),
      BoxBrickProvider
    ]),
    SilicateEssentialsModule,
    SilicateLatexModule,
    SilicateVideosModule,
    SilicateCoreModule
  ],
  declarations: [
    AppComponent,
    DebugComponent,
    BoxBrickComponent
  ],
  entryComponents: [
    BoxBrickComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
