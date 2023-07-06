import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveVisitorsComponent } from './active-visitors.component';

describe('ActiveVisitorsComponent', () => {
  let component: ActiveVisitorsComponent;
  let fixture: ComponentFixture<ActiveVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
