import { TestBed } from '@angular/core/testing';

import { NastavnikResolver } from './nastavnik.resolver';

describe('NastavnikResolver', () => {
  let resolver: NastavnikResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NastavnikResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
