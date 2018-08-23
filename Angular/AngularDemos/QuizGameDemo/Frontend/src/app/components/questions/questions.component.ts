import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];

  selected: Question;

  constructor(private questionSvc: QuestionService) {}

  ngOnInit() {
    this.questionSvc
      .getAll()
      .subscribe((resultQuestions: Question[]) => (this.questions = resultQuestions), err => console.error(err));
  }

  onSave(question: Question): void {
    if (question && question._id === '') {
      this.questionSvc
        .add(question)
        .subscribe((response: Question) => (this.questions = [...this.questions, response]), err => console.error(err));
    } else {
      this.questionSvc
        .edit(question)
        .subscribe(
          () => (this.questions = this.questions.map(e => (e._id === question._id ? question : e))),
          err => console.error(err)
        );
    }
    this.selected = undefined;
  }

  onSelect(question: Question): void {
    this.selected = question === this.selected ? undefined : question;
  }

  onDelete(id: string): void {
    this.questionSvc
      .delete(id)
      .subscribe(() => (this.questions = this.questions.filter(e => e._id !== id)), err => console.error(err));
  }
}
