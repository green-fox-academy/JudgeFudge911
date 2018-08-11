import { TestBed, inject } from '@angular/core/testing';

import { QuestionsDatabaseService } from './questionsDatabase.service';

describe('QuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsDatabaseService]
    });
  });
});
