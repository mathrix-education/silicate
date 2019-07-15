import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule} from '@angular/material';
import {SilicateBrickSelectorComponent} from './components/silicate-brick-selector/silicate-brick-selector.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {SilicateService} from './services/silicate/silicate.service';
import {ToolbarHandlerProvider} from './providers/handlers.providers';
import {ToolbarHandler} from './handlers/toolbar.handler';
import {ToolbarService} from './services/toolbar/toolbar.service';
import {SilicateDirective} from './directives/silicate.directive';


@NgModule({
  providers: [
    SilicateService,
    ToolbarService,
    ToolbarHandler
  ],
  declarations: [
    SilicateProxyComponent,
    SilicateWrapperComponent,
    SilicateToolbarComponent,
    SilicateBrickSelectorComponent,
    SilicateDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    DragDropModule,
    MatGridListModule
  ],
  exports: [
    SilicateDirective,
    SilicateWrapperComponent
  ]
})
export class SilicateCoreModule {
  static providers(): Provider[] {
    return [
      ToolbarHandlerProvider
    ];
  }

  static withProviders(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: SilicateCoreModule,
      providers: [
        ...SilicateCoreModule.providers(),
        ...providers
      ]
    };
  }
}
