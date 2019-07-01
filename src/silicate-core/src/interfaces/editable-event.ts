import {Invokable} from './invokable';


export interface EditableEvent extends Invokable {
  eventName: string;
  target?: 'self' | 'document';
  focusOnly?: boolean;
}
