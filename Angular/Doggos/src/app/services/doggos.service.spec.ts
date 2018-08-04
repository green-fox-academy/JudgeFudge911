import { TestBed, inject } from '@angular/core/testing';

import { DoggosService } from './doggos.service';

describe('DoggosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoggosService]
    });
  });

  it('should be created', inject([DoggosService], (service: DoggosService) => {
    expect(service).toBeTruthy();
  }));
});
