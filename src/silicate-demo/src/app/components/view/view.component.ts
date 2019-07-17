import {Component, OnInit} from '@angular/core';
import {DemoService} from '../../services/demo.service';

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
