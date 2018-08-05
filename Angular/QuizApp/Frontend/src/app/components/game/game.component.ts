import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
@Component({
  selector: 'app-game',
  providers: [GameService],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private isGameOver = false;

  private questionLoaded: boolean;

  private score: number;

  private maxLives = 3;
  private lives: number;

  private currentQuestion: Question;

  private timer = 0;
  private timeBetweenQuestions = 3000;

  constructor(private gameSvc: GameService) {}

  ngOnInit() {
    this.renderNewQuestion();
    this.score = 0;
    this.lives = this.maxLives;
  }

  renderNewQuestion() {
    this.gameSvc.get().subscribe({
      next: data => (this.currentQuestion = data),
      error: err => console.error(err)
    });
    this.questionLoaded = true;
  }

  incrementScore() {
    this.score++;
  }

  resetScore() {
    this.score = 0;
  }

  decrementLives() {
    this.lives--;
  }

  resetLives() {
    this.lives = this.maxLives;
  }

  userAnswer(answer: Answer) {
    answer.is_correct ? this.correctAnswer() : this.incorrectAnswer();
    this.lives >= 0 ? this.loadQuestionWithDelay() : this.gameOver();
  }

  correctAnswer() {
    this.incrementScore();
  }

  incorrectAnswer() {
    this.decrementLives();
  }

  countDown() {
    this.timer = this.timeBetweenQuestions / 1000;
    const counter = setInterval(() => {
      this.timer--;
    }, 1000);
    setTimeout(() => {
      clearInterval(counter);
    }, this.timeBetweenQuestions);
  }

  loadQuestionWithDelay() {
    this.questionLoaded = false;
    this.countDown();
    setTimeout(() => {
      this.renderNewQuestion();
    }, this.timeBetweenQuestions);
  }

  gameOver() {
    this.isGameOver = true;
  }

  restart(isRestart: boolean) {
    if (isRestart) {
      this.isGameOver = false;
      this.score = 0;
      this.lives = this.maxLives;
    }
  }
}
