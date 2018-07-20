import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  question: Object;

  constructor(private svc: QuestionService) {}

  ngOnInit() {
    this.svc.getRandomQuestion().subscribe(data => (this.question = data));
  }
}
