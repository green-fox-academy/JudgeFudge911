import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {
  constructor(private http: HttpClient) {}

  getRandomDoggo(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}
