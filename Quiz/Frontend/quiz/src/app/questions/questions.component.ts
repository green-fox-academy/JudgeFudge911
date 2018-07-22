import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];

  edit = { index: -1, isToggled: false };

  constructor(private svc: QuestionService) {}

  ngOnInit() {
    this.renderQuestions();
  }

  renderQuestions() {
    this.svc.getAllQuestions().subscribe({
      next: data => {
        this.questions = data;
      },
      error: err => console.error(err)
    });
  }

  deleteQuestion(question: Question) {
    this.questions = this.questions.filter(e => {
      if (e !== question) {
        return e;
      }
    });
    this.svc.deleteQuestion(question._id).subscribe({
      next: result => console.log(result),
      error: err => console.error(err)
    });
  }

  toggleEdit(index: number): void {
    if (this.edit.index === index) {
      this.edit = { index: index, isToggled: !this.edit.isToggled };
    } else {
      this.edit = { index: index, isToggled: true };
    }
  }
}
