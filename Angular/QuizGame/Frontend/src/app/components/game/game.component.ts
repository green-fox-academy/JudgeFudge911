import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Question } from '../../models/question';
import { Statistics } from '../../models/statistics';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  isGameOver = false;

  timeInSeconds: number;

  private readonly DELAY = environment.timeBetweenQuestions;

  statistics: Statistics = { lives: environment.lives, score: 0 };

  question: Question;

  notificationMessage = 'Next question in';

  constructor(private questionSvc: QuestionService) {}

  ngOnInit(): void {
    this.getNewQuestion();
  }

  getNewQuestion(): void {
    this.questionSvc.getRandom().subscribe(randomQuestion => (this.question = randomQuestion), err => console.error(err));
  }

  onUserAnswer(isCorrect: boolean): void {
    isCorrect ? this.onCorrectAnswer() : this.onWrongAnswer();
    this.timeInSeconds = this.DELAY / 1000;
    const countDown = setInterval(() => (this.timeInSeconds = this.timeInSeconds - 1), 1000);
    setTimeout(() => {
      clearInterval(countDown);
      this.getNewQuestion();
    }, this.DELAY);
  }

  onCorrectAnswer(): void {
    this.statistics = { ...this.statistics, score: this.statistics.score + 1 };
  }

  onWrongAnswer(): void {
    this.statistics = { ...this.statistics, lives: this.statistics.lives - 1 };
    if (this.statistics.lives < 0) {
      this.notificationMessage = 'You lost and will be redirected in';
      setTimeout(() => (this.isGameOver = true), this.DELAY);
    }
  }

  onRestart(): void {
    this.statistics = { lives: environment.lives, score: 0 };
    this.notificationMessage = 'Next question in';
    this.isGameOver = false;
  }
}
