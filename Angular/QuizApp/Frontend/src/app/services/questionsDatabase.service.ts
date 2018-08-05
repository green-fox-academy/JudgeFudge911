import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable()
export class QuestionsDatabaseService {
  constructor(private http: HttpClient) {}

  get(): Observable<Question[]> {
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
