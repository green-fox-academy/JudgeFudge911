import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent {
  @Output() startOver = new EventEmitter<boolean>();
  @Input() score;

  constructor() {}

  restart() {
    this.startOver.emit(true);
  }
}
