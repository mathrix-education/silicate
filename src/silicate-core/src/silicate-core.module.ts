import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {SilicateEditableComponent} from './components/silicate-editable/silicate-editable.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';


@NgModule({
  declarations: [
    SilicateProxyComponent,
    SilicateWrapperComponent,
    SilicateEditableComponent,
    SilicateToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContenteditableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    DragDropModule
  ],
  exports: [
    SilicateWrapperComponent,
    SilicateEditableComponent
  ]
})
export class SilicateCoreModule {
  static withBricks(providers: Provider[]): ModuleWithProviders<SilicateCoreModule> {
    return {
      ngModule: SilicateCoreModule,
      providers
    };
  }
}
