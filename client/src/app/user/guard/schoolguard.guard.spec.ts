import { TestBed } from '@angular/core/testing';

import { SchoolguardGuard } from './schoolguard.guard';

describe('SchoolguardGuard', () => {
  let guard: SchoolguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchoolguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
