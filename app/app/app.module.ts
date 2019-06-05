import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SilicateModule} from '../../src/silicate-core/src/silicate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SilicateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
