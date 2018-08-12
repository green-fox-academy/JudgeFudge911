import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../models/statistics';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { StopwatchService } from '../../services/stopwatch.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [StopwatchService]
})
export class GameComponent implements OnInit {
  isGameOver = false;

  statistic: Statistics = { lives: 1, score: 0 };

  question: Question;

  notificationMessage = 'Next question in';

  constructor(private questionSvc: QuestionService, private stopwatchSvc: StopwatchService) {}

  ngOnInit() {
    this.getNewQuestion();
  }

  getNewQuestion(): void {
    this.questionSvc.getRandom().subscribe(result => (this.question = result), err => console.error(err));
  }

  onUserAnswer(isCorrect: boolean) {
    isCorrect ? this.onCorrectAnswer() : this.onWrongAnswer();
    this.stopwatchSvc.countTillNextQuestion();
    this.stopwatchSvc.callAfterDelay(() => this.getNewQuestion());
  }

  onCorrectAnswer(): void {
    this.statistic = { lives: this.statistic.lives, score: this.statistic.score + 1 };
  }

  onWrongAnswer(): void {
    this.statistic = { lives: this.statistic.lives - 1, score: this.statistic.score };
    if (this.statistic.lives < 0) {
      this.notificationMessage = 'You lost and will be redirected in';
      this.stopwatchSvc.callAfterDelay(() => {
        this.isGameOver = true;
      });
    }
  }

  onRestart(): void {
    this.statistic = { lives: 1, score: 0 };
    this.notificationMessage = 'Next question in';
    this.isGameOver = false;
  }
}
