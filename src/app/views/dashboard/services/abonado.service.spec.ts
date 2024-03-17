import { TestBed } from '@angular/core/testing';

import { AbonadoService } from './abonado.service';

describe('AbonadoService', () => {
  let service: AbonadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
