import {InjectionToken} from '@angular/core';
import {Brick} from './interfaces/brick';
import {Filter} from './interfaces/filter';
import {Handler} from './interfaces/handler';
import {Toolbar} from './interfaces/toolbar';
import {Serializer} from '@angular/compiler';

/**
 * Holds the bricks declarations.
 */
export const Bricks = new InjectionToken<Brick[]>('Bricks');

/**
 * Holds the handlers declarations.
 */
export const Handlers = new InjectionToken<Handler[]>('Handlers');

/**
 * Holds the filters declarations.
 */
export const Filters = new InjectionToken<Filter[]>('Filters');

/**
 * Holds the toolbars declarations.
 */
export const Toolbars = new InjectionToken<Toolbar[]>('Toolbars');

/**
 * Holds the serializers declarations.
 */
export const Serializers = new InjectionToken<Serializer[]>('Serializers');
