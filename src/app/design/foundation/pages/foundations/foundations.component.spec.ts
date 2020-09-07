import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationsComponent } from './foundations.component';

describe('FoundationsComponent', () => {
  let component: FoundationsComponent;
  let fixture: ComponentFixture<FoundationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
