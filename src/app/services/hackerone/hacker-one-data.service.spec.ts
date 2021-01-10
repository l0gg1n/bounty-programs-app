import { TestBed } from '@angular/core/testing';

import { HackerOneDataService } from './hacker-one-data.service';

describe('HackerOneDataService', () => {
  let service: HackerOneDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerOneDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
