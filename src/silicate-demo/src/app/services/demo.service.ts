import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = [{
      uuid: '72df73fc-20eb-48c4-a3bd-62c4594511b7',
      kind: 'text',
      text: ''
    }];
}
