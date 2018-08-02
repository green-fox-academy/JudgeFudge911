import { Component } from '@angular/core';
import { WeatherService } from './services/weather-service.service';
import { Weather } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weathers: Weather[] = [];
  constructor(private weatherService: WeatherService) {}

  renderWeather(input: string) {
    this.weatherService.get(input).subscribe({
      next: data => {
        this.weathers.push({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          icon: data.weather.icon
        } as Weather);
      },
      error: err => console.error(err)
    });
  }
}
