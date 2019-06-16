import {Component, OnInit} from '@angular/core';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {SilicateLatexModule} from '@mathrix/silicate-latex';
import {SilicateVideosModule} from '@mathrix/silicate-videos';
import {CardBrickComponent} from './components/bricks/card-brick/card-brick.component';
import {DEMO_FIXTURE} from './fixtures/demo.fixture';
import {MATHS_FIXTURE} from './fixtures/maths.fixture';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editable = true;
  bricks = [
    ...SilicateCoreModule.bricks(),
    ...SilicateLatexModule.bricks(),
    ...SilicateVideosModule.bricks(),
    CardBrickComponent
  ];

  data = DEMO_FIXTURE;

  fixtures = [
    {
      name: 'Demo',
      value: DEMO_FIXTURE
    },
    {
      name: 'Maths',
      value: MATHS_FIXTURE
    }
  ];


  ngOnInit(): void {
  }
}
