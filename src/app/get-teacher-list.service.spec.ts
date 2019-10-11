import { TestBed } from '@angular/core/testing';

import { GetTeacherListService } from './get-teacher-list.service';

describe('GetTeacherListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTeacherListService = TestBed.get(GetTeacherListService);
    expect(service).toBeTruthy();
  });
});
