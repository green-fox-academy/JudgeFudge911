import { Component, OnInit } from '@angular/core';
import { Question } from '../quiestion';
import { QuestionService } from '../question.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];

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

  onSubmit(form: NgForm): void {
    const newQuestion = {
      question: form.value.question,
      answers: [
        { answer: form.value.answer0, is_correct: false },
        { answer: form.value.answer1, is_correct: false },
        { answer: form.value.answer2, is_correct: false },
        { answer: form.value.answer3, is_correct: false }
      ]
    };
    newQuestion.answers[form.value.isCorrect].is_correct = true;
    this.svc.createQuestion(newQuestion).subscribe({
      next: data => this.renderQuestions(),
      error: err => console.error(err)
    });
  }
}
