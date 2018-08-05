import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  get(): Observable<Question> {
    return this.http.get<Question>('/api/game');
  }
}
