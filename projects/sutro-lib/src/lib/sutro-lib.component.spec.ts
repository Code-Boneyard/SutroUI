import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutroLibComponent } from './sutro-lib.component';

describe('SutroLibComponent', () => {
  let component: SutroLibComponent;
  let fixture: ComponentFixture<SutroLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutroLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutroLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
