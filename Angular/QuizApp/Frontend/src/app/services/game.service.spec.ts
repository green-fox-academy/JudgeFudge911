import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GameService } from './game.service';
import { Question } from '../models/question';

describe('GameService testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const testUrl = '/data';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return a random Question', inject([GameService], (service: GameService) => {
    const data: Question = {
      _id: '1',
      description: 'hello',
      answers: [
        { answer: '0', is_correct: true },
        { answer: '1', is_correct: false },
        { answer: '2', is_correct: false },
        { answer: '3', is_correct: false }
      ]
    };

    httpClient.get<Question>(testUrl).subscribe(result => expect(result).toEqual(data));

    const req = httpTestingController.expectOne(testUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(data);
  }));

  it('should console.error on 404 error', inject([GameService], (service: GameService) => {
    const emsg = 'deliberate 404 error';

    httpClient.get<Question>(testUrl).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testUrl);

    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  }));
});
