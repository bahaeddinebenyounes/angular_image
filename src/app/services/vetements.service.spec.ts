import { TestBed } from '@angular/core/testing';

import { vetementsService } from './vetements.service';

describe('VetementsService', () => {
  let service: vetementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(vetementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
