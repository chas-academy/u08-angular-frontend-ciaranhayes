import { TestBed } from '@angular/core/testing';

import { GetGenreService } from './get-genre.service';

describe('GetGenreService', () => {
  let service: GetGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
