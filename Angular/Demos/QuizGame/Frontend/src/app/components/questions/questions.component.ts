import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';

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
      .subscribe((response: Question[]) => (this.questions = response), err => console.error(err));
  }

  onDelete(id: string) {
    this.questionSvc.delete(id).subscribe(() => (this.questions = this.questions.filter(e => e._id != id)));
  }

  onSelect(question: Question) {
    if (this.selected === question) {
      this.selected = undefined;
    } else {
      this.selected = question;
    }
  }

  onSave(question: Question) {
    if (question._id === '') {
      this.questionSvc.add(question).subscribe(
        (response: Question) => this.questions = [...this.questions, response]
      );
    } else {
      this.questionSvc.edit(question).subscribe(
        () => this.questions = this.questions.map(e => e._id === question._id ? question : e);
      );
    }
  }
}
