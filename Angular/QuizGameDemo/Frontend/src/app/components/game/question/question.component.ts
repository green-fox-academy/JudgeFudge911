import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from '../../../models/question';
import { Answer } from '../../../models/answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges{
  @Input()
  quest: Question;

  @Output() userAnswer = new EventEmitter<boolean>();

  clickedAnswerIndex: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.clickedAnswerIndex = undefined;
  }

  handleUserInput(clickedAnswer: Answer, index: number): void {
    this.clickedAnswerIndex = index;
    this.userAnswer.emit(clickedAnswer.isCorrect);
  }
}
