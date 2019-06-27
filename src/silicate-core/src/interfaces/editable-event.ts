import {Invokable} from './invokable';


export interface EditableEvent extends Invokable {
  eventName: string;
  focusOnly?: boolean;
}
