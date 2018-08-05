import { Injectable } from '@angular/core';
import { QuestionsDatabaseService } from './questionsDatabase.service';
import { Question } from '../models/question';

@Injectable()
export class QuestionsStateService {
  private _questions: Question[];

  constructor(private questionDatabaseSvc: QuestionsDatabaseService) {
    this.questionDatabaseSvc.get().subscribe(result => (this._questions = result), err => console.error(err));
  }

  get questions(): Question[] {
    return this._questions;
  }

  add(question: Question) {
    this._questions = [...this._questions, question];
  }

  edit(editedQuestion: Question) {
    this._questions = this._questions.map(question => {
      return question._id === editedQuestion._id ? editedQuestion : question;
    });
  }

  delete(_id: string) {
    this._questions = this._questions.filter(question => question._id !== _id);
  }
}
