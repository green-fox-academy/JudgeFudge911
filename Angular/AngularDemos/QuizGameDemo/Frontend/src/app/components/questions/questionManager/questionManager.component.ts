import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/question';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-manager ',
  templateUrl: './questionManager.component.html',
  styleUrls: ['./questionManager.component.css']
})
export class QuestionManagerComponent implements OnInit {
  @Input()
  question: Question;

  @Output()
  save = new EventEmitter<Question>();

  @Output()
  unselect = new EventEmitter<void>();

  form: FormGroup;

  title: string;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      _id: [''],
      description: ['', Validators.required],
      answers: this.fb.array(['', '', '', ''], Validators.required),
      correctId: [null, Validators.required]
    });
  }

  ngOnInit() {
    if (this.question && this.question._id) {
      this.form.patchValue(this.question);
    } else {
      this.title = 'Add new question';
    }
  }

  submit() {
    this.save.emit(this.form.value as Question);
    this.form.reset();
  }
}
