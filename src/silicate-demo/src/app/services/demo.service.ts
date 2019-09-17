import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';
import {FIXTURE} from '../app.fixture';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = FIXTURE;
}
