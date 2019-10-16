import { TestBed } from '@angular/core/testing';

import { PageBlocksService } from './page-blocks.service';

describe('PageBlocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageBlocksService = TestBed.get(PageBlocksService);
    expect(service).toBeTruthy();
  });
});
