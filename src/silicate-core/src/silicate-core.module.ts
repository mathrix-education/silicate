import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule, JsonPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {componentDeclarations, entryComponentsDeclarations} from './silicate.common';

@NgModule({
  entryComponents: [...entryComponentsDeclarations],
  declarations: [...componentDeclarations],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ContenteditableModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatRippleModule,
    MatExpansionModule,
    DragDropModule
  ],
  providers: [
    JsonPipe
  ],
  exports: [
    SilicateWrapperComponent,
    SilicateProxyComponent
  ]
})
export class SilicateCoreModule {
}
