import { TestBed } from '@angular/core/testing';

import { CheckCookieService } from './login.service';

describe('CheckCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckCookieService = TestBed.get(CheckCookieService);
    expect(service).toBeTruthy();
  });
});
