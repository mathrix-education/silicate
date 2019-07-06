import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {DefinitionBrickProvider} from './bricks/definition/definition-brick.provider';
import {ConclusionBrickProvider} from './bricks/conclusion/conclusion-brick.provider';
import {CorollaryBrickProvider} from './bricks/corollary/corollary-brick.provider';
import {ExampleBrickProvider} from './bricks/example/example-brick.provider';
import {IntroductionBrickProvider} from './bricks/introduction/introduction-brick.provider';
import {PropertyBrickProvider} from './bricks/property/property-brick.provider';
import {SilicateEducationBricks} from './silicate-education.bricks';
import {RemarkBrickProvider} from './bricks/remark/remark-brick.provider';
import {ReminderBrickProvider} from './bricks/reminder/reminder-brick.provider';
import {MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SubtitleBrickProvider} from './bricks/subtitle/subtitle-brick.provider';
import {TheoremBrickProvider} from './bricks/theorem/theorem-brick.provider';
import {TrapBrickProvider} from './bricks/trap/trap-brick.provider';
import {TipBrickProvider} from './bricks/tip/tip-brick.provider';

@NgModule({
  imports: [
    CommonModule,
    // FlexLayouts
    FlexLayoutModule,
    // Angular Material
    MatIconModule,
    // Silicate
    SilicateCoreModule

  ],
  declarations: [...SilicateEducationBricks],
  entryComponents: [...SilicateEducationBricks]
})
export class SilicateEducationModule {
  static providers(): Provider[] {
    return [
      ConclusionBrickProvider,
      CorollaryBrickProvider,
      DefinitionBrickProvider,
      ExampleBrickProvider,
      IntroductionBrickProvider,
      PropertyBrickProvider,
      RemarkBrickProvider,
      ReminderBrickProvider,
      SubtitleBrickProvider,
      TheoremBrickProvider,
      TipBrickProvider,
      TrapBrickProvider
    ];
  }
}
