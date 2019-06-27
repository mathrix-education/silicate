import {Invokable} from './invokable';


export interface ToolbarAction extends Invokable {
  key: string;
  icon: string;
}
