import { TestBed } from '@angular/core/testing';

import { ReviewBackgroundsService } from './review-backgrounds.service';

describe('ReviewBackgroundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewBackgroundsService = TestBed.get(ReviewBackgroundsService);
    expect(service).toBeTruthy();
  });
});
