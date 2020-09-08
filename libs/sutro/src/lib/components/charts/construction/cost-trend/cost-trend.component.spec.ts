import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostTrendComponent } from './cost-trend.component';

describe('CostTrendComponent', () => {
  let component: CostTrendComponent;
  let fixture: ComponentFixture<CostTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
