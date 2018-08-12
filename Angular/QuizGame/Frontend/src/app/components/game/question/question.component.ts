import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Answer } from '../../../models/answer';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  @Input()
  question: Question;

  @Output()
  userAnswer = new EventEmitter<boolean>();

  clickedAnswerId: number;

  ngOnChanges(change: SimpleChanges): void {
    const currentValue = change.question.currentValue;
    const previousValue = change.question.previousValue;
    if (currentValue && previousValue && currentValue._id !== previousValue._id) {
      this.clickedAnswerId = undefined;
    }
  }

  handleUserInput(userInput: Answer, indexOfClickedAnswer: number): void {
    this.clickedAnswerId = indexOfClickedAnswer;
    this.userAnswer.emit(userInput.isCorrect);
  }
}
