import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SilicateModule} from '../../src/silicate-core/src/silicate.module';
import {FormsModule} from '@angular/forms';
import {ContenteditableModule} from '@ng-stack/contenteditable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SilicateModule,
    ContenteditableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
