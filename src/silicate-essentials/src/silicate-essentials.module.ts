import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {ListBrickComponent} from './bricks/list-brick/list-brick.component';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {TitleBrickComponent} from './bricks/title-brick/title-brick.component';
import {ImageDialogComponent} from './dialogs/image-dialog/image-dialog.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';
import {OpenLinkDialogService} from './editable-events/open-link-dialog';
import {BoldToolbarActionService} from './toolbar-actions/bold.toolbar-action';
import {ItalicToolbarActionService} from './toolbar-actions/italic.toolbar-action';
import {LinkToolbarActionService} from './toolbar-actions/link.toolbar-action';


@NgModule({
  providers: [
    OpenLinkDialogService,
    BoldToolbarActionService,
    ItalicToolbarActionService,
    LinkToolbarActionService
  ],
  declarations: [
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    SilicateCoreModule
  ],
  exports: [],
  entryComponents: [
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent
  ]
})
export class SilicateEssentialsModule {
}
