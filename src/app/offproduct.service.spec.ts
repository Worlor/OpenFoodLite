import { TestBed, inject } from '@angular/core/testing';

import { OffproductService } from './offproduct.service';

describe('OffproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffproductService]
    });
  });

  it('should be created', inject([OffproductService], (service: OffproductService) => {
    expect(service).toBeTruthy();
  }));
});
