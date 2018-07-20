import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './quiestion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  getRandomQuestion(): Observable<Question> {
    return this.http.get<Question>('/api/game');
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('/api/questions');
  }

  deleteQuestion(id): Observable<Question> {
    return this.http.delete<Question>(`/api/questions/${id}`);
  }
}
