import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFitnessComponent } from './health-fitness.component';

describe('HealthFitnessComponent', () => {
  let component: HealthFitnessComponent;
  let fixture: ComponentFixture<HealthFitnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthFitnessComponent]
    });
    fixture = TestBed.createComponent(HealthFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
