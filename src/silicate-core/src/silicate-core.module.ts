import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {PlatformService} from './services/platform.service';
import {SilicateDirective} from './directives/silicate.directive';


@NgModule({
  declarations: [
    SilicateProxyComponent,
    SilicateWrapperComponent,
    SilicateDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SilicateWrapperComponent,
    SilicateDirective,
  ],
  providers: [PlatformService]
})
export class SilicateCoreModule {
  static withProviders(providers: Provider[]): ModuleWithProviders<SilicateCoreModule> {
    return {
      ngModule: SilicateCoreModule,
      providers,
    };
  }
}
