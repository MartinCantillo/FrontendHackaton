import { TestBed } from '@angular/core/testing';

import { resgisterClientService } from './register-client.service';

describe('GetClientService', () => {
  let service: resgisterClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(resgisterClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
