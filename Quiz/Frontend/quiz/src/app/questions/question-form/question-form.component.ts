import { Component, OnInit, EventEmitter, Output, Input, ViewChild, AfterViewInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import { Question } from '../../question';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit, AfterViewInit {
  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() editQuestion?: Question;

  questionForm = new FormGroup({
    _id: new FormControl(''),
    question: new FormControl('', Validators.required),
    answer1: new FormControl('', Validators.required),
    answer2: new FormControl('', Validators.required),
    answer3: new FormControl('', Validators.required),
    answer4: new FormControl('', Validators.required),
    isCorrect: new FormControl('', Validators.required)
  });

  constructor(private svc: QuestionService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (this.editQuestion) {
      const temp = {
        _id: this.editQuestion._id,
        question: this.editQuestion.question,
        answer1: this.editQuestion.answers[0].answer,
        answer2: this.editQuestion.answers[1].answer,
        answer3: this.editQuestion.answers[2].answer,
        answer4: this.editQuestion.answers[3].answer,
        isCorrect: this.indexOfCorrect(this.editQuestion)
      };
      setTimeout(() => {
        this.questionForm.patchValue(temp);
      });
    }
  }

  indexOfCorrect(question: Question): number {
    let correctIndex = -1;
    question.answers.forEach((e, index) => {
      if (e.is_correct === true) {
        return (correctIndex = index);
      }
    });
    return correctIndex;
  }

  onSubmit(): void {
    const form = this.questionForm.value;
    const newQuestion = {
      _id: form._id,
      question: form.question,
      answers: [
        { answer: form.answer1, is_correct: false },
        { answer: form.answer2, is_correct: false },
        { answer: form.answer3, is_correct: false },
        { answer: form.answer4, is_correct: false }
      ]
    };
    newQuestion.answers[form.isCorrect].is_correct = true;
    this.svc.createQuestion(newQuestion).subscribe({
      next: data => {
        this.questionForm.reset();
        this.save.emit();
      },
      error: err => console.error(err)
    });
  }
}
