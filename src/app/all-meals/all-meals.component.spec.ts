import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMealsComponent } from './all-meals.component';

describe('AllMealsComponent', () => {
  let component: AllMealsComponent;
  let fixture: ComponentFixture<AllMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMealsComponent]
    });
    fixture = TestBed.createComponent(AllMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
