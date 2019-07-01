import {ValueProvider} from '@angular/core';
import {BrickDeclarations, EditableEvents, EditableFilters, ToolbarActions} from '@mathrix/silicate-core';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {ImageBrickFactory} from './bricks/image-brick/image-brick.factory';
import {ListBrickComponent} from './bricks/list-brick/list-brick.component';
import {ListBrickFactory} from './bricks/list-brick/list-brick.factory';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {TextBrickFactory} from './bricks/text-brick/text-brick.factory';
import {TitleBrickFactory} from './bricks/title-brick/title-brick';
import {TitleBrickComponent} from './bricks/title-brick/title-brick.component';
import {OpenLinkDialogService} from './editable-events/open-link-dialog';
import {BoldFilter} from './editable-filters/bold-filter';
import {ItalicFilter} from './editable-filters/italic-filter';
import {LinkFilter} from './editable-filters/link-filter';
import {BoldToolbarAction, BoldToolbarActionService} from './toolbar-actions/bold.toolbar-action';
import {ItalicToolbarAction} from './toolbar-actions/italic.toolbar-action';
import {LinkToolbarAction} from './toolbar-actions/link.toolbar-action';

export const TextBrickProvider: ValueProvider = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'text',
    icon: 'notes',
    name: 'Texte',
    component: TextBrickComponent,
    factory: TextBrickFactory
  }
};

export const ImageBrickProvider: ValueProvider = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'image',
    icon: 'image',
    name: 'Image',
    component: ImageBrickComponent,
    factory: ImageBrickFactory
  }
};

export const ListBrickProvider: ValueProvider = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'list',
    icon: 'format_list_bulleted',
    name: 'Liste',
    component: ListBrickComponent,
    factory: ListBrickFactory
  }
};

export const TitleBrickProvider: ValueProvider = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'title',
    icon: 'title',
    name: 'Titre',
    component: TitleBrickComponent,
    factory: TitleBrickFactory
  }
};

// Editable Events
export const OpenLinkDialogEditableEventProvider: ValueProvider = {
  provide: EditableEvents,
  multi: true,
  useValue: {
    eventName: 'click',
    focusOnly: true,
    service: OpenLinkDialogService,
    method: 'invoke'
  }
};

// Editable Filters
export const BoldEditableFiltersProvider: ValueProvider = {
  provide: EditableFilters,
  multi: true,
  useValue: BoldFilter
};
export const ItalicEditableFiltersProvider: ValueProvider = {
  provide: EditableFilters,
  multi: true,
  useValue: ItalicFilter
};
export const LinkEditableFiltersProvider: ValueProvider = {
  provide: EditableFilters,
  multi: true,
  useValue: LinkFilter
};

// Toolbar Actions
export const BoldToolbarActionProvider: ValueProvider = {
  provide: ToolbarActions,
  multi: true,
  useValue: BoldToolbarAction
};
export const ItalicToolbarActionProvider: ValueProvider = {
  provide: ToolbarActions,
  multi: true,
  useValue: ItalicToolbarAction
};
export const LinkToolbarActionProvider: ValueProvider = {
  provide: ToolbarActions,
  multi: true,
  useValue: LinkToolbarAction
};
