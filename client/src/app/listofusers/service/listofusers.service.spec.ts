import { TestBed } from '@angular/core/testing';

import { ListofusersService } from './listofusers.service';

describe('ListofusersService', () => {
  let service: ListofusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
