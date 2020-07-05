import {InjectionToken} from '@angular/core';
import {Brick} from './interfaces/brick';

export const Bricks = new InjectionToken<Brick[]>('Bricks');
