import { TestBed } from '@angular/core/testing';

import { login } from './login-cookie.service';

describe('CheckCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: login = TestBed.get(login);
    expect(service).toBeTruthy();
  });
});