import { TestBed } from '@angular/core/testing';

import { SutroLibService } from './sutro-lib.service';

describe('SutroLibService', () => {
  let service: SutroLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SutroLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
