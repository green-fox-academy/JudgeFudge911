import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  answerClass = 'b-answers__answer';
  score: number;
  lives: number;
  isGameOver: boolean;
  question: string;
  answers: Answer[];

  constructor(private svc: QuestionService) {
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
  }

  ngOnInit() {
    this.renderNewQuestion();
  }

  renderNewQuestion() {
    this.svc.getRandomQuestion().subscribe({
      next: data => {
        this.question = data.question;
        this.answers = data.answers;
      },
      error: err => console.error(err)
    });
  }

  checkAnswer(answer: Answer) {
    setTimeout(() => {
      answer.is_correct ? this.correct() : this.incorrect();
    }, 1000);
  }

  correct() {
    this.score++;
    this.renderNewQuestion();
  }

  incorrect() {
    this.lives--;
    if (this.lives === -1) {
      this.isGameOver = true;
      return;
    }
    this.renderNewQuestion();
  }

  restartGame() {
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
    this.renderNewQuestion();
  }
}
