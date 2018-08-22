import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent {
  @Input() numberOfCorrectAnswers: number;

  @Output()  restart = new EventEmitter<void>();
}
