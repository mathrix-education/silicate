import {Injectable} from '@angular/core';
import {Wall} from '@mathrix/silicate-core/src/interfaces/wall';
import {EDUCATION_FIXTURE} from '../fixtures/education.fixture';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable: boolean;
  data: Wall = EDUCATION_FIXTURE;
}
