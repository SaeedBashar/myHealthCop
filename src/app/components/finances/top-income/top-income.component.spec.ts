import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIncomeComponent } from './top-income.component';

describe('TopIncomeComponent', () => {
  let component: TopIncomeComponent;
  let fixture: ComponentFixture<TopIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
