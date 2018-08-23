import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-current-question',
  templateUrl: './currentQuestion.component.html',
  styleUrls: ['./currentQuestion.component.css']
})
export class CurrentQuestionComponent implements OnChanges{
  @Input()
  quest: Question;

  @Output() userAnswer = new EventEmitter<number>();

  clickedAnswerIndex: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.clickedAnswerIndex = undefined;
  }

  handleUserInput(index: number): void {
    this.clickedAnswerIndex = index;
    this.userAnswer.emit(index);
  }
}
