import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question;

  @Output() editId = new EventEmitter<string>();
  @Output() deleteId = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  toggleEditView(_id: string) {
    this.editId.emit(_id);
  }

  invokeDeleteQuestion(_id: string) {
    this.deleteId.emit(_id);
  }
}
