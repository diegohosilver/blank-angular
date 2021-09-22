import { TestBed } from '@angular/core/testing';

import { DirectorioService } from './directorio.service';

describe('DirectorioService', () => {
  let service: DirectorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
