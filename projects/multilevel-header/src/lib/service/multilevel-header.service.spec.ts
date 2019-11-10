import { TestBed } from '@angular/core/testing';

import { MultilevelHeaderService } from './multilevel-header.service';

describe('MultilevelHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultilevelHeaderService = TestBed.get(MultilevelHeaderService);
    expect(service).toBeTruthy();
  });
});
