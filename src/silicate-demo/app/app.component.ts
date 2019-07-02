import {Component, OnInit} from '@angular/core';
import {CHAPTER_FIXTURE} from './fixtures/chapter.fixture';
import {SILICATE_CORE_FIXTURE} from './fixtures/silicate-core.fixture';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editable = true;
  data = CHAPTER_FIXTURE;


  ngOnInit(): void {
  }
}
