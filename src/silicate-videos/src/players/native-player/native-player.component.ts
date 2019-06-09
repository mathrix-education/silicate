import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'mtx-native-player',
  templateUrl: './native-player.component.html',
  styleUrls: ['./native-player.component.scss']
})
export class NativePlayerComponent implements OnInit {
  @ViewChild('player', {static: false}) player: HTMLVideoElement;

  constructor() {
  }

  ngOnInit() {
  }

}
