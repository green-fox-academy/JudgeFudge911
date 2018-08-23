import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()
  question: Question;

  @Output()
  delete = new EventEmitter<string>();

  @Output()
  select = new EventEmitter<Question>();

  constructor() {}

  ngOnInit() {}


}
