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

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>('/api/questions');
  }

  delete(id: string): Observable<Question> {
    return this.http.delete<Question>(`/api/questions/${id}`);
  }

  edit(question: Question): Observable<Question> {
    return this.http.post<Question>('/api/questions', question);
  }

  add(question: Question): Observable<Question> {
    return this.http.post<Question>('/api/questions', question);
  }
}
