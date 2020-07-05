import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';


@NgModule({
  declarations: [
    SilicateProxyComponent,
    SilicateWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SilicateWrapperComponent
  ]
})
export class SilicateCoreModule {
  static withProviders(providers: Provider[]): ModuleWithProviders<SilicateCoreModule> {
    return {
      ngModule: SilicateCoreModule,
      providers: [
        ...providers
      ]
    };
  }
}
