import { TestBed } from '@angular/core/testing';

import { APIGetOneService } from './apiget-one.service';

describe('APIGetOneService', () => {
  let service: APIGetOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIGetOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
