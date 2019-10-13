import { TestBed } from '@angular/core/testing';

import { ServerLinkService } from './server-link.service';

describe('ServerLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerLinkService = TestBed.get(ServerLinkService);
    expect(service).toBeTruthy();
  });
});
