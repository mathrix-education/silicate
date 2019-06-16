import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {SilicateLatexModule} from '@mathrix/silicate-latex';
import {SilicateVideosModule} from '@mathrix/silicate-videos';
import {AppComponent} from './app.component';
import {CardBrickComponent} from './components/bricks/card-brick/card-brick.component';
import {DebugComponent} from './components/debug/debug.component';


@NgModule({
  entryComponents: [
    CardBrickComponent
  ],
  declarations: [
    AppComponent,
    DebugComponent,
    CardBrickComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    SilicateCoreModule,
    SilicateLatexModule,
    SilicateVideosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
