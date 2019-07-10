import {Injectable} from '@angular/core';
import {Wall} from '@mathrix/silicate-core';
import {DEMO_FIXTURE} from '../fixtures/demo.fixture';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = DEMO_FIXTURE;
}
