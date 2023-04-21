import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchCouponComponent } from './lunch-coupon.component';

describe('LunchCouponComponent', () => {
  let component: LunchCouponComponent;
  let fixture: ComponentFixture<LunchCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
