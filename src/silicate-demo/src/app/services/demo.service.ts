import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = [
    {
      kind: 'text',
      text: '',
      uuid: 'ee6afa01-af9d-42d4-bbdc-98e44c3d52ec'
    }
  ];
}
