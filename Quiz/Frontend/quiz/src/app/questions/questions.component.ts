import { Component, OnInit } from '@angular/core';
import { Question } from '../quiestion';
import { QuestionService } from '../question.service';
import { log } from 'util';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];

  constructor(private svc: QuestionService) {}

  ngOnInit() {
    this.svc.getAllQuestions().subscribe({
      next: data => {
        this.questions = data;
      },
      error: err => console.error(err)
    });
  }

  editQuestion(question: Question) {
    //TODO edit pop out
    console.log('Editting question...');
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

  onSubmit(form: FormData) {
    //TODO
    console.log(form);
  }
}
