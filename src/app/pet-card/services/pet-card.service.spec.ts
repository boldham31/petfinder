import { TestBed, inject } from '@angular/core/testing';

import { PetCardService } from './pet-card.service';

describe('PetCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetCardService]
    });
  });

  it('should be created', inject([PetCardService], (service: PetCardService) => {
    expect(service).toBeTruthy();
  }));
});
