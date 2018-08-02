import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPickerComponent } from './dog-picker.component';

describe('DogPickerComponent', () => {
  let component: DogPickerComponent;
  let fixture: ComponentFixture<DogPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
