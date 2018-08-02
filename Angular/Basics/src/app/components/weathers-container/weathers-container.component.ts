import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service.service';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-weathers-container',
  templateUrl: './weathers-container.component.html',
  styleUrls: ['./weathers-container.component.css']
})
export class WeathersContainerComponent implements OnInit {
  weathers: Weather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.get('hello').subscribe({
      next: data => {
        this.weathers.push({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          icon: data.weather[0].icon
        } as Weather);
      }
    });
  }
}
