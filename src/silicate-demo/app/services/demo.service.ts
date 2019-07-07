import {Injectable} from '@angular/core';
import {Wall} from '@mathrix/silicate-core';
import {EDUCATION_FIXTURE} from '../fixtures/education.fixture';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = EDUCATION_FIXTURE;
}
