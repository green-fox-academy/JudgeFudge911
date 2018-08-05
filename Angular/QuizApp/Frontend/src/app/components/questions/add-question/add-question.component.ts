import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Question } from '../../../models/question';
import { TransformService } from '../../../services/transform.service';
@Component({
  selector: 'app-add-question',
  providers: [TransformService],
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  @Output() invokeAddQuestion = new EventEmitter<Question>();
  @Output() focusOnSubmit = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) myForm;

  addQuestionForm: FormGroup;

  constructor(private fb: FormBuilder, private transform: TransformService) {
    this.addQuestionForm = this.fb.group({
      description: ['', Validators.required],
      answer0: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      is_correct: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.invokeAddQuestion.emit(this.transform.formValueToQuestion(this.addQuestionForm.value));
    this.myForm.resetForm();
    this.focusOnSubmit.emit(true);
  }
}
