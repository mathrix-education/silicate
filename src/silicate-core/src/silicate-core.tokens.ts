import {InjectionToken} from '@angular/core';
import {BrickDeclaration} from './interfaces/brick-declaration';
import {Filter} from './interfaces/filter';
import {Handler} from './interfaces/handler';
import {Toolbar} from './interfaces/toolbar';

export const BrickDeclarations = new InjectionToken<BrickDeclaration[]>('Bricks');
export const Handlers = new InjectionToken<Handler[]>('Handlers');
export const Filters = new InjectionToken<Filter[]>('Filters');
export const Toolbars = new InjectionToken<Toolbar[]>('Toolbars');
