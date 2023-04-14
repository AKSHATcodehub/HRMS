import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDialogBoxComponent } from './covid-dialog-box.component';

describe('CovidDialogBoxComponent', () => {
  let component: CovidDialogBoxComponent;
  let fixture: ComponentFixture<CovidDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
