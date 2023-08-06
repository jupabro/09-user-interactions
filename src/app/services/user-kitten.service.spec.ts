import { TestBed } from '@angular/core/testing';

import { UserKittenService } from '../services/user-kitten.service';

describe('UserKittenService', () => {
  let service: UserKittenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserKittenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
