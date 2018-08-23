import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Question } from '../../../models/question';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.css']
})
export class QuestionManagerComponent implements OnInit {
  @Input()
  question: Question;

  @Output()
  save = new EventEmitter<Question>();

  form: FormGroup;

  title: string;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      _id: [''],
      description: ['', Validators.required],
      answers: this.fb.array(['', '', '', ''], Validators.required),
      correctId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.question ? this.form.patchValue(this.question) : (this.title = 'Add new quesiton');
  }

  submit() {
    if (this.form.dirty && this.form.valid) {
      this.save.emit(this.form.value as Question);
      this.form.reset();
    }
  }
}
