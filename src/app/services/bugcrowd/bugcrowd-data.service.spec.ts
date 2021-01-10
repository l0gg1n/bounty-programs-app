import { TestBed } from '@angular/core/testing';

import { BugcrowdDataService } from './bugcrowd-data.service';

describe('BugcrowdDataService', () => {
  let service: BugcrowdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugcrowdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
