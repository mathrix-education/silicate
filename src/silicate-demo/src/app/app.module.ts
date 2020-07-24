import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
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
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Route, RouterModule, Routes} from '@angular/router';
import {DebugViewComponent} from './components/debug-view/debug-view.component';


const routes: Routes = [
  {
    path: '',
    component: DebugViewComponent,
  },
  {
    path: 'view',
    component: ViewComponent,
  }
];


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
    SilicateCoreModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    DebugComponent,
    DebugViewComponent,
    ViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
