import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {SilicateCoreModule} from '../../src/silicate-core/src/silicate-core.module';
import {SilicateVideosModule} from '../../src/silicate-videos/src/silicate-videos.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SilicateCoreModule,
    SilicateVideosModule,
    ContenteditableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
