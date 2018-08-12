import { Component, OnInit, Input } from '@angular/core';
import { Statistics } from '../../../models/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input()
  stats: Statistics;

  constructor() {}

  ngOnInit() {}
}
