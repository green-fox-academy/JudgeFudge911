import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  answerClass: String = 'b-answers__answer';
  score: Number;
  question: String;
  answers: String[];

  constructor(private svc: QuestionService) {
    this.score = 0;
  }

  ngOnInit() {
    this.svc.getRandomQuestion().subscribe(data => {
      this.question = data.question;
      this.answers = data.answers;
    });
  }

  checkAnswer(answer: Object) {
    this.answerClass = answer.is_correct
      ? 'b-answers__answer b-answer--correct'
      : 'b-answers__answer b-answer--incorrect';
  }
}
