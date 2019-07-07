import {Component, Input, OnInit} from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {Wall} from '@mathrix/silicate-core';

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
}
