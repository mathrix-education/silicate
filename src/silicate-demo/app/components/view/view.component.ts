import {Component, Input, OnInit} from '@angular/core';
import {Wall} from '@mathrix/silicate-core/src/interfaces/wall';
import {DemoService} from '../../services/demo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @Input() editable: boolean;
  @Input() data: Wall;

  constructor(public demo: DemoService) {
  }

  ngOnInit() {
  }
}
