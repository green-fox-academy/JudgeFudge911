import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { FormGroup } from '@angular/forms';

@Injectable()
export class TransformService {
  constructor() {}

  formValueToQuestion(form: FormGroup['value']): Question {
    return {
      _id: form._id ? form._id : '',
      description: form.description,
      answers: [
        { answer: form.answer1, is_correct: form.is_correct === '0' ? true : false },
        { answer: form.answer0, is_correct: form.is_correct === '1' ? true : false },
        { answer: form.answer2, is_correct: form.is_correct === '2' ? true : false },
        { answer: form.answer3, is_correct: form.is_correct === '3' ? true : false }
      ]
    } as Question;
  }
}
