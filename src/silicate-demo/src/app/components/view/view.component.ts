import {Component} from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {Wall} from '../../../../../silicate-core/src/interfaces/wall';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
})

export class ViewComponent {

  constructor(public demo: DemoService) {
  }

  wallChange(wall: Wall) {
    console.log('data change', wall);
  }
}
