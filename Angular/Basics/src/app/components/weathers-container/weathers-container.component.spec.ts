import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersContainerComponent } from './weathers-container.component';

describe('WeathersContainerComponent', () => {
  let component: WeathersContainerComponent;
  let fixture: ComponentFixture<WeathersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
