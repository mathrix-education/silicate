import {Component, OnInit} from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {Wall} from '../../../../../silicate-core/src/interfaces/wall';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  constructor(public demo: DemoService) {
  }

  ngOnInit() {
  }

  wallChange(wall: Wall) {
    console.log('data change', wall);
  }
}
