import { TestBed } from '@angular/core/testing';

import { KittenListService } from './kitten-list.service';

describe('KittenListService', () => {
  let service: KittenListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KittenListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
