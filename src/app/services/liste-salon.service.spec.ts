import { TestBed, inject } from '@angular/core/testing';

import { ListeSalonService } from './liste-salon.service';

describe('ListeSalonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeSalonService]
    });
  });

  it('should be created', inject([ListeSalonService], (service: ListeSalonService) => {
    expect(service).toBeTruthy();
  }));
});
