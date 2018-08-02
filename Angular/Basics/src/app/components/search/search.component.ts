import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      input: ['', Validators.required]
    });
  }

  onSubmit() {
    this.searchTerm.emit(this.searchForm.value.input);
    this.searchForm.reset();
  }
}
