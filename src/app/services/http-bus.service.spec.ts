import { TestBed } from '@angular/core/testing';

import { HttpBusService } from './http-bus.service';

describe('HttpBusService', () => {
  let service: HttpBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
