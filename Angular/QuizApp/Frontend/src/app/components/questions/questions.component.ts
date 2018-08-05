import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionsDatabaseService } from '../../services/questionsDatabase.service';
import { QuestionsStateService } from '../../services/questions-state.service';
@Component({
  selector: 'app-questions',
  providers: [QuestionsDatabaseService, QuestionsStateService],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private _questions: Question[];
  currentEditId = '';

  constructor(private questionDatabaseSvc: QuestionsDatabaseService, private questionStateSvc: QuestionsStateService) {}

  ngOnInit() {
    this.renderQuestions();
  }

  renderQuestions() {
    this.questionDatabaseSvc.get().subscribe(result => (this._questions = result), err => console.error(err));
  }

  get questions() {
    return this._questions;
  }

  addQuestion(question: Question): void {
    this.questionDatabaseSvc.add(question).subscribe(
      result => this.questionStateSvc.add(result),
      err => console.error(err),
      () => {
        this.renderQuestions();
      }
    );
  }

  editQuestion(question: Question): void {
    this.questionDatabaseSvc.edit(question).subscribe(
      () => {
        this.questionStateSvc.edit(question);
      },
      err => console.error(err),
      () => {
        this.renderQuestions();
      }
    );
  }

  deleteQuestion(_id: string): void {
    this.questionDatabaseSvc.delete(_id).subscribe(
      () => this.questionStateSvc.delete(_id),
      err => console.error(err),
      () => {
        this.renderQuestions();
      }
    );
  }

  toggleEdit(_id: string) {
    this.currentEditId = this.currentEditId === _id ? '' : _id;
  }

  closeEdit() {
    this.currentEditId = '';
  }
}
