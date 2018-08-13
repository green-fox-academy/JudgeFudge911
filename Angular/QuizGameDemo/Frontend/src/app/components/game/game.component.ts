import { Component } from '@angular/core';
import { Statistics } from '../../models/statistics';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  isGameOver = true;

  gameStatistics: Statistics = { lives: 1, score: 0 };

  onRestart(): void {
    this.isGameOver = false;
    this.gameStatistics = { lives: 1, score: 0 } as Statistics;
  }
}
