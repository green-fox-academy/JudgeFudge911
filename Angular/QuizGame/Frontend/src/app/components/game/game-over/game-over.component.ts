import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent {
  @Input()
  numberOfCorrectlyAnsweredQuestions: number;

  @Output()
  restart = new EventEmitter<boolean>();
}
