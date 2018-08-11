import { TestBed, inject } from '@angular/core/testing';

import { TransformService } from './transform.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

describe('TransformService', () => {
  let transformSpy: jasmine.SpyObj<TransformService>;
  let fb: FormBuilder;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('TransformService', ['formValueToQuestion']);
    fb = new FormBuilder();
    TestBed.configureTestingModule({
      providers: [{ provide: TransformService, useValue: spy }]
    });
    transformSpy = TestBed.get(TransformService);
  });

  it('should return a Question object when input is with id', () => {
    const testForm = fb.group({
      _id: ['0'],
      description: ['test'],
      answer0: ['test'],
      answer1: ['test'],
      answer2: ['test'],
      answer3: ['test'],
      is_correct: ['3']
    });
    expect(testForm.value).toBe({
      _id: '0',
      description: 'test',
      answers: [
        { answer: 'test', is_correct: false } as Answer,
        { answer: 'test', is_correct: false } as Answer,
        { answer: 'test', is_correct: false } as Answer,
        { answer: 'test', is_correct: true } as Answer
      ]
    } as Question);
  });
});
