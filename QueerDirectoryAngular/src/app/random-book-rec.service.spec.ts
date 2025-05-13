import { TestBed } from '@angular/core/testing';

import { RandomBookRecService } from './random-book-rec.service';

describe('RandomBookRecService', () => {
  let service: RandomBookRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomBookRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
