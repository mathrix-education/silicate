import {Component, OnInit} from '@angular/core';
import {EDUCATION_FIXTURE} from './fixtures/education.fixture';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editable = true;
  data = EDUCATION_FIXTURE;

  ngOnInit(): void {
  }
}
