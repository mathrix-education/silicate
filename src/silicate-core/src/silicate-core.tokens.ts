import {InjectionToken} from '@angular/core';
import {BrickDeclaration} from './interfaces/brick-declaration';
import {EditableEvent} from './interfaces/editable-event';
import {EditableFilter} from './interfaces/editable-filter';
import {ToolbarAction} from './interfaces/toolbar-action';


export const BrickDeclarations = new InjectionToken<BrickDeclaration[]>('Bricks');
export const EditableEvents = new InjectionToken<EditableEvent[]>('EditableEvents');
export const EditableFilters = new InjectionToken<EditableFilter[]>('EditableFilters');
export const ToolbarActions = new InjectionToken<ToolbarAction[]>('ToolbarActions');
