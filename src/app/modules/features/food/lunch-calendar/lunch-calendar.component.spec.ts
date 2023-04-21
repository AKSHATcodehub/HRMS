import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchCalendarComponent } from './lunch-calendar.component';

describe('LunchCalendarComponent', () => {
  let component: LunchCalendarComponent;
  let fixture: ComponentFixture<LunchCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
