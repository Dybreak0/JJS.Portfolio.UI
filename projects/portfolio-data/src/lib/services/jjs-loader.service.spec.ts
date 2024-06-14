import { TestBed } from '@angular/core/testing';

import { JjsLoaderService } from './jjs-loader.service';

describe('JjsLoaderService', () => {
  let service: JjsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JjsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
