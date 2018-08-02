import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  get(input: string): Observable<any> {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=2e11b33cc6091bfcde38b9180eeff743'
    );
  }
}
