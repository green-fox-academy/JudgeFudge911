import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { log } from 'util';
import { convertInjectableProviderToFactory } from '@angular/core/src/di/injectable';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  answerClass: String = 'b-answers__answer';
  score: number;
  question: String;
  answers: String[];

  constructor(private svc: QuestionService) {
    this.score = 0;
  }

  ngOnInit() {
    this.renderNewQuestion();
  }

  renderNewQuestion() {
    this.svc.getRandomQuestion().subscribe(data => {
      this.question = data.question;
      this.answers = data.answers;
    });
  }

  checkAnswer(answer: Object) {
    setTimeout(() => {
      answer.is_correct ? this.correct() : this.incorrect();
    }, 1000);
  }

  correct() {
    this.score++;
    this.renderNewQuestion();
  }

  incorrect() {
    this.renderNewQuestion();
  }
}
