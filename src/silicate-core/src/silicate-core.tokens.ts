import {InjectionToken} from '@angular/core';
import {Brick} from './interfaces/brick';
import {Renderer} from './interfaces/renderer';

/**
 * Holds the bricks declarations.
 */
export const Bricks = new InjectionToken<Brick[]>('Bricks');

/**
 * Holds the serializers declarations.
 */
export const Renderers = new InjectionToken<Renderer[]>('Renderers');
