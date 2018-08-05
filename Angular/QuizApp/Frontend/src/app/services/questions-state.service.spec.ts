import { TestBed, inject } from '@angular/core/testing';

import { QuestionsStateService } from './questions-state.service';

describe('QuestionsStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsStateService]
    });
  });

  it('should be created', inject([QuestionsStateService], (service: QuestionsStateService) => {
    expect(service).toBeTruthy();
  }));
});
