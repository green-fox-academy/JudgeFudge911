import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  getRandom(): Observable<Question> {
    return this.http.get<Question>('/api/game');
  }
}
