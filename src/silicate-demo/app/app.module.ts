import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {SilicateEssentialsModule} from '@mathrix/silicate-essentials';
import {SilicateLatexModule} from '@mathrix/silicate-latex';
import {AppComponent} from './app.component';
import {DebugComponent} from './components/debug/debug.component';


@NgModule({
  declarations: [
    AppComponent,
    DebugComponent
    // CardBrickComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    SilicateEssentialsModule,
    SilicateLatexModule,
    SilicateCoreModule.withProviders([
      ...SilicateEssentialsModule.providers(),
      ...SilicateLatexModule.providers()
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
