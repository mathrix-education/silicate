import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = []
}
