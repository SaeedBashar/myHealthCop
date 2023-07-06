import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficsComponent } from './traffics.component';

describe('TrafficsComponent', () => {
  let component: TrafficsComponent;
  let fixture: ComponentFixture<TrafficsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
