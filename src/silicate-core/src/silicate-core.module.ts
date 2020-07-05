import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
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
}
