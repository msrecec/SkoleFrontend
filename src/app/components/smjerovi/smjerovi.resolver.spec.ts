import { TestBed } from '@angular/core/testing';

import { SmjeroviResolver } from './smjerovi.resolver';

describe('SmjeroviResolver', () => {
  let resolver: SmjeroviResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SmjeroviResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
