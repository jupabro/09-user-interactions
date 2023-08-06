import { TestBed } from '@angular/core/testing';

import { FormPopupService } from '../services/form-popup.service';

describe('FormPopupService', () => {
  let service: FormPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
