import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {ListBrickComponent} from './bricks/list-brick/list-brick.component';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {TitleBrickComponent} from './bricks/title-brick/title-brick.component';
import {TableBrickComponent} from './bricks/table-brick/table-brick.component';
import {ColumnsBrickComponent} from './bricks/columns-brick/columns-brick.component';


@NgModule({
  imports: [
    CommonModule,
    // Silicate
    SilicateCoreModule
  ],
  declarations: [
    ColumnsBrickComponent,
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    TableBrickComponent,
  ],
})
export class SilicateEssentialsModule {
}
