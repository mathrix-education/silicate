import {Component, OnInit} from '@angular/core';
import {SILICATE_CORE_FIXTURE} from './fixtures/silicate-core.fixture';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editable = true;
  data = SILICATE_CORE_FIXTURE;


  ngOnInit(): void {
  }
}
