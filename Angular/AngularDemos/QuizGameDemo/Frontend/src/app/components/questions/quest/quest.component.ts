import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  @Input() question: Question;

  @Output() select = new EventEmitter<Question>();

  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
