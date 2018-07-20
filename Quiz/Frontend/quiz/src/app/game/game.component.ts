import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

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
}
