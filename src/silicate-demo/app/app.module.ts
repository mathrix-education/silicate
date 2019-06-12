import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {SilicateLatexModule} from '@mathrix/silicate-latex';
import {SilicateVideosModule} from '@mathrix/silicate-videos';
import {LazyModule} from '../lazy/lazy.module';
import {AppComponent} from './app.component';
import {NotLazyComponent} from './components/not-lazy/not-lazy.component';

const routes: Routes = [
  // {
  //   path: 'lazy',
  //   // loadChildren: () => import('../lazy/lazy.module').then(mod => mod.LazyModule) // new syntax
  //   // loadChildren: '../lazy/lazy.module#LazyModule'
  // },
  {
    path: '**',
    component: NotLazyComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NotLazyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SilicateCoreModule,
    SilicateLatexModule,
    SilicateVideosModule,
    LazyModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
