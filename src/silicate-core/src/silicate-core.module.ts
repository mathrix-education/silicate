import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SilicateBrickSelectorComponent} from './components/silicate-brick-selector/silicate-brick-selector.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {SilicateService} from './services/silicate/silicate.service';
import {ToolbarHandlerProvider} from './providers/handlers.providers';
import {ToolbarHandler} from './handlers/toolbar.handler';
import {ToolbarService} from './services/toolbar/toolbar.service';
import {SilicateDirective} from './directives/silicate.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


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
