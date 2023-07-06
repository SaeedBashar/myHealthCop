import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportPlacesComponent } from './sport-places.component';

describe('SportPlacesComponent', () => {
  let component: SportPlacesComponent;
  let fixture: ComponentFixture<SportPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
