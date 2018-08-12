import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../models/question';

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  getRandom(): Observable<Question> {
    return this.http.get<Question>('/api/game');
  }
}
