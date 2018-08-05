import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Question } from '../../../models/question';
import { Answer } from '../../../models/answer';

@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.scss']
})
export class CurrentQuestionComponent {
  @Input() question: Question;
  @Input() timer: number;
  @Input() questionLoaded: boolean;

  @Output() clickedAnswer = new EventEmitter<Answer>();

  constructor() {}

  onAnswerClick(answer: Answer) {
    this.question.answers.forEach((e, index) => {
      const button = document.getElementById(`${index}`);
      console.log(button);
      if (e === answer) {
        button.classList.add('--clicked');
        console.log('kutya');
      }
      e.is_correct ? button.classList.add('--correct') : button.classList.add('--inCorrect');
    });
    this.clickedAnswer.emit(answer);
  }
}
