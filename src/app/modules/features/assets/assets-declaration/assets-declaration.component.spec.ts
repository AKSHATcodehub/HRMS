import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDeclarationComponent } from './assets-declaration.component';

describe('AssetsDeclarationComponent', () => {
  let component: AssetsDeclarationComponent;
  let fixture: ComponentFixture<AssetsDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
