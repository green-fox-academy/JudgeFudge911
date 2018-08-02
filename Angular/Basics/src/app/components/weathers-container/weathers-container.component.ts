import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather-service.service';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-weathers-container',
  templateUrl: './weathers-container.component.html',
  styleUrls: ['./weathers-container.component.css']
})
export class WeathersContainerComponent implements OnInit {
  @Input() weathers;

  constructor() {}

  ngOnInit() {}
}
