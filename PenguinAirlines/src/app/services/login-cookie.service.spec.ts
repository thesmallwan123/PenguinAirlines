import { TestBed } from '@angular/core/testing';

import { loginService } from './login-cookie.service';

describe('CheckCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: loginService = TestBed.get(loginService);
    expect(service).toBeTruthy();
  });
});
