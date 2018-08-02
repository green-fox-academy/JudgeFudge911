import { TestBed, inject } from '@angular/core/testing';

import { RandomDogService } from './random-dog.service';

describe('RandomDogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomDogService]
    });
  });

  it('should be created', inject([RandomDogService], (service: RandomDogService) => {
    expect(service).toBeTruthy();
  }));
});
