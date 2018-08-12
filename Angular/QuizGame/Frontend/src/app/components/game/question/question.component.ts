import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/question';
import { Answer } from '../../../models/answer';
import { StopwatchService } from '../../../services/stopwatch.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [StopwatchService]
})
export class QuestionComponent implements OnInit {
  @Input()
  quest: Question;

  @Output()
  userAnswer = new EventEmitter<boolean>();

  clickedAnswerId: number;

  constructor(private stopwatchSvc: StopwatchService) {}

  ngOnInit() {}

  handleUserInput(userInput: Answer, index: number): void {
    this.userAnswer.emit(userInput.is_correct);
    this.clickedAnswerId = index;
    this.stopwatchSvc.callAfterDelay(() => (this.clickedAnswerId = undefined));
  }
}
