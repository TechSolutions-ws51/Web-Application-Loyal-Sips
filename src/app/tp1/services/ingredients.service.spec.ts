import { TestBed } from '@angular/core/testing';

import { IngredientsService } from './ingredients.service';

describe('StudentsService', () => {
  let service: IngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
