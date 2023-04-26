import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSearchDropdownComponent } from './mat-search-dropdown.component';

describe('MatSearchDropdownComponent', () => {
  let component: MatSearchDropdownComponent;
  let fixture: ComponentFixture<MatSearchDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSearchDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSearchDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
