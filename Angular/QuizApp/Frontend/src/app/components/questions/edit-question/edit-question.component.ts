import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../models/question';
import { TransformService } from '../../../services/transform.service';

@Component({
  selector: 'app-edit-question',
  providers: [TransformService],
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  @Input() question: Question;

  @Output() invokeEditQuestion = new EventEmitter<Question>();
  @Output() editDone = new EventEmitter<string>();

  editQuestionForm: FormGroup;

  constructor(private fb: FormBuilder, private transform: TransformService) {
    this.editQuestionForm = this.fb.group({
      _id: ['', Validators.required],
      description: ['', Validators.required],
      answer0: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      is_correct: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.editQuestionForm.patchValue({
      _id: this.question._id,
      description: this.question.description,
      answer0: this.question.answers[0].answer,
      answer1: this.question.answers[1].answer,
      answer2: this.question.answers[2].answer,
      answer3: this.question.answers[3].answer,
      is_correct: this.getCorrectIndex()
    });
  }

  getCorrectIndex(): number {
    let index: number;
    this.question.answers.forEach((answer, i) => {
      if (answer.is_correct === true) {
        index = i;
      }
    });
    return index;
  }

  onSubmit() {
    this.invokeEditQuestion.emit(this.transform.formValueToQuestion(this.editQuestionForm.value));
    this.editDone.emit('');
  }
}
