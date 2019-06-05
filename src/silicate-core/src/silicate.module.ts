import {NgModule} from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import {componentDeclarations, entryComponentsDeclarations} from './silicate.common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import { SilicateDebugComponent } from './components/silicate-debug/silicate-debug.component';

@NgModule({
  entryComponents: [...entryComponentsDeclarations],
  declarations: [...componentDeclarations, SilicateDebugComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
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
    DragDropModule,
    FormsModule
  ],
  providers: [
    JsonPipe
  ],
  exports: [
    SilicateWrapperComponent,
    SilicateProxyComponent
  ]
})
export class SilicateModule {
}
