import {InjectionToken} from '@angular/core';
import {BrickDeclaration} from './interfaces/brick-declaration';
import {Filter} from './interfaces/filter';
import {Handler} from './interfaces/handler';
import {ToolbarAction} from './interfaces/toolbar-action';

export const BrickDeclarations = new InjectionToken<BrickDeclaration[]>('Bricks');
export const Handlers = new InjectionToken<Handler[]>('EditableEvents');
export const Filters = new InjectionToken<Filter[]>('EditableFilters');
export const ToolbarActions = new InjectionToken<ToolbarAction[]>('ToolbarActions');
