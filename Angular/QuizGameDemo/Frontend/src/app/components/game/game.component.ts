import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../models/statistics';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [QuestionService]
})
export class GameComponent implements OnInit {
  isGameOver = false;

  gameStatistics: Statistics = { lives: 1, score: 0 };

  question: Question;

  timer: number;

  readonly DELAY = 2000;

  constructor(private questionSvc: QuestionService) {}

  ngOnInit() {
    this.getNewQuestion();
  }

  getNewQuestion() {
    this.questionSvc
      .getRandom()
      .subscribe((randomQuestion: Question) => (this.question = randomQuestion), err => console.error(err));
  }

  onRestart(): void {
    this.isGameOver = false;
    this.gameStatistics = { lives: 1, score: 0 } as Statistics;
  }

  onUserAnswer(isCorrect: boolean): void {
    isCorrect ? this.onCorrectAnswer() : this.onWrongAnswer();
    this.timer = this.DELAY / 1000;
    const countDown = setInterval(() => (this.timer = this.timer - 1), 1000);
    setTimeout(() => {
      clearInterval(countDown);
      this.getNewQuestion();
    }, this.DELAY);
  }

  onCorrectAnswer(): void {
    this.gameStatistics = { ...this.gameStatistics, score: this.gameStatistics.score + 1 };
  }

  onWrongAnswer(): void {
    this.gameStatistics = { ...this.gameStatistics, lives: this.gameStatistics.lives - 1 };
    if (this.gameStatistics.lives < 0) {
      this.isGameOver = true;
    }
  }
}
