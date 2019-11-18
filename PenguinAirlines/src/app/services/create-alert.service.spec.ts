import { TestBed } from '@angular/core/testing';

import { CreateAlertService } from './create-alert.service';

describe('CreateAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAlertService = TestBed.get(CreateAlertService);
    expect(service).toBeTruthy();
  });
});
